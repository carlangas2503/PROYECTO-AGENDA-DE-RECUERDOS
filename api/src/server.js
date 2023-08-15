const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./routes/index')

const server = express()

server.name = 'Apiregalito'


server.use(cors({
    origin: ['http://localhost:3000','http://localhost:3001']
}))
server.use(express.json());
server.use(morgan('dev'));
server.use('/',router);
  
  
module.exports = server;