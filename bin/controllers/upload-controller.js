const multer = require('multer');
const { uuid } = require("uuidv4");
const permalink = (title) => {
    return title.replace(/ /g, '-').replace(/[^\w\s.]/gi, '-').toLowerCase();
};

exports.multer = multer({ 
    storage: multer.diskStorage({
        destination: 'dist/felipeluis/assets/img/uploads/',
        filename(req, file, callback) {
            const fileName = `${uuid()}-${permalink(file.originalname)}`;
            return callback(null, fileName);
        },
    }),
});

exports.sendUpload = async (req, res) => {
    const { filename, mimetype } = req.file;
    
    res.status(200).send({
        message: 'Upload realizado com sucesso',
        image_url: `/assets/img/uploads/${filename}`,
    });
};
