import './App.css'
import { DailyData } from './components/DailyData';
import {type Project, ProjectOverview} from "./components/ProjectOverview.tsx";
import {CircularProgress} from "./components/CircularProgress.tsx";

const projects: Project[] = [
    {name: 'Privat', duration: 3, info: 'Zuhause putzen nimmt am meisten Zeit ein'},
    {name: 'Uni', duration: 4, info: '3 Aufgabenblöcke'},
]

function App() {
  return (
    <div className="App">
        <DailyData date={new Date()} lowestTemp={2} highestTemp={4} tempInfo={'super chill today'}/>
        <h1>Der Tag steigt bis 15:30 Uhr an, Max Mustermann, danach wird er weit.</h1>
        <hr/>
        <ProjectOverview projects={projects}/>
        <hr/>
        <div className="progress-row">
            <CircularProgress name={'Sleep'} color={'gray'} percent={80} info={'very good'}/>
            <CircularProgress name={'Recovery'} color={'green'} percent={69} info={'very good'}/>
            <CircularProgress name={'Strain'} color={'blue'} percent={77} info={'very good'}/>
        </div>
    </div>
  )
}

export default App
