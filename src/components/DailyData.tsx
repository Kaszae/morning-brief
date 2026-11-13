import { getCalendarWeek } from '../utils/date';
import './DailyData.css';

interface DailyDataProps {
    date: Date;
    lowestTemp: number;
    highestTemp: number;
    tempInfo: string;
}

export function DailyData({ date, lowestTemp, highestTemp, tempInfo }: DailyDataProps) {
    const weekday = date.toLocaleDateString('de-DE', { weekday: 'long' });
    const dayOfMonth = date.getDate();
    const month = date.toLocaleDateString('de-DE', { month: 'long' });
    const year = date.getFullYear();
    const calendarWeek = getCalendarWeek(date);

    return (
        <p className="daily-data">
            {weekday}, den {dayOfMonth}. {month} {year} | KW {calendarWeek} | {lowestTemp}° / {highestTemp}°, {tempInfo}
        </p>
    );
}
