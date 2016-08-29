(function() {
  'use strict';

  angular
    .module('app.eventsApi')
    .factory('eventsService', eventsService);

  function eventsService($http, $q, $timeout, $rootScope, EVENTS_API,
                        timelineService) {
    var items = [];

    $rootScope.$on('app-timeline-changed', onTimeLineChanged);

    return {
      getAllEvents: getAllEvents,
      addEvent: addEvent,
      deleteEvent: deleteEvent,
      fetchEvents: fetchEvents
    };

    function getAllEvents() {
      return angular.copy(items);
    }

    function onTimeLineChanged() {
      fetchEvents();
    }

    function fetchEvents(isAll) {
      var deferred = $q.defer();
      var reqUrl = EVENTS_API;
      if (!isAll) {
        var range = timelineService.getCurrent();
        if (!range.from) {
          return;
        }
        reqUrl += '?from=' + range.from + '&to=' + range.to;
      }
      $http.get(reqUrl).then(function(response) {
        items = response.data;
        deferred.resolve(items);
        $rootScope.$emit('app-events-fetched');
      });
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
