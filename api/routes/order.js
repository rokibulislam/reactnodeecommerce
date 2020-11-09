const express = require('express')
const router = express.Router();

const { getOrderById, getOrders, createOrder, updateOrderStatus, getStatusValues  } = require('../controllers/order')

router.get('/orders', getOrders)
router.get('/order/:id', getOrderById)
router.post('/order', createOrder)
router.put('/order/:id', updateOrderStatus)
router.get('/order/status/:id', getStatusValues)

module.exports = router;