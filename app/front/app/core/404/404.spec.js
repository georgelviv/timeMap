describe('app.404', function () {

  var location, route, rootScope;

  beforeEach(function () {
    module('app.404');

    inject(function ($injector) {
      location = $injector.get('$location');
      route = $injector.get('$route');
      rootScope = $injector.get('$rootScope');
    });
  });

  it('should redirect to 404 page on non existing routes', function () {
    location.path('/otherwise');
    rootScope.$digest();
    expect(location.path()).toBe('/404');
  });

});
