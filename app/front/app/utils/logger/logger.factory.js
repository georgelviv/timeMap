(function() {
  'use strict';

  angular
    .module('utils.logger')
    .factory('loggerApi', loggerApi);

  function loggerApi() {
      var service = {
        info: info,
        error: error,
        success: success
      };

      toastr.options.timeOut = 3000;

      return service;

      function success() {
        toastr.success.apply({}, arguments);
      }

      function error() {
        toastr.error.apply({}, arguments);
      }

      function info() {
        toastr.info.apply({}, arguments);
      }
    }
})();
