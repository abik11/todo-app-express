module.exports = app => {
    app.use('/', require('./auth/routes'));
    app.use('/gallery', require('./gallery/routes'));
    app.use('/api/users', require('./api/users/routes'));
    app.use('/api/tasks', require('./api/tasks/routes'));
};