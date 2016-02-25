(function() {
  'use strict';

  angular
    .module('app.main', [
      'ngRoute',
      'templates',
      'utils.logger',
      'utils.spinner',
      'app.auth',
      'app.timeline',
      'app.sidebar'
    ]);

})();
