const db = require('../db/models')
const Action = db.sequelize.models.Action

exports.allActions = async (req, res) => {
  const actions = await Action.findAll()
  res.status(200).json(actions)
}

exports.getAction = async (req, res) => {
  const { id } = req.params
  const action = await Action.findOne({
    where: {
      id: id,
    },
  })
  res.status(200).json({ action })
}
