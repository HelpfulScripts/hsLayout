/**
 * @ngdoc directive
 * @name hsWidgets.directive:hsWidget
 * @restrict EA
 * @element ANY
 * @description hs-widget directive. Adds a widget to a {@link hsWidgets.directive:hsDashboard dashboard}.
 * For use within a hs-dashboard
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
        <hs-dashboard hs-moveable>
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
            <div hs-widget hs-size='["100%", "50%"]'>
                <br>3
                <br>Move me along the top.
                <br>Size me from the corners.
            </div>
        </hs-dashboard>
    </file>
    <file name="style.css">
        .well           { position: relative; height: 300px; padding:0; }
        hs-dashboard    { background-color: #eee; }
        hs-widget>div, [hs-widget]>div { 
            background-color: rgba(255, 255, 240, 0.75); 
            text-align: center;
        }
        [hs-widget]>div { 
            background-color: rgba(240, 240, 255, 0.75); 
            text-align: center;
        }
    </file>
</example>
 */
angular.module('hsWidgets').directive('hsWidget', function() {
    "use strict";
    
    var gDuration = 250;
    var gEasing   = 'swing';
    
    function getVal(attr, def)  { return attr? removePercent(JSON.parse(attr)) : def; }
    function removePercent(arr) { return [parseInt(arr[0].replace('%','')), parseInt(arr[1] .replace('%',''))]; }
        
    function maximizeWindow(scope, widget) {
        return function() {
           var t = widget.elem[0].style.top, l = widget.elem[0].style.left;
           var w = widget.elem[0].style.width, h = widget.elem[0].style.height;
           if (widget.org) {              
               widget.elem.animate({  
                   top: widget.org[0], left: widget.org[1], width: widget.org[2], height: widget.org[3]
               }, gDuration, gEasing, function() {
                   widget.elem.removeClass('hs-widget-in-front');         
               });       
               widget.org = undefined;
           } else {
               widget.org = [t, l, w, h];     
               widget.elem.addClass('hs-widget-in-front');  
               widget.elem.animate({  
                   top: '0%', left: '0%', width: '100%', height: '100%'
               }, gDuration, gEasing);       
           }
        };
    }

    return {
        restrict: 'EA',
        replace: false,
        require: '^hsDashboard',
        transclude: true,
        template: function(elem, attrs) {
            if (attrs['hsInclude']) {
                return '<div class="hs-widget-pane" ng-include="' + attrs['hsInclude'] + '"></div>';
            } else {
                return '<div class="hs-widget-pane" ng-transclude></div>';
            }
        },
        link: function link(scope, elem, attrs, controller) {
            var widget = { elem: elem, dashboard: elem.parent()};
            widget.size = getVal(attrs['hsSize'], ['100%','100%']);
            widget.pos = getVal(attrs['hsPos'], []);
            controller.registerWidget(widget);
            $(elem).dblclick(maximizeWindow(scope, widget));
        }
    };
});

