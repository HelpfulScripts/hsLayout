/**
 * @ngdoc directive
 * @name hsLayout.directive:hsConfigCard
 * @restrict A
 * @element ['hs-widget', 'hs-layout']
 * @description adds the configurable option to a widget or layout. Click-and-holding....
@example
<example module="hsLayout">
    <file name="index.html">
        <div style="height: 300px; padding:0; ">
            <hs-layout hs-moveable grid='20'>
                <hs-widget hs-config-card uib-popover="content" popover-title="title">
                    <br>1
                    <br>Click-and-hold to open config popover.
                </hs-widget>
                <hs-widget>
                    <br>2
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
angular.module('hsLayout').directive('hsConfigCard', function() {
    "use strict";

//    var gEasing   = 'swing';  
//    var ANIMATION_DURATION = 100;
	var DELAY = 1000;
    var gTimer;

    function popupWindow(scope /*, elem*/) {
    	return function() {
        	console.log('popup triggered');
        	scope.show = true;
    	};
    }
    
    function mouseDown(handler) { 
        return function(event) {
        	gTimer = setTimeout(function() {
            	gTimer = undefined;
                handler(event);
                return false;
        	}, DELAY);
            return true;
        };
    }
    
    function mouseUp() {
    	if (gTimer) {
    		clearTimeout(gTimer);
    		gTimer = undefined;
    	}
    }

    return {
        restrict: 'A',
        replace: false,
        controller: 'hsConfigCardCtrl',
        link: function link(scope, elem/*, attrs*/) {
//	        var content = attrs.hsConfigCard; 
	        scope.show = false;
	        $(elem).on('touchstart mousedown', mouseDown(popupWindow(scope, elem))); 
	        $(elem).on('touchstend mouseup', mouseUp);
        }
    };
});

