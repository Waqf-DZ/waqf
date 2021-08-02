var express = require('express')
var router = express.Router()

const { getSignUp, postSignup } = require('../controllers/index')

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/signup', getSignUp)
router.post('/signup', postSignup)

router.get('/signin', function (req, res) {
  const successMessages = req.flash('success')
  const errorMessages = req.flash('error')
  res.render('signin', { successMessages, errorMessages })
})

router.get('/about', function (req, res) {
  res.render('about')
})

router.get('/contact', function (req, res) {
  res.render('contact')
})

module.exports = router
