const createError = require('http-errors')
const express = require('express')
const session = require('express-session')
const { sequelize } = require('../store/sequelize/index')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const flash = require('connect-flash')
const path = require('path')
const cookieParser = require('cookie-parser')
const nunjucks = require('nunjucks')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const ordersRouter = require('./routes/orders')
const productsRouter = require('./routes/products')

const passport = require('./middlewares/passport-local-strategy')
const injectAuthenticatedUser = require('./middlewares/inject-authenticated-user')
const isAuthenticated = require('./middlewares/is-authenticated')
const isAuthenticatedAdmin = require('./middlewares/is-authenticated-admin')
const renderFlashMessages = require('./middlewares/render-flash-messages')
const injectAlgerianCities = require('./middlewares/inject-algerian-cities')

const app = express()

// set default express engine and extension
app.engine('njk', nunjucks.render)
app.set('view engine', 'njk')

const sequelizeSessionStore = new SequelizeStore({
  db: sequelize,
  table: 'Session',
})
if (app.get('env') === 'production') {
  const prodSessionConfig = {
    secret: 'keyboard cat',
    store: sequelizeSessionStore,
    resave: false,
    proxy: true,
    saveUninitialized: false,
  }
  app.use(session(prodSessionConfig))
  sequelizeSessionStore.sync()
} else {
  const devSessionConfig = {
    secret: 'keyboard cat',
    cookie: {},
    resave: false,
    saveUninitialized: false,
  }
  app.use(session(devSessionConfig))
}

// view engine setup
nunjucks.configure(path.join(__dirname, './views'), {
  autoescape: true,
  express: app,
})

app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(renderFlashMessages)
app.use(express.static(path.join(__dirname, 'public')))
app.use(
  '/uploads',
  isAuthenticated,
  express.static(path.join(__dirname, 'uploads'))
)
app.use(injectAlgerianCities)
app.use(injectAuthenticatedUser)

app.use('/', indexRouter)
app.use('/users', isAuthenticatedAdmin, usersRouter)
app.use('/orders', isAuthenticated, ordersRouter)
app.use('/products', isAuthenticated, productsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
