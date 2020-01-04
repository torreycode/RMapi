const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const charactersSchema = new Schema({
    id: Number,
    name: String,
    status: String,
    species: String,
    gender: String,
    origin: {
        name: String
    },
    created: Date
})

const Character = mongoose.model("Character", charactersSchema);

module.exports = Character;