import type { SchlafNacht } from '../types/daten';
import { formatDuration } from './date';
import { LEVEL_COLORS, type HealthRing } from './health';

// Eigener Sleep Score (0–100), angelehnt an die sechs Bausteine von Googles Sleep Score:
// Schlafdauer, fester Schlaf, Zeit bis zum Einschlafen, Unruhe, längere Wachphasen und deren Dauer.
// Google veröffentlicht keine Gewichte – diese hier sind eine eigene, nachvollziehbare Annäherung.

type SleepPart = 'dauer' | 'festerSchlaf' | 'einschlafen' | 'unruhe' | 'wachphasen' | 'unterbrechungen';

const MAX_POINTS: Record<SleepPart, number> = {
    dauer: 50,
    festerSchlaf: 20,
    einschlafen: 5,
    unruhe: 10,
    wachphasen: 10,
    unterbrechungen: 5,
};

const IMPROVE: Record<SleepPart, string> = {
    dauer: 'geschlafen – heute früher ins Bett', // wird mit der Schlafdauer davor ergänzt
    festerSchlaf: 'Wenig Tief- und REM-Schlaf – abends früher abschalten',
    einschlafen: 'Langes Einschlafen – eine feste Schlafenszeit hilft',
    unruhe: 'Unruhige Nacht – Schlafzimmer kühl und dunkel halten',
    wachphasen: 'Mehrmals länger wach – abends weniger trinken',
    unterbrechungen: 'Lange wach in der Nacht – ruhiger Abend ohne Bildschirm',
};

// Farbstufen wie bei Google: ab 80 gut, ab 60 mittel, darunter schwach
const SLEEP_LEVELS = { good: 80, fair: 60 };

const clamp01 = (x: number) => Math.min(1, Math.max(0, x));
/** Linear: bei `good` volle Punkte, bei `bad` keine. */
const scale = (value: number, good: number, bad: number) => clamp01((value - bad) / (good - bad));

export type SleepScore = {
    score: number;
    shares: Record<SleepPart, number>; // 0–1 je Baustein
    minutesAsleep: number;
};

export function getSleepScore(night: SchlafNacht): SleepScore | null {
    const asleep = night.minuten_schlaf;
    if (!night.fertig || !asleep) return null;

    const shares: Record<SleepPart, number> = {
        dauer: scale(asleep, 480, 240),                                     // 8 h volle Punkte, unter 4 h keine
        festerSchlaf: scale((night.tief + night.rem) / asleep, 0.4, 0.15),  // Anteil Tief- + REM-Schlaf
        einschlafen: scale(night.minuten_bis_eingeschlafen ?? 0, 15, 45),   // bis 15 Min. ideal
        unruhe: scale(night.kurze_wachphasen, 15, 40),                      // kurze Wachmomente
        wachphasen: scale(night.lange_wachphasen, 1, 4),                    // Google: unter zwei ist gut
        unterbrechungen: scale(night.minuten_lange_wachphasen, 10, 60),     // Minuten in längeren Wachphasen
    };
    const score = Math.round(
        (Object.keys(MAX_POINTS) as SleepPart[]).reduce((sum, part) => sum + MAX_POINTS[part] * shares[part], 0),
    );
    return { score, shares, minutesAsleep: asleep };
}

export function getSleepScoreColor(score: number): string {
    if (score >= SLEEP_LEVELS.good) return LEVEL_COLORS.hoch;
    if (score >= SLEEP_LEVELS.fair) return LEVEL_COLORS.mittel;
    return LEVEL_COLORS.niedrig;
}

/** Sleep Score der Nacht zu heute als Ring. null, wenn es für heute keine ausgewertete Nacht gibt. */
export function getSleepScoreRing(nights: SchlafNacht[], today: string): HealthRing | null {
    const night = nights.find((n) => n.datum === today);
    const result = night && getSleepScore(night);
    if (!result) return null;

    let feedback: string;
    if (result.score >= SLEEP_LEVELS.good) {
        feedback = 'Erholsame Nacht – weiter so';
    } else {
        // Baustein mit dem kleinsten Anteil an seinen möglichen Punkten
        const weakest = (Object.keys(result.shares) as SleepPart[]).reduce((a, b) =>
            result.shares[b] < result.shares[a] ? b : a,
        );
        feedback = weakest === 'dauer' ? `${formatDuration(result.minutesAsleep)} ${IMPROVE.dauer}` : IMPROVE[weakest];
    }

    return {
        percent: result.score,
        color: getSleepScoreColor(result.score),
        feedback,
        label: String(result.score), // ein Score, keine Prozentzahl
    };
}
