const { Sequelize } = require('sequelize')

module.exports = new Sequelize('waqf', 'waqf', '00000000', {
  host: 'localhost',
  dialect: 'postgres',
})
