import type { CSSProperties } from 'react';
import type { HabitDay } from '../utils/habits';
import './HabitHeatmap.css';

interface HabitHeatmapProps {
    days: HabitDay[];
    color?: string;
}

const WEEKDAY_LABELS = ['Mo', '', 'Mi', '', 'Fr', '', ''];
const LEGEND_LEVELS = ['0', '1', '2', '3', '4'];

/** Anteil erledigt/fällig → Farbstufe. 'none' = nichts fällig. */
function getLevel(day: HabitDay): string {
    if (day.due === 0) return 'none';
    const ratio = day.done / day.due;
    if (ratio === 0) return '0';
    if (ratio < 0.34) return '1';
    if (ratio < 0.67) return '2';
    if (ratio < 1) return '3';
    return '4';
}

function getTooltip(day: HabitDay): string {
    const [year, month, dayOfMonth] = day.date.split('-').map(Number);
    const label = new Date(year, month - 1, dayOfMonth).toLocaleDateString('de-DE', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    });
    const status = day.due === 0 ? 'nichts fällig' : `${day.done} von ${day.due} erledigt`;
    return `${label}: ${status}`;
}

export function HabitHeatmap({ days, color = 'var(--accent)' }: HabitHeatmapProps) {
    const today = days[days.length - 1]?.date;

    return (
        <figure className="heatmap" style={{ '--heatmap-color': color } as CSSProperties}>
            <div className="heatmap__body">
                <div className="heatmap__labels" aria-hidden="true">
                    {WEEKDAY_LABELS.map((label, i) => (
                        <span key={i}>{label}</span>
                    ))}
                </div>
                <div className="heatmap__grid" role="img" aria-label="Gewohnheiten der letzten Wochen">
                    {days.map((day) => (
                        <div
                            key={day.date}
                            className={day.date === today ? 'heatmap__cell heatmap__cell--today' : 'heatmap__cell'}
                            data-level={getLevel(day)}
                            title={getTooltip(day)}
                        />
                    ))}
                </div>
            </div>

            <figcaption className="heatmap__legend">
                <span>
                    <span className="heatmap__cell" data-level="none" />
                    nichts fällig
                </span>
                <span>
                    weniger
                    {LEGEND_LEVELS.map((level) => (
                        <span key={level} className="heatmap__cell" data-level={level} />
                    ))}
                    mehr
                </span>
            </figcaption>
        </figure>
    );
}
