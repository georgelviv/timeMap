(function() {
  'use strict';

  angular
    .module('app.timeline')
    .directive('timeLine', timelineDirective);

  function timelineDirective(timelineApi) {
    var directive = {
      templateUrl: 'directives/timeline/timeline.tpl',
      replace: true,
      restrict: 'E',
      controller: timelineCtrl,
      link: init
    };
    return directive;

    function init() {
      var container = document.getElementById('visualization');
      var items = [];
      var options = {};
      var timeline = new vis.Timeline(container, items, options);
      timeline.setWindow('2014-04-20','2016-04-20');
      timeline.on('rangechange', showEvents);
      function showEvents() {
        var range = timeline.getWindow();
        console.log(range);
      }
    }
    function timelineCtrl($scope) {
      $scope.data = 'hello from ctr';
      console.log('hello from ctr');
      $scope.zoom = timelineApi.initTimeLine().zoom(0.1);
    }
  }
})();
