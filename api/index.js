const {sequelize} = require('./src/db')
const server = require('./src/server')
require('dotenv').config()
const {
    PORT
}= process.env

server.listen(PORT, async() => {
    await sequelize.sync({force:true})
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
    
});
