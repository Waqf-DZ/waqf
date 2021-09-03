var express = require('express')
var router = express.Router()

const {
  handleGetNewUser,
  handleCreateUser,
  handleGetUsers,
  handleGetUser,
  handleUpdateUser,
} = require('../controllers/index')

router.get('/', handleGetUsers)
router.get('/:id', handleGetUser)
router.post('/:id', handleUpdateUser)
router.get('/new', handleGetNewUser)
router.post('/new', handleCreateUser)

module.exports = router
