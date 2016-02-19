<section class='auth'>
	<md-content layout="vertical" flex id="content">
		<div ng-cloak>
	    <md-tabs md-dynamic-height md-border-bottom>
	    	<md-tab label="Sing in" ng-click="vm.currentState = login" ng-click="vm.currentState = 'login'">
          <div ng-show="vm.currentState == 'login'" ng-include="'auth/partials/login.tpl'"></div> 
        </md-tab>
        <md-tab label="Sing up" ng-click="vm.currentState = registration" ng-click="vm.currentState = 'registration'">
          <div ng-show="vm.currentState == 'registration'" ng-include="'auth/partials/registration.tpl'"></div> 
        </md-tab>
      </md-tabs>
		</div>
	</md-content>
</section>
