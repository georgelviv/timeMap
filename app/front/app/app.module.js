(function() {
  'use strict';

  angular
    .module('app', [
      'utils.exceptionHandler',
      'utils.interceptor',
      'app.main',
      'app.404',
      'app.auth',
      'app.map',
      'app.eventsApi'
    ]);

})();
