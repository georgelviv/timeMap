(function() {
  'use strict';

  angular
    .module('app.sidebar')
    .factory('sidebarFactory', sidebarFactory);

  function sidebarFactory($rootScope) {
    return {
      setState: setState
    };

    function setState(value, item) {
      console.log(value);
      console.log(item);
      $rootScope.$emit('sidebar.change.state', value, item);
    }
  }
})();
