describe('utils.exceptionHandler', function () {

  var $rootScope;
  var $exceptionHandler;
  var $timeout;

  // Hide console.error from phantom
  var originalFunc = console.error;
  console.error = function () {};

  beforeEach(function () {
    module('utils.exceptionHandler');
    inject(function (_$exceptionHandler_, _$rootScope_, _$timeout_) {
      $exceptionHandler = _$exceptionHandler_;
      $rootScope = _$rootScope_;
      $timeout = _$timeout_;
    });
  });

  it('should catch exceptions', function () {
    $rootScope.notExistingFunction = function () {
      throw new TypeError('Error');
    };
    expect($rootScope.notExistingFunction).toThrow();

    $timeout(function() {
      $rootScope.notExistingFunction();
    });
    $timeout.flush();
    expect($rootScope.errors.length).toBe(1);
    console.error = originalFunc;
  });

});
