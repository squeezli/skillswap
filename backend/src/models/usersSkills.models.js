const { DataTypes } = require('sequelize');
const {sequelize} = require('../utils/db.connect');
const User = require('./users.models');
const Skill = require('./skills.models');
const HelpRequestSkill = require('./helpRequestSkills.models');
const HelpRequest = require('./helpRequest.models');

const UserSkill = sequelize.define('userSkill', {
  skillLevel: {
    type: DataTypes.ENUM('beginner', 'intermediate', 'advanced'),
    allowNull: true,
  },
  skillAddedDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

User.belongsToMany(Skill, { through: UserSkill });
Skill.belongsToMany(User, { through: UserSkill });

HelpRequest.belongsToMany(Skill, { through: HelpRequestSkill });
Skill.belongsToMany(HelpRequest, { through: HelpRequestSkill });

module.exports = UserSkill;
