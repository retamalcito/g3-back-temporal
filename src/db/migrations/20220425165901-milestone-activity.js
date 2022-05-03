'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Activities', // name of Source model
      'MilestoneId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Activities', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
  },
  async down(queryInterface) {
    await queryInterface.removeColumn(
      'Activities', // name of Source model
      'MilestoneId' // key we want to remove
    )
  },
}
