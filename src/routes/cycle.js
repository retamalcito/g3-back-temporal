const { Router } = require('express')
const controller = require('../controllers/cyclesController')

const cycleRouter = Router()

cycleRouter.get('/', controller.allCycles)
cycleRouter.get('/:id', controller.getCycle)

module.exports = cycleRouter
