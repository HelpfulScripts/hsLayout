/**
 * @ngdoc directive
 * @name hsWidgets.directive:hsLayout
 * @restrict EA
 * @element ANY
 * @description hs-dashboard directive. Establishes a space in which {@link hsWidgets.directive:hsWidget widgets} live.
 @example
<example module="hsWidgets">
    <file name="index.html">
        <hs-layout hs-moveable class='myHeight'>
            <hs-widget hs-size='["50%", "50%"]'>
                <br>1
                <br>Move me along the top.
                <br>Size me from the corners.
            </hs-widget>
            <hs-widget hs-size='["50%", "50%"]'>
                <br>2
                <br>Move me along the top.
                <br>Size me from the corners.
            </hs-widget>
            <hs-widget hs-pos='["25%", "50%"]' hs-size='["50%", "50%"]'>
                <br>3
                <br>Move me along the top.
                <br>Size me from the corners.
            </hs-widget>
        </hs-layout>
    </file>
    <file name="style.css">
        .well       { position: relative; height: 300px; padding:0; }
        hs-layout   { background-color: #fafafa; }
        hs-widget   { 
            background-color: #ffe; 
            border: 1px solid #888; 
            text-align: center;
        }
        hs-widget:first-of-type { background-color: #eef; }
    </file>
</example>
 */
angular.module('hsWidgets').directive('hsLayout', function() {
    "use strict";
    
    function setWidgetPos(widget) {
        var pos = [0,0];
        var widgets = widget.layout.widgets;
        if (widgets.length > 1) {
            var w = widgets[widgets.length-2];
            var wpos = w.pos;
            var wsiz = w.size;
            var siz = widget.size;
            pos[0] = wpos[0] + wsiz[0];
            pos[1] = wpos[1];

            if (pos[0]+siz[0] > 100) {
                pos[0] = 0; pos[1] += wsiz[1];
            }
        }
        widget.pos = pos;
    }

    function setWidgetMargins(widget) {
        var w  = widget.elem;
        $(w).css('width',  widget.size[0] +'%');  
        $(w).css('height', widget.size[1] +'%');
        $(w).css('left',   widget.pos[0]  +'%');    
        $(w).css('top',    widget.pos[1]  +'%');
    }
    
    function registerWidget(layout) {
        return function registerWidget(widget) {
            layout.widgets.push(widget);
            widget.layout = layout;
            if (widget.pos.length === 0) { setWidgetPos(widget); }
            setWidgetMargins(widget);
        };
    }
    
    return {
        restrict: 'EA',
        replace: false,
        transclude: true,
        template: '<div class="hs-layout-container" ng-transclude></div>',
        controller: function($scope, $element) {
            this.widgets = [];
            this.elem = $element;
            this.registerWidget = registerWidget(this);
            var e = $($element[0]);
            this.width  = parseInt(e.css('width'));
            this.height = parseInt(e.css('height'));
        },
        link: function link(/*scope, elem, attrs*/) {}
    };
});

