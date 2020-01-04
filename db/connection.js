const mongoose = require("mongoose");

//connect to db

mongoose.Promise = Promise;

 mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, 
    () => console.log("Connected to db!")
    );







module.exports = mongoose;