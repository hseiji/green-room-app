import { NavLink } from 'react-router-dom'
import PlantsCarrousel from '../components/PlantsCarrousel'

export function Home() {
  return (
    <>
      <h1>🌱 Welcome 🌱</h1>
      <p>Let's build our garden in our Green Room! =)</p>
      <NavLink to="/plants">Build here!</NavLink>
      <p>
        This app is still in progress. But you can play around adding and
        removing plants to your room.
      </p>
      <p>Or if you already have your garden set up access again here below.</p>
      <NavLink to="/groom">Go to Green Room!</NavLink>
      <PlantsCarrousel />
    </>
  )
}
