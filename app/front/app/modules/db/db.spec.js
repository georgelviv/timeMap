describe('app.db', function () {
  var dbApi;

  beforeEach(function () {
    module('app.db');

    inject(function (_db_) {
      dbApi = _db_;
    });
  });

  describe('factory', function () {
    it('should have clean funcion', function () {
      expect(angular.isFunction(dbApi.clean)).toBe(true);
    });
  });

});
