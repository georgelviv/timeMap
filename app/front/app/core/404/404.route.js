(function() {
  'use strict';

  angular
    .module('app.404')
    .config(app404Router);

  function app404Router($routeProvider) {
    $routeProvider.
      when('/404', {
        templateUrl: 'core/404/404.tpl',
        controller: '404Ctrl as vm',
        title: '404'
      }).otherwise({
        redirectTo: '/404'
      });
  }

})();
