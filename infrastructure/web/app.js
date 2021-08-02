var createError = require('http-errors')
var express = require('express')
var session = require('express-session')
var flash = require('connect-flash')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var nunjucks = require('nunjucks')

var indexRouter = require('./routes/index')
var adminRouter = require('./routes/admin')
var profileRouter = require('./routes/profile')

var app = express()

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
app.use(session(sessionConfig))

// setup connect flash
app.use(flash())

// view engine setup
nunjucks.configure(path.join(__dirname, './views'), {
  autoescape: true,
  express: app,
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/admin', adminRouter)
app.use('/profile', profileRouter)

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
