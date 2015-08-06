/*! hsWidgets - v1.1.0 - 2015-08-05
* https://github.com/HelpfulScripts/hsWidgets
* Copyright (c) 2015 Helpful Scripts; Licensed  */
/*
 * Create the module by calling angular.module with dependency object [].
 * Subsequent additions to the module work by referncing the angular.module('hsWidgets') without [].
 */
angular.module('hsWidgets', ['ngTouch', 'hs']);

angular.module('hsWidgets').controller('hsMoveableCtrl', [function() {
    "use strict";
    var gGrid = [12,12];
    var gRadius = 20;
    var gStart = null;
    var gUIHelper = "hs-widget-helper";
     
    function quant(x, d, i) { return Math.round(gGrid[i]*x/d)*d/gGrid[i]; }
    function get(e, a)      { return parseInt(e.css(a)); }

    function getEventType(x, y, dx, dy, r) {
        // check for magic spots
        if (y>0 && x>0 && y<r && x<r)               { return 'tl'; }
        else if (y>0 && x>dx-r && y<r && x<dx)      { return 'tr'; }
        else if (y>dy-r && x>0 && y<dy && x<r)      { return 'bl'; }
        else if (y>dy-r && x>dx-r && y<dy && x<dx)  { return 'br'; }
        else if (y>0 && y<r)                        { return 'move'; }
        return ''; 
    }

    function startEvent(start) {
        var layout = start.widget.closest('hs-layout');

        if (start.action !== '') {    // start a move:
            start.dw        = get(layout, 'width');
            start.dh        = get(layout, 'height');
            start.helper    = layout.find('.'+gUIHelper);
            start.layout = layout;
    
            if (start.action === 'move') { 
                start.a1 = 'left'; start.a2 = 'top'; 
            } else { 
                start.a1 = 'width'; start.a2 = 'height'; 
            }
            var x = start.x, y = start.y;
            start.x -= get(start.widget, start.a1);
            start.y -= get(start.widget, start.a2);
            setPosSize(start, x-start.x, y-start.y);
        }
    }
       
    function setPosSize(start, ex, ey) {
        var ix, iy;
        var w = start.widget, h = start.helper, db = start.layout;
        // get layout padding:
        var padding = { left:get(db, 'padding-left'), right:get(db, 'padding-right'), top:get(db, 'padding-top'), bottom:get(db, 'padding-bottom')};
        // get widget margins:
        var margin = { left:get(w, 'margin-left'), right:get(w, 'margin-right'), top:get(w, 'margin-top'), bottom:get(w, 'margin-bottom')};
        var size = { left:get(w, 'left'), top:get(w, 'top'), width:get(w, 'width'), height:get(w, 'height')};

        if (start.action === 'move') {
            ix = quant(ex, start.dw-padding.left-padding.right, 0)+padding.left; 
            iy = quant(ey, start.dh-padding.top-padding.bottom, 1)+padding.top;
            // move hs-widget-helper outline smoothly:
            h.css('left',   (ex + padding.left)*100/start.dw+'%'); 
            h.css('top',    (ey + padding.top)*100/start.dh+'%'); 
            h.css('width',  size.width); 
            h.css('height', size.height); 
        } else {
            ix = quant(ex, start.dw-padding.left-padding.right, 0)-margin.left-margin.right; 
            iy = quant(ey, start.dh-padding.top-padding.bottom, 1)-margin.top-margin.bottom;
            // move hs-widget-helper outline smoothly:
            h.css('left',   size.left + padding.left); 
            h.css('top',    size.top + padding.top); 
            h.css('width',  ex*100/start.dw+'%'); 
            h.css('height', ey*100/start.dh+'%'); 
        }
        // move widget in steps of 1/gGrid of width/height:
        w.css(start.a1,   ix*100/start.dw+'%'); 
        w.css(start.a2,    iy*100/start.dh+'%');
    }

    /**
     * @ngdoc event
     * @name #mouseDown
     * @eventOf hsWidgets.controller:hsMoveableCtrl
     * @description defines an move, size, or full-screen event-in-progress and shows the helper frame. 
     */
    function start(e) {
        if (gStart == null) {   // if no event in progress:
            var widget = $(e.target).closest('.hs-widget-container');
            var x = (e.offsetX || e.clientX - $(e.target).offset().left),
                y = (e.offsetY || e.clientY - $(e.target).offset().top);
            var action = getEventType(x, y, get(widget, 'width'), get(widget, 'height'), gRadius);
            if (action) {
                gStart = { x:e.pageX, y:e.pageY, widget:widget, action: action };
                startEvent(gStart);
                if (action === 'toggleFullScreen') { end(); }
            }
            e.preventDefault();
        }
    }

    /**
     * @ngdoc event
     * @name #mouseMove
     * @eventOf hsWidgets.controller:hsMoveableCtrl
     * @description if an event is in progress, then adjusts the position or size of the widget
     */
    function move(e) {
        if (gStart != null) { setPosSize(gStart, e.pageX-gStart.x, e.pageY-gStart.y); }
    }

    /**
     * @ngdoc event
     * @name #mouseUp
     * @eventOf hsWidgets.controller:hsMoveableCtrl
     * @description hides the helper frame and clears the move in progress.
     * Also, the time of latest mouseUp is used to determine a double click
     */
    function end(/*e*/) {
        if (gStart != null) {
            if (gStart.helper) { gStart.helper.css('top', -10000); gStart.helper.css('left', -10000); }
            gStart = null;
        }
    }

    /**
     * @ngdoc method
     * @name moveable
     * @methodOf hsWidgets.controller:hsMoveableCtrl
     * @param {jQuery selection} elem the element for which hs-moveable was defined
     */
    this.moveable = function moveable(elem, radius, grid) {
        var layout = $(elem).closest('hs-layout');
        if (layout.length === 0) { console.log("hs-moveable called outside of a hs-layout"); }
        else {        
            var target = $(elem).closest('.hs-widget-container');   // target to resize
            if (target.length === 0) {                              // if hs-moveable is not defined on a single widget:
                target = layout.find('.hs-widget-container');       //   assume it is defined on a layout:
            }
            if (target.length === 0) { console.log('hs-moveable did not find a widget container'); }
            else {
                // define one widget helper per layout
                if (layout.find('.'+gUIHelper).length === 0) {
                    layout.append('<div class=' + gUIHelper + '/>');
                }
                var widgets = target.children();
                widgets.on('mousedown', start);
                layout.on('mousemove', move);
                layout.on('mouseup', end);
                if (radius) { gRadius = radius; }
                if (grid)   { gGrid   = grid; }
            }
        }
    };
}]);

