(function() {
  'use strict';

  angular
    .module('app.event')
    .directive('event', eventDirective);

  function eventDirective() {
    var directive = {
      controller: eventCtrl,
      controllerAs: 'vm',
      templateUrl: 'directives/event/event.tpl',
      restrict: 'E',
      scope: {
          isNew: '@'
      }
    };

    return directive;

    function eventCtrl($scope) {
      var vm = this;

      init();

      function init() {
        vm.isNew = $scope.isNew || false;
        if (vm.isNew) {
          onEventNew();
        } else {
          vm.currentState = 'preview';
        }
      }

      function onEventNew() {
        vm.event = {
          form: {},
          edit: {
            date: new Date(),
            coordinates: {
              latitude: '48.379433',
              longitude: '31.165580'
            }
          },
        };
        vm.currentState = 'edit';
      }
    }
  }

})();
