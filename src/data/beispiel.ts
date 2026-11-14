import type { Daten } from '../types/daten';

// Beispieldaten aus dem Tagesbrief-Skill (tests/beispiel.json).
// Später ersetzt durch die daten.json, die der neue Skill jeden Morgen sammelt.
export const daten: Daten = {
    "heute": "2026-11-10",
    "name": "Michael",
    "wetter": {
        "hoch": 7,
        "tief": 2,
        "himmel": "bewölkt",
        "niederschlag": "Regen ab 15 Uhr"
    },
    "projekte": [
        {
            "id": "6WwHCXH4vPgcFXQx",
            "name": "Privat",
            "parentId": null
        },
        {
            "id": "6g77WqwQfqr2953w",
            "name": "Uni",
            "parentId": null
        },
        {
            "id": "6hqCjQJchpFP8V2W",
            "name": "CC",
            "parentId": "6g77WqwQfqr2953w"
        },
        {
            "id": "6hpmV37xcrgWvWF6",
            "name": "DuD",
            "parentId": "6g77WqwQfqr2953w"
        },
        {
            "id": "6hq3P8HgQxMpfW3c",
            "name": "FED",
            "parentId": "6g77WqwQfqr2953w"
        },
        {
            "id": "6hqCqMjV9cjHh76X",
            "name": "SA",
            "parentId": "6g77WqwQfqr2953w"
        },
        {
            "id": "6hq3669PQQxxXgWh",
            "name": "VS",
            "parentId": "6g77WqwQfqr2953w"
        },
        {
            "id": "6Crfqv2MhCVcvrGh",
            "name": "Inbox",
            "parentId": null
        },
        {
            "id": "6g7hHhQcwrg9j3mG",
            "name": "Einkaufen",
            "parentId": null
        },
        {
            "id": "beispielHabits01",
            "name": "Gewohnheiten",
            "parentId": null
        }
    ],
    "heute_faellig": [
        {
            "id": "6hqxxGw5f85mVvpc",
            "content": "Abschnitt 1+2: Einstieg und Was ist die TI?",
            "projectId": "6hpmV37xcrgWvWF6",
            "parentId": "6hqxr9J3v68F5hf6",
            "dueDate": "2026-11-07",
            "deadlineDate": "2026-11-10",
            "recurring": false,
            "priority": "p4",
            "labels": [
                "urgent"
            ],
            "duration": "2h",
            "addedAt": "2026-10-26T14:01:26.037Z"
        },
        {
            "id": "6hqx3HfMWPq7vcj9",
            "content": "Einheit 3: Systemmodelle & Architekturstile",
            "projectId": "6hq3669PQQxxXgWh",
            "dueDate": "2026-11-10",
            "deadlineDate": "2026-11-12",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "2h",
            "addedAt": "2026-10-26T11:01:26.257Z"
        },
        {
            "id": "6hr297WCh5F2f6M4",
            "content": "Module 8/9 Knowledge Check",
            "projectId": "6hqCjQJchpFP8V2W",
            "parentId": "6hr2952CwQg447wW",
            "dueDate": "2026-11-10",
            "deadlineDate": "2026-11-13",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "addedAt": "2026-10-26T14:48:28.973Z"
        },
        {
            "id": "6hvJ88MgcQr5p5fh",
            "content": "Gewobag anrufen",
            "projectId": "6WwHCXH4vPgcFXQx",
            "dueDate": "2026-11-10T09:00:00",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "15m",
            "addedAt": "2026-11-01T11:37:23.482Z"
        },
        {
            "id": "6hvWCGHPf9CH4Qf9",
            "content": "Kindergeld auf 450€ zurück stellen",
            "projectId": "6WwHCXH4vPgcFXQx",
            "dueDate": "2026-11-10",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "addedAt": "2026-11-02T07:03:02.963Z"
        },
        {
            "id": "6g7hx7MCj6q9q5xx",
            "content": "Pflanzen gießen",
            "projectId": "6WwHCXH4vPgcFXQx",
            "dueDate": "2026-11-10",
            "recurring": "alle 6 Tage",
            "priority": "p4",
            "labels": [],
            "duration": "15m",
            "addedAt": "2026-03-08T22:21:47.557Z"
        },
        {
            "id": "6hv74C4j5X7vrJv5",
            "content": "Ankikarten lernen",
            "projectId": "6hqCqMjV9cjHh76X",
            "dueDate": "2026-11-10T17:15:00",
            "recurring": "every day ending 2027-01-29",
            "priority": "p4",
            "labels": [],
            "duration": "30m",
            "addedAt": "2026-10-31T12:48:36.067Z"
        },
        {
            "id": "6hwcwJfWVfr99RCX",
            "content": "Ankikarten lernen",
            "projectId": "6hq3P8HgQxMpfW3c",
            "dueDate": "2026-11-10T17:15:00",
            "recurring": "every day ending 2027-01-29",
            "priority": "p4",
            "labels": [],
            "duration": "30m",
            "addedAt": "2026-11-06T22:08:49.166Z"
        },
        {
            "id": "6hr2C4QCJmQ9v9r4",
            "content": "Roadmap erstellen",
            "projectId": "6hqCjQJchpFP8V2W",
            "parentId": "6hqCrg5QF28c89m4",
            "dueDate": "2026-11-07",
            "deadlineDate": "2026-11-15",
            "recurring": false,
            "priority": "p3",
            "labels": [],
            "addedAt": "2026-10-26T14:53:54.057Z"
        }
    ],
    "offen": [
        {
            "id": "6hqx3J3MPM6JX26h",
            "content": "Beleg abgeben",
            "projectId": "6hq3669PQQxxXgWh",
            "dueDate": "2027-01-12",
            "deadlineDate": "2027-01-14",
            "recurring": false,
            "priority": "p1",
            "labels": [],
            "duration": "9h",
            "addedAt": "2026-10-26T11:01:30.342Z"
        },
        {
            "id": "6hqx3HgmRpwfWhGh",
            "content": "Einheit 4: Systemarchitekturen I: C/S",
            "projectId": "6hq3669PQQxxXgWh",
            "deadlineDate": "2026-11-19",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "2h",
            "addedAt": "2026-10-26T11:01:26.635Z"
        },
        {
            "id": "6hqxxGvgHm3WMGJ6",
            "content": "Abschnitt 3: Anwendungen",
            "projectId": "6hpmV37xcrgWvWF6",
            "parentId": "6hqxr9J3v68F5hf6",
            "dueDate": "2026-11-11",
            "deadlineDate": "2026-11-17",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "1h",
            "addedAt": "2026-10-26T14:01:26.362Z"
        },
        {
            "id": "6hr297fGVC44hx6W",
            "content": "Lab 5: Build a Database Server",
            "projectId": "6hqCjQJchpFP8V2W",
            "parentId": "6hr2952CwQg447wW",
            "dueDate": "2026-11-11",
            "deadlineDate": "2026-11-13",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "addedAt": "2026-10-26T14:48:29.311Z"
        },
        {
            "id": "6hr295Q8fqPrxj94",
            "content": "ACD Module 13: CI/CD Pipelines",
            "projectId": "6hqCjQJchpFP8V2W",
            "dueDate": "2027-02-03",
            "deadlineDate": "2027-02-05",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "2h15m",
            "addedAt": "2026-10-26T14:48:05.773Z"
        },
        {
            "id": "6hqxxGw5f85mVvpc",
            "content": "Abschnitt 1+2: Einstieg und Was ist die TI?",
            "projectId": "6hpmV37xcrgWvWF6",
            "parentId": "6hqxr9J3v68F5hf6",
            "dueDate": "2026-11-07",
            "deadlineDate": "2026-11-10",
            "recurring": false,
            "priority": "p4",
            "labels": [
                "urgent"
            ],
            "duration": "2h",
            "addedAt": "2026-10-26T14:01:26.037Z"
        },
        {
            "id": "6hqxr9J3v68F5hf6",
            "content": "Video Vortrag",
            "projectId": "6hpmV37xcrgWvWF6",
            "deadlineDate": "2027-01-10",
            "recurring": false,
            "priority": "p1",
            "labels": [],
            "addedAt": "2026-10-26T13:42:45.385Z"
        },
        {
            "id": "6hqx3HfMWPq7vcj9",
            "content": "Einheit 3: Systemmodelle & Architekturstile",
            "projectId": "6hq3669PQQxxXgWh",
            "dueDate": "2026-11-10",
            "deadlineDate": "2026-11-12",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "2h",
            "addedAt": "2026-10-26T11:01:26.257Z"
        },
        {
            "id": "6hr297WCh5F2f6M4",
            "content": "Module 8/9 Knowledge Check",
            "projectId": "6hqCjQJchpFP8V2W",
            "parentId": "6hr2952CwQg447wW",
            "dueDate": "2026-11-10",
            "deadlineDate": "2026-11-13",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "addedAt": "2026-10-26T14:48:28.973Z"
        },
        {
            "id": "6hr2952CwQg447wW",
            "content": "Module 8/9: Databases & Cloud Architecture",
            "projectId": "6hqCjQJchpFP8V2W",
            "dueDate": "2026-11-11",
            "deadlineDate": "2026-11-13",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "2h15m",
            "addedAt": "2026-10-26T14:47:59.126Z"
        },
        {
            "id": "6hvJ88MgcQr5p5fh",
            "content": "Gewobag anrufen",
            "projectId": "6WwHCXH4vPgcFXQx",
            "dueDate": "2026-11-10T09:00:00",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "15m",
            "addedAt": "2026-11-01T11:37:23.482Z"
        },
        {
            "id": "6hvWCGHPf9CH4Qf9",
            "content": "Kindergeld auf 450€ zurück stellen",
            "projectId": "6WwHCXH4vPgcFXQx",
            "dueDate": "2026-11-10",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "addedAt": "2026-11-02T07:03:02.963Z"
        },
        {
            "id": "6hr2C4QCJmQ9v9r4",
            "content": "Roadmap erstellen",
            "projectId": "6hqCjQJchpFP8V2W",
            "parentId": "6hqCrg5QF28c89m4",
            "dueDate": "2026-11-07",
            "deadlineDate": "2026-11-15",
            "recurring": false,
            "priority": "p3",
            "labels": [],
            "addedAt": "2026-10-26T14:53:54.057Z"
        },
        {
            "id": "6hqCrg5QF28c89m4",
            "content": "Infografik",
            "projectId": "6hqCjQJchpFP8V2W",
            "dueDate": "2027-01-25",
            "deadlineDate": "2027-01-29",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "4h",
            "addedAt": "2026-10-23T12:05:59.006Z"
        },
        {
            "id": "6hmWGvW7PpFp3gM9",
            "content": "Claude abbestellen?",
            "projectId": "6WwHCXH4vPgcFXQx",
            "dueDate": "2026-11-13",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "addedAt": "2026-10-16T05:23:00.651Z"
        },
        {
            "id": "6hp5pf7739X9c829",
            "content": "Mensakarte Bank wechseln",
            "projectId": "6WwHCXH4vPgcFXQx",
            "dueDate": "2026-11-13T12:45:00",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "30m",
            "addedAt": "2026-10-18T13:24:07.726Z"
        },
        {
            "id": "6hqwwRQQm2CMwpf5",
            "content": "Einheit 4: Grundlegende Architekturmodelle und dahinter steckende Ideen (1)",
            "projectId": "6hqCqMjV9cjHh76X",
            "deadlineDate": "2026-11-20",
            "recurring": false,
            "priority": "p4",
            "labels": [
                "oldest"
            ],
            "duration": "30m",
            "addedAt": "2026-10-26T10:44:19.121Z"
        },
        {
            "id": "6hrcq6HC47JVXW76",
            "content": "Lecture 05 - React Intro, Props, Lists",
            "projectId": "6hq3P8HgQxMpfW3c",
            "deadlineDate": "2026-11-19",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "30m",
            "addedAt": "2026-10-29T08:51:25.934Z"
        },
        {
            "id": "6hr8R32pjh96C44c",
            "content": "Project 2",
            "projectId": "6hq3P8HgQxMpfW3c",
            "dueDate": "2026-12-01",
            "deadlineDate": "2026-12-03",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "10h",
            "addedAt": "2026-10-27T10:54:35.127Z"
        }
    ],
    "uni": {
        "erledigt_woche": [
            {
                "id": "6hwcrx4Chcvr5W29",
                "zeit": "2026-11-09T10:31:00.000Z",
                "projectId": "6hq3669PQQxxXgWh",
                "content": "Projektarbeit",
                "dauer_min": 120,
                "parentId": "6hqx3J3MPM6JX26h",
                "wiederkehrend": false
            },
            {
                "id": "6hwcv22v2fGM62r9",
                "zeit": "2026-11-09T12:35:00.000Z",
                "projectId": "6hq3669PQQxxXgWh",
                "content": "Projektarbeit",
                "dauer_min": 120,
                "parentId": "6hqx3J3MPM6JX26h",
                "wiederkehrend": false
            },
            {
                "id": "6hrcq6Hxwv8jfJJc",
                "zeit": "2026-11-09T15:02:00.000Z",
                "projectId": "6hq3P8HgQxMpfW3c",
                "content": "Lecture 04 - React Intro",
                "dauer_min": 30,
                "parentId": null,
                "wiederkehrend": false
            },
            {
                "id": "6hv74C4j5X7vrJv5",
                "zeit": "2026-11-09T16:40:00.000Z",
                "projectId": "6hqCqMjV9cjHh76X",
                "content": "Ankikarten lernen",
                "dauer_min": 30,
                "parentId": null,
                "wiederkehrend": true
            },
            {
                "id": "6hwcwJfWVfr99RCX",
                "zeit": "2026-11-09T16:55:00.000Z",
                "projectId": "6hq3P8HgQxMpfW3c",
                "content": "Ankikarten lernen",
                "dauer_min": 30,
                "parentId": null,
                "wiederkehrend": true
            },
            {
                "id": "6hvJ88MgcQr5p5fh",
                "zeit": "2026-11-09T09:00:00.000Z",
                "projectId": "6WwHCXH4vPgcFXQx",
                "content": "Wäsche waschen",
                "dauer_min": 30,
                "parentId": null,
                "wiederkehrend": false
            }
        ],
        "wiederkehrend": [
            {
                "id": "6hv74C4j5X7vrJv5",
                "content": "Ankikarten lernen",
                "projectId": "6hqCqMjV9cjHh76X",
                "dueDate": "2026-11-10T17:15:00",
                "recurring": "every day ending 2027-01-29",
                "priority": "p4",
                "labels": [],
                "duration": "30m",
                "addedAt": "2026-10-31T12:48:36.067Z"
            },
            {
                "id": "6hwcwJfWVfr99RCX",
                "content": "Ankikarten lernen",
                "projectId": "6hq3P8HgQxMpfW3c",
                "dueDate": "2026-11-10T17:15:00",
                "recurring": "every day ending 2027-01-29",
                "priority": "p4",
                "labels": [],
                "duration": "30m",
                "addedAt": "2026-11-06T22:08:49.166Z"
            }
        ]
    },
    "habits": {
        "projekt_id": "beispielHabits01",
        "aufgaben": [
            {
                "id": "beispielHabit001",
                "content": "10 Minuten lesen",
                "projectId": "beispielHabits01",
                "dueDate": "2026-11-10",
                "recurring": "every day",
                "priority": "p4",
                "labels": [],
                "addedAt": "2026-08-01T08:00:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "content": "Dehnen",
                "projectId": "beispielHabits01",
                "dueDate": "2026-11-11",
                "recurring": "jeden Mo, Mi, Fr",
                "priority": "p4",
                "labels": [],
                "addedAt": "2026-08-01T08:00:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "content": "Tagebuch schreiben",
                "projectId": "beispielHabits01",
                "dueDate": "2026-11-10T21:30:00",
                "recurring": "täglich",
                "priority": "p4",
                "labels": [],
                "addedAt": "2026-09-20T08:00:00.000Z"
            }
        ],
        "erledigt": [
            {
                "id": "beispielHabit001",
                "zeit": "2026-08-24T07:35:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-08-24T06:44:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-08-25T06:42:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-08-26T06:37:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-08-26T07:15:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-08-27T06:46:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-08-28T07:50:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-08-28T06:46:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-08-29T06:24:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-08-30T07:28:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-08-31T06:46:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-08-31T07:16:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-01T07:33:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-02T06:46:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-09-02T07:41:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-03T09:59:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-04T09:33:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-09-04T07:54:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-06T08:43:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-07T08:56:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-09-07T06:17:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-08T07:58:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-09T09:36:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-09-09T06:58:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-10T08:31:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-11T09:47:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-12T06:27:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-13T06:13:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-14T08:51:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-09-14T09:28:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-15T08:11:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-09-16T06:41:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-17T08:18:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-18T09:35:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-19T07:38:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-20T08:18:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-09-21T09:32:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-22T07:19:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-09-22T07:24:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-23T06:41:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-09-23T08:10:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-24T08:49:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-09-25T06:39:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-09-27T09:35:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-28T09:13:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-09-28T07:38:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-09-28T08:48:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-29T06:46:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-09-29T06:33:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-09-30T06:23:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-09-30T07:50:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-09-30T08:48:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-01T06:17:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-10-02T09:29:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-10-02T06:57:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-03T08:40:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-04T06:23:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-05T07:54:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-10-05T06:58:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-10-05T06:54:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-10-06T07:32:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-10-07T08:50:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-10-07T07:25:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-09T09:32:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-10-10T07:54:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-11T08:38:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-12T08:33:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-10-12T06:24:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-10-12T08:23:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-13T06:40:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-14T06:52:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-10-14T09:55:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-15T07:37:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-16T09:39:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-10-16T06:56:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-10-16T07:11:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-17T09:51:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-10-17T09:52:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-10-18T07:11:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-19T06:43:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-10-19T07:23:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-20T07:28:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-10-20T08:26:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-21T07:13:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-10-21T09:52:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-22T09:42:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-10-22T07:43:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-23T09:59:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-10-23T06:59:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-24T09:49:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-25T08:53:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-10-25T09:59:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-26T06:25:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-10-26T06:59:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-10-26T09:45:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-27T06:38:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-10-27T07:54:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-28T09:42:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-30T07:38:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-10-30T06:35:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-10-30T06:52:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-10-31T06:23:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-11-02T08:19:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-11-02T07:39:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-11-02T06:35:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-11-03T07:20:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-11-04T09:31:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-11-04T08:30:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-11-04T08:11:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-11-05T09:38:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-11-06T08:42:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-11-06T07:16:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-11-07T08:12:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-11-08T07:37:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-11-09T08:35:00.000Z"
            },
            {
                "id": "beispielHabit002",
                "zeit": "2026-11-09T09:54:00.000Z"
            },
            {
                "id": "beispielHabit003",
                "zeit": "2026-11-09T08:13:00.000Z"
            },
            {
                "id": "beispielHabit001",
                "zeit": "2026-11-10T05:31:00.000Z"
            }
        ]
    },
    "health": {
        "verlauf": {
            "hrv": [
                {
                    "datum": "2026-10-01",
                    "wert": 68.1
                },
                {
                    "datum": "2026-10-02",
                    "wert": 69.8
                },
                {
                    "datum": "2026-10-03",
                    "wert": 54.2
                },
                {
                    "datum": "2026-10-04",
                    "wert": 84.8
                },
                {
                    "datum": "2026-10-05",
                    "wert": 77.3
                },
                {
                    "datum": "2026-10-06",
                    "wert": 69.0
                },
                {
                    "datum": "2026-10-07",
                    "wert": 79.2
                },
                {
                    "datum": "2026-10-08",
                    "wert": 78.6
                },
                {
                    "datum": "2026-10-09",
                    "wert": 70.8
                },
                {
                    "datum": "2026-10-10",
                    "wert": 106.6
                },
                {
                    "datum": "2026-10-11",
                    "wert": 78.2
                },
                {
                    "datum": "2026-10-12",
                    "wert": 57.5
                },
                {
                    "datum": "2026-10-13",
                    "wert": 57.0
                },
                {
                    "datum": "2026-10-14",
                    "wert": 67.2
                },
                {
                    "datum": "2026-10-15",
                    "wert": 55.3
                },
                {
                    "datum": "2026-10-16",
                    "wert": 64.6
                },
                {
                    "datum": "2026-10-17",
                    "wert": 52.7
                },
                {
                    "datum": "2026-10-18",
                    "wert": 82.8
                },
                {
                    "datum": "2026-10-19",
                    "wert": 53.5
                },
                {
                    "datum": "2026-10-20",
                    "wert": 89.2
                },
                {
                    "datum": "2026-10-21",
                    "wert": 82.4
                },
                {
                    "datum": "2026-10-22",
                    "wert": 85.9
                },
                {
                    "datum": "2026-10-23",
                    "wert": 55.3
                },
                {
                    "datum": "2026-10-24",
                    "wert": 87.1
                },
                {
                    "datum": "2026-10-25",
                    "wert": 69.2
                },
                {
                    "datum": "2026-10-26",
                    "wert": 102.2
                },
                {
                    "datum": "2026-10-27",
                    "wert": 76.9
                },
                {
                    "datum": "2026-10-28",
                    "wert": 77.2
                },
                {
                    "datum": "2026-10-29",
                    "wert": 61.7
                },
                {
                    "datum": "2026-10-30",
                    "wert": 71.9
                },
                {
                    "datum": "2026-10-31",
                    "wert": 58.7
                },
                {
                    "datum": "2026-11-01",
                    "wert": 74.6
                },
                {
                    "datum": "2026-11-02",
                    "wert": 84.7
                },
                {
                    "datum": "2026-11-03",
                    "wert": 79.5
                },
                {
                    "datum": "2026-11-04",
                    "wert": 77.9
                },
                {
                    "datum": "2026-11-05",
                    "wert": 82.9
                },
                {
                    "datum": "2026-11-06",
                    "wert": 69.7
                },
                {
                    "datum": "2026-11-07",
                    "wert": 53.7
                },
                {
                    "datum": "2026-11-08",
                    "wert": 72.5
                },
                {
                    "datum": "2026-11-09",
                    "wert": 72.1
                },
                {
                    "datum": "2026-11-10",
                    "wert": 64.0
                }
            ],
            "ruhepuls": [
                {
                    "datum": "2026-10-01",
                    "wert": 59.0
                },
                {
                    "datum": "2026-10-02",
                    "wert": 58.0
                },
                {
                    "datum": "2026-10-03",
                    "wert": 54.0
                },
                {
                    "datum": "2026-10-04",
                    "wert": 55.0
                },
                {
                    "datum": "2026-10-05",
                    "wert": 55.0
                },
                {
                    "datum": "2026-10-06",
                    "wert": 58.0
                },
                {
                    "datum": "2026-10-07",
                    "wert": 54.0
                },
                {
                    "datum": "2026-10-08",
                    "wert": 57.0
                },
                {
                    "datum": "2026-10-09",
                    "wert": 58.0
                },
                {
                    "datum": "2026-10-10",
                    "wert": 55.0
                },
                {
                    "datum": "2026-10-11",
                    "wert": 56.0
                },
                {
                    "datum": "2026-10-12",
                    "wert": 60.0
                },
                {
                    "datum": "2026-10-13",
                    "wert": 54.0
                },
                {
                    "datum": "2026-10-14",
                    "wert": 57.0
                },
                {
                    "datum": "2026-10-15",
                    "wert": 54.0
                },
                {
                    "datum": "2026-10-16",
                    "wert": 59.0
                },
                {
                    "datum": "2026-10-17",
                    "wert": 55.0
                },
                {
                    "datum": "2026-10-18",
                    "wert": 55.0
                },
                {
                    "datum": "2026-10-19",
                    "wert": 54.0
                },
                {
                    "datum": "2026-10-20",
                    "wert": 57.0
                },
                {
                    "datum": "2026-10-21",
                    "wert": 55.0
                },
                {
                    "datum": "2026-10-22",
                    "wert": 56.0
                },
                {
                    "datum": "2026-10-23",
                    "wert": 58.0
                },
                {
                    "datum": "2026-10-24",
                    "wert": 60.0
                },
                {
                    "datum": "2026-10-25",
                    "wert": 57.0
                },
                {
                    "datum": "2026-10-26",
                    "wert": 54.0
                },
                {
                    "datum": "2026-10-27",
                    "wert": 58.0
                },
                {
                    "datum": "2026-10-28",
                    "wert": 55.0
                },
                {
                    "datum": "2026-10-29",
                    "wert": 56.0
                },
                {
                    "datum": "2026-10-30",
                    "wert": 54.0
                },
                {
                    "datum": "2026-10-31",
                    "wert": 56.0
                },
                {
                    "datum": "2026-11-01",
                    "wert": 58.0
                },
                {
                    "datum": "2026-11-02",
                    "wert": 59.0
                },
                {
                    "datum": "2026-11-03",
                    "wert": 56.0
                },
                {
                    "datum": "2026-11-04",
                    "wert": 56.0
                },
                {
                    "datum": "2026-11-05",
                    "wert": 58.0
                },
                {
                    "datum": "2026-11-06",
                    "wert": 54.0
                },
                {
                    "datum": "2026-11-07",
                    "wert": 56.0
                },
                {
                    "datum": "2026-11-08",
                    "wert": 57.0
                },
                {
                    "datum": "2026-11-09",
                    "wert": 60.0
                },
                {
                    "datum": "2026-11-10",
                    "wert": 59.0
                }
            ],
            "atemfrequenz": [
                {
                    "datum": "2026-10-01",
                    "wert": 14.2
                },
                {
                    "datum": "2026-10-02",
                    "wert": 13.8
                },
                {
                    "datum": "2026-10-03",
                    "wert": 13.6
                },
                {
                    "datum": "2026-10-04",
                    "wert": 14.0
                },
                {
                    "datum": "2026-10-05",
                    "wert": 14.3
                },
                {
                    "datum": "2026-10-06",
                    "wert": 13.8
                },
                {
                    "datum": "2026-10-07",
                    "wert": 13.2
                },
                {
                    "datum": "2026-10-08",
                    "wert": 13.4
                },
                {
                    "datum": "2026-10-09",
                    "wert": 13.9
                },
                {
                    "datum": "2026-10-10",
                    "wert": 13.4
                },
                {
                    "datum": "2026-10-11",
                    "wert": 13.6
                },
                {
                    "datum": "2026-10-12",
                    "wert": 13.3
                },
                {
                    "datum": "2026-10-13",
                    "wert": 13.7
                },
                {
                    "datum": "2026-10-14",
                    "wert": 13.6
                },
                {
                    "datum": "2026-10-15",
                    "wert": 14.1
                },
                {
                    "datum": "2026-10-16",
                    "wert": 13.8
                },
                {
                    "datum": "2026-10-17",
                    "wert": 13.3
                },
                {
                    "datum": "2026-10-18",
                    "wert": 13.3
                },
                {
                    "datum": "2026-10-19",
                    "wert": 13.8
                },
                {
                    "datum": "2026-10-20",
                    "wert": 13.9
                },
                {
                    "datum": "2026-10-21",
                    "wert": 13.7
                },
                {
                    "datum": "2026-10-22",
                    "wert": 13.8
                },
                {
                    "datum": "2026-10-23",
                    "wert": 12.8
                },
                {
                    "datum": "2026-10-24",
                    "wert": 13.2
                },
                {
                    "datum": "2026-10-25",
                    "wert": 13.5
                },
                {
                    "datum": "2026-10-26",
                    "wert": 13.5
                },
                {
                    "datum": "2026-10-27",
                    "wert": 13.7
                },
                {
                    "datum": "2026-10-28",
                    "wert": 13.7
                },
                {
                    "datum": "2026-10-29",
                    "wert": 13.3
                },
                {
                    "datum": "2026-10-30",
                    "wert": 13.4
                },
                {
                    "datum": "2026-10-31",
                    "wert": 13.1
                },
                {
                    "datum": "2026-11-01",
                    "wert": 13.7
                },
                {
                    "datum": "2026-11-02",
                    "wert": 14.0
                },
                {
                    "datum": "2026-11-03",
                    "wert": 13.2
                },
                {
                    "datum": "2026-11-04",
                    "wert": 13.3
                },
                {
                    "datum": "2026-11-05",
                    "wert": 13.2
                },
                {
                    "datum": "2026-11-06",
                    "wert": 13.7
                },
                {
                    "datum": "2026-11-07",
                    "wert": 13.2
                },
                {
                    "datum": "2026-11-08",
                    "wert": 13.1
                },
                {
                    "datum": "2026-11-09",
                    "wert": 13.1
                },
                {
                    "datum": "2026-11-10",
                    "wert": 15.4
                }
            ],
            "schlaf_minuten": [
                {
                    "datum": "2026-10-01",
                    "wert": 384.0
                },
                {
                    "datum": "2026-10-02",
                    "wert": 414.0
                },
                {
                    "datum": "2026-10-03",
                    "wert": 375.0
                },
                {
                    "datum": "2026-10-04",
                    "wert": 375.0
                },
                {
                    "datum": "2026-10-05",
                    "wert": 434.0
                },
                {
                    "datum": "2026-10-06",
                    "wert": 438.0
                },
                {
                    "datum": "2026-10-07",
                    "wert": 455.0
                },
                {
                    "datum": "2026-10-08",
                    "wert": 496.0
                },
                {
                    "datum": "2026-10-09",
                    "wert": 423.0
                },
                {
                    "datum": "2026-10-10",
                    "wert": 380.0
                },
                {
                    "datum": "2026-10-11",
                    "wert": 378.0
                },
                {
                    "datum": "2026-10-12",
                    "wert": 447.0
                },
                {
                    "datum": "2026-10-13",
                    "wert": 440.0
                },
                {
                    "datum": "2026-10-14",
                    "wert": 476.0
                },
                {
                    "datum": "2026-10-15",
                    "wert": 474.0
                },
                {
                    "datum": "2026-10-16",
                    "wert": 448.0
                },
                {
                    "datum": "2026-10-17",
                    "wert": 415.0
                },
                {
                    "datum": "2026-10-18",
                    "wert": 461.0
                },
                {
                    "datum": "2026-10-19",
                    "wert": 431.0
                },
                {
                    "datum": "2026-10-20",
                    "wert": 451.0
                },
                {
                    "datum": "2026-10-21",
                    "wert": 419.0
                },
                {
                    "datum": "2026-10-22",
                    "wert": 361.0
                },
                {
                    "datum": "2026-10-23",
                    "wert": 491.0
                },
                {
                    "datum": "2026-10-24",
                    "wert": 460.0
                },
                {
                    "datum": "2026-10-25",
                    "wert": 377.0
                },
                {
                    "datum": "2026-10-26",
                    "wert": 447.0
                },
                {
                    "datum": "2026-10-27",
                    "wert": 453.0
                },
                {
                    "datum": "2026-10-28",
                    "wert": 456.0
                },
                {
                    "datum": "2026-10-29",
                    "wert": 389.0
                },
                {
                    "datum": "2026-10-29",
                    "wert": 35.0
                },
                {
                    "datum": "2026-10-30",
                    "wert": 396.0
                },
                {
                    "datum": "2026-10-31",
                    "wert": 492.0
                },
                {
                    "datum": "2026-11-01",
                    "wert": 366.0
                },
                {
                    "datum": "2026-11-02",
                    "wert": 426.0
                },
                {
                    "datum": "2026-11-03",
                    "wert": 417.0
                },
                {
                    "datum": "2026-11-04",
                    "wert": 409.0
                },
                {
                    "datum": "2026-11-05",
                    "wert": 486.0
                },
                {
                    "datum": "2026-11-06",
                    "wert": 409.0
                },
                {
                    "datum": "2026-11-07",
                    "wert": 453.0
                },
                {
                    "datum": "2026-11-08",
                    "wert": 360.0
                },
                {
                    "datum": "2026-11-09",
                    "wert": 381.0
                },
                {
                    "datum": "2026-11-10",
                    "wert": 402.0
                }
            ]
        }
    }
};
