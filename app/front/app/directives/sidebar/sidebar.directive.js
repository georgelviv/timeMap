(function() {
  'use strict';

  angular
    .module('app.sidebar')
    .directive('sidebar', sidebarDirective);

  function sidebarDirective() {
    var directive = {
      controller: sidebarCtrl,
      controllerAs: 'vm',
      templateUrl: 'directives/sidebar/sidebar.tpl',
      restrict: 'E'
    };

    return directive;
  }

  function sidebarCtrl() {
    var vm = this;

    vm.addEvent = addEvent;
    vm.isAddEvent = false;

    function addEvent() {
      vm.isAddEvent = !vm.isAddEvent;
    }
  }

})();
