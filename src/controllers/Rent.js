const express = require('express')

const Rent = require('../models/Rent');

const router = express.Router();

router.post('/create', async (req, res) => {
    try{
        const rent = await Rent.create(req.body);

        return res.send({ rent, message: 'Rent created successfully' });
    }catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.get('/list', async (req, res) => {
    try{
        const rents = await Rent.find({});
        return res.send({ rents });
    }catch (err) {
        return res.status(400).send({ error: 'something went wrong when listing' });
    }
});

router.get('/:id', async (req, res) => {
    try{
        const rent = await Rent.findById(req.params.id);
        return res.send({ rent });
    }catch (err) {
        return res.status(400).send({ error: 'something went worng when listing' });
    }
});

router.get('/delete/:id', async (req, res) => {
    try {
        if (! await Rent.findById(req.params.id)){
            return res.status(400).send({ error: 'Rent not found' });
        }else{
            const rent = await Rent.findByIdAndDelete(req.params.id);
            return res.send({ rent, message: 'Rent deleted sucessfully' });
        }
    } catch (error) {
        return res.status(400).send({ error: 'something went wrong on deleting' });
    }
});

router.post('/update/:id', async (req, res) => {
    try {
        if (! await Rent.findById(req.params.id)){
            return res.status(400).send({ error: 'Rent not found' });
        }else{
            options = { returnDocument: 'after' };
            const rent = await Rent.findByIdAndUpdate(req.params.id, req.body, options);
            return res.send({ rent, message: 'Rent updated successfully' });
        }
    } catch (error) {
        return res.status(400).send({ error: 'something went wrong when updating' });
    }
});

module.exports = app => app.use('/rent', router);