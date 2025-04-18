import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../context/PlantContext'

type PlantItemProps = {
  id: number
  name: string
  imgUrl: string
}

export function PlantItem({ id, name, imgUrl }: PlantItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()

  const quantity = getItemQuantity(id)

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={`${import.meta.env.BASE_URL}${imgUrl}`}
        height="200px"
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              variant="success"
              onClick={() => increaseCartQuantity(id)}
            >
              Add To Room
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: '.5rem' }}
            >
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
