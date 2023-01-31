const router = require('express').Router();
const User = require('../models/user.model');

router.post('/signup', async (req, res) => {
    // res.send('Connected');

    try {
        
        // Creating a new object based off the Model Schema.
        const user = new User({
            firstName: req.body.first,
        //    schema : client
            lastName: req.body.last,
            email: req.body.email,
            password: req.body.password
        });

        const newUser = await user.save(); // writes to database. Returns a response - why it should be an "await"

        newUser ?
            res.status(200).json({
                user: newUser,
                message: "Success! User Created!"
            }) :
            res.status(404).json({
                message: "Incomplete"
            })

    } catch (err) {
        res.status(500).json({
            Error: err.message
        })
    }
});

module.exports = router;