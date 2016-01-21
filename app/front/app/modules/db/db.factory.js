(function() {
  'use strict';

  angular
    .module('app.db')
    .factory('db', dbApi);

  function dbApi(DB_REST_URI, $http) {
      var db = {
        clean: clean
      };

      return db;

      function clean(cbOnSuccess, cbOnError) {
        $http.delete(DB_REST_URI).then(onSuccess, onError);

        function onSuccess(response) {
          var data = response && response.data || response;
          if (cbOnSuccess) {
            cbOnSuccess(data);
          }
        }

        function onError(response) {
          var msg = errorMsg(response);
          if (cbOnError) {
            cbOnError(msg);
          }
          console.log('Error on db clean, ', msg);
        }
      }

      function errorMsg (err) {
        var msg = '';
        if (angular.isString(err)) {
          return err;
        }
        if (err.status) {
          msg += err.status + ' ';
        }
        if (err.statusText) {
          msg += err.statusText + ' ';
        }
        if (msg.length) {
          msg = msg.slice(0, -1);
        }
        return msg;
      }

    }
})();
