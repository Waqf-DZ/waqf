const { DataTypes } = require('sequelize')

const sequelize = require('../sequelize')

const Product = sequelize.define('product', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  },
  serial: {
    type: DataTypes.STRING,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
  },
  isBroken: {
    type: DataTypes.BOOLEAN,
  },
  freeDays: {
    type: DataTypes.INTEGER,
  },
  dayPrice: {
    type: DataTypes.INTEGER,
  },
  createdAt: {
    type: DataTypes.DOUBLE,
  },
  ownerId: {
    type: DataTypes.STRING,
  },
})

module.exports = Product
