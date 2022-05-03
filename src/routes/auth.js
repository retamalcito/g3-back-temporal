const { Router } = require('express')
const controller = require('../controllers/auth')
const { checkUser } = require('../middlewares')

const authRouter = Router()

authRouter.post('/sign-up', checkUser.checkEmail, controller.signup)

module.exports = authRouter
