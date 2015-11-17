(function() {
  'use strict';

  angular
    .module('app')
    .run(AppCtrl);

  function AppCtrl($rootScope) {
    $rootScope.$on('$routeChangeSuccess', onRouteChangeSuccess);

    function onRouteChangeSuccess(event, current, previous) {
      $rootScope.pageTitle = current.title;
    }
  }
})();
