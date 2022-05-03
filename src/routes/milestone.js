const { Router } = require('express')
const controller = require('../controllers/milestonesController')

const milestoneRouter = Router()

milestoneRouter.get('/', controller.allMilestones)
milestoneRouter.get('/:id', controller.getMilestone)

module.exports = milestoneRouter
