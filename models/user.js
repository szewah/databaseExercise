'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {type: DataTypes.STRING, validate: {notEmpty: true}}, 
    lastName: {type: DataTypes.STRING, validate: {notEmpty: true}},
    email: {type: DataTypes.STRING, validate: {isEmail:true}},
    password: {type: DataTypes.STRING, validate: {notEmpty: true}},
    createdAt: {type: DataTypes.DATEONLY},
    updatedAt: {type: DataTypes.DATEONLY}
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Profile, {
      onDelete: "cascade"
    });
  };
  return User;
};