(function() {
  'use strict';

  angular
    .module('app.db')
    .config(dbRouter);

  function dbRouter($routeProvider) {
    $routeProvider.
      when('/db', {
        templateUrl: 'core/db/db.tpl',
        controller: 'dbCtrl as vm',
        title: 'DB tools'
      });
  }

})();
