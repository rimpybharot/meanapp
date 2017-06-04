const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

mongoose.connect(config.database);

mongoose.connection.on('connected', function () {
    console.log("connected");
});

const app = express();

const users = require('./routes/users');

const port = 3000;

app.get('/', function (req, res) {
    res.send("Invalid Endpoint")
});

app.use(cors());

//Set Static Folders and Files

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());


//Passport MiddleWare
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);




app.listen(port,function(){

    console.log('Express server listening on port', port);
});
