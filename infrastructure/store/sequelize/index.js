const sequelize = require('./sequelize')
const { Op } = require('sequelize')

const User = require('./models/user')
const Order = require('./models/order')

const makeUsersDB = require('./repositories/usersDB')
const makeOrdersDB = require('./repositories/ordersDB')

module.exports = {
  sequelize,
  usersDB: makeUsersDB({ model: User, Op }),
  ordersDB: makeOrdersDB({ model: Order }),
}
