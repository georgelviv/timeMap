(function() {
  'use strict';

  angular
    .module('app.db.events')
    .factory('dbEvents', dbEventsApi);

  function dbEventsApi(EVENT_REST_URI, dbUtils, $http) {
      var dbEvents = {
        get: get,
        post: post,
        update: update
      };

      return dbEvents;

      function get(cbOnSuccess, cbOnError) {
        $http.get(EVENT_REST_URI).then(
          dbUtils.onSuccess.bind({}, cbOnSuccess),
          dbUtils.onError.bind({}, 'Error on get events, ', cbOnError)
        );
      }

      function update(id, event, cbOnSuccess, cbOnError) {
        var postURI = EVENT_REST_URI + '?id=' + id;
        $http.put(postURI, event).then(
          dbUtils.onSuccess.bind({}, cbOnSuccess),
          dbUtils.onError.bind({}, 'Error on get events, ', cbOnError)
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
