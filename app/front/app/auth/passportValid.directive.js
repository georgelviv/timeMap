(function() {
  'use strict';

  angular
    .module('app.auth')
    .directive('passportValid', passportValidation);

  function passportValidation() {
    var directive = {
      restrict: 'A',
      require: 'ngModel',
      link: link
    };

    return directive;

    function link(ngModel) {
       ngModel.$validators.passportValid= function(){
        if(vm.registration.password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)){
          return true;
        }  else {
          return false;
        }
       }
    }
  }

})();