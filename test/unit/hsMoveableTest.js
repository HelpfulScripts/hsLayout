// 
// test/unit/hsMoveableDirectiveTest.js
//
describe("hsMoveable", function() {
    var $compile, $rootScope;    
    
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
    	function doMouseEvent(type, x, y) {
    	    var event = jQuery.Event(type);
    	    event.target = w;
    	    event.offsetX = x;		event.offsetY = y;
    	    event.pageX = x+100;	event.pageY = y+100;
    	    w.trigger(event); 
    	}
    	
    	function showBox(name, elem) { console.log([name, elem.css('left'), elem.css('right'),elem.css('top'),elem.css('bottom'),elem.css('width'),elem.css('height')]); }        
        var layout, widgets, widget, w;
        beforeEach(inject(function($compile, $rootScope) {
            var scope = $rootScope.$new();
            var elem =  '<hs-layout hs-moveable grid="20" hs-tile style="width:1000px; height:700px; padding:0;"><hs-widget>1</hs-widget>'+
            			'<hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            layout = $compile(elem)(scope);
            scope.$digest();
            widgets = layout.find('hs-widget');
            widget = $(widgets[0]);
            w = layout.find('.hs-widget-container').children();  
        }));
        
        it('should not add content', function() {
            expect(layout.html()).toMatch('');
        });
        
        it('should create a widget helper', function() {
            var helper = layout.find('.hs-widget-helper');
            expect(helper).toBeDefined();
            expect(helper.length).toBe(1);
        });
                
        it('should have layout size top', 	function() { expect(layout.css('top')).toBe('auto'/*0px'*/); });
        it('should have layout size bottom',function() { expect(layout.css('bottom')).toBe('auto'/*0px'*/); });
        it('should have layout size left', 	function() { expect(layout.css('left')).toBe('auto'/*0px'*/); });
        it('should have layout size width', function() { expect(layout.css('width')).toBe('1000px'); });
        it('should have layout size height',function() { expect(layout.css('height')).toBe('700px'); });
       
        
        it('should have widget top', function() { expect(widget.css('top')).toBe('0%');});
        it('should have widget bottom', function() { expect(widget.css('bottom')).toBe('auto'/*0%'*/);});
        it('should have widget left', function() { expect(widget.css('left')).toBe('0%');});
        it('should have widget right', function() { expect(widget.css('right')).toBe('auto'/*0px'*/);});
        it('should have widget width', function() { expect(widget.css('width')).toBe('50%');});
        it('should have widget height', function() { expect(widget.css('height')).toBe('50%');});
        
        describe('move', function() {
            beforeEach(function(done) {
                doMouseEvent('mousedown', 25, 5);
                setTimeout(function() { 
                    doMouseEvent('mousemove', 200, 200);
                    setTimeout(function() { 
                        doMouseEvent('mouseup', 200, 100); 
                        done();
                    }, 10);
                }, 10);
            });
            
            it('should have moved top', 	function(done) {  expect(widget.css('top')).toBe('30%'); done(); });
            it('should have moved bottom', 	function(done) {  expect(widget.css('bottom')).toBe('auto'/*'0px'*/); done(); });
            it('should have moved left ', 	function(done) {  expect(widget.css('left')).toBe('20%'); done(); });
            it('should have moved right ', 	function(done) {  expect(widget.css('right')).toBe('auto'/*0px'*/); done(); });
            it('should have moved width', 	function(done) {  expect(widget.css('width')).toBe('50%'); done(); });
            it('should have moved height', 	function(done) {  expect(widget.css('height')).toBe('50%'); done(); });             
        });
        
        describe('size top left', function() {
            beforeEach(function(done) {
//                w = layout.find('.hs-widget-container').children();      
                doMouseEvent('mousedown', 5, 5);
                setTimeout(function() { 
                    doMouseEvent('mousemove', 200, 200);
                    setTimeout(function() { 
                        doMouseEvent('mouseup', 200, 100); 
                        done();
                    }, 10);
                }, 10);
            });
            
            it('should have moved top', 	function(done) {  expect(widget.css('top')).toBe('30%'); done(); });
            it('should have moved bottom', 	function(done) {  expect(widget.css('bottom')).toBe('auto'/*0px'*/); done(); });
            it('should have moved left ', 	function(done) {  expect(widget.css('left')).toBe('20%'); done(); });
            it('should have moved width', 	function(done) {  expect(widget.css('width')).toBe('0%'); done(); });
            it('should have moved height', 	function(done) {  expect(widget.css('height')).toBe('0%'); done(); });             
        });
        
        describe('size top right', function() {
            beforeEach(function(done) {
                setTimeout(function(){
//                    w = layout.find('.hs-widget-container').children();   
                    doMouseEvent('mousedown', 45, 5);
                    setTimeout(function() { 
                        doMouseEvent('mousemove', 40, 200);
                        setTimeout(function() { 
                            doMouseEvent('mouseup', 45, 200); 
                            done();
                        }, 10);
                    }, 10);
                }, 10);
            });
            
            it('should have moved top', 	function(done) {  expect(widget.css('top')).toBe('30%'); done(); });
            it('should have moved bottom', 	function(done) {  expect(widget.css('bottom')).toBe('auto'/*0px'*/); done(); });
            it('should have moved left ', 	function(done) {  expect(widget.css('left')).toBe('0%'); done(); });
            it('should have moved width', 	function(done) {  expect(widget.css('width')).toBe('5%'); done(); });
            it('should have moved height', 	function(done) {  expect(widget.css('height')).toBe('0%'); done(); });              
        });
    
        describe('size bottom left', function() {
            beforeEach(function(done) {
                setTimeout(function(){
                    doMouseEvent('mousedown', 5, 45);
                    setTimeout(function() { 
                        doMouseEvent('mousemove', 40, 200);
                        setTimeout(function() { 
                            doMouseEvent('mouseup', 45, 200); 
                            done();
                        }, 10);
                    }, 10);
                }, 10);
            });
            
            it('should have moved top', 	function(done) {  expect(widget.css('top')).toBe('0%'); done(); });
            it('should have moved bottom', 	function(done) {  expect(widget.css('bottom')).toBe('auto'/*0px'*/); done(); });
            it('should have moved left ', 	function(done) {  expect(widget.css('left')).toBe('5%'); done(); });
            it('should have moved width', 	function(done) {  expect(widget.css('width')).toBe('0%'); done(); });
            it('should have moved height', 	function(done) {  expect(widget.css('height')).toBe('30%'); done(); });              
        });
    
        describe('size bottom right', function() {
            beforeEach(function(done) {
                setTimeout(function(){
                    doMouseEvent('mousedown', 45, 45);
                    setTimeout(function() { 
                        doMouseEvent('mousemove', 40, 200);
                        setTimeout(function() { 
                            doMouseEvent('mouseup', 450, 200); 
                            done();
                        }, 10);
                    }, 10);
                }, 10);
            });
            
            it('should have moved top', 	function(done) {  expect(widget.css('top')).toBe('0%'); done(); });
            it('should have moved bottom', 	function(done) {  expect(widget.css('bottom')).toBe('auto'/*0px'*/); done(); });
            it('should have moved left ', 	function(done) {  expect(widget.css('left')).toBe('0%'); done(); });
            it('should have moved width', 	function(done) {  expect(widget.css('width')).toBe('5%'); done(); });
            it('should have moved height', 	function(done) {  expect(widget.css('height')).toBe('30%'); done(); });
        });
    });
    
    describe('moveableDirective with grid array', function() {
        beforeEach(inject(function($compile, $rootScope) {
            var scope = $rootScope.$new();
            var elem = '<hs-layout hs-moveable grid="[20,20]" hs-columns><hs-widget>1</hs-widget><hs-widget>2</hs-widget><hs-widget>3</hs-widget></hs-layout>';
            layout = $compile(elem)(scope);
            scope.$digest();
        })); 
        
        beforeEach(function() {
//            var w = layout.find('hs-widget').get(0);      
            layout.trigger('mousedown', {target:widget});
        });
    });
});