const { Router } = require('express')

const hello = Router()

hello.get('/', async (req, res) => {
  res.status(200).json({ message: 'Hello!' })
})

module.exports = hello
