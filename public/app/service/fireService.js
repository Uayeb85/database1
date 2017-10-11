(function() {
    'use strict'

    angular
       .module('regucom')
       .factory('firebaseData', firebaseData);

       firebaseData.$inject = ["$firebaseArray"]
       function firebaseData($firebaseArray) {

           var ref=firebase.database().ref();

           return $firebaseArray(ref);


       }

})();
