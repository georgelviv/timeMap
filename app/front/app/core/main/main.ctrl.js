(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainCtrl', MainController);

  function MainController() {
    var vm = this;
    vm.sidebarState = null;
    init();

    function init() {
    }
  }

})();
