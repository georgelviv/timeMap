(function() {
  'use strict';

  angular
    .module('app.map')
    .directive('map', initMap);

  function initMap($rootScope, mapApi, eventsService) {
    var mapDirective = {
      restrict: 'E',
      replace: true,
      controller: mapCtrl,
      templateUrl: 'directives/map/map.tpl'
    };
    return mapDirective;

    function mapCtrl($scope) {
      var vm = this;
      var mapBlock = document.getElementById('map-block');
      var map = new google.maps.Map(mapBlock, getMapOptions());
      $rootScope.$on('app-events-fetched', function() {
        vm.events = eventsService.getAllEvents();
        showData(vm.events);
      });
       
      function getMapOptions() {
        return {
          zoom: 6,
          center: new google.maps.LatLng(48.379433, 31.16558),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      }

      google.maps.event.addListener(map, 'click', function(e) {
        console.log(e.latLng.lat());
        console.log(e.latLng.lng());
        mapApi.createMarker({
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
          title: 'event'
        }, map);
      });

      function showData(data) {
        angular.forEach(data, function(event, i) {
          mapApi.createMarker({
            lat: event.coordinates.latitude,
            lng: event.coordinates.longitude,
            title: event.title
          }, map);

        });
      }
    }
  }
})();
