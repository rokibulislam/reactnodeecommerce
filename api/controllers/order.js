
const getOrderById = (req, res, next, id) => {
    res.send('get order');
};

const getOrders = ( req, res ) => {
    res.send('get orders');
};

const createOrder = (req, res) => {

};

const updateOrderStatus = (req, res) => {

};

const getStatusValues = (req, res) => {

};

module.exports = {
    getOrderById,
    getOrders,
    createOrder,
    updateOrderStatus,
    getStatusValues
}