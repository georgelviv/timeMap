(function() {
  'use strict';

  angular
    .module('app.auth')
    .config(authRouter);

  function authRouter($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'auth/auth.tpl',
        controller: 'AuthCtrl as vm',
        title: 'Login'
      });
  }

})();
