const path = require('path');
const multer = require('multer');
const uuid = require('uuid/v4');

module.exports = app => {
    const storage = multer.diskStorage({
        filename: (req, file, cb) => cb(null, `${uuid()}${path.extname(file.originalname)}`),
        destination: path.join(__dirname, '../public/images')
    });

    app.use(multer({ 
        storage,
        limits: { fileSize: 0.8 * 1024 * 1024 }, //4.5 MB
        fileFilter: (req, file, cb) => {
            const fileTypes = /jpeg|jpg|png|gif/i;
            const mimeType = fileTypes.test(file.mimetype);
            const extension = fileTypes.test(path.extname(file.originalname));
            
            if(mimeType && extension)
                return cb(null, true);
            else
                cb('Error: The file should be an image');
        }
    }).single('image'));
};