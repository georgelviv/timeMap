(function() {
  'use strict';

  angular
    .module('app.eventsApi')
    .factory('eventsApi', eventsApi);

  function eventsApi($http) {
    var responseData;
    var eventsList = {
      add: addEvent
    };
    return eventsList;

    function addEvent(event) {
      return $http.post('/event', event).then(function(response) {
        return response;
      });
    }
  }
})();
