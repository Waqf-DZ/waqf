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
  updateUserOrder,
} = require('../controllers/index')

router.get('/', getUserDashboard)

router.get('/settings', getUserSettings)
router.post('/settings', putUserSettings)

router.get('/orders', getUserOrders)
router.get('/orders/:id', getUserOrders)
router.post('/orders/:id', upload.single('prescription'), updateUserOrder)

router.get('/orders/new', getUserNewOrder)
router.post('/orders/new', upload.single('prescription'), postUserNewOrder)

router.get('/products', getUserProducts)
router.get('/products/new', getUserNewProduct)
router.post('/products/new', upload.single('productImage'), postUserNewProduct)

module.exports = router
