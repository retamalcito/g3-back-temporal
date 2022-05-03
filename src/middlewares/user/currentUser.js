const db = require('../../db/models/index')
const User = db.sequelize.models.User
const jwt = require('jsonwebtoken')

const getCurrentUser = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.split(' ')[1]
    const payload = await jwt.decode(accessToken)

    const email = payload[Object.keys(payload)[0]]

    User.findOne({ where: { email: email } })
      .then((user) => {
        if (!user) {
          res.status(400).send({
            message: 'Failed! User does not exist',
          })
          return
        }
        req.currentUser = user
        return next()
      })
      .catch((error) => {
        res.status(500).send({
          message: error.message || 'Error al chequear email.',
        })
      })
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Error al obtener currentUser.',
    })
  }
}

const currentUser = {
  getCurrentUser: getCurrentUser,
}

module.exports = currentUser
