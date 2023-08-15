const { Usuario } = require('../../../db')

const getAllUsers = async(req,res)=>{
    const users = await Usuario.findAll()
    res.send(users)
}
module.exports = getAllUsers