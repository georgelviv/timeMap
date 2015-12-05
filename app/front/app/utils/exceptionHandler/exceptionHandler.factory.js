(function() {
  'use strict';

  angular
    .module('utils.exceptionHandler')
    .factory('$exceptionHandler', exceptionHandler);

  function exceptionHandler(loggerApi, $injector) {
      return handler;

      function handler(exception, cause) {
        var $rootScope = $injector.get('$rootScope');
        $rootScope.errors = $rootScope.errors || [];
        $rootScope.errors.push({
          message: exception.message,
          exception: exception,
          cause: cause
        });

        if (exception.message) {
          loggerApi.error(exception.message, 'Error');
        }
        console.error('App Error:', exception, cause);
      }
    }
})();
