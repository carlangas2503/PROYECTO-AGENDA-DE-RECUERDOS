const { Recuerdo } = require('../../../db')


async function includeMemories(req,res) {

    const recuerdos = await Recuerdo.findAll()
    const {search} = req.query;
    const resultado = []
    recuerdos.map((ele)=>{
        if(ele.Nombre.toLowerCase().includes(search.toLowerCase())){
            resultado.push(ele)
        }
    })
    res.send(resultado)

}
module.exports = includeMemories;