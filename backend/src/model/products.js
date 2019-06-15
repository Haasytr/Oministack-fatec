const mongoose = require('../config/database')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,   
    },
    description: {
        type: String,
    }, 
         
}, {
    timeStamp: true,
})

module.exports = mongoose.model('Product', ProductSchema)