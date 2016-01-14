describe('app.404', function () {

  var location, route, rootScope, controller;

  beforeEach(function () {
    module('app.404');

    inject(function ($injector) {
      location = $injector.get('$location');
      route = $injector.get('$route');
      rootScope = $injector.get('$rootScope');
      controller = $injector.get('$controller');
    });
  });

  it('should redirect to 404 page on non existing routes', function () {
    location.path('/otherwise');
    rootScope.$digest();
    expect(location.path()).toBe('/404');
  });

  it('should works with encoded uri', function () {
    var uri = 'тест';
    var ctrl;

    location.path('/' + uri);
    rootScope.$digest();
    ctrl = defineCtrl('404Ctrl');
    
    expect(ctrl.prevurl).toBe(uri);

    function defineCtrl (ctrlName) {
      var scope = rootScope.$new();
      var ctrl = controller(ctrlName, {$scope: scope});
      return ctrl;
    }
  });

});
