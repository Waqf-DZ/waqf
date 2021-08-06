var express = require('express')
var router = express.Router()
const { getUsers } = require('../controllers/index')

router.get('/', function (req, res) {
  res.render('admin/index')
})

router.get('/orders', function (req, res) {
  res.render('admin/orders/index')
})

router.get('/orders/new', function (req, res) {
  res.render('admin/orders/new')
})

router.get('/products', function (req, res) {
  res.render('admin/products/index')
})

router.get('/products/new', function (req, res) {
  res.render('admin/products/new')
})

router.get('/users', function (req, res) {
  getUsers(req, res)
})

router.get('/users/new', function (req, res) {
  res.render('admin/users/new')
})

module.exports = router
