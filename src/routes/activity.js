const { Router } = require('express')
const controller = require('../controllers/activitiesController')

const activityRouter = Router()

activityRouter.get('/', controller.allActivities)
activityRouter.get('/:id', controller.getActivity)

module.exports = activityRouter
