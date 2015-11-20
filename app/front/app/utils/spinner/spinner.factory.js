(function() {
  'use strict';

  angular
    .module('utils.spinner')
    .factory('spinnerApi', spinnerApi);

  function spinnerApi($rootScope) {
      var service = {
        show: show,
        hide: hide,
        toogle: toogle,
        getCurrent: getCurrent
      };

      var isShowed = false;


      return service;

      function show() {
        isShowed = true;
        $rootScope.$emit('utils.spinner:show');
      }

      function hide() {
        isShowed = false;
        $rootScope.$emit('utils.spinner:hide');
      }

      function toogle() {
        if (isShowed) {
          hide();
        } else {
          show();
        }
      }

      function getCurrent() {
        $rootScope.$emit('utils.spinner:current', isShowed);
      }
    }
})();
