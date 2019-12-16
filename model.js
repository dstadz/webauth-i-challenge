const db = require('./data/db-config')

module.exports = {
  add,
  findBy,
  getAll
}

function findBy(username) {
  return db('users')
  .where('username', username)
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