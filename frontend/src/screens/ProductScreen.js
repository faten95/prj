import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id)
  return (
    <>
      <Link className='btn btn-light my-3 ' to='/'>
        Back to home page
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numberReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Prix: {product.price}DT</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.CountInStock > 0 ? 'En Stock' : 'Hors Stock'}
                  </Col>
                  <Col>
                    <strong>{product.price}DT</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>{product.adressProduct}</ListGroup.Item>
              <ListGroup.Item>
                <Button className='btn-block' type='button'>
                  Contacte
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
