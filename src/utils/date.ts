/** Date → 'YYYY-MM-DD' in lokaler Zeit (nicht UTC). */
export function toISODate(d: Date): string {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/** Kalenderwoche nach ISO 8601 (Woche beginnt Montag, KW 1 enthält den ersten Donnerstag). */
export function getCalendarWeek(date: Date): number {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const day = d.getUTCDay() || 7;             // Sonntag (0) → 7, Woche läuft Mo–So
    d.setUTCDate(d.getUTCDate() + 4 - day);     // auf den Donnerstag dieser Woche springen
    const newYear = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((Number(d) - Number(newYear)) / 86400000 + 1) / 7);
}
