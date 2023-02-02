const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// const testingBcrypt = password => {

//     let encrypt = bcrypt.hashSync(password,13);// needs salt value to work.
//     console.log("Encrypt: ", encrypt);
// }

// testingBcrypt("myPassword");
// testingBcrypt("myPassword");
// testingBcrypt("new_password");

router.post('/signup', async (req, res) => {
    // res.send('Connected');

    try {
        
        // Creating a new object based off the Model Schema.
        const user = new User({
            firstName: req.body.first,
        //    schema : client
            lastName: req.body.last,
            email: req.body.email,
            // password: req.body.password
            password: bcrypt.hashSync(req.body.password, 13) // passing in the password provided by the user, salting it 13 times.
        });

        const newUser = await user.save(); // writes to database. Returns a response - why it should be an "await"

        const token = jwt.sign({id: newUser._id}, process.env.JWT, {expiresIn: "1 day"});

        newUser ?
            res.status(200).json({
                user: newUser,
                message: "Success! User Created!",
                token
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

/* 
! Challenge:
    - Create a '/login' route POST
    - Test route 
        - provide a response of the email within the body.
    - Full URL: 
        localhost:4000/user/login
*/

router.post('/login', async (req, res) => {
    // const email = req.body.email;

    try {

        //1. Capture data provided by the user (req.body)
        const { email, password } = req.body;

        //2. Check database to see if email supplied exists
        const user = await User.findOne({email: email});
        //* MongoDB method that accepts a query as an argument. Returns an instance of a document that matches.

        console.log(user);

        //3. If that email exists, consider if password matches.
        if(!user) throw new Error('Email or Password does not match'); // Quick response if no user exists in our database.

        const passwordCheck = await bcrypt.compare(password, user.password); // returns a true/false value.
        //* compare(string, hashed_value);

        // console.log(passwordCheck);
        if(!passwordCheck) throw new Error("Email or Password does not match");

        //4. After verified, provide a token.
        const token = jwt.sign({id: user._id}, process.env.JWT, {expiresIn: 60 * 60 * 24});

        //5. Respond with a status
        email ? 
            res.status(200).json({
                user,
                token
            }) :
            res.status(404).json({
                message: "Something went wrong"
            })
    } catch (err) {
        res.status(500).json({
            Error: err.message
        })
    }
})


module.exports = router;