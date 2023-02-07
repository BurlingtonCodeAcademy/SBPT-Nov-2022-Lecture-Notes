require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
const userController = require('./controllers/user.controller.js');
const movieController = require('./controllers/movie.controller');
// const validateSession = require('./middleware/validate-session'); //* used for validation for an entire controller

const mongoose = require('mongoose'); // used from node_modules
const DBURL = process.env.DBURL; // connection variable from .env

mongoose.connect(`${DBURL}/moviedb`); // connection middleware. Est. route and defining our Collection we are targeting.

const db = mongoose.connection; // event listener to check if connected.
//* Doesn't display until there is a document within the collection.

db.once("open", () => console.log(`Connected: ${DBURL}`)); // event listener to check connection.

app.use(express.json()); // added to allow us to accept JSON data from the body of our client.

app.use('/user', userController);
// app.use(validateSession); //* requires validation for any controller under this app.use()
app.use('/movie', movieController);


app.listen(PORT, () => console.log(`Movie Server Running on Port: ${PORT}`));