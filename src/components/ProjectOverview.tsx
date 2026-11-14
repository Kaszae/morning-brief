import type { ProjectSummary } from '../utils/projects';
import { formatDuration } from '../utils/date';
import { Section } from './Section';
import './ProjectOverview.css';

interface ProjectOverviewProps {
    projects: ProjectSummary[];
}

export function ProjectOverview({ projects }: ProjectOverviewProps) {
    if (projects.length === 0) return null;

    return (
        <Section title="Projekte">
            <ul className="project-list">
                {projects.map((project) => (
                    <li key={project.id}>
                        {project.name} {formatDuration(project.minutes)} ─ {project.info}
                    </li>
                ))}
            </ul>
        </Section>
    );
}
