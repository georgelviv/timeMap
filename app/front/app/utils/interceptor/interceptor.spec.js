describe('utils.interceptor', function () {
  var $httpBackend;
  var $http;
  var $rootScope;

  beforeEach(function () {
    module('utils.interceptor');

    inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      $http = $injector.get('$http');
      $rootScope = $injector.get('$rootScope');
    });
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('on http request',  function () {

    it('should push object to requests array in $rootScope', function () {
      var prevLenght = $rootScope.requests && $rootScope.requests.length || 0;
      $httpBackend.expectGET('/test').respond(200, '');
      $http.get('/test');
      $httpBackend.flush();
      expect($rootScope.requests.length).toBe(prevLenght + 1);
    });

    it('should push object with "method", "url", "statusNum" and "resTime" properties', function () {
      $httpBackend.expectGET('/test').respond(200, '');
      $http.get('/test');
      $httpBackend.flush();

      var lastRequest = $rootScope.requests[$rootScope.requests.length - 1];

      expect(lastRequest.method).toBeDefined();
      expect(lastRequest.url).toBeDefined();
      expect(lastRequest.statusNum).toBeDefined();
      expect(lastRequest.resTime).toBeDefined();
    });

  });




});
