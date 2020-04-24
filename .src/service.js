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
        socket.emit('message', formatMessage(adminName, 'Welcome to CharCord!'));

        // Broadcast when a user connects
        // emit message for everybody except that user, who emits
        socket.broadcast.emit('message', formatMessage(adminName, 'A user has joined the chat'));

        // Runs when client disconnect
        socket.on('disconnect', function () {
            io.emit('message', formatMessage(adminName, 'A user has left the chat.'));
        });

        // Listen for chatMessage
        socket.on('chatMessage', function (msg) {
            io.emit('message', formatMessage('USER',msg));
        });
    });
    // client.on('connection', function (socket) {
    //     let chat = db.collection('chats');
    //
    //     // Create function to send status
    //     sendStatus = function (s) {
    //         socket.emit('status', s);
    //     };
    //
    //     // Get chats from mongo collection
    //     chat.find().limit(100).sort({ _id: 1}).toArray(function (err, res) {
    //         if (err){
    //             throw err;
    //         }
    //
    //         // emit messages
    //         socket.emit('output', res);
    //     });
    //
    //     // Handle input event
    //     socket.on('input', function (data) {
    //         let name = data.name;
    //         let message = data.message;
    //
    //         // check for name and message
    //         if (name === '' || message === ''){
    //             // send error status
    //             sendStatus('Please, enter a name and a message');
    //         } else{
    //             // inset message
    //             char.insert({name: name, message: message}, function () {
    //                 client.emit('output', [data]);
    //
    //                 // send status object
    //                 sendStatus({
    //                     message: 'Message sent',
    //                     clear: true
    //                 })
    //             });
    //         }
    //     });
    //
    //     // Handle Clear
    //     socket.on('clear', function (data) {
    //         // Remove all chars from collection
    //         chat.remove({}, function () {
    //             socket.emit('cleared');
    //         });
    //     });
    // });
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

app.get('/chats', function (req, res) {
    res.render('chats');
});

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
server.listen(port, function () {
    console.log(`Server has been started on port ${port}...`);
});