angular.module('hsWidgets').directive('hsLayout', ['HsTileLayout', 'HsColumnsLayout', 'HsRowsLayout', 'HsRelativeLayout', 
                function(HsTileLayout, HsColumnsLayout, HsRowsLayout, HsRelativeLayout) {
    "use strict";
    
    function getChildren(elem) {
        var w = $(elem.children()).children();
        return w;
    }
    
    return {
        restrict: 'E',
        replace: false,
        transclude: true,
        template: '<div class="hs-layout-container" ng-transclude></div>',
        controller: function($scope, $element) {
            $scope.layItOut = function() { 
                if ($scope.layout) { $scope.layout.layItOut(getChildren($element)); }
            };
        },
        link: function link(scope, elem, attrs) {
            var type = 'tiles';
            var dims = [];
            if (attrs.hsType !== undefined) { 
                type = attrs.hsType; 
            } else if (attrs.hsTiles !== undefined) { 
                type = 'tiles'; 
            } else if (attrs.hsRelative !== undefined) { 
                type = 'relative'; 
            } else if (attrs.hsColumns !== undefined) {
                type   = 'columns';
                dims = attrs.hsColumns || '[]';
            } else if (attrs.hsRows !== undefined) {
                type   = 'rows';
                dims = attrs.hsRows || '[]';
            }
            var fillLastColumn = (attrs.hsFillLastCol !== undefined);
            var lm;
            switch(type) {
                case 'columns': lm = new HsColumnsLayout(dims); break;
                case 'rows':    lm = new HsRowsLayout(dims); break;
                case 'tiles':   lm = new HsTileLayout(fillLastColumn); break;
                case 'relative':lm = new HsRelativeLayout(); break;
                default:        lm = new HsTileLayout(fillLastColumn);
            }
            scope.layout = lm;
            if (scope.$parent &&scope.$parent.layout) { scope.$parent.layItOut(); }
            scope.layItOut();
        }
    };
}]);

angular.module('hsWidgets').directive('hsMoveable', function() {
    "use strict";

    return {
        restrict: 'A',
        replace: false,
        controller: 'hsMoveableCtrl',
        link: function link(scope, elem, attrs, controller) {
            var moveable = parseInt(attrs['hsMoveable']) || 20;
            var grid = [12,12];
            if (attrs['grid'] !== undefined) {
                grid = JSON.parse(attrs['grid']);
                if (grid.length) {
                    grid[0] = parseFloat(grid[0]);
                    grid[1] = parseFloat(grid[1]);
                } else {
                    grid = parseFloat(grid);
                    grid = [grid, grid];
                }
            }
            controller.moveable(elem, moveable, grid);
        }
    };
});

