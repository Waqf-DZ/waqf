var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('profile/index')
})

router.get('/order', function (req, res) {
  res.render('profile/order')
})

router.get('/orders', function (req, res) {
  res.render('profile/orders')
})

module.exports = router
