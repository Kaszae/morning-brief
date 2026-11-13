import { DailyData } from './components/DailyData';
import { ProjectOverview } from './components/ProjectOverview';
import { CircularProgress } from './components/CircularProgress';
import { HabitHeatmap } from './components/HabitHeatmap';
import { getHabitDays } from './utils/habits';
import { projects } from './data/seedProjects';
import { habits, completions } from './data/seedHabits';

const habitDays = getHabitDays(habits, completions, new Date());

function App() {
    return (
        <div className="App">
            <DailyData date={new Date()} lowestTemp={2} highestTemp={4} tempInfo="super chill today" />
            <h1>Der Tag steigt bis 15:30 Uhr an, Max Mustermann, danach wird er weit.</h1>
            <hr />
            <ProjectOverview projects={projects} />
            <hr />
            <div className="progress-row">
                <CircularProgress name="Sleep" color="gray" percent={80} info="very good" />
                <CircularProgress name="Recovery" color="green" percent={69} info="very good" />
                <CircularProgress name="Strain" color="blue" percent={77} info="very good" />
            </div>
            <hr />
            <HabitHeatmap days={habitDays} />
        </div>
    );
}

export default App;
