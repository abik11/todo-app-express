module.exports.loginView = async (req, res, next) => {
    res.render('auth/login');
};

module.exports.registerView = async (req, res, next) => {
    res.render('auth/register');
};

module.exports.login = async (req, res, next) => {
    res.send(req.body);
};

module.exports.register = async (req, res, next) => {
    res.send(req.body);
};