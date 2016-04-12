(function() {
  'use strict';

  angular
    .module('app.authService')
    .factory('authService', authService);

  function authService($q, $http, $rootScope, AUTH_API, AUTH_EVENTS) {
      var db = {
        isLoggedIn: isLoggedIn,
        getUser: getUser,
        login: login,
        logout: logout,
        register: register,
        getUserStatus: getUserStatus
      };

      var user = null;

      return db;

      function isLoggedIn() {
        return !!user;
      }

      function getUser() {
        return angular.copy(user);
      }

      function getUserStatus() {
        var deferred = $q.defer();
        $http.get(AUTH_API.status).success(onSuccess).error(onError);

        function onSuccess(data) {
          if (data.status) {
            user = data.user;
            deferred.resolve(data.user);
            $rootScope.$emit(AUTH_EVENTS.login);
          } else {
            user = false;
            deferred.reject(data);
          }
        }

        function onError(error) {
          user = false;
          deferred.reject(error);
        }
        return deferred.promise;
      }

      function login(username, password) {
        var deferred = $q.defer();
        var body = {
          username: username,
          password: password
        };

        $http.post(AUTH_API.login, body).success(onSuccess).error(onError);

        return deferred.promise;

        function onSuccess(data) {
          user = data.user;
          deferred.resolve(data);
          $rootScope.$emit(AUTH_EVENTS.login);
        }

        function onError(error) {
          deferred.reject(error);
        }
      }

      function logout() {
        var deferred = $q.defer();

        $http.get(AUTH_API.logout).success(onSuccess).error(onError);

        function onSuccess(data) {
          user = false;
          deferred.resolve();
          $rootScope.$emit(AUTH_EVENTS.logout);
        }

        function onError(error) {
          user = false;
          deferred.reject();
          $rootScope.$emit(AUTH_EVENTS.logout);
        }

        return deferred.promise;
      }

      function register(userBody) {
        var deferred = $q.defer();
        var body = {
          username: userBody.username,
          password: userBody.password,
          email: userBody.email
        };

        $http.post(AUTH_API.register, body).success(onSuccess).error(onError);

        function onSuccess(data, status) {
          if (status === 200 && data.status) {
            user = data.user;
            deferred.resolve(data);
            $rootScope.$emit(AUTH_EVENTS.login);
          } else {
            deferred.reject(data);
          }
        }

        function onError(error) {
          deferred.reject(error);
        }

        return deferred.promise;
      }

    }
})();
