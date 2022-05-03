'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  var array = []

  for (var i = 0; i <= 24; i++) {
    array.push(`${i}`)
  }
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Cycle)
    }
  }
  Stage.init(
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
    },
    {
      sequelize,
      modelName: 'Stage',
    }
  )
  return Stage
}
