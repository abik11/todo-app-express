const repo = require('./repository');
const fs = require('fs-extra');
const cloudinary = require('cloudinary').v2;

module.exports.homeView = (req, res) => {
    res.render('upload/images');
};

module.exports.addView = (req, res) => {
    res.render('upload/upload');
};

module.exports.create = async (req, res) => {
    //req.file added by multer
    const imagePath = req.file.path;
    const { title, description } = req.body;

    try {
        const { url, public_id } = await cloudinary.uploader.upload(imagePath);
        const newImage = await repo.addImage({ title, description, url, public_id });
        await fs.unlink(imagePath);
        res.redirect(url);
    }
    catch(err) {
        next(err);
    }
};