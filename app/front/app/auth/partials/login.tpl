<md-content class="md-padding">
  <form name="vm.login" layout="column" layout-align="center center" layout-fill>
    <md-input-container>
      <label>Username</label>
      <input ng-model="vm.login.username" required>
    </md-input-container>
    <md-input-container>
      <label>Password</label>
      <input ng-model="vm.login.password" type="password" required>
    </md-input-container>
    <md-input-container layout-align="center center">
      <div layout="row" layout-sm="column" layout-margin>
        <md-button class="md-raised" flex="50" flex-sm="100" ng-click="vm.loginUser()">Sing in</md-button>
      </div>
    </md-input-container>
  </form>
</md-content>