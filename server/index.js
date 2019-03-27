const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const port = 5000;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
require('./config/mongoose');
require('./config/multer')(app);
require('./routes')(app);

app.listen(port, () => console.log(`[Server running on port: ${[port]}]`));