var express = require('express')
var router = express.Router()

const {
  getAdminDashboard,
  getNewUser,
  postNewUser,
  getUsers,
  getAdminOrders,
  getAdminProducts,
  getAdminProduct,
} = require('../controllers/index')

router.get('/', getAdminDashboard)

router.get('/orders', getAdminOrders)

router.get('/products', getAdminProducts)
router.get('/products/:id', getAdminProduct)

router.get('/users', getUsers)
router.get('/users/new', getNewUser)
router.post('/users/new', postNewUser)

module.exports = router
