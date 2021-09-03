const flashMessages = require('../config/flash-messages')
const validator = require('../../validator')
const sanitize = require('../../sanitize')
const passport = require('../middlewares/passport-local-strategy')
const adjustUploadPath = require('../utils/adjust-upload-path')

const {
  addUser,
  addOrder,
  getOrder,
  acceptOrder,
  completeOrder,
  addProduct,
  getProduct,
  listUsers,
  listProducts,
  signInUser,
  listOrders,
  updateUser,
  updateProduct,
  updateOrder,
  getUser,
} = require('../../../use-cases/index')

const makeHandleGetDashboard = require('./handle-get-dashboard')
const makeGetSignUp = require('./handle-get-signup')
const makeGetSignout = require('./handle-get-signout')
const makePostSignup = require('./handle-post-signup')
const makePostSignin = require('./handle-post-signin')
const makeGetNewUser = require('./handle-get-new-user')
const makePostNewUser = require('./handle-create-user')
const makeGetUsers = require('./handle-get-users')
const makeGetAdminUser = require('./handle-get-user')

const makeGetUserSettings = require('./handle-get-settings')
const makeGetUserNewOrder = require('./handle-get-new-order')
const makePostUserNewOrder = require('./handle-create-order')
const makeGetUserOrders = require('./handle-get-orders')
const makeGetUserOrder = require('./handle-get-order')
const makeGetUserOrderEdit = require('./handle-get-order-edit')
const makePostUserAcceptOrder = require('./handle-accept-order')
const makePostUserCompleteOrder = require('./handle-complete-order')

const makeGetUserNewProduct = require('./handle-get-new-product')
const makePostUserNewProduct = require('./handle-create-product')
const makePutUserSettings = require('./handle-update-settings')
const makeGetUserProducts = require('./handle-get-products')
const makeGetUserProduct = require('./handle-get-product')

const makeUpdateUserProduct = require('./handle-update-product')
const makeUpdateUserOrder = require('./handle-update-order')

const makeUpdateAdminUser = require('./handle-update-user')

const handleGetDashboard = makeHandleGetDashboard({
  listUsers,
  listOrders,
  listProducts,
})

const getSignUp = makeGetSignUp()
const getSignout = makeGetSignout()
const postSignup = makePostSignup({
  addUser,
  updateUser,
  flashMessages,
  sanitize,
  validator,
})
const postSignin = makePostSignin({ signInUser, flashMessages, passport })
const handleGetUsers = makeGetUsers({ listUsers, flashMessages })
const handleGetNewUser = makeGetNewUser()
const handleCreateUser = makePostNewUser({
  addUser,
  flashMessages,
  sanitize,
  validator,
})

const handleGetUser = makeGetAdminUser({ getUser })

const handleUpdateSettings = makePutUserSettings({
  updateUser,
  flashMessages,
  sanitize,
})

const handleGetOrders = makeGetUserOrders({ listOrders })
const handleGetOrder = makeGetUserOrder({
  getOrder,
  getUser,
  getProduct,
  listProducts,
})
const handleGetOrderEdit = makeGetUserOrderEdit({ getOrder })
const handleAcceptOrder = makePostUserAcceptOrder({
  acceptOrder,
  flashMessages,
})
const handleCompleteOrder = makePostUserCompleteOrder({
  completeOrder,
  flashMessages,
})

const handleGetSettings = makeGetUserSettings({ getUser })
const handleGetNewOrder = makeGetUserNewOrder()
const handleCreateOrder = makePostUserNewOrder({
  addOrder,
  flashMessages,
  sanitize,
  adjustUploadPath,
})

const handleGetNewProduct = makeGetUserNewProduct()
const handleCreateProduct = makePostUserNewProduct({
  addProduct,
  flashMessages,
  sanitize,
  adjustUploadPath,
})
const handleGetProducts = makeGetUserProducts({ listProducts })
const handleGetProduct = makeGetUserProduct({ getProduct })

const handleUpdateProduct = makeUpdateUserProduct({
  updateProduct,
  flashMessages,
  adjustUploadPath,
  sanitize,
})

const handleUpdateOrder = makeUpdateUserOrder({
  updateOrder,
  flashMessages,
  adjustUploadPath,
})

const handleUpdateUser = makeUpdateAdminUser({
  updateUser,
  flashMessages,
})

module.exports = {
  handleGetDashboard,
  getSignUp,
  getSignout,
  postSignup,
  postSignin,
  handleGetNewUser,
  handleCreateUser,
  handleGetUsers,
  handleUpdateSettings,
  handleGetSettings,
  handleGetNewOrder,
  handleCreateOrder,
  handleGetOrders,
  handleGetOrder,
  handleGetOrderEdit,
  handleAcceptOrder,
  handleCompleteOrder,
  handleGetNewProduct,
  handleCreateProduct,
  handleGetProduct,
  handleGetProducts,
  handleUpdateProduct,
  handleUpdateOrder,
  handleGetUser,
  handleUpdateUser,
}
