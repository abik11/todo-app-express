const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();

if(process.env.NODE_ENV != 'production')
    require('dotenv').config();

app.set('port', process.env.APP_PORT || 5001);
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require('./config/mongoose');
require('./config/multer')(app);
require('./routes')(app);

app.listen(app.get('port'), 
    () => console.log(`[Server running on port: ${[app.get('port')]}]`));