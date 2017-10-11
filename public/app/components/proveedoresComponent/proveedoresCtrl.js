(function(){
  'use strict'

  angular
      .module('regucom')
      .component('proveedoresComponent',{
          templateUrl: 'app/components/proveedoresComponent/proveedoresComponent.html',
          controller: proveedoresCtrl,
          controllerAs:'vm'
      });



      proveedoresCtrl.$inject =['$location'];
      function proveedoresCtrl(){
        var vm = this;
      }




})();
