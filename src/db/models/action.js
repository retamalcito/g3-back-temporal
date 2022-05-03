'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Action extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifeAction.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Activity)
      this.hasOne(models.Alert)
    }
  }
  Action.init(
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
      currentScore: {
        type: DataTypes.INTEGER,
      },
      achived: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Action',
    }
  )
  return Action
}
