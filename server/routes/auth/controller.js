module.exports.loginView = async (req, res, next) => {
    res.render('auth/login');
};

module.exports.registerView = async (req, res, next) => {
    res.render('auth/register');
};