interface Props {
    date: Date;
    lowestTemp: number;
    highestTemp: number;
    tempInfo: string;
}

export function DailyData({date, lowestTemp, highestTemp, tempInfo}: Props): any {
    function getCalendarWeek(date: Date) {
        const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        const day = d.getUTCDay() || 7;     // Sonntag (0) → 7, Woche läuft Mo–So
        d.setUTCDate(d.getUTCDate() + 4 - day);     // auf den Donnerstag dieser Woche springen
        const newYear = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        return Math.ceil(((Number(d) - Number(newYear)) / 86400000 + 1) / 7);
    }

    const weekday = date.toLocaleDateString('de-DE', { weekday: 'long' });
    const dayOfMonth = date.getDate();
    const month = date.toLocaleDateString('de-DE', { month: 'long' });
    const year = date.getFullYear()
    const calendarWeek = getCalendarWeek(date);

    return <p style={{ color: 'var(--accent)' }}>{weekday}, den {dayOfMonth}. {month} {year} | KW {calendarWeek} | {lowestTemp}° / {highestTemp}°, {tempInfo}</p>
}