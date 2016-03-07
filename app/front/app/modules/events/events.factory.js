(function() {
  'use strict';

  angular
    .module('app.events')
    .factory('eventsList', eventsList);

  function eventsList(eventClass, dbEvents) {
      var events = [];
      events.Event = eventClass(events);

      events.get = get;

      function get() {
        dbEvents.get(onSuccess);

        function onSuccess(data) {
          data.forEach(onEach);

          function onEach(eventData) {
            var options = {
              id: eventData._id,
              date: eventData.date,
              description: eventData.description,
              tags: eventData.tags,
              title: eventData.title,
              authorId: eventData.author,
              coordinates: eventData.coordinates
            };
            var event = new events.Event(options);
            event.addToArray();
          }
        }
      }

      return events;

    }
})();
