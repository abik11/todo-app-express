const repo = require('@repository/images');
const { getUserById } = require('@repository/users');
const fs = require('fs-extra');
const cloudinary = require('cloudinary').v2;

module.exports.imagesView = async (req, res, next) => {
    try {
        const images = await repo.getTopImages(10);
        res.render('gallery/images', { images });
    }
    catch(err){
        next(err);
    }
};

module.exports.uploadView = async (req, res, next) => {
    try {
        const images = await repo.getAllImages();
        res.render('gallery/upload', { images });
    }
    catch(err){
        next(err);
    }
};

module.exports.create = async (req, res, next) => {
    //req.file added by multer
    const imagePath = req.file.path;
    const { title, description } = req.body;

    try {
        const user = await getUserById(res.locals.user.id);
        if(user) {
            const { url, public_id } = await cloudinary.uploader.upload(imagePath);
            await repo.addImage({ title, description, url, public_id, user });
            await fs.unlink(imagePath);
            res.redirect('/gallery/add');
        } 
        else
            res.serverError(`No user with id:${res.locals.user.id} found`);
    }
    catch (err) {
        next(err);
    }
};

module.exports.delete = async (req, res, next) => {
    const { id } = req.params;
    try {
        const image = await repo.deleteImage(id);
        if(image){
            await cloudinary.uploader.destroy(image.public_id);
            res.redirect('/gallery/add');
        }
        else
            res.badRequest({ message: 'No such image' });
    }
    catch(err){
        next(err);
    }
};