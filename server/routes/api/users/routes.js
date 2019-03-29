const express = require('express');
const repository = require('./repository');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.status(200).json(await repository.getAllUsers());
    }
    catch(err){
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        res.status(200).json(await repository.getUserById(req.params.id));
    }
    catch(err){
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const user = req.body;
        if(user.name && user.name != '')
            res.status(201).json(await repository.addUser(req.body));
        else
            res.status(400).json({ error: 'Bad Request', message: 'No name given' });
    }
    catch (err) {
        next(err);
    }
});

module.exports = router;