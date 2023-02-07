import Carousel from 'react-bootstrap/Carousel'
import storeItems from '../data/items.json'

// type ItemProps = {
//   id: number
//   name: string
//   imgUrl: string
// }

// function PlantsCarrousel({ id, name, imgUrl }: ItemProps) {
function PlantsCarrousel() {
  return (
    <Carousel>
      {storeItems.map((item) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={item.imgUrl}
            alt="First slide"
            height="200px"
          />
          <Carousel.Caption>
            <h3>{item.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default PlantsCarrousel
