(function() {
  'use strict';

  angular
    .module('app.db.utils')
    .factory('dbUtils', dbUtilsApi);

  function dbUtilsApi(loggerApi) {
      var dbUtils = {
        onSuccess: onSuccess,
        onError: onError
      };

      return dbUtils;

      function onSuccess(cbOnSuccess, response) {
        var data = response && response.data || response;
        if (cbOnSuccess) {
          cbOnSuccess(data);
        }
      }

      function onError(prefixMsg, cbOnError, response) {
        var msg = errorMsg(response);
        if (cbOnError) {
          cbOnError(msg);
        } else {
          loggerApi.error(prefixMsg);
        }
      }

      function errorMsg(err) {
        var msg = '';
        if (angular.isString(err)) {
          return err;
        }
        if (err.status) {
          msg += err.status + ': ';
        }
        if (err.data) {
          if (err.data.message) {
            msg += err.data.message + ' ';
          } else {
            msg += err.data + ' ';
          }
        } else {
          if (err.statusText) {
            msg += err.statusText + ' ';
          }
        }
        if (msg.length) {
          msg = msg.slice(0, -1);
        }
        return msg;
      }

    }
})();
