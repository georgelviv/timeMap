describe('app.db.utils', function () {
  var dbUtilsApi;

  beforeEach(function () {
    module('app.db.utils');

    inject(function (_dbUtils_) {
      dbUtilsApi = _dbUtils_;
    });
  });

  describe('factory', function () {
    it('should have onSuccess and onError functions', function () {
      expect(angular.isFunction(dbUtilsApi.onSuccess)).toBe(true);
      expect(angular.isFunction(dbUtilsApi.onError)).toBe(true);
    });
  });

});
