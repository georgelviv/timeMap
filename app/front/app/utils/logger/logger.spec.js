describe('utils.logger', function () {
  var loggerApi;

  beforeEach(function () {
    module('utils.logger');

    inject(function (_loggerApi_) {
      loggerApi = _loggerApi_;
    });
  });

  describe('factory', function () {
    it('should have info function', function () {
      expect(angular.isFunction(loggerApi.info)).toBe(true);
    });
  });

});
