const { Usuario } = require('../../../db')

const verific = async(req,res)=>{
    try {
        const {Ingre,Contraseña} = req.body
        const usuarioCorreo = await Usuario.findOne({where:{Correo:Ingre}})
        const usuarioApodo = await Usuario.findOne({where:{Apodo:Ingre}})
        if(usuarioApodo){
            if(usuarioApodo.Contraseña === Contraseña) return res.send(usuarioApodo) 
            return res.status(400).send('contraseña incorrecta')
        } 
        if(usuarioCorreo){
            if(usuarioCorreo.Contraseña === Contraseña) return res.send(usuarioCorreo)
            return res.status(400).send('contraseña incorrecta')
        } 
        else return res.status(404).send('Usuario no encontrado')
    } catch (error) {
        return res.status(404).send(error.message)
    }
}

module.exports = verific