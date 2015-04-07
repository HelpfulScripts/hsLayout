/*! hsWidgets - v1.0.0 - 2015-04-06
* https://github.com/HelpfulScripts/hsWidgets
* Copyright (c) 2015 Helpful Scripts; Licensed  */
/*
 * Create the module by calling angular.module with dependency object [].
 * Subsequent additions to the module work by referncing the angular.module('hsWidgets') without [].
 */
angular.module('hsWidgets', ['ngTouch']);

angular.module('hsWidgets').controller('hsMoveableCtrl', ['$scope', function(/*$scope*/) {
    "use strict";
    var steps = 12;
    var gRadius = 20;
    var gStart = null;
    var gUIHelper = "hs-widget-helper";
     
    function quant(x, d)    { return Math.round(steps*x/d)*d/steps; }
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
        var dashboard = start.widget.parent();

        if (start.action !== '') {    // start a move:
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
            var widget = $(e.target).parent().parent();
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
    this.moveable = function moveable(elem, radius) { 
        var t = $(elem).find('.hs-widget-pane'),            // target to resize
            c = t.parent().parent();                        // dashboard in which to resize
        if ($(c).find('.'+gUIHelper).length === 0) {
            c.append('<div class=' + gUIHelper + '/>');     // add one widget helper per container
        }
        t.append('<div class=hs-widget-moveable' + '/>');     // add affordance to the target
        $(c).find('.hs-widget-moveable').on('mousedown', start);
        $(c).on('mousemove', move);
        $(c).on('mouseup', end);
        if (radius) { gRadius = radius; }
    };
}]);

angular.module('hsWidgets').directive('hsDashboard', function() {
    "use strict";
    
    function setWidgetPos(widgets, widget) {
        var pos = [0,0];
        if (widgets.length > 1) {
            var w = widgets[widgets.length-2];
            var wpos = w.pos;
            var wsiz = w.size;
            var siz = widget.size;
            pos[0] = wpos[0] + wsiz[0];
            pos[1] = wpos[1];

            if (pos[0]+siz[0] > 100) {
                pos[0] = 0; pos[1] += wsiz[1];
            }
        }
        setTimeout(function() {
            var pane = $(widget.elem[0]).find('.hs-widget-pane');
            if (pos[0]!==0) { pane.css('margin-left', '0'); }
            if (pos[1] > 0) { pane.css('margin-top', '0'); }
        }, 1000);

        widget.pos = pos;
    }

    function setWidgetMargins(widget) {
        var w  = widget.elem;
        $(w).css('width',  widget.size[0] +'%');  
        $(w).css('height', widget.size[1] +'%');
        $(w).css('left',   widget.pos[0]  +'%');    
        $(w).css('top',    widget.pos[1]  +'%');
    }
    
    function registerWidget(dashboard) {
        return function registerWidget(widget) {
            dashboard.widgets.push(widget);
            if (widget.pos.length === 0) { setWidgetPos(dashboard.widgets, widget); }
            setWidgetMargins(widget);
        };
    }
    
    return {
        restrict: 'EA',
        replace: false,
        controller: function($scope, $element) {
            this.widgets = [];
            this.registerWidget = registerWidget(this);
            var e = $($element[0]);
            this.width  = parseInt(e.css('width'));
            this.height = parseInt(e.css('height'));
        },
        link: function link(/*scope, elem, attrs*/) {}
    };
});

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

angular.module('hsWidgets').directive('hsWidget', function() {
    "use strict";
    
    var gDuration = 250;
    var gEasing   = 'swing';
    
    function getVal(attr, def)  { return attr? removePercent(JSON.parse(attr)) : def; }
    function removePercent(arr) { return [parseInt(arr[0].replace('%','')), parseInt(arr[1] .replace('%',''))]; }
        
    function maximizeWindow(scope, widget) {
        return function() {
           var t = widget.elem[0].style.top, l = widget.elem[0].style.left;
           var w = widget.elem[0].style.width, h = widget.elem[0].style.height;
           if (widget.org) {              
               widget.elem.animate({  
                   top: widget.org[0], left: widget.org[1], width: widget.org[2], height: widget.org[3]
               }, gDuration, gEasing, function() {
                   widget.elem.removeClass('hs-widget-in-front');         
               });       
               widget.org = undefined;
           } else {
               widget.org = [t, l, w, h];     
               widget.elem.addClass('hs-widget-in-front');  
               widget.elem.animate({  
                   top: '0%', left: '0%', width: '100%', height: '100%'
               }, gDuration, gEasing);       
           }
        };
    }

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
            $(elem).dblclick(maximizeWindow(scope, widget));
        }
    };
});

/*
angular.module('hsWidgets').animation('.js-anim', function () {
    "use strict";

    return {      
        beforeAddClass: function(element, className, done) {
console.log('beforeAddClass');            
            if (className === 'hs-widget-in-front') {
                element.animate({ opacity: 0 },1000, function (){
                    element.css({ opacity: 1 }); 
                    done();
                });
            }
            else {
                done();
            }
        }      
    };
});
*/
