(function() {
  'use strict';

  angular
    .module('app.timeline')
    .directive('timeline', timelineDirective);

  function timelineDirective() {
    var directive = {
      templateUrl: 'directives/timeline/timeline.tpl',
      restrict: 'E'
    };

    return directive;
  }

})();
