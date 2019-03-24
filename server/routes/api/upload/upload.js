const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.file);
    res.send(`Uploaded image: /images/${req.file.filename}`);
});

module.exports = router;