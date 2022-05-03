const db = require('../db/models')
const Stage = db.sequelize.models.Stage

exports.allStages = async (req, res) => {
  const stages = await Stage.findAll()
  res.status(200).json(stages)
}

exports.getStage = async (req, res) => {
  const { id } = req.params
  const stage = await Stage.findOne({
    where: {
      id: id,
    },
    include: 'Cycles',
  })
  res.status(200).json({ stage })
}
