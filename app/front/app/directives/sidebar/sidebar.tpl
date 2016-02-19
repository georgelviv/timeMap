<section class="sidebar">
  <button ng-click="vm.addEvent()">
    <span ng-hide="vm.isAddEvent">Add event</span>
    <span ng-show="vm.isAddEvent">Hide form</span>
  </button>
  <div ng-show="vm.isAddEvent">
    <event is-new="true"></event>
  </div>
</section>
