'use strict';

describe('Controller: LearningJavascriptCtrl', function () {

  // load the controller's module
  beforeEach(module('rankedResourcesApp'));

  var LearningJavascriptCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LearningJavascriptCtrl = $controller('LearningJavascriptCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LearningJavascriptCtrl.awesomeThings.length).toBe(3);
  });
});
