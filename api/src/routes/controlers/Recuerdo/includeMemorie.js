const { Recuerdo } = require('../../../db')


async function includeMemories(req,res) {

    const recuerdos = await Recuerdo.findAll()
    const {search} = req.query;
    const resultado = []
    try {
        recuerdos.map((ele)=>{
            if(ele.Nombre.toLowerCase().includes(search.toLowerCase())){
                resultado.push(ele)
            }
        })
        if(resultado.length) return res.send(resultado);
        return res.status(400).send(`No existe ningún recuerdo con el nombre ${search}`)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports = includeMemories;