'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    var array = []

    for (var i = 0; i <= 24; i++) {
      array.push(`${i}`)
    }
    await queryInterface.createTable('Cycles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      startAge: {
        type: Sequelize.ENUM({
          values: array,
        }),
        allowNull: true,
      },
      endAge: {
        type: Sequelize.ENUM({
          values: array,
        }),
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      completed: {
        type: Sequelize.BOOLEAN,
      },
      totalScore: {
        type: Sequelize.INTEGER,
      },
    })
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Cycles')
  },
}
