var server = require('../index'),
    db = require('./../../db'),
    expressSession = require('express-session'),
    passport = require('passport'),
    localStrategy = require('passport-local' ).Strategy;

var security = {
  init: init
};

var isInited = false;

module.exports = security;

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

function onLogin(req, res) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return res.json(500, {
        err:err,
        sessionId: req.session.id
      });
    }
    if (!user) {
      return res.json( 401,
        {
        err: info,
        sessionId: req.session.id
        });
    }
    req.login(user,  function(err) {
      if (err) {
        return res.json(500, {
          err: 'Could not login user',
          sessionId: req.session.id
        });
      }
      res.json(200, {
        user: user,
        sessionId: req.session.id
      });
    });
  })(req, res);

}

function createUser(req, res) {
  passport.authenticate('signup', function(err, user, info) {
    if (err) {
      return res.json(500, {
        err:err,
        sessionId: req.session.id
      });
    }
    if (!user) {
      return res.json( 400,
        {
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
      res.json(201, {
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
function signupCallback (req, password, username, authCheckDone) {
  db.models.User.findOne({username: req.param('username')}, function(err, user) {
    if (err) return authCheckDone(err);
    if (user) {
      return authCheckDone(null,
        false,
        'User ' + req.param('username') + ' already exists.');
    }
    // it's safe, now create the user account
    var user = {
      username: req.param('username' ) || 'johndoe',
      password: req.param('password') || 'always42',
    };
    new db.models.User(user).save( function(err, user) {
      if (err) return authCheckDone(err);
      if (!user) return authCheckDone('Failed on create user :(');
      authCheckDone(null, user);
    });

  });
}

function deserializeUser(id, done) {
    db.models.User.findById(id, function (err, user) {
      done(err, user);
    });
  }

function serializeUser(user, done) {
  done(null, user.id);
}