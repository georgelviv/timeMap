(function() {
  'use strict';

  angular
    .module('app.auth')
    .directive('authForm', authForm)
    .controller('AuthController', AuthController);

  function authForm() {
    var directive = {
      controller: AuthController,
      controllerAs: 'auth',
      templateUrl: 'directives/auth/auth.tpl',
      restrict: 'E',
      scope: {
        isNew: '@'
      }
    };

    return directive;
  }

  function AuthController($http, loggerApi, authService) {
    var auth = this;
    auth.createUser = createUser;
    auth.loginUser = loginUser;
    auth.passportMatch = passportMatch;
    auth.resetForm = resetForm;
    init();

    function createUser(form) {
      var user = {
        username: auth.registration.username,
        password: auth.registration.password,
        email: auth.registration.email
      };

      authService.register(user).then(onSuccess, onError);

      function onSuccess(data) {
        resetForm(form);
        loggerApi.success('User successfully registered.');
      }
      function onError(error) {
        if (error.message) {
          loggerApi.error(error.message);
        } else {
          loggerApi.error('Registration failed.');
        }
      }
    }

    function loginUser(form) {
      authService.login(auth.login.username, auth.login.password).
      then(onSuccess, onError);

      function onSuccess(data) {
        resetForm(form);
        loggerApi.success('Login succeeded.');
      }

      function onError(error) {
        if (error === 'Unauthorized') {
          loggerApi.error('Wrong username or password.');
          return;
        }
        loggerApi.error('Error on login.');
      }
    }

    function init() {
      auth.currentState = 'login';
    }

    function passportMatch() {
      if (auth.registration) {
        return auth.registration.password === auth.registration.confirmPassword;
      }
    }

    function resetForm(form) {
      form.$setPristine();
      form.$setUntouched();
    }
  }
})();
