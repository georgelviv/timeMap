(function() {
  'use strict';

  angular
    .module('app.timeline')
    .directive('timeline', timelineDirective);

  function timelineDirective() {
    var directive = {
      template: 'Timeline should be here'
    };

    return directive;
  }

})();
