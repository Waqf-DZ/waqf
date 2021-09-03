const express = require('express')
const router = express.Router()

const upload = require('../middlewares/upload')

const {
  handleGetNewOrder,
  handleCreateOrder,
  handleGetOrder,
  handleGetOrderEdit,
  handleAcceptOrder,
  handleCompleteOrder,
  handleGetOrders,
  handleUpdateOrder,
} = require('../controllers/index')

router.get('/', handleGetOrders)
router.get('/new', handleGetNewOrder)
router.get('/:id', handleGetOrder)
router.get('/:id/edit', handleGetOrderEdit)
router.post('/:id/accept', handleAcceptOrder)
router.post('/:id/complete', handleCompleteOrder)

router.post('/new', upload.single('prescription'), handleCreateOrder)
router.post('/:id', upload.single('prescription'), handleUpdateOrder)

module.exports = router
