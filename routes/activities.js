const express = require('express');
const router = express.Router();


// User Model
let User = require('../models/user');
// ActivitySchedule Model
let ActivitySchedule = require('../models/activitySchedule');
// ActivityPlace Model
let ActivityPlace = require('../models/activityPlace');
// Activity Model
let Activities = require('../models/activity');
// Chat Model
let Chats = require('../models/chat');

//
// // Add Submit POST Route
// router.post('/add', function (req, res) {
//     req.checkBody('name', 'Name is required.').notEmpty();
//     req.checkBody('author', 'Author is required.').notEmpty();
//     req.checkBody('latitude', 'Latitude is required.').notEmpty();
//     req.checkBody('longitude', 'Longitude is required.').notEmpty();
//     req.checkBody('start_date', 'Start Date is required.').notEmpty();
//     req.checkBody('end_date', 'End Date is required.').notEmpty();
//
//     // Get Errors
//     let errors = req.validationErrors();
//     if (errors){
//         res.render('index', {
//             title: 'Green News',
//             errors: errors
//         })
//     }else{
//         // TODO: add checking that end date is later than start date
//         let activitySchedule = new ActivitySchedule();
//         activitySchedule.start_date = req.body.start_date;
//         activitySchedule.end_date = req.body.end_date;
//
//         activitySchedule.save(function (err){
//             if (err){
//                 console.log(err);
//             }
//         });
//
//         let activityPlace = new ActivityPlace();
//         activityPlace.latitude = req.body.latitude;
//         activityPlace.longitude = req.body.longitude;
//
//         activityPlace.save(function (err){
//             if (err){
//                 console.log(err);
//             }
//         });
//
//         let activity = new Activities();
//         activity.name = req.body.name;
//         activity.author = req.body.author;
//         activity.activityPlace_id = activityPlace._id;
//         activity.activitySchedule_id = activitySchedule._id;
//
//         let chat = new Chats();
//         chat.title = req.body.name;
//
//         // TODO: add author info in such way
//         // news.author = req.user._id;
//
//         activity.save(function (err) {
//             if (err){
//                 console.log(err);
//                 return;
//             }
//             else{
//                 chat.save(function (err) {
//                     if (err){
//                         console.log(err);
//                     }
//                 });
//
//                 req.flash('success', 'Activity added.');
//                 res.redirect('/');
//             }
//         });
//     }
// });
//
// router.get('/:id', function (req, res) {
//     Activities.findById(req.params.id, function (err, activity_item){
//         if (err){
//             console.log(err);
//         }
//
//         res.render('activity',{
//            activity_item: activity_item
//         });
//     });
// });

// API Key: 2086bbf6-3638-48d1-be92-53b9da474acf
router.get('/list', function (req, resp){
    resp.render('activities_list')
})

module.exports = router;