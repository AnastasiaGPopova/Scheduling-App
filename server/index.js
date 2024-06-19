const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(bodyParser.json());


// Connect to MongoDB
mongoose.set('strictQuery', false);
const connect = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://AniUSER:AniTest@clustermngapp.6xytfwx.mongodb.net/",{}
    );
    console.log(`Connected to MongoDB`)
  } catch (error) {
    throw error;
  }
};

app.use(routes)

//-----Adding middleware-------
//Always! it returns a middleware which parse the url encoded body, this will be used for every request

app.listen(3030, () => {
  connect()
  console.log(`The server is running on Port 3030...`);
});




