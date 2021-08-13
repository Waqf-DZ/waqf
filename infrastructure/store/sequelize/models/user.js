const { DataTypes } = require('sequelize')

const sequelize = require('../sequelize')

const User = sequelize.define('user', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  passwordHash: {
    type: DataTypes.STRING,
  },
  displayName: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
  },
  createdAt: {
    type: DataTypes.DOUBLE,
  },
  role: {
    type: DataTypes.STRING,
  },
})

module.exports = User
