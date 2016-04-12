(function() {
  'use strict';

  angular
    .module('app')
    .run(AppRun);

  function AppRun($rootScope, eventsService) {
    $rootScope.$on('$routeChangeSuccess', onRouteChangeSuccess);
    $rootScope.$on('$routeChangeStart', onRouteChangeStart);

    function onRouteChangeSuccess(event, current, previous) {
      $rootScope.pageTitle = current.title;
    }
    function onRouteChangeStart(event, current, previous) {
      eventsService.fetchEvents();
    }
  }
})();
