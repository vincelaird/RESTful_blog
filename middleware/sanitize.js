var express = require('express');
var app = express();
var expressSanitizer = require('express-sanitizer');

app.use(expressSanitizer());

module.exports = {
    clean: function(req, res, next){
        req.body.blog.body = req.sanitize(req.body.blog.body);
        next();
    }
};