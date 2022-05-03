'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifeActivity.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Milestone)
      this.hasMany(models.Action)
    }
  }
  Activity.init(
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
      description: {
        type: DataTypes.TEXT,
      },
      totalScore: {
        type: DataTypes.INTEGER,
      },
      preMoodCheck: {
        type: DataTypes.INTEGER,
      },
      currentScore: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Activity',
    }
  )
  return Activity
}
