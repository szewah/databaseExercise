'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerName: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING, 
        validate: {notEmpty: true}
      },
      state: {
        type: Sequelize.STRING
      },
      postCode: {
        type: Sequelize.STRING, 
        validate: {notEmpty: true}
      },
      country: {
        type: Sequelize.STRING, 
        validate: {notEmpty: true}
      },
      userID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      createdAt: {
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('profiles');
  }
};