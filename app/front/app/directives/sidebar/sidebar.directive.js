(function() {
  'use strict';

  angular
    .module('app.sidebar')
    .directive('sidebar', sidebarDirective);

  function sidebarDirective() {
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
  }

  function sidebarCtrl($scope, $mdSidenav) {
    $scope.addEvent = addEvent;
    $scope.isAddEvent = false;
    $scope.closeSideBar = closeSideBar;

    function addEvent() {
      $scope.isAddEvent = !$scope.isAddEvent;
    }

    function closeSideBar() {
      $mdSidenav($scope.sidebarId).close();
    }

  }

})();