angular.module('hsWidgets').directive('hsWidget', ['hsUtil', function(util) {
    "use strict";
    
    var gEasing   = 'swing';  
    
    function getVal(attr, def)  { return attr? JSON.parse(attr) : def; }
    //function removePercent(arr) { return [parseInt(arr[0].replace('%','')), parseInt(arr[1] .replace('%',''))]; }

    function maximizeWindow(scope, widget) {
        var animate = true;
        return function() {
            var t = widget.style.top, l = widget.style.left;
            var w = widget.style.width, h = widget.style.height;
            var size;
            if (widget.org) {        // shrink widget to original size     
                size = widget.org;  
                widget.org = undefined;
                $(widget).removeClass('hs-widget-in-front');         
            } else {                // maximize widget to fill screen
                widget.org = {top: t, left: l, width: w, height: h};  
                size = {top: '0%', left: '0%', width: '100%', height: '100%'};  
                $(widget).addClass('hs-widget-in-front');  
            }
            if (animate) {
                $(widget).animate(size, util.animationDuration, gEasing, function() {
                    scope.$broadcast('hs-resize-end', size);
                });       
                scope.$broadcast('hs-resize-begin', size);
            } else {
                scope.$broadcast('hs-resize-begin', size);
                $(widget).css(size);
                scope.$broadcast('hs-resize-end', size);
            }
        };
    }
    
   function doubleClick(handler) {
        var delay = 500;
        
        return function(event) {
            var now = new Date().getTime();
            var lastTouch = $(this).data('lastTouch') || now + 1; // the first time this will make delta a negativ number
            var delta = now - lastTouch;
            
            if (delta > 0 && delta < delay && event.type === $(this).data('lastType')) {   // a double tap or click: call handler
                handler(event);
                return false;
            }
            $(this).data('lastTouch', now);
            $(this).data('lastType', event.type);
            return true;
        };
    }

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
            if (controller) { scope.layItOut(); }
            else { console.log('no layout controller found in widget'); }
            $(elem).on('touchend mouseup', doubleClick(maximizeWindow(scope, elem[0])));
        }
/*        
        link: function link(scope, elem, attrs, controller) {
            $(elem).wrap('<div class="hs-widget-container">');
            var widget = { elem: elem.parent() };
            elem.hsStruct = {attrs:attrs};
            widget.size = getVal(attrs['hsSize'], []);
            widget.pos = getVal(attrs['hsPos'], []);
            if (controller) { scope.layout.addWidget(widget); }
            else { console.log('no layout controller found in widget'); }
//            $(elem).on('mouseup', doubleClick(maximizeWindow(scope, widget)));
            $(elem).on('touchend mouseup', doubleClick(maximizeWindow(scope, widget)));
        }
*/        
    };
}]);

angular.module('hsWidgets').factory('HsColumnsLayout', ['HsLayout', function HsComponentFactory(HsLayout) {
    "use strict";
    
    return function(widths) {
        function layItOut(widgets) {
            var numWidgets = widgets.length;
            var calcWidths = [];
            var i,j;
            var num = numWidgets;
            var max = 100.0;
            for (i=0; i<numWidgets; i++) { 
                $(widgets[i]).css('top', 0);
                $(widgets[i]).css('bottom', 0);
                if (widths.length === 0) { 
                    calcWidths.push({width:null}); 
                } else if (widths.length === 1) { 
                    calcWidths.push({width:widths[0]}); 
                } else if (i===0 && firstWidthSet) { 
                    calcWidths.push({width:widths[0]}); 
                    num--; max -= widths[0]; 
                } else if (i===numWidgets-1 && lastWidthSet)  { 
                    calcWidths.push({width:widths[widths.length-1]}); 
                    num--; max -= widths[widths.length-1];
                } else if (i<widths.length-1 &&!isNaN(widths[i])) { 
                    calcWidths.push({width:widths[i]}); 
                    num--; max -= widths[i]; 
                } else { calcWidths.push({width:null}); }
            }
            var defWidth;
            var sumWidth = 0;
            if (unit==='%') {
                defWidth = max/num;
                for (i=0; i<numWidgets; i++) { 
                    var width = calcWidths[i].width || defWidth;
                    $(widgets[i]).css('left', sumWidth+'%');
                    sumWidth += width;
                    if (i===numWidgets-1 && calcWidths[i].width == null) { $(widgets[i]).css('right', '0%'); }
                                     else { $(widgets[i]).css('width', width+'%'); }
                }
            } else {  // units === px
                defWidth = 100.0/numWidgets;
                var startPattern = true;
                i = 0;
                if (firstWidthSet) { // work forwards through the widths
                    while (i<numWidgets) { // pattern: [n, n, , , n, n]
                        if (startPattern) { // so far, all widths explicitely set as px
                            $(widgets[i]).css('left', sumWidth +'px');
                            if (calcWidths[i].width === null) { 
                                startPattern = false; 
                                $(widgets[i]).css('right', (100-(i+1)*defWidth) + '%');
                            } else {
                                sumWidth += calcWidths[i].width;
                                $(widgets[i]).css('width', calcWidths[i].width + 'px');
                            }
                        } else { // now, no widths are specified; use defaults
                            $(widgets[i]).css('right', (100-(i+1)*defWidth) + '%');
                            if (calcWidths[i].width !== null) { break; }    // lastWidthSet must be true
                            $(widgets[i]).css('left', i*defWidth +'%');
                        } 
                        i++;
                    }
                }
                j = numWidgets-1;
                sumWidth = 0;
                startPattern = true;
                if (lastWidthSet) {  // work backwards through the widths
                    while (j>=Math.max(0,i-1)) { 
                        if (startPattern) { // so far, all widths explicitely set as px
                            if (!firstWidthSet) { 
//                                $(widgets[j]).css('left', 'auto'); 
//                                $(widgets[j]).css('width', ''); 
                            }
                            $(widgets[j]).css('right', sumWidth + 'px');
                            if (calcWidths[j].width === null) {
                                startPattern = false;
                                $(widgets[j]).css('width', ''); 
                                if (firstWidthSet) { break; }
                                $(widgets[j]).css('left', j*defWidth + '%');
                            } else {
                                sumWidth += calcWidths[j].width;
                                $(widgets[j]).css('left', 'auto'); 
                                $(widgets[j]).css('width', calcWidths[j].width + 'px');
                            }
                        } else { // now, no widths are specified; use defaults
                            $(widgets[j]).css('right', (100-(j+1)*defWidth) + '%');
                            if (calcWidths[j].width !== null) { break; }
                            $(widgets[j]).css('left', j*defWidth +'%');
                        }
                        j--;
                    }
                }
            }
        }

        var obj = new HsLayout("HsColumnsLayout");
        obj.layItOut      = layItOut;
        var unit = "%";
        var firstWidthSet = false;
        var lastWidthSet  = false;
        if (widths.indexOf('px') >= 0) { unit = 'px'; }
        widths = widths.replace(',,', ',"",').replace(',,', ',"",').
                        replace('[,', '["",').replace(',]', ',""]').
                        replace('%','').replace('px','');        
        widths = JSON.parse(widths); 
        var len = widths.length-1;
        if (widths[0] && widths[0]!=="") { firstWidthSet = true; }          
        if (len>0 && widths[len] && widths[len]!=="") { lastWidthSet = true; }          
        for (var i=0; i<=len; i++) { widths[i] = parseFloat(widths[i]); }
        return obj;
    };
}]);

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

