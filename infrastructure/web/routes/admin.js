var express = require('express')
var router = express.Router()

const {
  postNewOrder,
  postNewProduct,
  postNewUser,
  getUsers,
  getAdminOrders,
  getAdminProducts,
} = require('../controllers/index')

router.get('/', function (req, res) {
  res.render('admin/index')
})

router.get('/orders', getAdminOrders)

router.get('/orders/new', function (req, res) {
  res.render('admin/orders/new')
})
router.post('/orders/new', postNewOrder)

router.get('/products', getAdminProducts)

router.get('/products/new', function (req, res) {
  res.render('admin/products/new')
  router.post('/products/new', postNewProduct)
})

router.get('/users', getUsers)

router.get('/users/new', function (req, res) {
  res.render('admin/users/new')
})

router.post('/users/new', postNewUser)

module.exports = router
