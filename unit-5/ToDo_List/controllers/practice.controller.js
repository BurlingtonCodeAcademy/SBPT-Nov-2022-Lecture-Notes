const router = require('express').Router(); // create a variable -> import Router Engine from express.

router.get('/hello-world', (req, res) => {
    /* 
        - the pathway noted as a string
        - a callback function to handle the request and response
            - req, res
    */

    res.send("Hello World"); // Browsers always do a GET method as default.
});

/* 
    - Request Type: POST
    - Endpoint: "greeting"
    - Send: "Good Afternoon!"
    - Test: Postman
        *hint: GET should be POST
*/

router.post('/greeting', (req, res) => {
    res.send('Good Afternoon!');
});

module.exports = router; // don't forget to export the define route.