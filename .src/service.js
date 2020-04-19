const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const config = require('../config/database');

mongoose.connect(config.database);
let db = mongoose.connection;

// Check connection
db.once('open', function () {
    console.log('Connected to MongoDD');
});

// Check for db errors
db.on('error', function (err) {
    console.log(err);
});


//Set up the custom environment
const port = process.env.PORT || 4200;

// Init App
const app = express();

// Bring in Models
let News = require('../models/news');

// Load View Engine
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Set Public Folder
app.use(express.static(path.join(__dirname, '../public')));

// Express Session Middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}));

// Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
   res.locals.messages = require('express-messages')(req, res);
   next();
});

// Express Validator Middleware
app.use(expressValidator({
    errorFormatter: function (param, msg, value) {
        let namespace = param.split('.')
            , root = namespace.shift()
            , formParam = root;

        while (namespace.length){
            formParam += '[' + namespace.shift() + ']';
        }
        return{
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));

// Passport Config
require('../config/passport')(passport);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function (req, res, next) {
    res.locals.user = req.user || null;
    next();
});


// Home Route
app.get('/', function(req, res){
    News.find({}, function (err, news_list) {
        if (err){
            console.log(err);
        } else {
            res.render('index', {
                title: 'Green News',
                news_list: news_list
            });
        }
    });
});

// Route Files
let news = require('../routes/news');
let users = require('../routes/users');
let activities = require('../routes/activities');
app.use('/news', news);
app.use('/users', users);
app.use('/activities', activities);

// Start Server
app.listen(port, function () {
    console.log(`Server has been started on port ${port}...`);
});