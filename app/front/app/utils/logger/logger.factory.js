(function() {
  'use strict';

  angular
    .module('utils.logger')
    .factory('loggerApi', loggerApi);

  function loggerApi() {
      var service = {
        info: info,
        error: error,
        success: success,
        warning: warning
      };

      toastr.options.timeOut = 10000;

      return service;

      function success() {
        toastr.success.apply({}, arguments);
      }

      function warning() {
        toastr.warning.apply({}, arguments);
      }

      function error() {
        toastr.error.apply({}, arguments);
      }

      function info() {
        toastr.info.apply({}, arguments);
      }
    }
})();
