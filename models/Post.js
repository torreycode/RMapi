const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Posts', PostSchema);