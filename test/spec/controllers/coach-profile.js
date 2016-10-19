'use strict';

describe('Controller: CoachProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('rankedResourcesApp'));

  var CoachProfileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CoachProfileCtrl = $controller('CoachProfileCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CoachProfileCtrl.awesomeThings.length).toBe(3);
  });
});
