const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/db.connect');
const HelpRequest = require('./helpRequest.models');
const Skill = require('./skills.models');

const HelpRequestSkill = sequelize.define('helpRequestSkill', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  desiredSkillLevel: {
    type: DataTypes.ENUM('beginner', 'intermediate', 'advanced'),
    allowNull: false,
  },
});

// HelpRequest.belongsToMany(Skill, { through: HelpRequestSkill });
// Skill.belongsToMany(HelpRequest, { through: HelpRequestSkill });

module.exports = HelpRequestSkill;
