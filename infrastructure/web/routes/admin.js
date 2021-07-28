var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('admin/index')
})

router.get('/orders', function (req, res) {
  res.render('admin/orders')
})

router.get('/products', function (req, res) {
  res.render('admin/products')
})

router.get('/users', function (req, res) {
  res.render('admin/users')
})

module.exports = router
