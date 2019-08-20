'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    customerName: {type: DataTypes.STRING, valide: {notEmpty: true}},
    address: {type: DataTypes.STRING, valide: {notEmpty: true}},
    city: {type: DataTypes.STRING, valide: {notEmpty: true}},
    state: { type: DataTypes.STRING},
    postCode: {type: DataTypes.STRING, valide: {notEmpty: true}},
    country: {type: DataTypes.STRING, valide: {notEmpty: true}},
    createdAt: { allowNull: false, type: DataTypes.DATEONLY},
    updatedAt: {allowNull: false, type: DataTypes.DATEONLY}
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
  };
  return Profile;
};