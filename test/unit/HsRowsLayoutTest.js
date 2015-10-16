//
// test/unit/HsColumnLayoutTest.js
//
describe("factory: HsColumnLayout", function() {
    var elem; 
    var layout;
    var scope;
    var widgets;
    
    beforeEach(module('hsLayout'));
 
    describe('when not specifying heights', function() {
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
        
        describe('the widgets', function() {
            it('should be 3', function() {
                expect(widgets.length).toBe(3);
            });
            
            it ('should be top and bottom aligned', function() {
                expect($(widgets[0]).css('left')).toBe('0px'); 
                expect($(widgets[1]).css('left')).toBe('0px'); 
                expect($(widgets[2]).css('left')).toBe('0px'); 
                expect($(widgets[0]).css('right')).toBe('0px'); 
                expect($(widgets[1]).css('right')).toBe('0px'); 
                expect($(widgets[2]).css('right')).toBe('0px'); 
            });        
        });
        
        describe('widgets', function() {
            it ('should have a height of 33%',   function() { 
                expect(parseInt($(widgets[0]).css('height'))).toBe(33); 
                expect(parseInt($(widgets[1]).css('height'))).toBe(33); 
            });
        });
        describe('the first widget', function() {
            it ('should be top aligned', function() { expect(parseInt($(widgets[0]).css('top'))).toBe(0); });
        });
        
        describe('the second widget', function() {
            it ('should be in the middle', function() { expect(parseInt($(widgets[1]).css('top'))).toBe(33); });
        });
        
        describe('the third widget', function() {
            it ('should have top @66%', function() { expect(parseInt($(widgets[2]).css('top'))).toBe(66); });
            it ('should b eright aligned', function() { expect(parseInt($(widgets[2]).css('bottom'))).toBe(0); });
        });
    });
    
    describe('when specifying single %-height,', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            elem = '<hs-layout hs-rows=["10%"]><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            elem = $compile(elem)(scope);
            scope.$digest();
        }));
        
        beforeEach(function() {
            widgets = $.makeArray(elem.find('hs-widget'));
        });
            
        describe('widgets', function() {
            it ('should have a height of 10%',   function() { 
                expect(parseInt($(widgets[0]).css('height'))).toBe(10); 
                expect(parseInt($(widgets[1]).css('height'))).toBe(10); 
                expect(parseInt($(widgets[2]).css('height'))).toBe(10); 
            });
        });
            
        describe('the first widget', function() {
            it ('should be at top',            function() { expect(parseInt($(widgets[0]).css('top'))).toBe(0); });
        });
        
        describe('the second widget', function() {
            it ('should be at top 10%',        function() { expect(parseInt($(widgets[1]).css('top'))).toBe(10); });
        });
        
        describe('the third widget', function() {
            it ('should have a top of 20%',    function() { expect(parseInt($(widgets[2]).css('top'))).toBe(20); });
        });
    });
    
    describe('when specifying the %-height of first column', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            elem = '<hs-layout hs-rows=["10%",]><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            elem = $compile(elem)(scope);
            scope.$digest();
        }));
        
        beforeEach(function() {
            widgets = $.makeArray(elem.find('hs-widget'));
        });
            
        describe('the first widget', function() {
            it ('should be at top',            function() { expect(parseInt($(widgets[0]).css('top'))).toBe(0); });
            it ('should have a height of 10%',   function() { expect(parseInt($(widgets[0]).css('height'))).toBe(10); });
        });
        
        describe('the second widget', function() {
            it ('should be at top 10%',        function() { expect(parseInt($(widgets[1]).css('top'))).toBe(10); });
            it ('should have a height of 45%',   function() { expect(parseInt($(widgets[1]).css('height'))).toBe(45); });
        });
        
        describe('the third widget', function() {
            it ('should have a top of 55%',    function() { expect(parseInt($(widgets[2]).css('top'))).toBe(55); });
            it ('should be bottom aligned',      function() { expect(parseInt($(widgets[2]).css('bottom'))).toBe(0); });
        });
    });
    
    describe('when specifying the %-height of last column', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            elem = '<hs-layout hs-rows=[,"10%"]><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            elem = $compile(elem)(scope);
            scope.$digest();
        }));
        
        beforeEach(function() {
            widgets = $.makeArray(elem.find('hs-widget'));
        });
    
        describe('the first widget', function() {
            it ('should be at top',            function() {expect(parseInt($(widgets[0]).css('top'))).toBe(0); });
            it ('should have a height of 45%',   function() { expect(parseInt($(widgets[0]).css('height'))).toBe(45); });
        });
        
        describe('the second widget', function() {
            it ('should be at top 45%',        function() { expect(parseInt($(widgets[1]).css('top'))).toBe(45); });
            it ('should have a height of 45%',   function() { expect(parseInt($(widgets[1]).css('height'))).toBe(45); });
        });
        
        describe('the third widget', function() {
            it ('should have a top of 90%',    function() { expect(parseInt($(widgets[2]).css('top'))).toBe(90); });
            it ('should be bottom aligned',      function() { expect(parseInt($(widgets[2]).css('height'))).toBe(10); });
        });
    });
    
    describe('when specifying the %-height of first and last column for 3 columns', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            elem = '<hs-layout hs-rows=["20%",,"10%"]><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            elem = $compile(elem)(scope);
            scope.$digest();
        }));
        
        beforeEach(function() {
            widgets = $.makeArray(elem.find('hs-widget'));
        });
    
        describe('the first widget', function() {
            it ('should be at top',            function() { expect(parseInt($(widgets[0]).css('top'))).toBe(0); });
            it ('should have a height of 20%',   function() { expect(parseInt($(widgets[0]).css('height'))).toBe(20); });
        });
        
        describe('the second widget', function() {
            it ('should be at top 20%',        function() { expect(parseInt($(widgets[1]).css('top'))).toBe(20); });
            it ('should have a height of 70%',   function() { expect(parseInt($(widgets[1]).css('height'))).toBe(70); });
        });
        
        describe('the third widget', function() {
            it ('should have a top of 90%',    function() { expect(parseInt($(widgets[2]).css('top'))).toBe(90); });
            it ('should be bottom aligned',      function() { expect(parseInt($(widgets[2]).css('height'))).toBe(10); });
        });
    });
    
    describe('when specifying single px-height,', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            elem = '<hs-layout hs-rows=["100px"]><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            elem = $compile(elem)(scope);
            scope.$digest();
        }));
        
        beforeEach(function() {
            widgets = $.makeArray(elem.find('hs-widget'));
        });
            
        describe('widgets', function() {
            it ('should have a height of 100px',   function() { 
                expect($(widgets[0]).css('height')).toBe('100px'); 
                expect($(widgets[1]).css('height')).toBe('100px'); 
                expect($(widgets[2]).css('height')).toBe('100px'); 
            });
        });
            
        describe('the first widget', function() {
            it ('should be at top',            function() { expect($(widgets[0]).css('top')).toBe('0px'); });
        });
        
        describe('the second widget', function() {
            it ('should be at top 100px',        function() { expect($(widgets[1]).css('top')).toBe('100px'); });
        });
        
        describe('the third widget', function() {
            it ('should have a top of 200px',    function() { expect($(widgets[2]).css('top')).toBe('200px'); });
        });
    });
    
    describe('when specifying the px-height of first column', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            elem = '<hs-layout hs-rows=["100px",]><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            elem = $compile(elem)(scope);
            scope.$digest();
        }));
        
        beforeEach(function() {
            widgets = $.makeArray(elem.find('hs-widget'));
        });
    
        describe('the first widget', function() {
            it ('should be at top',            function() { expect(parseInt($(widgets[0]).css('top'))).toBe(0); });
            it ('should have a height of 100px', function() { expect($(widgets[0]).css('height')).toBe('100px'); });
        });
        
        describe('the second widget', function() {
            it ('should be at top 100px',      function() { expect($(widgets[1]).css('top')).toBe('100px'); });
        });
        
        describe('the third widget', function() {
            it ('should be bottom aligned', function() {
                expect($(widgets[2]).css('bottom')).toBe('0%'); 
            });
        });
    });
    
    describe('when specifying the px-height of last column', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            elem = '<hs-layout hs-rows=[,"50px"]><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            elem = $compile(elem)(scope);
            scope.$digest();
        }));
        
        beforeEach(function() {
            widgets = $.makeArray(elem.find('hs-widget'));
        });
        describe('the first widget', function() {
            it ('should be at top',            function() { expect(parseInt($(widgets[0]).css('top'))).toBe(0); });
            it ('should have a bottom of 66%',    function() { expect(parseInt($(widgets[0]).css('bottom'))).toBe(66); });            
        });
        
        describe('the second widget', function() {
            it ('should be at bottom 50x',       function() { expect($(widgets[1]).css('bottom')).toBe('50px'); });            
            it ('should have a top of 33.3%',    function() { expect(parseInt($(widgets[1]).css('top'))).toBe(33); });            
        });
        
        describe('the third widget', function() {
            it ('should have a top of 50px',   function() { expect($(widgets[2]).css('height')).toBe('50px'); });
            it ('should be bottom aligned',      function() { expect(parseInt($(widgets[2]).css('bottom'))).toBe(0); });
        });
    });
    
    describe('when specifying the px-height of first and last column for 3 columns', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            elem = '<hs-layout hs-rows=["20px",,"10px"]><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            elem = $compile(elem)(scope);
            scope.$digest();
        }));
        
        beforeEach(function() {
            widgets = $.makeArray(elem.find('hs-widget'));
        });
        describe('the first widget', function() {
            it ('should be at top',            function() { expect(parseInt($(widgets[0]).css('top'))).toBe(0); });
            it ('should have a height of 20%',   function() { expect(parseInt($(widgets[0]).css('height'))).toBe(20); });
        });
        
        describe('the second widget', function() {
            it ('should be at top 20px',       function() { expect($(widgets[1]).css('top')).toBe('20px'); });
            it ('should have a bottom of 10px',  function() { expect($(widgets[1]).css('bottom')).toBe('10px'); });
        });
        
        describe('the third widget', function() {
            it ('should be bottom aligned',      function() { expect($(widgets[2]).css('bottom')).toBe('0px'); });
            it ('should have a height of 10px',  function() { expect($(widgets[2]).css('height')).toBe('10px'); });
        });
    });
}); 
