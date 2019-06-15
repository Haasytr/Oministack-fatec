const db = require('mongoose')


db.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
})

db.connection.once('open', () => {
    console.log('conectado com sucesso ao banco de dados')
})

module.exports = db

