
	<md-content layout="vertical" flex id="content">
		<div ng-cloak>
	    <md-tabs md-dynamic-height md-border-bottom>
	      <md-tab label="Sing in">
	        <md-content class="md-padding">
	          <form layout="column" name="userForm" layout-align="center center" layout-fill>
							<md-input-container>
								<label>Username</label>
								<input ng-model="user.username" required>
							</md-input-container>
							<md-input-container>
								<label>Password</label>
								<input ng-model="user.password" type="password" required>
							</md-input-container>
							<md-input-container layout-align="center center">
								<div layout="row" layout-sm="column" layout-margin>
									<md-button class="md-raised" flex="50" flex-sm="100" ng-click="vm.loginUser()">Sing in</md-button>
								</div>
							</md-input-container>
						</form>
	        </md-content>
	      </md-tab>
	      <md-tab label="Sing up">
	        <md-content class="md-padding">
	          <form layout="column" name="userForm" layout-align="center center" layout-fill>
							<md-input-container>
								<label>Username</label>
								<input ng-model="user.username" required>
							</md-input-container>
							<md-input-container>
								<label>Password</label>
								<input ng-model="user.password" type="password" required>
							</md-input-container>
							<md-input-container layout-align="center center">
								<div layout="row" layout-sm="column" layout-margin>
									<md-button class="md-raised md-primary" flex="50" flex-sm="100" ng-click="vm.createUser()">Sign up</md-button>
								</div>
							</md-input-container>
						</form>
	        </md-content>
	      </md-tab>
	    </md-tabs>
	</div>
</md-content>

