(function() {
  'use strict';

  angular
    .module('utils.interceptor')
    .factory('interceptor', interceptorApi);

  function interceptorApi(loggerApi, spinnerApi, uuid, $q, $injector) {
      var interceptor = {
        request: request,
        response: response,
        requestError: requestError,
        responseError: responseError
      };

      var $rootScope = $injector.get('$rootScope');
      var openRequests = [];
      $rootScope.requests = $rootScope.requests || [];

      return interceptor;

      function request(config) {
        spinnerApi.show();
        config.startTime = (new Date()).getTime();
        config.id = uuid.get();
        openRequests.push(config.id);
        return config;
      }

      function response(data) {
        hideSpinner(data.config.id);
        $rootScope.requests.push(createRequest(data));
        return data;
      }

      function requestError(error) {
        loggerApi.error('HTTP Request error');
        return error;
      }

      function responseError(error) {
        hideSpinner(error.config.id);
        loggerApi.error('HTTP Response error');
        return $q.reject(error);
      }

      function createRequest(data) {
        var reqData = {
          resTime: (new Date()).getTime() - data.config.startTime,
          statusNum: status,
          method: data.config.method,
          url: data.config.url,
          id: data.config.id
        };

        var request = new Request(reqData);
        return request;
      }

      function hideSpinner(id) {
        var index = openRequests.indexOf(id);
        openRequests.splice(index, 1);
        if (!openRequests.length) {
          spinnerApi.hide();
        }
      }

      function Request(data) {
        this.method = data.method || 'GET';
        this.id = data.id;
        this.url = data.url || '/';
        this.statusNum = data.statusNum || 200;
        this.resTime = data.resTime;
      }
    }
})();
