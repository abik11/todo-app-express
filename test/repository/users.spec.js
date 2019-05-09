const expect = require('chai').expect;
const sinon = require('sinon');
const User = require('../../server/models/user');
const Role = require('../../server/models/role');
const repo = require('../../server/repository/users');

describe('users', () => {
    let allUsers = [];

    beforeEach(() => {
        for (let i = 0; i < 100; i++)
            allUsers.push({
                id: i + 1,
                name: `user${i + 1}`,
                email: `user${i + 1}@test.com`
            });

        var mockFind = {
            populate: () => Promise.resolve(allUsers),
        };

        sinon.stub(User, 'find').returns(mockFind);
        sinon.stub(User, 'findOne').callsFake(conditions => {
            let user;
            if (conditions._id != null)
                user = allUsers.find(u => u.id == conditions._id);
            else if (conditions.email != null)
                user = allUsers.find(u => u.email == conditions.email);
            return {
                populate: () => Promise.resolve(user)
            };
        });
        sinon.stub(User, 'deleteOne').callsFake(conditions => {
            const deleted = allUsers.splice(conditions._id - 1, 1);
            return Promise.resolve(deleted[0]);
        });
        sinon.stub(User.prototype, 'save').callsFake(() => {
            allUsers.push({});
            return Promise.resolve({});
        });
        
        sinon.stub(Role, 'findOne').returns({ name: 'reader' });
    });

    afterEach(() => {
        User.find.restore();
        User.findOne.restore();
        User.deleteOne.restore();
        User.prototype.save.restore();
        Role.findOne.restore();
        allUsers = [];
    });

    it('getAllUsers should return all users', async () => {
        let users = await repo.getAllUsers();
        expect(users).to.be.equal(allUsers);
    });

    it('getUserById should return user of given id', async () => {
        let user = await repo.getUserById(10);
        expect(user.id).to.be.equal(10);
    });

    it('getUserByEmail should return user of given email', async () => {
        let user = await repo.getUserByEmail('user10@test.com');
        expect(user.id).to.be.equal(10);
    });

    it('deleteUser should return deleted user', async () => {
        let userToBeDeleted = allUsers[0];
        let user = await repo.deleteUser(1);
        expect(user).to.be.equal(userToBeDeleted);
    });

    it('deleteUser should delete user', async () => {
        await repo.deleteUser(1);
        expect(allUsers.length).to.be.equal(99);
    });

    it('deleteUser should not delete not existing user', async () => {
        await repo.deleteUser(101);
        expect(allUsers.length).to.be.equal(100);
    });

    it('addUser should add new user', async () => {
        await repo.addUser({
            name: 'Jan Kowalski', 
            email: 'j.k@test.com', 
            password: 'secretpass'
        });
        expect(allUsers.length).to.be.equal(101);
    });
});