var express          = require('express'),
    app              = express(),
    morgan           = require('morgan'),
    bodyParser       = require('body-parser'),
    mongoose         = require('mongoose'),
    methodOverride   = require('method-override'),
    expressSanitizer = require('express-sanitizer');
    
// required routes
var indexRoutes      = require('./routes/index'),
    blogRoutes       = require('./routes/blogs');

// app configuration
mongoose.connect('mongodb://localhost/restful_blog_app6');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(expressSanitizer());

app.use('/', indexRoutes);
app.use('/blogs', blogRoutes);

// todo: edit chart to show blog-appropriate content

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Blog app listening');
})