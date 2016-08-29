(function() {
  'use strict';

  angular
    .module('app.timeline')
    .directive('timeLine', timelineDirective);

  function timelineDirective(timelineApi, timelineService) {
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'directives/timeline/timeline.tpl',
      link: init
    };
    return directive;

    function init() {
      var container = $('#visualization');
      var items = [];
      var options = {
        height: '125px',
        autoResize: true,
        zoomMin: 691200000
      };
      var timeline = new vis.Timeline(container[0], items, options);
      var timelineRange = getTimeLineRange();
      timeline.setWindow(timelineRange.start, timelineRange.end);

      $('.zoom-in-btn').on('click', function() {
        timelineApi.zoom(timeline, -0.1);
      });

      $('.zoom-out-btn').on('click', function() {
        timelineApi.zoom(timeline, 0.1);
      });

      timelineService.init(timeline);
    }

    function getTimeLineRange() {
      var today = new Date();
      var todayFullYear = today.getFullYear();
      return {
        start: today.setFullYear(todayFullYear - 1),
        end: today.setFullYear(todayFullYear + 1)
      };
    }
  }
})();
