const express = require("express");
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');


const User = require('../models/user')

//Register



router.post('/register', function (req, res, next) {
    "use strict";
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, function (err, user) {
        if(err){
            res.json({success:false, msg:'Failed to register user'})
        }
        else{
            res.json({success:true, msg:'Successfully registered user'});
        }
    })
});


router.get('/authenticate', function (req, res, next) {

    res.send("Authenticate");

});


router.get('/profile', function (req, res, next) {

    res.send("Profile");

});

router.get('/validate', function (req, res, next) {

    res.send("Validate");

});

module.exports = router;