const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

const cartSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        }
    },
    {
        timestamps: true
    }
);

const CartItem = mongoose.model('CartSchema', productSchema )

const OrderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        }
    },
    {
        timestamps: true
    }
);

const order = mongoose.model('Order', OrderSchema )


module.exports = { Order, CartItem }