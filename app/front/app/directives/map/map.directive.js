(function() {
  'use strict';

  angular
    .module('app.map')
    .controller('MapCtrl', MapCtrl)
    .directive('map', initMap);

  function initMap() {
    var mapDirective = {
      restrict: 'E',
      replace: true,
      controller: MapCtrl,
      templateUrl: 'directives/map/map.tpl'
    };
    return mapDirective;
  }

  function MapCtrl($rootScope, mapApi, eventsService) {
    var vm = this;
    var map = mapApi.createMap(document.getElementById('map-block'));

    $rootScope.$on('app-events-fetched', onEventsFetch);
    mapApi.onMapClick(onMapClick);

    function onEventsFetch() {
      vm.events = eventsService.getAllEvents();
      showData(vm.events);
    }

    function onMapClick(e) {
      console.log(e.latLng.lat());
      console.log(e.latLng.lng());
      mapApi.createMarker({
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        title: 'event'
      }, map);
    }

    function showData(data) {
      angular.forEach(data, function(event, i) {
        mapApi.createMarker({
          lat: event.coordinates.latitude,
          lng: event.coordinates.longitude,
          title: event.title
        });
      });
    }
  }

})();
