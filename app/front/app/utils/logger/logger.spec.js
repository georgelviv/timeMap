describe('utils.Logger factory', function () {
  var logger;

  beforeEach(function () {
    module('utils.logger');

    inject(function (_logger_) {
      logger = _logger_;
    });
  });

  it('should have info function', function () {
    expect(angular.isFunction(logger.info)).toBe(true);
  });

});
