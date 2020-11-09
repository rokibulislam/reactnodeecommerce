const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
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

module.exports = mongoose.model('Product', productSchema )