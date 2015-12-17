(function() {
  'use strict';

  angular
    .module('app', [
      'app.main',
      'app.404',
      'app.auth',
      'utils.exceptionHandler',
      'utils.interceptor'
    ]);

})();
