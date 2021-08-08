const express = require('express')
const router = express.Router()
// middleware for parsing and saving image files
const multer = require('multer')
const storage = multer.diskStorage({
  destination: 'infrastructure/web/uploads/',
  filename: function (req, file, callback) {
    callback(null, file.originalname)
  },
})
const upload = multer({ storage: storage })

const {
  getUserDashboard,
  getUserSettings,
  getUserNewOrder,
  postUserNewOrder,
  getUserNewProduct,
  postUserNewProduct,
  getUserOrders,
  getUserProducts,
  putUserSettings,
  updateUserProduct,
  updateUserOrder,
} = require('../controllers/index')

router.get('/', getUserDashboard)

router.get('/settings', getUserSettings)
router.post('/settings', putUserSettings)

router.get('/orders', getUserOrders)
router.get('/orders/:id', getUserOrders)
router.get('/orders/new', getUserNewOrder)
router.post('/orders/new', upload.single('prescription'), postUserNewOrder)
router.post('/orders', upload.single('prescription'), updateUserOrder)

router.get('/products', getUserProducts)
router.get('/products/new', getUserNewProduct)
router.get('/products/:id', getUserProducts)
router.post('/products/new', upload.single('productImage'), postUserNewProduct)
router.post('/products', upload.single('productImage'), updateUserProduct)

module.exports = router
