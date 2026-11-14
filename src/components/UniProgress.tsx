import { formatQuarterHours, type UniWeek } from '../utils/uni';
import { Section } from './Section';
import './UniProgress.css';

interface UniProgressProps {
    week: UniWeek;
}

export function UniProgress({ week }: UniProgressProps) {
    const percent = Math.round(week.share * 100);

    return (
        <Section title="Uni diese Woche">
            <div className="uni-progress">
                <span className="uni-progress__label">
                    {formatQuarterHours(week.doneHours)} von {formatQuarterHours(week.targetHours)} h
                </span>
                <div
                    className="uni-progress__bar"
                    role="progressbar"
                    aria-label="Uni-Stunden diese Woche"
                    aria-valuenow={percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                >
                    <div className="uni-progress__fill" style={{ width: `${percent}%` }} />
                </div>
            </div>
        </Section>
    );
}
