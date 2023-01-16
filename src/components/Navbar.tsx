import { Button, Container, Nav, Navbar as NavbarBoot } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <NavbarBoot
      sticky="top"
      variant="light"
      className="bg-success shadow-sm mb-3"
    >
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/plants" as={NavLink}>
            Plants
          </Nav.Link>
          <Nav.Link to="/groom" as={NavLink}>
            G Room
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: '3rem', height: '3rem', position: 'relative' }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7ed321"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: 'white',
                width: '1.5rem',
                height: '1.5rem',
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translate(25%, 25%)',
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBoot>
  )
}
