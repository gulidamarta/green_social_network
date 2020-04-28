const express = require('express');
const router = express.Router();

// User Model
let User = require('../models/user');
// Activity Model
let Activities = require('../models/activity');
// Chat Model
let Chats = require('../models/chat');

// Add Submit POST Route
router.post('/add', function (req, res) {
    req.checkBody('name', 'Name is required.').notEmpty();
    req.checkBody('author', 'Author is required.').notEmpty();
    req.checkBody('latitude', 'Latitude is required.').notEmpty();
    req.checkBody('longitude', 'Longitude is required.').notEmpty();
    req.checkBody('start_date', 'Start Date is required.').notEmpty();
    req.checkBody('end_date', 'End Date is required.').notEmpty();

    // Get Errors
    let errors = req.validationErrors();
    if (errors){
        res.render('index', {
            title: 'Green News',
            errors: errors
        })
    }else{
        let activity = new Activities();
        activity.name = req.body.name;
        activity.author = req.body.author;
        activity.latitude = req.body.latitude;
        activity.longitude = req.body.longitude;

        let chat = new Chats();
        chat.title = req.body.name;

        // TODO: add checking that end date is later than start date
        activity.start_date = req.body.start_date;
        activity.end_date = req.body.end_date;

        // TODO: add author info in such way
        // news.author = req.user._id;

        activity.save(function (err) {
            if (err){
                console.log(err);
                return;
            }
            else{
                chat.save(function (err) {
                    if (err){
                        console.log(err);
                    }
                });
                req.flash('success', 'Activity added.');
                res.redirect('/');
            }
        });
    }
});

module.exports = router;