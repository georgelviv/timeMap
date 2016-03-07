<section class='auth'>
	<md-content layout="vertical" flex id="content">
		<div ng-cloak>
	    <md-tabs md-dynamic-height md-border-bottom>
	    	<md-tab label="Sing in" >
          <div  ng-include="'auth/partials/login.tpl'"></div> 
        </md-tab>
        <md-tab label="Sing up" >
          <div  ng-include="'auth/partials/registration.tpl'"></div> 
        </md-tab>
      </md-tabs>
		</div>
	</md-content>
</section>
