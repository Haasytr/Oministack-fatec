const router = require('express').Router()

const productController = require('../controller/product')

router.route('/product')
    .post(productController.create)
    .get(productController.readAll)

router.route('/product/:id')
    .get(productController.readOne)
    .put(productController.update)
    .delete(productController.destroy)
    
module.exports = router