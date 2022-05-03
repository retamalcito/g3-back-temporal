'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Actions', // name of Source model
      'AlertsId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Actions', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
  },
  async down(queryInterface) {
    await queryInterface.removeColumn(
      'Actions', // name of Source model
      'AlertsId' // key we want to remove
    )
  },
}
