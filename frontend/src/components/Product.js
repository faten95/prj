import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-4 p-4 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' height='200px' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numberReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h3'>{product.price}DT</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
