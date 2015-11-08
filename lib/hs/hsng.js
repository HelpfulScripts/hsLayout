/*! hs - v1.0.0 - 2015-11-07
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
 * @ngdoc service
 * @name hs.hsUtil
 * @description Provides some shared utility functions
 */
angular.module('hs').factory('hsUtil', function() {
    "use strict";    
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
        var last;
        
        return function(event) {
            var now = new Date().getTime();
//            var lastTouch = $(this).data('lastTouch') || now + 1; // the first time this will make delta a negativ number        
            var lastTouch = last || now + 1; // the first time this will make delta a negativ number        
            var delta = now - lastTouch;
            $(this).data('lastTouch', now);
            last = now;
            /* istanbul ignore if: untestable */
            if (delta > 0 && delta < delay) {   // a double tap or click
                handler(event);
                return false;
            }
            return false;
        };
    }

    return {
        doubleClick:    doubleClick,
        animationDuration: 250
    };
});
;
angular.module('hs').factory('HsConfigurable', function HsConfigurable(){ 
    "use strict";    
    return hs('HsConfigurable');
});
;
angular.module('hs').factory('HsObject', function HsObject(){ 
    "use strict";    
    return hs('HsObject');
});
