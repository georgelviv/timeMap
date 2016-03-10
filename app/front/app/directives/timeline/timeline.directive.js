(function() {
  'use strict';

  angular
    .module('app.timeline')
    .directive('timeLine', timelineDirective);

  function timelineDirective(timelineApi) {
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
      var options = {};
      var timeline = new vis.Timeline(container[0], items, options);
      timeline.setWindow('2014-04-20','2016-04-20');

      $('.zoom-in-btn').on('click', function() {
        timelineApi.zoom(timeline, -0.1);
      });

      $('.zoom-out-btn').on('click', function() {
        timelineApi.zoom(timeline, 0.1);
      });
    }
  }
})();
