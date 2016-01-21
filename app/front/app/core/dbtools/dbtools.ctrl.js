(function() {
  'use strict';

  angular
    .module('app.dbtools')
    .controller('dbtoolsCtrl', dbtoolsController);

  function dbtoolsController(db, loggerApi) {
    var vm = this;

    vm.cleanDB = cleanDB;

    function cleanDB() {
      db.clean(onSuccess, onError);

      function onSuccess() {
        loggerApi.success('DB has been cleaned');
      }

      function onError(error) {
        loggerApi.error(error, 'DB Error: ');
      }

    }
  }
})();
