(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainCtrl', MainController);

  function MainController(eventsList) {
    var vm = this;
    vm.sidebarState = null;
    init();

    function init() {
      eventsList.get();
    }
  }

})();
