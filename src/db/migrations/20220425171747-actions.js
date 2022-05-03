'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Actions', {
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
      currentScore: {
        type: Sequelize.INTEGER,
      },
      achived: {
        type: Sequelize.BOOLEAN,
      },
    })
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Actions')
  },
}
