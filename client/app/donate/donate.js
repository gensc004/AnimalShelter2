'use strict';

angular.module('animalShelter2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('donate', {
        url: '/donate',
        templateUrl: 'app/donate/donate.html',
        controller: 'DonateCtrl'
      });
  });