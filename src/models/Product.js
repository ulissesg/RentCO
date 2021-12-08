const mongoose = require('../database');

const ProductSchema = new mongoose.Schema({
    code: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    type: {
        type: Number,
        require: true,
    },
    price: {
        type: Number,
        required: true,
    }, 
    createdAt: {
        type:Date,
        default: Date.now,
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;