(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainCtrl', MainController);

  function MainController(eventsList, $mdSidenav) {
    var vm = this;
    vm.sideBarID = 'right';
    vm.showSideBar = showSideBar;
    init();

    function showSideBar(state) {
      vm.sidebarState = state;
      $mdSidenav(vm.sideBarID).toggle();
    }

    function init() {
      eventsList.get();
    }
  }

})();
