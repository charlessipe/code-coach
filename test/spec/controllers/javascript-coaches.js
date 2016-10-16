'use strict';

describe('Controller: JavascriptCoachesCtrl', function () {

  // load the controller's module
  beforeEach(module('rankedResourcesApp'));

  var JavascriptCoachesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JavascriptCoachesCtrl = $controller('JavascriptCoachesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(JavascriptCoachesCtrl.awesomeThings.length).toBe(3);
  });
});
