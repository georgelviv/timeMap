(function() {
  'use strict';

  angular
    .module('app.404')
    .controller('404Ctrl', Main404Controller);

  function Main404Controller($rootScope) {
    var vm = this;

    activate();

    function activate() {
      vm.prevurl = getUrlPath($rootScope.previousUrl);
    }

    function getUrlPath(url) {
      var path = url;
      path = path.split('/');
      path = path[path.length - 1];
      if (!path) {
        return '404';
      }
      if (checkURIEncode(path)) {
        path = decodeURIComponent(path);
      }
      return path;
    }

    function checkURIEncode(uri) {
      return typeof uri === 'string' && decodeURIComponent(uri) !== uri;
    }

  }
})();
