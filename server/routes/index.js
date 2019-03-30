module.exports = app => {
    app.use('/', require('./upload/routes'));
    app.use('/api/users', require('./api/users/routes'));
};