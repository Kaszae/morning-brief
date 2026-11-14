import type { TodoistProject, TodoistTask } from '../types/daten';

// Diese Projekte (samt Unterprojekten) tauchen nirgends auf, wie im Tagesbrief
const EXCLUDED_PROJECT_NAMES = ['einkaufen', 'gewohnheiten', 'habits'];

/** IDs aller Projekte mit einem der Namen (Groß-/Kleinschreibung egal), samt Unterprojekten. */
export function getProjectTree(projects: TodoistProject[], names: string[]): Set<string> {
    const ids = new Set(projects.filter((p) => names.includes(p.name.trim().toLowerCase())).map((p) => p.id));
    let grew = true;
    while (grew) {
        grew = false;
        for (const p of projects) {
            if (p.parentId && ids.has(p.parentId) && !ids.has(p.id)) {
                ids.add(p.id);
                grew = true;
            }
        }
    }
    return ids;
}

/** Einkaufen und Gewohnheiten samt Unterprojekten (dazu optional die ID des Habit-Projekts aus den Daten). */
export function getExcludedProjectIds(projects: TodoistProject[], habitProjectId?: string | null): Set<string> {
    const ids = getProjectTree(projects, EXCLUDED_PROJECT_NAMES);
    if (habitProjectId) ids.add(habitProjectId);
    return ids;
}

/** Oberstes Projekt, z. B. „Uni“ für das Unterprojekt „DuD“. */
export function getTopLevelProject(projects: TodoistProject[], projectId: string): TodoistProject | undefined {
    let project = projects.find((p) => p.id === projectId);
    while (project?.parentId) {
        const parent = projects.find((p) => p.id === project!.parentId);
        if (!parent) break;
        project = parent;
    }
    return project;
}

/** 'Uni › DuD' für Unterprojekte, sonst nur der Name. */
export function getProjectPath(projects: TodoistProject[], projectId: string): string | null {
    const names: string[] = [];
    let project = projects.find((p) => p.id === projectId);
    while (project) {
        names.unshift(project.name);
        project = project.parentId ? projects.find((p) => p.id === project!.parentId) : undefined;
    }
    return names.length ? names.join(' › ') : null;
}

/** '2h', '30m', '2h15m', '1.5h' → Minuten, sonst null. */
export function getDurationMinutes(task: TodoistTask): number | null {
    const text = (task.duration ?? '').trim().toLowerCase();
    let minutes = 0;
    for (const [, number, unit] of text.matchAll(/(\d+(?:[.,]\d+)?)\s*([hmd])/g)) {
        const value = Number(number.replace(',', '.'));
        if (unit === 'h') minutes += value * 60;
        else if (unit === 'm') minutes += value;
        else minutes += value * 24 * 60;
    }
    return minutes ? Math.round(minutes) : null;
}

export function getTaskUrl(taskId: string): string {
    return `https://app.todoist.com/app/task/${taskId}`;
}
