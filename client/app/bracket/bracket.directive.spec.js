'use strict';

describe('Directive: bracket', function () {

  // load the directive's module and view
  beforeEach(module('animalShelter2App'));
  beforeEach(module('app/bracket/bracket.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bracket></bracket>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the bracket directive');
  }));
});