(function() {
  'use strict';

  angular
    .module('app.sidebar')
    .directive('showSideBar', showSideBarDirective)
    .directive('sidebar', sidebarDirective);

  function sidebarDirective() {
    var directive = {
      restrict: 'E',
      controller: sidebarCtrl,
      controllerAs: 'vm',
      templateUrl: 'directives/sidebar/sidebar.tpl'
    };

    return directive;
  }
  var sidebarContext = {};
  function sidebarCtrl($mdSidenav) {
    var vm = this;
    vm.context = sidebarContext;
    vm.addEvent = addEvent;
    vm.isAddEvent = false;
    vm.closeSideBar = closeSideBar;

    function addEvent() {
      vm.isAddEvent = !vm.isAddEvent;
    }

    function closeSideBar() {
      $mdSidenav('right').close();
    }

  }

  function showSideBarDirective() {
    var directive = {
      restrict: 'A',
      controller: showSideBarCtrl,
      link: function(scope, element, attrs) {
        element.bind('click',function() {
          scope.showSideBar(attrs.showSideBar);
        });
      }
    };
    return directive;
  }

  function showSideBarCtrl($scope, $mdSidenav) {
    $scope.showSideBar = function(state) {
      buildToggler('right');
      sidebarContext.state = state;
      function buildToggler(navID) {
        $mdSidenav(navID).toggle();
      }
    };
  }

})();
