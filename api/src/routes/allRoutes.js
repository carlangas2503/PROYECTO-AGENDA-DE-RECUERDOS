const express = require('express')
const getAllUsers = require('./controlers/User/getAll')
const getByName = require('./controlers/User/getByName')
const postUser = require('./controlers/User/postUser')
const verific = require('./controlers/User/verific')
const putUser = require('./controlers/User/putUser')
const allMemories = require('./controlers/Recuerdo/allMemories')
const postMemories = require('./controlers/Recuerdo/postMemories')
const includeMemories = require('./controlers/Recuerdo/includeMemorie')

const server = express.Router()

//user routes
server.get('/allUsers',getAllUsers)
server.get('/nameUser',getByName)
server.post('/crearUsuario',postUser)
server.get('/verificacion',verific)
server.put('/modiUser/:ID',putUser)

//memories routes
server.get('/allMemories',allMemories)
server.post('/crearRecuerdo',postMemories)
server.get('/memories',includeMemories)

module.exports=server