(function() {
  'use strict';

  angular
    .module('app.eventList')
    .directive('eventList', eventListDirective);

  function eventListDirective($rootScope, eventsService, sidebarFactory) {
    var directive = {
      restrict: 'E',
      replace: true,
      controller: eventListCtrl,
      controllerAs: 'vm',
      templateUrl: 'directives/eventList/eventList.tpl'
    };

    return directive;

    function eventListCtrl() {
      var vm = this;
      var leftBtn = $('.events-arrow-left');
      var rightBtn = $('.events-arrow-right');
      vm.blockNum = 0;
      vm.blockSize = 10;
      vm.startIndex = 0;
      vm.endIndex = 0;
      $rootScope.$on('app-events-fetched', function() {
        vm.allEvents = eventsService.getAllEvents();
        vm.updateEvents();
      });

      vm.updateEvents = function() {
        var events = [];
        if (vm.blockNum === 0) {
          vm.showNext();
        } else {
          vm.events = vm.allEvents.slice(vm.startIndex, vm.endIndex);
          if (vm.events.length === 0) {
            vm.showPrev();
          } else if ((vm.allEvents.length / vm.blockNum) - vm.blockSize > 0) {
            vm.showNext();
          }
        }
      };

      vm.showNext = function() {
        vm.startIndex = vm.blockNum * vm.blockSize;
        vm.endIndex = vm.startIndex + vm.blockSize;
        vm.events = vm.allEvents.slice(vm.startIndex, vm.endIndex);
        vm.blockNum += 1;
        vm.checkRightBtn(rightBtn, vm.events, vm.allEvents);
        vm.checkLeftBtn(leftBtn);
      };

      vm.showPrev = function() {
        vm.startIndex = (vm.blockNum - 2) * vm.blockSize;
        vm.endIndex = vm.startIndex + vm.blockSize;
        vm.events = vm.allEvents.slice(vm.startIndex, vm.endIndex);
        vm.blockNum -= 1;
        vm.checkLeftBtn(leftBtn);
        vm.checkRightBtn(rightBtn, vm.events, vm.allEvents);
      };

      vm.toogleBtn = function(button, state) {
        $(button).prop('disabled', state);
      };

      vm.checkLeftBtn = function(button) {
        if (vm.blockNum === 1) {
          vm.toogleBtn(button, true);
        } else {
          vm.toogleBtn(button, false);
        }
      };

      vm.checkRightBtn = function(button, curEvents, allEvents) {
        var lastCurrentEvent = curEvents[curEvents.length - 1];
        var lastEvent = allEvents[allEvents.length - 1];
        if (lastCurrentEvent === lastEvent) {
          vm.toogleBtn(button, true);
        } else {
          vm.toogleBtn(button, false);
        }
      };

      vm.showSideBar = function(event, state) {
        sidebarFactory.setState(state, event);
      };

      vm.deleteEvent = function(e, id) {
        e.stopPropagation();
        eventsService.deleteEvent(id);
      };
    }
  }
})();
