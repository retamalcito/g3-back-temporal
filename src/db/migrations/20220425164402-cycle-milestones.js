'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Milestones', // name of Source model
      'CycleId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Milestones', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
  },
  async down(queryInterface) {
    await queryInterface.removeColumn(
      'Milestones', // name of Source model
      'CycleId' // key we want to remove
    )
  },
}
