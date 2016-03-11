(function() {
  'use strict';
  angular
    .module('app.timeline')
    .factory('timelineApi', timelineApi);

  function timelineApi() {
    var timeLineActions = {
      zoom: zoom
    };
    return timeLineActions;

    function zoom(timeline, percentage) {
      var range = timeline.getWindow();
      var interval = range.end - range.start;

      timeline.setWindow({
        start: range.start.valueOf() - interval * percentage,
        end:   range.end.valueOf()   + interval * percentage
      });
    }
  }
})();
