type GRoomItemProps = {
  name: string
  desc: string
  water: number
  soil: number
  light: number
}

export function GRoomItem({ name, desc, water, soil, light }: GRoomItemProps) {
  return (
    <tr>
      <td>{name}</td>
      <td>{desc}</td>
      <td>{water}</td>
      <td>{soil}</td>
      <td>{light}</td>
    </tr>
  )
}
