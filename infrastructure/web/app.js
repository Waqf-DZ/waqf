const createError = require('http-errors')
const express = require('express')
const session = require('express-session')
const flash = require('connect-flash')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const nunjucks = require('nunjucks')

const indexRouter = require('./routes/index')
const adminRouter = require('./routes/admin')
const profileRouter = require('./routes/profile')

const passport = require('./middlewares/passport-local-strategy')
const isAuthenticated = require('./middlewares/is-authenticated')
const isAuthenticatedAdmin = require('./middlewares/is-authenticated-admin')
const isAuthenticatedUser = require('./middlewares/is-authenticated-user')
const renderFlashMessages = require('./middlewares/render-flash-messages')
const injectAlgerianCities = require('./middlewares/inject-algerian-cities')

const app = express()

// set default express engine and extension
app.engine('njk', nunjucks.render)
app.set('view engine', 'njk')

// setup session
var sessionConfig = {
  secret: 'keyboard cat',
  cookie: {},
  resave: false,
  saveUninitialized: false,
}
if (app.get('env') === 'production') {
  app.set('trust proxy', 1)
  sessionConfig.cookie.secure = true
}

// view engine setup
nunjucks.configure(path.join(__dirname, './views'), {
  autoescape: true,
  express: app,
})

app.use(session(sessionConfig))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
app.use(logger('dev'))
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

app.use('/', indexRouter)
app.use('/admin', isAuthenticatedAdmin, adminRouter)
app.use('/profile', isAuthenticatedUser, profileRouter)

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
