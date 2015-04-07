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
*/    
angular.module('hsWidgets').directive('hsMoveable', function() {
    "use strict";

    return {
        restrict: 'A',
        replace: false,
        controller: 'hsMoveableCtrl',
        link: function link(scope, elem, attrs, controller) {
            var moveable = parseInt(attrs['hsMoveable']) || 20;
            controller.moveable(elem, moveable);
        }
    };
});

