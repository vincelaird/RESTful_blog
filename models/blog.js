var mongoose = require('mongoose');

// blog model configuration
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model('Blog', blogSchema);

// initial blog for model testing
// Blog.create({
//     title: 'Test blog',
//     image: 'http://d2s3dt9f4iyeup.cloudfront.net/images/standard_v1/16cd4928-c893-4587-ad64-8d2ca1974149.png',
//     body: 'This is the content'
// });

module.exports = Blog;