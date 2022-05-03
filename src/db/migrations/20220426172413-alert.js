'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Alerts', {
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
      datetime: {
        type: Sequelize.DATE,
      },
      content: {
        type: Sequelize.STRING,
      },
    })
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Alerts')
  },
}
