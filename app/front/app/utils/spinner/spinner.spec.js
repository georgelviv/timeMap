describe('utils.spinner', function () {
  var spinnerApi;

  beforeEach(function () {
    module('utils.spinner');

    inject(function (_spinnerApi_) {
      spinnerApi = _spinnerApi_;
    });
  });

  describe('factory', function () {
    it('should have show function', function () {
      expect(angular.isFunction(spinnerApi.show)).toBe(true);
    });
    it('should have hide function', function () {
      expect(angular.isFunction(spinnerApi.hide)).toBe(true);
    });
    it('should have toogle function', function () {
      expect(angular.isFunction(spinnerApi.toogle)).toBe(true);
    });
  });

});
