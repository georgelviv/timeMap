<div>
	<md-list>
	<div class="events-title">Events</div>
	    <md-list-item ng-repeat="event in vm.events" ng-click="goToPerson(event.title, $event)" class="noright">
		    <i class="material-icons place-icon">place</i>
		    <div class="event-details">
		    	<h4 class="event-title">{{ event.title }}</h3>
		    	<p class="event-date">{{ event.date | date : format : timezone}}</p>
		    </div>
	    	<i class="material-icons edit-icon">mode_edit</i>
	    	<button ng-click="vm.deleteEvent(event._id)">
	    		<i class="material-icons">delete</i>
	    	</button>
		    <md-divider ng-if="!$last"></md-divider>
	  	</md-list-item>
	</md-list>
	<div class="events-arrows-wrap">
		<button class="events-arrow-left events-arrow" ng-click="vm.showPrev()">
			<i class="material-icons">keyboard_arrow_left</i>
		</button>
		<button class="events-arrow-right events-arrow" ng-click="vm.showNext()">
			<i class="material-icons">keyboard_arrow_right</i>
		</button>
	</div>
</div>