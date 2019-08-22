'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    address: {type: DataTypes.STRING, validate: {notEmpty: true}},
    city: {type: DataTypes.STRING, validate: {notEmpty: true}},
    state: {type: DataTypes.STRING},
    postCode: {type: DataTypes.STRING, validate: {notEmpty: true}},
    country: {type: DataTypes.STRING, validate: {notEmpty: true}},
    createdAt: {type: DataTypes.DATEONLY},
    updatedAt: {type: DataTypes.DATEONLY}
  }, {});
  Profile.associate = function(models) {
    Profile.belongsTo(models.User, {
      foreignKey: 'userID'
    })
  };
  return Profile;
};