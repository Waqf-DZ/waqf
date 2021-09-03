var express = require('express')
var router = express.Router()

const isAuthenticated = require('../middlewares/is-authenticated')

const {
  handleGetDashboard,
  handleGetSettings,
  handleUpdateSettings,
  getSignUp,
  getSignout,
  postSignup,
  postSignin,
} = require('../controllers/index')

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/signup', getSignUp)
router.get('/signout', getSignout)
router.post('/signup', postSignup)

router.get('/signin', function (req, res) {
  res.render('signin')
})

router.post('/signin', postSignin)

router.get('/reset-password', (req, res) => {
  res.render('reset-password')
})

router.get('/about', function (req, res) {
  res.render('about')
})

router.get('/contact', function (req, res) {
  res.render('contact')
})

router.get('/dashboard', isAuthenticated, handleGetDashboard)
router.get('/settings', isAuthenticated, handleGetSettings)
router.post('/settings', isAuthenticated, handleUpdateSettings)

module.exports = router
