'use strict';

describe('Controller: MainCtrl', function () {
    var MainCtrl, scope;

    beforeEach(module('odinApp'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller) {
        scope = {};
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
});


