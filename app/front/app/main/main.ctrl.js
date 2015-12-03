(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainCtrl', MainController);

  function MainController(loggerApi, spinnerApi) {
    var vm = this;
    vm.toogle = spinnerApi.toogle;

    activate();

    function activate() {
      loggerApi.info('app.main activated');
      throw new Error('Annoying Error');
    }

  }
})();
