(function() {
  'use strict';

  angular
    .module('app.events')
    .factory('eventClass', eventClass);

  function eventClass(dbEvents) {
      function bindEvents(events) {
        function EventClass(options) {
          var privateData = {
            eventInfo: {
              date: options && options.date || null,
              description: options && options.description || null,
              tags: options && options.tags || null,
              title: options && options.title || null,
              authorId: options && options.author || null,
              coordinates: options && options.coordinates || null
            },
            id: options && options.id || null,
            inArray: false
          };

          this.addToArray = addToArray;
          this.isInArray = isInArray;
          this.getEventInfo = getEventInfo;
          this.update = update;
          this.getId = getId;
          this.saveId = saveId;

          function addToArray() {
            if (privateData.inArray) {
              return;
            }
            events.push(this);
            this.inArray = true;
          }

          function getId() {
            return privateData.id;
          }

          function saveId(id) {
            if (!privateData.id && id) {
              privateData.id = id;
            }
            return privateData.id;
          }

          function isInArray() {
            return privateData.inArray;
          }

          function getEventInfo() {
            return privateData.eventInfo;
          }

          function update(data) {
            for (var prop in privateData.eventInfo) {
              if (data[prop]) {
                privateData.eventInfo = data[prop];
              }
            }
          }
        }

        EventClass.prototype.save = save;
        EventClass.prototype.remove = remove;

        function remove(cb, cbError) {
          console.log('Removed');
        }

        function save(updateData, cb, cbError) {
          var cbOnSave = cb;
          var cbOnError = cbError;
          var eventData = updateData;
          if (angular.isFunction(updateData)) {
            cbOnSave = updateData;
            cbOnError = cb;
            eventData = this.getEventInfo();
          }
          if (this.isInArray) {
            dbEvents.post(eventData, onSuccessPost.bind(this), cbOnError);
          } else {
            dbEvents.update(this.getId(),
              eventData,
              onSuccessPost.bind(this),
              cbOnError);
          }

          function onSuccessPost(data) {
            this.update(updateData);
            this.addToArray();
            this.saveId(data._id);
            if (cbOnSave) {
              cbOnSave();
            }
          }
        }

        return EventClass;
      }

      return bindEvents;

    }
})();
