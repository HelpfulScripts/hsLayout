/**
 * @ngdoc directive
 * @name hsLayout.directive:hsWidget
 * @restrict EA
 * @element ANY
 * @description hs-widget directive. Adds a widget to a {@link hsLayout.directive:hsLayout layout}.
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
<example module="hsLayout">
    <file name="index.html">
        <div style="height: 300px; padding:0;">
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
        </div>
    </file>
    <file name="style.css">
        .well        { position: relative; }
        hs-layout    { background-color: #eee; }
        .hs-widget-pane { 
            background-color: #ffe; 
            text-align: center;
        }
    </file>
</example>
 */
angular.module('hsLayout').directive('hsWidget', function() {
    "use strict";
        
    function getVal(attr, def)  { return attr? JSON.parse(attr) : def; }
    //function removePercent(arr) { return [parseInt(arr[0].replace('%','')), parseInt(arr[1] .replace('%',''))]; }

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
            $(elem).addClass('hs-widget-container');
            elem[0].cfgSize = getVal(attrs['hsSize'], []);
            elem[0].cfgPos = getVal(attrs['hsPos'], []);
/* istanbul ignore else: untestable */            
            if (controller) { scope.layItOut(); }
            else { throw 'no layout controller found in widget'; }
        }
    };
});

