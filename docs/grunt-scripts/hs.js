/*! hs - v3.0.0 - 2016-08-19
* https://github.com/HelpfulScripts/hs
* Copyright (c) 2016 Helpful Scripts; Licensed  */
/**
 * @ngdoc overview
 * @name index
 * @description
 * 
 * HelpfulScripts foundational services
 * ====================================
 * Provides 
 * - {@link hsBase.hs hs}: a simple service registry and dependency injection 
 * - {@link hsBase.hsDeprecated hsDeprecated}: a simple deprecation message service 
 * - {@link hsBase.object hsBase.object}: a simple object inheritance model
 * 
 * 
 * - {@link hsBase.object.HsObject HsObject}: Helpful Scripts base object 
 * - {@link hsBase.object.HsConfigurable HsConfigurable}: A base object with configuration options
 * 
 * Dependencies
 * ------------
 * - {@link https://github.com/angular/angular.js AngularJS} 1.5.0 or higher; optional, for integration with angular modules
 * 
 * # Test Status 
 * Tested for Firefox
 * <iframe src='../../hs/docs/tests/all/src/index.html' 
 * 		style="border:none; "
 * 		width="130%" height="500px">
 * </iframe> 
 */

 
/**
 * @ngdoc overview
 * @name hsBase
 * @description
 * 
 * hsBase
 * =============
 * - The {@link hsBase.hs hs} function provides a simple service registry and dependency injection mechanism
 * - The {@link hsBase.object.HsObject HsObject} object provides a simple inheritance model.
 * - The {@link hsBase.object.HsConfigurable HsConfigurable} object provides a simple configuration mechanism.
 * - The {@link hsBase.object.HsPromise HsPromise} object provides a simple promise implementation 
 * to bridge until E6 is available
@example 
<example module="hs">
   <file name="script.js">
      angular.module("hs").controller("myCtrl", ["$scope",  function($scope) {      
         hs.register('MyObj', ['HsObject', function(HsObject) {	
            return function(value) {		
               var MyObj = HsObject('MyObj');
               MyObj.value = value;
               return MyObj;
            };
         }]);

         var MyObj = hs('MyObj');
         $scope.Cities = [MyObj('London'), MyObj('Paris')];
      }]);
   </file>
   <file name="index.html">
      <div ng-controller="myCtrl">
         {{Cities.length}} cities: <span ng-repeat="city in Cities">{{city.value}} </span>
      </div>
   </file>
</example>
*/


/**
 * @ngdoc overview
 * @name hsBase.object
 * @description
 * 
 * hsBase.object
 * ==
 * provides a simple object inheritance model. <br>
 * {@link hsBase.object.HsObject HsObject} is a base object that has a `type` and `name`, 
 * and includes a parent-child relationship model.<br>
 * {@link hsBase.object.HsConfigurable HsConfigurable} adds to that a configuration object 
 * that can hold key-value attributes.
@example 
<example module="hs">
   <file name="script.js">
      angular.module("hs").controller("myCtrl", ["$scope",  function($scope) {      
         hs.register('Person', ['HsObject', function(HsObject) {	
            return function(name, gender, parent) {		
               var Person = HsObject('Person', name, parent);
               Person._outerFunction = function() { return Person.getName();}
               Person.gender = gender;
               return Person;
            };
         }]);

         var Person = hs('Person');
         $scope.people = [];
         $scope.people.push(Person('John', 'male'));
         $scope.people.push(Person('Jane', 'female', $scope.people[0]));
      }]);
   </file>
   <file name="index.html">
      <div ng-controller="myCtrl">
      	<div ng-repeat="p in people">
         {{p()}} has {{p.children().length}} child{{$first?"":"ren"}}: 
             {{p.children()[0]()}} ({{p.children()[0].gender}})
        </div>
      </div>
   </file>
</example>
*/

