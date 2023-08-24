const { Usuario } = require('../../../db')

const postUser = async(req,res)=>{
    try {
        const {Nombre,Apellido,Correo,Apodo,Contraseña,FotoPerfil} = req.body
        let isAdmin = false
        if(Correo === 'carlos.valencias2503@gmail.com' || Correo === 'MariiCorrea101099@gmail.com') isAdmin = true
        if(Nombre && Apellido && Correo && Apodo && Contraseña && FotoPerfil){
            const newUser = await Usuario.create(
                {
                    Nombre,
                    Apellido,
                    Correo,
                    Apodo,
                    Contraseña,
                    FotoPerfil,
                    isAdmin
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