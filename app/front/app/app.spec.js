describe('App', function () {

  var location;
  var route;
  var rootScope;

  beforeEach(function () {
    module('app');
    inject(function (_$location_, _$route_, _$rootScope_) {
      location = _$location_;
      route = _$route_;
      rootScope = _$rootScope_;
    });
  });

  describe('on main page', function () {

    beforeEach(function () {
      location.path('/');
      rootScope.$digest();
    });

    describe('controller', function () {
      it('should be MainCtrl', function () {
        expect(route.current.controller.indexOf('MainCtrl')).toBe(0);
      });
    });

    describe('pageTitle', function () {
      it('should be title param from router', function () {
        expect(rootScope.pageTitle).toBe(route.current.title);
      });
    });

  });
});
