const expect = require('chai').expect;
const bcrypt = require('../../server/utils/bcrypt');

describe('bcrypt', () => {
    it('compareHashedPassword should match the correct password', async () => {
        const pass = '1234';
        const hash = await bcrypt.getHashedPassword(pass);
        const match = await bcrypt.compareHashedPassword(pass, hash);
        expect(match).to.equal(true);
    });

    it('compareHashedPassword should not match incorrect password', async () => {
        const pass = '1234';
        const hash = await bcrypt.getHashedPassword(pass);
        const match = await bcrypt.compareHashedPassword('12345', hash);
        expect(match).to.equal(false);
    });
});