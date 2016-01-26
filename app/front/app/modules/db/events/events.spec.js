describe('app.db.events', function () {
  var dbEventsApi;

  beforeEach(function () {
    module('app.db.events');

    inject(function (_dbEvents_) {
      dbEventsApi = _dbEvents_;
    });
  });

  describe('factory', function () {
    it('should have post, get funcions', function () {
      expect(angular.isFunction(dbEventsApi.post)).toBe(true);
      expect(angular.isFunction(dbEventsApi.get)).toBe(true);
    });
  });

});
