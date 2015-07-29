//
// test/unit/HsTileLayoutTest.js
//
describe("factory: HsTileLayout", function() {
    var elem; 
    var layout;
    var scope;
    var widgets;
    
    beforeEach(module('hsWidgets'));
 
    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope.$new();
        scope.num = [1,2,3];
        elem = '<hs-layout hs-fill-last-col><hs-widget ng-repeat="w in num">{{w}}</hs-widget></hs-layout>';
        elem = $compile(elem)(scope);
        scope.$digest();
    }));
    
    beforeEach(function() {
        widgets = $.makeArray(elem.find('hs-widget'));
    });

    it('Should have a layout in the scope', function() {
        expect(scope.layout).toBeDefined();
        layout = scope.layout;
    });
    
    describe('the widgets', function() {
        it('should be 3', function() {
            expect(widgets.length).toBe(3);
        });
        
        it ('should have a height of 50%', function() {
            expect($(widgets[0]).css('height')).toBe('50%'); 
            expect($(widgets[1]).css('height')).toBe('50%'); 
            expect($(widgets[2]).css('height')).toBe('50%'); 
        });        
    });
    
    describe('the first widget', function() {
        it ('should be at top left', function() {
            expect($(widgets[0]).css('left')).toBe('0%'); 
            expect($(widgets[0]).css('top')).toBe('0%'); 
        });
        
        it ('should have a width of 50%', function() {
            expect($(widgets[0]).css('width')).toBe('50%'); 
        });
    });
    
    describe('the second widget', function() {
        it ('should be at top middle', function() {
            expect($(widgets[1]).css('left')).toBe('50%'); 
            expect($(widgets[1]).css('top')).toBe('0%'); 
        });
        
        it ('should have a width of 50%', function() {
            expect($(widgets[1]).css('width')).toBe('50%'); 
        });
    });
    
    describe('the third widget', function() {
        it ('should be at middle left', function() {
            expect($(widgets[2]).css('left')).toBe('0%'); 
            expect($(widgets[2]).css('top')).toBe('50%'); 
        });
        
        it ('should have a width of 100%', function() {
            expect($(widgets[2]).css('width')).toBe('100%'); 
        });
    });
}); 
