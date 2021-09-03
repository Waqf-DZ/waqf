const express = require('express')
const router = express.Router()

const upload = require('../middlewares/upload')

const {
  getUserNewProduct,
  postUserNewProduct,
  getUserProduct,
  getUserProducts,
  updateUserProduct,
} = require('../controllers/index')

router.get('/', getUserProducts)
router.get('/new', getUserNewProduct)
router.get('/:id', getUserProduct)
router.post('/new', upload.single('productImage'), postUserNewProduct)
router.post('/:id', upload.single('productImage'), updateUserProduct)

module.exports = router
