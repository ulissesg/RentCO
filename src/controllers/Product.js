const express = require('express')

const Product = require('../models/Product');

const router = express.Router();

router.post('/create', async (req, res) => {
    try{
        const product = await Product.create(req.body);

        return res.send({ product, message: 'Product created successfully' });
    }catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.get('/list', async (req, res) => {
    try{
        const products = await Product.find({});
        return res.send({ products });
    }catch (err) {
        return res.status(400).send({ error: 'something went worng when listing' });
    }
});

router.get('/delete/:id', async (req, res) => {
    try {
        if (! await Product.findById(req.params.id)){
            return res.status(400).send({ error: 'Product not found' });
        }else{
            const product = await Product.findByIdAndDelete(req.params.id);
            return res.send({ product, message: 'Product deleted sucessfully' });
        }
    } catch (error) {
        return res.status(400).send({ error: 'something went wrong on deleting' });
    }
});

router.post('/update/:id', async (req, res) => {
    try {
        if (! await Product.findById(req.params.id)){
            return res.status(400).send({ error: 'Product not found' });
        }else{
            options = { returnDocument: 'after' };
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, options);
            return res.send({ product, message: 'product updated successfully' });
        }
    } catch (error) {
        return res.status(400).send({ error: 'something went wrong when updating' });
    }
});

module.exports = app => app.use('/product', router);