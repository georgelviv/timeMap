(function() {
  'use strict';

  angular
    .module('app.main', [
      'ngRoute',
      'templates',
      'utils.logger',
      'utils.spinner',
      'app.timeline',
      'app.sidebar',
      'app.events'
    ]);

})();
