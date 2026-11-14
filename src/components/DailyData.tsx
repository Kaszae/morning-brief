import type { Wetter } from '../types/daten';
import { getCalendarWeek } from '../utils/date';
import './DailyData.css';

interface DailyDataProps {
    date: Date;
    weather: Wetter | null;
}

/** '7° / 2°, bewölkt, Regen ab 15 Uhr' – fehlende Teile fallen weg, ganz ohne Wetter null. */
function formatWeather(weather: Wetter | null): string | null {
    if (!weather) return null;
    const { hoch, tief, himmel, niederschlag } = weather;
    let temperature: string | null = null;
    if (hoch != null && tief != null) temperature = `${hoch}° / ${tief}°`;
    else if (hoch != null) temperature = `bis ${hoch}°`;
    else if (tief != null) temperature = `ab ${tief}°`;

    const parts = [temperature, himmel, niederschlag].filter(Boolean);
    return parts.length ? parts.join(', ') : null;
}

export function DailyData({ date, weather }: DailyDataProps) {
    const weekday = date.toLocaleDateString('de-DE', { weekday: 'long' });
    const dayOfMonth = date.getDate();
    const month = date.toLocaleDateString('de-DE', { month: 'long' });
    const year = date.getFullYear();
    const calendarWeek = getCalendarWeek(date);
    const weatherText = formatWeather(weather);

    return (
        <p className="daily-data">
            {weekday}, den {dayOfMonth}. {month} {year} | KW {calendarWeek}
            {weatherText && ` | ${weatherText}`}
        </p>
    );
}
