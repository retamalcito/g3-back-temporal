'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  var array = []

  for (var i = 0; i <= 24; i++) {
    array.push(`${i}`)
  }
  class Cycle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Stage)
      this.hasMany(models.Milestone)
    }
  }
  Cycle.init(
    {
      name: {
        type: DataTypes.STRING,
      },
      startAge: {
        type: DataTypes.ENUM({
          values: array,
        }),
        allowNull: true,
      },
      endAge: {
        type: DataTypes.ENUM({
          values: array,
        }),
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      completed: {
        type: DataTypes.BOOLEAN,
      },
      totalScore: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Cycle',
    }
  )
  return Cycle
}
