'user strict'

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ArtistSchema = Schema({
    name: String,
    description: String,
    image: String
});

module.exports = Schema('Artist', ArtistSchema);