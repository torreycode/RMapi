const mongoose = require("mongoose");


//connect to db

mongoose.Promise = Promise;

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/characters";
  }

mongoose.connect('mongodb://localhost/characters').then((conn) => {
console.log(`connected to mongodb on ${conn.connections[0].name} db`)
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

module.exports = mongoose;
