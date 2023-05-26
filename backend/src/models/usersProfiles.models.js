const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./users.models');

const UserProfile = sequelize.define('userProfile', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  creationDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

User.hasOne(UserProfile);
UserProfile.belongsTo(User);

module.exports = UserProfile;
