(function() {
  'use strict';

  angular
    .module('app.eventList')
    .directive('eventList', eventListDirective);

  function eventListDirective($rootScope, eventsService) {
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

      $rootScope.$on('app-events-fetched', function() {
        vm.allEvents = eventsService.getAllEvents();
        vm.showNext();
      });

      vm.blockNum = 0;
      vm.blockSize = 10;

      vm.showNext = function() {
        var startIndex = vm.blockNum * vm.blockSize;
        var endIndex = startIndex + vm.blockSize;
        vm.events = vm.allEvents.slice(startIndex, endIndex);
        vm.blockNum += 1;
        vm.checkRightBtn(rightBtn, vm.events, vm.allEvents);
        vm.checkLeftBtn(leftBtn);
      };

      vm.showPrev = function() {
        var startIndex = (vm.blockNum - 2) * vm.blockSize;
        var endIndex = startIndex + vm.blockSize;
        vm.events = vm.allEvents.slice(startIndex, endIndex);
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
      vm.deleteEvent = function(id) {
        eventsService.deleteEvent(id);
      };
    }
  }
})();
