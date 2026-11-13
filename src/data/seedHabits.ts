import type { Habit, HabitCompletion } from '../utils/habits';
import { toISODate } from '../utils/date';

export const habits: Habit[] = [
    { id: 'lesen', name: '10 Minuten lesen', weekdays: [1, 2, 3, 4, 5, 6, 7], addedAt: '2026-08-01' },
    { id: 'dehnen', name: 'Dehnen', weekdays: [1, 3, 5], addedAt: '2026-08-01' },
    { id: 'laufen', name: 'Laufen', weekdays: [2, 6], addedAt: '2026-10-01' },
];

// Testdaten: erzeugt Abschlüsse für die letzten 84 Tage nach einem festen Muster,
// damit die Heatmap immer gefüllt aussieht. Später durch echte Daten ersetzen.
export const completions: HabitCompletion[] = [];
for (let daysAgo = 0; daysAgo < 84; daysAgo++) {
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    habits.forEach((habit, i) => {
        if ((daysAgo * 7 + i * 13) % 10 < 7) {
            completions.push({ habitId: habit.id, date: toISODate(d) });
        }
    });
}
