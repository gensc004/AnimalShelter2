'use strict';

angular.module('animalShelter2App')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Volunteer',
      'link': '/volunteer'
    },
    {
      'title': 'Donate',
      'link': '/donate'
    },
    {
      'title': 'About',
      'link': '/about'
    },
];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });