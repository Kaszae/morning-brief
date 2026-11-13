export type Project = {
    name: string,
    duration: number,
    info: string
}

interface TaskInfoProps {
    projects: Project[];
}

export function ProjectOverview({ projects }: TaskInfoProps) {
    return (
        <ul className="project-list">
            {projects.map((project) => (
                <li key={project.name}>{project.name} {project.duration}h ─ {project.info}</li>
            ))}
        </ul>
    )
}