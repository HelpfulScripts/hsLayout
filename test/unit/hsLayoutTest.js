//
// test/unit/HsColumnLayoutTest.js
//
describe("factory: HsLayout", function() {
    var elem; 
    var layout;
    var scope;
    var widgets;
    
    beforeEach(module('hsLayout'));
 
    describe('should have default functions', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            elem = '<hs-layout hs-rows><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
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
       
        it('Should have a containersize function', function() {
            expect(layout.containerSize(elem)).toEqual([0,0]);
        });
    });
                
}); 
