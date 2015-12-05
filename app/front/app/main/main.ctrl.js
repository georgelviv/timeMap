(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainCtrl', MainController);

  function MainController(loggerApi, spinnerApi, $http) {
    var vm = this;
    var apiExample = 'http://api.openweathermap.org/data/2.5/weather';
    apiExample += '?q=London,uk&appid=2de143494c0b295cca9337e1e96b00e0';
    vm.toogle = spinnerApi.toogle;

    activate();

    function activate() {
      loggerApi.info('app.main activated');
      $http.get(apiExample)
      .success(function(data) {
        console.log(data);
        loggerApi.info(data, 'Data');
      });
      // throw new Error('Annoying Error');
    }

  }
})();
