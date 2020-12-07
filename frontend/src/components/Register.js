import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    pseudo: '',
    email: '',
    password: '',
    adress: '',
  })
  const { name, pseudo, email, password, adress } = formData
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type='text'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            required
            placeholder='Entrer Nom'
          />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>pseudo</Form.Label>
          <Form.Control
            type='text'
            name='pseudo'
            value={pseudo}
            onChange={(e) => onChange(e)}
            required
            placeholder='Enter pseudo'
          />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
            placeholder='Enter email'
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            required
            placeholder='Password'
          />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>adress</Form.Label>
          <Form.Control
            type='text'
            name='adress'
            value={adress}
            onChange={(e) => onChange(e)}
            required
            placeholder='Enter adress'
          />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  )
}
export default Register
