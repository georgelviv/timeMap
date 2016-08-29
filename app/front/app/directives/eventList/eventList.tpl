<div>
	<div class="events-title">Events</div>
    <md-list>
	    <md-list-item ng-repeat="event in vm.events" ng-click="vm.showSideBar(event, 'events-details')"
           class="noright">
				<div layout="row" style="width: 100%">
	        <div flex="15" class="event-icon">
	          <i class="material-icons place-icon">place</i>
	        </div>
			    <div flex="50" class="event-details">
	          <md-content>
	  		    	<h4 class="event-title">{{ event.title }}</h3>
	  		    	<p class="event-date">{{ event.date | date : format : timezone}}</p>
	          </md-content>
			    </div>
	        <div flex="35" class="event-actions" layout="row">
						<md-button class="md-icon-button">
							<i class="material-icons edit-icon">mode_edit</i>
						</md-button>
	          <md-button class="md-icon-button" ng-click="vm.deleteEvent($event, event._id)">
	            <i class="material-icons">delete</i>
	          </md-button>
	        </div>
				</div>
		    <md-divider ng-if="!$last"></md-divider>
	  	</md-list-item>
	</md-list>
	<div ng-show="vm.events.length" class="events-arrows-wrap">
		<button class="events-arrow-left events-arrow" ng-click="vm.showPrev()">
			<i class="material-icons">keyboard_arrow_left</i>
		</button>
		<button class="events-arrow-right events-arrow" ng-click="vm.showNext()">
			<i class="material-icons">keyboard_arrow_right</i>
		</button>
	</div>
	<div ng-hide="vm.events.length" class="md-title text-center">
		There is no events here. Please add one.
	</div>
</div>
