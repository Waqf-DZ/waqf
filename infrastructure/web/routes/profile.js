const express = require('express')
const router = express.Router()

const upload = require('../middlewares/upload')
const isHelpGiver = require('../middlewares/is-help-giver-authenticated')
const isHelpSeeker = require('../middlewares/is-help-seeker-authenticated')

const {
  getUserDashboard,
  getUserSettings,
  getUserNewOrder,
  postUserNewOrder,
  getUserNewProduct,
  postUserNewProduct,
  getUserOrder,
  postUserAcceptOrder,
  getUserOrders,
  getUserProduct,
  getUserProducts,
  putUserSettings,
  updateUserProduct,
  updateUserOrder,
} = require('../controllers/index')

// user general routes
router.get('/', getUserDashboard)
router.get('/settings', getUserSettings)
router.post('/settings', putUserSettings)

// user orders routes
router.get('/orders/new', isHelpSeeker, getUserNewOrder)
router.get('/orders', getUserOrders)
router.get('/orders/:id', getUserOrder)
router.post('/orders/:id/accept', postUserAcceptOrder)

router.post(
  '/orders/new',
  isHelpSeeker,
  upload.single('prescription'),
  postUserNewOrder
)
router.post(
  '/orders/:id',
  isHelpSeeker,
  upload.single('prescription'),
  updateUserOrder
)

// user products routes
router.get('/products/new', isHelpGiver, getUserNewProduct)
router.get('/products', isHelpGiver, getUserProducts)
router.get('/products/:id', isHelpGiver, getUserProduct)
router.post(
  '/products/new',
  isHelpGiver,
  upload.single('productImage'),
  postUserNewProduct
)
router.post(
  '/products/:id',
  isHelpGiver,
  upload.single('productImage'),
  updateUserProduct
)

module.exports = router
