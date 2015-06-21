'use strict';

angular.module('animalShelter2App')
  .controller('VolunteerCtrl', function ($scope, $http) {
    $scope.sections = [];
    $scope.currentSection = {};
    $scope.openForm = true
    $http.get('/api/sections').success(function(awesomeThings) {
      $scope.sections = awesomeThings;
      $scope.currentSection = awesomeThings[0];
    });
    $scope.switchSection = function(section) {
    	$scope.currentSection = section;

    }
  });
