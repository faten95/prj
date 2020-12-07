import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg='light' variant='green' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              {/* <img
                alt=''
                src='capturelogo.jpg'
                width='300'
                height='70'
                className='d-inline-block align-top'
              /> */}
              San3et Idy
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/Login'>
                <Nav.Link>
                  <i className='fas fa-user'></i>Se connecter
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/Article'>
                <Nav.Link>
                  <i className='fas fa-plus'></i>Créer un produit
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
