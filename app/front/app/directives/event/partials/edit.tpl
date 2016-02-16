<form class="event__edit-form" name="vm.event.form" ng-submit="vm.saveEvent()">
  <fieldset>
    <legend class="md-headline">
      <span ng-show="vm.isNew">Add new Event</span>
      <span ng-hide="vm.isNew">Edit Event</span>
    </legend>

  <div>
      <md-input-container class="md-block">
        <label>Title</label>
        <input name="title" ng-model="vm.event.edit.title" minlength="3" maxlength="200" required>
        <div ng-messages="vm.event.form.title.$error">
          <div ng-message="required">Title is required.</div>
          <div ng-message="minlength">Minimum 3 characters is required.</div>
          <div ng-message="maxlength">Maximum 200 characters is required.</div>
        </div>
      </md-input-container>

      <md-input-container class="md-block">
        <label>Description</label>
        <textarea ng-model="vm.event.edit.description" columns="10" maxlength="1000" rows="10"></textarea>
      </md-input-container>

      <div class="date-picker">
        <label>
          <h4>Date of event</h4>
          <md-datepicker name="date" ng-model="vm.event.edit.date" md-placeholder="Enter date" required>
          </md-datepicker>
        </label>
        <div ng-messages="vm.event.form.date.$error" class="validation-messages">
          <div ng-message="valid">The entered value is not a date!</div>
          <div ng-message="required">Date is required.</div>
        </div>
      </div>

      <div class="event__edit-form__coordinates">
        <md-input-container class="md-block">
          <label>Latitude</label>
          <input name="latitude" ng-model="vm.event.edit.coordinates.latitude" required>
          <div ng-messages="vm.event.form.latitude.$error">
            <div ng-message="required">Latitude is required.</div>
          </div>
        </md-input-container>
        <md-input-container class="md-block">
          <label>Longitude</label>
          <input name="longitude" ng-model="vm.event.edit.coordinates.longitude" required>
          <div ng-messages="vm.event.form.longitude.$error">
            <div ng-message="required">Longitude is required.</div>
          </div>
        </md-input-container>
      </div>

      <div class="event__edit-form__submit-wrapper">
        <md-button class="md-raised" ng-click="vm.editEvent(event, true)">Cancel</md-button>
        <md-button class="md-raised  md-primary" type="submti">Save</md-button>
      </div>
  </div>
  </fieldset>
</form>
