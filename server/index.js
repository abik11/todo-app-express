const express = require('express');
const path = require('path');
const logger = require('morgan');
const exphbs = require('express-handlebars');
const app = express();

if(process.env.NODE_ENV != 'production')
    require('dotenv').config();

app.set('port', process.env.APP_PORT || 5001);
app.use(logger('dev'));
app.use(require('./responses'));
require('./config/mongoose');
require('./config/multer')(app);

//api
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require('./routes')(app);

//views
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//static files
app.use(express.static(path.join(__dirname, 'public')));

//error handlers
app.use((req, res) => res.status(404).send('Wrong URL'));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`Something went wrong - ${err.message}`);
});

app.listen(app.get('port'), 
    () => console.log(`[Server running on port: ${[app.get('port')]}]`));