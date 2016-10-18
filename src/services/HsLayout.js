/**
 * @ngdoc object
 * @name hsLayout.object.HsLayout
 * @requires hsBase.object.HsConfigurable
 * @description Extends {@link hsBase.object.HsConfigurable HsConfigurable}.
 * Standard layout: abstract base class. Override the functions obj.setWidgetPos and 
 * obj.setWidgetSize in layout instantiations. The layout only affects the `size` and `pos` 
 * fields of widgets that don't have them explicitely set.
 * <h2>cfg options:</h2><pre>
 * </pre>
 * @todo ...
 */
angular.module('hsLayout').factory('HsLayout', ['HsConfigurable', function HsLayout(HsConfigurable) {
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
            throw "HsLayout is an abstract base class. Select a different layout.";
//            return ['0','0'];
        };
        obj.setWidgetSize = function() {
            throw "HsLayout is an abstract base class. Select a different layout.";
//            return ['100%','100%'];
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
        obj.containerSize = function(elem) {            
            return [parseInt(elem.css('width')), parseInt(elem.css('height'))];
        };
        return obj;
    };
}]);

