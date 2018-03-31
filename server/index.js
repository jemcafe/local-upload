require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const massive = require('massive');
const multer = require('multer');
// const AWS = require('aws-sdk');


const app = express();


app.use(bodyParser.json());
// massive(process.env.CONNECTION_STRING)
//     .then(db => app.set('db', db))
//     .catch(err => console.log(err));

// Storage
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

// Init upload
const upload = multer({
    storage: storage
}).single('image');

// Endpoint
app.post('/upload', (req, res) => {
    res.send('test');
});


const port = process.env.SERVER_PORT || 3040;
app.listen(port, () => console.log(`Listening on port: ${port}`));