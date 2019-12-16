const express = require('express');
const helmet = require('helmet');
const knex = require('knex')
const server = express();
const Users = require('./model')
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
  Users.add(user)
  .then(newuser => {
    res.status(201).json(newuser)
  })
  /* user = {
    username: XXX
    password: XXX
  } */
})

server.post('/api/users', (req,res) => {
  const cred  = req.body
    /* cred = {
    username: XXX
    password: XXX
  } */

  //create new session
  //send 'logged in' message & a cookie w/ userId
  //if login fails: res.status().json(message:'you shall not pass)
})

server.get('/api/users', (req,res) => {
  //if logged in: send array of all users
  //else : send message: 'you shall not pass'
})

module.exports = server;
