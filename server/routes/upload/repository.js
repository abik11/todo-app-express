const { model } = require('mongoose');
const Image = model('image');

const getAllImages = async () => 
    await Image.find();

const addImage = async image => {
    const { title, description, url, public_id } = image;

    const newImage = await Image({
        title, description, url, public_id
    });

    return await newImage.save();
};

module.exports = {
    getAllImages,
    addImage
};