(function() {
  'use strict';

  angular
    .module('utils.logger')
    .factory('logger', logger);

  function logger() {
      var service = {
        info: info
      };

      toastr.options.timeOut = 3000;

      return service;

      function info() {
        toastr.info.apply({}, arguments);
      }
    }
})();
