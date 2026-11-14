import type { HealthVerlauf, Messpunkt } from '../types/daten';
import { addDays, formatDuration } from './date';

// Rechnung wie im Tagesbrief (scripts/health.py, references/health.md)
const WINDOW_DAYS = 30;         // Normalbereich für HRV, Ruhepuls, Atemfrequenz
const SLEEP_WINDOW_DAYS = 90;   // Schlafbedarf = dein Schnitt über diesen Zeitraum
const MIN_DAYS = 5;             // darunter kein Energiewert
const CONFIDENT_DAYS = 14;      // darunter gilt der Wert als vorläufig
const WEIGHTS = { hrv: 0.5, ruhepuls: 0.25, schlaf: 0.25 } as const;

export const LEVEL_COLORS = { hoch: '#0ca30c', mittel: '#fab219', niedrig: '#d03b3b' } as const;
export type Level = keyof typeof LEVEL_COLORS;

// Ausreißer: über Schnitt + 2 Standardabweichungen UND mindestens so weit darüber
const OUTLIER_MIN = { atemfrequenz: 1.0, ruhepuls: 3.0 };
const OUTLIER_TEXT = {
    atemfrequenz: 'Atemfrequenz deutlich über deinem üblichen Bereich',
    ruhepuls: 'Ruhepuls deutlich über deinem üblichen Bereich',
};

type Component = keyof typeof WEIGHTS;

export type Metric = {
    value: number;
    days: number;     // Tage im Normalbereich
    from?: number;    // üblich von–bis (Schnitt ± 1 Standardabweichung)
    to?: number;
    average?: number; // nur Schlaf: dein Schnitt in Minuten
    score?: number;   // 0–100, 50 = genau dein Schnitt (Schlaf: Anteil am Schnitt)
};

export type HealthResult = {
    hrv?: Metric;
    ruhepuls?: Metric;
    atemfrequenz?: Metric;
    schlaf?: Metric;
    energy: { value: number; level: Level; provisional: boolean } | null;
    missing: Component[];
    hints: string[];
    noData: boolean;
};

/** [{datum, wert}] → Map tag → wert; mehrere Einträge eines Tages → der größte (Hauptschlaf statt Nickerchen). */
function perDay(points: Messpunkt[] | undefined): Map<string, number> {
    const days = new Map<string, number>();
    for (const point of points ?? []) {
        const day = String(point.datum).slice(0, 10);
        const value = Number(point.wert);
        if (!Number.isFinite(value)) continue;
        days.set(day, Math.max(value, days.get(day) ?? -Infinity));
    }
    return days;
}

/** Werte der letzten `days` Tage vor heute (heute zählt nie zum Normalbereich). */
function baseline(series: Map<string, number>, today: string, days: number): number[] {
    const from = addDays(today, -days);
    return [...series].filter(([day]) => day >= from && day < today).map(([, value]) => value);
}

const mean = (values: number[]) => values.reduce((a, b) => a + b, 0) / values.length;

function sd(values: number[], minimum: number): number {
    if (values.length < 2) return minimum;
    const m = mean(values);
    const variance = values.reduce((sum, v) => sum + (v - m) ** 2, 0) / (values.length - 1);
    return Math.max(Math.sqrt(variance), minimum);
}

/** Abweichung in Standardabweichungen → 0–100, 50 = genau dein Schnitt. */
const score = (z: number) => Math.min(100, Math.max(0, 50 + 25 * z));

const levelOf = (value: number): Level => (value >= 67 ? 'hoch' : value >= 34 ? 'mittel' : 'niedrig');

/** Prozentwert → Ampelfarbe: ab 67 grün, ab 34 gelb, darunter rot. Für alle Ringe gleich. */
export function getLevelColor(percent: number): string {
    return LEVEL_COLORS[levelOf(percent)];
}

