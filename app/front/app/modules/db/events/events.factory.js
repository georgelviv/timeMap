(function() {
  'use strict';

  angular
    .module('app.db.events')
    .factory('dbEvents', dbEventsApi);

  function dbEventsApi(EVENT_REST_URI, dbUtils, $http) {
      var dbEvents = {
        get: get,
        post: post,
        update: update,
        deleteEvent: deleteEvent,
        isDiffer: isDiffer
      };

      return dbEvents;

      function get(cbOnSuccess, cbOnError) {
        $http.get(EVENT_REST_URI).then(
          dbUtils.onSuccess.bind({}, cbOnSuccess),
          dbUtils.onError.bind({}, 'Error on get events, ', cbOnError)
        );
      }

      function isDiffer(eventOne, eventTwo) {
        var objOne = {};
        var objTwo = {};
        if (eventOne.title !== eventTwo.title) {
          return true;
        }
        if (eventOne.description !== eventTwo.description) {
          return true;
        }
        objOne.date = angular.isDate(eventOne.date) ? eventOne.date: (new Date(eventOne.date));
        objTwo.date = angular.isDate(eventTwo.date) ? eventTwo.date: (new Date(eventTwo.date));
        if (objOne.date.valueOf() !== objTwo.date.valueOf()) {
          return true;
        }
        return false;
      }

      function deleteEvent(id, cbOnSuccess, cbOnError) {
        var postURI = EVENT_REST_URI + '?id=' + id;
        $http.delete(postURI).then(
          dbUtils.onSuccess.bind({}, cbOnSuccess),
          dbUtils.onError.bind({}, 'Error on delete event, ', cbOnError)
        );
      }

      function update(id, event, cbOnSuccess, cbOnError) {
        var postURI = EVENT_REST_URI + '?id=' + id;
        $http.put(postURI, event).then(
          dbUtils.onSuccess.bind({}, cbOnSuccess),
          dbUtils.onError.bind({}, 'Error on update event, ', cbOnError)
        );
      }

      function post(data, cbOnSuccess, cbOnError) {
        var event;
        if (angular.isString(data)) {
          event = data;
        } else {
          event = JSON.stringify(data);
        }
        $http.post(EVENT_REST_URI, event).then(
          dbUtils.onSuccess.bind({}, cbOnSuccess),
          dbUtils.onError.bind({}, 'Error on post event, ', cbOnError)
        );
      }

    }
})();
