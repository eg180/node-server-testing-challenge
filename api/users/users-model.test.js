const Users = require('./users-model.js')
const db = require('../../data/dbConfig')

const Herp = { name: 'Herp', age:  10}
const Derp = { name: 'Derp', age: 20}
const Derpina = { name: 'Derpina', age: 13}

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db('users').truncate()
})
afterAll(async () => {
  await db.destroy()
})

describe('Users model', () => {
  it('Users.getAll returns array of 0', async () => {
    const result = await Users.getAll()
    expect(result).toHaveLength(0)
  })
  it('Users.getAll returns hobbits', async () => {
    await db('users').insert(Herp)
    const result = await Users.getAll()
    expect(result).toHaveLength(1)
    expect(result[0]).toHaveProperty('id')
    expect(result[0]).toHaveProperty('name', 'Herp')
    expect(result[0]).toMatchObject(Herp)
  })
})
