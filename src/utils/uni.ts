import type { Daten, TodoistTask, UniErledigt } from '../types/daten';
import { addDays, daysBetween } from './date';
import { toBerlinDate } from './habits';
import { isoWeekday, parseRecurrence } from './recurrence';
import { getDurationMinutes, getExcludedProjectIds, getProjectTree } from './todoist';

// Uni-Stunden der Woche und Wochenziel, portiert aus dem Tagesbrief (scripts/uni.py, references/uni.md)

const DEFAULT_MINUTES = 30;

// Was als Uni-Aufgabe zählt: Projekt „Uni“ samt Unterprojekten oder Kursbezug im Titel (im Zweifel nicht)
const UNI_PROJECT_NAMES = ['uni'];
const UNI_SHORTCUTS = /\b(CC|VS|SA|DuD|FED)\b/;
const UNI_WORDS = /cloud computing|verteilte systeme|softwarearchitektur|\bmodul|\blab\b|\bbeleg|vorlesung|übung|nacharbeiten/i;

export type UniWeek = {
    doneHours: number;     // auf Viertelstunden gerundet
    targetHours: number;   // Wochenziel, auf Viertelstunden gerundet
    share: number;         // 0–1, Füllung des Balkens
};

/** Rundet wie Python round(): bei genau .5 zur geraden Zahl. So stimmen die Werte mit dem Tagesbrief überein. */
function roundHalfEven(x: number): number {
    const r = Math.round(x);
    return Math.abs(x % 1) === 0.5 && r % 2 !== 0 ? r - 1 : r;
}

const toQuarter = (hours: number) => roundHalfEven(hours * 4) / 4;

const isRecurring = (task: TodoistTask) => Boolean(task.recurring) && String(task.recurring).toLowerCase() !== 'false';

type Node = { duration: number | null; parent: string | null; deadline: string | null; open: boolean };

/** Offene Aufgaben und die Abschlüsse dieser Woche als Eltern-Kind-Baum. */
class TaskTree {
    nodes = new Map<string, Node>();
    children = new Map<string, string[]>();

    constructor(open: TodoistTask[], done: UniErledigt[]) {
        for (const task of open) {
            this.nodes.set(task.id, {
                duration: getDurationMinutes(task),
                parent: task.parentId ?? null,
                deadline: task.deadlineDate?.slice(0, 10) ?? null,
                open: true,
            });
        }
        for (const event of done) {
            if (!this.nodes.has(event.id)) {
                this.nodes.set(event.id, { duration: event.dauer_min, parent: event.parentId, deadline: null, open: false });
            }
        }
        for (const [id, node] of this.nodes) {
            if (node.parent) {
                if (!this.children.has(node.parent)) this.children.set(node.parent, []);
                this.children.get(node.parent)!.push(id);
            }
        }
    }

    isParent(id: string): boolean {
        return (this.children.get(id)?.length ?? 0) > 0;
    }

    /** Minuten einer untersten Aufgabe: eigene Dauer, sonst Anteil am Rest der Oberaufgabe, sonst 30 Min. */
    minutes(id: string): number {
        const node = this.nodes.get(id)!;
        if (node.duration) return node.duration;
        const parent = node.parent ? this.nodes.get(node.parent) : undefined;
        if (parent?.duration) {
            const siblings = this.children.get(node.parent!) ?? [];
            const withTime = siblings.reduce((sum, s) => sum + (this.nodes.get(s)!.duration || 0), 0);
            const withoutTime = siblings.filter((s) => !this.nodes.get(s)!.duration);
            const rest = parent.duration - withTime;
            if (rest > 0 && withoutTime.length) return rest / withoutTime.length;
        }
        return DEFAULT_MINUTES;
    }

    /** Eigene Frist oder die der nächsten Oberaufgabe mit Frist. */
    deadline(id: string | null): string | null {
        const seen = new Set<string>();
        while (id && !seen.has(id)) {
            seen.add(id);
            const node = this.nodes.get(id);
            if (!node) return null;
            if (node.deadline) return node.deadline;
            id = node.parent;
        }
        return null;
    }
}

