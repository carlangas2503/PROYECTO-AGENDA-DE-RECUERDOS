require('dotenv').config()
const {Sequelize} = require('sequelize')
const RecuerdoModel = require('./models/Recuerdos')
const UsuarioModel = require('./models/Usuarios')
const{
    DB_PORT,DB_USER,DB_PASS,DB_HOST,DB_NAME
} = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,{
    logging: false,
    native: false, 
})

RecuerdoModel(sequelize)
UsuarioModel(sequelize)

const {Recuerdo,Usuario} = sequelize.models;

Usuario.hasMany(Recuerdo);
Recuerdo.belongsTo(Usuario);



module.exports = {
    ...sequelize.models,
    sequelize
}