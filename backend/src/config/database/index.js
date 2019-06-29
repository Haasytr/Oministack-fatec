const db = require('mongoose')


db.connect('mongodb://localhost:27017/storeDB', {
    useNewUrlParser: true,
}),

db.connection.once('open', () => {
    console.log('conectado com sucesso ao banco de dados')
})

module.exports = db

