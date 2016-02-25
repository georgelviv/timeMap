(function() {
	'use strict';

	angular
	.module('app.map')
	.factory('mapApi', mapApi);

	function mapApi(dbEvents, loggerApi) {

		var mapActions = {
			createMarker: createMarker,
			getEvents: getEvents
		};
		return mapActions;

		function createMarker(pos, mapEl) {
			var myLatlng = new google.maps.LatLng(pos.lat,pos.lng);
			var marker = new google.maps.Marker({
				position: myLatlng,
				map: mapEl,
				title: pos.title
			});
		}

		function getEvents(setData) {
      dbEvents.get(success);

      function success(data) {
      	setData(data);
      }
		}
	}
})();