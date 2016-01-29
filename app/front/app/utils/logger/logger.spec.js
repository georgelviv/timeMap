describe('utils.logger', function () {
  var loggerApi;

  beforeEach(function () {
    module('utils.logger');

    inject(function (_loggerApi_) {
      loggerApi = _loggerApi_;
    });
  });

  describe('factory', function () {
    it('should have info, error, success, warning function', function () {
      expect(angular.isFunction(loggerApi.info)).toBe(true);
      expect(angular.isFunction(loggerApi.error)).toBe(true);
      expect(angular.isFunction(loggerApi.success)).toBe(true);
      expect(angular.isFunction(loggerApi.warning)).toBe(true);
    });
  });

});
