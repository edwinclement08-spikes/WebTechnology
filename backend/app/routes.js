// app/routes.js

var Post = require('../app/models/posts');

var request = require('request');
var querystring = require('querystring');

module.exports = function (app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function (req, res) {
        res.redirect('/home');
    });

    // =====================================
    // NEW-LOGIN ===========================
    // =====================================
    // show the login form
    // app.get('/loginPage', function(req, res) {
    //     // render the page and pass in any flash data if it exists
    //     res.render('loginPage.ejs', { message: req.flash('loginMessage') }); 
    // });

    // process the login form
    // app.post('/login', do all our passport stuff here);
    // process the login form
    // app.post('/loginPage', passport.authenticate('local-login', {
    //     successRedirect : '/profile', // redirect to the secure profile section
    //     failureRedirect : '/login', // redirect back to the signup page if there is an error
    //     failureFlash : true // allow flash messages
    // }));


    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    // app.get('/login', function(req, res) {
    //     // render the page and pass in any flash data if it exists
    //     res.render('login.ejs', { message: req.flash('loginMessage') }); 
    // });

    app.get('/login', function (req, res) {
        // render the page and pass in any flash data if it exists
        res.render('loginPage.ejs', { message: req.flash('loginMessage'), formType: "login" });
    });

    // process the login form
    // app.post('/login', do all our passport stuff here);
    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function (req, res) {

        res.render('loginPage.ejs', { message: req.flash('signupMessage'), formType: "register" });
    });



    // process the signup form
    // app.post('/signup', do all our passport stuff here);
    app.post('/signup', function (req, res) {
        // g-recaptcha-response is the key that browser will generate upon form submit.
        // if its blank or null means user has not selected the captcha, so return the error.
        if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
            req.flash('signupMessage', "Failed captcha verification");
            res.render('loginPage.ejs', { message: req.flash('signupMessage'), formType: "register" });

        } else {
            var ip = (req.headers['x-forwarded-for'] && req.headers['x-forwarded-for'].split(',').pop()) ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress


            var form = {
                secret: '6LdOiTUUAAAAABbNeGiZnfc9d_kmw_f7uctjbuga',
                response: req.body['g-recaptcha-response'],
                remoteip: ip
            };

            var formData = querystring.stringify(form);
            var contentLength = formData.length;

            request({
                headers: {
                    'Content-Length': contentLength,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                uri: 'https://www.google.com/recaptcha/api/siteverify',
                body: formData,
                method: 'POST',
            }, function (error, response, body) {
                if (!error && response.statusCode == 200) {

                    // Success will be true or false depending upon captcha validation.
                    if (body.success !== undefined && !body.success) {
                        req.flash('signupMessage', "Failed captcha verification");
                        res.render('loginPage.ejs', { message: req.flash('signupMessage'), formType: "register" });
                    }

                    // successful recaptcha
                    passport.authenticate('local-signup', {
                        successRedirect: '/home', // redirect to the secure profile section
                        failureRedirect: '/signup', // redirect back to the signup page if there is an error
                        failureFlash: true // allow flash messages
                    })(req, res);
                }
            }
            );
        }
    });
    // =====================================
    // RECOVERY =====================
    // =====================================

    app.post('/recover', passport.authenticate('recover'),function(username, done) {
        User.findOne({ 'email' :  email }, function(err, user) {
          if (err) { return done(err); }
          if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
          }
          //return done(null, user);        instead of this line, we send an email
        })
      });

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function (req, res) {
        res.render('profile.ejs', {
            user: req.user // get the user out of session and pass to template
        });
    });

    app.get('/home', function (req, res) {
        res.render('home.ejs', {
            user: req.user // get the user out of session and pass to template
        });
    });


    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function (req, res) {

        req.logout();
        res.redirect('/home');
    });

    // =====================================
    // FACEBOOK ROUTES =====================
    // =====================================
    // route for facebook authentication and login
    app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/home',
            failureRedirect: '/login'
        }));

    // =====================================
    // GOOGLE ROUTES =======================
    // =====================================
    // send to google to do the authentication
    // profile gets us their basic information including their name
    // email gets their emails
    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: '/home',
            failureRedirect: '/login'
        }));

    // =============================================================================
    // AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
    // =============================================================================

    // locally --------------------------------
    app.get('/connect/local', function (req, res) {
        res.render('connect-local.ejs', { message: req.flash('loginMessage') });
    });

    app.post('/connect/local', passport.authenticate('local-signup', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/connect/local', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // facebook -------------------------------
    // send to facebook to do the authentication
    app.get('/connect/facebook', passport.authorize('facebook', { scope: 'email' }));

    // handle the callback after facebook has authorized the user
    app.get('/connect/facebook/callback',
        passport.authorize('facebook', {
            successRedirect: '/home',
            failureRedirect: '/login'
        }));

    // google ---------------------------------
    // send to google to do the authentication
    app.get('/connect/google', passport.authorize('google', { scope: ['profile', 'email'] }));

    // the callback after google has authorized the user
    app.get('/connect/google/callback',
        passport.authorize('google', {
            successRedirect: '/home',
            failureRedirect: '/login'
        }));

    // =============================================================================
    // UNLINK ACCOUNTS =============================================================
    // =============================================================================
    // used to unlink accounts. for social accounts, just remove the token
    // for local account, remove email and password
    // user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', function (req, res) {
        var user = req.user;
        user.local.email = undefined;
        user.local.password = undefined;
        user.save(function (err) {
            res.redirect('/home');
        });
    });

    // facebook -------------------------------
    app.get('/unlink/facebook', function (req, res) {
        var user = req.user;
        user.facebook.token = undefined;
        user.save(function (err) {
            res.redirect('/home');
        });
    });


    // google ---------------------------------
    app.get('/unlink/google', function (req, res) {
        var user = req.user;
        user.google.token = undefined;
        user.save(function (err) {
            res.redirect('/home');
        });
    });

    // POSTS
    // Get profile picture
    app.get('/posts/image/:link', function (req, res, next) {
        Posts.findOne({ 'link': req.params[link] }, function (err, post) {
            if (err) return next(err);
            res.contentType(post.img.contentType);
            res.send(post.img.data);
        });
    });
    ``
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}



