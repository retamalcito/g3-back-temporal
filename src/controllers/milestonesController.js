const db = require('../db/models')
const Milestone = db.sequelize.models.Milestone

exports.allMilestones = async (req, res) => {
  const milestones = await Milestone.findAll()
  res.status(200).json(milestones)
}

exports.getMilestone = async (req, res) => {
  const { id } = req.params
  const milestone = await Milestone.findOne({
    where: {
      id: id,
    },
    include: 'Activities',
  })
  res.status(200).json({ milestone })
}
