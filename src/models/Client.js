const mongoose = require('../database');

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    telephone: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    clientType: {
        type: Number,
        required: true,
    }, 
    balance: {
        type:Number,
        required: false,
    }, 
    createdAt: {
        type:Date,
        default: Date.now,
    }
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;