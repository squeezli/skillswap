const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Skill = sequelize.define('skill', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Skill;
