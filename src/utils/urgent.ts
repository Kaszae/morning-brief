import type { TodoistProject, TodoistTask } from '../types/daten';
import { daysBetween, formatShortDate } from './date';
import { getExcludedProjectIds, getProjectPath, getTaskUrl } from './todoist';

// Name des Labels, das die Todoist Automation setzt
export const URGENT_LABEL = 'urgent';

export type UrgentTask = {
    id: string;
    title: string;
    planned: string | null;     // Bearbeitungstag, z. B. 'heute' oder 'Do, 12.11.'
    deadline: string | null;
    deadlinePassed: boolean;
    project: string | null;     // z. B. 'Uni › DuD'
    url: string;
};

/** Alle Aufgaben mit dem Label, früheste Frist zuerst (ohne Frist ans Ende). */
export function getUrgentTasks(tasks: TodoistTask[], projects: TodoistProject[], today: string): UrgentTask[] {
    const excluded = getExcludedProjectIds(projects);
    const seen = new Set<string>();

    const urgent = tasks.filter((task) => {
        if (seen.has(task.id)) return false;   // heute_faellig und offen überschneiden sich
        seen.add(task.id);
        return task.labels?.includes(URGENT_LABEL) && !excluded.has(task.projectId);
    });

    urgent.sort((a, b) =>
        (a.deadlineDate ?? '9999').localeCompare(b.deadlineDate ?? '9999') ||
        (a.addedAt ?? '9999').localeCompare(b.addedAt ?? '9999'),
    );

    return urgent.map((task) => ({
        id: task.id,
        title: task.content,
        planned: task.dueDate ? formatShortDate(task.dueDate, today) : null,
        deadline: task.deadlineDate ? formatShortDate(task.deadlineDate, today) : null,
        deadlinePassed: task.deadlineDate ? daysBetween(today, task.deadlineDate) < 0 : false,
        project: getProjectPath(projects, task.projectId),
        url: getTaskUrl(task.id),
    }));
}
