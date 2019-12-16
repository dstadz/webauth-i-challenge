const express = require('express');
const helmet = require('helmet');
const knex = require('knex')
const server = express();
const Users = require('./model')
const bcrypt = require('bcryptjs')
const restricted = require('./auth/restricted-middleware')

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/users.db3'
  },
  useNullAsDefault: true
});

server.use(helmet());
server.use(express.json());

server.get('/', (req,res) =>{
  res.status(200).json({message:'were live'})
})

server.post('/api/register', (req,res) => {
  const user = req.body
  const hash = bcrypt.hashSync(user.password, 6)
  user.password = hash
  Users.add(user)
  .then(newuser => {
    res.status(201).json(newuser)
  })
  /* user = {
    username: XXX
    password: XXX
  } */
})

server.post('/api/login', (req,res) => {
  const {username, password}  = req.body
  Users.findBy(username)
  .first()
  .then( user => {
    user && bcrypt.compareSync(password, user.password) 
    ? res.status(200).json({message:"Welcome, friend"})
    : res.status(401).json({message:'You shall not pass!'})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({error:'we dun goofed somewhere'})
  })
    /* cred = {
    username: XXX
    password: XXX
  } */

  //create new session
  //send 'logged in' message & a cookie w/ userId
  //if login fails: res.status().json(message:'you shall not pass)
})

server.get('/api/users', restricted, (req,res) => {
  Users.getAll()
  .then(users => { res.status(200).json(users)})
  //if logged in: send array of all users
  //else : send message: 'you shall not pass'
})

module.exports = server;
