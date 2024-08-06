const mongoose = require('mongoose');
require('dotenv').config();
const db = process.env.db;
mongoose.connect(db).then(()=> {
    console.log('CONNECTION TO DATABASE ESTALISHED SUCCESSFULY');
})
.catch((error)=> {
    console.group('ERROR CONNECTING TO DATABASE: ' + error.message);
}) 