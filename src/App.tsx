import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import ThankYou from './routes/ThankYou'
import ScheduleMeeting from './routes/ScheduleMeeting'
import './App.css'


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gracias" element={<ThankYou />} />
        <Route path="/agendar" element={<ScheduleMeeting />} />
      </Routes>
    </div>
  )
}

export default App

