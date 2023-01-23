import { Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../data/items.json'

type SideSummaryItemProps = {
  id: number
}

export function SideSummaryItem({ id }: SideSummaryItemProps) {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find((i) => i.id === id)
  if (item == null) return null
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
      />
      <div className="me-auto">
        <div>{item.name} </div>
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}
