const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// News Model
let News = require('../models/news');
// User Model
let User = require('../models/user');

let staticDir = express.static(path.join(__dirname, '../uploads/images'));
router.use(staticDir);

// Disk Storage Configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../uploads/images');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
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

// Execute multer
const upload = multer({storage: storage});

// Add Route
router.get('/add', ensureAuthenticated, function (req, res) {
    res.render('add_news', {
        title: 'Add News Page'
    })
});

// Add Submit POST Route
router.post('/add',
    upload.single('image'),
    function (req, res) {

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
        news.author = req.user.id;
        news.body = req.body.body;
        if (req.file) {
            news.image_url = req.file.originalname;
        }

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
router.post('/edit/:id', upload.single('image'), function (req, res) {
    let news = {};
    news.title = req.body.title;
    news.author = req.body.author;
    news.body = req.body.body;
    if (req.file) {
        news.image_url = req.file.originalname;
    }

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
        res.render('news_item', {
            news_item: news_item,
        });
    });
});

// News List Page
router.get('', function (req, res){
    // let news_1 = News();
    // news_1.title = 'Construction of a nuclear power plant';
    // news_1.image_url = '/icons/news_1.jpg';
    // news_1.short_description = 'Building a nuclear plant requires \n' +
    //     'a large area, especially the one near \n' +
    //     'a natural water body...';
    // news_1.body = '';
    //
    // let news_2 = News();
    // news_2.title = 'Forest loss escalates biodiversity change';
    // news_2.image_url = '/icons/news_2.jpg';
    // news_2.short_description = 'The research, led by the university of Edinburgh and the University of \n' +
    //     'St Andrews, investigated the mpacts...';
    // news_2.body = '';
    //
    // let news_3 = News();
    // news_3.title = 'Antarctic sea ice loss explained in a new study';
    // news_3.image_url = '/icons/news_3.jpg';
    // news_3.short_description = 'Sea ice surrounding Antarctica provides an important habitat for many species including penguins and seals...';
    // news_3.body = '';
    //
    // let news_4 = News();
    // news_4.title = 'Ban new gas boilers from 2025 to reach net-zero ';
    // news_4.image_url = '/icons/news_4.jpg';
    // news_4.short_description = 'The International Energy Agency (IEA) says that no new fossil fuel boilers should be sold from 2025...';
    // news_4.body = '';
    //
    // news_1.save(function (err){
    //     if (err){
    //         console.log(err);
    //     }
    // });
    // news_2.save(function (err){
    //     if (err){
    //         console.log(err);
    //     }
    // });
    // news_3.save(function (err){
    //     if (err){
    //         console.log(err);
    //     }
    // });
    // news_4.save(function (err){
    //     if(err){
    //         console.log(err);
    //     }
    // });
    News.find({}, function(err, news_list){
        if(err){
            console.log(err);
        } else{
            res.render(
                'news',{
                    news_list: news_list
                }
            )
        }
    })
})

module.exports = router;