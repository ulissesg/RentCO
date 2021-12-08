const mongoose = require('../database');

const RentSchema = new mongoose.Schema({
    clientId: {
        type: String,
        require: true,
    },
    productId: {
        type: String,
        require: true,
    },
    deliveryDate: {
        type: Date,
        require: true,
    },
    pickUpDate: {
        type: Date,
        required: true,
    },
    paymentDate: {
        type:Date,
        required:false,
    },
    price: {
        type: Number,
        require: true,
    }, 
    createdAt: {
        type:Date,
        default: Date.now,
    }
});

const Rent = mongoose.model('Rent', RentSchema);

module.exports = Rent;