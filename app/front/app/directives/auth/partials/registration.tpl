<md-content class="md-padding">
  <form layout="column" name="vm.registrationForm" layout-fill ng-submit="vm.createUser()">
    <md-input-container>
      <label>Username</label>
      <input name="username" ng-model="vm.registration.username" ng-model-options="{ updateOn: 'blur' }" minlength="3" required>
      <div ng-messages="vm.registrationForm.username.$error" >
        <div ng-message="required">Username is required.</div>
        <div ng-message="minlength">Minimum 3 characters is required.</div>
      </div>
    </md-input-container>
    <md-input-container>
      <label>Email</label>
      <input name="email" ng-model="vm.registration.email" ng-model-options="{ updateOn: 'blur' }" type="email" required>
      <div ng-messages="vm.registrationForm.email.$error">
        <div ng-message="required">Email is required.</div>
        <div ng-message="email">Email is not correct.</div>
      </div>
    </md-input-container>
    <md-input-container>
      <label>Password</label>
      <input name="password" ng-model="vm.registration.password" ng-model-options="{ updateOn: 'blur' }" type="password" ng-pattern="/.{8,}$/" required>
      <div ng-messages="vm.registrationForm.password.$error" >
        <div ng-message="required">Password is required</div>
        <div ng-message="pattern">At least of 8 symbols required</div>
      </div>
    </md-input-container>
    <md-input-container>
      <label>Confirm Password</label>
      <input name="confirmPassword" ng-model="vm.registration.confirmPassword" type="password" required>
      <div ng-messages="vm.registrationForm.confirmPassword.$error">
      <div ng-show="vm.registrationForm.confirmPassword.$dirty && !vm.passportMatch()">Passwort don't match</div>
      </div>
    </md-input-container>
    <div layout="row">
      <div flex="50" flex-sm="100">
        <md-button type="submit" class="md-raised md-primary">
          Sign up
        </md-button>
      </div>
    </div>
  </form>
</md-content>
