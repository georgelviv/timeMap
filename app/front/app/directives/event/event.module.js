(function() {
  'use strict';

  angular
    .module('app.event', [
      'utils.logger',
      'app.db.events',
      'app.events'
    ]);

})();
