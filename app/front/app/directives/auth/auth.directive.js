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

      function createUser() {
        var user = {
          username: vm.registration.username,
          password: vm.registration.password,
          email: vm.registration.email
        };

        authService.register(user).then(onSuccess, onError);

        function onSuccess(data) {
          resetForm(vm.registrationForm, vm.registration);
          loggerApi.success('User successfully registered');
        }
        function onError(error) {
          if (error.message) {
            loggerApi.error(error.message);
          } else {
            loggerApi.error('Registration failed');
          }
        }
      }

      function loginUser() {
        authService.login(vm.login.username, vm.login.password).
        then(onSuccess, onError);

        function onSuccess(data) {
          resetForm(vm.login, vm.login);
          loggerApi.success('Login succeeded');
        }

        function onError(error) {
          loggerApi.error('Wrong username or password');
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

      function resetForm(form, model) {
        form.$setPristine();
        form.$setUntouched();
        for (var key in model) {
          if (model.hasOwnProperty(key) && key.indexOf('$') !== 0) {
            model[key] = '';
          }
        }
      }
    }
  }
})();
