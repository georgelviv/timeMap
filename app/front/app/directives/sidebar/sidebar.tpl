<md-sidenav class="md-sidenav-right" md-component-id="right">
    <md-toolbar layout="row">
      <div class="md-toolbar-tools">
        <h2>
          <span ng-show="state === 'event'">
            Events
          </span>
          <span ng-show="state === 'login'">
            Sign In / Sign up
          </span>
          <span ng-show="state === 'tags'">
            Tags
          </span>
        </h2>
        <span flex></span>
        <md-button class="md-icon-button" aria-label="Close Side Panel" ng-click="closeSideBar()">
          <md-tooltip>Close Side Panel</md-tooltip>
          <md-icon class="material-icons md-light md-48"> close </md-icon>
        </md-button>
      </div>
    </md-toolbar>
    <md-content layout-padding="">
      <div ng-show="state === 'event'">
        <event is-new="true"></event>
      </div>
      <div ng-show="state === 'login'">
        <auth-form></auth-form>
      </div>
      <div ng-show="state === 'tags'">
        <tags></tags>
        <event-list></event-list>
      </div>
    </md-content>
    <!--<div ng-show="vm.isAddEvent">-->
    <div>
    </div>
</md-sidenav>
