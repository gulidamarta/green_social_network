const express = require('express');
const passport = require('passport');
const statusCodes = require('http-status-codes');
const router = express.Router();


let User = require('../models/user');
let ActivitySchedule = require('../models/activitySchedule');
let ActivityPlace = require('../models/activityPlace');
let Activities = require('../models/activity');
let Device = require('../models/device');

// use this for checking authorization
const authenticate = passport.authenticate('local', {session: true});

function mustAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(statusCodes.UNAUTHORIZED).send({});
    }
    next();
}

// Add Submit POST Route
router.post('/create', mustAuthenticated, function (req, res) {
    req.checkBody('name', 'Name is required.').notEmpty();
    // req.checkBody('author', 'Author is required.').notEmpty();
    req.checkBody('latitude', 'Latitude is required.').notEmpty();
    req.checkBody('longitude', 'Longitude is required.').notEmpty();

    // Get Errors
    let errors = req.validationErrors();
    if (errors){
        console.log(errors)
        res.render('/home', {
            errors: errors
        })
    }else {
        // TODO: add checking that end date is later than start date
        let activitySchedule = new ActivitySchedule();
        activitySchedule.start_date = req.body.start_date;
        activitySchedule.end_date = req.body.end_date;

        activitySchedule.save(function (err) {
            if (err) {
                console.log(err);
            }
        });

        let activityPlace = new ActivityPlace();
        activityPlace.latitude = req.body.latitude;
        activityPlace.longitude = req.body.longitude;

        activityPlace.save(function (err) {
            if (err) {
                console.log(err);
            }
        });

        let activity = new Activities();
        activity.name = req.body.name;
        activity.author = req.user._id;
        if (req.body.main_purposes) {
            activity.description = req.body.main_purposes;
        }
        activity.category = req.body.category;
        activity.activityPlace_id = activityPlace._id;
        activity.activitySchedule_id = activitySchedule._id;

        activity.save(function (err) {
            if (err){
                console.log(err);
            }
            else{
                console.log(activity)
                res.redirect('/activities/list');
            }
        });
    }
});


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


router.get('/add', function (req, res){
    res.render('create_activity')
});


router.get('/list', function (req, resp){
    Activities.find({}, function(err, activities_list){
        if (err){
            console.log(err);
        } else{
            resp.render('activities_list',{
                activities_list: activities_list,
                activities_amount: activities_list.length
            });
        }
    });
});

router.get('/devices', function (req, resp) {
    Activities.find({}, function (err, activities_list) {
        if (err) {
            console.log(err);
        } else {
            var result_json = [];
            for (let i = 0; i < activities_list.length; i++){
                ActivityPlace.findById(activities_list[i].activityPlace_id, function(err, activity_place){
                    if (err){
                        console.log(err);
                    } else{
                        let temp = {
                            activity: activities_list[i],
                            activity_place: activity_place
                        };
                        result_json.push(temp);
                    }
                })
            }
            setTimeout(() => {  resp.send({
                activities_list: result_json,
                activities_amount: activities_list.length,
            }); }, 100);

        }
    })
});

router.get('/:id', function (req, res){
    Activities.findById(req.params.id, function (err, activity_item) {
        if (err){
            console.log(err);
        } else{
            ActivityPlace.findById(activity_item.activityPlace_id, function(err, activity_place){
                if (err){
                    console.log(err);
                } else {
                    ActivitySchedule.findById(activity_item.activitySchedule_id, function (err, activity_schedule){
                        if (err){
                            console.log(err);
                        } else{
                            User.findById(activity_item.author, function (err, user){
                                if (err){
                                    console.log(err);
                                } else{
                                    res.render(
                                        'activity', {
                                            activity_item: activity_item,
                                            activity_schedule: activity_schedule,
                                            activity_place: activity_place
                                        }
                                    )
                                }
                            })
                        }
                    });
                }
            });
        }
    });
});

router.post('/device/add', function(req, resp) {
    let device = Device();
    device.device_id = req.body.device_id;
    if (req.body.latitude === 0) {
        device.latitude = 53.91219420941381;
    } else {
        device.latitude = req.body.latitude
    }
    if (req.body.longitude === 0){
        device.longitude = 27.594676804633927;
    } else {
        device.longitude = req.body.longitude;
    }
    device.temperature = req.body.temperature;
    device.humidity = req.body.humidity;
    device.dew_point = req.body.dew_point;
    device.carbon_dioxide = req.body.carbon_dioxide;
    device.tvoc = req.body.tvoc;
    device.formaldehyde = req.body.formaldehyde;
    device.toluene = req.body.toluene;
    device.cpm = req.body.cpm;

    device.save(function(err){
        if (err){
            console.log(err);
        } else {
            console.log(JSON.stringify(device));
            resp.send(device)
        }
    })
});

module.exports = router;