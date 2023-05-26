const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/db.connect');
const User = require('./users.models');
const Skill = require('./skills.models');

const HelpRequest = sequelize.define('helpRequest', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('active', 'closed'),
    defaultValue: 'active',
  },
  requestDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

User.hasMany(HelpRequest, { foreignKey: 'userId' });
HelpRequest.belongsTo(User);

Skill.hasMany(HelpRequest, { foreignKey:'skillId' })
HelpRequest.belongsTo(Skill);

HelpRequest.belongsToMany(Skill, { through: 'HelpRequestSkills' });
Skill.belongsToMany(HelpRequest, { through: 'HelpRequestSkills' });

module.exports = HelpRequest;
