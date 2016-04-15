(function() {
  'use strict';

  angular
    .module('app.event')
    .directive('event', eventDirective);

  function eventDirective(eventsList, eventsService) {
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

    function eventCtrl($scope, loggerApi) {
      var vm = this;

      init();

      function init() {
        vm.isNew = $scope.isNew || false;
        vm.submitEvent = submitEvent;

        if (vm.isNew) {
          setEditDefault();
          vm.currentState = 'edit';
        } else {
          vm.currentState = 'preview';
        }
      }

      function setEditDefault() {
        vm.editEvent = {
          date: new Date(),
          coordinates: {
            latitude: '48.379433',
            longitude: '31.165580'
          },
          author: 0,
          tags: [],
          description: '',
          title: ''
        };
      }

      function resetForm() {
        vm.form.$setPristine();
        vm.form.$setUntouched();
      }

      function submitEvent() {
        eventsService.addEvent(vm.editEvent).then(function() {
          loggerApi.success('Event posted');
          setEditDefault();
          resetForm();
        });
      }

    }
  }

})();
