const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const charactersSchema = new Schema({
    id: Number,
    name: String,
    status: String,
    species: String,
    gender: String,
})

module.exports =  mongoose.model("Character", charactersSchema);