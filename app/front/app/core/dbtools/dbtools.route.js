(function() {
  'use strict';

  angular
    .module('app.dbtools')
    .config(dbtoolsRouter);

  function dbtoolsRouter($routeProvider) {
    $routeProvider.
      when('/db-tools', {
        templateUrl: 'core/dbtools/dbtools.tpl',
        controller: 'dbtoolsCtrl as vm',
        title: 'DB tools'
      });
  }

})();
