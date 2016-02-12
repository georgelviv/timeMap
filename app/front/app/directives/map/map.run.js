/*(function() {
  'use strict';

  angular
    .module('app.map')
    .run(mapRun);

  function mapRun($templateCache) {
    var scriptMapTemplate = '<script src="https://maps.googleapis.com/maps/api/js?language=uk"></script>';

    init();

    function init() {
      angular
        .element(document.head)
        .append(scriptMapTemplate);
    }
  }
})();*/
