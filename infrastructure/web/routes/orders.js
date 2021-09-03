const express = require('express')
const router = express.Router()

const upload = require('../middlewares/upload')

const {
  getUserNewOrder,
  postUserNewOrder,
  getUserOrder,
  getUserOrderEdit,
  postUserAcceptOrder,
  postUserCompleteOrder,
  getUserOrders,
  updateUserOrder,
} = require('../controllers/index')

router.get('/', getUserOrders)
router.get('/new', getUserNewOrder)
router.get('/:id', getUserOrder)
router.get('/:id/edit', getUserOrderEdit)
router.post('/:id/accept', postUserAcceptOrder)
router.post('/:id/complete', postUserCompleteOrder)

router.post('/new', upload.single('prescription'), postUserNewOrder)
router.post('/:id', upload.single('prescription'), updateUserOrder)

module.exports = router
