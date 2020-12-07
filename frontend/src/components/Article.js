import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Article = () => {
  const [formData, setFormData] = useState({
    nameproduct: '',
    image: '',
    place: '',
    category: '',
    price: '',
    contact: '',
    shipping: '',
  })
  const {
    nameproduct,
    image,
    place,
    category,
    price,
    contact,
    shipping,
  } = formData
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <>
      <Form onSubmit={(e) => onSubmit(e)} style={{ padding: '0 30%' }}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Nom de produit</Form.Label>
          <Form.Control
            type='text'
            name='nameproduct'
            value={nameproduct}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>image</Form.Label>
          <Form.Control
            type='text'
            name='image'
            value={image}
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>emplacement</Form.Label>
          <Form.Control
            type='text'
            name='place'
            value={place}
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>catégorie</Form.Label>
          <Form.Control
            type='text'
            name='category'
            value={category}
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>prix</Form.Label>
          <Form.Control
            type='text'
            name='price'
            value={price}
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>contact</Form.Label>
          <Form.Control
            type='text'
            name='contact'
            value={contact}
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>livraison</Form.Label>
          <Form.Control
            type='text'
            name='shipping'
            value={shipping}
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  )
}
export default Article
