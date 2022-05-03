'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Alert extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifeActivity.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Action)
    }
  }
  Alert.init(
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
      datetime: {
        type: DataTypes.DATE,
      },
      content: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Alert',
    }
  )
  return Alert
}
