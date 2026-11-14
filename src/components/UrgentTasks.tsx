import type { UrgentTask } from '../utils/urgent';
import { Section } from './Section';
import './UrgentTasks.css';

interface UrgentTasksProps {
    tasks: UrgentTask[];
}

function getMeta(task: UrgentTask): string[] {
    const parts: string[] = [];
    if (task.planned) parts.push(`geplant ${task.planned}`);
    if (task.deadline) parts.push(task.deadlinePassed ? `Frist war ${task.deadline}` : `Frist ${task.deadline}`);
    if (task.project) parts.push(task.project);
    return parts;
}

export function UrgentTasks({ tasks }: UrgentTasksProps) {
    if (tasks.length === 0) return null; // nichts Dringendes → Abschnitt entfällt

    return (
        <Section title="Dringend">
            <ul className="urgent-tasks__list">
                {tasks.map((task) => (
                    <li key={task.id} className="urgent-tasks__item">
                        <span className="urgent-tasks__task">{task.title}</span>
                        <span className="urgent-tasks__meta">
                            {getMeta(task).map((part) => `${part} · `)}
                            <a href={task.url} target="_blank" rel="noreferrer">
                                in Todoist
                            </a>
                        </span>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
