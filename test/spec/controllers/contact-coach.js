'use strict';

describe('Controller: ContactCoachCtrl', function () {

  // load the controller's module
  beforeEach(module('rankedResourcesApp'));

  var ContactCoachCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactCoachCtrl = $controller('ContactCoachCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactCoachCtrl.awesomeThings.length).toBe(3);
  });
});