angular.module('hsWidgets').factory('HsRowsLayout', ['HsLayout', function HsComponentFactory(HsLayout) {
    "use strict";
    
    return function(heights) {
        function layItOut(widgets) {
            var numWidgets = widgets.length;
            var calcHeights = [];
            var i,j;
            var num = numWidgets;
            var max = 100.0;
            for (i=0; i<numWidgets; i++) { 
                $(widgets[i]).css('left', 0);
                $(widgets[i]).css('right', 0);
                if (heights.length === 0) { 
                    calcHeights.push({height:null}); 
                } else if (heights.length === 1) { 
                    calcHeights.push({height:heights[0]}); 
                } else if (i===0 && firstHeightSet) { 
                    calcHeights.push({height:heights[0]}); 
                    num--; max -= heights[0]; 
                } else if (i===numWidgets-1 && lastHeightSet)  { 
                    calcHeights.push({height:heights[heights.length-1]}); 
                    num--; max -= heights[heights.length-1];
                } else if (i<heights.length-1 &&!isNaN(heights[i])) { 
                    calcHeights.push({height:heights[i]}); 
                    num--; max -= heights[i]; 
                } else { calcHeights.push({height:null}); }
            }
            var defHeight;
            var sumHeight = 0;
            if (unit==='%') {
                defHeight = max/num;
                for (i=0; i<numWidgets; i++) { 
                    var height = calcHeights[i].height || defHeight;
                    $(widgets[i]).css('top', sumHeight+'%');
                    sumHeight += height;
                    if (i===numWidgets-1 && calcHeights[i].height == null) { $(widgets[i]).css('bottom', '0%'); }
                                     else { $(widgets[i]).css('height', height+'%'); }
                }
            } else {  // units === px
                defHeight = 100.0/numWidgets;
                var startPattern = true;
                i = 0;
                if (firstHeightSet) { // work forwards through the heights
                    while (i<numWidgets) { // pattern: [n, n, , , n, n]
                        if (startPattern) { // so far, all heights explicitely set as px
                            $(widgets[i]).css('top', sumHeight +'px');
                            if (calcHeights[i].height === null) { 
                                startPattern = false; 
                                $(widgets[i]).css('bottom', (100-(i+1)*defHeight) + '%');
                            } else {
                                sumHeight += calcHeights[i].height;
                                $(widgets[i]).css('height', calcHeights[i].height + 'px');
                            }
                        } else { // now, no heights are specified; use defaults
                            $(widgets[i]).css('bottom', (100-(i+1)*defHeight) + '%');
                            if (calcHeights[i].height !== null) { break; }    // lastHeightSet must be true
                            $(widgets[i]).css('top', i*defHeight +'%');
                        } 
                        i++;
                    }
                }
                j = numWidgets-1;
                sumHeight = 0;
                startPattern = true;
                if (lastHeightSet) {  // work backwards through the heights
                    while (j>=Math.max(0,i-1)) { 
                        if (startPattern) { // so far, all heights explicitely set as px
                            if (!firstHeightSet) { 
//                                $(widgets[j]).css('top', 'auto'); 
//                                $(widgets[j]).css('height', ''); 
                            }
                            $(widgets[j]).css('bottom', sumHeight + 'px');
                            if (calcHeights[j].height === null) {
                                startPattern = false;
                                $(widgets[j]).css('height', ''); 
                                if (firstHeightSet) { break; }
                                $(widgets[j]).css('top', j*defHeight + '%');
                            } else {
                                sumHeight += calcHeights[j].height;
                                $(widgets[j]).css('top', 'auto'); 
                                $(widgets[j]).css('height', calcHeights[j].height + 'px');
                            }
                        } else { // now, no heights are specified; use defaults
                            $(widgets[j]).css('bottom', (100-(j+1)*defHeight) + '%');
                            if (calcHeights[j].height !== null) { break; }
                            $(widgets[j]).css('top', j*defHeight +'%');
                        }
                        j--;
                    }
                }
            }
        }

        var obj = new HsLayout("HsColumnsLayout");
        obj.layItOut      = layItOut;
        var unit = "%";
        var firstHeightSet = false;
        var lastHeightSet  = false;
        if (heights.indexOf('px') >= 0) { unit = 'px'; }
        heights = heights.replace(',,', ',"",').replace(',,', ',"",').
                          replace('[,', '["",').replace(',]', ',""]').
                          replace('%','').replace('px','');        
        heights = JSON.parse(heights); 
        var len = heights.length-1;
        if (heights[0] && heights[0]!=="") { firstHeightSet = true; }          
        if (len>0 && heights[len] && heights[len]!=="") { lastHeightSet = true; }          
        for (var i=0; i<=len; i++) { heights[i] = parseFloat(heights[i]); }
        return obj;
    };
}]);

