<form class="event__edit-form" name="vm.form" ng-submit="vm.submitEvent()">
  <fieldset>
    <legend class="md-headline">
      <span ng-show="vm.isNew">Add new Event</span>
      <span ng-hide="vm.isNew">Edit Event</span>
    </legend>

  <div>
      <md-input-container class="md-block">
        <label>Title</label>
        <input name="title" ng-model="vm.editEvent.title" minlength="3" maxlength="200" required>
        <div ng-messages="vm.form.title.$error">
          <div ng-message="required">Title is required.</div>
          <div ng-message="minlength">Minimum 3 characters is required.</div>
          <div ng-message="maxlength">Maximum 200 characters is required.</div>
        </div>
      </md-input-container>

      <md-input-container class="md-block">
        <label>Description</label>
        <textarea ng-model="vm.editEvent.description" columns="10" maxlength="1000" rows="10"></textarea>
      </md-input-container>

      <div class="date-picker">
        <label>
          <h4>Date of event</h4>
          <md-datepicker name="date" ng-model="vm.editEvent.date" md-placeholder="Enter date" required>
          </md-datepicker>
        </label>
        <div ng-messages="vm.form.date.$error" class="validation-messages">
          <div ng-message="valid">The entered value is not a date!</div>
          <div ng-message="required">Date is required.</div>
        </div>
      </div>

      <div class="event__edit-form__coordinates">
        <md-input-container class="md-block">
          <label>Latitude</label>
          <input name="latitude" ng-model="vm.editEvent.coordinates.latitude" required>
          <div ng-messages="vm.form.latitude.$error">
            <div ng-message="required">Latitude is required.</div>
          </div>
        </md-input-container>
        <md-input-container class="md-block">
          <label>Longitude</label>
          <input name="longitude" ng-model="vm.editEvent.coordinates.longitude" required>
          <div ng-messages="vm.form.longitude.$error">
            <div ng-message="required">Longitude is required.</div>
          </div>
        </md-input-container>
      </div>

      <div class="event__edit-form__submit-wrapper">
        <md-button class="md-raised" ng-click="">Cancel</md-button>
        <md-button class="md-raised  md-primary" type="submit">
          <span ng-show="vm.isNew">Save</span>
          <span ng-hide="vm.isNew">Update</span>
        </md-button>
      </div>
  </div>
  </fieldset>
</form>
