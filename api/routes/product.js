const express = require('express')
const router = express.Router();

const { 
    getProductById, 
    getProducts, 
    createProduct,
    updateProduct,
    removeProduct
} = require('../controllers/product')

router.get('/products', getProducts)
router.get('/product/:id', getProductById)
router.post('/product', createProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', removeProduct)

module.exports = router;