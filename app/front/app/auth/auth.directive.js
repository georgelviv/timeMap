(function() {
  'use strict';

  angular
    .module('app.auth')
    .directive('authForm', authForm);

  function authForm() {
    var directive = {
      controller: authController,
      controllerAs: 'vm',
      templateUrl: 'auth/auth.tpl',
      restrict: 'E',
      scope: {
        isNew: '@'
      }
    };

    return directive;

    function authController(loggerApi, $http) {
      var vm = this;
      vm.createUser = createUser;
      vm.loginUser = loginUser;
      vm.passportMatch = passportMatch;
      vm.resetForm = resetForm;
      init();

      function createUser() {
        vm.method = 'POST';
        vm.url = '/users';
        vm.user = {
          username: vm.registration.username,
          password: vm.registration.password,
          email: vm.registration.email
        };
        $http({method: vm.method, url: vm.url, data: vm.user}).
          then(function successCallback(response) {
            resetForm(vm.registrationForm, vm.registration);
            loggerApi.success('User successfully registered');
          }, function errorCallback(response) {
            loggerApi.error('Registration failed');
          });
      }

      function loginUser() {
        vm.method = 'POST';
        vm.url = '/login';
        vm.user = {
          username: vm.login.username,
          password: vm.login.password
        };

        $http({method: vm.method, url: vm.url, data: vm.user}).
          then(function successCallback(response) {
            resetForm(vm.login, vm.login);
            loggerApi.success('Login succeeded');
          }, function errorCallback(response) {
            loggerApi.error('Login failed');
          });
      }
      function init() {
        loggerApi.info('app.auth activated');
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
