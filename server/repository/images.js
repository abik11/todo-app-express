const { model } = require('mongoose');
const Image = model('image');

const getAllImages = async () => 
    await Image.find().populate('user');

const getTopImages = async count =>
    await Image.find().limit(count);

const addImage = async image => {
    const { title, description, url, public_id, user } = image;
    
    const newImage = await Image({
        title, description, url, public_id, user
    });

    return await newImage.save();
};

const deleteImage = async id =>
    await Image.findByIdAndDelete(id);

module.exports = {
    getAllImages,
    getTopImages,
    addImage,
    deleteImage
};