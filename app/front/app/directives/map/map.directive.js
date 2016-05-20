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

  function MapCtrl($rootScope, mapApi, eventsService,
    sidebarFactory, $mdSidenav) {
    var vm = this;
    var sideBarID = 'right';
    var map = mapApi.createMap(document.getElementById('map-block'));
    var markers = [];
    $rootScope.$on('app-events-fetched', onEventsFetch);
    mapApi.onMapClick(onMapClickHandler);

    function onEventsFetch() {
      vm.events = eventsService.getAllEvents();
      showData(vm.events);
    }

    function onMapClickHandler(e) {
      console.log(e.latLng.lat());
      console.log(e.latLng.lng());
      mapApi.createMarker({
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        title: 'event'
      }, map);
    }

    function showData(data) {
      mapApi.clearMarkers();
      angular.forEach(data, function(event, i) {
        var marker = mapApi.createMarker({
          lat: event.coordinates.latitude,
          lng: event.coordinates.longitude,
          title: event.title
        });
        marker.addListener('click', function() {
          var state = 'events-details';
          sidebarFactory.setState(state, event);
          $mdSidenav(sideBarID).toggle();
        });
      });
    }
  }

})();