if (typeof angular !== 'undefined') { angular.module('hs', []);}

	
;
/**
 * @ngdoc object
 * @name hsBase.hs
 * @description
 * Provides a registry for modules, as well as a simple injection mechanism that
 * has similar usage pattern to angularjs.
 * 
 * This allows modules to be used in environments other than the browser and eliminates 
 * dependencies on angular. 
 */


/* jshint -W079  */ // Redefinition of 'hs'.
var hs = hs || (function hs() {   // explicit global declaration
    "use strict";
    hs.registry = {};
    
    /** @ngdoc function
     * @name reset
     * @methodOf hsBase.hs
     * @description Resets the hs module to its initial state. All registered 
     * components will be removed. 
	 */ 
/*	
    	 function reset() {
    		 throw "hs.reset is deprecated";
 //   		 hs.registry = {};
    	 }
*/        	

    /** @ngdoc function
     * @name register
     * @methodOf hsBase.hs
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
        if (!hs.registry[name]) { hs.registry[name] = fn; }
//	        else { console.log('duplicate registration of ' + name); }
    }
    
    /** @ngdoc function
     * @name invoke
     * @methodOf hsBase.hs
     * @param {String} name name of the module
     * @description invokes registered modules and injects required parameters. 
     * The `invoke` function will not be called by its name, but rather, by calling 
     * the global `hs` function. Calling with or without `new` is equivalent.
     * Usage: <pre>
     * hs.register('MyExample', function() {...});
     * var MyInstance1 = hs('MyExample');  
     * var MyInstance2 = new hs('MyExample');
     * </pre>
     * @returns {*} the result of calling the constructor function.
     */
    function invoke(name) {
        if (hs.registry[name] === undefined) { throw 'unknown hs function \'' + name + '\''; }
        else {
            var def = hs.registry[name];
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
//        result.reset    = reset;
    result.register = register;    
    return result;
})();

;
/**
 * @ngdoc object
 * @name hsBase.object.HsConfigurable
 * @description inherits from {@link hsBase.object.HsObject HsObject} and provides for a basic configuration mechanism; 
 * @param {string} type the object type or category
 * @param {string} name the object name
 * @param {HsObject=} parent If specified, adds this HsObject as a child to the parent.
 */
if (typeof(angular) !== 'undefined') { angular.module('hs').factory('HsConfigurable', function HsConfigurable(){ return hs('HsConfigurable'); });}

hs.register('HsConfigurable', ['HsObject', function HsConfigurable(HsObject){ 
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
    
    
    return function(type, name, parent) {
        var obj = new HsObject(type, name, parent);

        /** @ngdoc function
         * @name cfg
         * @methodOf hsBase.object.HsConfigurable
         * @param {Object=} d specifies a JSON file or an Object literal containing key value pairs to add or replace in the cfg object.
         * @param {function=} cb a callback function to call when loading of the configuration is completed.
         * @returns {HsObject} the configuration {@link hsBase.object.HsObject HsObject} when called without parameter, otherwise the HsObject itself.
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
                        result += 'o.cfg().name = ' + o.cfg().name + '<br>';  
                        result += "o.cfg('name') = " + o.cfg('name') + '<br>';    
                        o.cfg().range = [-1, 1];
                        result += 'o.cfg().range[0] = ' + o.cfg().range[0] + '<br>'; 
                        result += "o.cfg('range')[1] = " + o.cfg('range')[1] + '<br>';
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
         * # JSON file configuration
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

        
//        obj.copyProperties = copyProperties;
        obj.cfg = cfg;
        obj.cfg.cfg = { type: obj.getType(), name: obj.getName() };
              
//        obj.cfgSave = _cfgSave(obj);
        
        return obj;
    };
}]);
;
/**
 * @ngdoc object
 * @name hsBase.hsDeprecated
 * @param {boolean=} printMessage (*default: true*) boolean to indicate whether or not to print the `message`.
 * @param {boolean=} printTrace (*default: true*) boolean to indicate whether or not to print the stack trace.
 * @description a utility component to mark deprecated pieces of code. 
 * The default implementation prints a stack trace to indicate where a deprecated call occured.
 ```
 var hsDeprected = hs('hsDeprecated'); // inject hsDeprecated
 var deprecated = new hsDeprecated();  // create new function with default reporting
 ...
 function foo() {
	 deprecated('please use "bar()" instead'); // generate console message
 }
 ```
 will produce a console message followed by a stack trace.
 */
if (typeof(angular) !== 'undefined') {angular.module('hs').factory('hsDeprecated', function hsDeprecated(){ return hs('hsDeprecated'); });}
 
hs.register('hsDeprecated', function hsDeprecated(){ 
    "use strict";    
        
	return function(printMessage, printTrace) {
		if (printMessage === undefined) { printMessage = true; }
		if (printTrace === undefined)   { printTrace = true; }
		
		return function deprecated(message) {
	        message = message || 'deprecated call';
	        if (printMessage) { console.log("Deprected: " + message); }
	        if (printTrace) {
		        var err = new Error(message);
		        console.log(err.stack);
	        }
		};
	};
});
	
	
;
/**
 * @ngdoc object
 * @name hsBase.object.HsObject
 * @description Base class for all HelpfulScripts objects. 
 * Can be used with or without new.
 * <pre>
 * var HsObject = hs('HsObject');
 * var Person = new HsObject('Person');
 * var parent = new Person('John');
 * var child  = HsObject('Person', 'Jane', parent);
 * </pre>
 * Objects derived from HsObject can be called as a function.
 * Override {@link hsBase.object.HsObject#methods__outerFunction _outerFunction} to customize behavior. 
 * See {@link hsBase.object hsBase.object overview} for an example.
 * @param {string} type the object type or category
 * @param {string=} name the object name
 * @param {HsObject=} parent an optional parent object
 */
if (typeof(angular) !== 'undefined') {angular.module('hs').factory('HsObject', function HsObject(){ return hs('HsObject'); });}
 
hs.register('HsObject', function HsObject(){ 
    "use strict";    
        
	return function(type, name, parent) {
        var gName = (typeof name === 'string') ? name : 'undefined';
        var gChildren = {all:[]};
        
        var obj = function constructor() { return obj._outerFunction(arguments); };
        /** @ngdoc function
         * @name _outerFunction
         * @methodOf hsBase.object.HsObject
         * @param {[any]} args any arguments, passed in as an array
         * @description implements the function that is called directly on an HsObject.
         * See {@link hsBase.object hsBase.object overview} for an example.
         */		
        obj._outerFunction = function _outerFunction(args) { 
        	args = args;
        	throw "HsObject internal default function. Override '_outerFunction' to implement"; 
        };
       

        /** @ngdoc function
         * @name children
         * @methodOf hsBase.object.HsObject
         * @param {HsObject|String=} child object or type string.<pre>
         * HsObject: `child` will be added as a child to this parent and the child returned.
         * string: returns an array of all children of the specified type.
         * Unspecified: returns an array of all current children 
         * </pre>
         * @param {Boolean=} remove if specified and true-ish, the specified *child* object will be removed 
         * from the list of children. If *child* is a type string, *remove* will have no effect.
         * @description 
         * - #.children() retrieves the list of children, 
         * - #.children(<HsObject>child) adds a child to this parent and returns the child.
         * - #.children(<HsObject>child, true) removes a child from the parent and returns the child.
         * - #.children(<String>type) returns all children of the specified type.
         * @returns {HsObject | [HsObject]} the child or the list of children; 
         */		
        obj.children = function children(child, remove) { 
            if (!child) {                           // no parameter specified
                return gChildren.all;               //   --> return list of children
            } else if (typeof child === 'string') { // type string specified
                return gChildren[child] || [];      //   --> return children of type
            } else {                                // child object specified
                var t = child.getType();
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
        };
        
         
        /** @ngdoc function
         * @name getName
         * @methodOf hsBase.object.HsObject
         * @description gets the name of the object.
         * @returns {string} the name of the object
         */
         obj.getName = function getName() { return gName; };
         
        /** @ngdoc function
         * @name setName
         * @methodOf hsBase.object.HsObject
         * @param {string} newName sets a new name for the object.
         * @description sets the name of the object.
         * @returns {HsObject} the object itself for chaining.
         */
         obj.setName = function setName(newName) { gName = newName;  return obj; };
         
        /** @ngdoc function
         * @name getType
         * @methodOf hsBase.object.HsObject
         * @description sets or gets the name of the object.
         * @returns {string | HsObject} the name of the object if called without paramenter, 
         * or the object itself for chaining.
         */
        obj.getType	= function getType() { return type || "undefined"; };
                   
        
        if (parent) {   // if parent is specified, add obj to its children
            obj.parent = parent;
        	if (typeof parent.getType !== 'function') {
        		throw new Error('parent is not an HsObject');
        	}
            parent.children(obj);
        }

        return obj;
    };
});
;
/**
 * @ngdoc object
 * @name hsBase.object.HsPromise
 * @description implements a Promise mechanism following the template published at https://www.promisejs.org/ 
 * @example
<example module="hs">
   <file name="index.html">
      <div ng-controller="myPromiseCtrl">
         <div>{{result}}</div>
      </div>
   </file>
   <file name="script.js">
angular.module('hs').controller('myPromiseCtrl', function myCtrl($scope) {
   var HsPromise = hs('HsPromise');
    
   function resolver(onSuccess, onFailure) {
      // Create Object
      var result = "This was successful";
      if (result) { 
         onSuccess(result);
      } else {	
         onFailure('error creating HsObject');
      }
   }
    
   function success(data) { $scope.result = data; }
   function error(err) {}
    
   var promise = new HsPromise(resolver).then(success, error);
});
   </file>
</example>
 */
if (typeof(angular) !== 'undefined') { angular.module('hs').factory('HsPromise', function HsPromise(){ return hs('HsPromise'); });}

hs.register('HsPromise', ['HsObject', function HsPromise(HsObject){ 
    "use strict";    
	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	
    function Promise(resolverFn) {    	
    	var state    = PENDING;	// store state which can be PENDING, FULFILLED or REJECTED
    	var value    = null;	// store value once FULFILLED or REJECTED
    	var handlers = [];		// store sucess & failure handlers
    	
    	/**
    	 * @param {Object} handler the handler to call. 
    	 * @description if the promise is PENDING, the handler is registered for a callback, which will be executed once the promise is resolved.
    	 * Otherwise it is executed immediately by calling either the handers' `onFulfilled` or `onRejected` method.
    	 */
    	function handle(handler) {
    		if (state === PENDING) { handlers.push(handler); }
    		else {
    			if (state === FULFILLED && typeof handler.onFulfilled === 'function') {
    				handler.onFulfilled(value);
    			}
    			if (state === REJECTED && typeof handler.onRejected === 'function') {
    				handler.onRejected(value);
    			}
    		}
    	}
				
    	// executes a transition by calling `handle` for each registered handler
    	function transition(newState, newValue) {
    		state = newState;
    		value = newValue;
    	    handlers.forEach(handle);
    	    handlers = null;
    	}

    	// state transition PENDING -> FULFILLED
    	function fulfill(result) { transition(FULFILLED, result); }
	
    	//state transition PENDING -> REJECTED
    	function reject(error) 	 { transition(REJECTED, error); }

		/**
		 * @param {Promise|Any} value
		 * @return {Function|Null}
		 * @description Check if a value is a Promise and, if it is,
		 * return the `then` method of that promise.
		 */
		function getThen(value) {
			 var t = typeof value;
			 if (value && (t === 'object' || t === 'function')) {
				 if (typeof value.then === 'function') { return value.then;  }
			 }
			 return null;
		}
	  
		/**
         * @name doResolve
		 * @param {Function} resolverFn A resolver function (typically as passed into the 
		 * constructor or returned by then()) that may not be trusted.
		 * @param {Function} onFulfilled called when Promise has been fulfilled
		 * @param {Function} onRejected called when Promise has been rejected
		 * @description tries to resolves the promise by calling the `resolverFn` 
		 * with two internal function arguments (for failure and success). 
		 * These functions relay calls to `onFulfilled` and `onRejected` and ensure that either of them is called only once.
		 * If the try fails, `onRejected` is called.
		 *
		 * Makes no guarantees about asynchrony.
		 */
		function doResolve(resolverFn, onFulfilled, onRejected) {
			 var done = false;
			 try {
				 resolverFn(
					 function fulfilled(value) {
						 if (done) { return; }
						 done = true;
						 onFulfilled(value);
					 }, 
					 function rejected(reason) {
						 if (done) { return; }
						 done = true;
						 onRejected(reason);
					 });
			 } catch (ex) {
				 if (done) { return; }
				 done = true;
				 onRejected(ex);
			 }
		 }

		/**
		 * @param {Promise|Any} result
		 * @description high-level transition. If `result` is a Promise, then 
		 * `doResolve` is called with the internal 
		 */
    	function resolve(result) {
    		try {
    			var then = getThen(result);
    			if (then) { // result is a Promise
    				doResolve(then.bind(result), resolve, reject);
    				return;
    			}
   			fulfill(result); // explicit transition to FULFILLED
    		} catch (e) {
    			reject(e);		 // explicit transition to REJECTED
    		}
    	}
    	
		 var obj = new HsObject('HsPromise');        

		 /** @ngdoc function
          * @name done
          * @methodOf hsBase.object.HsPromise
		  * @param {Function} onFulfilled called once Promise has been fulfilled
		  * @param {Function} onRejected called once Promise has been rejected
		  * @description registers both handler functions for execution once the Promise has been fulfilled.
		  * The function always completes immediately and returns nothing. 
		  * The appropriate handler function is always called asynchronously.
		  */
		  obj.done = function done(onFulfilled, onRejected) {
			 // ensure we are always asynchronous
			 setTimeout(function timeout() {
				 handle({
					 onFulfilled: onFulfilled,
					 onRejected: onRejected
				 });
			 }, 0);
		 };
    	
		 /** @ngdoc function
          * @name then
          * @methodOf hsBase.object.HsPromise
		  * @param {Function=} onFulfilled called when Promise has been fulfilled
		  * @param {Function=} onRejected called when Promise has been rejected
		  * @description provides handlers to call upon fulfillment or rejection of the promise.
		  * `then()` works similarly to `done()` but in addition returns a new 
		  * `promise` on the two provided functions. This allows for convenient chaining
		  * of promises.<pre>
		  * readFile(url).then(JSON.parse).then(processJSON);
		  * </pre>
		  * 
		  */
		 obj.then = function (onFulfilled, onRejected) {
    		var self = obj;
    		return new Promise(function _resolveFn(_resolve, _reject) {
    			return self.done(
    				function success(result) {
	    				if (typeof onFulfilled === 'function') {
	    					try { return _resolve(onFulfilled(result)); }
	    					catch (err) { return _reject(err); }
	    				} else { 
	    					return _resolve(result); 
	    				}
    				}, 
    				function failure(error) {	
	    				if (typeof onRejected === 'function') {
	    					try { return _resolve(onRejected(error)); }
	    					catch (ex) { return _reject(ex); }
	    				} else {
	    					return _reject(error);
	    				}
    				}
    			);
    		});
    	};
    	
    	obj.catch = function(onRejected) { return obj.then(null, onRejected); };

    	doResolve(resolverFn, resolve, reject);
		return obj;
    }    
    return Promise;
}]);

//# sourceMappingURL=hs.js.map