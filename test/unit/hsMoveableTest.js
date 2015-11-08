// 
// test/unit/hsMoveableDirectiveTest.js
//
describe("hsMoveable", function() {
    var $compile, $rootScope;
    var layout;
    
    
    beforeEach(module('hsLayout'));
    
    describe('moveableController', function(){
        var $controller;
        
        beforeEach(angular.mock.inject(function(_$controller_){
            $controller = _$controller_;
        }));
        
        it('should be defined', function() {
            var mvbCtrl = $controller('hsMoveableCtrl'); 
            expect(mvbCtrl).toBeDefined();
        });
        
        it('should have a moveable function', function() {
            var mvbCtrl = $controller('hsMoveableCtrl'); 
            expect(mvbCtrl.moveable).toBeDefined();
        });
    });
    
    describe('moveableDirective', function() {
        var w;
        beforeEach(inject(function($compile, $rootScope) {
            var scope = $rootScope.$new();
            var elem =  '<hs-layout hs-moveable grid="20" hs-columns style="width:1000px; height:700px; padding:0"><hs-widget>1</hs-widget>'+
            			'<hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            layout = $compile(elem)(scope);
            scope.$digest();
        }));
        
        it('should not add content', function() {
            expect(layout.html()).toMatch('');
        });
        
        it('should create a widget helper', function() {
            var helper = layout.find('.hs-widget-helper');
            expect(helper).toBeDefined();
            expect(helper.length).toBe(1);
        });
                
        it('should have layout size top', 	function() { expect(layout.css('top')).toBe('0px'); });
        it('should have layout size bottom',function() { expect(layout.css('bottom')).toBe('0px'); });
        it('should have layout size left', 	function() { expect(layout.css('left')).toBe('0px'); });
        it('should have layout size width', function() { expect(layout.css('width')).toBe('1000px'); });
        it('should have layout size height',function() { expect(layout.css('height')).toBe('700px'); });
       
        
        it('should have widget1 size', function() {
            var widget1 = $(layout.find('hs-widget').get(0));
            expect(widget1.css('top')).toBe('0px');
            expect(widget1.css('bottom')).toBe('0px');
            expect(widget1.css('left')).toBe('0%');
            expect(widget1.css('width')).toBe('33.3333%');
            expect(widget1.css('height')).toBe('0px');
        });
        
        
        describe('move', function() {
            var w; 
        	function doMouseEvent(type, x, y) {
        	    var event = jQuery.Event(type);
        	    event.target = w;
        	    event.offsetX = x;		event.offsetY = y;
        	    event.pageX = x+100;	event.pageY = y+100;
        	    w.trigger(event); 
        	}
        	
            beforeEach(function(done) {
                w = layout.find('.hs-widget-container').children();      
                doMouseEvent('mousedown', 50, 10);
                setTimeout(function() { 
                    doMouseEvent('mousemove', 200, 200);
                    setTimeout(function() { 
                        doMouseEvent('mouseup', 200, 100); 
                        done();
                    }, 10);
                }, 10);
            });
            
            it('should have moved top', 	function(done) {  expect(w.css('top')).toBe('0px'); done(); });
            it('should have moved bottom', 	function(done) {  expect(w.css('bottom')).toBe('0px'); done(); });
            it('should have moved left ', 	function(done) {  expect(w.css('left')).toBe('0px'); done(); });
            it('should have moved width', 	function(done) {  expect(w.css('width')).toBe('0px'); done(); });
            it('should have moved height', 	function(done) {  expect(w.css('height')).toBe('0px'); done(); });
               
        });
    });
    
    describe('moveableDirective with grid array', function() {
        var w;
    
        beforeEach(inject(function($compile, $rootScope) {
            var scope = $rootScope.$new();
            var elem = '<hs-layout hs-moveable grid="[20,20]" hs-columns><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            layout = $compile(elem)(scope);
            scope.$digest();
        })); 
        
        beforeEach(function() {
            var w = layout.find('hs-widget').get(0);      
            layout.trigger('mousedown', {target:w});
        });
    });
});