import type { ZonenTag } from '../types/daten';
import { addDays } from './date';
import { LEVEL_COLORS, type HealthRing, type Level } from './health';
import { isoWeekday } from './recurrence';

// Wochenbelastung aus den Minuten pro Herzfrequenzzone, angelehnt an Googles Cardio Load mit Wochenziel:
// höhere Zonen zählen stärker, das Ziel ist deine übliche Wochenbelastung der letzten 4 Wochen.

const ZONE_WEIGHTS = { leicht: 1, moderat: 2, intensiv: 3, spitze: 4 };
const TARGET_WEEKS = 4;
const MIN_WEEKS = 2;          // weniger Vergleichswochen: kein Ziel, Kreis wird ausgeblendet
const MIN_DAYS_PER_WEEK = 5;  // eine Vergleichswoche zählt nur mit genug Tagen Daten

export type StrainWeek = {
    load: number;                 // Belastung seit Montag
    target: number;               // übliche Wochenbelastung
    share: number;                // load / target
    expectedShare: number | null; // Anteil der Woche, der schon vorbei ist (null am Montagmorgen)
};

export const getDayLoad = (day: ZonenTag) =>
    day.leicht * ZONE_WEIGHTS.leicht +
    day.moderat * ZONE_WEIGHTS.moderat +
    day.intensiv * ZONE_WEIGHTS.intensiv +
    day.spitze * ZONE_WEIGHTS.spitze;

export function getStrainWeek(zones: ZonenTag[], today: string): StrainWeek | null {
    const loadByDay = new Map(zones.map((day) => [day.datum, getDayLoad(day)]));
    const sumRange = (from: string, toExclusive: string) => {
        let load = 0;
        let days = 0;
        for (let day = from; day < toExclusive; day = addDays(day, 1)) {
            if (loadByDay.has(day)) {
                load += loadByDay.get(day)!;
                days++;
            }
        }
        return { load, days };
    };

    const monday = addDays(today, -(isoWeekday(today) - 1));
    const previousWeeks: number[] = [];
    for (let week = 1; week <= TARGET_WEEKS; week++) {
        const start = addDays(monday, -7 * week);
        const { load, days } = sumRange(start, addDays(start, 7));
        if (days >= MIN_DAYS_PER_WEEK) previousWeeks.push(load);
    }
    if (previousWeeks.length < MIN_WEEKS) return null;

    const target = previousWeeks.reduce((a, b) => a + b, 0) / previousWeeks.length;
    if (target <= 0) return null;

    const load = sumRange(monday, addDays(today, 1)).load;
    const daysDone = isoWeekday(today) - 1; // morgens ist der heutige Tag noch offen
    return { load, target, share: load / target, expectedShare: daysDone > 0 ? daysDone / 7 : null };
}

/**
 * Ring für Strain: Füllung = Fortschritt zum Wochenziel.
 * Farbe und Feedback vergleichen mit dem Plan (wie viel der Woche schon vorbei ist) und der Erholung:
 * im Plan grün, deutlich darunter oder darüber gelb, weit darüber rot.
 */
export function getStrainRing(week: StrainWeek, recovery: Level | null): HealthRing {
    const percent = Math.round(week.share * 100);
    const label = `${percent}%`;

    if (week.expectedShare === null) {
        return {
            percent,
            label,
            color: 'var(--accent)',
            feedback: recovery === 'hoch' ? 'Neue Woche – guter Start für eine harte Einheit' : 'Neue Woche – locker starten',
        };
    }

    const pace = week.share / week.expectedShare; // 1 = genau im Plan
    if (pace > 1.6) {
        return { percent, label, color: LEVEL_COLORS.niedrig, feedback: 'Schon sehr viel Belastung diese Woche – heute Pause oder nur locker' };
    }
    if (pace > 1.3) {
        return { percent, label, color: LEVEL_COLORS.mittel, feedback: 'Über deinem Plan – heute eher locker' };
    }
    if (pace >= 0.8) {
        const feedback = recovery === 'niedrig' ? 'Im Plan, aber wenig erholt – heute locker' : 'Im Plan für diese Woche';
        return { percent, label, color: LEVEL_COLORS.hoch, feedback };
    }
    const feedback =
        recovery === 'hoch'
            ? 'Noch Luft bis zum Wochenziel – guter Tag für eine harte Einheit'
            : 'Noch Luft bis zum Wochenziel – heute locker bewegen';
    return { percent, label, color: LEVEL_COLORS.mittel, feedback };
}
