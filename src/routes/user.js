const { Router } = require('express')
const controller = require('../controllers/users')
const { auth0, currentUser, checkUser } = require('../middlewares')

const userRouter = Router()

userRouter.get(
  '/',
  auth0.jwtCheck,
  currentUser.getCurrentUser,
  controller.allUsers
)
userRouter.get(
  '/profile',
  auth0.jwtCheck,
  currentUser.getCurrentUser,
  controller.profile
)
userRouter.patch(
  '/:id',
  auth0.jwtCheck,
  currentUser.getCurrentUser,
  checkUser.checkCurrentUser,
  controller.edit
)

module.exports = userRouter
