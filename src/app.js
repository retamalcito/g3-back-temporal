const express = require('express')
const routes = require('./routes/index')
const cors = require('cors')
const formData = require('express-form-data')
const morgan = require('morgan')

const app = express()
const morganConfig = { development: 'dev', production: 'combined' }

app.use(express.json())
app.use(cors())
app.use(formData.parse())
app.use(morgan(morganConfig[process.env.NODE_ENV]))

app.use(routes)

app.get('/', async (req, res) => {
  try {
    res.send('Hello World!')
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = app
