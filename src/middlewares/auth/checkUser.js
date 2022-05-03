const db = require('../../db/models/index')
const User = db.sequelize.models.User

const checkEmail = async (req, res, next) => {
  User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (user) {
        res.status(200).json(user)
        return
      }
      return next()
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || 'Error al chequear email.',
      })
    })
}

const checkCurrentUser = async (req, res, next) => {
  if (req.currentUser.id != req.params.id) {
    res.status(401).send({ message: 'Unauthorized!' })
    return
  }
  return next()
}

const checkUser = {
  checkEmail: checkEmail,
  checkCurrentUser: checkCurrentUser,
}

module.exports = checkUser
