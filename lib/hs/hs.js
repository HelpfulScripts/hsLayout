/*! hs - v1.0.0 - 2015-11-07
* https://github.com/HelpfulScripts/hs
* Copyright (c) 2015 Helpful Scripts; Licensed  */
/**
 * @ngdoc object
 * @name hs.hs
 * @description
 * Provides a registry for modules, as well as a simpe injection mechanism that
 * has similar usage pattern to angularjs.
 * 
 * This allows modules to be used in environments other than the browser and eliminates 
 * dependencies on angular. 
 */

//if (window === undefined || window.hs === undefined) {
/* istanbul ignore else */
if (typeof hs === "undefined") {
    hs = (function hs() {   // explicit global declaration
        "use strict";
        var registry = {};
        
        /** @ngdoc function
         * @name register
         * @methodOf hs.hs
         * @param {String} name the module's name by which it can be used later.
         * @param {function | Array} fn constructor function, or an array containing 
         * previously registered modules that need to be injected into the constructor function, along with the 
         * constructor function as last element of the array.
         * @description Registers new modules in an angular-style fashion. Usage: 
         * <pre>
         * hs.register('MyModule', function() {...});  
         *  - or - 
         * hs.register('MyModule', ['MyOtherModule', function(MyOtherModule) {
         *    ...
         * }]); 
         * </pre>
         */
        function register(name, fn) {
            if( Object.prototype.toString.call( fn ) !== '[object Array]' ) { fn = [fn]; }
            if (typeof fn[fn.length-1] !== 'function') { throw "invalid function parameter in call to hs.register"; }
            registry[name] = fn; 
        }
        
        /** @ngdoc function
         * @name invoke
         * @methodOf hs.hs
         * @param {String} name name of the module
         * @description invokes registered modules and injects required parameters. 
         * The `invoke` function will not be called by its name, but rather, by calling 
         * the global `hs` function. Calling with or without `new` is equivalent.
         * Usage: <pre>
         * var MyExample = hs('MyExample');  
         * var MyInstance = new hs('MyExample');
         * </pre>
         * @returns {*} the result of calling the constructor function.
         */
        function invoke(name) {
            if (registry[name] === undefined) { throw 'unknown hs function \'' + name + '\''; }
            else {
                var def = registry[name];
                var fn = def[def.length-1];
                var params = [];
                for (var i=0; i<def.length-1; i++) {
                    params.push(invoke(def[i]));
                }
                var result = fn.apply(null, params);
                return result;
            } 
        }
        
        var result = invoke;
        result.register = register;    
        return result;
    })();
};
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
if (typeof(angular) !== 'undefined') { angular.module('hs').factory('HsConfigurable', function HsConfigurable(){ return hs('HsConfigurable'); });}

