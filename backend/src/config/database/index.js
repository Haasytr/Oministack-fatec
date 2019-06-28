const db = require('mongoose')


db.connect('mongodb+srv://Haastyr:jahlive8@@cluster0-7cddf.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})
db.connection.once('open', () => {
    console.log('conectado com sucesso ao banco de dados')
})

module.exports = db

