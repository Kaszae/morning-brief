import { toISODate } from './date';

export type Habit = {
    id: string;
    name: string;
    weekdays: number[]; // fällig an: 1 = Mo … 7 = So
    addedAt: string;    // 'YYYY-MM-DD', vorher zählt das Habit nicht
};

export type HabitCompletion = {
    habitId: string;
    date: string;       // 'YYYY-MM-DD'
};

export type HabitDay = {
    date: string;       // 'YYYY-MM-DD'
    done: number;       // davon erledigt
    due: number;        // an dem Tag fällige Habits
};

/** Wochentag nach ISO: 1 = Mo … 7 = So */
function isoWeekday(d: Date): number {
    return d.getDay() || 7;
}

/**
 * Für jeden Tag der letzten `weeks` Wochen (ab Montag) bis heute:
 * wie viele Habits fällig waren und wie viele davon erledigt wurden.
 * Abschlüsse an Tagen, an denen das Habit nicht fällig war, zählen nicht.
 */
export function getHabitDays(
    habits: Habit[],
    completions: HabitCompletion[],
    today: Date,
    weeks = 12,
): HabitDay[] {
    const doneSet = new Set(completions.map((c) => `${c.habitId}|${c.date}`));

    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    start.setDate(start.getDate() - (isoWeekday(start) - 1) - (weeks - 1) * 7);
    const end = toISODate(today);

    const days: HabitDay[] = [];
    for (const d = new Date(start); toISODate(d) <= end; d.setDate(d.getDate() + 1)) {
        const date = toISODate(d);
        let due = 0;
        let done = 0;

        for (const habit of habits) {
            if (date < habit.addedAt) continue;
            if (!habit.weekdays.includes(isoWeekday(d))) continue;
            due++;
            if (doneSet.has(`${habit.id}|${date}`)) done++;
        }

        days.push({ date, done, due });
    }
    return days;
}
