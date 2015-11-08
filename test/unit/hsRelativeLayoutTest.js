//
// test/unit/HsColumnLayoutTest.js
//
describe("factory: HsRelativeLayout", function() {
    var elem; 
    var layout;
    var scope;
    var widgets;
    
    beforeEach(module('hsLayout'));
 
    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope.$new();
        elem = '<hs-layout hs-columns><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
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
        
        it ('should be top and bottom aligned', function() {
            expect($(widgets[0]).css('top')).toBe('0px'); 
            expect($(widgets[1]).css('top')).toBe('0px'); 
            expect($(widgets[2]).css('top')).toBe('0px'); 
            expect($(widgets[0]).css('bottom')).toBe('0px'); 
            expect($(widgets[1]).css('bottom')).toBe('0px'); 
            expect($(widgets[2]).css('bottom')).toBe('0px'); 
        });        
    });
    
    describe('widgets', function() {
        it ('should have a width of 33%',   function() { 
            expect(parseInt($(widgets[0]).css('width'))).toBe(33); 
            expect(parseInt($(widgets[1]).css('width'))).toBe(33); 
        });
    });
    describe('the first widget', function() {
        it ('should be left aligned', function() { expect(parseInt($(widgets[0]).css('left'))).toBe(0); });
    });
    
    describe('the second widget', function() {
        it ('should be in the middle', function() { expect(parseInt($(widgets[1]).css('left'))).toBe(33); });
    });
    
    describe('the third widget', function() {
        it ('should have left @66%', function() { expect(parseInt($(widgets[2]).css('left'))).toBe(66); });
        it ('should b eright aligned', function() { expect(parseInt($(widgets[2]).css('right'))).toBe(0); });
    });
}); 
