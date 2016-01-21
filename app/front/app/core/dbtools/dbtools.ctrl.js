(function() {
  'use strict';

  angular
    .module('app.dbtools')
    .controller('dbtoolsCtrl', dbtoolsController);

  function dbtoolsController(db, loggerApi, $mdDialog) {
    var vm = this;

    vm.cleanDB = cleanConfirm;

    function cleanConfirm(ev) {
      var confirmModal = $mdDialog.confirm()
              .title('Are you sure, you want to clean db?')
              .textContent('Cleaning of database will delete all stored data.')
              .ok('Delete')
              .ariaLabel('Clean DB confirm modal.')
              .targetEvent(ev)
              .cancel('Cancel');
      $mdDialog.show(confirmModal).then(onConfirm);

      function onConfirm() {
        cleanDB();
      }
    }

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
