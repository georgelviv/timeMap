<form name="eventEdit" ng-submit="vm.saveEvent(event, eventEdit)">
  <md-content layout="row">
    <div flex="70">
      <md-input-container class="md-block">
        <label>Title</label>
        <input name="title" ng-model="event.editData.title" minlength="3" required>
        <div ng-messages="eventEdit.title.$error">
          <div ng-message="required">Title is required.</div>
          <div ng-message="minlength">Minimum 3 characters is required.</div>
        </div>
      </md-input-container>
      <md-content layout="row">
        <div flex="60">
          <md-input-container class="md-block">
            <label>Description</label>
            <textarea ng-model="event.editData.description" columns="1" md-maxlength="150" rows="5"></textarea>
          </md-input-container>
        </div>
        <div flex="30"  class="inner-left-space">
          <label class="date-picker-label">
            Date of event
            <md-datepicker name="date" ng-model="event.editData.date" md-placeholder="Enter date" required>
            </md-datepicker>
          </label>
          <div ng-messages="eventEdit.date.$error" class="validation-messages">
            <div ng-message="valid">The entered value is not a date!</div>
            <div ng-message="required">Date is required.</div>
          </div>
        </div>
      </md-content>
    </div>
    <div flex="30">
      <div class="md-secondary">
        <md-button class="md-raised" ng-click="vm.editEvent(event, true)">Cancel</md-button>
        <md-button class="md-raised  md-primary" type="submti">Save</md-button>
      </div>
    </div>
  </md-content>
</form>
