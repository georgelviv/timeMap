<md-content ng-show="!!vm.events">
  <md-divider class="bottom-space"></md-divider>
  <md-content class="bottom-space">
    <md-button class="md-raised" ng-click="vm.addEvent($event)">
      <span ng-show="!vm.eventsFormShow">Add Event</span>
      <span ng-show="vm.eventsFormShow">Hide Form</span>
    </md-button>

    <div ng-show="vm.eventsFormShow" >
      <form name="eventForm" ng-submit="vm.postEvent(eventForm)">
        <md-input-container class="md-block" flex-gt-sm>
          <label>Title</label>
          <input name="title" ng-model="vm.eventsForm.title" required>
          <div ng-messages="eventForm.title.$error">
            <div ng-message="required">Title is required.</div>
          </div>
        </md-input-container>
        <md-input-container class="md-block">
          <label>Description</label>
          <textarea ng-model="vm.eventsForm.description" columns="1" md-maxlength="150" rows="5"></textarea>
        </md-input-container>
        <md-button class="md-raised md-primary" type="submit">Add event</md-button>
      </form>
    </div>
  </md-content>

  <h3 class="md-headline text-center bottom-space" ng-hide="vm.events.length">
    No events
  </h3>

  <md-content ng-show="vm.events.length">
    <md-divider ></md-divider>
    <md-list>
      <md-subheader class="md-no-sticky">Events list</md-subheader>
      <md-list-item class="md-3-line" ng-repeat="event in vm.events | orderBy:id:reverse">
        <div class="md-list-item-text" layout="column">
          <h3>{{ event.title }}</h3>
          <p>{{ event.description }}</p>
        </div>
      </md-list-item>
    </md-list>
    <md-divider ></md-divider>
  </md-content>
  <md-divider class="bottom-space"></md-divider>
</md-content>