angular.module('hsWidgets').factory('HsTileLayout', ['HsLayout', function HsComponentFactory(HsLayout) {
    "use strict";
    
    return function(fillLastColumn) {
        function setWidgetPos(i, widgets) {
            var units = ['%','%'];
            var widget = widgets[i];
            var pos = [0,0];
            if (i>0) {
                var w = widgets[i-1];
                var wpos = w.calcPos;
                var wsiz = w.calcSize;
                var siz = widget.calcSize;
                units[0] = siz[0].indexOf('px')>0? 'px' : '%';
                units[1] = siz[1].indexOf('px')>0? 'px' : '%';
                pos[0] = parseFloat(wpos[0]) + parseFloat(wsiz[0]);
                pos[1] = parseFloat(wpos[1]);
    
                if (pos[0]+parseFloat(siz[0]) > 100) {
                    pos[0] = 0; pos[1] += parseFloat(wsiz[1]);
                }
            }
            pos[0] += units[0]; pos[1] += units[1];
            return pos;
        }
        
        function setWidgetSize(i, widgets) {
            var root = Math.sqrt(widgets.length);
            var rows = parseInt(Math.round(root));
            var cols = parseInt(root);
            if (root > cols) { cols++; }
            var size = [parseInt(100/cols), parseInt(100/rows)];
            
            // if last col: adjust width to remainin gsize
            if (fillLastColumn) {
                if (i%cols === cols-1 || i === widgets.length-1) {
                    var i0 = Math.floor(i/cols)*cols;
                    size[0] = 100;
                    for (var w=i0; w<i; w++) {
                        size[0] -= parseInt(widgets[w].calcSize[0]); 
                    }
                }
            }
            size[0] += '%'; size[1] += '%';
            return size;
        }
        
        var obj = new HsLayout("HsTileLayout");
        obj.setWidgetPos  = setWidgetPos;
        obj.setWidgetSize = setWidgetSize;
        return obj;
    };
}]);

/*! hs - v0.9.5 - 2015-06-21
* https://github.com/HelpfulScripts/hs
* Copyright (c) 2015 Helpful Scripts; Licensed  */


/**
 * @ngdoc overview
 * @name hs
 * @description Helpful Scripts utility services
 */

/*
 * Create the module by calling angular.module with dependency object [].
 * Subsequent additions to the module work by referncing the angular.module('hs') without [].
 */
angular.module('hs', []);;
/**
 * @ngdoc object
 * @name hs.object.HsConfigurable
 * @description inherits from {@link hs.object.HsObject HsObject} and provides for a basic configuration mechanism; 
 * @param {string} type the object type or category
 * @param {string} name the object name
 * @param {HsObject=} parent If specified, adds this HsObject as a child to the parent.
@example
<example module="hs">
  <file name="index.html">
    <hs-example cfg='data/cfg.json'>           
    </hs-example>
  </file>
  <file name="script.js">
    angular.module('hs').directive('hsExample', ['HsConfigurable', function(HsConfigurable) {
        return {
            restrict: 'E',
            link: function(scope, ele, attrs) {
                var jsonFile = attrs['cfg'];
                var obj = new HsConfigurable();
                obj.cfg(jsonFile, function(){
                    ele.html(JSON.stringify(obj.cfg()));
                });
            }
        }; 
    }]);
  </file>
</example>
 */
