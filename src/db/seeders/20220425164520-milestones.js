'use strict'

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      'Milestones',
      [
        {
          name: 'Control Cefalico',
          createdAt: new Date(),
          updatedAt: new Date(),
          validated: false,
          totalScore: 9,
          CycleId: '1',
        },
      ],
      {}
    ),
  down: async (queryInterface) => {
    return queryInterface.bulkDelete('Milestones', null, {})
  },
}
