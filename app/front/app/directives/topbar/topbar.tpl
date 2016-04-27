<md-toolbar>
  <div class="md-toolbar-tools">
    <div flex="20" layout="row" layout-align="space-between center">
      <md-button ng-href="/#/" aria-label="logo" class="logo"></md-button>
    </div>
    <div flex="80" layout="row" layout-align="end center">
      <div>
        <md-button class="md-raised" ng-click="showSideBar('events')">
          Events
        </md-button>
      </div>
      <div ng-hide="!!user">
        <md-button class="md-icon-button" ng-click="showSideBar('login')">
          <md-icon>person</md-icon>
        </md-button>
      </div>
      <div ng-show="!!user">
        <p class="md-subhead">
          Welcome, {{user.username}} !
        </p>
      </div>
      <div ng-show="!!user">
        <md-button class="md-icon-button" ng-click="logout($event)">
          <md-icon>input</md-icon>
        </md-button>
      </div>
    </div>
  </div>
</md-toolbar>
