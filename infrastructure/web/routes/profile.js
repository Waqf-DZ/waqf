var express = require('express')
var router = express.Router()

const {
  getUserDashboard,
  getUserSettings,
  getUserNewOrder,
  postUserNewOrder,
  getUserNewProduct,
  postUserNewProduct,
  getUserOrders,
  getUserProducts,
} = require('../controllers/index')

router.get('/', getUserDashboard)

router.get('/settings', getUserSettings)

router.get('/orders', getUserOrders)
router.get('/orders/new', getUserNewOrder)
router.post('/orders/new', postUserNewOrder)

router.get('/products', getUserProducts)
router.get('/products/new', getUserNewProduct)
router.post('/products/new', postUserNewProduct)

module.exports = router
