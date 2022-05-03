const db = require('../db/models')
const User = db.sequelize.models.User

exports.signup = async (req, res) => {
  let userInfo = {
    name: req.body.name,
    lastName: req.body.lastName,
    username: req.body.nickname,
    email: req.body.email,
    password: null,
    picture: req.body.picture,
  }
  User.create(userInfo)
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || 'Error al crear el usuario.',
      })
    })
}
