describe('app.events', function () {
  var EventClass;
  var eventsList = [];

  beforeEach(function () {
    module('app.events');

    inject(function (_eventClass_) {
      var a = {};
      EventClass = _eventClass_(eventsList);
    });
  });

  describe('event.factory EventClass', function () {
    it('should be a function', function () {
      expect(angular.isFunction(EventClass)).toBe(true);
    });

    it('should have save and remove methods in prototype', function () {
      expect(angular.isFunction(EventClass.prototype.save)).toBe(true);
      expect(angular.isFunction(EventClass.prototype.remove)).toBe(true);
    });

    describe('instance', function() {
      var eventInstance;
      
      beforeEach(function () {
        eventInstance = new EventClass();
      });

      it('should have getId, isInArray methods', function () {
        expect(angular.isFunction(eventInstance.getId)).toBe(true);
        expect(angular.isFunction(eventInstance.isInArray)).toBe(true);
      });
    });
  });

});
