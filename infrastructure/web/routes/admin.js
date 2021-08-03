var express = require('express')
var router = express.Router()

const {
  getAdminDashboard,
  getNewUser,
  postNewUser,
  getUsers,
  getAdminOrders,
  getAdminProducts,
} = require('../controllers/index')

router.get('/', getAdminDashboard)

router.get('/orders', getAdminOrders)

router.get('/products', getAdminProducts)

router.get('/users', getUsers)
router.get('/users/new', getNewUser)
router.post('/users/new', postNewUser)

module.exports = router
