<section class='auth'>
	<md-content layout="vertical" flex id="content">
		<div flex="100" ng-cloak>
	    <md-tabs md-dynamic-height md-border-bottom>
	    	<md-tab label="Sign in" >
          <div  ng-include="'directives/auth/partials/login.tpl'"></div>
        </md-tab>
        <md-tab label="Sign up" >
          <div  ng-include="'directives/auth/partials/registration.tpl'"></div>
        </md-tab>
      </md-tabs>
		</div>
	</md-content>
</section>
