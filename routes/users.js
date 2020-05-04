const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Bring in User Model
let User = require('../models/user');

// Bring in News Model
let News = require('../models/news');

// Register Form
router.get('/register', function (req, res) {
    res.render('register');
});

// Register Process
router.post('/register', function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const password2 = req.body.password2;

    req.checkBody('name', 'Name is required.').notEmpty();
    req.checkBody('email', 'Email is required.').notEmpty();
    req.checkBody('email', 'Email is not valid.').isEmail();
    req.checkBody('username', 'Username is required.').notEmpty();
    req.checkBody('password', 'Password is required.').notEmpty();
    req.checkBody('password', 'Passwords do not match.').equals(req.body.password);

    let errors = req.validationErrors();
    if (errors){
        res.render('register', {
            errors: errors
        });
    }else{
        let newUser = new User({
            name: name,
            email: email,
            username: username,
            password: password
        });
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(newUser.password, salt, function (err, hash) {
                if (err){
                    console.log(err);
                }

                newUser.password = hash;
                newUser.save(function (err) {
                    if (err){
                        console.log(err);
                        return;
                    }else{
                        req.flash('success', 'You are now registered and can log in.');
                        res.redirect('/users/login');
                    }
                })
            });
        });
    }

});


// Login Form
router.get('/login', function (req, res) {
    res.render('login');
});

// Login Process
router.post('/login', function (req, res, next) {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

// Logout
router.get('/logout', function (req, res) {
    req.logout();
    req.flash('success', 'You are logged out.');
    // NOT sure that this is a good idea, may be the login page will be better
    res.redirect('/');
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

// User Profile
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user){
        News.find({'author': req.params.id}, function (err, news_list) {
            res.render('profile',{
                user: user,
                news_list: prepare_news_preview(news_list)
            });
        });
    })
});

// Edit Profile Page Render
router.get('/:id/edit', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        res.render('edit_profile', {
            user: user
        })
    })
});

// Update Submit POST User Route
router.post('/:id/edit', function (req, res) {
    let users = {};
    users.name = req.body.name;
    users.email = req.body.email;
    users.username = req.body.username;

    let query = {_id: req.params.id};

    User.updateOne(query, users, function (err) {
        if (err){
            console.log(err);
            return;
        }
        else{
            req.flash('success', 'User Profile updated.');
            res.redirect('/');
        }
    });
});

module.exports = router;