const express = require('express')
const getAllUsers = require('./controlers/User/getAll')
const getByName = require('./controlers/User/getByName')
const postUser = require('./controlers/User/postUser')
const verific = require('./controlers/User/verific')
const putUser = require('./controlers/User/putUser')

const server = express.Router()

server.get('/allUsers',getAllUsers)
server.get('/nameUser',getByName)
server.post('/crearUsuario',postUser)
server.get('/verificacion',verific)
server.put('/modiUser/:ID',putUser)

module.exports=server