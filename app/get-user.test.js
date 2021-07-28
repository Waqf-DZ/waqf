const test = require('tape')

const FakeStore = require('../infrastructure/store/fake')
const hashPassword = require('../infrastructure/hash-password')
const getUniqueId = require('../infrastructure/get-unique-id')
const makeSignUpUser = require('./sign-up-user')
const makeGetUser = require('./get-user')

test('get user', async (t) => {
  const store = new FakeStore({})
  const getUser = makeGetUser({ usersDB: store })
  const signUpUser = makeSignUpUser({
    usersDB: store,
    hashPassword,
    getUniqueId,
  })

  const createdUser = await signUpUser({
    username: 'john_doe',
    email: 'john@doe.com',
    password: 'password',
  })
  const createdUserId = createdUser.getId()
  const user1 = await getUser({ email: 'john@doe.com' })
  t.ok(user1.getId(), 'A user can be got by email')

  const user2 = await getUser({ id: createdUserId })
  t.ok(user2.getId(), 'A user can be got by id')
})
