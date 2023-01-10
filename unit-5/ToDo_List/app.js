const express = require('express'); // being pulled from node modules.
const app = express(); // simplifying the method calls.
const PORT = 4000; // server port within localhost. Using 'all caps' to indicate a general variable.
const practiceController = require('./controllers/practice.controller');

app.use(express.static(`${__dirname}/public`)); // __dirname comes from node.
console.log('pathway: ', __dirname); // routes us to the root folder of our project.

app.use('/practice', practiceController);
/* 
    Any traffic coming in that has "practice" after localhost:4000 will route to practice.controller.js
        ex: localhost:4000/practice.
*/

// app.listen(4000, () => console.log(`Server is running on port: 4000`));
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

