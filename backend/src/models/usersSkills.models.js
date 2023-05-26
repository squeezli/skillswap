
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./users.models');
const Skill = require('./skills.models');

const UserSkill = sequelize.define('userSkill', {
  skillLevel: {
    type: DataTypes.ENUM('Начинающий', 'Опытный', 'Эксперт'),
    allowNull: true,
  },
  skillAddedDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

User.belongsToMany(Skill, { through: UserSkill });
Skill.belongsToMany(User, { through: UserSkill });

module.exports = UserSkill;
