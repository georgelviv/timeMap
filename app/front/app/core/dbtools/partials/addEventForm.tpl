<md-content class="bottom-space">
  <md-button class="md-raised" ng-click="vm.addEvent($event)">
    <span ng-show="!vm.eventsFormShow">Add Event</span>
    <span ng-show="vm.eventsFormShow">Hide Form</span>
  </md-button>

  <div ng-show="vm.eventsFormShow">
    <form name="eventForm" ng-submit="vm.postEvent(eventForm)">
      <md-input-container class="md-block" flex-gt-sm>
        <label>Title</label>
        <input name="title" ng-model="vm.eventsForm.title" minlength="3" required>
        <div ng-messages="eventForm.title.$error">
          <div ng-message="required">Title is required.</div>
          <div ng-message="minlength">Minimum 3 characters is required.</div>
        </div>
      </md-input-container>
      <md-content layout="row">
        <div flex="60" flex-md="70">
          <md-input-container class="md-block">
            <label>Description</label>
            <textarea name="description" ng-model="vm.eventsForm.description" columns="1" md-maxlength="150"
                      rows="5">
            </textarea>
          </md-input-container>
        </div>
        <div flex="25" class="inner-left-space">
          <label class="date-picker-label">
            Date of event
            <md-datepicker name="date" ng-model="vm.eventsForm.date" md-placeholder="Enter date" required ng-required="true">
            </md-datepicker>
          </label>
          <div ng-messages="eventForm.date.$error" class="validation-messages">
            <div ng-message="valid">The entered value is not a date!</div>
            <div ng-message="required">Date is required.</div>
          </div>
        </div>
      </md-content>
      <md-button class="md-raised md-primary" type="submit">Add event</md-button>
    </form>
  </div>
</md-content>
