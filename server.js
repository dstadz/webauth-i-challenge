const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.post('/api/register', (req,res) => {
  const user = req.body
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
