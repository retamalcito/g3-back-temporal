'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      description: {
        type: Sequelize.TEXT,
      },
      totalScore: {
        type: Sequelize.INTEGER,
      },
      preMoodCheck: {
        type: Sequelize.INTEGER,
      },
      currentScore: {
        type: Sequelize.INTEGER,
      },
    })
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Activities')
  },
}
