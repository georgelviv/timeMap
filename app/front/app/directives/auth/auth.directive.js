(function() {
  'use strict';

  angular
    .module('app.auth')
    .directive('authForm', authForm);

  function authForm($http, loggerApi, authService) {
    var directive = {
      controller: authController,
      controllerAs: 'vm',
      templateUrl: 'directives/auth/auth.tpl',
      restrict: 'E',
      scope: {
        isNew: '@'
      }
    };

    return directive;

    function authController() {
      var vm = this;
      vm.createUser = createUser;
      vm.loginUser = loginUser;
      vm.passportMatch = passportMatch;
      vm.resetForm = resetForm;
      init();

      function createUser(form) {
        var user = {
          username: vm.registration.username,
          password: vm.registration.password,
          email: vm.registration.email
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
        authService.login(vm.login.username, vm.login.password).
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
        vm.currentState = 'login';
      }

      function passportMatch() {
        if (vm.registration) {
          return vm.registration.password === vm.registration.confirmPassword;
        }
      }

      function resetForm(form) {
        form.$setPristine();
        form.$setUntouched();
      }
    }
  }
})();
