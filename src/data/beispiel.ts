import type { Daten } from '../types/daten';

// Ausgedachte Beispieldaten im Format der daten.json (keine echten Aufgaben oder Gesundheitswerte).
// Später ersetzt durch die Daten, die der Skill jeden Morgen sammelt.
export const daten: Daten = {
    "heute": "2026-11-10",
    "name": "Alex",
    "wetter": {
        "hoch": 8,
        "tief": 3,
        "himmel": "leicht bewölkt",
        "niederschlag": "Schauer ab 16 Uhr"
    },
    "projekte": [
        {
            "id": "proj-privat",
            "name": "Privat",
            "parentId": null
        },
        {
            "id": "proj-arbeit",
            "name": "Nebenjob",
            "parentId": null
        },
        {
            "id": "proj-uni",
            "name": "Uni",
            "parentId": null
        },
        {
            "id": "proj-uni-mathe",
            "name": "Mathe",
            "parentId": "proj-uni"
        },
        {
            "id": "proj-uni-prog",
            "name": "Programmieren",
            "parentId": "proj-uni"
        },
        {
            "id": "proj-uni-db",
            "name": "Datenbanken",
            "parentId": "proj-uni"
        },
        {
            "id": "proj-inbox",
            "name": "Inbox",
            "parentId": null
        },
        {
            "id": "proj-einkaufen",
            "name": "Einkaufen",
            "parentId": null
        },
        {
            "id": "proj-habits",
            "name": "Gewohnheiten",
            "parentId": null
        }
    ],
    "heute_faellig": [
        {
            "id": "task-001",
            "content": "Übungsblatt 5 abgeben",
            "projectId": "proj-uni-mathe",
            "dueDate": "2026-11-08",
            "deadlineDate": "2026-11-10",
            "recurring": false,
            "priority": "p4",
            "labels": [
                "urgent"
            ],
            "duration": "2h",
            "addedAt": "2026-10-27T08:00:00.000Z"
        },
        {
            "id": "task-002",
            "content": "Kapitel 4 nacharbeiten",
            "projectId": "proj-uni-db",
            "dueDate": "2026-11-10",
            "deadlineDate": "2026-11-13",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "1h30m",
            "addedAt": "2026-10-20T09:00:00.000Z"
        },
        {
            "id": "task-003",
            "content": "Projektaufgabe: Klassen entwerfen",
            "projectId": "proj-uni-prog",
            "parentId": "task-004",
            "dueDate": "2026-11-10",
            "deadlineDate": "2026-11-19",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "addedAt": "2026-10-20T09:00:00.000Z"
        },
        {
            "id": "task-007",
            "content": "Zahnarzttermin vereinbaren",
            "projectId": "proj-privat",
            "dueDate": "2026-11-10T09:00:00",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "15m",
            "addedAt": "2026-10-20T09:00:00.000Z"
        },
        {
            "id": "task-008",
            "content": "Wohnung aufräumen",
            "projectId": "proj-privat",
            "dueDate": "2026-11-10",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "1h",
            "addedAt": "2026-10-20T09:00:00.000Z"
        },
        {
            "id": "task-009",
            "content": "Stundenzettel einreichen",
            "projectId": "proj-arbeit",
            "dueDate": "2026-11-10",
            "deadlineDate": "2026-11-11",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "20m",
            "addedAt": "2026-10-20T09:00:00.000Z"
        },
        {
            "id": "task-010",
            "content": "Paket zur Post bringen",
            "projectId": "proj-inbox",
            "dueDate": "2026-11-09",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "addedAt": "2026-10-20T09:00:00.000Z"
        },
        {
            "id": "task-012",
            "content": "Hafermilch",
            "projectId": "proj-einkaufen",
            "dueDate": "2026-11-10",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "addedAt": "2026-10-20T09:00:00.000Z"
        },
        {
            "id": "task-020",
            "content": "Karteikarten wiederholen",
            "projectId": "proj-uni-db",
            "dueDate": "2026-11-10T18:00:00",
            "recurring": "every day",
            "priority": "p4",
            "labels": [],
            "duration": "30m",
            "addedAt": "2026-10-05T10:00:00.000Z"
        }
    ],
    "offen": [
        {
            "id": "task-001",
            "content": "Übungsblatt 5 abgeben",
            "projectId": "proj-uni-mathe",
            "dueDate": "2026-11-08",
            "deadlineDate": "2026-11-10",
            "recurring": false,
            "priority": "p4",
            "labels": [
                "urgent"
            ],
            "duration": "2h",
            "addedAt": "2026-10-27T08:00:00.000Z"
        },
        {
            "id": "task-002",
            "content": "Kapitel 4 nacharbeiten",
            "projectId": "proj-uni-db",
            "dueDate": "2026-11-10",
            "deadlineDate": "2026-11-13",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "1h30m",
            "addedAt": "2026-10-20T09:00:00.000Z"
        },
        {
            "id": "task-003",
            "content": "Projektaufgabe: Klassen entwerfen",
            "projectId": "proj-uni-prog",
            "parentId": "task-004",
            "dueDate": "2026-11-10",
            "deadlineDate": "2026-11-19",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "addedAt": "2026-10-20T09:00:00.000Z"
        },
        {
            "id": "task-004",
            "content": "Projektabgabe Programmieren",
            "projectId": "proj-uni-prog",
            "deadlineDate": "2026-11-19",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "6h",
            "addedAt": "2026-10-15T10:00:00.000Z"
        },
        {
            "id": "task-005",
            "content": "Projektaufgabe: Tests schreiben",
            "projectId": "proj-uni-prog",
            "parentId": "task-004",
            "dueDate": "2026-11-12",
            "deadlineDate": "2026-11-19",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "addedAt": "2026-10-20T09:00:00.000Z"
        },
        {
            "id": "task-006",
            "content": "Klausurvorbereitung Mathe",
            "projectId": "proj-uni-mathe",
            "deadlineDate": "2026-12-25",
            "recurring": false,
            "priority": "p4",
            "labels": [
                "oldest"
            ],
            "duration": "10h",
            "addedAt": "2026-10-01T10:00:00.000Z"
        },
        {
            "id": "task-007",
            "content": "Zahnarzttermin vereinbaren",
            "projectId": "proj-privat",
            "dueDate": "2026-11-10T09:00:00",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "15m",
            "addedAt": "2026-10-20T09:00:00.000Z"
        },
        {
            "id": "task-008",
            "content": "Wohnung aufräumen",
            "projectId": "proj-privat",
            "dueDate": "2026-11-10",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "1h",
            "addedAt": "2026-10-20T09:00:00.000Z"
        },
        {
            "id": "task-009",
            "content": "Stundenzettel einreichen",
            "projectId": "proj-arbeit",
            "dueDate": "2026-11-10",
            "deadlineDate": "2026-11-11",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "20m",
            "addedAt": "2026-10-20T09:00:00.000Z"
        },
        {
            "id": "task-010",
            "content": "Paket zur Post bringen",
            "projectId": "proj-inbox",
            "dueDate": "2026-11-09",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "addedAt": "2026-10-20T09:00:00.000Z"
        },
        {
            "id": "task-011",
            "content": "Geburtstagsgeschenk überlegen",
            "projectId": "proj-privat",
            "dueDate": "2026-11-14",
            "deadlineDate": "2026-11-16",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "duration": "30m",
            "addedAt": "2026-10-20T09:00:00.000Z"
        },
        {
            "id": "task-012",
            "content": "Hafermilch",
            "projectId": "proj-einkaufen",
            "dueDate": "2026-11-10",
            "recurring": false,
            "priority": "p4",
            "labels": [],
            "addedAt": "2026-10-20T09:00:00.000Z"
        }
    ],
    "uni": {
        "erledigt_woche": [
            {
                "id": "done-001",
                "zeit": "2026-11-09T09:15:00.000Z",
                "projectId": "proj-uni-db",
                "content": "Vorlesung Datenbanken nacharbeiten",
                "dauer_min": 90,
                "parentId": null,
                "wiederkehrend": false
            },
            {
                "id": "done-002",
                "zeit": "2026-11-09T13:15:00.000Z",
                "projectId": "proj-uni-prog",
                "content": "Projektaufgabe: Anforderungen sammeln",
                "dauer_min": null,
                "parentId": "task-004",
                "wiederkehrend": false
            },
            {
                "id": "task-020",
                "zeit": "2026-11-09T17:15:00.000Z",
                "projectId": "proj-uni-db",
                "content": "Karteikarten wiederholen",
                "dauer_min": 30,
                "parentId": null,
                "wiederkehrend": true
            },
            {
                "id": "done-004",
                "zeit": "2026-11-10T07:15:00.000Z",
                "projectId": "proj-uni-mathe",
                "content": "Übung Mathe vorbereiten",
                "dauer_min": 60,
                "parentId": null,
                "wiederkehrend": false
            },
            {
                "id": "done-005",
                "zeit": "2026-11-10T08:15:00.000Z",
                "projectId": "proj-einkaufen",
                "content": "Einkauf erledigt",
                "dauer_min": null,
                "parentId": null,
                "wiederkehrend": false
            }
        ],
        "wiederkehrend": [
            {
                "id": "task-020",
                "content": "Karteikarten wiederholen",
                "projectId": "proj-uni-db",
                "dueDate": "2026-11-10T18:00:00",
                "recurring": "every day",
                "priority": "p4",
                "labels": [],
                "duration": "30m",
                "addedAt": "2026-10-05T10:00:00.000Z"
            }
        ]
    },
    "habits": {
        "projekt_id": "proj-habits",
        "aufgaben": [
            {
                "id": "task-101",
                "content": "10 Minuten lesen",
                "projectId": "proj-habits",
                "dueDate": "2026-11-10",
                "recurring": "every day",
                "priority": "p4",
                "labels": [],
                "addedAt": "2026-08-01T08:00:00.000Z"
            },
            {
                "id": "task-102",
                "content": "Dehnen",
                "projectId": "proj-habits",
                "dueDate": "2026-11-11",
                "recurring": "jeden Mo, Mi, Fr",
                "priority": "p4",
                "labels": [],
                "addedAt": "2026-08-01T08:00:00.000Z"
            },
            {
                "id": "task-103",
                "content": "Spaziergang",
                "projectId": "proj-habits",
                "dueDate": "2026-11-10T17:00:00",
                "recurring": "every weekday",
                "priority": "p4",
                "labels": [],
                "addedAt": "2026-09-15T08:00:00.000Z"
            }
        ],
        "erledigt": [
            {
                "id": "task-101",
                "zeit": "2026-08-18T06:47:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-08-19T07:08:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-08-20T20:05:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-08-21T06:01:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-08-21T07:32:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-08-22T20:12:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-08-23T20:26:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-08-24T20:17:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-08-25T07:44:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-08-26T11:09:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-08-26T11:06:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-08-27T06:22:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-08-28T06:46:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-08-29T06:59:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-08-30T20:18:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-08-31T11:36:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-01T06:02:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-02T11:05:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-04T17:40:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-05T11:13:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-06T06:38:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-07T20:46:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-09-07T17:24:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-08T20:14:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-09T06:14:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-11T06:13:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-12T11:13:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-13T17:56:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-09-14T11:08:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-15T20:34:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-09-15T20:27:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-09-16T07:08:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-09-16T06:48:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-17T06:09:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-09-17T17:38:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-18T17:38:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-09-18T20:55:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-20T06:43:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-22T11:27:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-09-22T06:46:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-09-23T20:48:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-09-23T06:55:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-24T20:38:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-09-24T11:48:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-25T20:58:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-09-25T11:31:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-09-25T11:56:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-28T07:56:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-09-28T06:05:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-09-30T07:08:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-09-30T20:10:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-09-30T20:27:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-10-02T11:25:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-03T17:57:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-04T06:15:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-05T11:01:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-10-05T07:37:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-10-05T06:45:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-06T07:04:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-10-07T07:17:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-10-07T07:34:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-08T20:36:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-10-08T17:51:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-09T06:06:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-10-09T11:27:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-10-09T06:43:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-10T06:03:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-11T11:51:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-10-12T07:34:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-10-12T17:11:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-13T07:55:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-14T20:06:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-10-14T20:53:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-10-14T06:59:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-10-15T17:31:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-16T17:57:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-10-16T17:00:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-17T17:18:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-18T20:42:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-19T07:12:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-10-19T06:37:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-20T11:03:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-10-20T17:32:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-10-21T06:32:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-10-21T07:04:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-22T07:25:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-10-22T20:15:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-23T06:39:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-10-23T20:36:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-10-23T11:13:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-24T11:15:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-25T07:42:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-26T17:20:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-27T20:36:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-28T07:32:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-10-28T11:56:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-10-28T07:23:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-10-29T17:53:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-10-29T11:39:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-10-30T20:19:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-11-01T07:16:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-11-02T06:47:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-11-02T11:18:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-11-02T11:13:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-11-03T11:32:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-11-03T06:05:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-11-04T11:02:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-11-04T07:40:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-11-05T17:35:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-11-05T20:00:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-11-06T07:34:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-11-06T11:37:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-11-06T17:08:00.000Z"
            },
            {
                "id": "task-101",
                "zeit": "2026-11-07T11:57:00.000Z"
            },
            {
                "id": "task-102",
                "zeit": "2026-11-09T11:13:00.000Z"
            },
            {
                "id": "task-103",
                "zeit": "2026-11-09T06:22:00.000Z"
            }
        ]
    },
    "health": {
        "verlauf": {
            "hrv": [
                {
                    "datum": "2026-08-12",
                    "wert": 63.5
                },
                {
                    "datum": "2026-08-13",
                    "wert": 67.8
                },
                {
                    "datum": "2026-08-14",
                    "wert": 66.3
                },
                {
                    "datum": "2026-08-15",
                    "wert": 59.0
                },
                {
                    "datum": "2026-08-16",
                    "wert": 65.1
                },
                {
                    "datum": "2026-08-17",
                    "wert": 69.5
                },
                {
                    "datum": "2026-08-18",
                    "wert": 60.6
                },
                {
                    "datum": "2026-08-19",
                    "wert": 66.3
                },
                {
                    "datum": "2026-08-20",
                    "wert": 66.5
                },
                {
                    "datum": "2026-08-21",
                    "wert": 67.7
                },
                {
                    "datum": "2026-08-22",
                    "wert": 64.6
                },
                {
                    "datum": "2026-08-23",
                    "wert": 64.7
                },
                {
                    "datum": "2026-08-24",
                    "wert": 56.8
                },
                {
                    "datum": "2026-08-25",
                    "wert": 59.4
                },
                {
                    "datum": "2026-08-26",
                    "wert": 52.4
                },
                {
                    "datum": "2026-08-27",
                    "wert": 56.6
                },
                {
                    "datum": "2026-08-28",
                    "wert": 53.6
                },
                {
                    "datum": "2026-08-29",
                    "wert": 54.2
                },
                {
                    "datum": "2026-08-30",
                    "wert": 57.7
                },
                {
                    "datum": "2026-08-31",
                    "wert": 58.5
                },
                {
                    "datum": "2026-09-01",
                    "wert": 56.6
                },
                {
                    "datum": "2026-09-02",
                    "wert": 50.2
                },
                {
                    "datum": "2026-09-03",
                    "wert": 43.9
                },
                {
                    "datum": "2026-09-04",
                    "wert": 56.2
                },
                {
                    "datum": "2026-09-05",
                    "wert": 54.8
                },
                {
                    "datum": "2026-09-06",
                    "wert": 52.4
                },
                {
                    "datum": "2026-09-07",
                    "wert": 53.2
                },
                {
                    "datum": "2026-09-08",
                    "wert": 54.8
                },
                {
                    "datum": "2026-09-09",
                    "wert": 53.0
                },
                {
                    "datum": "2026-09-10",
                    "wert": 57.2
                },
                {
                    "datum": "2026-09-11",
                    "wert": 53.5
                },
                {
                    "datum": "2026-09-12",
                    "wert": 48.7
                },
                {
                    "datum": "2026-09-13",
                    "wert": 48.5
                },
                {
                    "datum": "2026-09-14",
                    "wert": 56.6
                },
                {
                    "datum": "2026-09-15",
                    "wert": 63.8
                },
                {
                    "datum": "2026-09-16",
                    "wert": 59.6
                },
                {
                    "datum": "2026-09-17",
                    "wert": 58.2
                },
                {
                    "datum": "2026-09-18",
                    "wert": 60.9
                },
                {
                    "datum": "2026-09-19",
                    "wert": 62.8
                },
                {
                    "datum": "2026-09-20",
                    "wert": 58.6
                },
                {
                    "datum": "2026-09-21",
                    "wert": 55.7
                },
                {
                    "datum": "2026-09-22",
                    "wert": 67.9
                },
                {
                    "datum": "2026-09-23",
                    "wert": 59.9
                },
                {
                    "datum": "2026-09-24",
                    "wert": 58.2
                },
                {
                    "datum": "2026-09-25",
                    "wert": 64.4
                },
                {
                    "datum": "2026-09-26",
                    "wert": 60.5
                },
                {
                    "datum": "2026-09-27",
                    "wert": 61.2
                },
                {
                    "datum": "2026-09-28",
                    "wert": 58.6
                },
                {
                    "datum": "2026-09-29",
                    "wert": 64.9
                },
                {
                    "datum": "2026-09-30",
                    "wert": 62.0
                },
                {
                    "datum": "2026-10-01",
                    "wert": 60.3
                },
                {
                    "datum": "2026-10-02",
                    "wert": 59.3
                },
                {
                    "datum": "2026-10-03",
                    "wert": 67.4
                },
                {
                    "datum": "2026-10-04",
                    "wert": 57.4
                },
                {
                    "datum": "2026-10-05",
                    "wert": 54.4
                },
                {
                    "datum": "2026-10-06",
                    "wert": 55.2
                },
                {
                    "datum": "2026-10-07",
                    "wert": 53.2
                },
                {
                    "datum": "2026-10-08",
                    "wert": 45.7
                },
                {
                    "datum": "2026-10-09",
                    "wert": 46.4
                },
                {
                    "datum": "2026-10-10",
                    "wert": 54.1
                },
                {
                    "datum": "2026-10-11",
                    "wert": 49.3
                },
                {
                    "datum": "2026-10-12",
                    "wert": 56.8
                },
                {
                    "datum": "2026-10-13",
                    "wert": 51.6
                },
                {
                    "datum": "2026-10-14",
                    "wert": 48.7
                },
                {
                    "datum": "2026-10-15",
                    "wert": 53.9
                },
                {
                    "datum": "2026-10-16",
                    "wert": 46.2
                },
                {
                    "datum": "2026-10-17",
                    "wert": 55.9
                },
                {
                    "datum": "2026-10-18",
                    "wert": 57.1
                },
                {
                    "datum": "2026-10-19",
                    "wert": 49.6
                },
                {
                    "datum": "2026-10-20",
                    "wert": 53.8
                },
                {
                    "datum": "2026-10-21",
                    "wert": 55.9
                },
                {
                    "datum": "2026-10-22",
                    "wert": 55.3
                },
                {
                    "datum": "2026-10-23",
                    "wert": 56.1
                },
                {
                    "datum": "2026-10-24",
                    "wert": 59.1
                },
                {
                    "datum": "2026-10-25",
                    "wert": 58.9
                },
                {
                    "datum": "2026-10-26",
                    "wert": 55.7
                },
                {
                    "datum": "2026-10-27",
                    "wert": 61.9
                },
                {
                    "datum": "2026-10-28",
                    "wert": 66.6
                },
                {
                    "datum": "2026-10-29",
                    "wert": 64.4
                },
                {
                    "datum": "2026-10-30",
                    "wert": 60.6
                },
                {
                    "datum": "2026-10-31",
                    "wert": 64.3
                },
                {
                    "datum": "2026-11-01",
                    "wert": 62.3
                },
                {
                    "datum": "2026-11-02",
                    "wert": 69.5
                },
                {
                    "datum": "2026-11-03",
                    "wert": 59.5
                },
                {
                    "datum": "2026-11-04",
                    "wert": 72.1
                },
                {
                    "datum": "2026-11-05",
                    "wert": 61.2
                },
                {
                    "datum": "2026-11-06",
                    "wert": 64.8
                },
                {
                    "datum": "2026-11-07",
                    "wert": 65.9
                },
                {
                    "datum": "2026-11-08",
                    "wert": 60.6
                },
                {
                    "datum": "2026-11-09",
                    "wert": 55.4
                },
                {
                    "datum": "2026-11-10",
                    "wert": 52.4
                }
            ],
            "ruhepuls": [
                {
                    "datum": "2026-08-12",
                    "wert": 57
                },
                {
                    "datum": "2026-08-13",
                    "wert": 61
                },
                {
                    "datum": "2026-08-14",
                    "wert": 56
                },
                {
                    "datum": "2026-08-15",
                    "wert": 61
                },
                {
                    "datum": "2026-08-16",
                    "wert": 58
                },
                {
                    "datum": "2026-08-17",
                    "wert": 57
                },
                {
                    "datum": "2026-08-18",
                    "wert": 59
                },
                {
                    "datum": "2026-08-19",
                    "wert": 59
                },
                {
                    "datum": "2026-08-20",
                    "wert": 58
                },
                {
                    "datum": "2026-08-21",
                    "wert": 59
                },
                {
                    "datum": "2026-08-22",
                    "wert": 59
                },
                {
                    "datum": "2026-08-23",
                    "wert": 60
                },
                {
                    "datum": "2026-08-24",
                    "wert": 58
                },
                {
                    "datum": "2026-08-25",
                    "wert": 61
                },
                {
                    "datum": "2026-08-26",
                    "wert": 59
                },
                {
                    "datum": "2026-08-27",
                    "wert": 60
                },
                {
                    "datum": "2026-08-28",
                    "wert": 62
                },
                {
                    "datum": "2026-08-29",
                    "wert": 62
                },
                {
                    "datum": "2026-08-30",
                    "wert": 62
                },
                {
                    "datum": "2026-08-31",
                    "wert": 60
                },
                {
                    "datum": "2026-09-01",
                    "wert": 61
                },
                {
                    "datum": "2026-09-02",
                    "wert": 60
                },
                {
                    "datum": "2026-09-03",
                    "wert": 62
                },
                {
                    "datum": "2026-09-04",
                    "wert": 62
                },
                {
                    "datum": "2026-09-05",
                    "wert": 60
                },
                {
                    "datum": "2026-09-06",
                    "wert": 62
                },
                {
                    "datum": "2026-09-07",
                    "wert": 61
                },
                {
                    "datum": "2026-09-08",
                    "wert": 63
                },
                {
                    "datum": "2026-09-09",
                    "wert": 61
                },
                {
                    "datum": "2026-09-10",
                    "wert": 62
                },
                {
                    "datum": "2026-09-11",
                    "wert": 61
                },
                {
                    "datum": "2026-09-12",
                    "wert": 61
                },
                {
                    "datum": "2026-09-13",
                    "wert": 59
                },
                {
                    "datum": "2026-09-14",
                    "wert": 59
                },
                {
                    "datum": "2026-09-15",
                    "wert": 59
                },
                {
                    "datum": "2026-09-16",
                    "wert": 61
                },
                {
                    "datum": "2026-09-17",
                    "wert": 59
                },
                {
                    "datum": "2026-09-18",
                    "wert": 60
                },
                {
                    "datum": "2026-09-19",
                    "wert": 61
                },
                {
                    "datum": "2026-09-20",
                    "wert": 60
                },
                {
                    "datum": "2026-09-21",
                    "wert": 60
                },
                {
                    "datum": "2026-09-22",
                    "wert": 57
                },
                {
                    "datum": "2026-09-23",
                    "wert": 60
                },
                {
                    "datum": "2026-09-24",
                    "wert": 59
                },
                {
                    "datum": "2026-09-25",
                    "wert": 59
                },
                {
                    "datum": "2026-09-26",
                    "wert": 60
                },
                {
                    "datum": "2026-09-27",
                    "wert": 59
                },
                {
                    "datum": "2026-09-28",
                    "wert": 60
                },
                {
                    "datum": "2026-09-29",
                    "wert": 60
                },
                {
                    "datum": "2026-09-30",
                    "wert": 60
                },
                {
                    "datum": "2026-10-01",
                    "wert": 57
                },
                {
                    "datum": "2026-10-02",
                    "wert": 59
                },
                {
                    "datum": "2026-10-03",
                    "wert": 61
                },
                {
                    "datum": "2026-10-04",
                    "wert": 62
                },
                {
                    "datum": "2026-10-05",
                    "wert": 61
                },
                {
                    "datum": "2026-10-06",
                    "wert": 62
                },
                {
                    "datum": "2026-10-07",
                    "wert": 59
                },
                {
                    "datum": "2026-10-08",
                    "wert": 60
                },
                {
                    "datum": "2026-10-09",
                    "wert": 63
                },
                {
                    "datum": "2026-10-10",
                    "wert": 61
                },
                {
                    "datum": "2026-10-11",
                    "wert": 59
                },
                {
                    "datum": "2026-10-12",
                    "wert": 62
                },
                {
                    "datum": "2026-10-13",
                    "wert": 61
                },
                {
                    "datum": "2026-10-14",
                    "wert": 62
                },
                {
                    "datum": "2026-10-15",
                    "wert": 62
                },
                {
                    "datum": "2026-10-16",
                    "wert": 59
                },
                {
                    "datum": "2026-10-17",
                    "wert": 60
                },
                {
                    "datum": "2026-10-18",
                    "wert": 61
                },
                {
                    "datum": "2026-10-19",
                    "wert": 60
                },
                {
                    "datum": "2026-10-20",
                    "wert": 62
                },
                {
                    "datum": "2026-10-21",
                    "wert": 62
                },
                {
                    "datum": "2026-10-22",
                    "wert": 60
                },
                {
                    "datum": "2026-10-23",
                    "wert": 59
                },
                {
                    "datum": "2026-10-24",
                    "wert": 60
                },
                {
                    "datum": "2026-10-25",
                    "wert": 61
                },
                {
                    "datum": "2026-10-26",
                    "wert": 60
                },
                {
                    "datum": "2026-10-27",
                    "wert": 60
                },
                {
                    "datum": "2026-10-28",
                    "wert": 60
                },
                {
                    "datum": "2026-10-29",
                    "wert": 60
                },
                {
                    "datum": "2026-10-30",
                    "wert": 58
                },
                {
                    "datum": "2026-10-31",
                    "wert": 59
                },
                {
                    "datum": "2026-11-01",
                    "wert": 62
                },
                {
                    "datum": "2026-11-02",
                    "wert": 60
                },
                {
                    "datum": "2026-11-03",
                    "wert": 58
                },
                {
                    "datum": "2026-11-04",
                    "wert": 60
                },
                {
                    "datum": "2026-11-05",
                    "wert": 59
                },
                {
                    "datum": "2026-11-06",
                    "wert": 60
                },
                {
                    "datum": "2026-11-07",
                    "wert": 61
                },
                {
                    "datum": "2026-11-08",
                    "wert": 58
                },
                {
                    "datum": "2026-11-09",
                    "wert": 59
                },
                {
                    "datum": "2026-11-10",
                    "wert": 62
                }
            ],
            "atemfrequenz": [
                {
                    "datum": "2026-08-12",
                    "wert": 13.7
                },
                {
                    "datum": "2026-08-13",
                    "wert": 14.5
                },
                {
                    "datum": "2026-08-14",
                    "wert": 14.4
                },
                {
                    "datum": "2026-08-15",
                    "wert": 14.2
                },
                {
                    "datum": "2026-08-16",
                    "wert": 14.0
                },
                {
                    "datum": "2026-08-17",
                    "wert": 14.1
                },
                {
                    "datum": "2026-08-18",
                    "wert": 14.1
                },
                {
                    "datum": "2026-08-19",
                    "wert": 13.8
                },
                {
                    "datum": "2026-08-20",
                    "wert": 13.8
                },
                {
                    "datum": "2026-08-21",
                    "wert": 14.1
                },
                {
                    "datum": "2026-08-22",
                    "wert": 14.2
                },
                {
                    "datum": "2026-08-23",
                    "wert": 14.0
                },
                {
                    "datum": "2026-08-24",
                    "wert": 13.8
                },
                {
                    "datum": "2026-08-25",
                    "wert": 14.6
                },
                {
                    "datum": "2026-08-26",
                    "wert": 14.0
                },
                {
                    "datum": "2026-08-27",
                    "wert": 13.9
                },
                {
                    "datum": "2026-08-28",
                    "wert": 14.0
                },
                {
                    "datum": "2026-08-29",
                    "wert": 13.8
                },
                {
                    "datum": "2026-08-30",
                    "wert": 14.3
                },
                {
                    "datum": "2026-08-31",
                    "wert": 13.9
                },
                {
                    "datum": "2026-09-01",
                    "wert": 13.7
                },
                {
                    "datum": "2026-09-02",
                    "wert": 13.8
                },
                {
                    "datum": "2026-09-03",
                    "wert": 14.0
                },
                {
                    "datum": "2026-09-04",
                    "wert": 13.8
                },
                {
                    "datum": "2026-09-05",
                    "wert": 13.9
                },
                {
                    "datum": "2026-09-06",
                    "wert": 14.0
                },
                {
                    "datum": "2026-09-07",
                    "wert": 13.7
                },
                {
                    "datum": "2026-09-08",
                    "wert": 13.8
                },
                {
                    "datum": "2026-09-09",
                    "wert": 14.0
                },
                {
                    "datum": "2026-09-10",
                    "wert": 14.3
                },
                {
                    "datum": "2026-09-11",
                    "wert": 14.0
                },
                {
                    "datum": "2026-09-12",
                    "wert": 13.6
                },
                {
                    "datum": "2026-09-13",
                    "wert": 14.3
                },
                {
                    "datum": "2026-09-14",
                    "wert": 14.2
                },
                {
                    "datum": "2026-09-15",
                    "wert": 13.8
                },
                {
                    "datum": "2026-09-16",
                    "wert": 14.0
                },
                {
                    "datum": "2026-09-17",
                    "wert": 14.2
                },
                {
                    "datum": "2026-09-18",
                    "wert": 13.9
                },
                {
                    "datum": "2026-09-19",
                    "wert": 14.0
                },
                {
                    "datum": "2026-09-20",
                    "wert": 13.9
                },
                {
                    "datum": "2026-09-21",
                    "wert": 13.7
                },
                {
                    "datum": "2026-09-22",
                    "wert": 14.0
                },
                {
                    "datum": "2026-09-23",
                    "wert": 14.4
                },
                {
                    "datum": "2026-09-24",
                    "wert": 13.7
                },
                {
                    "datum": "2026-09-25",
                    "wert": 13.9
                },
                {
                    "datum": "2026-09-26",
                    "wert": 13.9
                },
                {
                    "datum": "2026-09-27",
                    "wert": 14.0
                },
                {
                    "datum": "2026-09-28",
                    "wert": 14.4
                },
                {
                    "datum": "2026-09-29",
                    "wert": 14.2
                },
                {
                    "datum": "2026-09-30",
                    "wert": 14.0
                },
                {
                    "datum": "2026-10-01",
                    "wert": 14.0
                },
                {
                    "datum": "2026-10-02",
                    "wert": 14.2
                },
                {
                    "datum": "2026-10-03",
                    "wert": 14.1
                },
                {
                    "datum": "2026-10-04",
                    "wert": 13.9
                },
                {
                    "datum": "2026-10-05",
                    "wert": 14.3
                },
                {
                    "datum": "2026-10-06",
                    "wert": 13.5
                },
                {
                    "datum": "2026-10-07",
                    "wert": 14.1
                },
                {
                    "datum": "2026-10-08",
                    "wert": 13.5
                },
                {
                    "datum": "2026-10-09",
                    "wert": 14.1
                },
                {
                    "datum": "2026-10-10",
                    "wert": 13.9
                },
                {
                    "datum": "2026-10-11",
                    "wert": 14.1
                },
                {
                    "datum": "2026-10-12",
                    "wert": 14.0
                },
                {
                    "datum": "2026-10-13",
                    "wert": 13.7
                },
                {
                    "datum": "2026-10-14",
                    "wert": 14.2
                },
                {
                    "datum": "2026-10-15",
                    "wert": 13.6
                },
                {
                    "datum": "2026-10-16",
                    "wert": 14.0
                },
                {
                    "datum": "2026-10-17",
                    "wert": 13.9
                },
                {
                    "datum": "2026-10-18",
                    "wert": 13.6
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
                    "wert": 14.2
                },
                {
                    "datum": "2026-10-22",
                    "wert": 14.0
                },
                {
                    "datum": "2026-10-23",
                    "wert": 13.6
                },
                {
                    "datum": "2026-10-24",
                    "wert": 13.9
                },
                {
                    "datum": "2026-10-25",
                    "wert": 13.7
                },
                {
                    "datum": "2026-10-26",
                    "wert": 13.8
                },
                {
                    "datum": "2026-10-27",
                    "wert": 14.1
                },
                {
                    "datum": "2026-10-28",
                    "wert": 14.0
                },
                {
                    "datum": "2026-10-29",
                    "wert": 13.9
                },
                {
                    "datum": "2026-10-30",
                    "wert": 14.1
                },
                {
                    "datum": "2026-10-31",
                    "wert": 14.3
                },
                {
                    "datum": "2026-11-01",
                    "wert": 13.6
                },
                {
                    "datum": "2026-11-02",
                    "wert": 13.5
                },
                {
                    "datum": "2026-11-03",
                    "wert": 13.9
                },
                {
                    "datum": "2026-11-04",
                    "wert": 13.5
                },
                {
                    "datum": "2026-11-05",
                    "wert": 13.9
                },
                {
                    "datum": "2026-11-06",
                    "wert": 13.7
                },
                {
                    "datum": "2026-11-07",
                    "wert": 13.7
                },
                {
                    "datum": "2026-11-08",
                    "wert": 14.2
                },
                {
                    "datum": "2026-11-09",
                    "wert": 13.9
                },
                {
                    "datum": "2026-11-10",
                    "wert": 14.3
                }
            ],
            "schlaf_minuten": [
                {
                    "datum": "2026-08-12",
                    "wert": 459
                },
                {
                    "datum": "2026-08-13",
                    "wert": 378
                },
                {
                    "datum": "2026-08-14",
                    "wert": 449
                },
                {
                    "datum": "2026-08-15",
                    "wert": 387
                },
                {
                    "datum": "2026-08-16",
                    "wert": 431
                },
                {
                    "datum": "2026-08-17",
                    "wert": 499
                },
                {
                    "datum": "2026-08-18",
                    "wert": 424
                },
                {
                    "datum": "2026-08-19",
                    "wert": 497
                },
                {
                    "datum": "2026-08-20",
                    "wert": 419
                },
                {
                    "datum": "2026-08-21",
                    "wert": 435
                },
                {
                    "datum": "2026-08-22",
                    "wert": 432
                },
                {
                    "datum": "2026-08-23",
                    "wert": 408
                },
                {
                    "datum": "2026-08-24",
                    "wert": 456
                },
                {
                    "datum": "2026-08-25",
                    "wert": 427
                },
                {
                    "datum": "2026-08-26",
                    "wert": 378
                },
                {
                    "datum": "2026-08-27",
                    "wert": 395
                },
                {
                    "datum": "2026-08-28",
                    "wert": 389
                },
                {
                    "datum": "2026-08-29",
                    "wert": 425
                },
                {
                    "datum": "2026-08-30",
                    "wert": 390
                },
                {
                    "datum": "2026-08-31",
                    "wert": 439
                },
                {
                    "datum": "2026-09-01",
                    "wert": 417
                },
                {
                    "datum": "2026-09-02",
                    "wert": 406
                },
                {
                    "datum": "2026-09-03",
                    "wert": 379
                },
                {
                    "datum": "2026-09-04",
                    "wert": 375
                },
                {
                    "datum": "2026-09-05",
                    "wert": 376
                },
                {
                    "datum": "2026-09-06",
                    "wert": 429
                },
                {
                    "datum": "2026-09-07",
                    "wert": 418
                },
                {
                    "datum": "2026-09-08",
                    "wert": 399
                },
                {
                    "datum": "2026-09-09",
                    "wert": 349
                },
                {
                    "datum": "2026-09-10",
                    "wert": 471
                },
                {
                    "datum": "2026-09-11",
                    "wert": 465
                },
                {
                    "datum": "2026-09-12",
                    "wert": 333
                },
                {
                    "datum": "2026-09-13",
                    "wert": 388
                },
                {
                    "datum": "2026-09-14",
                    "wert": 385
                },
                {
                    "datum": "2026-09-15",
                    "wert": 426
                },
                {
                    "datum": "2026-09-16",
                    "wert": 390
                },
                {
                    "datum": "2026-09-17",
                    "wert": 442
                },
                {
                    "datum": "2026-09-18",
                    "wert": 430
                },
                {
                    "datum": "2026-09-19",
                    "wert": 427
                },
                {
                    "datum": "2026-09-20",
                    "wert": 450
                },
                {
                    "datum": "2026-09-21",
                    "wert": 419
                },
                {
                    "datum": "2026-09-22",
                    "wert": 446
                },
                {
                    "datum": "2026-09-23",
                    "wert": 386
                },
                {
                    "datum": "2026-09-24",
                    "wert": 433
                },
                {
                    "datum": "2026-09-25",
                    "wert": 447
                },
                {
                    "datum": "2026-09-26",
                    "wert": 454
                },
                {
                    "datum": "2026-09-27",
                    "wert": 437
                },
                {
                    "datum": "2026-09-28",
                    "wert": 447
                },
                {
                    "datum": "2026-09-29",
                    "wert": 446
                },
                {
                    "datum": "2026-09-30",
                    "wert": 404
                },
                {
                    "datum": "2026-10-01",
                    "wert": 442
                },
                {
                    "datum": "2026-10-01",
                    "wert": 20
                },
                {
                    "datum": "2026-10-02",
                    "wert": 419
                },
                {
                    "datum": "2026-10-03",
                    "wert": 423
                },
                {
                    "datum": "2026-10-04",
                    "wert": 402
                },
                {
                    "datum": "2026-10-05",
                    "wert": 402
                },
                {
                    "datum": "2026-10-06",
                    "wert": 361
                },
                {
                    "datum": "2026-10-07",
                    "wert": 428
                },
                {
                    "datum": "2026-10-08",
                    "wert": 372
                },
                {
                    "datum": "2026-10-09",
                    "wert": 438
                },
                {
                    "datum": "2026-10-10",
                    "wert": 374
                },
                {
                    "datum": "2026-10-11",
                    "wert": 359
                },
                {
                    "datum": "2026-10-12",
                    "wert": 386
                },
                {
                    "datum": "2026-10-13",
                    "wert": 412
                },
                {
                    "datum": "2026-10-14",
                    "wert": 375
                },
                {
                    "datum": "2026-10-15",
                    "wert": 391
                },
                {
                    "datum": "2026-10-16",
                    "wert": 365
                },
                {
                    "datum": "2026-10-17",
                    "wert": 421
                },
                {
                    "datum": "2026-10-18",
                    "wert": 419
                },
                {
                    "datum": "2026-10-19",
                    "wert": 437
                },
                {
                    "datum": "2026-10-20",
                    "wert": 430
                },
                {
                    "datum": "2026-10-21",
                    "wert": 389
                },
                {
                    "datum": "2026-10-22",
                    "wert": 450
                },
                {
                    "datum": "2026-10-23",
                    "wert": 431
                },
                {
                    "datum": "2026-10-24",
                    "wert": 457
                },
                {
                    "datum": "2026-10-24",
                    "wert": 20
                },
                {
                    "datum": "2026-10-25",
                    "wert": 438
                },
                {
                    "datum": "2026-10-26",
                    "wert": 476
                },
                {
                    "datum": "2026-10-27",
                    "wert": 452
                },
                {
                    "datum": "2026-10-28",
                    "wert": 422
                },
                {
                    "datum": "2026-10-29",
                    "wert": 362
                },
                {
                    "datum": "2026-10-30",
                    "wert": 456
                },
                {
                    "datum": "2026-10-31",
                    "wert": 448
                },
                {
                    "datum": "2026-11-01",
                    "wert": 430
                },
                {
                    "datum": "2026-11-02",
                    "wert": 448
                },
                {
                    "datum": "2026-11-03",
                    "wert": 450
                },
                {
                    "datum": "2026-11-04",
                    "wert": 449
                },
                {
                    "datum": "2026-11-05",
                    "wert": 431
                },
                {
                    "datum": "2026-11-06",
                    "wert": 526
                },
                {
                    "datum": "2026-11-07",
                    "wert": 399
                },
                {
                    "datum": "2026-11-07",
                    "wert": 20
                },
                {
                    "datum": "2026-11-08",
                    "wert": 414
                },
                {
                    "datum": "2026-11-09",
                    "wert": 420
                },
                {
                    "datum": "2026-11-10",
                    "wert": 372
                }
            ]
        },
        "schlafdetails": [
            {
                "datum": "2026-10-28",
                "fertig": true,
                "minuten_schlaf": 422,
                "minuten_wach": 54,
                "minuten_im_bett": 476,
                "minuten_bis_eingeschlafen": 9,
                "tief": 62,
                "rem": 78,
                "leicht": 282,
                "kurze_wachphasen": 10,
                "lange_wachphasen": 2,
                "minuten_lange_wachphasen": 12
            },
            {
                "datum": "2026-10-29",
                "fertig": true,
                "minuten_schlaf": 362,
                "minuten_wach": 44,
                "minuten_im_bett": 406,
                "minuten_bis_eingeschlafen": 17,
                "tief": 50,
                "rem": 74,
                "leicht": 238,
                "kurze_wachphasen": 17,
                "lange_wachphasen": 1,
                "minuten_lange_wachphasen": 8
            },
            {
                "datum": "2026-10-30",
                "fertig": true,
                "minuten_schlaf": 456,
                "minuten_wach": 46,
                "minuten_im_bett": 502,
                "minuten_bis_eingeschlafen": 10,
                "tief": 60,
                "rem": 90,
                "leicht": 306,
                "kurze_wachphasen": 15,
                "lange_wachphasen": 0,
                "minuten_lange_wachphasen": 0
            },
            {
                "datum": "2026-10-31",
                "fertig": true,
                "minuten_schlaf": 448,
                "minuten_wach": 67,
                "minuten_im_bett": 515,
                "minuten_bis_eingeschlafen": 18,
                "tief": 65,
                "rem": 88,
                "leicht": 295,
                "kurze_wachphasen": 18,
                "lange_wachphasen": 2,
                "minuten_lange_wachphasen": 22
            },
            {
                "datum": "2026-11-01",
                "fertig": true,
                "minuten_schlaf": 430,
                "minuten_wach": 43,
                "minuten_im_bett": 473,
                "minuten_bis_eingeschlafen": 7,
                "tief": 77,
                "rem": 83,
                "leicht": 270,
                "kurze_wachphasen": 16,
                "lange_wachphasen": 0,
                "minuten_lange_wachphasen": 0
            },
            {
                "datum": "2026-11-02",
                "fertig": true,
                "minuten_schlaf": 448,
                "minuten_wach": 45,
                "minuten_im_bett": 493,
                "minuten_bis_eingeschlafen": 8,
                "tief": 62,
                "rem": 88,
                "leicht": 298,
                "kurze_wachphasen": 9,
                "lange_wachphasen": 0,
                "minuten_lange_wachphasen": 0
            },
            {
                "datum": "2026-11-03",
                "fertig": true,
                "minuten_schlaf": 450,
                "minuten_wach": 54,
                "minuten_im_bett": 504,
                "minuten_bis_eingeschlafen": 19,
                "tief": 80,
                "rem": 97,
                "leicht": 273,
                "kurze_wachphasen": 17,
                "lange_wachphasen": 1,
                "minuten_lange_wachphasen": 9
            },
            {
                "datum": "2026-11-04",
                "fertig": true,
                "minuten_schlaf": 449,
                "minuten_wach": 55,
                "minuten_im_bett": 504,
                "minuten_bis_eingeschlafen": 17,
                "tief": 62,
                "rem": 99,
                "leicht": 288,
                "kurze_wachphasen": 14,
                "lange_wachphasen": 1,
                "minuten_lange_wachphasen": 10
            },
            {
                "datum": "2026-11-05",
                "fertig": true,
                "minuten_schlaf": 431,
                "minuten_wach": 54,
                "minuten_im_bett": 485,
                "minuten_bis_eingeschlafen": 15,
                "tief": 70,
                "rem": 89,
                "leicht": 272,
                "kurze_wachphasen": 8,
                "lange_wachphasen": 1,
                "minuten_lange_wachphasen": 11
            },
            {
                "datum": "2026-11-06",
                "fertig": true,
                "minuten_schlaf": 526,
                "minuten_wach": 73,
                "minuten_im_bett": 599,
                "minuten_bis_eingeschlafen": 7,
                "tief": 79,
                "rem": 103,
                "leicht": 344,
                "kurze_wachphasen": 11,
                "lange_wachphasen": 2,
                "minuten_lange_wachphasen": 20
            },
            {
                "datum": "2026-11-07",
                "fertig": true,
                "minuten_schlaf": 399,
                "minuten_wach": 52,
                "minuten_im_bett": 451,
                "minuten_bis_eingeschlafen": 16,
                "tief": 75,
                "rem": 96,
                "leicht": 228,
                "kurze_wachphasen": 12,
                "lange_wachphasen": 2,
                "minuten_lange_wachphasen": 12
            },
            {
                "datum": "2026-11-08",
                "fertig": true,
                "minuten_schlaf": 414,
                "minuten_wach": 49,
                "minuten_im_bett": 463,
                "minuten_bis_eingeschlafen": 14,
                "tief": 73,
                "rem": 79,
                "leicht": 262,
                "kurze_wachphasen": 18,
                "lange_wachphasen": 1,
                "minuten_lange_wachphasen": 8
            },
            {
                "datum": "2026-11-09",
                "fertig": true,
                "minuten_schlaf": 420,
                "minuten_wach": 42,
                "minuten_im_bett": 462,
                "minuten_bis_eingeschlafen": 16,
                "tief": 59,
                "rem": 90,
                "leicht": 271,
                "kurze_wachphasen": 15,
                "lange_wachphasen": 0,
                "minuten_lange_wachphasen": 0
            },
            {
                "datum": "2026-11-10",
                "fertig": true,
                "minuten_schlaf": 372,
                "minuten_wach": 64,
                "minuten_im_bett": 436,
                "minuten_bis_eingeschlafen": 24,
                "tief": 52,
                "rem": 66,
                "leicht": 254,
                "kurze_wachphasen": 21,
                "lange_wachphasen": 2,
                "minuten_lange_wachphasen": 27
            }
        ],
        "zonen": [
            {
                "datum": "2026-09-30",
                "leicht": 76,
                "moderat": 35,
                "intensiv": 13,
                "spitze": 6
            },
            {
                "datum": "2026-10-01",
                "leicht": 65,
                "moderat": 5,
                "intensiv": 3,
                "spitze": 0
            },
            {
                "datum": "2026-10-02",
                "leicht": 99,
                "moderat": 7,
                "intensiv": 2,
                "spitze": 0
            },
            {
                "datum": "2026-10-03",
                "leicht": 80,
                "moderat": 42,
                "intensiv": 11,
                "spitze": 3
            },
            {
                "datum": "2026-10-04",
                "leicht": 60,
                "moderat": 5,
                "intensiv": 2,
                "spitze": 0
            },
            {
                "datum": "2026-10-05",
                "leicht": 104,
                "moderat": 37,
                "intensiv": 10,
                "spitze": 5
            },
            {
                "datum": "2026-10-06",
                "leicht": 110,
                "moderat": 8,
                "intensiv": 3,
                "spitze": 0
            },
            {
                "datum": "2026-10-07",
                "leicht": 67,
                "moderat": 41,
                "intensiv": 21,
                "spitze": 4
            },
            {
                "datum": "2026-10-08",
                "leicht": 103,
                "moderat": 7,
                "intensiv": 3,
                "spitze": 0
            },
            {
                "datum": "2026-10-09",
                "leicht": 103,
                "moderat": 0,
                "intensiv": 1,
                "spitze": 0
            },
            {
                "datum": "2026-10-10",
                "leicht": 63,
                "moderat": 34,
                "intensiv": 24,
                "spitze": 5
            },
            {
                "datum": "2026-10-11",
                "leicht": 86,
                "moderat": 1,
                "intensiv": 0,
                "spitze": 0
            },
            {
                "datum": "2026-10-12",
                "leicht": 93,
                "moderat": 12,
                "intensiv": 1,
                "spitze": 0
            },
            {
                "datum": "2026-10-13",
                "leicht": 100,
                "moderat": 2,
                "intensiv": 2,
                "spitze": 0
            },
            {
                "datum": "2026-10-14",
                "leicht": 90,
                "moderat": 38,
                "intensiv": 12,
                "spitze": 1
            },
            {
                "datum": "2026-10-15",
                "leicht": 108,
                "moderat": 1,
                "intensiv": 3,
                "spitze": 0
            },
            {
                "datum": "2026-10-16",
                "leicht": 62,
                "moderat": 10,
                "intensiv": 1,
                "spitze": 0
            },
            {
                "datum": "2026-10-17",
                "leicht": 100,
                "moderat": 34,
                "intensiv": 18,
                "spitze": 3
            },
            {
                "datum": "2026-10-18",
                "leicht": 108,
                "moderat": 7,
                "intensiv": 3,
                "spitze": 0
            },
            {
                "datum": "2026-10-19",
                "leicht": 90,
                "moderat": 29,
                "intensiv": 22,
                "spitze": 1
            },
            {
                "datum": "2026-10-20",
                "leicht": 93,
                "moderat": 8,
                "intensiv": 1,
                "spitze": 0
            },
            {
                "datum": "2026-10-21",
                "leicht": 72,
                "moderat": 12,
                "intensiv": 3,
                "spitze": 0
            },
            {
                "datum": "2026-10-22",
                "leicht": 76,
                "moderat": 12,
                "intensiv": 2,
                "spitze": 0
            },
            {
                "datum": "2026-10-23",
                "leicht": 107,
                "moderat": 0,
                "intensiv": 2,
                "spitze": 0
            },
            {
                "datum": "2026-10-24",
                "leicht": 108,
                "moderat": 43,
                "intensiv": 25,
                "spitze": 6
            },
            {
                "datum": "2026-10-25",
                "leicht": 64,
                "moderat": 7,
                "intensiv": 3,
                "spitze": 0
            },
            {
                "datum": "2026-10-26",
                "leicht": 90,
                "moderat": 42,
                "intensiv": 22,
                "spitze": 3
            },
            {
                "datum": "2026-10-27",
                "leicht": 75,
                "moderat": 3,
                "intensiv": 1,
                "spitze": 0
            },
            {
                "datum": "2026-10-28",
                "leicht": 69,
                "moderat": 38,
                "intensiv": 11,
                "spitze": 2
            },
            {
                "datum": "2026-10-29",
                "leicht": 102,
                "moderat": 7,
                "intensiv": 3,
                "spitze": 0
            },
            {
                "datum": "2026-10-30",
                "leicht": 79,
                "moderat": 10,
                "intensiv": 1,
                "spitze": 0
            },
            {
                "datum": "2026-10-31",
                "leicht": 57,
                "moderat": 29,
                "intensiv": 20,
                "spitze": 6
            },
            {
                "datum": "2026-11-01",
                "leicht": 61,
                "moderat": 7,
                "intensiv": 0,
                "spitze": 0
            },
            {
                "datum": "2026-11-02",
                "leicht": 84,
                "moderat": 25,
                "intensiv": 14,
                "spitze": 3
            },
            {
                "datum": "2026-11-03",
                "leicht": 110,
                "moderat": 10,
                "intensiv": 1,
                "spitze": 0
            },
            {
                "datum": "2026-11-04",
                "leicht": 105,
                "moderat": 33,
                "intensiv": 20,
                "spitze": 4
            },
            {
                "datum": "2026-11-05",
                "leicht": 99,
                "moderat": 6,
                "intensiv": 0,
                "spitze": 0
            },
            {
                "datum": "2026-11-06",
                "leicht": 109,
                "moderat": 5,
                "intensiv": 3,
                "spitze": 0
            },
            {
                "datum": "2026-11-07",
                "leicht": 95,
                "moderat": 11,
                "intensiv": 3,
                "spitze": 0
            },
            {
                "datum": "2026-11-08",
                "leicht": 110,
                "moderat": 8,
                "intensiv": 0,
                "spitze": 0
            },
            {
                "datum": "2026-11-09",
                "leicht": 70,
                "moderat": 45,
                "intensiv": 19,
                "spitze": 1
            },
            {
                "datum": "2026-11-10",
                "leicht": 12,
                "moderat": 0,
                "intensiv": 0,
                "spitze": 0
            }
        ]
    }
};
