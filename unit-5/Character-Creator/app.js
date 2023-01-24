require('dotenv').config();
const express = require('express');
const app = express();
// const PORT = 5002;
const PORT = process.env.PORT;

// Controllers
const characterController = require('./controllers/characters.controller');

//Middleware
app.use(express.json());
app.use(express.urlencoded());

// Routes
app.use('/characters', characterController);

app.listen(PORT, console.log(`Running on port ${PORT}`));