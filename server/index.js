require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');  // A core node module (install uneccessary) for working with file and directory paths

const app = express();

app.use(bodyParser.json());

// Storage
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb){
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);  // The path method gets the file type from the original name
    }
});

// Init upload
const upload = multer({ 
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function(req, file, cb){
        checkFileType(file, cb)
    }
}).single('image');  // use .array() for multiple files or .fields() for mixed files

// Check file type
function checkFileType (file, cb) {
    // Allowed extensions
    const fileTypes = /jpeg|jpg|png|gif/;
    // Check extension ( some extensions may be capitalized )
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    // Check mimetype
    const mimetype= fileTypes.test(file.mimetype);

    return extname && mimetype ? cb(null, true) : cb('Error: Images only');
}

// Endpoint
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(412).json({ msg: err });
        } else {
            if (req.file == undefined) {  // no file submitted
                res.status(412).json({ msg: 'Error: no file selected' });
            } else {
                res.status(200).json({ 
                    msg: 'File uploaded',
                    file: `uploads/${req.file.filename}`
                });
            }
        }
    })
});


const port = process.env.SERVER_PORT || 3040;
app.listen(port, () => console.log(`Listening on port: ${port}`));