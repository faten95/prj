import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('SUCCESS')
  }
  return (
    <>
      <Form onSubmit={(e) => onSubmit(e)}>
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
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button
          variant='primary'
          name='password'
          value={password}
          onChange={(e) => onChange(e)}
          required
          type='submit'
        >
          Login
        </Button>
        <Row className='py-3'>
          <Col>
            New Customer? <Link to='/Register'>Register</Link>
          </Col>
        </Row>
      </Form>
    </>
  )
}
export default Login
