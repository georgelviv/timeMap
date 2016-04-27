<section class="event">
  <div ng-show="vm.currentState == 'edit'" ng-include="'directives/event/partials/edit.tpl'"></div>
  <div ng-show="vm.currentState == 'details'" ng-include="'directives/event/partials/details.tpl'"></div>
</section>
