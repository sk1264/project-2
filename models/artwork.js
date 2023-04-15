const { mongoose } = require('../db/connection');

const artsSchema = new mongoose.Schema({
    name: String,
    location: String, 
    artist: String,
    image: String,
    review: String,
    rating: Number
}, {timestamps: true})

const Art = mongoose.model('Art', artsSchema)

module.exports = Art