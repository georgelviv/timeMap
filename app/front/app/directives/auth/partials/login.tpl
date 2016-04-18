<md-content>
  <form name="login" layout="column" layout-fill ng-submit="auth.loginUser(login)" novalidate>
    <md-input-container>
      <label>Username</label>
      <input ng-model="auth.login.username" name="username" minlength="3" required>
      <div ng-messages="login.username.$error">
        <div ng-message="required">Username is required.</div>
        <div ng-message="minlength">At least of 3 symbols required.</div>
      </div>
    </md-input-container>
    <md-input-container>
      <label>Password</label>
      <input ng-model="auth.login.password" name="password" type="password" minlength="6" required>
      <div ng-messages="login.password.$error">
        <div ng-message="required">Password is required.</div>
        <div ng-message="minlength">At least of 6 symbols required.</div>
      </div>
    </md-input-container>
    <div layout="row">
      <div flex="50" flex-sm="100">
        <md-button class="md-raised" type="submit" ng-disabled="login.$invalid">
          Sign in
        </md-button>
      </div>
    </div>
  </form>
</md-content>
