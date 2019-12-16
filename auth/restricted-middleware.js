const bcrypt = require('bcryptjs')
const Users = require('../model')



module.exports = function restricted(req, res, next) {
  const {username, password}  = req.headers

  if( username && password) {
    Users.findBy(username)
  .first()
  .then( user => {
    user && bcrypt.compareSync(password, user.password) 
    ? next()
    : res.status(401).json({message:'invalid credentials'})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({error:'we dun goofed somewhere'})
  })
  }
  else{ res.status(401).json({message:'resticted data'})
}}