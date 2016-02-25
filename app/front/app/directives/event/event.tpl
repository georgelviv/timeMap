<section class="event">
  <div ng-show="vm.currentState == 'preview'" ng-include="'directives/event/partials/preview.tpl'"></div>
  <div ng-show="vm.currentState == 'edit'" ng-include="'directives/event/partials/edit.tpl'"></div>
  <div ng-show="vm.currentState == 'details'" ng-include="'directives/event/partials/details.tpl'"></div>
</section>
