const LocalStrategy = require('passport-local');
const repo = require('@repository/users');
const { compareHashedPassword } = require('@utils/bcrypt');

module.exports = passport => {
    passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
        try{
            const user = await repo.getUserByEmail(email);
            if(!user)
                return done(null, false, { message: 'User doesn\'t exist' });

            const passwordMatch = await compareHashedPassword(password, user.password);
            if(passwordMatch)
                return done(null, user);
            else
                return done(null, false, { message: 'Password incorrect' });
        }
        catch(err){
            throw err;
        }
    }));

    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser(async (id, done) => {
        let user, error;
        try {
            user = await repo.getUserById(id);
        }
        catch(err){
            error = err;
        }
        done(error, user);
    });
};