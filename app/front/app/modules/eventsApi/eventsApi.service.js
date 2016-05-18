(function() {
  'use strict';

  angular
    .module('app.eventsApi')
    .factory('eventsService', eventsService);

  function eventsService($http, $q, $timeout, $rootScope, EVENTS_API) {
    var items = [];

    return {
      getAllEvents: getAllEvents,
      addEvent: addEvent,
      deleteEvent: deleteEvent,
      fetchEvents: fetchEvents
    };

    function getAllEvents() {
      return angular.copy(items);
    }

    function fetchEvents() {
      var deferred = $q.defer();
      if (items.length === 0) {
        $http.get(EVENTS_API).then(function(response) {
          items = response.data;
          deferred.resolve(items);
          $rootScope.$emit('app-events-fetched');
        });
      } else {
        deferred.resolve(items);
      }
      return deferred.promise;
    }

    function addEvent(event) {
      var deferred = $q.defer();
      $http.post(EVENTS_API, event).then(function(response) {
        items.push(response.data);
        $rootScope.$emit('app-events-fetched');
        deferred.resolve(response.data);
      });
      return deferred.promise;
    }

    function deleteEvent(id) {
      var deferred = $q.defer();
      $http.delete(EVENTS_API + '/' + id).then(function(response) {
        angular.forEach(items, function(item, index) {
          if (item._id === id) {
            items.splice(index, 1);
            $rootScope.$emit('app-events-fetched');
            deferred.resolve(response.data);
          }
        });
        return deferred.promise;
      });
    }
  }
})();
