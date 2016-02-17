(function() {
  'use strict';

  angular
    .module('app.auth')
    .directive('registrDirective', registrDirective);

  function registrDirective() {
    var directive = {
      controller: registrController,
      controllerAs: 'vm',
      templateUrl: 'registr.tpl',
      restrict: 'E',
    };

    return directive;
  }
})();