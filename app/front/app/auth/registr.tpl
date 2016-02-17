<form layout="column" name="vm.registrationForm" layout-align="center center" layout-fill>
	<md-input-container>
		<label>Username</label>
		<input name="username" ng-model="vm.registration.username" minlength="3" required>
		<div ng-messages="vm.registrationForm.username.$error">
	<div ng-message="required">Username is required.</div>
	<div ng-message="minlength">Minimum 3 characters is required.</div>
	</div>
	</md-input-container>
	<md-input-container>
		<label>Password</label>
		<input name="password" ng-model="vm.registration.password" type="password" required>
		<div ng-messages="vm.registrationForm.password.$error">
		<div ng-message="required">Password is required.</div>
		<div ng-message="passportValid">Password is not correct</div>
	</div>
	</md-input-container>
	<md-input-container>
		<label>Email</label>
		<input name="email" ng-model="vm.email" type="email" required>
	</md-input-container>
	<md-input-container>
		<label>Confirm Password</label>
		<input ng-model="user.confirmPassword" type="password" required>
	</md-input-container>
	<md-input-container layout-align="center center">
		<div layout="row" layout-sm="column" layout-margin>
			<md-button class="md-raised md-primary" flex="50" flex-sm="100" ng-click="vm.createUser()">Sign up</md-button>
		</div>
	</md-input-container>
</form>