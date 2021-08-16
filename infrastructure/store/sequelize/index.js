const sequelize = require('./sequelize')
const { Op } = require('sequelize')

const User = require('./models/user')
const Order = require('./models/order')
const Product = require('./models/product')

const makeUsersDB = require('./repositories/usersDB')
const makeOrdersDB = require('./repositories/ordersDB')
const makeProductsDB = require('./repositories/productsDB')

module.exports = {
  sequelize,
  usersDB: makeUsersDB({ model: User, Op }),
  ordersDB: makeOrdersDB({ model: Order }),
  productsDB: makeProductsDB({ model: Product }),
}
