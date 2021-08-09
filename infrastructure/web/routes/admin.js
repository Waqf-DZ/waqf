var express = require('express')
var router = express.Router()
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
  getAdminDashboard,
  getNewUser,
  postNewUser,
  getUsers,
  getAdminOrders,
  getAdminProducts,
  updateAdminOrder,
  getAdminOrder,
} = require('../controllers/index')

router.get('/', getAdminDashboard)

router.get('/orders', getAdminOrders)
router.get('/orders/:id', getAdminOrder)
router.post('/orders/:id', upload.single('prescription'), updateAdminOrder)

router.get('/products', getAdminProducts)

router.get('/users', getUsers)
router.get('/users/new', getNewUser)
router.post('/users/new', postNewUser)

module.exports = router
