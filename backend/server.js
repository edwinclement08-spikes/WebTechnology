var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = Promise;

var passport = require('passport');
var flash    = require('connect-flash');

var path = require('path');

var morgan       = require('morgan');

var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


// configuration ===============================================================
var configDB = require('./config/database.js');
mongoose.connect(configDB.url, {
  useMongoClient: true,
  /* other options */
}); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// TODO: Remove if not needed ===============================================================
app.use(express.static(path.join(__dirname, 'public')));


app.use(cookieParser());
app.use(bodyParser()); // get information from html forms
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

var index = require('./routes/index1');
// var users = require('./routes/users');
// var login = require('./routes/login');
// var posts = require('./routes/posts');

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// required for passport
app.use(session({ secret: 'wrt46wesdfni8ouh89g548u894roihmo9586u' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session



app.use('/', index);
// app.use('/', login);

// app.use('/posts', posts);
// app.use('/users', users);


require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


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

console.log("temp123");