const FakeStore = require('../infrastructure/store/fake')

function getUniqueId() {
  return parseInt(Math.random() * 10 ** 14)
}

function hashPassword(password) {
  return password
}

const store = new FakeStore({
  terms: [],
  translations: [],
})

const makeSignUpUser = require('./sign-up-user')
const makeSignInUser = require('./sign-in-user')
const makeGetUser = require('./get-user')

const getUser = makeGetUser({ usersDB: store })
const signUpUser = makeSignUpUser({ usersDB: store, hashPassword, getUniqueId })
const signInUser = makeSignInUser({ getUser, hashPassword })

module.exports = Object.freeze({
  getUser,
  signUpUser,
  signInUser
})
