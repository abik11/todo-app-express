module.exports = (req, res, next) => {
    if(req.isAuthenticated())
        return next();

    req.flash('error', 'You have to be logged in to see this page');
    res.redirect('/login');
};