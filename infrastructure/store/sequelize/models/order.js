const { DataTypes } = require('sequelize')

const sequelize = require('../sequelize')

const Order = sequelize.define('order', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  patientName: {
    type: DataTypes.STRING,
  },
  patientAge: {
    type: DataTypes.INTEGER,
  },
  oxygenRatio: {
    type: DataTypes.INTEGER,
  },
  hasChronicDesease: {
    type: DataTypes.BOOLEAN,
  },
  isCovid: {
    type: DataTypes.BOOLEAN,
  },
  prescriptionUrl: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
  assignedProductId: {
    type: DataTypes.STRING,
  },
  assignedUserId: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DOUBLE,
  },
  acceptedAt: {
    type: DataTypes.DOUBLE,
  },
  completedAt: {
    type: DataTypes.DOUBLE,
  },
  ownerId: {
    type: DataTypes.STRING,
  },
})

module.exports = Order
