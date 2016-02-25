(function() {
  'use strict';

  angular
    .module('app.timeline')
    .directive('timeLine', timelineDirective);

  function timelineDirective() {
    var directive = {
      templateUrl: 'directives/timeline/timeline.tpl',
      replace: true,
      restrict: 'E'
    };

    return directive;
  }

})();
