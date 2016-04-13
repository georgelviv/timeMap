var express = require('express'),
    app = express(),
    expressSession = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local' ).Strategy,
    router = express.Router(),
    User = require('../models/user');


app.use(expressSession({
    secret: Math.random().toString(36).replace(/[^a-z]+/g, ''),
    resave: false,
    saveUninitialized: false
}));

//app.use(passport.initialize());
//app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


router
    .get('/status', function(req, res){
        if (!req.isAuthenticated()) {
            res.status(200).json({
                status: false
            });
            return;
        } else {
            res.status(200).json({
                status: true,
                user: {
                    username: req.user.username,
                    email: req.user.email,
                    id: req.user._id,
                    role: req.user.role
                }
            });
        }
    })
    .get('/logout', function(req, res) {
        req.logout();
        res.status(200).json({
            status: 'Bye!'
        });
    })
    .post('/login', passport.authenticate('local'), function(req, res){
        res.status(200).json({
            status: 'Login successful',
            user: {
                username: req.user.username,
                email: req.user.email,
                id: req.user._id,
                role: req.user.role
            }
        });
    })
    .post('/register', function(req, res) {
        if (checkCorrectBody(req.body)) {
            res.send('Pass correct body params');
        }
        User.register(new User({
            username: req.body.username,
            email: req.body.email
        }), req.body.password, onRegisterCb);

        function onRegisterCb(error, user) {
            if (error) {
                res.send(error);
                return;
            }
            passport.authenticate('local')(req, res, function () {
                res.status(200).json({
                    status: 'Registered',
                    user: {
                        username: req.user.username,
                        email: req.user.email,
                        id: req.user._id,
                        role: req.user.role
                    }
                });
            });
        }
    });

function checkCorrectBody(body) {
    var username = typeof body.username !== 'string';
    var email = typeof body.email !== 'string';
    var password = typeof body.password !== 'string';
    return username && email && password;
}
module.exports = router;
