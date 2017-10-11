(function(){
  'use strict'

  angular
      .module('regucom')
      .component('footerComponent',{
          templateUrl: 'app/components/footerComponent/footerComponent.html',
          controller: footerCtrl,
          controllerAs:'vm'
      });

      footerCtrl.$inject =['$location'];
      function footerCtrl(){
        var vm = this;
      }
})();
