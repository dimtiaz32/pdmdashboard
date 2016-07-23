(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'Profile',
        icon: 'person',
        sref: '.profile'
      },
      {
        name: 'Workout',
        icon: 'directions_run',
        sref: '.workout'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
