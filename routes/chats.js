const express = require('express');
const router = express.Router();

// Bring in Models
let Chats = require('../models/chat');
let Messages = require('../models/message');


router.get('/', function (req, res) {
    Chats.find({}, function (err, chat_list) {
        if (err){
            console.log(err);
        } else {
            res.render('chat_list', {
                chat_list: chat_list
            });
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