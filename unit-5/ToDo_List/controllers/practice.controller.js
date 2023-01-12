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

router.post('/json', (req, res) => {
    // console.log(req);
    // console.log(req.body);

    const name = req.body.name;
    // console.log(name);

    res.send(`Hello, ${name}!`);
});

//* Wildcard Endpoint
router.get("*", (req, res) => {
    /* 
        - "*": accounts for a "wild card" or anything that hasn't been defined.
        - Provides a clean response to the user.
    */

    // console.log(req.url);

    res.status(404).send(`<img src="https://http.cat/404" alt="status code 404"/>`);
});

module.exports = router; // don't forget to export the define route.