angular.module('hs').factory('HsConfigurable', ['HsObject', '$http', function HsConfigurable(HsObject, $http){ 
    "use strict";    
    
    function addParam(param, value, cfg) {
        if (cfg[param]) {
            if (!(cfg[param] instanceof Array)) { cfg[param] = [cfg[param]]; }
            cfg[param].push(value);
        } else {
            cfg[param] = value;
        }
    }

     
    function copyCfg(from, to) {
        for (var e in from) { 
            if (from[e] instanceof Array) { 
                to[e] = []; copyCfg(from[e], to[e]); 
//            } else if (typeof from[e] === 'object') {
//                to[e] = {}; copyCfg(from[e], to[e]); 
            } else {
                to[e] = from[e]; 
            }
        }
    }
    
    function readJSONCfg(jsonFile, cfg, cb) {
        $http.get(jsonFile).
            success(function(data /*, status, headers, config*/) {
                addParam('cfgFile', jsonFile, cfg);
                addParam('data', data, cfg);
                console.log('read ' + jsonFile + '\r' + JSON.stringify(data));
                if (cb) { cb(); }
            }).
            error(function(data, status /*, headers, config */) {
                addParam('cfgFile', jsonFile, cfg);
                addParam('data', ""+data, cfg);
                addParam('error', ""+status, cfg);
                console.log('error reading ' + jsonFile + ': ' + status);
                if (cb) { cb(); }
            });
    }
    
    function isEmpty(obj) {   
        // null and undefined are "empty"
        if (obj == null) { return true; }
    
        // Assume if it has a length property with a non-zero value
        // that that property is correct.
        if (obj.length > 0)    { return false; }
        if (obj.length === 0)  { return true; }
    
        // Otherwise, does it have any properties of its own?
        // Note that this doesn't handle
        // toString and valueOf enumeration bugs in IE < 9
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) { return false; }
        }
        return true;
    }
    
    function copyProperties(from) {
        var i, r, result;
        if (from instanceof Array) {
            result = [];
            for (i=0; i<from.length; i++) { 
                r =  copyProperties(from[i]);
                if (!isEmpty(r)) { result[i] = r; }
            }
        } else if ((typeof from === 'object') || (typeof from === 'function')) {
            result = {};
            var p = Object.prototype.toString.call(from).slice(8, -1); 
            if ((p === 'Object') || (p === 'Function')) { 
                for (i in from) {
                    r =  copyProperties(from[i]);
                    if (!isEmpty(r)) { result[i] = r; }
                }
            } 
        } else if (typeof from === 'string') {
            result = from.slice(0);
        } else {
            result = from;
        }
        return result;
    }
    
      
    function objCfgSave(obj) {
        var result = copyProperties(obj.cfg.cfg);
        if (obj.children.list.length>0) {
            result.children = [];
            for (var c=0; c<obj.children.list.length; c++) {
                result.children.push(objCfgSave(obj.children.list[c]));
            }
        }
        return result;
    }
    
    function _cfgSave(obj){
       /** @ngdoc function
        * @name cfgSave
        * @methodOf hs.object.HsConfigurable
        * @description Configuration save function.
        @example
        <example module="hs">
          <file name="script.js">
          angular.module('hs').directive('hsCfgSave', ['HsConfigurable', function(HsConfigurable){
                return {
                    restrict: 'E',
                    link: function(scope, ele, attrs) {
                        var result = "";
                        var o = new HsConfigurable().
                            cfg({name: "myName", type: "myLabel"});
                        var result = o.cfgSave('data/savedCfg.json');
                        ele.html(result);
                    }
                }; 
          }]);
          </file>
          <file name="index.html">
            <hs-cfg-save>           
            </hs-cfg-save>
          </file>
        </example>
         */
        return function cfgSave(file) {
            var result = JSON.stringify(objCfgSave(obj));  
            $http.post(file, result);
            return result;
        };
    }

  function _cfg(obj) {
/** @ngdoc function
 * @name cfg
 * @methodOf hs.object.HsConfigurable
 * @description Configuration function that doubles as a configuration object.
 * This object consists of a list of key/value pairs in object literal notation:
 * <pre>    { key1: value1, key2: value2, ...} </pre>
 * 
 * # Object Literal configuration
 * Calling cfg({...}) with an *object literal* adds or replaces the provided keys in the configuration object.
 * Calling cfg("...") with a *string* returns the value of the specified key.
 * Calling cfg() without a parameter returns the configuration object. 
 * @example
 * <pre>
 * var o = new HsObject().cfg({name: "obj1", type: "label"});
 * console.log(o.cfg().name);                        // > obj1
 * console.log(o.cfg('name'));                       // > obj1
 * o.cfg().range = [0, 1];
 * console.log(o.cfg().range[0]);                    // > 0
 * console.log(o.cfg('range')[0]);                   // > 0
 * o.cfg({color: "green"});
 * console.log(o.cfg().name + ' ' + o.cfg().color);  // > obj1 green
 * </pre>
 * 
@example
See `script.js` in the following example for 
<example module="hs">
  <file name="script.js">
  angular.module('hs').directive('hsExample', ['HsConfigurable', function(HsConfigurable){
        return {
            restrict: 'E',
            link: function(scope, ele, attrs) {
                var result = "";
                var o = new HsConfigurable().
                    cfg({name: "myName", type: "myLabel"});
                var cfg = o.cfg();
                result += 'o.cfg().name = ' + o.cfg().name + '<br>';  
                result += 'cfg.name = ' + cfg.name + '<br>';  
                result += "o.cfg('name') = " + o.cfg('name') + '<br>';    
                o.cfg().range = [-1, 1];
                result += 'o.cfg().range[0] = ' + o.cfg().range[0] + '<br>'; 
                result += "o.cfg('range')[0] = " + o.cfg('range')[0] + '<br>';
                o.cfg({color: "green"});
                result += 'o.cfg().name + o.cfg().color = ' + o.cfg().name + ' ' + o.cfg().color + '\n';      // > obj1
                ele.html(result);
            }
        }; 
  }]);
  </file>
  <file name="index.html">
    <hs-example>           
    </hs-example>
  </file>
</example>
 * #JSON file configuration
 * Calling cfg(d) with a JSON file or JSON url will configure the object with the parameters from the JSON file. 
 * 
 * @param {Object=} d specifies a JSON file or an Object literal containing key value pairs to add or replace in the cfg object.
 * @param {function=} cb a callback function to call when loading of the configuration is completed.
 * @returns {HsObject} the configuration {@link hs.object.HsObject HsObject} when called without parameter, otherwise the HsObject itself.
 * This allows chaining of method calls during setup.
 */
        return function cfg(d, cb) {
            var internalCfg = obj.cfg.cfg;
            if (!d) {                   // no parameter --> return cfg object
                return internalCfg; 
            } else {                    
                if (d.indexOf) {        // d is a string
                    var j = d.indexOf('.json');
                    if ((j>0) && (j=== d.length-5)) { // if d ends with '.json'
                        readJSONCfg(d, internalCfg, cb);     //   --> load JSON file
                    } else {                                 // else d is a parameter name
                        return internalCfg[d];               //   --> return parameter value
                     }
                } else {                // d is an object literal
                    copyCfg(d, internalCfg);                 // --> copy cfg object
                }

                if (cb) { cb(); } 
                return obj;
            }
        };
    }

    return function(type, name, parent) {
        var obj = new HsObject(type, name, parent);
        
        obj.copyProperties = copyProperties;
        obj.cfg = _cfg(obj);
        obj.cfg.cfg = { type: obj.type(), name: obj.name() };
              
        obj.cfgSave = _cfgSave(obj);
        
        return obj;
    };
}]);
;
/**
 * @ngdoc object
 * @name hs.object.HsObject
 * @description Base class for all HelpfulScripts objects. 
 * Can be used with or without new.
 * <pre>
 * var obj1 = HsObject('<HsDerivedObject>');
 * var obj2 = new HsObject('<HsDerivedObject>');	// identical result
 * </pre>
 * @param {string} type the object type or category
 * @param {string=} name the object name
 * @param {HsObject=} parent If specified, adds this HsObject as a child to the parent.
 */
