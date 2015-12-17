(function() {
  'use strict';

  angular
    .module('app.404')
    .run(Main4040Run);

  function Main4040Run($rootScope) {
    $rootScope.$on('$locationChangeSuccess', onLocationChange);
    $rootScope.previousUrl = $rootScope.previousUrl || '';

    function onLocationChange(event, newUrl, oldUrl) {
      $rootScope.previousUrl = oldUrl;
    }
  }
})();
