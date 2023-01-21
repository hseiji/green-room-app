import { Image } from 'react-bootstrap'

type GRoomItemProps = {
  name: string
  desc: string
  water: number
  soil: number
  light: number
  imgUrl: string
}

export function GRoomItem({
  name,
  desc,
  water,
  soil,
  light,
  imgUrl,
}: GRoomItemProps) {
  return (
    <tr>
      <td>{name}</td>
      <td>{desc}</td>
      <td>{water}</td>
      <td>{soil}</td>
      <td>{light}</td>
      <td>
        <Image src={imgUrl} height="200px" />
      </td>
    </tr>
  )
}
