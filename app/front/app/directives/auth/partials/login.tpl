<md-content class="md-padding">
  <form name="vm.login" layout="column" layout-fill ng-submit="vm.loginUser()">
    <md-input-container>
      <label>Username</label>
      <input ng-model="vm.login.username" required>
    </md-input-container>
    <md-input-container>
      <label>Password</label>
      <input ng-model="vm.login.password" type="password" required>
    </md-input-container>
    <div layout="row">
      <div flex="50" flex-sm="100">
        <md-button class="md-raised" type="submit">
          Sign in
        </md-button>
      </div>
    </div>
  </form>
</md-content>
