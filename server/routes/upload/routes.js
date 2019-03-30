const express = require('express');
const router = express.Router();
const repo = require('./repository');

router.get('/', (req, res) => {
    res.render('upload/images');
});

router.get('/add', (req, res) => {
    res.render('upload/upload');
});

router.post('/add', (req, res) => {
    console.log(req.file); //req.file added by Multer
    
    const { title, description } = req.body;
    const name = req.file.filename;
    
    repo.addImage({
        title, description, name
    });

    res.redirect(`/images/${name}`);
});

module.exports = router;