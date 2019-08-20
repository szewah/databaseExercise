'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {type: DataTypes.STRING, valide: {notEmpty: true}}, 
    lastName: {type: DataTypes.STRING, valide: {notEmpty: true}},
    email: {type: DataTypes.STRING, valide: {isEmail:true}},
    createdAt: { allowNull: false, type: DataTypes.DATEONLY},
    updatedAt: {allowNull: false, type: DataTypes.DATEONLY}
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Profile, {
      onDelete: "cascade"
    });
  };
  return User;
};