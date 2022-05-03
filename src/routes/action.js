const { Router } = require('express')
const controller = require('../controllers/actionsController')

const actionRouter = Router()

actionRouter.get('/', controller.allActions)
actionRouter.get('/:id', controller.getAction)

module.exports = actionRouter
