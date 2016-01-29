<md-content class="bottom-space">
  <md-button class="md-raised" ng-click="vm.addEvent($event)">
    <span ng-show="!vm.eventsFormShow">Add Event</span>
    <span ng-show="vm.eventsFormShow">Hide Form</span>
  </md-button>

  <div ng-show="vm.eventsFormShow">
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
