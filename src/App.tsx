import './App.css'
import { DailyData } from './components/DailyData';
import {type ProjectOverview, ProjectOverview} from "./components/ProjectOverview.tsx";

const projects: ProjectOverview[] = [
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
    </div>
  )
}

export default App
