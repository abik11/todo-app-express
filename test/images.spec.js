const expect = require('chai').expect;
const sinon = require('sinon');
const Image = require('../server/models/image');
const repo = require('../server/repository/images');

describe('images', () => {
    let allImages = [];

    beforeEach(() => {
        for (let i = 0; i < 100; i++)
            allImages.push({
                id: i + 1,
                title: `img${i + 1}`,
                url: `http://test.com/images/img${i + 1}`,
                public_id: `img${i + 1}`
            });

        var mockFind = {
            populate: () => Promise.resolve(allImages),
            limit: count => Promise.resolve(allImages.slice(0, count))
        };

        sinon.stub(Image, 'find').returns(mockFind);
        sinon.stub(Image, 'findByIdAndDelete').callsFake(id => {
            const deleted = allImages.splice(id - 1, 1);
            return Promise.resolve(deleted[0]);
        });
    });

    afterEach(function () {
        Image.find.restore();
        Image.findByIdAndDelete.restore();
        allImages = [];
    });

    it('getAllImages should return all images', async () => {
        let images = await repo.getAllImages();
        expect(images).to.be.equal(allImages);
    });

    it('getTopImages should return 10 images only', async () => {
        let images = await repo.getTopImages(10);
        expect(images.length).to.be.equal(10);
    });

    it('deleteImage should return deleted image', async () => {
        let imageToBeDeleted = allImages[0];
        let image = await repo.deleteImage(1);
        expect(image).to.be.equal(imageToBeDeleted);
    });

    it('deleteImage should delete image', async () => {
        await repo.deleteImage(1);
        expect(allImages.length).to.be.equal(99);
    });
});