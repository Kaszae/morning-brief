import type { HealthResult } from './health';
import { daysBetween, parseISODate } from './date';

// Kurze, freundliche Begrüßung für den Morgen: höchstens zwei Sätze, keine Zahlen, kein Druck.
// Der zweite Satz richtet sich nach deinen Gesundheitsdaten.
// Mehrere Varianten pro Lage, damit nicht jeden Tag derselbe Satz steht (Wahl nach Datum, also stabil pro Tag).

const SENTENCES = {
    hoch: [
        'Du bist gut erholt – ein schöner Tag für die wichtigen Dinge.',
        'Du startest mit viel Energie, genieß das.',
        'Dein Körper ist ausgeruht, der Tag kann kommen.',
    ],
    mittel: [
        'Mach heute eins nach dem anderen, das reicht völlig.',
        'Geh es in deinem Tempo an, du musst heute nicht alles schaffen.',
        'Ein ganz normaler Tag – plan dir ruhig ein paar Pausen ein.',
    ],
    niedrig: [
        'Dein Körper braucht heute Ruhe – mach nur das Nötigste.',
        'Heute ist ein Tag zum Langsammachen, sei nachsichtig mit dir.',
        'Gönn dir heute viele Pausen, der Rest kann warten.',
    ],
    kurzeNacht: [
        'Die Nacht war etwas kurz – gönn dir zwischendurch eine Pause.',
        'Du hast weniger geschlafen als sonst, nimm dir heute nicht zu viel vor.',
    ],
    angestrengt: [
        'Dein Körper wirkt heute etwas angestrengt – mach langsam.',
        'Dein Körper arbeitet gerade etwas mehr als sonst, achte heute auf dich.',
    ],
    ohneDaten: [
        'Schön, dass du da bist.',
        'Auf einen guten Tag.',
    ],
};

const SHORT_NIGHT_MINUTES = 45; // ab so viel unter deinem Schnitt gilt die Nacht als kurz

function pick(options: string[], today: string): string {
    const dayNumber = daysBetween('2026-01-01', today);
    return options[((dayNumber % options.length) + options.length) % options.length];
}

function getHealthSentence(health: HealthResult | null, today: string): string {
    const level = health?.energy?.level;
    const sleep = health?.schlaf;
    const shortNight = sleep?.average !== undefined && sleep.value < sleep.average - SHORT_NIGHT_MINUTES;

    if (level === 'niedrig') return pick(SENTENCES.niedrig, today);
    if (health?.hints.length) return pick(SENTENCES.angestrengt, today);
    if (shortNight) return pick(SENTENCES.kurzeNacht, today);
    if (level) return pick(SENTENCES[level], today);
    return pick(SENTENCES.ohneDaten, today);
}

export function getGreeting(name: string, today: string, health: HealthResult | null): string {
    const weekday = parseISODate(today).getDay();
    const opening =
        weekday === 6 ? `Schönen Samstag, ${name}.` : weekday === 0 ? `Schönen Sonntag, ${name}.` : `Guten Morgen, ${name}.`;
    return `${opening} ${getHealthSentence(health, today)}`;
}
