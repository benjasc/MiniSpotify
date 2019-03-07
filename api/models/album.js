'user strict'

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AlbumSchema = Schema({
    title: String,
    year: String,
    image: String,
    artist: { type: Schema.ObjectId, ref: 'Artist' }
});

module.exports = Schema('Album', AlbumSchema);