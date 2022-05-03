'use strict'

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      'Actions',
      [
        {
          name: 'Levantar Menton',
          createdAt: new Date(),
          updatedAt: new Date(),
          description: 'Levantar Menton',
          currentScore: 0,
          achived: false,
          ActivityId: 1,
        },
        {
          name: 'Levantar Cabeza 45°',
          createdAt: new Date(),
          updatedAt: new Date(),
          description: 'Levantar Cabeza 45°',
          currentScore: 0,
          achived: false,
          ActivityId: 1,
        },
        {
          name: 'Mueve cabeza ambos lados',
          createdAt: new Date(),
          updatedAt: new Date(),
          description: 'Mueve cabeza ambos lados',
          currentScore: 0,
          achived: false,
          ActivityId: 1,
        },
        {
          name: 'Sigue objeto cruzando lineas',
          createdAt: new Date(),
          updatedAt: new Date(),
          description: 'Sigue objeto cruzando lineas',
          currentScore: 0,
          achived: false,
          ActivityId: 1,
        },
        {
          name: 'Apoya codos y antebrazos',
          createdAt: new Date(),
          updatedAt: new Date(),
          description: 'Levantar Menton',
          currentScore: 0,
          achived: false,
          ActivityId: 1,
        },
        {
          name: 'Apoyo Asimetrico de codos',
          createdAt: new Date(),
          updatedAt: new Date(),
          description: 'Apoyo Asimetrico de codos',
          currentScore: 0,
          achived: false,
          ActivityId: 1,
        },
        {
          name: 'Fijar la mirada',
          createdAt: new Date(),
          updatedAt: new Date(),
          description: 'Fijar la mirada',
          currentScore: 0,
          achived: false,
          ActivityId: 2,
        },
        {
          name: 'Sigue los objetos con la mirada',
          createdAt: new Date(),
          updatedAt: new Date(),
          description: 'Sigue los objetos con la mirada',
          currentScore: 0,
          achived: false,
          ActivityId: 2,
        },
        {
          name: 'Mueve la cabeza para seguir objetos',
          createdAt: new Date(),
          updatedAt: new Date(),
          description: 'Mueve la cabeza para seguir objetos',
          currentScore: 0,
          achived: false,
          ActivityId: 2,
        },
      ],
      {}
    ),
  down: async (queryInterface) => {
    return queryInterface.bulkDelete('Actions', null, {})
  },
}
