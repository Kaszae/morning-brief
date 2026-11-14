import type { HabitDaten } from '../types/daten';
import { addDays } from './date';
import { isoWeekday, parseRecurrence } from './recurrence';

export type HabitDay = {
    date: string;       // 'YYYY-MM-DD'
    done: number;       // davon erledigt
    due: number;        // an dem Tag fällige Habits
};

const berlinDate = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Berlin',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
});

/** UTC-Zeitstempel → Kalendertag in Berlin ('YYYY-MM-DD'). 0:30 Uhr nachts zählt so zum richtigen Tag. */
export function toBerlinDate(utc: string): string {
    return berlinDate.format(new Date(utc));
}

/**
 * Für jeden Tag der letzten `weeks` Wochen (ab Montag) bis heute:
 * wie viele Gewohnheiten fällig waren und wie viele davon erledigt wurden.
 * Wie im Tagesbrief (scripts/heatmap.py, tageswerte):
 * - Fälligkeit aus dem Wiederholungstext; vor dem Anlagedatum zählt eine Gewohnheit nicht.
 * - Unbekanntes Muster: zählt nur Abschlüsse, nie einen verpassten Tag.
 */
export function getHabitDays(habits: HabitDaten, today: string, weeks = 12): HabitDay[] {
    const doneDays = new Map<string, Set<string>>();
    for (const event of habits.erledigt) {
        const day = toBerlinDate(event.zeit);
        if (!doneDays.has(event.id)) doneDays.set(event.id, new Set());
        doneDays.get(event.id)!.add(day);
    }

    const rules = habits.aufgaben.map((task) => ({
        id: task.id,
        since: task.addedAt ? toBerlinDate(task.addedAt) : null,
        isDueOn: parseRecurrence(String(task.recurring || ''), task.dueDate?.slice(0, 10) ?? null),
    }));

    const start = addDays(today, -(isoWeekday(today) - 1) - (weeks - 1) * 7);
    const days: HabitDay[] = [];
    for (let date = start; date <= today; date = addDays(date, 1)) {
        let due = 0;
        let done = 0;
        for (const habit of rules) {
            if (habit.since && habit.since > date) continue;
            const isDone = doneDays.get(habit.id)?.has(date) ?? false;
            if (habit.isDueOn === null) {
                if (isDone) {
                    due++;
                    done++;
                }
            } else if (habit.isDueOn(date)) {
                due++;
                if (isDone) done++;
            }
        }
        days.push({ date, done: Math.min(done, due), due });
    }
    return days;
}
