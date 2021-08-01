const test = require('tape')

const FakeStore = require('../infrastructure/store/fake')
const hashPassword = require('../infrastructure/hash-password')
const getUniqueId = require('../infrastructure/get-unique-id')
const makeSignUpUser = require('./sign-up-user')
const makeAddOrder = require('./add-order')

test('create new order', async (t) => {
  const store = new FakeStore({})
  const addOrder = makeAddOrder({ ordersDB: store })
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
  const createdOrder = await addOrder({
    patientName: 'Patient Name',
    patientAge: 25,
    oxygenRatio: 79,
    hasChronicDesease: true,
    isCovid: true,
    prescriptionUrl: 'https://prescription.url/id',
    ownerId: createdUser.getId(),
  })
  t.ok(createdOrder, 'returns newly created order')
})
