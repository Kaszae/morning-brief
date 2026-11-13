import './CircularProgress.css';

interface CircularProgressProps {
    name: string;
    color: string;
    percent: number;
    info: string;
    size?: number; // Durchmesser in px, optional
}

export function CircularProgress({ name, color, percent, info, size = 120 }: CircularProgressProps) {
    const strokeWidth = size * 0.1;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const value = Math.min(100, Math.max(0, percent));
    const offset = circumference * (1 - value / 100);

    return (
        <figure className="circular-progress">
            <div
                className="circular-progress__ring"
                style={{ width: size, height: size }}
                role="progressbar"
                aria-label={name}
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                    <circle
                        className="circular-progress__track"
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke={color}
                        strokeWidth={strokeWidth}
                    />
                    {value > 0 && (
                        <circle
                            className="circular-progress__bar"
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            stroke={color}
                            strokeWidth={strokeWidth}
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                        />
                    )}
                </svg>
                <span className="circular-progress__value" style={{ fontSize: size * 0.22 }}>
                    {Math.round(value)}%
                </span>
            </div>

            <figcaption className="circular-progress__caption">
                <span className="circular-progress__name">{name}</span>
                <span className="circular-progress__info">{info}</span>
            </figcaption>
        </figure>
    );
}
