const repo = require('@repository/users');
const bcrypt = require('bcryptjs');

async function getHashedPassword(password){
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            if(err) reject(err);
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) reject(err);
                resolve(hash);
            });
        });        
    });
};

module.exports.loginView = async (req, res, next) => {
    res.render('auth/login', { message: req.flash('message') });
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
    else {
        try {
            let user = await repo.getUserByEmail(email);
            if(user) {
                errors.push({ message: 'This email is already registered' });
                res.render('auth/register', { errors, name, email });
            }
            else{
                hash = await getHashedPassword(pass1);
                user = await repo.addUser({ name, email, password: hash });
                req.flash('message', 'You can now login');
                res.redirect('/'); 
            }
        }
        catch(err){
            next(err);
        }
    }
};