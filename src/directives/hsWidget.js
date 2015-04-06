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
        </hs-dashboard>
    </file>
    <file name="style.css">
        .well           { position: relative; height: 300px; padding:0; }
        hs-dashboard    { background-color: #efe; }
        hs-widget>div, [hs-widget]>div { 
            background-color: #ffe; 
            text-align: center;
        }
        [hs-widget]>div { 
            background-color: #eef; 
            text-align: center;
        }
    </file>
</example>
 */
angular.module('hsWidgets').directive('hsWidget', function() {
    "use strict";
    function getVal(attr, def)  { return attr? removePercent(JSON.parse(attr)) : def; }
    function removePercent(arr) { return [parseInt(arr[0].replace('%','')), parseInt(arr[1] .replace('%',''))]; }

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
        }
    };
});

