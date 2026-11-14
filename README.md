# Morning Brief

Mein Morgen-Briefing als React-App. Der Skill „morning-brief“ sammelt jeden Morgen die Daten
(Todoist, Wetter, Gesundheit), setzt sie in den gebauten Brief ein und veröffentlicht ihn.
Gerechnet wird ausschließlich hier im Code (`src/utils`), nicht im Skill.

- `npm run dev` – Entwickeln mit den ausgedachten Beispieldaten aus `src/data/beispiel.ts`
- `npm run build` – baut den Brief als **eine** Datei `dist/index.html` (ohne Daten)
- `node scripts/einsetzen.mjs daten.json dist/index.html brief.html` – setzt Daten ein

Das Datenformat steht in `src/types/daten.ts`.

Farbpalette: https://coolors.co/palette/f94144-f3722c-f8961e-f9844a-f9c74f-90be6d-43aa8b-4d908e-577590-277da1
