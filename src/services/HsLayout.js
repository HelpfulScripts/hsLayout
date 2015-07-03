/**
 * @ngdoc object
 * @name hsWidgets.object.HsLayout
 * @requires hs.object.HsConfigurable
 * @description Extends {@link hs.object.HsConfigurable HsConfigurable}.
 * Standard layout: abstract base class. Override the functions obj.setWidgetPos and 
 * obj.setWidgetSize in layout instantiations. The layout only affects the `size` and `pos` 
 * fields of widgets that don't have them explicitely set.
 * <h2>cfg options:</h2><pre>
 * </pre>
 * @todo ...
 */
angular.module('hsWidgets').factory('HsLayout', ['HsConfigurable', function HsComponentFactory(HsConfigurable) {
    "use strict";
    
    function setCSS(widget) {
        $(widget).css('left',   widget.calcPos[0]);    
        $(widget).css('top',    widget.calcPos[1]);
        $(widget).css('width',  widget.calcSize[0]);  
        $(widget).css('height', widget.calcSize[1]);
    }
    
    return function(type) {    
        var obj = new HsConfigurable(type);
        obj.setWidgetPos  = function() {
            console.log("HsLayout is an abstract base class. Select a different layout.");
            return ['0','0'];
        };
        obj.setWidgetSize = function() {
            console.log("HsLayout is an abstract base class. Select a different layout.");
            return ['100%','100%'];
        };
        obj.layItOut =function layItOut(widgets) {
            for (var w=0; w<widgets.length; w++) {
                var widget = widgets[w];
                if (widget.cfgSize && widget.cfgSize.length > 0) { 
                    widget.calcSize = widget.cfgSize;
                } else {
                    widget.calcSize = obj.setWidgetSize(w, widgets);
                } 
                if (widget.cfgPos && widget.cfgPos.length > 0) { 
                    widget.calcPos = widget.cfgPos;
                } else {
                    widget.calcPos = obj.setWidgetPos(w, widgets);
                } 
                setCSS(widget);
            }
        };
        return obj;
    };
}]);

