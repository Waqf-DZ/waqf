var express = require('express')
var router = express.Router()

const {
  getNewUser,
  postNewUser,
  getUsers,
  getAdminUser,
  updateAdminUser,
} = require('../controllers/index')

router.get('/', getUsers)
router.get('/:id', getAdminUser)
router.post('/:id', updateAdminUser)
router.get('/new', getNewUser)
router.post('/new', postNewUser)

module.exports = router
