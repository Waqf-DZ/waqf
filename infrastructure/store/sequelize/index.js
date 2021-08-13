const sequelize = require('./sequelize')
const { Op } = require('sequelize')

const User = require('./models/user')

const makeUsersDB = require('./repositories/usersDB')

module.exports = {
  sequelize,

  usersDB: makeUsersDB({ model: User, Op }),
}
