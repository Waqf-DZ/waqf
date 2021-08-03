const test = require('tape')

const FakeStore = require('../infrastructure/store/fake')
const hashPassword = require('../infrastructure/hash-password')
const makeAddUser = require('./add-user')

const makeAddOrder = require('./add-order')
const makeDeleteOrder = require('./delete-order')
const makeGetOrder = require('./get-order')
const makeListOrders = require('./list-orders')

test('create new order', async (t) => {
  const store = new FakeStore({})
  const addOrder = makeAddOrder({ ordersDB: store })
  const addUser = makeAddUser({
    usersDB: store,
    hashPassword,
  })
  const createdUser = await addUser({
    username: 'john_doe',
    email: 'john@doe.com',
    password: 'password',
    phoneNumber: '123456789',
    role: 'GIVING_HELP',
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

test('get order', async (t) => {
  const store = new FakeStore({})
  const addOrder = makeAddOrder({ ordersDB: store })
  const getOrder = makeGetOrder({ ordersDB: store })
  const addUser = makeAddUser({
    usersDB: store,
    hashPassword,
  })
  const createdUser = await addUser({
    username: 'john_doe',
    email: 'john@doe.com',
    password: 'password',
    phoneNumber: '123456789',
    role: 'GIVING_HELP',
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
  const fetchedUser = await getOrder(createdOrder.id)
  t.equal(createdOrder.id, fetchedUser.id, 'get order by id')
})

test('list orders', async (t) => {
  const store = new FakeStore({})
  const addOrder = makeAddOrder({ ordersDB: store })
  const listOrders = makeListOrders({ ordersDB: store })
  const addUser = makeAddUser({
    usersDB: store,
    hashPassword,
  })
  const createdUser = await addUser({
    username: 'john_doe',
    email: 'john@doe.com',
    password: 'password',
    phoneNumber: '123456789',
    role: 'GIVING_HELP',
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
  const orders = await listOrders({ ownerId: createdOrder.ownerId })
  const allOrders = await listOrders()
  const emptyOrders = await listOrders({ ownerId: 'wrong_id' })
  t.equal(orders.length, 1, 'returns a list of orders by ownerId')
  t.equal(allOrders.length, 1, 'returns all orders if no ownerId is provided')
  t.equal(emptyOrders.length, 0, 'returns empty list when ownerId is wrong')
})

test('delete order', async (t) => {
  const store = new FakeStore({})
  const addOrder = makeAddOrder({ ordersDB: store })
  const listOrders = makeListOrders({ ordersDB: store })
  const deleteOrder = makeDeleteOrder({ ordersDB: store })
  const addUser = makeAddUser({
    usersDB: store,
    hashPassword,
  })
  const createdUser = await addUser({
    username: 'john_doe',
    email: 'john@doe.com',
    password: 'password',
    phoneNumber: '123456789',
    role: 'GIVING_HELP',
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
  const beforeOrders = await listOrders()
  const beforeLength = beforeOrders.length
  await deleteOrder(createdOrder.id)
  const afterOrders = await listOrders()
  t.equal(beforeLength, afterOrders.length + 1, 'delete an order by id')
})
