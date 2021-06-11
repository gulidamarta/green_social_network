const express = require('express');
const passport = require('passport');
const statusCodes = require('http-status-codes');
const router = express.Router();

// Bring in Models
let Chats = require('../models/chat');
let Messages = require('../models/message');

// use this for checking authorization
const authenticate = passport.authenticate('local', {session: true});

function mustAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(statusCodes.UNAUTHORIZED).send({});
    }
    next();
}


router.get('/', function (req, res) {
    Chats.find({}, function (err, chat_list) {
        if (err){
            console.log(err);
        } else {
            Messages.find({char_room_id: chat_list[0].chat_room_id}, function (err, message_list){
                if (err){
                    console.log(err);
                } else{
                    res.render('chat_list', {
                        chat_list: chat_list,
                        message_list: message_list
                    });
                }
            })
        }
    });
});

router.get('/:id', function (req, res) {
    Messages.find({chat_room_id: req.params.id}, function(err, message_list) {
        if (err){
            console.log(err);
        }

        res.render('chats', {
            message_list: message_list
        });
    });
});

module.exports = router;