angular.module('hs').factory('HsObject', function HsObject(){ 
    "use strict";    
    
    function _children(obj) {
        /** @ngdoc function
         * @name children
         * @methodOf hs.object.HsObject
         * @param {HsObject|String=} child *String*: the parameter specifies an HsObject type and
         * the function returns an array of children of this type.
         * <br>*HsObject*: `child` will be added as a child to this parent and the child 
         * returned.
         * <br>*Unspecified*: the list of current children will be returned as an Array. 
         * @param {Boolean=} remove if specified and true-ish, the specified *child* object will be removed 
         * from the list of children. If *child* is a type string, *remove* will have no effect.
         * @description retrieves the list of children, or sets or removes a specific child to this parent.
         * In addition to maintaining an array of the children to this parent, this function also
         * generates sub-arrays of children for each Object type.
         * @returns {object} the child if a child HsObject was specified; 
         * <br>or an array of children of a certain type, if a type string was specified;
         * <br>or the array of children if no parameter was specified.
         */
        return function children(child, remove) { 
            var list = obj.children.list;
            var type = obj.type();
            if (!child) {                           // no parameter specified
                return list;                        //   --> return list of children
            } else if (typeof child === 'string') { // type string specified
                return list[type];                  //   --> return children of type
            } else {                                // child object specified
                var i = list.indexOf(child); 
                if (i < 0) {                        // if not in array yet
                    list.push(child);           // --> add to array
                    var t = child.type();
                    if (!t) { console.log('no object type set'); }
                    else {
                        var cat = list[t];
                        if (!cat) { cat = list[t] = []; }
                        cat.push(child);
                        }
                } else {                            // if in array and 'remove' is true
                    if (remove) { list.splice(i, 1); }  // --> remove child
                }
                return child;                       //   --> return child
            } 
        };
    }
    
	return function(type, name, parent) {
		var obj = {};
		var gName = name || "undefined";
		
        obj.type = function() { return type || "undefined"; };
        obj.name = function(newName) { 
            if (!newName) { return gName; }
            else {
                gName = gName;
                return obj;
            }
            
        };
		
        obj.children = _children(obj);
        obj.children.list = [];
        
        if (parent) {   // if parent is specified, add obj to its children
            parent.children(obj);
        }
        
   		return obj;
	};
});
;
/**
 * @ngdoc service
 * @name hs.hsUtil
 * @description Provides some shared utility functions
 */
