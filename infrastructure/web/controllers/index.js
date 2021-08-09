const flashMessages = require('../config/flash-messages')
const validator = require('../../validator')
const sanitize = require('../../sanitize')
const passport = require('../middlewares/passport-local-strategy')

const {
  addUser,
  addOrder,
  getOrder,
  addProduct,
  getProduct,
  listUsers,
  listProducts,
  signInUser,
  listOrders,
  updateUser,
  updateProduct,
  updateOrder,
} = require('../../../use-cases/index')

const makeGetAdminDashboard = require('./get-admin-dashboard')
const makeGetUserDashboard = require('./get-user-dashboard')
const makeGetSignUp = require('./get-signup')
const makeGetSignout = require('./get-signout')
const makePostSignup = require('./post-signup')
const makePostSignin = require('./post-signin')
const makeGetNewUser = require('./get-new-user')
const makePostNewUser = require('./post-new-user')
const makeGetUsers = require('./get-users')

const makeGetUserSettings = require('./get-user-settings')
const makeGetUserNewOrder = require('./get-user-new-order')
const makePostUserNewOrder = require('./post-user-new-order')
const makeGetAdminOrders = require('./get-admin-orders')
const makeGetAdminOrder = require('./get-admin-order')
const makeGetUserOrders = require('./get-user-orders')
const makeGetUserOrder = require('./get-user-order')

const makeGetUserNewProduct = require('./get-user-new-product')
const makePostUserNewProduct = require('./post-user-new-product')
const makeGetAdminProducts = require('./get-admin-products')
const makePutUserSettings = require('./put-user-settings')
const makeGetUserProducts = require('./get-user-products')
const makeGetUserProduct = require('./get-user-product')

const makeUpdateUserProduct = require('./update-user-product')
const makeUpdateUserOrder = require('./update-user-order')

const makeUpdateAdminOrder = require('./update-admin-order')

const getUserDashboard = makeGetUserDashboard({ listProducts, listOrders })
const getAdminDashboard = makeGetAdminDashboard({
  listUsers,
  listOrders,
  listProducts,
})

const getSignUp = makeGetSignUp()
const getSignout = makeGetSignout()
const postSignup = makePostSignup({
  addUser,
  flashMessages,
  sanitize,
  validator,
})
const postSignin = makePostSignin({ signInUser, flashMessages, passport })
const getUsers = makeGetUsers({ listUsers })
const getNewUser = makeGetNewUser()
const postNewUser = makePostNewUser({
  addUser,
  flashMessages,
  sanitize,
  validator,
})

const putUserSettings = makePutUserSettings({
  updateUser,
  flashMessages,
  sanitize,
})
const getAdminOrders = makeGetAdminOrders({ listOrders })
const getAdminOrder = makeGetAdminOrder({ listOrders })
const getUserOrders = makeGetUserOrders({ listOrders })
const getUserOrder = makeGetUserOrder({ getOrder })

const getUserSettings = makeGetUserSettings()
const getUserNewOrder = makeGetUserNewOrder()
const postUserNewOrder = makePostUserNewOrder({
  addOrder,
  flashMessages,
  sanitize,
})

const getUserNewProduct = makeGetUserNewProduct()
const postUserNewProduct = makePostUserNewProduct({
  addProduct,
  flashMessages,
  sanitize,
})
const getAdminProducts = makeGetAdminProducts({ listProducts })
const getUserProducts = makeGetUserProducts({ listProducts })
const getUserProduct = makeGetUserProduct({ getProduct })

const updateUserProduct = makeUpdateUserProduct({
  updateProduct,
  flashMessages,
})

const updateUserOrder = makeUpdateUserOrder({
  updateOrder,
  flashMessages,
})

const updateAdminOrder = makeUpdateAdminOrder({ updateOrder, flashMessages })

module.exports = {
  getAdminDashboard,
  getUserDashboard,
  getSignUp,
  getSignout,
  postSignup,
  postSignin,
  getNewUser,
  postNewUser,
  getUsers,
  putUserSettings,
  getUserSettings,
  getUserNewOrder,
  postUserNewOrder,
  getAdminOrders,
  getUserOrders,
  getUserOrder,
  getUserNewProduct,
  postUserNewProduct,
  getAdminProducts,
  getUserProduct,
  getUserProducts,
  updateUserProduct,
  updateUserOrder,
  updateAdminOrder,
  getUserOrder,
  getAdminOrder,
}
