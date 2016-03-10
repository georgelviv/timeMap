(function() {
  'use strict';

  angular
    .module('app.tags')
    .directive('tags', tagsDirective);

  function tagsDirective() {
    var directive = {
      restrict: 'E',
      controller: tagsCtrl,
      controllerAs: 'vm',
      templateUrl: 'directives/tags/tags.tpl'
    };

    return directive;
  }

  function tagsCtrl() {
    var vm = this;

  }

})();
