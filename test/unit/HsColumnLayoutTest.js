//
// test/unit/HsColumnLayoutTest.js
//
describe("factory: HsColumnLayout", function() {
    var elem; 
    var layout;
    var scope;
    var widgets;
    
    beforeEach(module('hsLayout'));
 
    describe('when not specifying widths', function() {
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
    
    describe('when specifying single %-width,', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            elem = '<hs-layout hs-columns=["10%"]><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            elem = $compile(elem)(scope);
            scope.$digest();
        }));
        
        beforeEach(function() {
            widgets = $.makeArray(elem.find('hs-widget'));
        });
            
        describe('widgets', function() {
            it ('should have a width of 10%',   function() { 
                expect(parseInt($(widgets[0]).css('width'))).toBe(10); 
                expect(parseInt($(widgets[1]).css('width'))).toBe(10); 
                expect(parseInt($(widgets[2]).css('width'))).toBe(10); 
            });
        });
            
        describe('the first widget', function() {
            it ('should be at left',            function() { expect(parseInt($(widgets[0]).css('left'))).toBe(0); });
        });
        
        describe('the second widget', function() {
            it ('should be at left 10%',        function() { expect(parseInt($(widgets[1]).css('left'))).toBe(10); });
        });
        
        describe('the third widget', function() {
            it ('should have a left of 20%',    function() { expect(parseInt($(widgets[2]).css('left'))).toBe(20); });
        });
    });
    
    describe('when specifying the %-width of first column', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            elem = '<hs-layout hs-columns=["10%",]><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            elem = $compile(elem)(scope);
            scope.$digest();
        }));
        
        beforeEach(function() {
            widgets = $.makeArray(elem.find('hs-widget'));
        });
            
        describe('the first widget', function() {
            it ('should be at left',            function() { expect(parseInt($(widgets[0]).css('left'))).toBe(0); });
            it ('should have a width of 10%',   function() { expect(parseInt($(widgets[0]).css('width'))).toBe(10); });
        });
        
        describe('the second widget', function() {
            it ('should be at left 10%',        function() { expect(parseInt($(widgets[1]).css('left'))).toBe(10); });
            it ('should have a width of 45%',   function() { expect(parseInt($(widgets[1]).css('width'))).toBe(45); });
        });
        
        describe('the third widget', function() {
            it ('should have a left of 55%',    function() { expect(parseInt($(widgets[2]).css('left'))).toBe(55); });
            it ('should be right aligned',      function() { expect(parseInt($(widgets[2]).css('right'))).toBe(0); });
        });
    });
    
    describe('when specifying the %-width of last column', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            elem = '<hs-layout hs-columns=[,"10%"]><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            elem = $compile(elem)(scope);
            scope.$digest();
        }));
        
        beforeEach(function() {
            widgets = $.makeArray(elem.find('hs-widget'));
        });
    
        describe('the first widget', function() {
            it ('should be at left',            function() {expect(parseInt($(widgets[0]).css('left'))).toBe(0); });
            it ('should have a width of 45%',   function() { expect(parseInt($(widgets[0]).css('width'))).toBe(45); });
        });
        
        describe('the second widget', function() {
            it ('should be at left 45%',        function() { expect(parseInt($(widgets[1]).css('left'))).toBe(45); });
            it ('should have a width of 45%',   function() { expect(parseInt($(widgets[1]).css('width'))).toBe(45); });
        });
        
        describe('the third widget', function() {
            it ('should have a left of 90%',    function() { expect(parseInt($(widgets[2]).css('left'))).toBe(90); });
            it ('should be right aligned',      function() { expect(parseInt($(widgets[2]).css('width'))).toBe(10); });
        });
    });
    
    describe('when specifying the %-width of first and last column for 3 columns', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            elem = '<hs-layout hs-columns=["20%",,"10%"]><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            elem = $compile(elem)(scope);
            scope.$digest();
        }));
        
        beforeEach(function() {
            widgets = $.makeArray(elem.find('hs-widget'));
        });
    
        describe('the first widget', function() {
            it ('should be at left',            function() { expect(parseInt($(widgets[0]).css('left'))).toBe(0); });
            it ('should have a width of 20%',   function() { expect(parseInt($(widgets[0]).css('width'))).toBe(20); });
        });
        
        describe('the second widget', function() {
            it ('should be at left 20%',        function() { expect(parseInt($(widgets[1]).css('left'))).toBe(20); });
            it ('should have a width of 70%',   function() { expect(parseInt($(widgets[1]).css('width'))).toBe(70); });
        });
        
        describe('the third widget', function() {
            it ('should have a left of 90%',    function() { expect(parseInt($(widgets[2]).css('left'))).toBe(90); });
            it ('should be right aligned',      function() { expect(parseInt($(widgets[2]).css('width'))).toBe(10); });
        });
    });
    
    describe('when specifying single px-width,', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            elem = '<hs-layout hs-columns=["100px"]><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            elem = $compile(elem)(scope);
            scope.$digest();
        }));
        
        beforeEach(function() {
            widgets = $.makeArray(elem.find('hs-widget'));
        });
            
        describe('widgets', function() {
            it ('should have a width of 100px',   function() { 
                expect($(widgets[0]).css('width')).toBe('100px'); 
                expect($(widgets[1]).css('width')).toBe('100px'); 
                expect($(widgets[2]).css('width')).toBe('100px'); 
            });
        });
            
        describe('the first widget', function() {
            it ('should be at left',            function() { expect($(widgets[0]).css('left')).toBe('0px'); });
        });
        
        describe('the second widget', function() {
            it ('should be at left 100px',        function() { expect($(widgets[1]).css('left')).toBe('100px'); });
        });
        
        describe('the third widget', function() {
            it ('should have a left of 200px',    function() { expect($(widgets[2]).css('left')).toBe('200px'); });
        });
    });
    
    describe('when specifying the px-width of first column', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            elem = '<hs-layout hs-columns=["100px",]><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            elem = $compile(elem)(scope);
            scope.$digest();
        }));
        
        beforeEach(function() {
            widgets = $.makeArray(elem.find('hs-widget'));
        });
    
        describe('the first widget', function() {
            it ('should be at left',            function() { expect(parseInt($(widgets[0]).css('left'))).toBe(0); });
            it ('should have a width of 100px', function() { expect($(widgets[0]).css('width')).toBe('100px'); });
        });
        
        describe('the second widget', function() {
            it ('should be at left 100px',      function() { expect($(widgets[1]).css('left')).toBe('100px'); });
        });
        
        describe('the third widget', function() {
            it ('should be right aligned', function() {
                expect($(widgets[2]).css('right')).toBe('0%'); 
            });
        });
    });
    
    describe('when specifying the px-width of last column', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            elem = '<hs-layout hs-columns=[,"50px"]><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            elem = $compile(elem)(scope);
            scope.$digest();
        }));
        
        beforeEach(function() {
            widgets = $.makeArray(elem.find('hs-widget'));
        });
        describe('the first widget', function() {
            it ('should be at left',            function() { expect(parseInt($(widgets[0]).css('left'))).toBe(0); });
            it ('should have a right of 66%',    function() { expect(parseInt($(widgets[0]).css('right'))).toBe(66); });            
        });
        
        describe('the second widget', function() {
            it ('should be at right 50x',       function() { expect($(widgets[1]).css('right')).toBe('50px'); });            
            it ('should have a left of 33.3%',    function() { expect(parseInt($(widgets[1]).css('left'))).toBe(33); });            
        });
        
        describe('the third widget', function() {
            it ('should have a left of 50px',   function() { expect($(widgets[2]).css('width')).toBe('50px'); });
            it ('should be right aligned',      function() { expect(parseInt($(widgets[2]).css('right'))).toBe(0); });
        });
    });
    
    describe('when specifying the px-width of first and last column for 3 columns', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            elem = '<hs-layout hs-columns=["20px",,"10px"]><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            elem = $compile(elem)(scope);
            scope.$digest();
        }));
        
        beforeEach(function() {
            widgets = $.makeArray(elem.find('hs-widget'));
        });
        describe('the first widget', function() {
            it ('should be at left',            function() { expect(parseInt($(widgets[0]).css('left'))).toBe(0); });
            it ('should have a width of 20%',   function() { expect(parseInt($(widgets[0]).css('width'))).toBe(20); });
        });
        
        describe('the second widget', function() {
            it ('should be at left 20px',       function() { expect($(widgets[1]).css('left')).toBe('20px'); });
            it ('should have a right of 10px',  function() { expect($(widgets[1]).css('right')).toBe('10px'); });
        });
        
        describe('the third widget', function() {
            it ('should be right aligned',      function() { expect($(widgets[2]).css('right')).toBe('0px'); });
            it ('should have a width of 10px',  function() { expect($(widgets[2]).css('width')).toBe('10px'); });
        });
    });
}); 
