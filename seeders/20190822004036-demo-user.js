'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
        name: 'John',
        lastName: 'Doe',
        email: 'doe@gmail.com',
        password: 'test1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Satash',
        lastName: 'Grim',
        email: 'sgrim@yahoo.com',
        password: 'test2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
