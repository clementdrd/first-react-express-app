const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        //J'ai modifié de string en tableau de string le nom ds ainsi que le rating en tableua de int car
        //ça ne marchait pas. A reset si il y a un pb...

        //film_name: { type: [String], required: true },
        name: { type: String, required: true },
        rating: { type: String, required: true },
        time: { type: String, required: true },
        audio: { type: String, required: true},
        //: {type: [Number], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('movies', User)