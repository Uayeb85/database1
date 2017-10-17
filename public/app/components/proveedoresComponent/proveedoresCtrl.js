(function(){
  'use strict'

  angular
      .module('regucom')
      .component('proveedoresComponent',{
          templateUrl: 'app/components/proveedoresComponent/proveedoresComponent.html',
          controller: proveedoresCtrl,
          controllerAs:'vm'
      });



      proveedoresCtrl.$inject =['$firebaseArray', 'firebaseData', '$scope'];
      function proveedoresCtrl(firebaseData,$firebaseArray, $scope){
        var vm = this;


      vm.firebaseData =  firebaseData;

        console.log(vm.firebaseData)
      }




})();
