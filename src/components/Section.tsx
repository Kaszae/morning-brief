import type { ReactNode } from 'react';
import './Section.css';

interface SectionProps {
    title: string;
    children: ReactNode;
}

/** Abschnitt mit Überschrift, einheitlich für alle Bereiche des Briefings. */
export function Section({ title, children }: SectionProps) {
    return (
        <section className="section">
            <h2 className="section__title">{title}</h2>
            {children}
        </section>
    );
}
