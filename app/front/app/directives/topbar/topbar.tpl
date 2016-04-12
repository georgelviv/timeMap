<md-toolbar>
  <div class="md-toolbar-tools">
    <div flex="20" layout="row">
      <md-button ng-href="/#/" aria-label="logo" class="logo"></md-button>
    </div>
    <div flex="80" layout="row"  layout-align="center center">
    </div>
    <div flex="20" layout="row" layout-align="end">
      <div ng-show="!!user">
        <md-button class="md-raised" ng-click="showSideBar('tags')">
          tags
        </md-button>
      </div>
      <div ng-show="!!user">
        <md-button class="md-raised" ng-click="showSideBar('event')">
          create event
        </md-button>
      </div>
      <div ng-hide="!!user">
        <md-button class="md-icon-button" ng-click="showSideBar('login')">
          <md-icon>person</md-icon>
        </md-button>
      </div>
      <div ng-show="!!user">
        <md-button class="md-icon-button" ng-click="logout($event)">
          <md-icon>input</md-icon>
        </md-button>
      </div>
    </div>
  </div>
</md-toolbar>
