require('dotenv').config();
const express = require('express');
const app = express();
// const mongoose = require('mongoose'); //* Unit 6
const PORT = process.env.PORT || 4002;
// const MONGO = process.MONGO; //* Unit 6

// const user = require('../controllers/user.controller'); //* Unit 6
const routeController = require('./controllers/routes.controller');

// mongoose.connect(`${MONGO}/broken_records`); //* Unit 6
// const mongodb = mongoose.connection; //* Unit 6

app.use(express.json());
// mongodb.once(open, () => console.log('Connected to Mongo')); //* Unit 6
// mongoose.set('strictQuery', true); //* Unit 6

// app.uses('/user', userController);  //* Unit 6

app.use('/broken-app-challenge', routeController);

app.listen(PORT, () => console.log(`App is running on: ${PORT}`));


