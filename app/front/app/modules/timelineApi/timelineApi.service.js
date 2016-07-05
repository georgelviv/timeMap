(function() {
  'use strict';

  angular
    .module('app.timelineApi')
    .factory('timelineService', timelineService);

  function timelineService($rootScope) {
    var api = {
      init: init,
      getCurrent: getCurrent
    };
    var timeline;
    var range = {};

    return api;

    function init(instance) {
      timeline = instance;
      updateRange();
      timeline.on('rangechanged', onChange);
      function onChange(data) {
        updateRange();
        $rootScope.$emit('app-timeline-changed');
      }
    }

    function getCurrent() {
      return range;
    }

    function updateRange() {
      range.from = timeline.body.range.start;
      range.to = timeline.body.range.end;
    }
  }

})();
