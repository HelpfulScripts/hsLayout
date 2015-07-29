/**
 * @ngdoc object
 * @name hsWidgets.object.HsRelativeLayout
 * @requires hsWidgets.object.HsLayout
 * @description Extends {@link hsWidgets.object.HsLayout HsLayout}.
 * Relative layout places widgets into their natural position.
 * <h2>cfg options:</h2><pre>
 * </pre>
 * @todo ...
 */
angular.module('hsWidgets').factory('HsRelativeLayout', ['HsLayout', function HsComponentFactory(HsLayout) {
    "use strict";
    
    return function() {
        var obj = new HsLayout("HsRelativeLayout");
        obj.layItOut =function layItOut(widgets) {
            for (var w=0; w<widgets.length; w++) {
                var widget = widgets[w];
                $(widget).css('position', 'relative'); 
                $(widget).css('top', 'auto'); 
                $(widget).css('bottom', 'auto'); 
                $(widget).css('left', 'auto'); 
                $(widget).css('right', 'auto'); 
                $(widget).css('width', '100px'); 
                $(widget).css('height', '50px'); 
            }
        };
        return obj;
    };
}]);

