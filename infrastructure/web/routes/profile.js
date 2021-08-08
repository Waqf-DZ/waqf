const express = require('express')
const router = express.Router()

const upload = require('../middlewares/upload')

const {
  getUserDashboard,
  getUserSettings,
  getUserNewOrder,
  postUserNewOrder,
  getUserNewProduct,
  postUserNewProduct,
  getUserOrders,
  getUserProduct,
  getUserProducts,
  putUserSettings,
  updateUserProduct,
  updateUserOrder,
} = require('../controllers/index')

router.get('/', getUserDashboard)

router.get('/settings', getUserSettings)
router.post('/settings', putUserSettings)

router.get('/orders/new', getUserNewOrder)
router.post('/orders/new', upload.single('prescription'), postUserNewOrder)
router.get('/orders', getUserOrders)
router.get('/orders/:id', getUserOrders)
router.post('/orders/:id', upload.single('prescription'), updateUserOrder)

router.get('/products/new', getUserNewProduct)
router.post('/products/new', upload.single('productImage'), postUserNewProduct)
router.get('/products', getUserProducts)
router.get('/products/:id', getUserProduct)
router.post('/products/:id', upload.single('productImage'), updateUserProduct)

module.exports = router
