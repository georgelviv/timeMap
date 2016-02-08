<md-content ng-show="!!vm.events">
  <md-divider class="bottom-space"></md-divider>

  <div ng-include="'core/dbtools/partials/addEventForm.tpl'"></div>

  <h3 class="md-headline text-center bottom-space" ng-hide="vm.events.length">
    No events
  </h3>

  <md-content ng-show="vm.events.length">
    <md-divider ></md-divider>
    <md-list>
      <md-subheader class="md-no-sticky">Events list</md-subheader>
      <md-list-item class="md-3-line" ng-repeat="event in vm.events | orderBy:id:reverse">
        <div class="md-list-item-text" layout="column" ng-hide="event.editable">
          <h3>{{ event.title }}</h3>
          <h4>{{ event.date | date}}</h4>
          <p>{{ event.description }}</p>
          <div class="md-secondary">
            <md-button class="md-raised md-primary" ng-click="vm.editEvent(event)">Edit</md-button>
            <md-button class="md-raised md-warn" ng-click="vm.deleteEvent(event)">Delete</md-button>
          </div>
        </div>
        <div class="md-list-item-text" layout="column" ng-show="event.editable">
          <div ng-include="'core/dbtools/partials/editEventForm.tpl'"></div>
        </div>
      </md-list-item>
    </md-list>
    <md-divider ></md-divider>
  </md-content>
  <md-divider class="bottom-space"></md-divider>
</md-content>
