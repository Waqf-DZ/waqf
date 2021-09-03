const express = require('express')
const router = express.Router()

const upload = require('../middlewares/upload')

const {
  handleGetNewProduct,
  handleCreateProduct,
  handleGetProduct,
  handleGetProducts,
  handleUpdateProduct,
} = require('../controllers/index')

router.get('/', handleGetProducts)
router.get('/new', handleGetNewProduct)
router.get('/:id', handleGetProduct)
router.post('/new', upload.single('productImage'), handleCreateProduct)
router.post('/:id', upload.single('productImage'), handleUpdateProduct)

module.exports = router
