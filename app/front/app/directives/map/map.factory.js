(function() {
  'use strict';

  angular
    .module('app.map')
    .factory('mapApi', mapApi);

  function mapApi(loggerApi, eventsService) {
    var mapActions = {
      createMarker: createMarker,
      createMap: createMap,
      onMapClick: onMapClick,
      clearMarkers: clearMarkers
    };

    var mapObj = {
      markers: [],
      mapOptions: {
        zoom: 6,
        center: new google.maps.LatLng(48.379433, 31.16558),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      },
      mcOptions: {
        gridSize: 50, maxZoom: 15
      }
    };

    return mapActions;

    function onMapClick(cb) {
      if (angular.isFunction(cb)) {
        google.maps.event.addListener(mapObj.map, 'click', cb);
      }
    }

    function createMarker(pos) {
      var myLatlng = new google.maps.LatLng(pos.lat,pos.lng);
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: mapObj.map,
        title: pos.title
      });
      mapObj.markers.push(marker);
      mapObj.mc.addMarker(marker);
    }

    function clearMarkers() {
      angular.forEach(mapObj.markers, function(marker) {
        marker.setMap(null);
      });
      mapObj.markers = [];
      mapObj.mc.clearMarkers();
    }

    function createMap(el, mapOpt) {
      mapObj.map = new google.maps.Map(el, mapOpt || mapObj.mapOptions);
      mapObj.mc = new MarkerClusterer(mapObj.map,
        mapObj.markers, mapObj.mcOptions);
    }
  }
})();
