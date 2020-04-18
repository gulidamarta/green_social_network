const express = require('express');
const router = express.Router();

// News Model
let News = require('../models/news');
// User Model
let User = require('../models/user');

// Add Route
router.get('/add', ensureAuthenticated, function (req, res) {
    res.render('add_news', {
        title: 'Add News Page'
    })
});

// Add Submit POST Route
router.post('/add', function (req, res) {
    req.checkBody('title', 'Title is required.').notEmpty();
    // req.checkBody('author', 'Author is required.').notEmpty();
    req.checkBody('body', 'Body is required.').notEmpty();

    // Get Errors
    let errors = req.validationErrors();
    if (errors){
        res.render('add_news', {
            title: 'Add News Page',
            errors: errors
        })
    }else{
        let news = new News();
        news.title = req.body.title;
        news.author = req.user._id;
        news.body = req.body.body;

        news.save(function (err) {
            if (err){
                console.log(err);
                return;
            }
            else{
                req.flash('success', 'News added.');
                res.redirect('/');
            }
        });
    }
});


// Load Edit Form
router.get('/edit/:id', ensureAuthenticated, function (req, res) {
    News.findById(req.params.id, function (err, news_item) {
        // TODO: add check for situation, when you straightly
        //  enter path to the news item

        // if (news_item.author !== req.user.id){
        //     req.flash('danger', 'Not Authorized.');
        //     res.redirect('/');
        // }

        res.render('edit_news', {
            title: 'Edit News',
            news_item: news_item
        })
    });
});

// Update Submit POST Route
router.post('/edit/:id', function (req, res) {
    let news = {};
    news.title = req.body.title;
    news.author = req.body.author;
    news.body = req.body.body;

    let query = {_id: req.params.id};

    News.updateOne(query, news, function (err) {
        if (err){
            console.log(err);
            return;
        }
        else{
            req.flash('success', 'News updated.');
            res.redirect('/');
        }
    });
});

// Delete News
// TODO: Replace with jquery method, not using get method for deleting
router.get('/delete/:id', function (req, res) {
    News.findByIdAndRemove(req.params.id, function (err) {
        if (err){
            console.log(err);
        }
        res.redirect('/');
    });
});

// Get Single News
router.get('/:id', function (req, res) {
    News.findById(req.params.id, function (err, news_item) {
        User.findById(news_item.author, function (err, user) {
            res.render('news', {
                news_item: news_item,
                author: user.name
            });
        });
    });
});

// Access Control
function ensureAuthenticated(req, res, next){
    if (!res.isAuthenticated){
        return next();
    }
    else{
        req.flash('danger', 'Please, login.');
        res.redirect('/users/login');
    }
}

module.exports = router;