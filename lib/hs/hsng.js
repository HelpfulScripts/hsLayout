/*! hs - v0.9.5 - 2015-09-27
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
angular.module('hs').factory('HsObject', function HsObject(){ 
    "use strict";    
    return hs('HsObject');
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
        doubleClick:    doubleClick,
        animationDuration: 250
    };
});
