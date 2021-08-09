var express = require('express')
var router = express.Router()

const upload = require('../middlewares/upload')

const {
  getAdminDashboard,
  getNewUser,
  postNewUser,
  getUsers,
  getAdminOrders,
  getAdminProducts,
  getAdminProduct,
  updateAdminProduct,
  updateAdminOrder,
  getAdminOrder,
} = require('../controllers/index')

router.get('/', getAdminDashboard)

router.get('/orders', getAdminOrders)
router.get('/orders/:id', getAdminOrder)
router.post('/orders/:id', upload.single('prescription'), updateAdminOrder)

router.get('/products', getAdminProducts)
router.get('/products/:id', getAdminProduct)
router.post('products/:id', upload.single('productImage'), updateAdminProduct)

router.get('/users', getUsers)
router.get('/users/new', getNewUser)
router.post('/users/new', postNewUser)

module.exports = router
