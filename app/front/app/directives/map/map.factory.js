(function() {
  'use strict';

  angular
    .module('app.map')
    .factory('mapApi', mapApi);

  function mapApi(loggerApi, eventsService) {

    var mapActions = {
      createMarker: createMarker
    };
    return mapActions;

    function createMarker(pos, mapEl) {
      var myLatlng = new google.maps.LatLng(pos.lat,pos.lng);
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: mapEl,
        title: pos.title
      });
      return marker;
    }
  }
})();
