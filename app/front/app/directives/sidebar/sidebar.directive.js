(function() {
  'use strict';

  angular
    .module('app.sidebar')
    .directive('sidebar', sidebarDirective);

  function sidebarDirective($rootScope, authService, AUTH_EVENTS) {
    var directive = {
      restrict: 'E',
      controller: sidebarCtrl,
      scope: {
        state: '=state',
        sidebarId: '=sidebarId'
      },
      controllerAs: 'vm',
      templateUrl: 'directives/sidebar/sidebar.tpl'
    };

    return directive;

    function sidebarCtrl($scope, $mdSidenav) {
      var sideBarID = 'right';
      $scope.addEvent = addEvent;
      $scope.isAddEvent = false;
      $scope.closeSideBar = closeSideBar;

      $rootScope.$on(AUTH_EVENTS.login, onUserLogin);

      function addEvent() {
        $scope.isAddEvent = !$scope.isAddEvent;
      }

      function onUserLogin() {
        closeSideBar();
      }

      function closeSideBar() {
        $mdSidenav(sideBarID).close();
      }

    }
  }

})();
