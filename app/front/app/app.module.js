(function() {
  'use strict';

  angular
    .module('app', [
      'utils.exceptionHandler',
      'utils.interceptor',
      'app.main',
      'app.404',
      'app.dbtools',
      'app.auth',
      'app.map'
    ]);

})();
