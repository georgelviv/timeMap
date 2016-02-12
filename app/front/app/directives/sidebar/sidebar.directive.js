(function() {
  'use strict';

  angular
    .module('app.sidebar')
    .directive('sidebar', timelineDirective);

  function timelineDirective() {
    var directive = {
      template: 'Sidebar should be here'
    };

    return directive;
  }

})();
