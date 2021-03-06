'use strict';

describe('Controller: CreateProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('rankedResourcesApp'));

  var CreateProfileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateProfileCtrl = $controller('CreateProfileCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreateProfileCtrl.awesomeThings.length).toBe(3);
  });
});
