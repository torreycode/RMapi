const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");


//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))



// Middleware routes 
const postsRoute = require('./routes/posts');

app.use('/api/posts', postsRoute);


const charactersRoute = require('./routes/characters');

app.use('/api/characters', charactersRoute);



app.get('/', (req,res) => {
    res.send('We are on home');
});





app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});