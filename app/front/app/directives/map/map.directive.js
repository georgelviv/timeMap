(function() {
  'use strict';

  angular
    .module('app.map')
    .directive('map', initMap);

  function initMap() {
    var mapDirective = {
      restrict: 'E',
      replace: true,
      templateUrl: 'directives/map/map.tpl',
      link: init
    }
    return mapDirective;

    function init (scope, element, attrs){

      var map = new google.maps.Map(document.getElementById(attrs.id), getMapOptions());

      function getMapOptions(){
        return {
          zoom: 6,
          center: new google.maps.LatLng(48.379433, 31.16558),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      }
      function createMarker (pos) {
        var myLatlng = new google.maps.LatLng(pos.lat,pos.lng);
        var marker = new google.maps.Marker({
          position: myLatlng, 
          map: map,
          title: pos.title
        });
      }

      google.maps.event.addListener(map, 'click', function(e) {
        scope.$apply(function() {
          createMarker({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            title: 'event'
          });

          console.log(e.latLng.lat());
          console.log(e.latLng.lng());
        });

      });
    }
  }
})();
