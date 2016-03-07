var server = require('../index'),
    db = require('./../../db'),
    expressSession = require('express-session'),
    passport = require('passport'),
    localStrategy = require('passport-local' ).Strategy;

var auth = {
  init: init
};

var isInited = false;

module.exports = auth;

function init() {
  if (isInited) {
    return;
  }
  isInited = true;
  server.app.use(expressSession({
    //generate random string for secret
    secret: Math.random().toString(36).replace(/[^a-z]+/g, ''),
    cookie: {
      path: '/',
      httpOnly: true,
      secure: false
    }
  }));
  server.app.use(passport.initialize());
  server.app.use(passport.session());
  // Db related
  server.app.post('/login', onLogin);
  server.app.post('/users', createUser);
  server.app.get('/users', getUsers);
  server.app.get('/users/:id' , getUserById);
  server.app.delete('/users/:id' , deleteUserById);
  

  // define default 'local' strategy, used for login
  passport.use(new localStrategy(loginCallback));

  // define 'signup' strategy, used for login
  passport.use('signup', new localStrategy({passReqToCallback : true}, signupCallback));

  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser); 
}

function getUsers(req, res){
  db.models.User.find({}, function(err, users){
   res.send(users); 
  })
}

function deleteUserById(req, res){
  var id = req.params.id;
  db.models.User.remove({ _id: id }, function (err) {
      if(err) {
          res.send(err);
      } else {
          console.log('Deleting user: ' + id);
          res.send('Success');
      }
  });
}

function getUserById(req, res){
  var id = req.params.id;
  console.log('User has id: ' + id);
  db.models.User.find({ _id: id }, function (err, user) {
      if(err) {
          res.send(err);
      } else {
          res.send(user);
      }
  });
}

function onLogin(req, res) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return res.status(500).json({
        err:err,
        sessionId: req.session.id
      });
    }
    if (!user) {
      return res.status(401).json({
        err: info,
        sessionId: req.session.id
        });
    }
    req.login(user,  function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not login user',
          sessionId: req.session.id
        });
      }
      res.status(200).json({
        user: user,
        sessionId: req.session.id
      });
    });
  })(req, res);

}

function createUser(req, res) {
  var errors = formValidation(req, res);
  if (errors) {
    res.status(400).json({
          err: errors.map(function(err){return err.msg}).join("; "),
          sessionId: req.session.id
        });
    return;
  }
  passport.authenticate('signup', function(err, user, info) {
    if (err) {
      return res.status(500).json({
        err:err,
        sessionId: req.session.id
      });
    }
    if (!user) {
      return res.status(400).json({
        err: info,
        sessionId: req.session.id
        });
    }
    req.login(user,  function(err) {
      if (err) {
        return res.json( {
          err: 'Could not login user',
          sessionId: req.session.id
        });
      }
      res.status(201).json({
        user: user,
        sessionId: req.session.id
      });
    });
  })(req, res);
}

function loginCallback(username, password, authCheckDone) {
      db.models.User.findOne({ username: username }, function(err, user) {
        if (err) return authCheckDone(err);
        if (!user) return authCheckDone(null, false, 'No such user');
        if (password != user.password) return authCheckDone(null, false, 'Incorrect password.');

        authCheckDone(null, user);
        
      });
    }
// the 'verify' function for 'signup' strategy
function signupCallback (req, username, password, authCheckDone) {
  db.models.User.findOne({username: username}, function(err, user) {
    if (err) return authCheckDone(err);
    if (user) {
      return authCheckDone(null,
        false,
        'User ' + username + ' already exists.');
    }
    // it's safe, now create the user account
    var user = req.body;
    console.log('uswer', req.body);
    new db.models.User(user).save( function(err, user) {
      if (err) return authCheckDone(err);
      if (!user) return authCheckDone('Failed on create user :(');
      authCheckDone(null, user);
    });

  });
}
function formValidation(req, res){
  req.checkBody('username', 'Username can not be empty').notEmpty();
  req.assert('password', 'Mininum 8 characters required').len(8);
  req.checkBody("email", "Enter a valid email address").isEmail();
  return req.validationErrors();

}
function deserializeUser(id, done) {
    db.models.User.findById(id, function (err, user) {
      done(err, user);
    });
  }

function serializeUser(user, done) {
  done(null, user.id);
}