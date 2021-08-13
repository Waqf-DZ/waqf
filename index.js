var http = require('http')
const app = require('./infrastructure/web/app')
const { sequelize } = require('./infrastructure/store/sequelize')
const isProduction = process.env.NODE_ENV

async function start() {
  const PORT = process.env.PORT || 3000
  const server = http.createServer(app)

  if (isProduction) {
    await sequelize.sync({ alter: true })
  }

  server.listen(PORT, () => {
    console.log('running on port', PORT)
  })
}

start()
