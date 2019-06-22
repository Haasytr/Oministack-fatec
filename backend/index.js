const express = require('express')
require('dotenv').config()
const db = require('./src/config/database')
const route = require('./src/routes')
const app = express()
const cors = require('cors')



app.listen(process.env.PORT || 3001, (error) => {
    if(error){
        console.log('Error')
    }else{
        console.log(`Servidor está rodando na porta localhost:${process.env.PORT}`)
    }
}) 

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/api', route)