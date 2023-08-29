const { Usuario } = require('../../../db')

const postUser = async(req,res)=>{
    try {
        const {Nombre,Apellido,Correo,Apodo,Contraseña,FotoPerfil} = req.body
        let isAdmin = false
        if(Correo === 'carlos.valencias2503@gmail.com' || Correo === 'MariiaCorrea101099@gmail.com') isAdmin = true
        if(Nombre && Apellido && Correo && Apodo && Contraseña){
            const newUser = await Usuario.create(
                {
                    Nombre,
                    Apellido,
                    Correo,
                    Apodo,
                    Contraseña,
                    FotoPerfil:FotoPerfil.length?FotoPerfil:'https://scdpastoriza.com/wp-content/uploads/2017/07/jugador-sin-foto-perfil.png',
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