export function getUniWeek(daten: Daten): UniWeek | null {
    const uni = daten.uni;
    if (!uni) return null;

    const today = daten.heute;
    const monday = addDays(today, -(isoWeekday(today) - 1));
    const sunday = addDays(monday, 6);

    const uniProjects = getProjectTree(daten.projekte, UNI_PROJECT_NAMES);
    const excluded = getExcludedProjectIds(daten.projekte, daten.habits?.projekt_id);
    const isUni = (projectId: string | null | undefined, title: string) => {
        if (projectId && excluded.has(projectId)) return false;
        if (projectId && uniProjects.has(projectId)) return true;
        return UNI_SHORTCUTS.test(title) || UNI_WORDS.test(title);
    };

    const open = daten.offen.filter((task) => !isRecurring(task));
    const done = uni.erledigt_woche.filter((event) => isUni(event.projectId, event.content ?? ''));
    const tree = new TaskTree(open, done);
    const openIds = new Set(open.map((task) => task.id));

    // ---- erledigt seit Montag ----
    const doneOnce = new Map<string, number>();
    let doneRecurringMinutes = 0;
    const recurringDays = new Set<string>();
    for (const event of [...done].sort((a, b) => a.zeit.localeCompare(b.zeit))) {
        const day = toBerlinDate(event.zeit);
        if (day < monday || day > today) continue;
        if (event.wiederkehrend) {
            const key = `${event.id}|${day}`;
            if (!recurringDays.has(key)) {
                recurringDays.add(key);
                doneRecurringMinutes += event.dauer_min || DEFAULT_MINUTES;
            }
            continue;
        }
        if (openIds.has(event.id) || tree.isParent(event.id)) continue; // wieder geöffnet oder Oberaufgabe
        doneOnce.set(event.id, event.dauer_min || tree.minutes(event.id));
    }
    const doneNonRecurring = [...doneOnce.values()].reduce((a, b) => a + b, 0) / 60;
    const doneTotal = doneNonRecurring + doneRecurringMinutes / 60;

    // ---- offene Uni-Aufgaben mit Frist: Rest und letzte Frist ----
    let restMinutes = 0;
    let lastDeadline: string | null = null;
    let plannedOpenMinutes = 0;
    for (const task of open) {
        if (!isUni(task.projectId, task.content ?? '')) continue;
        if (tree.isParent(task.id)) continue;
        const minutes = tree.minutes(task.id);
        const deadline = tree.deadline(task.id);
        if (deadline) {
            restMinutes += minutes;
            if (!lastDeadline || deadline > lastDeadline) lastDeadline = deadline;
        }
        const due = task.dueDate?.slice(0, 10);
        if (due && monday <= due && due <= sunday) plannedOpenMinutes += minutes;
    }

    // ---- wiederkehrende Uni-Aufgaben: Wochenlast ----
    const recurring = new Map<string, TodoistTask>();
    for (const task of [...uni.wiederkehrend, ...daten.heute_faellig]) {
        if (isRecurring(task) && isUni(task.projectId, task.content ?? '') && !recurring.has(task.id)) {
            recurring.set(task.id, task);
        }
    }
    let weeklyLoadMinutes = 0;
    for (const task of recurring.values()) {
        const next = task.dueDate?.slice(0, 10) ?? null;
        if (next && next > sunday) continue; // beginnt erst nach dieser Woche
        const isDueOn = parseRecurrence(String(task.recurring), next);
        const occurrences = isDueOn === null ? 1 : [0, 1, 2, 3, 4, 5, 6].filter((i) => isDueOn(addDays(monday, i))).length;
        weeklyLoadMinutes += (getDurationMinutes(task) || DEFAULT_MINUTES) * occurrences;
    }
    const weeklyLoad = weeklyLoadMinutes / 60;

    // ---- Wochenziel ----
    let weeks = 1;
    if (lastDeadline) {
        const deadlineMonday = addDays(lastDeadline, -(isoWeekday(lastDeadline) - 1));
        weeks = Math.max(1, Math.floor(daysBetween(monday, deadlineMonday) / 7) + 1);
    }
    const rest = restMinutes / 60;
    let target = (rest + doneNonRecurring) / weeks + weeklyLoad;
    const planned = doneNonRecurring + plannedOpenMinutes / 60 + weeklyLoad;
    if (planned < target) target = planned;
    target = toQuarter(target);
    if (target <= 0) return null;

    return {
        doneHours: toQuarter(doneTotal),
        targetHours: target,
        share: Math.min(1, doneTotal / target),
    };
}

/** 7.5 → '7½', 16.75 → '16¾', 0.25 → '¼', 5 → '5' */
export function formatQuarterHours(hours: number): string {
    const quarters = roundHalfEven(hours * 4);
    const whole = Math.floor(quarters / 4);
    const fraction = ['', '¼', '½', '¾'][quarters % 4];
    return whole === 0 && fraction ? fraction : `${whole}${fraction}`;
}
