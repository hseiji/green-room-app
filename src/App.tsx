import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Plants } from './pages/Plants'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'
import { PlantProvider } from './context/PlantContext'
import { GRoom } from './pages/GRomm'

function App() {
  return (
    <PlantProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/groom" element={<GRoom />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </PlantProvider>
  )
}

export default App
