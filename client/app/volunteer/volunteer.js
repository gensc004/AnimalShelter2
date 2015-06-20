'use strict';

angular.module('animalShelter2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('volunteer', {
        url: '/volunteer',
        templateUrl: 'app/volunteer/volunteer.html',
        controller: 'VolunteerCtrl'
      });
  });