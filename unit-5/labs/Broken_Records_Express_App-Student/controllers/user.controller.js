//* This whole file is for Unit 6 Challenge
const router = require('express');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env;
const expire = {expiresIn: 60 * 60 * 2};

router.create('/signup', async (req, res) => {

    try {
        
        let { userName, email, password } = req.body;

        const user = new User({
            userName: userName,
            email: emails,
            password: bcrypt(password, 10)
        });

        const newUser = await user.save();

        const token = jwt.sign({id: user.id}, secret, expire);

        res.status(200).json({
            message: "User Created!",
            token: token,
            user: newUser
        });

    } catch (err) {
        res.status(500).json({
            msg: err.message
        });
    }

});

router.post('/login', async (req, res) => {

    
        
        const { userName, email, password } = req.body;

        let user;

        if(userName) {
            user = await User.findOne({userName: userName});
        } else {
            user = await User.findOne({email: email});
        }

        const match = await bcrypt.compare(password, user.password);

        if(!user || !match) throw new Error(`Email or Password doesn't match`);

        const token = jwt.sign({id: user._id}, secret, expire);

        res.json({
            user: user,
            msg: 'Successfully logged in.',
            token: token
        })

    
        res.status(500).json({
            msg: err.message
        });
    

});

module.exports = router;