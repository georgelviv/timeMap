(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainCtrl', MainController);

  function MainController($rootScope, $mdSidenav, AUTH_EVENTS, authService) {
    var vm = this;
    var sideBarID = 'right';
    vm.sidebarState = null;
    vm.showSideBar = showSideBar;

    vm.isLogged = authService.isLoggedIn();

    $rootScope.$on(AUTH_EVENTS.login, onUserLogin);
    $rootScope.$on(AUTH_EVENTS.logout, onUserLogout);

    function onUserLogin() {
      vm.isLogged = authService.isLoggedIn();
    }

    function onUserLogout() {
      vm.isLogged = null;
    }

    function showSideBar(state) {
      vm.sidebarState = state;
      $mdSidenav(sideBarID).toggle();
    }
  }

})();
