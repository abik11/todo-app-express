const { model } = require('mongoose');
const Image = model('image');

const addImage = async image => {
    const { title, description, name, imageUrl, publicId } = image;

    const newImage = await Image({
        title, description, name, imageUrl, publicId
    });

    return await newImage.save();
};

module.exports = {
    addImage
};