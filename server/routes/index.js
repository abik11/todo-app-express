module.exports = app => {
    app.use('/upload', require('./upload/routes'));
    app.use('/api/upload', require('./api/upload/routes'));
    app.use('/api/users', require('./api/users/routes'));
};