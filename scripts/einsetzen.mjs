// einsetzen.mjs – setzt die gesammelten Daten in den gebauten Brief ein.
// Aufruf: node scripts/einsetzen.mjs <daten.json> <dist/index.html> <ausgabe.html>
// Prüft die Daten grob, damit ein kaputter Lauf auffällt, bevor er veröffentlicht wird.
import { readFileSync, writeFileSync } from "node:fs";

const PLATZHALTER = "__MORNING_BRIEF_DATEN__";
const [datenPfad, vorlagePfad, zielPfad] = process.argv.slice(2);
if (!datenPfad || !vorlagePfad || !zielPfad) {
  console.error("Aufruf: node scripts/einsetzen.mjs <daten.json> <dist/index.html> <ausgabe.html>");
  process.exit(1);
}

const fehler = (text) => {
  console.error("Fehler: " + text);
  process.exit(1);
};

let daten;
try {
  daten = JSON.parse(readFileSync(datenPfad, "utf8"));
} catch (e) {
  fehler(`${datenPfad} ist kein gültiges JSON (${e.message})`);
}

// Pflichtfelder und Typen
if (!/^\d{4}-\d{2}-\d{2}$/.test(daten.heute ?? "")) fehler("„heute“ fehlt oder ist kein Datum im Format YYYY-MM-DD");
if (typeof daten.name !== "string" || !daten.name) fehler("„name“ fehlt");
for (const feld of ["projekte", "heute_faellig", "offen"]) {
  if (!Array.isArray(daten[feld])) fehler(`„${feld}“ muss eine Liste sein`);
}
for (const feld of ["wetter", "uni", "habits", "health"]) {
  if (!(feld in daten)) fehler(`„${feld}“ fehlt (wenn es nichts gibt: null)`);
}
if (daten.health && !daten.health.verlauf) fehler("„health.verlauf“ fehlt");

const vorlage = readFileSync(vorlagePfad, "utf8");
if (vorlage.split(PLATZHALTER).length !== 2) fehler(`Platzhalter ${PLATZHALTER} nicht genau einmal in ${vorlagePfad}`);

// "<" maskieren, damit kein Text in den Daten das <script>-Element vorzeitig beendet
const ZEILENTRENNER = [String.fromCharCode(0x2028), String.fromCharCode(0x2029)]; // in JSON erlaubt, in <script> heikel
let json = JSON.stringify(daten).replaceAll("<", "\\u003c");
for (const zeichen of ZEILENTRENNER) {
  json = json.replaceAll(zeichen, "\\u" + zeichen.charCodeAt(0).toString(16));
}
writeFileSync(zielPfad, vorlage.replace(PLATZHALTER, () => json));

const h = daten.health;
console.log(JSON.stringify({
  datei: zielPfad,
  kb: Math.round(Buffer.byteLength(vorlage) / 1024 + Buffer.byteLength(json) / 1024),
  heute: daten.heute,
  aufgaben_heute: daten.heute_faellig.length,
  offen: daten.offen.length,
  wetter: Boolean(daten.wetter),
  uni: Boolean(daten.uni),
  habits: Boolean(daten.habits),
  gesundheit: h ? { verlauf: true, schlafdetails: Boolean(h.schlafdetails?.length), zonen: Boolean(h.zonen?.length) } : false,
}));
