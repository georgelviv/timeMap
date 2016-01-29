<form name="eventEdit" ng-submit="vm.saveEvent(event, eventEdit)">
  <md-content layout="row">
    <div flex="70">
      <md-input-container class="md-block">
        <label>Title</label>
        <input name="title" ng-model="event.editData.title" required>
        <div ng-messages="event.editData.title.$error">
          <div ng-message="required">Title is required.</div>
        </div>
      </md-input-container>
      <md-input-container class="md-block">
        <label>Description</label>
        <textarea ng-model="event.editData.description" columns="1" md-maxlength="150" rows="5"></textarea>
      </md-input-container>
    </div>
    <div flex="30">
      <div class="md-secondary">
        <md-button class="md-raised" ng-click="vm.editEvent(event, true)">Cancel</md-button>
        <md-button class="md-raised  md-primary" type="submti">Save</md-button>
      </div>
    </div>
  </md-content>
</form>
