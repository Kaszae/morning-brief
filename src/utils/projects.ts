import type { TodoistProject, TodoistTask } from '../types/daten';
import { getDurationMinutes, getExcludedProjectIds, getTopLevelProject } from './todoist';

export type ProjectSummary = {
    id: string;
    name: string;
    minutes: number;
    info: string;
};

// Aufgaben ohne Dauer zählen wie im Tagesbrief mit 30 Minuten
const DEFAULT_MINUTES = 30;

/**
 * Summiert die Dauer der heutigen Aufgaben pro oberstem Projekt (Unterprojekte zählen zum Oberprojekt).
 * Hat eine Aufgabe heute fällige Unteraufgaben, zählen nur diese, damit nichts doppelt zählt.
 */
export function getProjectOverview(tasks: TodoistTask[], projects: TodoistProject[]): ProjectSummary[] {
    const excluded = getExcludedProjectIds(projects);
    const relevant = tasks.filter((task) => !excluded.has(task.projectId));
    const parentIds = new Set(relevant.map((task) => task.parentId).filter(Boolean));

    const groups = new Map<string, { name: string; tasks: { title: string; minutes: number }[] }>();
    for (const task of relevant) {
        if (parentIds.has(task.id)) continue;
        const top = getTopLevelProject(projects, task.projectId);
        const key = top?.id ?? task.projectId;
        if (!groups.has(key)) groups.set(key, { name: top?.name ?? 'Ohne Projekt', tasks: [] });
        groups.get(key)!.tasks.push({
            title: task.content,
            minutes: getDurationMinutes(task) ?? DEFAULT_MINUTES,
        });
    }

    return [...groups].map(([id, group]) => {
        const longest = group.tasks.reduce((a, b) => (b.minutes > a.minutes ? b : a));
        return {
            id,
            name: group.name,
            minutes: group.tasks.reduce((sum, task) => sum + task.minutes, 0),
            info: group.tasks.length === 1 ? longest.title : `${longest.title} nimmt am meisten Zeit ein`,
        };
    }).sort((a, b) => b.minutes - a.minutes);
}
