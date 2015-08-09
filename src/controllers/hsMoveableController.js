
/**
 * @ngdoc controller
 * @name hsWidgets.controller:hsMoveableCtrl
 * @restrict A
 * @scope
 * @description Controller to manage move and size events on widgets.
 */    
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
            start.left   = get(start.widget, 'left');
            start.top    = get(start.widget, 'top');
            start.width  = get(start.widget, 'width');
            start.height = get(start.widget, 'height');
    
            switch (start.action) {
                case 'move': start.a1 = 'left';  start.a2 = 'top';    break;
                case 'br':   start.a1 = 'width'; start.a2 = 'height'; break;
                case 'bl':   start.a1 = 'left';  start.a2 = 'height'; break;
                case 'tr':   start.a1 = 'width'; start.a2 = 'top';    break;
                case 'tl':   start.a1 = 'left';  start.a2 = 'top';    break;
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
            // move widget in steps of 1/gGrid of width/height:
            w.css('left',   ix*100/start.dw+'%'); 
            w.css('top',    iy*100/start.dh+'%');
       } else if (start.action === 'br') {
            ix = quant(ex, start.dw-padding.left-padding.right, 0)-margin.left-margin.right; 
            iy = quant(ey, start.dh-padding.top-padding.bottom, 1)-margin.top-margin.bottom;
            // move hs-widget-helper outline smoothly:
            h.css('left',   size.left + padding.left); 
            h.css('top',    size.top + padding.top); 
            h.css('width',  ex*100/start.dw+'%'); 
            h.css('height', ey*100/start.dh+'%'); 
            // move widget in steps of 1/gGrid of width/height:
            w.css('width',   ix*100/start.dw+'%'); 
            w.css('height',  iy*100/start.dh+'%');
        } else if (start.action === 'bl') {
            ix = quant(ex, start.dw-padding.left-padding.right, 0)+padding.left;  
            iy = quant(ey, start.dh-padding.top-padding.bottom, 1)-margin.top-margin.bottom;
            // move hs-widget-helper outline smoothly:
            h.css('left',   (ex + padding.left)*100/start.dw+'%'); 
            h.css('top',    size.top + padding.top); 
            h.css('width',  (start.width+start.left-ex)*100/start.dw+'%'); 
            h.css('height', ey*100/start.dh+'%'); 
            // move widget in steps of 1/gGrid of width/height:
            w.css('left',   ix*100/start.dw+'%'); 
            w.css('width',   (start.width + start.left - ix)*100/start.dw +'%'); 
            w.css('height',  iy*100/start.dh+'%');
        } else if (start.action === 'tl') {
            ix = quant(ex, start.dw-padding.left-padding.right, 0)+padding.left;  
            iy = quant(ey, start.dh-padding.top-padding.bottom, 1)+padding.top;
            // move hs-widget-helper outline smoothly:
            h.css('left',   (ex + padding.left)*100/start.dw+'%'); 
            h.css('top',    (ey + padding.top)*100/start.dh+'%'); 
            h.css('width',  (start.width+start.left-ex)*100/start.dw+'%'); 
            h.css('height', (start.height+start.top-ey)*100/start.dh+'%'); 
            // move widget in steps of 1/gGrid of width/height:
            w.css('left',   ix*100/start.dw+'%'); 
            w.css('top',    iy*100/start.dh+'%');
            w.css('width',   (start.width + start.left - ix)*100/start.dw +'%'); 
            w.css('height',  (start.height + start.top - iy)*100/start.dh+'%');
        } else if (start.action === 'tr') {
            ix = quant(ex, start.dw-padding.left-padding.right, 0)-margin.left-margin.right; 
            iy = quant(ey, start.dh-padding.top-padding.bottom, 1)+padding.top;
            // move hs-widget-helper outline smoothly:
            h.css('left',   size.left + padding.left); 
            h.css('top',    (ey + padding.top)*100/start.dh+'%'); 
            h.css('width',  ex*100/start.dw+'%'); 
            h.css('height', (start.height+start.top-ey)*100/start.dh+'%'); 
            // move widget in steps of 1/gGrid of width/height:
            w.css('top',    iy*100/start.dh+'%');
            w.css('width',   ix*100/start.dw+'%'); 
            w.css('height',  (start.height + start.top - iy)*100/start.dh+'%');
        }
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

