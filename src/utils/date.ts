const WEEKDAYS_SHORT = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

/** Date → 'YYYY-MM-DD' in lokaler Zeit (nicht UTC). */
export function toISODate(d: Date): string {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/** 'YYYY-MM-DD' (oder mit Uhrzeit) → Date um 0:00 lokaler Zeit. */
export function parseISODate(text: string): Date {
    const [year, month, day] = text.slice(0, 10).split('-').map(Number);
    return new Date(year, month - 1, day);
}

/** Tage von a bis b, beide als 'YYYY-MM-DD'. */
export function daysBetween(a: string, b: string): number {
    const utc = (text: string) => {
        const [year, month, day] = text.slice(0, 10).split('-').map(Number);
        return Date.UTC(year, month - 1, day);
    };
    return Math.round((utc(b) - utc(a)) / 86400000);
}

/** 'YYYY-MM-DD' ± Tage → 'YYYY-MM-DD'. */
export function addDays(text: string, days: number): string {
    const d = parseISODate(text);
    d.setDate(d.getDate() + days);
    return toISODate(d);
}

/** Kalenderwoche nach ISO 8601 (Woche beginnt Montag, KW 1 enthält den ersten Donnerstag). */
export function getCalendarWeek(date: Date): number {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const day = d.getUTCDay() || 7;             // Sonntag (0) → 7, Woche läuft Mo–So
    d.setUTCDate(d.getUTCDate() + 4 - day);     // auf den Donnerstag dieser Woche springen
    const newYear = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((Number(d) - Number(newYear)) / 86400000 + 1) / 7);
}

/** 'heute', 'gestern', 'morgen' oder 'Do, 5.11.', mit Uhrzeit, falls vorhanden: 'heute, 9:00'. */
export function formatShortDate(text: string, today: string): string {
    const distance = daysBetween(today, text);
    const date = parseISODate(text);
    let label: string;
    if (distance === 0) label = 'heute';
    else if (distance === -1) label = 'gestern';
    else if (distance === 1) label = 'morgen';
    else {
        const year = date.getFullYear() === parseISODate(today).getFullYear() ? '' : String(date.getFullYear());
        label = `${WEEKDAYS_SHORT[date.getDay()]}, ${date.getDate()}.${date.getMonth() + 1}.${year}`;
    }
    if (text.length > 10) {
        const [hour, minute] = text.slice(11, 16).split(':');
        label += `, ${Number(hour)}:${minute}`;
    }
    return label;
}

/** 135 → '2 h 15 Min.', 120 → '2 h', 45 → '45 Min.' */
export function formatDuration(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const rest = Math.round(minutes % 60);
    if (hours && rest) return `${hours} h ${rest} Min.`;
    if (hours) return `${hours} h`;
    return `${rest} Min.`;
}
