(function () {
    'use strict'

    config.$inject = ["$routeProvider"]
    function config($routeProvider){
        $routeProvider

        .when('/menu',{
            template:'<menu-component></menu-component>',
            controllerAs: 'vm'
        })

        .when('/alta',{
            template:'<form-component></form-component>',
            controllerAs: 'vm'
        })

        .when('/proveedores',{
            template:'<proveedores-component></proveedores-component>',
            controllerAs: 'vm'
        })

        .otherwise({
          redirectTo:'/menu'
        });
    }

    angular
    .module('regucom')
    .config(config);

})();
