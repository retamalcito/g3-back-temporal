'use strict'

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      'Activities',
      [
        {
          name: 'Poner a la guagua de guata',
          createdAt: new Date(),
          updatedAt: new Date(),
          description: 'Recostar a la guagua boca abajo',
          totalScore: 6,
          preMoodCheck: 0,
          currentScore: 0,
          MilestoneId: 1,
        },
        {
          name: 'Mostrar Juguetes Bicolor',
          createdAt: new Date(),
          updatedAt: new Date(),
          description: 'Mostrar distintos juguetes para estimular el cerebro',
          totalScore: 3,
          preMoodCheck: 0,
          currentScore: 0,
          MilestoneId: 1,
        },
      ],
      {}
    ),
  down: async (queryInterface) => {
    return queryInterface.bulkDelete('Activities', null, {})
  },
}
