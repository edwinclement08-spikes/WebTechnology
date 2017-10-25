var express       = require('express');
var passport      = require('passport');
var flash         = require('connect-flash');
var path          = require('path');
var morgan        = require('morgan');
var favicon       = require('serve-favicon');
var morgan        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var session       = require('express-session');
var sanitize      = require('mongo-sanitize');
var mongoose      = require('mongoose');

mongoose.Promise = Promise;
var configDB = require('./config/database.js');
mongoose.connect(configDB.url, {
  useMongoClient: true,
}); // connect to our database

// Schemas
var Post = require('./app/models/posts');
var User = require('./app/models/user');

var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser()); // get information from html forms
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// required for passport
app.use(session({ secret: 'wrt46wesdfni8ouh89g548u894roihmo9586u' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


require('./config/passport')(passport, User);   // pass passport for configuration
require('./config/scrapper.js')(app, Post);     
require('./app/routes.js')(app, passport, User); // load our routes and pass in our app and fully configured passport
require('./app/routes-posts.js')(app, Post, express.Router()); // load Posts distributer router

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.ejs');
});


module.exports = app;