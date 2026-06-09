import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Location from './components/Location'
import Schedule from './components/Schedule'
import RSVP from './components/RSVP'
import Accommodation from './components/Accommodation'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Location />
        <Schedule />
        <RSVP />
        <Accommodation />
      </main>
      <Footer />
    </div>
  )
}

export default App

