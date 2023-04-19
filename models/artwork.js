const { mongoose } = require('../db/connection');

const artsSchema = new mongoose.Schema({
    name: String,
    location: String, 
    artist: String,
    image: String,
    review: String,
    rating: Number,
}, {timestamps: true})

// imageSchema = new mongoose.Schema({
//     name: String,
//     desc: String,
//     img:
//     {
//         data: Buffer,
//         contentType: String
//     }
// });

const Art = mongoose.model('Art', artsSchema)

// module.exports = mongoose.model('Image', imageSchema);
module.exports = Art