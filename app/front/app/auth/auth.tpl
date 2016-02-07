<div layout="column" flex id="content" role="main">
	<md-content layout="vertical" flex id="content">
		<div layout="row" layout-align="center center" layout-fill>
			<md-whiteframe class="md-whiteframe-z1" layout="column" flex="30" layout-padding>
				<md-content md-theme="docs-dark">
					<md-input-container>
						<label>Username</label>
						<input ng-model="user.username">
					</md-input-container>
					<md-input-container>
						<label>Password</label>
						<input ng-model="user.password" type="password">
					</md-input-container>
					<md-input-container layout-align="center center">
						<div layout="row" layout-sm="column" layout-margin>
							<md-button class="md-raised" flex="50" flex-sm="100" ng-click="vm.loginUser()" >Login</md-button>
							<md-button class="md-raised md-primary" flex="50" flex-sm="100" ng-click="vm.createUser()">Register</md-button>
						</div>
					</md-input-container>
				</md-content>
			</md-whiteframe>
		</div>
	</md-content>
</div>
