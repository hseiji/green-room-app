import { Image } from 'react-bootstrap'
import storeItems from '../data/items.json'

type GRoomItemProps = {
  id: number
}

export function GRoomItem({ id }: GRoomItemProps) {
  const item = storeItems.find((i) => i.id === id)
  if (item == null) return null

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.desc}</td>
      <td>{item.water}</td>
      <td>{item.soil}</td>
      <td>{item.light}</td>
      <td>
        <Image src={item.imgUrl} height="80px" />
      </td>
    </tr>
  )
}
