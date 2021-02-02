const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/dreamquark', { useNewUrlParser: true, useUnifiedTopology: true})
    .catch(e => {
        console.error('Connection error', e.message)
    })

    console.log("YOOOOOO from db/index.js");

const db = mongoose.connection

module.exports = db