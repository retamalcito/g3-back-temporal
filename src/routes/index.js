const { Router } = require('express')
const helloRoutes = require('./hello')
const authRoutes = require('./auth')
const userRoutes = require('./user')
const stageRoutes = require('./stage')
const cycleRoutes = require('./cycle')
const milestoneRoutes = require('./milestone')
const activityRoutes = require('./activity')
const actionRoutes = require('./action')

const router = Router()

router.use('/hello', helloRoutes)
router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/stages', stageRoutes)
router.use('/cycles', cycleRoutes)
router.use('/milestones', milestoneRoutes)
router.use('/activities', activityRoutes)
router.use('/actions', actionRoutes)
module.exports = router
