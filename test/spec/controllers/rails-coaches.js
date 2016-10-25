'use strict';

describe('Controller: RailsCoachesCtrl', function () {

  // load the controller's module
  beforeEach(module('rankedResourcesApp'));

  var RailsCoachesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RailsCoachesCtrl = $controller('RailsCoachesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RailsCoachesCtrl.awesomeThings.length).toBe(3);
  });
});
