/**
 * @ngdoc directive
 * @name hsWidgets.directive:hsWidget
 * @restrict EA
 * @element ANY
 * @description hs-widget directive. Adds a widget to a {@link hsWidgets.directive:hsLayout layout}.
 * For use within a hs-layout
#Attributes
All attributes are optional except where marked as required. For emphasis, optional attributes
are wrapped in square brackets: `[...]`. When optional, the default value is <u>underlined</u>.
- [**hs-size** = '[<u>"100%"</u>, <u>"100%"</u>]']
    sets the relative size of the widget within the dashboard;
    absolute sizes are also supported. Defaults to ["100%", "100%"]
    
- [**hs-pos** = '["50%", "50%"]'] 
    sets the position of the widget (top left corner) within the dashboard
    absolute sizes are also supported. Defaults to the next free space
    in the dashboard, as determined by the controller.
    
- [**hs-include** = <url>] 
    inserts content of an external file, similar to ng-include.
    A new command 'hs-include' is needed since ng-include clashes with the
    `transclude: true` statement needed in case the content is inline
@example
<example module="hsWidgets">
    <file name="index.html">
        <hs-layout hs-moveable>
            <hs-widget hs-size='["50%", "50%"]'>
                <br>1
                <br>Move me along the top.
                <br>Size me from the corners.
            </hs-widget>
            <div hs-widget hs-size='["50%", "50%"]'>
                <br>2
                <br>Move me along the top.
                <br>Size me from the corners.
            </div>
            <hs-widget hs-pos='["25%", "50%"]' hs-size='["50%", "50%"]'>
                <br>3
                <br>Move me along the top.
                <br>Size me from the corners.
            </hs-widget>
        </hs-layout>
    </file>
    <file name="style.css">
        .well        { position: relative; height: 300px; padding:0; }
        hs-layout    { background-color: #eee; }
        hs-widget, [hs-widget] { 
            background-color: #ffe; 
            text-align: center;
        }
    </file>
</example>
 */
angular.module('hsWidgets').directive('hsWidget', ['hsUtil', function(util) {
    "use strict";
    
    var gEasing   = 'swing';  
    
    function getVal(attr, def)  { return attr? removePercent(JSON.parse(attr)) : def; }
    function removePercent(arr) { return [parseInt(arr[0].replace('%','')), parseInt(arr[1] .replace('%',''))]; }

    function maximizeWindow(scope, widget) {
        var animate = true;
        return function() {
            var t = widget.elem[0].style.top, l = widget.elem[0].style.left;
            var w = widget.elem[0].style.width, h = widget.elem[0].style.height;
            var size;
            if (widget.org) {        // shrink widget to original size     
                size = widget.org;  
                widget.org = undefined;
                widget.elem.removeClass('hs-widget-in-front');         
            } else {                // maximize widget to fill screen
                widget.org = {top: t, left: l, width: w, height: h};  
                size = {top: '0%', left: '0%', width: '100%', height: '100%'};  
                widget.elem.addClass('hs-widget-in-front');  
            }
            if (animate) {
                widget.elem.animate(size, util.animationDuration, gEasing, function() {
                    scope.$broadcast('hs-resize-end', size);
                });       
                scope.$broadcast('hs-resize-begin', size);
            } else {
                scope.$broadcast('hs-resize-begin', size);
                widget.elem.css(size);
                scope.$broadcast('hs-resize-end', size);
            }
        };
    }
   function doubleClick(handler) {
        var delay = 500;
        
        return function(event) {
            var now = new Date().getTime();
            var lastTouch = $(this).data('lastTouch') || now + 1; // the first time this will make delta a negativ number        
            var delta = now - lastTouch;
            $(this).data('lastTouch', now);
            
            if (delta > 0 && delta < delay) {   // a double tap or click: call handler
                handler(event);
            }
            return false;
        };
    }

    return {
        restrict: 'EA',
        replace: false,
        require: '?^hsLayout',
        transclude: true,
        template: function(elem, attrs) {
            if (attrs['hsInclude']) {
                return '<div class="hs-widget-pane" ng-include="' + attrs['hsInclude'] + '"></div>';
            } else {
                return '<div class="hs-widget-pane" ng-transclude></div>';
            }
        },
        link: function link(scope, elem, attrs, controller) {
            $(elem).wrap('<div class="hs-widget-container">');
            var widget = { elem: elem.parent() };
            elem.hsStruct = {attrs:attrs};
            widget.size = getVal(attrs['hsSize'], ['100%','100%']);
            widget.pos = getVal(attrs['hsPos'], []);
            if (controller) { controller.registerWidget(widget); }
            else { 
                console.log('no layout controller found in widget'); 
            }
            $(elem).on('touchend mouseup', doubleClick(maximizeWindow(scope, widget)));
        }
    };
}]);

