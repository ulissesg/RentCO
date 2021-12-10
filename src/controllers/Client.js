const express = require('express')

const Client = require('../models/Client');

const router = express.Router();

router.post('/create', async (req, res) => {
    const { name } = req.body;

    try{
        // if (await Client.findOne({ name })){
        //     return res.status(400).send({ error: 'Client alredy exist' });
        // }
        const client = await Client.create(req.body);

        return res.send({ client, message: 'Client created successfully' });
    }catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.get('/list', async (req, res) => {
    try{
        const clients = await Client.find({});
        return res.send({ clients });
    }catch (err) {
        return res.status(400).send({ error: 'something went worng when listing' });
    }
});

router.get('/:id', async (req, res) => {
    try{
        const client = await Client.findById(req.params.id);
        return res.send({ client });
    }catch (err) {
        return res.status(400).send({ error: 'something went worng when listing' });
    }
});

router.get('/delete/:id', async (req, res) => {
    try {
        if (! await Client.findById(req.params.id)){
            return res.status(400).send({ error: 'Client not found' });
        }else{
            const client = await Client.findByIdAndDelete(req.params.id);
            return res.send({ client, message: 'client deleted sucessfully' });
        }
    } catch (error) {
        return res.status(400).send({ error: 'something went wrong on deleting' });
    }
});

router.post('/update/:id', async (req, res) => {
    try {
        if (! await Client.findById(req.params.id)){
            return res.status(400).send({ error: 'Client not found' });
        }else{
            options = { returnDocument: 'after' };
            const client = await Client.findByIdAndUpdate(req.params.id, req.body, options);
            return res.send({ client, message: 'Client updated successfully' });
        }
    } catch (error) {
        return res.status(400).send({ error: 'something went wrong when updating' });
    }
});

module.exports = app => app.use('/client', router);