angular.module('hs').factory('hsUtil', function() {
    "use strict";    
    
/**
 * @ngdoc method
 * @name .#toDate
 * @methodOf hs.hsUtil
 * @param {String} str the string to convert to a data
 * @param {integer=} limitYear the year below which the century is corrected. Defaults to 1970.
 * @returns {Date} a new Date object parsed from `str`.
 * @description returns a new Date object parsed from `str` and corrects for a difference in 
 * interpreting centuries between webkit and mozilla in converting strings to Dates:
 * The string "15/7/03" will convert to Jul 15 1903 in Mozilla and July 15 2003 in Webkit.
 * If `limitYear` is not specified this method uses 1970 as the decision date: 
 * years 00-69 will be interpreted as 2000-2069, years 70-99 as 1970-1999.
 */
	function toDate(str, limitYear) {
	    limitYear = limitYear || 1970;
		var d = new Date(str),
			yy = d.getFullYear();				// to correct for century difference between Webkit and Firefox
		if (yy<limitYear) { d.setFullYear(yy+100); }	// for short years in strings such as '1/1/14'
		return d;
	}
    
/**
 * @ngdoc method
 * @name .#getType
 * @methodOf hs.hsUtil
 * @param {Object} sample .
 * @returns {String} the type ('float', 'date', 'percent', 'categorical') corresponding to the sample
 * @description determines the data type. Supported types are
* 'date':   sample represents a Date, either as a Date object or a String 
* 'float':  sample represents a floating point number
* 'percent': sample represents a percentage
* 'categorical': sample represents a categorical value
 */
    function getType(sample) {
        if (sample!=="") {
            if (sample instanceof Date) { return 'date'; }  // if sample is already a date:
            if (!isNaN(sample))         { return 'float'; }

            var d = toDate(sample);
            if (d instanceof Date) { // sees ints as valid dates
                if (!isNaN(d)) {
                    if (d.getFullYear()>1900) { return 'date'; }
                }
            }

//            if (!isNaN(parseFloat(sample))) { return 'float'; }
            if (typeof sample === 'string' || sample instanceof String) { 
                if (sample.indexOf('%') === sample.length-1) {
                    if (!isNaN(parseFloat(sample))) { return 'percent'; }
                }
                if (!isNaN(+sample)) { return 'float'; }
                switch (sample.toLowerCase()) {
                    case "": break;
                    case "null": break;
                    case "#ref!": break;
                    default: if (sample.length>0) { return 'categorical'; }
                }
            }
        }
        return null;
    }
        
/**
 * @ngdoc method
 * @name .#castData
 * @methodOf hs.hsUtil
 * @param {String} type ['date'|'percent'|'float'|<any>] The type to cast into. In case of <any>, no casting occurs.
 * @param {Float} sample The value to cast.
 * @returns {Object} The result of the cast. 
 * @description Casts the sample to the specified data type.
 */
    function castData(type, sample) {
        var n;
        switch (type) {
            case 'date':    n = toDate(sample);
                            if (isNaN(n.getTime())) { n = null; }
                            break;
            case 'percent': n = parseFloat(sample)/100;
                            if (isNaN(n)) { n = null; }
                            break;
            case 'float':   n = parseFloat(sample); 
                            if (isNaN(n)) { n = null; }
                            break;
            default:        n = sample;
        }
        return n;
     }

/**
 * @ngdoc method
 * @name .#doubleClick
 * @methodOf hs.hsUtil
 * @param {Function} handler the event handler that will be called in case of a double click
 * @description reacts to 'touchend' and 'mouseup' events, detects a double-tap or a double-click, 
 * and calls the handler function.
 */
    function doubleClick(handler) {
        var delay = 500;
        
        return function(event) {
            var now = new Date().getTime();
            var lastTouch = $(this).data('lastTouch') || now + 1; // the first time this will make delta a negativ number        
            var delta = now - lastTouch;
            $(this).data('lastTouch', now);
            
            if (delta > 0 && delta < delay) {   // a double tap or click
                handler(event);
                return false;
            }
            return false;
        };
    }

    return {
        toDate:         toDate,
        getType:        getType,
        castData:       castData,
        doubleClick:    doubleClick,
        animationDuration: 250
    };
});
