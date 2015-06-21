'use strict';

angular.module('animalShelter2App')
  .controller('BracketCtrl', function ($scope, $location) {
    $scope.menu = [{
      name: 'asdf',
      children: [
        {
          name: 'asdf',
          children: [
            {
              name: 'asdfg',
              children: [
              ]
            }
          ]
        },
        {
          name: 'asdf',
          children: [
          ]
        }

      ]
    }];
    console.log($scope.menu)

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

  angular.module('animalShelter2App').directive('staticInclude', function($http, $templateCache, $compile) {
    return function(scope, element, attrs) {
        var templatePath = attrs.staticInclude;
        $http.get(templatePath, { cache: $templateCache }).success(function(response) {
            var contents = element.html(response).contents();
            $compile(contents)(scope);
        });
    };
});