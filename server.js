// DEPENDENCIES
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())

// MONGOOSE
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// INDEX
app.get('/', (req, res) => {
  res.send('Hello World')
})

// CONTROLLER 
const booksController = require('./controllers/booksController')
app.use('/books', booksController)

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})