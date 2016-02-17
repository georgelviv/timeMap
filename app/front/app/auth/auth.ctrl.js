(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('registrController', registrController);
  
  function registrController(loggerApi, $http){
    var vm = this;
    vm.createUser = createUser;
    vm.loginUser = loginUser;
    vm.passportValidation = passportValidation;
    
    activate();

    function createUser(){
      vm.method = 'POST';
      vm.url = '/users';
      vm.user = {
        username: vm.registration.username,
        password: vm.registration.password
      };
      $http({method: vm.method, url: vm.url, data: vm.user}).
        then(function successCallback(response) {
          loggerApi.success('User successfully registered');
        }, function errorCallback(response){
          loggerApi.error('Registration failed');
        });
    }

    function loginUser(){
      vm.method = 'POST';
      vm.url = '/login';
      vm.user = {
        username: vm.registration.username,
        password: vm.registration.password
      };
      $http({method: vm.method, url: vm.url, data: vm.user}).
        then(function successCallback(response) {
          loggerApi.success('Login succeeded');
        }, function errorCallback(response){
          loggerApi.error('Login failed');
        });
    }   

    function activate(){
      loggerApi.info('app.auth activated');
    }

    function passportValidation(){
      console.log('passportValidation');
      if(vm.registration.password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)){
        return true;
      }  else {
        return false;
      }
    }

  }
})();
