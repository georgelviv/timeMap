(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainCtrl', MainController);

  function MainController(logger) {
    var vm = this;

    activate();

    function activate() {
      logger.info('app.main activated');
    }

  }
})();
