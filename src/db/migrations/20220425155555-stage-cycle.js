'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Cycles', // name of Source model
      'StageId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Stages', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
  },
  async down(queryInterface) {
    await queryInterface.removeColumn(
      'Cycles', // name of Source model
      'StageId' // key we want to remove
    )
  },
}
