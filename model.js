const db = require('./data/db-config')

module.exports = {
  add,
  findById,
  getAll
}

function findById(id) {
  return db('users')
  .where({ id })
  .first()
}

function add(user) {
  return db('users')
  .insert(user,'id')
  .then(ids => {
    const [id] = ids
    return findById(id)
  })
}

function getAll() {
  return db('users')
}