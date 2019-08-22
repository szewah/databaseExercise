'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Profiles', [
        {
        customerName: 'John Doe',
        address: '10 Clapham Road',
        city: 'London',
        state: '',
        postCode: 'NS10 5PQ',
        country: 'United Kingdom'
      },
      {
        customerName: 'Satash Grim',
        address: '55 Newbury Close',
        city: 'Bembridge',
        state: '',
        postCode: 'PN12 0WE',
        country: 'United Kingdom',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Profiles', null, {});

  }
};
