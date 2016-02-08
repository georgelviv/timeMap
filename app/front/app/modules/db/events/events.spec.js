describe('app.db.events', function () {
  var dbEventsApi;

  beforeEach(function () {
    module('app.db.events');

    inject(function (_dbEvents_) {
      dbEventsApi = _dbEvents_;
    });
  });

  describe('factory', function () {
    it('should have post, get, update, deleteEvent functions', function () {
      expect(angular.isFunction(dbEventsApi.post)).toBe(true);
      expect(angular.isFunction(dbEventsApi.get)).toBe(true);
      expect(angular.isFunction(dbEventsApi.update)).toBe(true);
      expect(angular.isFunction(dbEventsApi.deleteEvent)).toBe(true);
    });
    it('should have isDiffer functions', function () {
      expect(angular.isFunction(dbEventsApi.isDiffer)).toBe(true);
    });
  });

});
