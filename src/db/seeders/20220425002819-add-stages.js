'use strict'

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      'Stages',
      [
        {
          name: 'New Born',
          startAge: '0',
          endAge: '4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Babys',
          startAge: '5',
          endAge: '10',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),
  down: async (queryInterface) => {
    return queryInterface.bulkDelete('Stages', null, {})
  },
}
