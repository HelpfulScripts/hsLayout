/**
 * @ngdoc directive
 * @name hsWidgets.directive:hsDashboard
 * @restrict EA
 * @element ANY
 * @description hs-dashboard directive. Establishes a space in which {@link hsWidgets.directive:hsWidget widgets} live.
 @example
<example module="hsWidgets">
    <file name="index.html">
        <hs-dashboard hs-moveable class='myHeight'>
            <hs-widget hs-size='["50%", "50%"]'>
                <br>Move me along the top.
                <br>Size me from the corners.
            </hs-widget>
            <hs-widget hs-size='["50%", "50%"]'>
                <br>Move me along the top.
                <br>Size me from the corners.
            </hs-widget>
        </hs-dashboard>
    </file>
    <file name="style.css">
        .well           { position: relative; height: 300px; padding:0; }
        hs-dashboard    { background-color: #fafafa; }
        hs-widget       { 
            background-color: #ffe; 
            border: 1px solid #888; 
            text-align: center;
        }
        hs-widget:first-of-type { background-color: #eef; }
    </file>
</example>
 */
angular.module('hsWidgets').directive('hsDashboard', function() {
    "use strict";
    
    function setWidgetPos(widgets, widget) {
        var pos = [0,0];
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
        setTimeout(function() {
            var pane = $(widget.elem[0]).find('.hs-widget-pane');
            if (pos[0]!==0) { pane.css('margin-left', '0'); }
            if (pos[1] > 0) { pane.css('margin-top', '0'); }
        }, 1000);

        widget.pos = pos;
    }

    function setWidgetMargins(widget) {
        var w  = widget.elem;
        $(w).css('width',  widget.size[0] +'%');  
        $(w).css('height', widget.size[1] +'%');
        $(w).css('left',   widget.pos[0]  +'%');    
        $(w).css('top',    widget.pos[1]  +'%');
    }
    
    function registerWidget(dashboard) {
        return function registerWidget(widget) {
            dashboard.widgets.push(widget);
            if (widget.pos.length === 0) { setWidgetPos(dashboard.widgets, widget); }
            setWidgetMargins(widget);
        };
    }
    
    return {
        restrict: 'EA',
        replace: false,
        controller: function($scope, $element) {
            this.widgets = [];
            this.registerWidget = registerWidget(this);
            var e = $($element[0]);
            this.width  = parseInt(e.css('width'));
            this.height = parseInt(e.css('height'));
        },
        link: function link(/*scope, elem, attrs*/) {}
    };
});

