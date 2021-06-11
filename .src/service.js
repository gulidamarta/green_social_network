const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const config = require('../config/database');
const http = require('http');
const socketio = require('socket.io');
const formatMessage = require('../utils/messages');

mongoose.connect(config.database);
let db = mongoose.connection;

//Set up the custom environment
const port = process.env.PORT || 4200;

// Init App
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Check connection
db.once('open', function () {
    console.log('Connected to MongoDD');

    io.on('connection', function (socket) {
        const adminName = 'Chat Admin';

        // Welcome current user
        //socket.emit('message', formatMessage(adminName, 'Welcome to activity chat!'));

        // Broadcast when a user connects
        // emit message for everybody except that user, who emits
        socket.broadcast.emit('message', formatMessage(adminName, 'A user has joined the chat'));

        // Runs when client disconnect
        socket.on('disconnect', function () {
            io.emit('message', formatMessage(adminName, 'A user has left the chat.'));
        });

        // Listen for chatMessage
        socket.on('chatMessage', function (msg) {
            io.emit('message', formatMessage(msg));
        });
    });
});

// Check for db errors
db.on('error', function (err) {
    console.log(err);
});

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
let staticDir = express.static(path.join(__dirname, '../uploads/images'));
app.use(staticDir);

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

function prepare_news_preview(news_list){
    const news_length = 650;

    for (let i = 0; i < news_list.length; i++){
        if (news_list[i].body.length > news_length){
            news_list[i].body = news_list[i].body.slice(0, news_length) + '...';
        }
    }
    return news_list
}

// Home Route
app.get('/', function(req, res){
    res.render('home');
});

// Home Route (new)
app.get('/home', function(req, res){
    res.render('home');
});

// Route Files
let news = require('../routes/news');
let users = require('../routes/users');
let activities = require('../routes/activities');
let chats = require('../routes/chats');
app.use('/news', news);
app.use('/users', users);
app.use('/activities', activities);
app.use('/chats', chats);

// Start Server
server.listen(port, function () {
    console.log(`Server has been started on port ${port}...`);
});
