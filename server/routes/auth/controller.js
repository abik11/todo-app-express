const repo = require('@repository/users');

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
    const { name, email, pass1, pass2 } = req.body;
    let errors = [];

    if (!name || !email || !pass1 || !pass2)
        errors.push({ message: 'Fill all the fields' });
    if (pass1 != pass2)
        errors.push({ message: 'Passwords do not match' });

    if (errors.length > 0)
        res.render('auth/register', { errors, name, email });
    else
        res.send(req.body); //adding new user here ... soon :)
};