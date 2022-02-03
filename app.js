const config = require('./utils/config')

require('./mongo')

const express = require('express');
const app = express()

const morgan = require('morgan')
const cors = require('cors')

// Blog Routes
const blog = require('./routes/blog.routes')

app.set('port', config.PORT)
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/v1/blog', blog)

module.exports = app

