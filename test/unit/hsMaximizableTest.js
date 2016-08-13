//
// test/unit/hsMoveableDirectiveTest.js
//
describe("Unit: Testing hsMaximizable", function() {
    var $compile, $rootScope;
    var elem;
    
    beforeEach(module('hsLayout'));
    
    describe('maximizableDirective', function() {
        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            elem = '<div style="height: 700px; width: 500px"><hs-layout hs-tile><hs-widget hs-maximizable hs-size=\'["200px","200px"]\'></hswidget></hs-layout></div>';
            elem = $compile(elem)(scope);
            scope.$digest();
        	elem = $(elem).find('hs-widget');
        	elem.css({'font-size':'12px'}); 
        }));
        
        it('should have a calcSize of [\'200px\',\'200px\']', function() {
            expect(elem[0].calcSize).toEqual(['200px','200px']);
        });
        
        it('should not add content', function() {
            expect(elem.html()).toMatch('');
        });
        
        it('should have a window width of >1000', function(done) {
            expect(window.innerWidth).toBeGreaterThan(1000);
            done();
        });

        it('should have a widgtet width of ...', function(done) {
            expect(elem.css('width')).toBe('200px');
            done();
        });

        it('should have font-size', function() {
            expect(elem.css('font-size')).toBe('12px');
        });
        
       describe('doubleClick maximize event', function() {
    	   function doMouseDown() { elem.trigger('mouseup'); }
            beforeEach(function(done) {
            	doMouseDown();
            	setTimeout(function() {
            	    doMouseDown(); 
            	    setTimeout(done, 300);
            	}, 100);
            });

            it('should have a widgtet width of 100%', function(done) {
                expect(elem.css('width')).toBe('100%');
                done();
            });

            it('should have font-size', function(done) {
            	var px = window.innerWidth*12/200;
                expect(elem.css('font-size')).toBe(px+'px');	// 1280/200 * 12
                done();
            });
            	
            it('should have org font-size', function(done) {
                expect(elem[0].org['font-size']).toBe('12px');
                done();
            });
            
            describe('doubleClick restore event', function() {
                beforeEach(function(done) {
                	doMouseDown();
                	setTimeout(function() {
                	    doMouseDown(); 
                	    setTimeout(done, 300);
                	}, 100);
                });

                it('should have a widgtet width of 200px', function(done) {
                    expect(elem.css('width')).toBe('200px');
                    done();
                });

                it('should have font-size', function(done) {
                    expect(elem.css('font-size')).toBe('12px');	// 1440/200 * 12
                    done();
                });
                	
                it('should have org undefined', function(done) {
                    expect(elem[0].org).not.toBeDefined();
                    done();
                });
            });
        });
    });
});