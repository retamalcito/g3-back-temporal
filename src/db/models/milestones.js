'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Milestone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifeMilestone.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Cycle)
      this.hasMany(models.Activity)
    }
  }
  Milestone.init(
    {
      name: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      validated: {
        type: DataTypes.BOOLEAN,
      },
      totalScore: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Milestone',
    }
  )
  return Milestone
}
