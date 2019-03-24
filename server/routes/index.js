module.exports = app => {
    app.use('/upload', require('./api/upload/upload'));
    app.use('/api/users', require('./api/users/routes'));
};