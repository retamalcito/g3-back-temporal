const db = require('../db/models')
const Cycle = db.sequelize.models.Cycle

exports.allCycles = async (req, res) => {
  const cycles = await Cycle.findAll()
  res.status(200).json(cycles)
}

exports.getCycle = async (req, res) => {
  const { id } = req.params
  const cycle = await Cycle.findOne({
    where: {
      id: id,
    },
    include: 'Milestones',
  })
  res.status(200).json({ cycle })
}
