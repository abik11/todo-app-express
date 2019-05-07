const expect = require('chai').expect;
const sinon = require('sinon');
const Image = require('../server/models/image');
const repo = require('../server/repository/images');

describe('images', () => {
    let img1 = { title: 'img1', url: 'http://test.com/images/img1', public_id: 'img1' };
    let img2 = { title: 'img2', url: 'http://test.com/images/img2', public_id: 'img2' };
    let expectedModels = [img1, img2];

    beforeEach(() => {
        var mockFind = {
            populate: function () {
                return Promise.resolve(expectedModels);
            }
        };

        sinon.stub(Image, 'find').returns(mockFind);
        sinon.stub(Image, 'findByIdAndDelete');
    });

    afterEach(function () {
        Image.find.restore();
        Image.findByIdAndDelete.restore();
    });

    it('should return all images', async () => {
        let images = await repo.getAllImages();
        expect(images).to.be.equal(expectedModels);
    });
});