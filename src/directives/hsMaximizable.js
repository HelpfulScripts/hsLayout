/**
 * @ngdoc directive
 * @name hsWidgets.directive:hsMaximizable
 * @restrict A
 * @element ['hs-widget', 'hs-layout']
 * @description adds the maximizable option to a widget or layout. Double clicking the widget will toggle it to fill the entire top-level 
 * layout space or shrink back to its original size.
@example
<example module="hsWidgets">
    <file name="index.html">
        <div style="height: 300px; padding:0; ">
            <hs-layout hs-moveable grid='20'>
                <hs-widget hs-maximizable>
                    <br>1
                    <br>Double-click to maximize me.
                </hs-widget>
                <hs-widget hs-maximizable>
                    <br>1
                    <br>Double-click to maximize me.
                </hs-widget>
            </hs-layout>
        </div>
    </file>
    <file name="style.css">
        .well           { position: relative; }
        hs-layout       { background-color: #eee; }
        hs-widget, [hs-widget] { 
            background-color: #ffe; 
            text-align: center;
        }
    </file>
</example>
*/    
angular.module('hsWidgets').directive('hsMaximizable', ['hsUtil', function(util) {
    "use strict";

    var gEasing   = 'swing';  

    function maximizeWindow(scope, widget) {
        var animate = true;
        return function() {
            var t = widget.style.top, l = widget.style.left, r = widget.style.right, b = widget.style.bottom;
            var w = widget.style.width, h = widget.style.height;
            var size;
            if (widget.org) {        // shrink widget to original size     
                size = widget.org;  
                widget.org = undefined;
                $(widget).removeClass('hs-widget-in-front');         
            } else {                // maximize widget to fill screen
                size = {left: '0%'};  
                widget.org = {};
                if (b!=='' && b!=='auto') { widget.org.bottom = b; size.bottom = '0%'; } 
                if (r!=='' && r!=='auto') { widget.org.right = r; size.right = '0%'; }
                if (t!=='' && t!=='auto') { widget.org.top = t; size.top = '0%'; } 
                if (l!=='' && l!=='auto') { widget.org.left = l; size.left = '0%'; } 
                if (w!=='' && w!=='auto') { widget.org.width = w; size.width = '100%'; } 
                if (h!=='' && h!=='auto') { widget.org.height = h; size.height = '100%'; } 
                $(widget).addClass('hs-widget-in-front');  
            }
            if (animate) {
                $(widget).animate(size, util.animationDuration, gEasing, function() {
                    scope.$broadcast('hs-resize-end', size);
                });       
                scope.$broadcast('hs-resize-begin', size);
            } else {
                scope.$broadcast('hs-resize-begin', size);
                $(widget).css(size);
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
            
            if (delta > 0 && delta < delay && event.type === $(this).data('lastType')) {   // a double tap or click: call handler
                handler(event);
                return false;
            }
            $(this).data('lastTouch', now);
            $(this).data('lastType', event.type);
            return true;
        };
    }

    return {
        restrict: 'A',
        replace: false,
        controller: 'hsMoveableCtrl',
        link: function link(scope, elem) {
            $(elem).on('touchend mouseup', doubleClick(maximizeWindow(scope, elem[0])));
        }
    };
}]);

