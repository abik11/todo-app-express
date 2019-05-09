require('module-alias/register');
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const exphbs = require('express-handlebars');
const path = require('path');
const uuid = require('uuid/v4');
const logger = require('morgan');
const app = express();

if (process.env.NODE_ENV != 'production')
    require('dotenv').config();

app.set('port', process.env.PORT || 5001);
app.use(logger('dev'));
app.use(require('./utils/responses'));
require('./config/mongoose');
require('./config/passport')(passport);
require('./config/multer')(app);

//cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

//session
app.use(session({
    secret: uuid(),
    resave: true,
    saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    if (req.user)
        res.locals.user = {
            id: req.user._id,
            name: req.user.name,
            email: req.user.email
        };
    next();
});

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
    res.serverError(err.message);
});

app.listen(app.get('port'),
    () => console.log(`[Server running on port: ${[app.get('port')]}]`));