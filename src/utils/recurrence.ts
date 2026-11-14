import { daysBetween, parseISODate } from './date';

// Wiederholungstext aus Todoist → „ist die Aufgabe an diesem Tag fällig?“
// Portiert aus dem Tagesbrief (scripts/gemeinsam.py, regel). Erkannt werden:
//   täglich:     every day, daily, täglich, jeden Tag
//   Werktage:    every weekday, jeden Werktag, werktags
//   Wochentage:  every mon, thu · jeden Mo, Do · jeden Montag
//   Abstände:    every 2 days, every other day, alle 3 Tage
//   wöchentlich: every week, weekly, jede Woche, wöchentlich (am Wochentag der Fälligkeit)

export type DueRule = (day: string) => boolean; // day: 'YYYY-MM-DD'

const WEEKDAYS = new Map<string, number>([
    ...['mo', 'mon', 'monday', 'montag', 'montags'].map((w) => [w, 1] as const),
    ...['di', 'tue', 'tues', 'tuesday', 'dienstag', 'dienstags'].map((w) => [w, 2] as const),
    ...['mi', 'wed', 'wednesday', 'mittwoch', 'mittwochs'].map((w) => [w, 3] as const),
    ...['do', 'thu', 'thur', 'thurs', 'thursday', 'donnerstag', 'donnerstags'].map((w) => [w, 4] as const),
    ...['fr', 'fri', 'friday', 'freitag', 'freitags'].map((w) => [w, 5] as const),
    ...['sa', 'sat', 'saturday', 'samstag', 'samstags'].map((w) => [w, 6] as const),
    ...['so', 'sun', 'sunday', 'sonntag', 'sonntags'].map((w) => [w, 7] as const),
]);

/** ISO-Wochentag: 1 = Mo … 7 = So */
export function isoWeekday(day: string): number {
    return parseISODate(day).getDay() || 7;
}

/** Modulo, das auch für negative Zahlen ≥ 0 bleibt. */
const mod = (n: number, m: number) => ((n % m) + m) % m;

/**
 * @param text   Wiederholungstext, z. B. 'jeden Mo, Mi, Fr'
 * @param anchor aktuelle Fälligkeit 'YYYY-MM-DD' (nötig für Abstände und „wöchentlich“)
 * @returns Prüffunktion, oder null bei unbekanntem Muster
 */
export function parseRecurrence(text: string, anchor: string | null): DueRule | null {
    const t = text.toLowerCase().split(/\b(?:ending|until|bis|ab|starting|from)\b/)[0];
    const words: string[] = t.match(/[a-zäöüß]+|\d+/g) ?? [];

    if (/\b(?:every ?day|daily|täglich|jeden tag)\b/.test(t)) return () => true;
    if (/\b(?:every weekday|jeden werktag|werktags)\b/.test(t)) return (day) => isoWeekday(day) <= 5;

    const interval = t.match(/\b(?:every|alle)\s+(\d+)\s+(?:days?|tage?n?)\b/);
    const intervalDays = interval ? Number(interval[1]) : /\bevery other day\b/.test(t) ? 2 : null;
    if (intervalDays) {
        if (!anchor) return null;
        return (day) => mod(daysBetween(anchor, day), intervalDays) === 0;
    }

    if (/\b(?:every week|weekly|jede woche|wöchentlich)\b/.test(t)) {
        if (!anchor) return null;
        const weekday = isoWeekday(anchor);
        return (day) => isoWeekday(day) === weekday;
    }

    if (words.length && ['every', 'jeden', 'jede', 'jeder', 'immer'].includes(words[0])) {
        const days = new Set(words.filter((w) => WEEKDAYS.has(w)).map((w) => WEEKDAYS.get(w)!));
        if (days.size) return (day) => days.has(isoWeekday(day));
    }
    return null;
}
