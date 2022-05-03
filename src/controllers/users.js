const db = require('../db/models')
const User = db.sequelize.models.User

exports.allUsers = async (req, res) => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } })
  res.status(200).json(users)
}

exports.profile = async (req, res) => {
  const user = req.currentUser
  delete user.dataValues.password
  res.status(200).json(user)
}

exports.edit = async (req, res) => {
  const { id } = req.params
  const user = await User.findOne({ where: { id: id } })
  if (user) {
    user
      .update({ ...req.body })
      .then(res.status(200).json(user))
      .catch((error) => res.status(500).json({ err: error.message }))
  } else {
    res.status(400).json({ err: "The user doesn't exist" })
  }
}
