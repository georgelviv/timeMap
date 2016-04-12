(function() {
  'use strict';

  angular
    .module('app.authService')
    .constant('AUTH_API', {
      'login': '/user/login',
      'logout': '/user/logout',
      'register': '/user/register',
      'status': '/user/status'
    })
    .constant('AUTH_EVENTS', {
      'login': 'app-auth-login',
      'logout': 'app-auth-logout'
    });

})();
