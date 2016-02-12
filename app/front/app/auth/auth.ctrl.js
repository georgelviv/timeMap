(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthCtrl', AuthController);

  function AuthController(loggerApi, $http) {
    var vm = this;
    vm.createUser = createUser;
    vm.loginUser = loginUser;
    
    activate();

    function createUser() {
      vm.method = 'POST';
      vm.url = '/users';
      vm.user = {
        username: $('[ng-model="user.username"]').val(),
        password: $('[ng-model="user.password"]').val()
      };
      $http({method: vm.method, url: vm.url, data: vm.user}).
        then(function successCallback(response) {
          loggerApi.success('User successfully registered');
        }, function errorCallback(response){
          loggerApi.error('Registration failed');
        });
    }

    function loginUser() {
      vm.method = 'POST';
      vm.url = '/login';
      vm.user = {
        username: $('[ng-model="user.username"]').val(),
        password: $('[ng-model="user.password"]').val()
      };
      $http({method: vm.method, url: vm.url, data: vm.user}).
        then(function successCallback(response) {
          loggerApi.success('Login succeeded');
        }, function errorCallback(response){
          loggerApi.error('Login failed');
        });
    }   

    function activate() {
      loggerApi.info('app.auth activated');
    }

  }
})();
