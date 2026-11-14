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
import { getProjectOverview } from './utils/projects';
import { getUrgentTasks } from './utils/urgent';
import { getUniWeek } from './utils/uni';
import { getHealth, getLevelColor, getRecoveryRing, getSleepRing } from './utils/health';
import { daten } from './data/beispiel';

// „Heute“ kommt aus den Daten, nicht aus new Date(): so passt alles zum Stand der Sammlung
const today = parseISODate(daten.heute);

const projects = getProjectOverview(daten.heute_faellig, daten.projekte);
const urgentTasks = getUrgentTasks([...daten.heute_faellig, ...daten.offen], daten.projekte, daten.heute);
const uniWeek = getUniWeek(daten);
const health = daten.health ? getHealth(daten.health.verlauf, daten.heute) : null;
const sleepRing = health && getSleepRing(health);
const recoveryRing = health && getRecoveryRing(health);
const greeting = getGreeting(daten.name, daten.heute, health);
const habitDays = daten.habits ? getHabitDays(daten.habits, daten.heute) : null;
const habitNames = daten.habits?.aufgaben.map((task) => task.content) ?? [];

function App() {
    return (
        <div className="App">
            <DailyData date={today} weather={daten.wetter} />
            <h1>{greeting}</h1>
            <hr />
            <ProjectOverview projects={projects} />
            <UrgentTasks tasks={urgentTasks} />
            {uniWeek && <UniProgress week={uniWeek} />}
            <hr />
            <Section title="Gesundheit">
                <div className="progress-row">
                    {sleepRing && (
                        <CircularProgress name="Sleep" color={sleepRing.color} percent={sleepRing.percent} info={sleepRing.feedback} />
                    )}
                    {recoveryRing && (
                        <CircularProgress name="Recovery" color={recoveryRing.color} percent={recoveryRing.percent} info={recoveryRing.feedback} />
                    )}
                    <CircularProgress name="Strain" color={getLevelColor(77)} percent={77} info="very good" />
                </div>
            </Section>
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
