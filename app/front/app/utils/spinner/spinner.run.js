(function() {
  'use strict';

  angular
    .module('utils.spinner')
    .run(spinnerRun);

  function spinnerRun($templateCache) {
    var spinnerTemplate = '<spinner></spinner>';

    init();

    function init() {
      angular
        .element(document.body)
        .append(spinnerTemplate);
    }
  }
})();
