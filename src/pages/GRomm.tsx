import { Table } from 'react-bootstrap'
import storeItems from '../data/items.json'

export function GRoom() {
  return (
    <>
      <h1>Green Room</h1>
      <h4>Plants Description</h4>
      {storeItems.map((item) => {
        item.name
      })}

      <Table>
        <thead>
          <th>Name</th>
          <th>Desc</th>
          <th>Water</th>
          <th>Soil</th>
          <th>Light</th>
        </thead>
        <tbody>
          <td>test1a</td>
          <td>test1b</td>
          <td>test1c</td>
          <td>test1d</td>
          <td>test1e</td>
        </tbody>
      </Table>

      <p>2D room and place plants (numbers) in the space</p>
    </>
  )
}
