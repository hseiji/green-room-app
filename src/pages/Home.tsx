import { NavLink } from 'react-router-dom'

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Let's build our garden in our Green Room! =)</p>
      <NavLink to="/plants">Build here!</NavLink>
      <p>
        This app is still in progress. But you can play around adding and
        removing plants to your room.
      </p>
      <p>Or if you already have your garden set up access again here below.</p>
      <NavLink to="/groom">Go to Green Room!</NavLink>
    </>
  )
}
