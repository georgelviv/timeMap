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
        config.startTime = (new Date()).getTime();
        return config;
      }

      function response(data) {
        $rootScope.requests.push(createRequest(data));
        return data;
      }

      function requestError(error) {
        loggerApi.error('HTTP Request error');
      }

      function responseError(error) {
        loggerApi.error('HTTP Response error');
      }

      function createRequest(data) {
        var reqData = {
          resTime: (new Date()).getTime() - data.config.startTime,
          statusNum: status,
          method: data.config.method,
          url: data.config.url
        };

        var request = new Request(reqData);
        return request;
      }

      function Request(data) {
        this.method = data.method || 'GET';
        this.url = data.url || '/';
        this.statusNum = data.statusNum || 200;
        this.resTime = data.resTime;
      }
    }
})();
