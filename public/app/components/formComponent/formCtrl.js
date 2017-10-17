(function(){
    'use strict'

    angular
        .module('regucom')
        .component('formComponent', {
            templateUrl: 'app/components/formComponent/formComponent.html',
            controller: formCtrl,
            controllerAs: 'vm'

        });


        formCtrl.$inject = ['$firebaseArray','$scope','firebaseData']
        function formCtrl($firebaseArray,$scope,firebaseData){
            var vm = this;

            vm.firebaseData = firebaseData;
            $scope.messages = firebaseData;


            $scope.addMessage = function(){
                $scope.messages.$add({
                    nombre: $scope.nombre,
                    telefono: $scope.telefono,
                    web: $scope.web,
                    pais: $scope.pais,
                    rfc: $scope.rfc,
                    tax: $scope.tax,
                    producto: $scope.producto,
                    direccion_1: $scope.direccion_1,

                    contacto_1: $scope.contacto_1,
                    puesto_1: $scope.puesto_1,
                    email_1: $scope.email_1,
                    telefono_1: $scope.telefono_1,

                    contacto_2: $scope.contacto_2,
                    puesto_2: $scope.puesto_2,
                    email_2: $scope.email_2,
                    telefono_2: $scope.telefono_2,

                    contacto_3: $scope.contacto_3,
                    puesto_3: $scope.puesto_3,
                    email_3: $scope.email_3,
                    telefono_3: $scope.telefono_3,

                    beneficiario: $scope.beneficiario,
                    banco_nacional: $scope.banco_nacional,
                    cuenta: $scope.cuenta,
                    sucursal: $scope.sucursal,
                    clabe: $scope.clabe,

                    beneficiario_2: $scope.beneficiario_2,
                    banco_internacional: $scope.banco_internacional,
                    direccion_banco: $scope.direccion_banco,
                    cta: $scope.cta,
                    swift: $scope.swift,

                });


           console.log("si funciona")
         };


        }


})();
