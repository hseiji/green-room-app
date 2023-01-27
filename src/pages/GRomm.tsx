import { Table } from 'react-bootstrap'
import { GRoomItem } from '../components/GRoomItem'
import { useShoppingCart } from '../context/PlantContext'

export function GRoom() {
  const { cartItems } = useShoppingCart()

  return (
    <>
      <h1>Green Room</h1>
      <h4>Plants Description</h4>
      <Table>
        <thead>
          <th>Name</th>
          <th>Desc</th>
          <th>Water</th>
          <th>Soil</th>
          <th>Light</th>
          <th>Img</th>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <GRoomItem key={item.id} {...item} />
          ))}
        </tbody>
      </Table>

      <p>
        Future visual chart will be displayed in the near future (coming soon).
      </p>
    </>
  )
}
