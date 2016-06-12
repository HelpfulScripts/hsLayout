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
                <hs-widget hs-config-card="data/myCard.html">
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

    return { 
        restrict: 'A',
        replace: false,
        controller: 'hsConfigCardCtrl',
        compile: function(celem, attrs) {
	        celem = celem.closest('hs-widget');
	  		$(celem).append('<div class="hs-cfg-card"><div class="hs-cfg-card-content" ng-include="\''+attrs.hsConfigCard+'\'"></div></div>');
	        return function link(scope, elem) {
		        $(elem).on('touchstart mousedown', scope.mouseDown(elem)); 
		        $(elem).on('touchend mouseup', scope.mouseUp);
	        };
    	}
    };
});

