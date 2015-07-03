/**
 * @ngdoc directive
 * @name hsWidgets.directive:hsMoveable
 * @restrict A
 * @element ['hs-widget', 'hs-dashboard']
 * @description 
#Attributes
All attributes are optional except where marked as required. For emphasis, optional attributes
are wrapped in square brackets: `[...]`. When optional, the default value is <u>underlined</u>.
- [ **hs-moveable** = <u>'20'</u> ]
    allows widgets to be moved and sized. If supplied, the parameter determines the size in pixel of the
    sensitive area, in each corner for resizing, and across the top for moving the widget.

- [ **grid** = <u>'12'</u> ]
    sets a grid to which the widgets will snap when moved or scaled. The grid value determines the 
    number of grid steps in horizontal or vertical direction on the dashboard.
@example
<example module="hsWidgets">
    <file name="index.html">
        <div style="height: 300px; padding:0; ">
            <hs-layout hs-moveable grid='20'>
                <hs-widget hs-size='["50%", "50%"]'>
                    <br>1
                    <br>Move me along the top.
                    <br>Size me from the corners.
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
angular.module('hsWidgets').directive('hsMoveable', function() {
    "use strict";

    return {
        restrict: 'A',
        replace: false,
        controller: 'hsMoveableCtrl',
        link: function link(scope, elem, attrs, controller) {
            var moveable = parseInt(attrs['hsMoveable']) || 20;
            var grid = parseInt(attrs['grid']) || 12;
            controller.moveable(elem, moveable, grid);
        }
    };
});

