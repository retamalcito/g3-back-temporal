'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Milestones', {
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
      validated: {
        type: Sequelize.BOOLEAN,
      },
      totalScore: {
        type: Sequelize.INTEGER,
      },
    })
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Milestones')
  },
}
