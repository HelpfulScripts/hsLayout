
/**
 * @ngdoc controller
 * @name hsWidgets.controller:hsMoveableCtrl
 * @restrict A
 * @scope
 * @description Controller to manage move and size events on widgets.
 */    
angular.module('hsWidgets').controller('hsMoveableCtrl', ['$scope', function(/*$scope*/) {
    var steps = 12;
    var r = 10;
    var gStart = null;
    var gUIHelper = "hs-widget-helper";
    var gLastMouseUp = 0;
     
    function quant(x, d)    { return Math.round(steps*x/d)*d/steps; }
    function get(e, a)      { return parseInt(e.css(a)); }

    function getEventType(x, y, dx, dy, r) {
        var dt = new Date().getTime() - gLastMouseUp;
        // check for magic spots
        if (y>0 && x>0 && y<r && x<r)               { return 'tl'; }
        else if (y>0 && x>dx-r && y<r && x<dx)      { return 'tr'; }
        else if (y>dy-r && x>0 && y<dy && x<r)      { return 'bl'; }
        else if (y>dy-r && x>dx-r && y<dy && x<dx)  { return 'br'; }
        else if (y>0 && y<r) { 
            return dt<100? 'toggleFullScreen' : 'move'; 
        }
        return ''; 
    }

    function startEvent(start) {
        var dashboard = start.widget.parent();

        if (start.action === 'toggleFullScreen') {
 console.log('double click');                  
        } else if (start.action !== '') {    // start a move:
            start.dw        = get(dashboard, 'width');
            start.dh        = get(dashboard, 'height');
            start.helper    = dashboard.find('.'+gUIHelper);
            start.dashboard = dashboard;
    
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
        var w = start.widget, h = start.helper, db = start.dashboard;
        // get dashboard padding:
        var padding = { left:get(db, 'padding-left'), right:get(db, 'padding-right'), top:get(db, 'padding-top'), bottom:get(db, 'padding-bottom')};
        // get widget margins:
        var margin = { left:get(w, 'margin-left'), right:get(w, 'margin-right'), top:get(w, 'margin-top'), bottom:get(w, 'margin-bottom')};
        var size = { left:get(w, 'left'), top:get(w, 'top'), width:get(w, 'width'), height:get(w, 'height')};

        if (start.action === 'move') {
            ix = quant(ex, start.dw-padding.left-padding.right)+padding.left; 
            iy = quant(ey, start.dh-padding.top-padding.bottom)+padding.top;
            // move hs-widget-helper outline smoothly:
            h.css('left',   (ex + padding.left)*100/start.dw+'%'); 
            h.css('top',    (ey + padding.top)*100/start.dh+'%'); 
            h.css('width',  size.width); 
            h.css('height', size.height); 
        } else {
            ix = quant(ex, start.dw-padding.left-padding.right)-margin.left-margin.right; 
            iy = quant(ey, start.dh-padding.top-padding.bottom)-margin.top-margin.bottom;
            // move hs-widget-helper outline smoothly:
            h.css('left',   size.left + padding.left); 
            h.css('top',    size.top + padding.top); 
            h.css('width',  ex*100/start.dw+'%'); 
            h.css('height', ey*100/start.dh+'%'); 
        }
        // move widget in steps of steps of 1/12 of width/height:
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
            var widget = $(this).parent().parent();
            var x = (e.offsetX || e.clientX - $(e.target).offset().left),
                y = (e.offsetY || e.clientY - $(e.target).offset().top);
            var action = getEventType(x, y, get(widget, 'width'), get(widget, 'height'), r);
            if (action) {
                gStart = { x:e.pageX, y:e.pageY, widget:widget, action: action };
                startEvent(gStart);
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
        gLastMouseUp = new Date().getTime();
        if (gStart != null) {
            gStart.helper.css('top', -10000); gStart.helper.css('left', -10000);
            gStart = null;
        }
    }

    /**
     * @ngdoc method
     * @name moveable
     * @methodOf hsWidgets.controller:hsMoveableCtrl
     * @param {jQuery selection} elem the element for which hs-moveable was defined
     */
    this.moveable = function moveable(elem) { 
        var t = $(elem).find('.hs-widget-pane'),            // target to resize
            c = t.parent().parent();                        // dashboard in which to resize
        if ($(c).find('.'+gUIHelper).length === 0) {
            c.append('<div class=' + gUIHelper + '/>');     // add one widget helper per container
        }
        t.append('<div class=hs-widget-moveable' + '/>');     // add affordance to the target
        $(c).find('.hs-widget-moveable').on('mousedown', start);
        $(c).on('mousemove', move);
        $(c).on('mouseup', end);
    };
}]);

