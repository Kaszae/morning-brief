import type { Daten } from './types/daten';
import { DailyData } from './components/DailyData';
import { Section } from './components/Section';
import { ProjectOverview } from './components/ProjectOverview';
import { CircularProgress } from './components/CircularProgress';
import { UrgentTasks } from './components/UrgentTasks';
import { UniProgress } from './components/UniProgress';
import { HabitHeatmap } from './components/HabitHeatmap';
import { parseISODate } from './utils/date';
import { getGreeting } from './utils/greeting';
import { getHabitDays } from './utils/habits';
import { getHealth, getRecoveryRing, getSleepRing } from './utils/health';
import { getProjectOverview } from './utils/projects';
import { getSleepScoreRing } from './utils/sleep';
import { getStrainRing, getStrainWeek } from './utils/strain';
import { getUniWeek } from './utils/uni';
import { getUrgentTasks } from './utils/urgent';

interface AppProps {
    daten: Daten;
}

function App({ daten }: AppProps) {
    // „Heute“ kommt aus den Daten, nicht aus new Date(): so passt alles zum Stand der Sammlung
    const today = parseISODate(daten.heute);

    const projects = getProjectOverview(daten.heute_faellig, daten.projekte);
    const urgentTasks = getUrgentTasks([...daten.heute_faellig, ...daten.offen], daten.projekte, daten.heute);
    const uniWeek = getUniWeek(daten);

    const health = daten.health ? getHealth(daten.health.verlauf, daten.heute) : null;
    // Sleep Score aus den Schlafdetails, sonst Schlaf im Verhältnis zu deinem Schnitt
    const sleepRing = getSleepScoreRing(daten.health?.schlafdetails ?? [], daten.heute) ?? (health && getSleepRing(health));
    const recoveryRing = health && getRecoveryRing(health);
    // Strain nur, wenn der Sammler Herzfrequenzzonen liefert und es genug Vergleichswochen gibt
    const strainWeek = daten.health?.zonen ? getStrainWeek(daten.health.zonen, daten.heute) : null;
    const strainRing = strainWeek && getStrainRing(strainWeek, health?.energy?.level ?? null);
    const hasRings = Boolean(sleepRing || recoveryRing || strainRing);

    const greeting = getGreeting(daten.name, daten.heute, health);
    const habitDays = daten.habits ? getHabitDays(daten.habits, daten.heute) : null;
    const habitNames = daten.habits?.aufgaben.map((task) => task.content) ?? [];

    return (
        <div className="App">
            <DailyData date={today} weather={daten.wetter} />
            <h1>{greeting}</h1>
            <hr />
            <ProjectOverview projects={projects} />
            <UrgentTasks tasks={urgentTasks} />
            {uniWeek && <UniProgress week={uniWeek} />}
            {hasRings && (
                <>
                    <hr />
                    <Section title="Gesundheit">
                        <div className="progress-row">
                            {sleepRing && (
                                <CircularProgress
                                    name="Sleep"
                                    color={sleepRing.color}
                                    percent={sleepRing.percent}
                                    label={sleepRing.label}
                                    info={sleepRing.feedback}
                                />
                            )}
                            {recoveryRing && (
                                <CircularProgress
                                    name="Recovery"
                                    color={recoveryRing.color}
                                    percent={recoveryRing.percent}
                                    info={recoveryRing.feedback}
                                />
                            )}
                            {strainRing && (
                                <CircularProgress
                                    name="Strain"
                                    color={strainRing.color}
                                    percent={strainRing.percent}
                                    label={strainRing.label}
                                    info={strainRing.feedback}
                                />
                            )}
                        </div>
                    </Section>
                </>
            )}
            {habitDays && (
                <>
                    <hr />
                    <Section title="Gewohnheiten">
                        <HabitHeatmap days={habitDays} habitNames={habitNames} />
                    </Section>
                </>
            )}
        </div>
    );
}

export default App;
