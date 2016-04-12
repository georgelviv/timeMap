(function() {
  'use strict';

  angular
    .module('app')
    .run(AppRun);

  function AppRun($rootScope, authService) {
    $rootScope.$on('$routeChangeSuccess', onRouteChangeSuccess);
    $rootScope.$on('$routeChangeStart', onRouteChangeStart);

    function onRouteChangeSuccess(event, current, previous) {
      $rootScope.pageTitle = current.title;
    }

    function onRouteChangeStart() {
      if (authService.getUser() === null) {
        authService.getUserStatus();
      }
    }
  }
})();
