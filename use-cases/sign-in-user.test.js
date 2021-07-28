const test = require('tape')

const makeSignInUser = require('./sign-in-user')
const makeGetUser = require('./get-user')
const makeSignUpUser = require('./sign-up-user')
const FakeStore = require('../infrastructure/store/fake')
const hashPassword = require('../infrastructure/hash-password')
const getUniqueId = require('../infrastructure/get-unique-id')


test('sign in user', async(t) => {
  const store = new FakeStore({})
  const getUser = makeGetUser({ usersDB: store })
  const signUpUser = makeSignUpUser({ usersDB: store, hashPassword, getUniqueId })
  const signInUser = makeSignInUser({ getUser, hashPassword })

  await signUpUser({
    username: 'john_doe',
    email: 'john@doe.com',
    password: 'password',
  })

  const user1 = await signInUser({
    email: 'john@doe.com',
    password: 'password'
  })
  t.ok(user1, 'sign in if both email and password are correct')
  
  const user2 = await signInUser({
    email: 'john@doe.co',
    password: 'password'
  })
  t.notOk(user2, 'sign in should fail if email is wrong')
  
  const user3 = await signInUser({
    email: 'john@doe.com',
    password: 'wrong_password'
  })
  t.notOk(user3, 'sign in should fail if password is wrong')
})
