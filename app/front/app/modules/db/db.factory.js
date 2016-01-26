(function() {
  'use strict';

  angular
    .module('app.db')
    .factory('db', dbApi);

  function dbApi(DB_REST_URI, dbUtils, dbEvents, $http) {
      var db = {
        clean: clean,
        events: dbEvents
      };

      return db;

      function clean(cbOnSuccess, cbOnError) {
        $http.delete(DB_REST_URI).then(
          dbUtils.onSuccess.bind({}, cbOnSuccess),
          dbUtils.onError.bind({}, 'Error on db clean, ', cbOnError)
        );
      }

    }
})();
