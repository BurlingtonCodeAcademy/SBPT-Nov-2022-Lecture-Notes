const express = require('express'); // being pulled from node modules.
const app = express(); // simplifying the method calls.
const PORT = 4000; // server port within localhost. Using 'all caps' to indicate a general variable.
const practiceController = require('./controllers/practice.controller');
const authController = require('./controllers/auth.controller');
const { logTime } = require('./helpers');

app.use(logTime); //  <-- using our own middleware function.
app.use(express.json()); // Provides us access to use JSON within our routes.
app.use(express.urlencoded()); // parses the body from our browser so it can display the response.

app.use(express.static(`${__dirname}/public`)); // __dirname comes from node.
// console.log('pathway: ', __dirname); // routes us to the root folder of our project.

app.use('/practice', practiceController);
/* 
    Any traffic coming in that has "practice" after localhost:4000 will route to practice.controller.js
        ex: localhost:4000/practice.
*/
app.use('/todo', authController);

// app.listen(4000, () => console.log(`Server is running on port: 4000`));
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

