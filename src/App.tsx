import './App.css'
import { DailyData } from './components/DailyData';

function App() {
  return (
    <>
      <DailyData date={new Date()} lowestTemp={2} highestTemp={4} tempInfo={'super chill today bro'}></DailyData>
    </>
  )
}

export default App