export function getHealth(verlauf: HealthVerlauf, today: string): HealthResult {
    const series = {
        hrv: perDay(verlauf.hrv),
        ruhepuls: perDay(verlauf.ruhepuls),
        atemfrequenz: perDay(verlauf.atemfrequenz),
        schlaf: perDay(verlauf.schlaf_minuten),
    };
    const result: HealthResult = { energy: null, missing: [], hints: [], noData: false };

    // HRV: im Logarithmus vergleichen, weil sie schief verteilt ist
    const hrv = series.hrv.get(today);
    const hrvBase = baseline(series.hrv, today, WINDOW_DAYS);
    if (hrv && hrvBase.length >= MIN_DAYS) {
        const logs = hrvBase.filter((v) => v > 0).map(Math.log);
        const m = mean(logs);
        const s = sd(logs, 0.05);
        result.hrv = { value: hrv, from: Math.exp(m - s), to: Math.exp(m + s), score: score((Math.log(hrv) - m) / s), days: hrvBase.length };
    } else if (hrv) {
        result.hrv = { value: hrv, days: hrvBase.length };
    }

    // Ruhepuls und Atemfrequenz: niedriger ist entspannter
    for (const [name, sdMin] of [['ruhepuls', 1.0], ['atemfrequenz', 0.3]] as const) {
        const value = series[name].get(today);
        const base = baseline(series[name], today, WINDOW_DAYS);
        if (value === undefined) continue;
        if (base.length < MIN_DAYS) {
            result[name] = { value, days: base.length };
            continue;
        }
        const m = mean(base);
        const s = sd(base, sdMin);
        result[name] = { value, from: m - s, to: m + s, score: score((m - value) / s), days: base.length };
        if (value > m + Math.max(2 * s, OUTLIER_MIN[name])) result.hints.push(OUTLIER_TEXT[name]);
    }

    // Schlaf: Anteil an deinem Schnitt der letzten 90 Tage
    const sleep = series.schlaf.get(today);
    const sleepBase = baseline(series.schlaf, today, SLEEP_WINDOW_DAYS);
    if (sleep !== undefined && sleepBase.length >= MIN_DAYS) {
        const average = mean(sleepBase);
        result.schlaf = { value: sleep, average, score: Math.min(100, (100 * sleep) / average), days: sleepBase.length };
    } else if (sleep !== undefined) {
        result.schlaf = { value: sleep, days: sleepBase.length };
    }

    // Energie nur, wenn alle drei Teile einen Normalbereich haben
    const parts = Object.keys(WEIGHTS) as Component[];
    result.missing = parts.filter((name) => result[name]?.score === undefined);
    if (result.missing.length === 0) {
        const value = Math.round(parts.reduce((sum, name) => sum + WEIGHTS[name] * result[name]!.score!, 0));
        const days = Math.min(...parts.map((name) => result[name]!.days));
        result.energy = { value, level: levelOf(value), provisional: days < CONFIDENT_DAYS };
    }
    result.noData = !result.hrv && !result.ruhepuls && !result.atemfrequenz && !result.schlaf;
    return result;
}

// ---------- Ringe mit Feedback ----------

export type HealthRing = {
    percent: number;
    color: string;
    feedback: string;
};

const IMPROVE = {
    hrv: 'HRV unter deinem Schnitt – heute eher ruhig angehen',
    ruhepuls: 'Ruhepuls erhöht – Belastung heute dosieren',
    schlaf: 'Wenig Schlaf bremst die Erholung – heute früher ins Bett',
};

/** Schlaf im Verhältnis zu deinem Schnitt, mit Feedback. null, wenn für heute nichts da ist. */
export function getSleepRing(health: HealthResult): HealthRing | null {
    const sleep = health.schlaf;
    if (!sleep || sleep.average === undefined || sleep.score === undefined) return null;

    const difference = Math.round(sleep.value - sleep.average);
    let feedback: string;
    if (difference >= 30) feedback = `${formatDuration(difference)} länger als üblich – gut so`;
    else if (difference >= -15) feedback = 'So lang wie üblich – passt';
    else feedback = `${formatDuration(-difference)} unter deinem Schnitt – heute früher ins Bett`;

    const percent = Math.round(sleep.score);
    return { percent, color: getLevelColor(percent), feedback };
}

/** Energiewert als Erholung, Farbe nach Stufe, Feedback zum schwächsten Teil. */
export function getRecoveryRing(health: HealthResult): HealthRing | null {
    if (!health.energy) return null;
    const { value, level, provisional } = health.energy;

    let feedback: string;
    if (health.hints.length) {
        feedback = `${health.hints.join(' · ')} – heute eher ruhig angehen`;
    } else if (level === 'hoch') {
        feedback = 'Gut erholt – alles im grünen Bereich';
    } else {
        const weakest = (Object.keys(WEIGHTS) as Component[]).reduce((a, b) =>
            health[b]!.score! < health[a]!.score! ? b : a,
        );
        feedback = IMPROVE[weakest];
    }
    if (provisional) feedback += ' (vorläufig)';

    return { percent: value, color: getLevelColor(value), feedback };
}
