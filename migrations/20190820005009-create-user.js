'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        validate: {notEmpty: true}
      },
      lastName: {
        type: Sequelize.STRING,
        validate: {notEmpty: true}
      },
      email: {
        type: Sequelize.STRING,
        validate: {isEmpty: true}
      },
      password: {
        type: Sequelize.STRING,
        validate: {notEmpty: true}
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};