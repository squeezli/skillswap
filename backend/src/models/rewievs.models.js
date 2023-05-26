
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./users.models');

const Review = sequelize.define('review', {
  reviewText: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  reviewDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

User.hasMany(Review, { as: 'givenReviews', foreignKey: 'reviewerId' });
User.hasMany(Review, { as: 'receivedReviews', foreignKey: 'reviewedUserId' });
Review.belongsTo(User, { as: 'reviewer', foreignKey: 'reviewerId' });
Review.belongsTo(User, { as: 'reviewedUser', foreignKey: 'reviewedUserId' });

module.exports = Review;
