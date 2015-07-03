//
// test/unit/hsMoveableDirectiveTest.js
//
describe("Unit: Testing hsMoveable", function() {
    var $compile, $rootScope;
    var layout;
    
    beforeEach(module('hsWidgets'));
    
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
        beforeEach(inject(['$compile', '$rootScope', function($c, $r) {
            $compile = $c;
            $rootScope = $r;
            layout = $compile('<hs-layout hs-moveable grid="20"><hs-widget></hswidget></hs-layout>')($rootScope);
        }]));
        
        it('should not add content', function() {
            expect(layout.html()).toMatch('');
        });
        
        it('should create a widget helper', function() {
            var helper = layout.find('.hs-widget-helper');
            expect(helper).toBeDefined();
            expect(helper.length).toBeGreaterThan(0);
        });
    });
});