(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthCtrl', AuthController);

  function AuthController(loggerApi) {
    var vm = this;

    activate();

    function activate() {
      loggerApi.info('app.auth activated');
    }

  }
})();
