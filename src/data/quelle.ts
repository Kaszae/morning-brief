import type { Daten } from '../types/daten';
import { daten as beispiel } from './beispiel';

/**
 * Die Daten des Briefings.
 * Im fertigen Brief setzt der Skill sie als JSON in <script id="daten"> ein (scripts/einsetzen.mjs).
 * Beim Entwickeln (npm run dev) steht dort nur der Platzhalter, dann gelten die Beispieldaten.
 * Im gebauten Brief ohne Daten gibt es bewusst keine Beispieldaten, damit nie Erfundenes angezeigt wird.
 */
export function ladeDaten(): Daten | null {
    const text = document.getElementById('daten')?.textContent?.trim();
    if (text?.startsWith('{')) {
        try {
            return JSON.parse(text) as Daten;
        } catch (fehler) {
            console.error('Daten im Brief sind kein gültiges JSON', fehler);
            return null;
        }
    }
    return import.meta.env.DEV ? beispiel : null;
}
