(function() {
  'use strict';

  angular
    .module('app.map')
    .config(mapRouter);

  function mapRouter($routeProvider) {
    $routeProvider.
      when('/map', {
        templateUrl: 'modules/map/map.tpl',
        controller: 'MapCtrl as vm',
        title: 'Map'
      });
  }

})();
