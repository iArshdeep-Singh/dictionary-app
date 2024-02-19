const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
require('colors')
const connectDB = require('./db')
const routes = require('./routes/authRoutes')


const server = express()

// configure env
dotenv.config()

const port = process.env.PORT || 1999
const host = process.env.HOST

// database connection
connectDB()


// middlewares
server.use(cors())
server.use(express.json())
server.use(morgan('dev'))


// routes
server.use('/', routes)


server.listen(port, () => {
    console.log(`Server running on http://${host}:${port}`.bgCyan.black)
})