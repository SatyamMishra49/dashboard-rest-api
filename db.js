const mongoose = require('mongoose');
const dbHOST = process.env.DBHOST;
mongoose.connect(dbHOST)
    .then(() => {
        console.log('MongoDB connected... :)');
    }).catch((err) => {
        console.log("Error :(", err);
    })