var express = require('express')
var router = express.Router();
var Blog = require('../models/blog');
var sanitize = require('../middleware/sanitize');

// index route
router.get('/', function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log('error: ' + err);
        } else {
            res.render('index', {blogs:blogs});
        }
    });
});

// new route
router.get('/new', function(req, res) {
    res.render('new');
});

// create route
router.post('/', sanitize.clean, function(req, res){
    // req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err, blog){
        if(err){
            console.log('error: ' + err);
        } else {
            res.redirect('/blogs');
        }
    });
});

// show route
router.get('/:id', function(req, res) {
    Blog.findById(req.params.id, function(err, blog){
        if(err){
            console.log('error: ' + err);
            res.redirect('/');
        } else {
            res.render('show', {blog:blog});
        }
    });
});

// edit route
router.get('/:id/edit', function(req, res) {
    Blog.findById(req.params.id, function(err, blog){
        if(err){
            console.log('error: ' + err);
            res.redirect('/');
        } else {
            res.render('edit', {blog:blog});
        }
    });
});


// update route
router.put('/:id', sanitize.clean, function(req, res){
    // req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, blog){
        if(err){
            console.log('error: ' + err);
            res.redirect('/');
        } else {
            res.redirect('/blogs/' + req.params.id);
        }
    });
});

// delete route
router.delete('/:id', function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log('error: ' + err);
            res.redirect('/');
        } else {
            res.redirect('/');
        }
    });
});

module.exports = router;