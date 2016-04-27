<md-content>
  <form layout="column" name="registrationForm" layout-fill ng-submit="auth.createUser(registrationForm)" novalidate>
    <md-input-container>
      <label>Username</label>
      <input name="username" ng-model="auth.registration.username" ng-model-options="{ updateOn: 'blur' }" required>
      <div ng-messages="registrationForm.username.$error">
        <div ng-message="required">Username is required.</div>
        <div ng-message="minlength">Minimum 3 characters is required.</div>
      </div>
    </md-input-container>
    <md-input-container>
      <label>Email</label>
      <input name="email" ng-model="auth.registration.email" ng-model-options="{ updateOn: 'blur' }" type="email" required>
      <div ng-messages="registrationForm.email.$error">
        <div ng-message="required">Email is required.</div>
        <div ng-message="email">Email is not correct.</div>
      </div>
    </md-input-container>
    <md-input-container>
      <label>Password</label>
      <input name="password" ng-model="auth.registration.password" ng-model-options="{ updateOn: 'blur' }" type="password" minlength="6" required>
      <div ng-messages="registrationForm.password.$error" >
        <div ng-message="required">Password is required.</div>
        <div ng-message="minlength">At least of 6 symbols required.</div>
      </div>
    </md-input-container>
    <md-input-container>
      <label>Confirm Password</label>
      <input name="confirmPassword" ng-model="auth.registration.confirmPassword" type="password" required>
      <div ng-messages="registrationForm.confirmPassword.$error">
      <div ng-show="registrationForm.confirmPassword.$dirty && !auth.passportMatch()">Passwort don't match</div>
      </div>
    </md-input-container>
    <div layout="row">
      <div flex="50" flex-sm="100">
        <md-button type="submit" class="md-raised md-primary" ng-disabled="registrationForm.$invalid || !auth.passportMatch()">
          Sign up
        </md-button>
      </div>
    </div>
  </form>
</md-content>
