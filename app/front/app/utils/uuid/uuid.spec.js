describe('utils.uuid', function () {
  var uuidApi;

  beforeEach(function () {
    module('utils.uuid');

    inject(function (_uuid_) {
      uuidApi = _uuid_;
    });
  });

  describe('factory', function () {
    it('should have get funcion', function () {
      expect(angular.isFunction(uuidApi.get)).toBe(true);
    });
  });

});
