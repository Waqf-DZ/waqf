var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('profile/index')
})

router.get('/orders/new', function (req, res) {
  res.render('profile/orders/new')
})

router.get('/orders', function (req, res) {
  res.render('profile/orders/index')
})

router.get('/products/new', function (req, res) {
  res.render('profile/products/new')
})

router.get('/products', function (req, res) {
  res.render('profile/products/index')
})

module.exports = router
