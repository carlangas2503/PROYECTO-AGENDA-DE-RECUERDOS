const {Recuerdo} = require('../../../db')

async function allMemories(req,res) {
    const memories = await Recuerdo.findAll()
    res.send(memories)
}

module.exports= allMemories