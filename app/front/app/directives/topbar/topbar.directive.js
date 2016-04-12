(function() {
  'use strict';

  angular
    .module('app.topbar')
    .directive('topbar', topbarDirective);

  function topbarDirective($rootScope, $mdSidenav, $mdDialog,
                          loggerApi, authService, AUTH_EVENTS) {
    var directive = {
      restrict: 'E',
      scope: {
        sidebarState: '=sidebarState'
      },
      link: link,
      templateUrl: 'directives/topbar/topbar.tpl'
    };

    return directive;

    function link(scope) {
      var sideBarID = 'right';
      scope.showSideBar = showSideBar;
      scope.user = authService.getUser();
      scope.logout = logout;

      $rootScope.$on(AUTH_EVENTS.login, onUserLogin);
      $rootScope.$on(AUTH_EVENTS.logout, onUserLogout);

      function showSideBar(state) {
        scope.sidebarState = state;
        $mdSidenav(sideBarID).toggle();
      }

      function onUserLogin() {
        scope.user = authService.getUser();
      }

      function logout(ev) {
        var confirm = $mdDialog.confirm()
          .title('Would you want to logout?')
          .ariaLabel('Logout')
          .targetEvent(ev)
          .ok('Logout')
          .cancel('Cancel');
        $mdDialog.show(confirm).then(onConfirm);

        function onConfirm() {
          authService.logout().then(onCb, onCb);

          function onCb() {
            loggerApi.success('You have successfully been logged out.');
          }
        }
      }

      function onUserLogout() {
        scope.user = null;
      }
    }
  }

})();
