(function() {
  'use strict';

  angular
    .module('app.map')
    .directive('map', initMap);

  function initMap(mapApi, dbEvents) {
    var mapDirective = {
      restrict: 'E',
      replace: true,
      templateUrl: 'directives/map/map.tpl',
      link: init
    };
    return mapDirective;

    function init(scope, element, attrs) {
      var mapBlock = document.getElementById(attrs.id);
      var map = new google.maps.Map(mapBlock, getMapOptions());

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


      mapApi.getEvents(showData);

      function showData(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          mapApi.createMarker({
            lat: data[i].coordinates.latitude,
            lng: data[i].coordinates.longitude,
            title: data[i].title
          }, map);
        }
      }

    }
  }
})();
