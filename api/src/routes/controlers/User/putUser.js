const { Usuario } = require('../../../db')

const putUser = async(req,res)=>{
    const { ID } = req.params
    const {Nombre, Apellido, Correo, Apodo, Contraseña, FotoPerfil} = req.body;
    if(Nombre || Apellido || Correo || Apodo || Contraseña || FotoPerfil){
        return res.send('hola')
    }
    return res.status(400).send('No hay nada que editar')
}

module.exports = putUser;
// ID
// Nombre
// Apellido
// Correo
// Apodo
// Contraseña
// FotoPerfil