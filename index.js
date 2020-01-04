const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(bodyParser.json());





require("dotenv/config");

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


//Import Routes

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


const charactersRoute = require('./routes/characters')

app.use('/characters', charactersRoute)


app.get('/', (req,res) => {
    res.send('We are on home');
});



// Listening to the server
app.listen(3000, () => console.log("server running on 3000"));