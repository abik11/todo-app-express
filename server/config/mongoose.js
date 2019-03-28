const mongoose = require('mongoose');
require('../models');

mongoose
    .connect(process.env.MONGO, { useNewUrlParser: true })
    .then(db => console.log('[MongoDB connected]'))
    .catch(error => console.error(error)); //here put next(error)