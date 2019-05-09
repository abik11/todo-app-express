const bcrypt = require('bcryptjs');

async function compareHashedPassword(givenPassword, dbPassword) {
    try {
        return await bcrypt.compare(givenPassword, dbPassword);
    }
    catch(err){
        throw err;
    }
}

async function getHashedPassword(password){
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }
    catch(err) {
        throw err;
    }
};

module.exports = {
    compareHashedPassword,
    getHashedPassword
};