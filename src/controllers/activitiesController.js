const db = require('../db/models')
const Activity = db.sequelize.models.Activity

exports.allActivities = async (req, res) => {
  const activities = await Activity.findAll()
  res.status(200).json(activities)
}

exports.getActivity = async (req, res) => {
  const { id } = req.params
  const activity = await Activity.findOne({
    where: {
      id: id,
    },
    include: 'Actions',
  })
  res.status(200).json({ activity })
}
