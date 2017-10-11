(function () {
  'use strict'

  angular
      .module('regucom',['ngRoute','ngResource','firebase'])
      .config(function () {
          let config={
            apiKey: "AIzaSyC7brWi2yJJQIW7tOaBFp620yJl_-lKX0I",
            authDomain: "angularfire-2f23a.firebaseapp.com",
     databaseURL: "https://angularfire-2f23a.firebaseio.com",
    projectId: "angularfire-2f23a",
    storageBucket: "angularfire-2f23a.appspot.com",
    messagingSenderId: "942959154689"
          };
          firebase.initializeApp(config)

      })

})();
