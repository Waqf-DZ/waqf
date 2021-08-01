const test = require('tape')

const FakeStore = require('../infrastructure/store/fake')
const hashPassword = require('../infrastructure/hash-password')
const getUniqueId = require('../infrastructure/get-unique-id')

const makeSignUpUser = require('./sign-up-user')
const makeGetUser = require('./get-user')
const makeDeleteUser = require('./delete-user')
const makeSignInUser = require('./sign-in-user')
const makeListUsers = require('./list-users')

test('sign up user', async (t) => {
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
  const fetchedUser = await getUser({ id: createdUser.getId() })
  t.equal(
    createdUser.getId(),
    fetchedUser.getId(),
    'sign up should add a user to the DB'
  )

  try {
    await signUpUser({
      username: 'john_doe',
      email: 'john@doe.com',
      password: 'password',
    })
    t.fail('do not accept two users with the same email')
  } catch {
    t.pass('do not accept two users with the same email')
  }
})

test('sign in user', async (t) => {
  const store = new FakeStore({})
  const getUser = makeGetUser({ usersDB: store })
  const signUpUser = makeSignUpUser({
    usersDB: store,
    hashPassword,
    getUniqueId,
  })
  const signInUser = makeSignInUser({ getUser, hashPassword })

  await signUpUser({
    username: 'john_doe',
    email: 'john@doe.com',
    password: 'password',
  })

  const user1 = await signInUser({
    email: 'john@doe.com',
    password: 'password',
  })
  t.ok(user1, 'sign in if both email and password are correct')

  const user2 = await signInUser({
    email: 'john@doe.co',
    password: 'password',
  })
  t.notOk(user2, 'sign in should fail if email is wrong')

  const user3 = await signInUser({
    email: 'john@doe.com',
    password: 'wrong_password',
  })
  t.notOk(user3, 'sign in should fail if password is wrong')
})

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

test('delete user', async (t) => {
  const store = new FakeStore({})
  const listUsers = makeListUsers({ usersDB: store })
  const deleteUser = makeDeleteUser({ usersDB: store })
  const signUpUser = makeSignUpUser({
    usersDB: store,
    hashPassword,
    getUniqueId,
  })

  const user = await signUpUser({
    username: 'john_doe',
    email: 'john@doe.com',
    password: 'password',
  })
  const beforeUsers = await listUsers()
  const beforeLength = beforeUsers.length
  const deletedId = await deleteUser(user.id)
  const afterUsers = await listUsers()
  t.equal(beforeLength, afterUsers.length + 1, 'delete a user by id')
  t.equal(deletedId, user.id, 'return deleted user id')
})

test('list users', async (t) => {
  const store = new FakeStore({})
  const listUsers = makeListUsers({ usersDB: store })
  const signUpUser = makeSignUpUser({
    usersDB: store,
    hashPassword,
    getUniqueId,
  })

  await signUpUser({
    username: 'john_doe',
    email: 'john@doe.com',
    password: 'password',
  })
  const users = await listUsers()
  t.equal(users.length, 1, 'list all users')
})
