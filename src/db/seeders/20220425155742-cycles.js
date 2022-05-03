'use strict'
module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      'Cycles',
      [
        {
          name: 'Ciclo 1',
          startAge: '0',
          endAge: '1',
          createdAt: new Date(),
          updatedAt: new Date(),
          completed: false,
          totalScore: 0,
          StageId: 1,
        },
        {
          name: 'Ciclo 2',
          startAge: '2',
          endAge: '3',
          createdAt: new Date(),
          updatedAt: new Date(),
          completed: false,
          totalScore: 0,
          StageId: 1,
        },
        {
          name: 'Ciclo 3',
          startAge: '4',
          endAge: '4',
          createdAt: new Date(),
          updatedAt: new Date(),
          completed: false,
          totalScore: 0,
          StageId: 1,
        },
      ],
      {}
    ),
  down: async (queryInterface) => {
    return queryInterface.bulkDelete('Cycles', null, {})
  },
}
