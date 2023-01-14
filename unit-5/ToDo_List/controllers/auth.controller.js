const { route } = require('./practice.controller');

const router = require('express').Router();

router.post('/register', (req,res) => {
    // console.log('In auth Controller: ', req.datePosted);
    // console.log('body: ', req.body);

    // const {firstName, lastName, email, password} = req.body;

    // res.status(200).send({
    //     fullName: `${firstName} ${lastName}`,
    //     email: email,
    //     password: password,
    //     date: req.datePosted
    // });

    try {

        const {firstName, lastName, email, password} = req.body;
        // console.log(potato); // testing our catch
        res.status(200).send({
            fullName: `${firstName} ${lastName}`,
            email: email,
            password: password,
            date: req.datePosted
        });
        
    } catch (err) {
        res.status(500).send(
            `<img src="https://http.cat/500" alt="status code 500"/>`
        )
    }
});

router.get('/query/', (req, res) => {
    // console.log(req.query);
    /* 
        - Anything after the endpoint can be extracted.
        ex: /todo/query/?firstName=John
    */

    try {
        const { firstName, lastName, email, password } = req.query;
        // console.log(firstName, lastName)

        res.status(200).json({
            status: 'User Created!',
            results: {
                first: firstName,
                last: lastName,
                email: email,
                password: password
            }
        })
        
    } catch (err) {
        res.status(500).send(
            `<img src="https://http.cat/500" alt="status code 500"/>`
        )
    }    

});

module.exports = router;