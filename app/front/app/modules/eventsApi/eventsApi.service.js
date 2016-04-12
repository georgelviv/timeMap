(function() {
  'use strict';

  angular
    .module('app.eventsApi')
    .factory('eventsService', eventsService);

  function eventsService($http, $q, $timeout, $rootScope) {
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
          $http.get('/event').then(function(response) {
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
      $http.post('/event', event).then(function(response) {
        items.push(response.data);
        $rootScope.$emit('app-events-fetched');
        deferred.resolve(response.data);
      });
      return deferred.promise;
    }
    function deleteEvent(id) {
      $http.delete('/event'+ '?id=' + id).then(function(response) {
        return response;
      });
    }
  }
})();
