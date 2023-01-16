import { Col, Row } from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem'
import storeItems from '../data/items.json'

export function Store() {
  return (
    <>
      <h1>Plants</h1>
      <p>Create your garden by choosing your plants below ...</p>
      <Row xs={1} md={2} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
