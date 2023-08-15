const { Usuario } = require('../../../db')

const postUser = async(req,res)=>{
    try {
        const {Nombre,Apellido,Correo,Apodo,Contraseña,FotoPerfil} = req.body
        if(Nombre && Apellido && Correo && Apodo && Contraseña && FotoPerfil){
            const newUser = await Usuario.create(
                {
                    Nombre,
                    Apellido,
                    Correo,
                    Apodo,
                    Contraseña,
                    FotoPerfil
                }
            )
            return res.status(201).send(newUser)
        }
        return res.status(401).send('No están todos los campos para crear un usuario')
    } catch (error) {
        return res.status(401).send(error.message)
    }
}
module.exports = postUser