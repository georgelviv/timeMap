(function() {
  'use strict';

  angular
    .module('app', [
      'app.main',
      'app.404',
      'app.db',
      'app.auth',
      'utils.exceptionHandler',
      'utils.interceptor'
    ]);

})();
