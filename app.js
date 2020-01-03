const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
require("dotenv/config");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


//Import Routes

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


app.get('/', (req,res) => {
    res.send('We are on home');
});


//connect to db
 mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, 
    () => console.log("Connected to db!")
    );


// Listening to the server
app.listen(3000);