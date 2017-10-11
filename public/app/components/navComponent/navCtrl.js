(function(){
  'use strict'

  angular
      .module('regucom')
      .component('navComponent',{
          templateUrl: 'app/components/navComponent/navComponent.html',
          controller: navCtrl,
          controllerAs:'vm'
      });

      navCtrl.$inject =['$location'];
      function navCtrl(){
        var vm = this;
      }
})();
