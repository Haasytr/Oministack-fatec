const Product = require('../../model/products')

const create = async (req, res) => {
    try{
        const product = await Product.create(req.body)

        res.send({ product, success: true })
    }catch (error){
        res.status(400).send({ error: error.message, success: false })
    }
}

const readAll = async (req, res) => {
    try {
        const products = await Product.find()

        res.send({ products, success: true })
    } catch(error) {
        res.status(400).send({ message: error.message, success: false })
    }
}
const readOne = async (req, res) => {
    try{
        const {id} = req.params
        const product = await Product.findOne({_id:id})

        res.send({product, success: true})
    }catch(error) {
        res.status(400).send({ message: error.message, success: false })
    }
}

const update = async (req, res) => {
    try{
        const {id} = req.params
        const product = await Product.findOneAndUpdate({_id:id}, req.body, {new: true})

        res.send({product, success: true})
    }catch(error) {
        res.status(400).send({ message: error.message, success: false })
    }
}

const destroy = async (req, res) => {
    try{
        const {id} = req.params
        const product = await Product.findByIdAndRemove({_id:id})

        res.send({success: true})
    }catch(error){
        res.status(400).send({ message: error.message, success: false })
    }
}


module.exports = { create, readAll, readOne, update, destroy }