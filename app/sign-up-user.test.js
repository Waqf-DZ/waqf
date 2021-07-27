const test = require('tape')

const FakeStore = require('../infrastructure/store/fake')
const hashPassword = require('../infrastructure/hash-password')
const getUniqueId = require('../infrastructure/get-unique-id')
const makeSignUpUser = require('./sign-up-user')
const makeGetUser = require('./get-user')

test('sign up user', async (t) => {
  const store = new FakeStore({})
  const getUser = makeGetUser({ usersDB: store })
  const signUpUser = makeSignUpUser({ usersDB: store, hashPassword, getUniqueId })

  const createdUser = await signUpUser({
    username: 'john_doe',
    email: 'john@doe.com',
    password: 'password',
  })
  const fetchedUser = await getUser({id: createdUser.id})
  t.equal(
    createdUser.id,
    fetchedUser.id,
    'sign up should add a user to the DB'
  )

  try {
    await signUpUser({
      username: 'john_doe',
      email: 'john@doe.com',
      password: 'password',
    })
    t.fail('don\'t accept two users with the same email')
  } catch {
    t.pass('don\'t accept two users with the same email')
  }

})
