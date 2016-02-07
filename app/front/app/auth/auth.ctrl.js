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
      vm.url = 'http://localhost:3000/users';
      vm.user = {
        username: $('[ng-model="user.username"]').val(),
        password: $('[ng-model="user.password"]').val()
      };
      console.log('User is',vm.user);
      $http({method: vm.method, url: vm.url, data: vm.user}).
        then(function(response) {
          vm.status = response.status;
            console.log('status',vm.status);
          vm.response = response;
            console.log('response',vm.response);
        });
    }

    function loginUser() {
      vm.method = 'POST';
      vm.url = 'http://localhost:3000/login';
      vm.user = {
        username: $('[ng-model="user.username"]').val(),
        password: $('[ng-model="user.password"]').val()
      };
      console.log('User is',vm.user);
      $http({method: vm.method, url: vm.url, data: vm.user}).
        then(function(response) {
          vm.status = response.status;
            console.log('status',vm.status);
          vm.response = response;
            console.log('response',vm.response);
        });
    }   

    function activate() {
      loggerApi.info('app.auth activated');
    }

  }
})();
