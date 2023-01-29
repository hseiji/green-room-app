import { NavLink } from 'react-router-dom'

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Let's build our garden in our Green Room! =)</p>
      <a href="/plants">Build here!</a>
      <p>
        This app is still in progress. But you can play around adding and
        removing plants to your room.
      </p>
      <p>Or if you already have your garden set up access again here below.</p>
      <a href="/groom">Go to Green Room!</a>

      <p>Test</p>
      <NavLink to="/plants">this is a link</NavLink>
    </>
  )
}
