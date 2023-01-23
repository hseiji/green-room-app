import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { SideSummaryItem } from './SideSummaryItem'

type SideSummaryProps = {
  isOpen: boolean
}

export function SideSummary({ isOpen }: SideSummaryProps) {
  const { closeCart, cartItems } = useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Green Room</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <SideSummaryItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total Plants{' '}
            {cartItems.reduce((total, cartItem) => {
              return total + cartItem.quantity
            }, 0)}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
