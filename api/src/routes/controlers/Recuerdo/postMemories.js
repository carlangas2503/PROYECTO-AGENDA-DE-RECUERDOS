const { Recuerdo } = require('../../../db')

async function postMemories(req,res) {
    const {Nombre,Fecha,Lugar,Descripcion,Foto,UsuarioID} = req.body
    try {
        if(Nombre && Fecha && Lugar && Descripcion && Foto){
            const newMemorie = await Recuerdo.create(
                {
                    Nombre,
                    Fecha,
                    Lugar,
                    Descripcion,
                    Foto,
                    UsuarioID
                }
            )
            return res.status(201).send(newMemorie)
        }
        return res.status(401).send('Faltan datos')
    } catch (error) {

        return res.status(401).send(error.message)
    }

}
// Nombre
// Fecha
// Lugar
// Descripcion
// CreadaPor
module.exports=postMemories