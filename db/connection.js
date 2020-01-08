const mongoose = require("mongoose");


//connect to db

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/characters').then((conn) => {
console.log(`connected to mongodb on ${conn.connections[0].name} db`)
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

module.exports = mongoose;
