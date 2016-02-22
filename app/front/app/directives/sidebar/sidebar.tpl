<md-sidenav class="md-sidenav-right" md-component-id="right">
    <md-toolbar layout="row">
      <div class="md-toolbar-tools">
        <h2>
          <span>Side Panel</span>
        </h2>
        <span flex></span>
        <md-button class="md-icon-button" aria-label="Close Side Panel" ng-click="vm.closeSideBar()">
          <md-tooltip>Close Side Panel</md-tooltip>
          <md-icon class="md-default-theme" class="material-icons">X</md-icon>
        </md-button>
      </div>
    </md-toolbar>
    <md-content layout-padding="">
      <event is-new="true"></event>
    </md-content>
    <!--<div ng-show="vm.isAddEvent">-->
    <div>
    </div>
</md-sidenav>
