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

    init();

    function init() {
      getEvents();
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
