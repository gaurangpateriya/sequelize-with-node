module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'demo@demo.com',
      password: '$321!pass!123$',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Gauran',
      lastName: 'Pateriya',
      email: 'g@g.com',
      password: '$321!pass!123$',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'yash',
      lastName: 'Dprsad',
      email: 'y@g.com',
      password: '$321!pass!123$',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};