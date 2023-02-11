//! Dependencies
require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

//! Imports
const { db } = require('./db');
const { vehicleController, taskController } = require('./controllers');

//! Middleware
app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//! Routes
app.use('/vehicle', vehicleController);
app.use('/task', taskController);

//! Connection
const server = async () => {
    db();

    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));

}

server();