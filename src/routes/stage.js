const { Router } = require('express')
const controller = require('../controllers/stagesController')

const stageRouter = Router()

stageRouter.get('/', controller.allStages)
stageRouter.get('/:id', controller.getStage)

module.exports = stageRouter
