(function() {
  'use strict';

  angular
    .module('app', [
      'app.main',
      'app.auth',
      'utils.exceptionHandler',
      'utils.interceptor'
    ]);

})();
