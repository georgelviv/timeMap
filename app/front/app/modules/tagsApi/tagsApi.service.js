(function() {
  'use strict';

  angular
    .module('app.tagsApi')
    .factory('eventsService', eventsService);

  function eventsService($http, $q, $timeout, $rootScope, TAGS_API) {
    var items = [];

    return {
      getAllTags: getAllTags,
      addTag: addTag,
      deleteTag: deleteTag,
      fetchTags: fetchTags
    };

    function getAllTags() {
      return angular.copy(items);
    }

    function fetchTags() {
      var deferred = $q.defer();
      if (items.length === 0) {
        $http.get(EVENTS_API).then(function(response) {
          items = response.data;
          deferred.resolve(items);
          $rootScope.$emit('app-tags-fetched');
        });
      } else {
        deferred.resolve(items);
      }
      return deferred.promise;
    }

    function addTags(event) {
      var deferred = $q.defer();
      $http.post(EVENTS_API, event).then(function(response) {
        items.push(response.data);
        $rootScope.$emit('app-tags-fetched');
        deferred.resolve(response.data);
      });
      return deferred.promise;
    }

    function deleteTags(id) {
      var deferred = $q.defer();
      $http.delete(EVENTS_API + '/' + id).then(function(response) {
        angular.forEach(items, function(item, index) {
          if (item._id === id) {
            items.splice(index, 1);
            $rootScope.$emit('app-tags-fetched');
            deferred.resolve(response.data);
          }
        });
        return deferred.promise;
      });
    }
  }
})();
