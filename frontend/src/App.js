import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login'
import Article from './components/Article'
import Register from './components/Register'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/Register' component={Register} exact />
          <Route path='/Login' component={Login} exact />
          <Route path='/Article' component={Article} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
