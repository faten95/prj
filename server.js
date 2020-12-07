const express = require('express')
const app = express()
const connectdb = require('./config/db')

// Connection database
connectdb()

//middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('API Running'))

app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/products', require('./routes/api/products'))

// Connection server
const port = process.env.PORT || 4000
app.listen(port, (error) => {
  error
    ? console.log('Connection failed')
    : console.log(`Server in running on port ${port}`)
})
