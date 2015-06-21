'use strict';

angular.module('animalShelter2App')
  .directive('bracket', function () {
    return {
      templateUrl: 'app/bracket/bracket.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });