(function() {
  'use strict';

  angular
    .module('app.dbtools')
    .controller('dbtoolsCtrl', dbtoolsController);

  function dbtoolsController(db, loggerApi, $mdDialog) {
    var vm = this;

    vm.eventsFormShow = false;
    vm.eventsForm = {};

    vm.cleanDB = cleanConfirm;
    vm.addEvent = addEvent;
    vm.postEvent = postEvent;
    vm.editEvent = editEvent;
    vm.saveEvent = saveEvent;
    vm.deleteEvent = deleteEvent;

    init();

    function init() {
      getEvents();
    }

    function deleteEvent(event) {
      db.events.deleteEvent(event._id, onSuccess, onError);
      function onSuccess() {
        loggerApi.success('Event deleted');
        vm.events = vm.events.filter(filterById);

        function filterById(el) {
          if (el._id === event._id) {
            return false;
          }
          return true;
        }
      }
    }

    function saveEvent(event, form) {
      if (!isChanged()) {
        event.editable = false;
        return;
      }

      db.events.update(event._id, event.editData, onSuccess, onError);

      function onSuccess() {
        loggerApi.success('Event updated');
        event.title = event.editData.title;
        event.description = event.editData.description;
        delete event.editData;
        form.$setPristine();
        form.$setUntouched();
        event.editable = false;
      }

      function isChanged() {
        if (event.title !== event.editData.title) {
          return true;
        }
        if (event.description !== event.editData.description) {
          return true;
        }
        return false;
      }
    }

    function editEvent(event, isCancel) {
      if (!event.editData) {
        event.editData = {
          title: event.title,
          description: event.description
        };
      }
      if (isCancel) {
        event.editable = false;
      } else {
        event.editable = true;
      }

    }

    function postEvent(form) {
      db.events.post(vm.eventsForm, onSuccess, onError);

      function onSuccess(event) {
        loggerApi.success('Event posted');
        vm.events = vm.events || [];
        vm.events.push(event);
        vm.eventsForm = {};
        form.$setPristine();
        form.$setUntouched();
        vm.eventsFormShow = false;
      }
    }

    function addEvent() {
      vm.eventsFormShow = !vm.eventsFormShow;
    }

    function getEvents() {
      db.events.get(onSuccess, onError);

      function onSuccess(events) {
        loggerApi.success('Events loaded');
        vm.events = vm.events || [];
        events.forEach(onEach);

        function onEach(event) {
          vm.events.push(event);
        }
      }
    }

    function onError(error) {
      loggerApi.error(error, 'DB Error: ');
    }

    function cleanConfirm(ev) {
      var confirmModal = $mdDialog.confirm()
              .title('Are you sure, you want to clean db?')
              .textContent('Cleaning of database will delete all stored data.')
              .ok('Delete')
              .ariaLabel('Clean DB confirm modal.')
              .targetEvent(ev)
              .cancel('Cancel');
      $mdDialog.show(confirmModal).then(onConfirm);

      function onConfirm() {
        cleanDB();
      }
    }

    function cleanDB() {
      db.clean(onSuccess, onError);

      function onSuccess() {
        loggerApi.success('DB has been cleaned');
        vm.events = [];
      }

    }
  }
})();