hs.register('HsConfigurable', ['HsObject', function HsConfigurable(HsObject){ 
    "use strict";    
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
    
    function readJSONCfg(fname, toCfg, cb) {
        if (cb) { cb(fname, toCfg); }
    }
    

/*
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
 */
    
    return function(type, name, parent) {
         /** @ngdoc function
         * @name cfg
         * @methodOf hs.object.HsConfigurable
         * @param {Object=} d specifies a JSON file or an Object literal containing key value pairs to add or replace in the cfg object.
         * @param {function=} cb a callback function to call when loading of the configuration is completed.
         * @returns {HsObject} the configuration {@link hs.object.HsObject HsObject} when called without parameter, otherwise the HsObject itself.
         * This allows chaining of method calls during setup.
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
         */
        function cfg(d, cb) {
            var internalCfg = obj.cfg.cfg;
            if (!d) {                   // no parameter --> return cfg object
                return internalCfg; 
            } else {                    
                if (typeof d === 'string') {        // d is a string
                    var j = d.indexOf('.json');
                    if ((j>0) && (j=== d.length-5)) { // if d ends with '.json'
                        readJSONCfg(d, internalCfg, cb);     //   --> load JSON file
                        return obj;
                    } else {                                 // else d is a parameter name
                        return internalCfg[d];               //   --> return parameter value
                     }
                } else {                // d is an object literal
                    copyCfg(d, internalCfg);                 // --> copy cfg object
                }

                if (cb) { cb(); } 
                return obj;
            }
        }

        var obj = new HsObject(type, name, parent);
        
//        obj.copyProperties = copyProperties;
        obj.cfg = cfg;
        obj.cfg.cfg = { type: obj.type(), name: obj.name() };
              
//        obj.cfgSave = _cfgSave(obj);
        
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
 * var obj2 = new HsObject('<HsDerivedObject>');    // identical result
 * </pre>
 * @param {string} type the object type or category
 * @param {string=} name the object name
 * @param {HsObject=} parent If specified, adds this HsObject as a child to the parent.
 */
if (typeof(angular) !== 'undefined') {angular.module('hs').factory('HsObject', function HsObject(){ return hs('HsObject'); });}
 
hs.register('HsObject', function HsObject(){ 
    "use strict";    
        
	return function(type, name, parent) {
       /** @ngdoc function
         * @name children
         * @methodOf hs.object.HsObject
         * @param {HsObject|String=} child object or type string.<pre>
         * HsObject: `child` will be added as a child to this parent and the child returned.
         * string: returns an array of all children of the specified type.
         * Unspecified: returns an array of all current children 
         * </pre>
         * @param {Boolean=} remove if specified and true-ish, the specified *child* object will be removed 
         * from the list of children. If *child* is a type string, *remove* will have no effect.
         * @description retrieves the list of children, or sets or removes a specific child to this parent.
         * In addition to maintaining an array of the children to this parent, this function also
         * generates sub-arrays of children for each Object type.
         * @returns {object} the child if a child HsObject was specified; 
         * <br>or an array of children of a certain type, if a type string was specified;
         * <br>or the array of children if no parameter was specified.
         */
         function children(child, remove) { 
            if (!child) {                           // no parameter specified
                return gChildren.all;               //   --> return list of children
            } else if (typeof child === 'string') { // type string specified
                return gChildren[child] || [];      //   --> return children of type
            } else {                                // child object specified
                var t = child.type();
                var cat = gChildren[t];
                if (!cat) { cat = gChildren[t] = []; }
                var i = gChildren.all.indexOf(child); 
                if (i < 0) {                        // if not in array yet
                    cat.push(child);
                    gChildren.all.push(child);      // --> add to array
                } else if (remove) { 				// if in array and remove is true
                    gChildren.all.splice(i, 1);     // --> remove child
                    i = cat.indexOf(child);
                    if (i>=0) { cat.splice(i, 1); }
                }
                return child;                       //   --> return child
            } 
        }
         
        /** @ngdoc function
         * @name name
         * @methodOf hs.object.HsObject
         * @param {string=} newName if provided, sets a new name for the object.
         * @description sets or gets the name of the object.
         * @returns {string | HsObject} the name of the object if called without paramenter, 
         * or the object itself for chaining.
         */
        function _name(newName) { 
            if (!newName) { 
                return gName; 
            } else {
                gName = newName;
                return obj;
            }         
        }
         
        /** @ngdoc function
         * @name type
         * @methodOf hs.object.HsObject
         * @description sets or gets the name of the object.
         * @returns {string | HsObject} the name of the object if called without paramenter, 
         * or the object itself for chaining.
         */
        function _type() { return type || "undefined"; }
           
        var gName = 'undefined';
        var gChildren = {all:[]};

        var obj = {};
        if (name && (typeof name === 'string')) { gName = name; }
        
        obj.type 	 = _type;
        obj.name 	 = _name;
        obj.children = children;
                
        if (parent) {   // if parent is specified, add obj to its children
            parent.children(obj);
        }
        
        return obj;
    };
});
