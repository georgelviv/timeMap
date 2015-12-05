(function() {
  'use strict';

  angular
    .module('utils.interceptor')
    .factory('interceptor', interceptorApi);

  function interceptorApi(loggerApi, $injector) {
      var interceptor = {
        request: request,
        response: response,
        requestError: requestError,
        responseError: responseError
      };

      var $rootScope = $injector.get('$rootScope');
      $rootScope.requests = $rootScope.requests || [];

      return interceptor;

      function request(config) {
        
        return config;
      }

      function response(data) {
        return data;
      }

      function requestError(error) {
        loggerApi.error('HTTP Request error');
      }

      function responseError(error) {
        loggerApi.error('HTTP Response error');
      }
    }
})();
