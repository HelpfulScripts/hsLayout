/*! hs - v0.9.0 - 2015-04-18
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
 * @description provides for a basic configuration mechanism.
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
    
    return function(type) {
        var obj = new HsObject(type);
        var internalCfg = { type: type };
        
/**
 * @ngdoc function
 * @name cfg
 * @methodOf hs.object.HsConfigurable
 * @description Configuration function that doubles as a configuration object.
 * This object consists of a list of key/value pairs in object literal notation:
 * <pre>    { key1: value1, key2: value2, ...} </pre>
 * 
 * # Object Literal configuration
 * Calling cfg(d) with an *object literal* adds or replaces the provided keys in the configuration object.
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
        obj.cfg = function cfg(d, cb) {
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
        
/**
 * @ngdoc function
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
                o.cfgSave('data/savedCfg.json');
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
        obj.cfgSave = function cfgSave(file) {
            var result = JSON.stringify(internalCfg);
            $http.post(file, result);
        };
        
        return obj;
    };
}]);
;
/**
 * @ngdoc object
 * @name hs.object.HsObject
 * @description Base class for all HelpfulScripts objects. 
 * Establishes an array of children to allow for a tree structure of descendents; 
 * Can be used with or without new.
 * <pre>
 * var obj1 = HsObject();
 * var obj2 = new HsObject();	// identical result
 * </pre>
 */
angular.module('hs').factory('HsObject', function HsObject(){ 
    "use strict";    
    
	return function(type) {
		var obj = {};
		var children = [];
		
		obj.getType = function getType() { return type; };
		
		/** @ngdoc function
		 * @name children
         * @methodOf hs.object.HsObject
		 * @param {HsObject|String=} child *String*: the parameter specifies an HsObject type and
		 * the function returns an array of children of this type.
		 * <br>*HsObject*: `child` will be added as a child to this parent and the parent 
		 * returned.
		 * <br>*Unspecified*: the list of current children will be returned as an Array. 
		 * @param {Boolean=} remove if specified and true-ish, the specified *child* object will be removed 
		 * from the list of children. If *child* is a type string, *remove* will have no effect.
		 * @description retrieves the list of children, or sets or removes a specific child to this parent.
		 * In addition to maintaining an array of the children to this parent, this function also
		 * generates sub-arrays of children for each Object type.
		 * @returns {object} this parent if a child HsObject was specified, to allow for chained calls; 
		 * <br>or an array of children of a certain type, if s type string was specified;
		 * <br>or the array of children if no parameter was specified.
		 */
        obj.children = function(child, remove) { 
            if (!child) {                           // no parameter specified
                return children; 
            } else if (typeof child === 'string') { // type string specified
                return children[type];
            } else {                                // child object specified
                var i = children.indexOf(child); 
                if (i < 0) {                        // if not in array yet
                    children.push(child);           // --> add to array
                    var t = child.getType();
                    if (!t) { console.log('no object type set'); }
                    else {
                        var cat = children[t];
                        if (!cat) { cat = children[t] = []; }
                        cat.push(child);
                        }
                } else {                            // if in array and 'remove' is true
                    if (remove) { children.splice(i, 1); }  // --> remove child
                }
                return obj;
            } 
        };
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
        doubleClick:    doubleClick
    };
});
