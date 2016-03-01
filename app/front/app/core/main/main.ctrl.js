(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainCtrl', MainController);

  function MainController(eventsList) {
    eventsList.get();
  }

})();
