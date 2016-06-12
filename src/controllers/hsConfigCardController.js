
/**
 * @ngdoc controller
 * @name hsLayout.controller:hsConfigCardCtrl
 * @restrict A
 * @scope
 * @description Controller to manage move and size events on widgets.
 */    
angular.module('hsLayout').controller('hsConfigCardCtrl', function($scope) {
    "use strict";

	//var gEasing   = 'swing';  
	//var ANIMATION_DURATION = 100;
	var DELAY = 1000;
	var gTimer;
	
	function popupWindow(scope, elem) {
		elem = elem.closest('hs-widget'); 
		var card = $(elem).find('.hs-cfg-card');
/*
		if (card.length === 0) {
	  		elem.append('<div class="hs-cfg-card"><div class="hs-cfg-card-content" ng-include="'+$scope.content+'"></div></div>');
	  		card = $(elem).find('.hs-cfg-card');
		}
*/		
	  	$(card).css('visibility', 'visible');
	    $(card).on('touchstart mousedown', function() {
		    $(card).css('visibility', 'hidden');
	    });
	} 
	
   function mouseDown(elem) { 
	  return function() {
	     gTimer = setTimeout(function() {
	      	gTimer = undefined;
	      	popupWindow($scope, elem);
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
	
	$scope.mouseDown = mouseDown;
	$scope.mouseUp	 = mouseUp;
});

