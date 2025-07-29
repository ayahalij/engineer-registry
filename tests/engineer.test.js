const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app')
const Engineer = require('../models/engineer')

let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoServer.getUri())
})

afterAll(async () => {
  await mongoose.disconnect()
  await mongoServer.stop()
})

beforeEach(async () => {
  await Engineer.create({ name: 'Alice', specialty: 'Mechanical', yearsExperience: 3, available: true })
})

afterEach(async () => {
  await Engineer.deleteMany()
})

test('GET /engineers returns all engineers', async () => {
  const res = await request(app).get('/engineers')
  expect(res.statusCode).toBe(200)
})

test('POST /engineers creates new engineer', async () => {
  const res = await request(app).post('/engineers').send({
    name: 'Bob',
    specialty: 'Electrical',
    yearsExperience: 5,
    available: false
  })
  expect(res.statusCode).toBe(302)
})
