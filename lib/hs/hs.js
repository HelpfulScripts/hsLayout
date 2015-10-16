/*! hs - v0.9.5 - 2015-09-27
* https://github.com/HelpfulScripts/hs
* Copyright (c) 2015 Helpful Scripts; Licensed  */
/**
 * @ngdoc object
 * @name hs
 * @description
 * Provides a registry for modules. 
 * Register new modules by calling 
 * <pre>
 * hs.register(<name>, <constructor>);  // register new modules
 * hs(<name>);                          // access module
 * new hs(<name>);                      // construct new instance of module
 * </pre>
 */

//if (window === undefined || window.hs === undefined) {
if (typeof hs === "undefined") {
    hs = (function hs() {   // explicit global declaration
        "use strict";
        var registry = {};
        
        function register(name, fn) {
//            if (registry[name] !== undefined) { console.log('duplicate definition of hs function \'' + name + '\''); }
            if( Object.prototype.toString.call( fn ) !== '[object Array]' ) { fn = [fn]; }
            registry[name] = fn; 
        }
        
        function invoke(name) {
            if (registry[name] === undefined) { console.log('unknown hs function \'' + name + '\''); }
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
hs.register('HsObject', function HsObject(){ 
    "use strict";    
    
    function _children(obj) {
        /** @ngdoc function
         * @name children
         * @methodOf hs.object.HsObject
         * @param {HsObject|String=} child *String*: the parameter specifies an HsObject type and
         * the function returns an array of children of this type.
         * <br>*HsObject*: `child` will be added as a child to this parent and the child 
         * returned.
         * <br>*Unspecified*: the list of current children will be returned as an Array. 
         * @param {Boolean=} remove if specified and true-ish, the specified *child* object will be removed 
         * from the list of children. If *child* is a type string, *remove* will have no effect.
         * @description retrieves the list of children, or sets or removes a specific child to this parent.
         * In addition to maintaining an array of the children to this parent, this function also
         * generates sub-arrays of children for each Object type.
         * @returns {object} the child if a child HsObject was specified; 
         * <br>or an array of children of a certain type, if a type string was specified;
         * <br>or the array of children if no parameter was specified.
         */
        return function children(child, remove) { 
            var list = obj.children.list;
            var type = obj.type();
            if (!child) {                           // no parameter specified
                return list;                        //   --> return list of children
            } else if (typeof child === 'string') { // type string specified
                return list[type];                  //   --> return children of type
            } else {                                // child object specified
                var i = list.indexOf(child); 
                if (i < 0) {                        // if not in array yet
                    list.push(child);           // --> add to array
                    var t = child.type();
                    if (!t) { console.log('no object type set'); }
                    else {
                        var cat = list[t];
                        if (!cat) { cat = list[t] = []; }
                        cat.push(child);
                        }
                } else {                            // if in array and 'remove' is true
                    if (remove) { list.splice(i, 1); }  // --> remove child
                }
                return child;                       //   --> return child
            } 
        };
    }
    
    return function(type, name, parent) {
        var obj = {};
        var gName = name || "undefined";
        
        obj.type = function() { return type || "undefined"; };
        obj.name = function(newName) { 
            if (!newName) { return gName; }
            else {
                gName = gName;
                return obj;
            }
            
        };
        
        obj.children = _children(obj);
        obj.children.list = [];
        
        if (parent) {   // if parent is specified, add obj to its children
            parent.children(obj);
        }
        
        return obj;
    };
});
