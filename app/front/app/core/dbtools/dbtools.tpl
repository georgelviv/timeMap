<section class="dbtools full-height" layout="column" layout-align="center">
  <md-content flex="95" layout="row" layout-align="center" layout-padding>
    <md-content flex-xs="90" flex="80">

      <h2 class="md-display-3 text-center bottom-space">DB tools</h2>

      <div ng-include="'core/dbtools/partials/events.tpl'"></div>

      <md-button class="md-raised md-warn" ng-click="vm.cleanDB($event)">Clean db</md-button>

      <md-content layout="row" layout-align="center">
        <div class="top-space text-center" flex="50">
          <md-button class="md-primary" href="/#/" title="Go to Home">
            Go to Home
          </md-button>
        </div>
      </md-content>

    </md-content>
  </md-content>
</section>
