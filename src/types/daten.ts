// Format der daten.json, wie der Tagesbrief-Skill sie sammelt (vgl. references/daten.md)

export type TodoistTask = {
    id: string;
    content: string;
    projectId: string;
    parentId?: string | null;
    dueDate?: string;          // '2026-11-10' oder '2026-11-10T09:00:00'
    deadlineDate?: string;     // '2026-11-12'
    recurring?: string | false;
    priority?: string;
    labels?: string[];
    duration?: string;         // '2h', '30m', '1h30m'
    addedAt?: string;
};

export type TodoistProject = {
    id: string;
    name: string;
    parentId: string | null;
};

export type Wetter = {
    hoch: number | null;
    tief: number | null;
    himmel: string | null;
    niederschlag: string | null;
};

export type Messpunkt = {
    datum: string;             // 'YYYY-MM-DD'
    wert: number;
};

export type HealthVerlauf = {
    hrv: Messpunkt[];
    ruhepuls: Messpunkt[];
    atemfrequenz: Messpunkt[];
    schlaf_minuten: Messpunkt[];
};

export type HabitErledigt = {
    id: string;                // Aufgaben-ID (objectId aus find-activity)
    zeit: string;              // UTC, z. B. '2026-11-09T07:12:40.000Z'
};

export type HabitDaten = {
    projekt_id: string;
    aufgaben: TodoistTask[];   // wiederkehrende Aufgaben im Projekt „Gewohnheiten“
    erledigt: HabitErledigt[];
};

export type UniErledigt = {
    id: string;                // objectId aus find-activity
    zeit: string;              // UTC
    projectId: string | null;
    content: string;
    dauer_min: number | null;
    parentId: string | null;
    wiederkehrend: boolean;
};

export type UniDaten = {
    erledigt_woche: UniErledigt[];   // alle Abschlüsse seit Montag (alle Projekte, gefiltert wird im Code)
    wiederkehrend: TodoistTask[];    // Ergebnis von recurring & ##Uni
};

export type Daten = {
    heute: string;             // 'YYYY-MM-DD' in Europe/Berlin
    name: string;
    wetter: Wetter | null;
    projekte: TodoistProject[];
    heute_faellig: TodoistTask[];
    offen: TodoistTask[];
    uni: UniDaten | null;
    habits: HabitDaten | null; // null, wenn es das Projekt „Gewohnheiten“ nicht gibt
    health: { verlauf: HealthVerlauf } | null;
};
