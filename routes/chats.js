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
    // let chat_temp = Chats();
    // chat_temp.title = 'Cycle to work scheme';
    // chat_temp.photo_url = '/icons/first_activity_img_round.png';
    // chat_temp.last_msg = 'Where we can solve that problem?';
    // chat_temp.save();
    //
    // let chat_1 = Chats();
    // chat_1.title = 'Plant a tree';
    // chat_1.photo_url = '/icons/second_activity_img_round.png';
    // chat_1.last_msg = 'May be an oak will be good';
    // chat_1.save();
    //
    // let chat_2 = Chats();
    // chat_2.title = 'Recycle plastic';
    // chat_2.photo_url = '/icons/third_activity_img_round.png';
    // chat_2.last_msg = "Me: I'm waiting caps from mother.";
    // chat_2.save();

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