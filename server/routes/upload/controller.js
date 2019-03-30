const repo = require('./repository');
const fs = require('fs-extra');
const cloudinary = require('cloudinary').v2;

module.exports.homeView = async (req, res) => {
    try {
        const images = await repo.getAllImages();
        res.render('upload/images', { images });
    }
    catch(err){
        next(err);
    }
};

module.exports.addView = async (req, res) => {
    try {
        const images = await repo.getAllImages();
        res.render('upload/upload', { images });
    }
    catch(err){
        next(err);
    }
};

module.exports.create = async (req, res) => {
    //req.file added by multer
    const imagePath = req.file.path;
    const { title, description } = req.body;

    try {
        const { url, public_id } = await cloudinary.uploader.upload(imagePath);
        await repo.addImage({ title, description, url, public_id });
        await fs.unlink(imagePath);
        res.redirect('/add');
    }
    catch (err) {
        next(err);
    }
};