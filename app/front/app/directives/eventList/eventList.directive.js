(function() {
  'use strict';

  angular
    .module('app.eventList')
    .directive('eventList', eventListDirective);

  function eventListDirective() {
    var directive = {
      restrict: 'E',
      replace: true,
      controller: eventListCtrl,
      controllerAs: 'vm',
      templateUrl: 'directives/eventList/eventList.tpl'
    };

    return directive;
  }

  function eventListCtrl($scope, eventsList, dbEvents) {
    var vm = this;
    var leftBtn = $('.events-arrow-left');
    var rightBtn = $('.events-arrow-right');

    function getEvents(setData) {
      dbEvents.get(success);

      function success(data) {
        setData(data);
      }
    }

    function getAllEvents(data) {
      vm.allEvents = data;
      vm.showNext();
    }

    getEvents(getAllEvents);

    vm.blockNum = 0;
    vm.blockSize = 2;

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
      if (curEvents[curEvents.length - 1] === allEvents[allEvents.length - 1]) {
        vm.toogleBtn(button, true);
      } else {
        vm.toogleBtn(button, false);
      }
    };
  }

})();
