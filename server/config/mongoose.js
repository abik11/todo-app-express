const mongoose = require( "mongoose" );
require('../models/user');
//require('../models'); //<- this is how it should be!

mongoose
    .connect(process.env.MONGO, { useNewUrlParser: true })
    .then(db => console.log('[MongoDB connected]'))
    .catch(error => console.error(error)); //here put next(error)