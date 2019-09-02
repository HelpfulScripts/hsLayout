this["hsLayout"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bin/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/api/mount-redraw.js":
/*!****************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/api/mount-redraw.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/vnode.js")

module.exports = function(render, schedule, console) {
	var subscriptions = []
	var rendering = false
	var pending = false

	function sync() {
		if (rendering) throw new Error("Nested m.redraw.sync() call")
		rendering = true
		for (var i = 0; i < subscriptions.length; i += 2) {
			try { render(subscriptions[i], Vnode(subscriptions[i + 1]), redraw) }
			catch (e) { console.error(e) }
		}
		rendering = false
	}

	function redraw() {
		if (!pending) {
			pending = true
			schedule(function() {
				pending = false
				sync()
			})
		}
	}

	redraw.sync = sync

	function mount(root, component) {
		if (component != null && component.view == null && typeof component !== "function") {
			throw new TypeError("m.mount(element, component) expects a component, not a vnode")
		}

		var index = subscriptions.indexOf(root)
		if (index >= 0) {
			subscriptions.splice(index, 2)
			render(root, [], redraw)
		}

		if (component != null) {
			subscriptions.push(root, component)
			render(root, Vnode(component), redraw)
		}
	}

	return {mount: mount, redraw: redraw}
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/api/router.js":
/*!**********************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/api/router.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

var Vnode = __webpack_require__(/*! ../render/vnode */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/vnode.js")
var m = __webpack_require__(/*! ../render/hyperscript */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/hyperscript.js")
var Promise = __webpack_require__(/*! ../promise/promise */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/promise/promise.js")

var buildPathname = __webpack_require__(/*! ../pathname/build */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/pathname/build.js")
var parsePathname = __webpack_require__(/*! ../pathname/parse */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/pathname/parse.js")
var compileTemplate = __webpack_require__(/*! ../pathname/compileTemplate */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/pathname/compileTemplate.js")
var assign = __webpack_require__(/*! ../pathname/assign */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/pathname/assign.js")

var sentinel = {}

module.exports = function($window, mountRedraw) {
	var fireAsync

	function setPath(path, data, options) {
		path = buildPathname(path, data)
		if (fireAsync != null) {
			fireAsync()
			var state = options ? options.state : null
			var title = options ? options.title : null
			if (options && options.replace) $window.history.replaceState(state, title, route.prefix + path)
			else $window.history.pushState(state, title, route.prefix + path)
		}
		else {
			$window.location.href = route.prefix + path
		}
	}

	var currentResolver = sentinel, component, attrs, currentPath, lastUpdate

	var SKIP = route.SKIP = {}

	function route(root, defaultRoute, routes) {
		if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
		// 0 = start
		// 1 = init
		// 2 = ready
		var state = 0

		var compiled = Object.keys(routes).map(function(route) {
			if (route[0] !== "/") throw new SyntaxError("Routes must start with a `/`")
			if ((/:([^\/\.-]+)(\.{3})?:/).test(route)) {
				throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`")
			}
			return {
				route: route,
				component: routes[route],
				check: compileTemplate(route),
			}
		})
		var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
		var p = Promise.resolve()
		var scheduled = false
		var onremove

		fireAsync = null

		if (defaultRoute != null) {
			var defaultData = parsePathname(defaultRoute)

			if (!compiled.some(function (i) { return i.check(defaultData) })) {
				throw new ReferenceError("Default route doesn't match any known routes")
			}
		}

		function resolveRoute() {
			scheduled = false
			// Consider the pathname holistically. The prefix might even be invalid,
			// but that's not our problem.
			var prefix = $window.location.hash
			if (route.prefix[0] !== "#") {
				prefix = $window.location.search + prefix
				if (route.prefix[0] !== "?") {
					prefix = $window.location.pathname + prefix
					if (prefix[0] !== "/") prefix = "/" + prefix
				}
			}
			// This seemingly useless `.concat()` speeds up the tests quite a bit,
			// since the representation is consistently a relatively poorly
			// optimized cons string.
			var path = prefix.concat()
				.replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
				.slice(route.prefix.length)
			var data = parsePathname(path)

			assign(data.params, $window.history.state)

			function fail() {
				if (path === defaultRoute) throw new Error("Could not resolve default route " + defaultRoute)
				setPath(defaultRoute, null, {replace: true})
			}

			loop(0)
			function loop(i) {
				// 0 = init
				// 1 = scheduled
				// 2 = done
				for (; i < compiled.length; i++) {
					if (compiled[i].check(data)) {
						var payload = compiled[i].component
						var matchedRoute = compiled[i].route
						var localComp = payload
						var update = lastUpdate = function(comp) {
							if (update !== lastUpdate) return
							if (comp === SKIP) return loop(i + 1)
							component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
							attrs = data.params, currentPath = path, lastUpdate = null
							currentResolver = payload.render ? payload : null
							if (state === 2) mountRedraw.redraw()
							else {
								state = 2
								mountRedraw.redraw.sync()
							}
						}
						// There's no understating how much I *wish* I could
						// use `async`/`await` here...
						if (payload.view || typeof payload === "function") {
							payload = {}
							update(localComp)
						}
						else if (payload.onmatch) {
							p.then(function () {
								return payload.onmatch(data.params, path, matchedRoute)
							}).then(update, fail)
						}
						else update("div")
						return
					}
				}
				fail()
			}
		}

		// Set it unconditionally so `m.route.set` and `m.route.Link` both work,
		// even if neither `pushState` nor `hashchange` are supported. It's
		// cleared if `hashchange` is used, since that makes it automatically
		// async.
		fireAsync = function() {
			if (!scheduled) {
				scheduled = true
				callAsync(resolveRoute)
			}
		}

		if (typeof $window.history.pushState === "function") {
			onremove = function() {
				$window.removeEventListener("popstate", fireAsync, false)
			}
			$window.addEventListener("popstate", fireAsync, false)
		} else if (route.prefix[0] === "#") {
			fireAsync = null
			onremove = function() {
				$window.removeEventListener("hashchange", resolveRoute, false)
			}
			$window.addEventListener("hashchange", resolveRoute, false)
		}

		return mountRedraw.mount(root, {
			onbeforeupdate: function() {
				state = state ? 2 : 1
				return !(!state || sentinel === currentResolver)
			},
			oncreate: resolveRoute,
			onremove: onremove,
			view: function() {
				if (!state || sentinel === currentResolver) return
				// Wrap in a fragment to preserve existing key semantics
				var vnode = [Vnode(component, attrs.key, attrs)]
				if (currentResolver) vnode = currentResolver.render(vnode[0])
				return vnode
			},
		})
	}
	route.set = function(path, data, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null
		setPath(path, data, options)
	}
	route.get = function() {return currentPath}
	route.prefix = "#!"
	route.Link = {
		view: function(vnode) {
			var options = vnode.attrs.options
			// Remove these so they don't get overwritten
			var attrs = {}, onclick, href
			assign(attrs, vnode.attrs)
			// The first two are internal, but the rest are magic attributes
			// that need censored to not screw up rendering.
			attrs.selector = attrs.options = attrs.key = attrs.oninit =
			attrs.oncreate = attrs.onbeforeupdate = attrs.onupdate =
			attrs.onbeforeremove = attrs.onremove = null

			// Do this now so we can get the most current `href` and `disabled`.
			// Those attributes may also be specified in the selector, and we
			// should honor that.
			var child = m(vnode.attrs.selector || "a", attrs, vnode.children)

			// Let's provide a *right* way to disable a route link, rather than
			// letting people screw up accessibility on accident.
			//
			// The attribute is coerced so users don't get surprised over
			// `disabled: 0` resulting in a button that's somehow routable
			// despite being visibly disabled.
			if (child.attrs.disabled = Boolean(child.attrs.disabled)) {
				child.attrs.href = null
				child.attrs["aria-disabled"] = "true"
				// If you *really* do want to do this on a disabled link, use
				// an `oncreate` hook to add it.
				child.attrs.onclick = null
			} else {
				onclick = child.attrs.onclick
				href = child.attrs.href
				child.attrs.href = route.prefix + href
				child.attrs.onclick = function(e) {
					var result
					if (typeof onclick === "function") {
						result = onclick.call(e.currentTarget, e)
					} else if (onclick == null || typeof onclick !== "object") {
						// do nothing
					} else if (typeof onclick.handleEvent === "function") {
						onclick.handleEvent(e)
					}

					// Adapted from React Router's implementation:
					// https://github.com/ReactTraining/react-router/blob/520a0acd48ae1b066eb0b07d6d4d1790a1d02482/packages/react-router-dom/modules/Link.js
					//
					// Try to be flexible and intuitive in how we handle links.
					// Fun fact: links aren't as obvious to get right as you
					// would expect. There's a lot more valid ways to click a
					// link than this, and one might want to not simply click a
					// link, but right click or command-click it to copy the
					// link target, etc. Nope, this isn't just for blind people.
					if (
						// Skip if `onclick` prevented default
						result !== false && !e.defaultPrevented &&
						// Ignore everything but left clicks
						(e.button === 0 || e.which === 0 || e.which === 1) &&
						// Let the browser handle `target=_blank`, etc.
						(!e.currentTarget.target || e.currentTarget.target === "_self") &&
						// No modifier keys
						!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey
					) {
						e.preventDefault()
						e.redraw = false
						route.set(href, null, options)
					}
				}
			}
			return child
		},
	}
	route.param = function(key) {
		return attrs && key != null ? attrs[key] : attrs
	}

	return route
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/node_modules/timers-browserify/main.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/hyperscript.js":
/*!***********************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/hyperscript.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hyperscript = __webpack_require__(/*! ./render/hyperscript */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/hyperscript.js")

hyperscript.trust = __webpack_require__(/*! ./render/trust */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/trust.js")
hyperscript.fragment = __webpack_require__(/*! ./render/fragment */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/fragment.js")

module.exports = hyperscript


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/index.js":
/*!*****************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hyperscript = __webpack_require__(/*! ./hyperscript */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/hyperscript.js")
var request = __webpack_require__(/*! ./request */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/request.js")
var mountRedraw = __webpack_require__(/*! ./mount-redraw */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/mount-redraw.js")

var m = function m() { return hyperscript.apply(this, arguments) }
m.m = hyperscript
m.trust = hyperscript.trust
m.fragment = hyperscript.fragment
m.mount = mountRedraw.mount
m.route = __webpack_require__(/*! ./route */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/route.js")
m.render = __webpack_require__(/*! ./render */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render.js")
m.redraw = mountRedraw.redraw
m.request = request.request
m.jsonp = request.jsonp
m.parseQueryString = __webpack_require__(/*! ./querystring/parse */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/querystring/parse.js")
m.buildQueryString = __webpack_require__(/*! ./querystring/build */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/querystring/build.js")
m.parsePathname = __webpack_require__(/*! ./pathname/parse */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/pathname/parse.js")
m.buildPathname = __webpack_require__(/*! ./pathname/build */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/pathname/build.js")
m.vnode = __webpack_require__(/*! ./render/vnode */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/vnode.js")
m.PromisePolyfill = __webpack_require__(/*! ./promise/polyfill */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/promise/polyfill.js")

module.exports = m


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/mount-redraw.js":
/*!************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/mount-redraw.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var render = __webpack_require__(/*! ./render */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render.js")

module.exports = __webpack_require__(/*! ./api/mount-redraw */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/api/mount-redraw.js")(render, requestAnimationFrame, console)


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/pathname/assign.js":
/*!***************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/pathname/assign.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Object.assign || function(target, source) {
	if(source) Object.keys(source).forEach(function(key) { target[key] = source[key] })
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/pathname/build.js":
/*!**************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/pathname/build.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var buildQueryString = __webpack_require__(/*! ../querystring/build */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/querystring/build.js")
var assign = __webpack_require__(/*! ./assign */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/pathname/assign.js")

// Returns `path` from `template` + `params`
module.exports = function(template, params) {
	if ((/:([^\/\.-]+)(\.{3})?:/).test(template)) {
		throw new SyntaxError("Template parameter names *must* be separated")
	}
	if (params == null) return template
	var queryIndex = template.indexOf("?")
	var hashIndex = template.indexOf("#")
	var queryEnd = hashIndex < 0 ? template.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = template.slice(0, pathEnd)
	var query = {}

	assign(query, params)

	var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m, key, variadic) {
		delete query[key]
		// If no such parameter exists, don't interpolate it.
		if (params[key] == null) return m
		// Escape normal parameters, but not variadic ones.
		return variadic ? params[key] : encodeURIComponent(String(params[key]))
	})

	// In case the template substitution adds new query/hash parameters.
	var newQueryIndex = resolved.indexOf("?")
	var newHashIndex = resolved.indexOf("#")
	var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex
	var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex
	var result = resolved.slice(0, newPathEnd)

	if (queryIndex >= 0) result += template.slice(queryIndex, queryEnd)
	if (newQueryIndex >= 0) result += (queryIndex < 0 ? "?" : "&") + resolved.slice(newQueryIndex, newQueryEnd)
	var querystring = buildQueryString(query)
	if (querystring) result += (queryIndex < 0 && newQueryIndex < 0 ? "?" : "&") + querystring
	if (hashIndex >= 0) result += template.slice(hashIndex)
	if (newHashIndex >= 0) result += (hashIndex < 0 ? "" : "&") + resolved.slice(newHashIndex)
	return result
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/pathname/compileTemplate.js":
/*!************************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/pathname/compileTemplate.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parsePathname = __webpack_require__(/*! ./parse */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/pathname/parse.js")

// Compiles a template into a function that takes a resolved path (without query
// strings) and returns an object containing the template parameters with their
// parsed values. This expects the input of the compiled template to be the
// output of `parsePathname`. Note that it does *not* remove query parameters
// specified in the template.
module.exports = function(template) {
	var templateData = parsePathname(template)
	var templateKeys = Object.keys(templateData.params)
	var keys = []
	var regexp = new RegExp("^" + templateData.path.replace(
		// I escape literal text so people can use things like `:file.:ext` or
		// `:lang-:locale` in routes. This is all merged into one pass so I
		// don't also accidentally escape `-` and make it harder to detect it to
		// ban it from template parameters.
		/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,
		function(m, key, extra) {
			if (key == null) return "\\" + m
			keys.push({k: key, r: extra === "..."})
			if (extra === "...") return "(.*)"
			if (extra === ".") return "([^/]+)\\."
			return "([^/]+)" + (extra || "")
		}
	) + "$")
	return function(data) {
		// First, check the params. Usually, there isn't any, and it's just
		// checking a static set.
		for (var i = 0; i < templateKeys.length; i++) {
			if (templateData.params[templateKeys[i]] !== data.params[templateKeys[i]]) return false
		}
		// If no interpolations exist, let's skip all the ceremony
		if (!keys.length) return regexp.test(data.path)
		var values = regexp.exec(data.path)
		if (values == null) return false
		for (var i = 0; i < keys.length; i++) {
			data.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1])
		}
		return true
	}
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/pathname/parse.js":
/*!**************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/pathname/parse.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseQueryString = __webpack_require__(/*! ../querystring/parse */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/querystring/parse.js")

// Returns `{path, params}` from `url`
module.exports = function(url) {
	var queryIndex = url.indexOf("?")
	var hashIndex = url.indexOf("#")
	var queryEnd = hashIndex < 0 ? url.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = url.slice(0, pathEnd).replace(/\/{2,}/g, "/")

	if (!path) path = "/"
	else {
		if (path[0] !== "/") path = "/" + path
		if (path.length > 1 && path[path.length - 1] === "/") path = path.slice(0, -1)
	}
	return {
		path: path,
		params: queryIndex < 0
			? {}
			: parseQueryString(url.slice(queryIndex + 1, queryEnd)),
	}
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/promise/polyfill.js":
/*!****************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/promise/polyfill.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {
/** @constructor */
var PromisePolyfill = function(executor) {
	if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`")
	if (typeof executor !== "function") throw new TypeError("executor must be a function")

	var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)
	var instance = self._instance = {resolvers: resolvers, rejectors: rejectors}
	var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
	function handler(list, shouldAbsorb) {
		return function execute(value) {
			var then
			try {
				if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
					if (value === self) throw new TypeError("Promise can't be resolved w/ itself")
					executeOnce(then.bind(value))
				}
				else {
					callAsync(function() {
						if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value)
						for (var i = 0; i < list.length; i++) list[i](value)
						resolvers.length = 0, rejectors.length = 0
						instance.state = shouldAbsorb
						instance.retry = function() {execute(value)}
					})
				}
			}
			catch (e) {
				rejectCurrent(e)
			}
		}
	}
	function executeOnce(then) {
		var runs = 0
		function run(fn) {
			return function(value) {
				if (runs++ > 0) return
				fn(value)
			}
		}
		var onerror = run(rejectCurrent)
		try {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}
	}

	executeOnce(executor)
}
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
	var self = this, instance = self._instance
	function handle(callback, list, next, state) {
		list.push(function(value) {
			if (typeof callback !== "function") next(value)
			else try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}
		})
		if (typeof instance.retry === "function" && state === instance.state) instance.retry()
	}
	var resolveNext, rejectNext
	var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})
	handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)
	return promise
}
PromisePolyfill.prototype.catch = function(onRejection) {
	return this.then(null, onRejection)
}
PromisePolyfill.prototype.finally = function(callback) {
	return this.then(
		function(value) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return value
			})
		},
		function(reason) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return PromisePolyfill.reject(reason);
			})
		}
	)
}
PromisePolyfill.resolve = function(value) {
	if (value instanceof PromisePolyfill) return value
	return new PromisePolyfill(function(resolve) {resolve(value)})
}
PromisePolyfill.reject = function(value) {
	return new PromisePolyfill(function(resolve, reject) {reject(value)})
}
PromisePolyfill.all = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		var total = list.length, count = 0, values = []
		if (list.length === 0) resolve([])
		else for (var i = 0; i < list.length; i++) {
			(function(i) {
				function consume(value) {
					count++
					values[i] = value
					if (count === total) resolve(values)
				}
				if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
					list[i].then(consume, reject)
				}
				else consume(list[i])
			})(i)
		}
	})
}
PromisePolyfill.race = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		for (var i = 0; i < list.length; i++) {
			list[i].then(resolve, reject)
		}
	})
}

module.exports = PromisePolyfill

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/node_modules/timers-browserify/main.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/promise/promise.js":
/*!***************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/promise/promise.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var PromisePolyfill = __webpack_require__(/*! ./polyfill */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/promise/polyfill.js")

if (typeof window !== "undefined") {
	if (typeof window.Promise === "undefined") {
		window.Promise = PromisePolyfill
	} else if (!window.Promise.prototype.finally) {
		window.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	module.exports = window.Promise
} else if (typeof global !== "undefined") {
	if (typeof global.Promise === "undefined") {
		global.Promise = PromisePolyfill
	} else if (!global.Promise.prototype.finally) {
		global.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	module.exports = global.Promise
} else {
	module.exports = PromisePolyfill
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/querystring/build.js":
/*!*****************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/querystring/build.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""

	var args = []
	for (var key in object) {
		destructure(key, object[key])
	}

	return args.join("&")

	function destructure(key, value) {
		if (Array.isArray(value)) {
			for (var i = 0; i < value.length; i++) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else if (Object.prototype.toString.call(value) === "[object Object]") {
			for (var i in value) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else args.push(encodeURIComponent(key) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
	}
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/querystring/parse.js":
/*!*****************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/querystring/parse.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)

	var entries = string.split("&"), counters = {}, data = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key = decodeURIComponent(entry[0])
		var value = entry.length === 2 ? decodeURIComponent(entry[1]) : ""

		if (value === "true") value = true
		else if (value === "false") value = false

		var levels = key.split(/\]\[?|\[/)
		var cursor = data
		if (key.indexOf("[") > -1) levels.pop()
		for (var j = 0; j < levels.length; j++) {
			var level = levels[j], nextLevel = levels[j + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			if (level === "") {
				var key = levels.slice(0, j).join()
				if (counters[key] == null) {
					counters[key] = Array.isArray(cursor) ? cursor.length : 0
				}
				level = counters[key]++
			}
			// Disallow direct prototype pollution
			else if (level === "__proto__") break
			if (j === levels.length - 1) cursor[level] = value
			else {
				// Read own properties exclusively to disallow indirect
				// prototype pollution
				var desc = Object.getOwnPropertyDescriptor(cursor, level)
				if (desc != null) desc = desc.value
				if (desc == null) cursor[level] = desc = isNumber ? [] : {}
				cursor = desc
			}
		}
	}
	return data
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render.js":
/*!******************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./render/render */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/render.js")(window)


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/fragment.js":
/*!***************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/fragment.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/vnode.js")
var hyperscriptVnode = __webpack_require__(/*! ./hyperscriptVnode */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/hyperscriptVnode.js")

module.exports = function() {
	var vnode = hyperscriptVnode.apply(0, arguments)

	vnode.tag = "["
	vnode.children = Vnode.normalizeChildren(vnode.children)
	return vnode
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/hyperscript.js":
/*!******************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/hyperscript.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/vnode.js")
var hyperscriptVnode = __webpack_require__(/*! ./hyperscriptVnode */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/hyperscriptVnode.js")

var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = {}
var hasOwn = {}.hasOwnProperty

function isEmpty(object) {
	for (var key in object) if (hasOwn.call(object, key)) return false
	return true
}

function compileSelector(selector) {
	var match, tag = "div", classes = [], attrs = {}
	while (match = selectorParser.exec(selector)) {
		var type = match[1], value = match[2]
		if (type === "" && value !== "") tag = value
		else if (type === "#") attrs.id = value
		else if (type === ".") classes.push(value)
		else if (match[3][0] === "[") {
			var attrValue = match[6]
			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
			if (match[4] === "class") classes.push(attrValue)
			else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true
		}
	}
	if (classes.length > 0) attrs.className = classes.join(" ")
	return selectorCache[selector] = {tag: tag, attrs: attrs}
}

function execSelector(state, vnode) {
	var attrs = vnode.attrs
	var children = Vnode.normalizeChildren(vnode.children)
	var hasClass = hasOwn.call(attrs, "class")
	var className = hasClass ? attrs.class : attrs.className

	vnode.tag = state.tag
	vnode.attrs = null
	vnode.children = undefined

	if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
		var newAttrs = {}

		for (var key in attrs) {
			if (hasOwn.call(attrs, key)) newAttrs[key] = attrs[key]
		}

		attrs = newAttrs
	}

	for (var key in state.attrs) {
		if (hasOwn.call(state.attrs, key) && key !== "className" && !hasOwn.call(attrs, key)){
			attrs[key] = state.attrs[key]
		}
	}
	if (className != null || state.attrs.className != null) attrs.className =
		className != null
			? state.attrs.className != null
				? String(state.attrs.className) + " " + String(className)
				: className
			: state.attrs.className != null
				? state.attrs.className
				: null

	if (hasClass) attrs.class = null

	for (var key in attrs) {
		if (hasOwn.call(attrs, key) && key !== "key") {
			vnode.attrs = attrs
			break
		}
	}

	if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
		vnode.text = children[0].children
	} else {
		vnode.children = children
	}

	return vnode
}

function hyperscript(selector) {
	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}

	var vnode = hyperscriptVnode.apply(1, arguments)

	if (typeof selector === "string") {
		vnode.children = Vnode.normalizeChildren(vnode.children)
		if (selector !== "[") return execSelector(selectorCache[selector] || compileSelector(selector), vnode)
	}

	vnode.tag = selector
	return vnode
}

module.exports = hyperscript


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/hyperscriptVnode.js":
/*!***********************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/hyperscriptVnode.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/vnode.js")

// Call via `hyperscriptVnode.apply(startOffset, arguments)`
//
// The reason I do it this way, forwarding the arguments and passing the start
// offset in `this`, is so I don't have to create a temporary array in a
// performance-critical path.
//
// In native ES6, I'd instead add a final `...args` parameter to the
// `hyperscript` and `fragment` factories and define this as
// `hyperscriptVnode(...args)`, since modern engines do optimize that away. But
// ES5 (what Mithril requires thanks to IE support) doesn't give me that luxury,
// and engines aren't nearly intelligent enough to do either of these:
//
// 1. Elide the allocation for `[].slice.call(arguments, 1)` when it's passed to
//    another function only to be indexed.
// 2. Elide an `arguments` allocation when it's passed to any function other
//    than `Function.prototype.apply` or `Reflect.apply`.
//
// In ES6, it'd probably look closer to this (I'd need to profile it, though):
// module.exports = function(attrs, ...children) {
//     if (attrs == null || typeof attrs === "object" && attrs.tag == null && !Array.isArray(attrs)) {
//         if (children.length === 1 && Array.isArray(children[0])) children = children[0]
//     } else {
//         children = children.length === 0 && Array.isArray(attrs) ? attrs : [attrs, ...children]
//         attrs = undefined
//     }
//
//     if (attrs == null) attrs = {}
//     return Vnode("", attrs.key, attrs, children)
// }
module.exports = function() {
	var attrs = arguments[this], start = this + 1, children

	if (attrs == null) {
		attrs = {}
	} else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
		attrs = {}
		start = this
	}

	if (arguments.length === start + 1) {
		children = arguments[start]
		if (!Array.isArray(children)) children = [children]
	} else {
		children = []
		while (start < arguments.length) children.push(arguments[start++])
	}

	return Vnode("", attrs.key, attrs, children)
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/render.js":
/*!*************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/render.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/vnode.js")

module.exports = function($window) {
	var $doc = $window && $window.document
	var currentRedraw

	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}

	function getNameSpace(vnode) {
		return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag]
	}

	//sanity check to discourage people from doing `vnode.state = ...`
	function checkState(vnode, original) {
		if (vnode.state !== original) throw new Error("`vnode.state` must not be modified")
	}

	//Note: the hook is passed as the `this` argument to allow proxying the
	//arguments without requiring a full array allocation to do so. It also
	//takes advantage of the fact the current `vnode` is the first argument in
	//all lifecycle methods.
	function callHook(vnode) {
		var original = vnode.state
		try {
			return this.apply(original, arguments)
		} finally {
			checkState(vnode, original)
		}
	}

	// IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when
	// inside an iframe. Catch and swallow this error, and heavy-handidly return null.
	function activeElement() {
		try {
			return $doc.activeElement
		} catch (e) {
			return null
		}
	}
	//create
	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				createNode(parent, vnode, hooks, ns, nextSibling)
			}
		}
	}
	function createNode(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		if (typeof tag === "string") {
			vnode.state = {}
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
			switch (tag) {
				case "#": createText(parent, vnode, nextSibling); break
				case "<": createHTML(parent, vnode, ns, nextSibling); break
				case "[": createFragment(parent, vnode, hooks, ns, nextSibling); break
				default: createElement(parent, vnode, hooks, ns, nextSibling)
			}
		}
		else createComponent(parent, vnode, hooks, ns, nextSibling)
	}
	function createText(parent, vnode, nextSibling) {
		vnode.dom = $doc.createTextNode(vnode.children)
		insertNode(parent, vnode.dom, nextSibling)
	}
	var possibleParents = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}
	function createHTML(parent, vnode, ns, nextSibling) {
		var match = vnode.children.match(/^\s*?<(\w+)/im) || []
		// not using the proper parent makes the child element(s) vanish.
		//     var div = document.createElement("div")
		//     div.innerHTML = "<td>i</td><td>j</td>"
		//     console.log(div.innerHTML)
		// --> "ij", no <td> in sight.
		var temp = $doc.createElement(possibleParents[match[1]] || "div")
		if (ns === "http://www.w3.org/2000/svg") {
			temp.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\">" + vnode.children + "</svg>"
			temp = temp.firstChild
		} else {
			temp.innerHTML = vnode.children
		}
		vnode.dom = temp.firstChild
		vnode.domSize = temp.childNodes.length
		// Capture nodes to remove, so we don't confuse them.
		vnode.instance = []
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			vnode.instance.push(child)
			fragment.appendChild(child)
		}
		insertNode(parent, fragment, nextSibling)
	}
	function createFragment(parent, vnode, hooks, ns, nextSibling) {
		var fragment = $doc.createDocumentFragment()
		if (vnode.children != null) {
			var children = vnode.children
			createNodes(fragment, children, 0, children.length, hooks, null, ns)
		}
		vnode.dom = fragment.firstChild
		vnode.domSize = fragment.childNodes.length
		insertNode(parent, fragment, nextSibling)
	}
	function createElement(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		var attrs = vnode.attrs
		var is = attrs && attrs.is

		ns = getNameSpace(vnode) || ns

		var element = ns ?
			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
		vnode.dom = element

		if (attrs != null) {
			setAttrs(vnode, attrs, ns)
		}

		insertNode(parent, element, nextSibling)

		if (!maybeSetContentEditable(vnode)) {
			if (vnode.text != null) {
				if (vnode.text !== "") element.textContent = vnode.text
				else vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			}
			if (vnode.children != null) {
				var children = vnode.children
				createNodes(element, children, 0, children.length, hooks, null, ns)
				if (vnode.tag === "select" && attrs != null) setLateSelectAttrs(vnode, attrs)
			}
		}
	}
	function initComponent(vnode, hooks) {
		var sentinel
		if (typeof vnode.tag.view === "function") {
			vnode.state = Object.create(vnode.tag)
			sentinel = vnode.state.view
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode.state = void 0
			sentinel = vnode.tag
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
			vnode.state = (vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function") ? new vnode.tag(vnode) : vnode.tag(vnode)
		}
		initLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode, hooks, ns, nextSibling) {
		initComponent(vnode, hooks)
		if (vnode.instance != null) {
			createNode(parent, vnode.instance, hooks, ns, nextSibling)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0
		}
		else {
			vnode.domSize = 0
		}
	}

	//update
	/**
	 * @param {Element|Fragment} parent - the parent element
	 * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.
	 * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next DOM node if we're dealing with a
	 *                                       fragment that is not the last item in its
	 *                                       parent
	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
	 * @returns void
	 */
	// This function diffs and patches lists of vnodes, both keyed and unkeyed.
	//
	// We will:
	//
	// 1. describe its general structure
	// 2. focus on the diff algorithm optimizations
	// 3. discuss DOM node operations.

	// ## Overview:
	//
	// The updateNodes() function:
	// - deals with trivial cases
	// - determines whether the lists are keyed or unkeyed based on the first non-null node
	//   of each list.
	// - diffs them and patches the DOM if needed (that's the brunt of the code)
	// - manages the leftovers: after diffing, are there:
	//   - old nodes left to remove?
	// 	 - new nodes to insert?
	// 	 deal with them!
	//
	// The lists are only iterated over once, with an exception for the nodes in `old` that
	// are visited in the fourth part of the diff and in the `removeNodes` loop.

	// ## Diffing
	//
	// Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837
	// may be good for context on longest increasing subsequence-based logic for moving nodes.
	//
	// In order to diff keyed lists, one has to
	//
	// 1) match nodes in both lists, per key, and update them accordingly
	// 2) create the nodes present in the new list, but absent in the old one
	// 3) remove the nodes present in the old list, but absent in the new one
	// 4) figure out what nodes in 1) to move in order to minimize the DOM operations.
	//
	// To achieve 1) one can create a dictionary of keys => index (for the old list), then iterate
	// over the new list and for each new vnode, find the corresponding vnode in the old list using
	// the map.
	// 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new
	// and must be created.
	// For the removals, we actually remove the nodes that have been updated from the old list.
	// The nodes that remain in that list after 1) and 2) have been performed can be safely removed.
	// The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)
	// algorithm.
	//
	// the longest increasing subsequence is the list of nodes that can remain in place. Imagine going
	// from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices
	// corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would
	//  match the above lists, for example).
	//
	// In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We
	// can update those nodes without moving them, and only call `insertNode` on `4` and `5`.
	//
	// @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually
	// the longest increasing subsequence *of old nodes still present in the new list*).
	//
	// It is a general algorithm that is fireproof in all circumstances, but it requires the allocation
	// and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,
	// the `LIS` and a temporary one to create the LIS).
	//
	// So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of
	// the LIS and can be updated without moving them.
	//
	// If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with
	// the exception of the last node if the list is fully reversed).
	//
	// ## Finding the next sibling.
	//
	// `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.
	// When the list is being traversed top-down, at any index, the DOM nodes up to the previous
	// vnode reflect the content of the new list, whereas the rest of the DOM nodes reflect the old
	// list. The next sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.
	//
	// In the other scenarios (swaps, upwards traversal, map-based diff),
	// the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the
	// bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node
	// as the next sibling (cached in the `nextSibling` variable).


	// ## DOM node moves
	//
	// In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,
	// this is not the case if the node moved (second and fourth part of the diff algo). We move
	// the old DOM nodes before updateNode runs because it enables us to use the cached `nextSibling`
	// variable rather than fetching it using `getNextSibling()`.
	//
	// The fourth part of the diff currently inserts nodes unconditionally, leading to issues
	// like #1791 and #1999. We need to be smarter about those situations where adjascent old
	// nodes remain together in the new list in a way that isn't covered by parts one and
	// three of the diff algo.

	function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
		if (old === vnodes || old == null && vnodes == null) return
		else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null || vnodes.length === 0) removeNodes(parent, old, 0, old.length)
		else {
			var isOldKeyed = old[0] != null && old[0].key != null
			var isKeyed = vnodes[0] != null && vnodes[0].key != null
			var start = 0, oldStart = 0
			if (!isOldKeyed) while (oldStart < old.length && old[oldStart] == null) oldStart++
			if (!isKeyed) while (start < vnodes.length && vnodes[start] == null) start++
			if (isKeyed === null && isOldKeyed == null) return // both lists are full of nulls
			if (isOldKeyed !== isKeyed) {
				removeNodes(parent, old, oldStart, old.length)
				createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else if (!isKeyed) {
				// Don't index past the end of either list (causes deopts).
				var commonLength = old.length < vnodes.length ? old.length : vnodes.length
				// Rewind if necessary to the first non-null index on either side.
				// We could alternatively either explicitly create or remove nodes when `start !== oldStart`
				// but that would be optimizing for sparse lists which are more rare than dense ones.
				start = start < oldStart ? start : oldStart
				for (; start < commonLength; start++) {
					o = old[start]
					v = vnodes[start]
					if (o === v || o == null && v == null) continue
					else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling))
					else if (v == null) removeNode(parent, o)
					else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns)
				}
				if (old.length > commonLength) removeNodes(parent, old, start, old.length)
				if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else {
				// keyed diff
				var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling

				// bottom-up
				while (oldEnd >= oldStart && end >= start) {
					oe = old[oldEnd]
					ve = vnodes[end]
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
				}
				// top-down
				while (oldEnd >= oldStart && end >= start) {
					o = old[oldStart]
					v = vnodes[start]
					if (o.key !== v.key) break
					oldStart++, start++
					if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns)
				}
				// swaps and list reversals
				while (oldEnd >= oldStart && end >= start) {
					if (start === end) break
					if (o.key !== ve.key || oe.key !== v.key) break
					topSibling = getNextSibling(old, oldStart, nextSibling)
					moveNodes(parent, oe, topSibling)
					if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns)
					if (++start <= --end) moveNodes(parent, o, nextSibling)
					if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldStart++; oldEnd--
					oe = old[oldEnd]
					ve = vnodes[end]
					o = old[oldStart]
					v = vnodes[start]
				}
				// bottom up once again
				while (oldEnd >= oldStart && end >= start) {
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
					oe = old[oldEnd]
					ve = vnodes[end]
				}
				if (start > end) removeNodes(parent, old, oldStart, oldEnd + 1)
				else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
				else {
					// inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul
					var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li=0, i=0, pos = 2147483647, matched = 0, map, lisIndices
					for (i = 0; i < vnodesLength; i++) oldIndices[i] = -1
					for (i = end; i >= start; i--) {
						if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1)
						ve = vnodes[i]
						var oldIndex = map[ve.key]
						if (oldIndex != null) {
							pos = (oldIndex < pos) ? oldIndex : -1 // becomes -1 if nodes were re-ordered
							oldIndices[i-start] = oldIndex
							oe = old[oldIndex]
							old[oldIndex] = null
							if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
							if (ve.dom != null) nextSibling = ve.dom
							matched++
						}
					}
					nextSibling = originalNextSibling
					if (matched !== oldEnd - oldStart + 1) removeNodes(parent, old, oldStart, oldEnd + 1)
					if (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
					else {
						if (pos === -1) {
							// the indices of the indices of the items that are part of the
							// longest increasing subsequence in the oldIndices list
							lisIndices = makeLisIndices(oldIndices)
							li = lisIndices.length - 1
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								else {
									if (lisIndices[li] === i - start) li--
									else moveNodes(parent, v, nextSibling)
								}
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						} else {
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						}
					}
				}
			}
		}
	}
	function updateNode(parent, old, vnode, hooks, nextSibling, ns) {
		var oldTag = old.tag, tag = vnode.tag
		if (oldTag === tag) {
			vnode.state = old.state
			vnode.events = old.events
			if (shouldNotUpdate(vnode, old)) return
			if (typeof oldTag === "string") {
				if (vnode.attrs != null) {
					updateLifecycle(vnode.attrs, vnode, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode); break
					case "<": updateHTML(parent, old, vnode, ns, nextSibling); break
					case "[": updateFragment(parent, old, vnode, hooks, nextSibling, ns); break
					default: updateElement(old, vnode, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode, hooks, nextSibling, ns)
		}
		else {
			removeNode(parent, old)
			createNode(parent, vnode, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode) {
		if (old.children.toString() !== vnode.children.toString()) {
			old.dom.nodeValue = vnode.children
		}
		vnode.dom = old.dom
	}
	function updateHTML(parent, old, vnode, ns, nextSibling) {
		if (old.children !== vnode.children) {
			removeHTML(parent, old)
			createHTML(parent, vnode, ns, nextSibling)
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
			vnode.instance = old.instance
		}
	}
	function updateFragment(parent, old, vnode, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns)
		var domSize = 0, children = vnode.children
		vnode.dom = null
		if (children != null) {
			for (var i = 0; i < children.length; i++) {
				var child = children[i]
				if (child != null && child.dom != null) {
					if (vnode.dom == null) vnode.dom = child.dom
					domSize += child.domSize || 1
				}
			}
			if (domSize !== 1) vnode.domSize = domSize
		}
	}
	function updateElement(old, vnode, hooks, ns) {
		var element = vnode.dom = old.dom
		ns = getNameSpace(vnode) || ns

		if (vnode.tag === "textarea") {
			if (vnode.attrs == null) vnode.attrs = {}
			if (vnode.text != null) {
				vnode.attrs.value = vnode.text //FIXME handle multiple children
				vnode.text = undefined
			}
		}
		updateAttrs(vnode, old.attrs, vnode.attrs, ns)
		if (!maybeSetContentEditable(vnode)) {
			if (old.text != null && vnode.text != null && vnode.text !== "") {
				if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text
			}
			else {
				if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)]
				if (vnode.text != null) vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
				updateNodes(element, old.children, vnode.children, hooks, null, ns)
			}
		}
	}
	function updateComponent(parent, old, vnode, hooks, nextSibling, ns) {
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		updateLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks)
		if (vnode.instance != null) {
			if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, ns)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.instance.domSize
		}
		else if (old.instance != null) {
			removeNode(parent, old.instance)
			vnode.dom = undefined
			vnode.domSize = 0
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
		}
	}
	function getKeyMap(vnodes, start, end) {
		var map = Object.create(null)
		for (; start < end; start++) {
			var vnode = vnodes[start]
			if (vnode != null) {
				var key = vnode.key
				if (key != null) map[key] = start
			}
		}
		return map
	}
	// Lifted from ivi https://github.com/ivijs/ivi/
	// takes a list of unique numbers (-1 is special and can
	// occur multiple times) and returns an array with the indices
	// of the items that are part of the longest increasing
	// subsequece
	var lisTemp = []
	function makeLisIndices(a) {
		var result = [0]
		var u = 0, v = 0, i = 0
		var il = lisTemp.length = a.length
		for (var i = 0; i < il; i++) lisTemp[i] = a[i]
		for (var i = 0; i < il; ++i) {
			if (a[i] === -1) continue
			var j = result[result.length - 1]
			if (a[j] < a[i]) {
				lisTemp[i] = j
				result.push(i)
				continue
			}
			u = 0
			v = result.length - 1
			while (u < v) {
				// Fast integer average without overflow.
				// eslint-disable-next-line no-bitwise
				var c = (u >>> 1) + (v >>> 1) + (u & v & 1)
				if (a[result[c]] < a[i]) {
					u = c + 1
				}
				else {
					v = c
				}
			}
			if (a[i] < a[result[u]]) {
				if (u > 0) lisTemp[i] = result[u - 1]
				result[u] = i
			}
		}
		u = result.length
		v = result[u - 1]
		while (u-- > 0) {
			result[u] = v
			v = lisTemp[v]
		}
		lisTemp.length = 0
		return result
	}

	function getNextSibling(vnodes, i, nextSibling) {
		for (; i < vnodes.length; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}

	// This covers a really specific edge case:
	// - Parent node is keyed and contains child
	// - Child is removed, returns unresolved promise in `onbeforeremove`
	// - Parent node is moved in keyed diff
	// - Remaining children still need moved appropriately
	//
	// Ideally, I'd track removed nodes as well, but that introduces a lot more
	// complexity and I'm not exactly interested in doing that.
	function moveNodes(parent, vnode, nextSibling) {
		var frag = $doc.createDocumentFragment()
		moveChildToFrag(parent, frag, vnode)
		insertNode(parent, frag, nextSibling)
	}
	function moveChildToFrag(parent, frag, vnode) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode.dom != null && vnode.dom.parentNode === parent) {
			if (typeof vnode.tag !== "string") {
				vnode = vnode.instance
				if (vnode != null) continue
			} else if (vnode.tag === "<") {
				for (var i = 0; i < vnode.instance.length; i++) {
					frag.appendChild(vnode.instance[i])
				}
			} else if (vnode.tag !== "[") {
				// Don't recurse for text nodes *or* elements, just fragments
				frag.appendChild(vnode.dom)
			} else if (vnode.children.length === 1) {
				vnode = vnode.children[0]
				if (vnode != null) continue
			} else {
				for (var i = 0; i < vnode.children.length; i++) {
					var child = vnode.children[i]
					if (child != null) moveChildToFrag(parent, frag, child)
				}
			}
			break
		}
	}

	function insertNode(parent, dom, nextSibling) {
		if (nextSibling != null) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}

	function maybeSetContentEditable(vnode) {
		if (vnode.attrs == null || (
			vnode.attrs.contenteditable == null && // attribute
			vnode.attrs.contentEditable == null // property
		)) return false
		var children = vnode.children
		if (children != null && children.length === 1 && children[0].tag === "<") {
			var content = children[0].children
			if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content
		}
		else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
		return true
	}

	//remove
	function removeNodes(parent, vnodes, start, end) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) removeNode(parent, vnode)
		}
	}
	function removeNode(parent, vnode) {
		var mask = 0
		var original = vnode.state
		var stateResult, attrsResult
		if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeremove === "function") {
			var result = callHook.call(vnode.state.onbeforeremove, vnode)
			if (result != null && typeof result.then === "function") {
				mask = 1
				stateResult = result
			}
		}
		if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
			var result = callHook.call(vnode.attrs.onbeforeremove, vnode)
			if (result != null && typeof result.then === "function") {
				// eslint-disable-next-line no-bitwise
				mask |= 2
				attrsResult = result
			}
		}
		checkState(vnode, original)

		// If we can, try to fast-path it and avoid all the overhead of awaiting
		if (!mask) {
			onremove(vnode)
			removeChild(parent, vnode)
		} else {
			if (stateResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 1) { mask &= 2; if (!mask) reallyRemove() }
				}
				stateResult.then(next, next)
			}
			if (attrsResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 2) { mask &= 1; if (!mask) reallyRemove() }
				}
				attrsResult.then(next, next)
			}
		}

		function reallyRemove() {
			checkState(vnode, original)
			onremove(vnode)
			removeChild(parent, vnode)
		}
	}
	function removeHTML(parent, vnode) {
		for (var i = 0; i < vnode.instance.length; i++) {
			parent.removeChild(vnode.instance[i])
		}
	}
	function removeChild(parent, vnode) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode.dom != null && vnode.dom.parentNode === parent) {
			if (typeof vnode.tag !== "string") {
				vnode = vnode.instance
				if (vnode != null) continue
			} else if (vnode.tag === "<") {
				removeHTML(parent, vnode)
			} else {
				if (vnode.tag !== "[") {
					parent.removeChild(vnode.dom)
					if (!Array.isArray(vnode.children)) break
				}
				if (vnode.children.length === 1) {
					vnode = vnode.children[0]
					if (vnode != null) continue
				} else {
					for (var i = 0; i < vnode.children.length; i++) {
						var child = vnode.children[i]
						if (child != null) removeChild(parent, child)
					}
				}
			}
			break
		}
	}
	function onremove(vnode) {
		if (typeof vnode.tag !== "string" && typeof vnode.state.onremove === "function") callHook.call(vnode.state.onremove, vnode)
		if (vnode.attrs && typeof vnode.attrs.onremove === "function") callHook.call(vnode.attrs.onremove, vnode)
		if (typeof vnode.tag !== "string") {
			if (vnode.instance != null) onremove(vnode.instance)
		} else {
			var children = vnode.children
			if (Array.isArray(children)) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i]
					if (child != null) onremove(child)
				}
			}
		}
	}

	//attrs
	function setAttrs(vnode, attrs, ns) {
		for (var key in attrs) {
			setAttr(vnode, key, null, attrs[key], ns)
		}
	}
	function setAttr(vnode, key, old, value, ns) {
		if (key === "key" || key === "is" || value == null || isLifecycleMethod(key) || (old === value && !isFormAttribute(vnode, key)) && typeof value !== "object") return
		if (key[0] === "o" && key[1] === "n") return updateEvent(vnode, key, value)
		if (key.slice(0, 6) === "xlink:") vnode.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value)
		else if (key === "style") updateStyle(vnode.dom, old, value)
		else if (hasPropertyKey(vnode, key, ns)) {
			if (key === "value") {
				// Only do the coercion if we're actually going to check the value.
				/* eslint-disable no-implicit-coercion */
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === "" + value && vnode.dom === activeElement()) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select" && old !== null && vnode.dom.value === "" + value) return
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && old !== null && vnode.dom.value === "" + value) return
				/* eslint-enable no-implicit-coercion */
			}
			// If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
			if (vnode.tag === "input" && key === "type") vnode.dom.setAttribute(key, value)
			else vnode.dom[key] = value
		} else {
			if (typeof value === "boolean") {
				if (value) vnode.dom.setAttribute(key, "")
				else vnode.dom.removeAttribute(key)
			}
			else vnode.dom.setAttribute(key === "className" ? "class" : key, value)
		}
	}
	function removeAttr(vnode, key, old, ns) {
		if (key === "key" || key === "is" || old == null || isLifecycleMethod(key)) return
		if (key[0] === "o" && key[1] === "n" && !isLifecycleMethod(key)) updateEvent(vnode, key, undefined)
		else if (key === "style") updateStyle(vnode.dom, old, null)
		else if (
			hasPropertyKey(vnode, key, ns)
			&& key !== "className"
			&& !(key === "value" && (
				vnode.tag === "option"
				|| vnode.tag === "select" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement()
			))
			&& !(vnode.tag === "input" && key === "type")
		) {
			vnode.dom[key] = null
		} else {
			var nsLastIndex = key.indexOf(":")
			if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1)
			if (old !== false) vnode.dom.removeAttribute(key === "className" ? "class" : key)
		}
	}
	function setLateSelectAttrs(vnode, attrs) {
		if ("value" in attrs) {
			if(attrs.value === null) {
				if (vnode.dom.selectedIndex !== -1) vnode.dom.value = null
			} else {
				var normalized = "" + attrs.value // eslint-disable-line no-implicit-coercion
				if (vnode.dom.value !== normalized || vnode.dom.selectedIndex === -1) {
					vnode.dom.value = normalized
				}
			}
		}
		if ("selectedIndex" in attrs) setAttr(vnode, "selectedIndex", null, attrs.selectedIndex, undefined)
	}
	function updateAttrs(vnode, old, attrs, ns) {
		if (attrs != null) {
			for (var key in attrs) {
				setAttr(vnode, key, old && old[key], attrs[key], ns)
			}
		}
		var val
		if (old != null) {
			for (var key in old) {
				if (((val = old[key]) != null) && (attrs == null || attrs[key] == null)) {
					removeAttr(vnode, key, val, ns)
				}
			}
		}
	}
	function isFormAttribute(vnode, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === activeElement() || vnode.tag === "option" && vnode.dom.parentNode === $doc.activeElement
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function hasPropertyKey(vnode, key, ns) {
		// Filter out namespaced keys
		return ns === undefined && (
			// If it's a custom element, just keep it.
			vnode.tag.indexOf("-") > -1 || vnode.attrs != null && vnode.attrs.is ||
			// If it's a normal element, let's try to avoid a few browser bugs.
			key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height"// && key !== "type"
			// Defer the property check until *after* we check everything.
		) && key in vnode.dom
	}

	//style
	var uppercaseRegex = /[A-Z]/g
	function toLowerCase(capital) { return "-" + capital.toLowerCase() }
	function normalizeKey(key) {
		return key[0] === "-" && key[1] === "-" ? key :
			key === "cssFloat" ? "float" :
				key.replace(uppercaseRegex, toLowerCase)
	}
	function updateStyle(element, old, style) {
		if (old === style) {
			// Styles are equivalent, do nothing.
		} else if (style == null) {
			// New style is missing, just clear it.
			element.style.cssText = ""
		} else if (typeof style !== "object") {
			// New style is a string, let engine deal with patching.
			element.style.cssText = style
		} else if (old == null || typeof old !== "object") {
			// `old` is missing or a string, `style` is an object.
			element.style.cssText = ""
			// Add new style properties
			for (var key in style) {
				var value = style[key]
				if (value != null) element.style.setProperty(normalizeKey(key), String(value))
			}
		} else {
			// Both old & new are (different) objects.
			// Update style properties that have changed
			for (var key in style) {
				var value = style[key]
				if (value != null && (value = String(value)) !== String(old[key])) {
					element.style.setProperty(normalizeKey(key), value)
				}
			}
			// Remove style properties that no longer exist
			for (var key in old) {
				if (old[key] != null && style[key] == null) {
					element.style.removeProperty(normalizeKey(key))
				}
			}
		}
	}

	// Here's an explanation of how this works:
	// 1. The event names are always (by design) prefixed by `on`.
	// 2. The EventListener interface accepts either a function or an object
	//    with a `handleEvent` method.
	// 3. The object does not inherit from `Object.prototype`, to avoid
	//    any potential interference with that (e.g. setters).
	// 4. The event name is remapped to the handler before calling it.
	// 5. In function-based event handlers, `ev.target === this`. We replicate
	//    that below.
	// 6. In function-based event handlers, `return false` prevents the default
	//    action and stops event propagation. We replicate that below.
	function EventDict() {
		// Save this, so the current redraw is correctly tracked.
		this._ = currentRedraw
	}
	EventDict.prototype = Object.create(null)
	EventDict.prototype.handleEvent = function (ev) {
		var handler = this["on" + ev.type]
		var result
		if (typeof handler === "function") result = handler.call(ev.currentTarget, ev)
		else if (typeof handler.handleEvent === "function") handler.handleEvent(ev)
		if (this._ && ev.redraw !== false) (0, this._)()
		if (result === false) {
			ev.preventDefault()
			ev.stopPropagation()
		}
	}

	//event
	function updateEvent(vnode, key, value) {
		if (vnode.events != null) {
			if (vnode.events[key] === value) return
			if (value != null && (typeof value === "function" || typeof value === "object")) {
				if (vnode.events[key] == null) vnode.dom.addEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = value
			} else {
				if (vnode.events[key] != null) vnode.dom.removeEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = undefined
			}
		} else if (value != null && (typeof value === "function" || typeof value === "object")) {
			vnode.events = new EventDict()
			vnode.dom.addEventListener(key.slice(2), vnode.events, false)
			vnode.events[key] = value
		}
	}

	//lifecycle
	function initLifecycle(source, vnode, hooks) {
		if (typeof source.oninit === "function") callHook.call(source.oninit, vnode)
		if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode))
	}
	function updateLifecycle(source, vnode, hooks) {
		if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode))
	}
	function shouldNotUpdate(vnode, old) {
		do {
			if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") {
				var force = callHook.call(vnode.attrs.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeupdate === "function") {
				var force = callHook.call(vnode.state.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			return false
		} while (false); // eslint-disable-line no-constant-condition
		vnode.dom = old.dom
		vnode.domSize = old.domSize
		vnode.instance = old.instance
		// One would think having the actual latest attributes would be ideal,
		// but it doesn't let us properly diff based on our current internal
		// representation. We have to save not only the old DOM info, but also
		// the attributes used to create it, as we diff *that*, not against the
		// DOM directly (with a few exceptions in `setAttr`). And, of course, we
		// need to save the children and text as they are conceptually not
		// unlike special "attributes" internally.
		vnode.attrs = old.attrs
		vnode.children = old.children
		vnode.text = old.text
		return true
	}

	return function(dom, vnodes, redraw) {
		if (!dom) throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
		var hooks = []
		var active = activeElement()
		var namespace = dom.namespaceURI

		// First time rendering into a node clears it out
		if (dom.vnodes == null) dom.textContent = ""

		vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes])
		var prevRedraw = currentRedraw
		try {
			currentRedraw = typeof redraw === "function" ? redraw : undefined
			updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
		} finally {
			currentRedraw = prevRedraw
		}
		dom.vnodes = vnodes
		// `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement
		if (active != null && activeElement() !== active && typeof active.focus === "function") active.focus()
		for (var i = 0; i < hooks.length; i++) hooks[i]()
	}
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/trust.js":
/*!************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/trust.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/vnode.js")

module.exports = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/vnode.js":
/*!************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/render/vnode.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Vnode(tag, key, attrs, children, text, dom) {
	return {tag: tag, key: key, attrs: attrs, children: children, text: text, dom: dom, domSize: undefined, state: undefined, events: undefined, instance: undefined}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node == null || typeof node === "boolean") return null
	if (typeof node === "object") return node
	return Vnode("#", undefined, undefined, String(node), undefined, undefined)
}
Vnode.normalizeChildren = function(input) {
	var children = []
	if (input.length) {
		var isKeyed = input[0] != null && input[0].key != null
		// Note: this is a *very* perf-sensitive check.
		// Fun fact: merging the loop like this is somehow faster than splitting
		// it, noticeably so.
		for (var i = 1; i < input.length; i++) {
			if ((input[i] != null && input[i].key != null) !== isKeyed) {
				throw new TypeError("Vnodes must either always have keys or never have keys!")
			}
		}
		for (var i = 0; i < input.length; i++) {
			children[i] = Vnode.normalize(input[i])
		}
	}
	return children
}

module.exports = Vnode


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/request.js":
/*!*******************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/request.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PromisePolyfill = __webpack_require__(/*! ./promise/promise */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/promise/promise.js")
var mountRedraw = __webpack_require__(/*! ./mount-redraw */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/mount-redraw.js")

module.exports = __webpack_require__(/*! ./request/request */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/request/request.js")(window, PromisePolyfill, mountRedraw.redraw)


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/request/request.js":
/*!***************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/request/request.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var buildPathname = __webpack_require__(/*! ../pathname/build */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/pathname/build.js")

module.exports = function($window, Promise, oncompletion) {
	var callbackCount = 0

	function PromiseProxy(executor) {
		return new Promise(executor)
	}

	// In case the global Promise is some userland library's where they rely on
	// `foo instanceof this.constructor`, `this.constructor.resolve(value)`, or
	// similar. Let's *not* break them.
	PromiseProxy.prototype = Promise.prototype
	PromiseProxy.__proto__ = Promise // eslint-disable-line no-proto

	function makeRequest(factory) {
		return function(url, args) {
			if (typeof url !== "string") { args = url; url = url.url }
			else if (args == null) args = {}
			var promise = new Promise(function(resolve, reject) {
				factory(buildPathname(url, args.params), args, function (data) {
					if (typeof args.type === "function") {
						if (Array.isArray(data)) {
							for (var i = 0; i < data.length; i++) {
								data[i] = new args.type(data[i])
							}
						}
						else data = new args.type(data)
					}
					resolve(data)
				}, reject)
			})
			if (args.background === true) return promise
			var count = 0
			function complete() {
				if (--count === 0 && typeof oncompletion === "function") oncompletion()
			}

			return wrap(promise)

			function wrap(promise) {
				var then = promise.then
				// Set the constructor, so engines know to not await or resolve
				// this as a native promise. At the time of writing, this is
				// only necessary for V8, but their behavior is the correct
				// behavior per spec. See this spec issue for more details:
				// https://github.com/tc39/ecma262/issues/1577. Also, see the
				// corresponding comment in `request/tests/test-request.js` for
				// a bit more background on the issue at hand.
				promise.constructor = PromiseProxy
				promise.then = function() {
					count++
					var next = then.apply(promise, arguments)
					next.then(complete, function(e) {
						complete()
						if (count === 0) throw e
					})
					return wrap(next)
				}
				return promise
			}
		}
	}

	function hasHeader(args, name) {
		for (var key in args.headers) {
			if ({}.hasOwnProperty.call(args.headers, key) && name.test(key)) return true
		}
		return false
	}

	return {
		request: makeRequest(function(url, args, resolve, reject) {
			var method = args.method != null ? args.method.toUpperCase() : "GET"
			var body = args.body
			var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData)
			var responseType = args.responseType || (typeof args.extract === "function" ? "" : "json")

			var xhr = new $window.XMLHttpRequest(), aborted = false
			var original = xhr, replacedAbort
			var abort = xhr.abort

			xhr.abort = function() {
				aborted = true
				abort.call(this)
			}

			xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)

			if (assumeJSON && body != null && !hasHeader(args, /^content-type$/i)) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (typeof args.deserialize !== "function" && !hasHeader(args, /^accept$/i)) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			if (args.timeout) xhr.timeout = args.timeout
			xhr.responseType = responseType

			for (var key in args.headers) {
				if ({}.hasOwnProperty.call(args.headers, key)) {
					xhr.setRequestHeader(key, args.headers[key])
				}
			}

			xhr.onreadystatechange = function(ev) {
				// Don't throw errors on xhr.abort().
				if (aborted) return

				if (ev.target.readyState === 4) {
					try {
						var success = (ev.target.status >= 200 && ev.target.status < 300) || ev.target.status === 304 || (/^file:\/\//i).test(url)
						// When the response type isn't "" or "text",
						// `xhr.responseText` is the wrong thing to use.
						// Browsers do the right thing and throw here, and we
						// should honor that and do the right thing by
						// preferring `xhr.response` where possible/practical.
						var response = ev.target.response, message

						if (responseType === "json") {
							// For IE and Edge, which don't implement
							// `responseType: "json"`.
							if (!ev.target.responseType && typeof args.extract !== "function") response = JSON.parse(ev.target.responseText)
						} else if (!responseType || responseType === "text") {
							// Only use this default if it's text. If a parsed
							// document is needed on old IE and friends (all
							// unsupported), the user should use a custom
							// `config` instead. They're already using this at
							// their own risk.
							if (response == null) response = ev.target.responseText
						}

						if (typeof args.extract === "function") {
							response = args.extract(ev.target, args)
							success = true
						} else if (typeof args.deserialize === "function") {
							response = args.deserialize(response)
						}
						if (success) resolve(response)
						else {
							try { message = ev.target.responseText }
							catch (e) { message = response }
							var error = new Error(message)
							error.code = ev.target.status
							error.response = response
							reject(error)
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}

			if (typeof args.config === "function") {
				xhr = args.config(xhr, args, url) || xhr

				// Propagate the `abort` to any replacement XHR as well.
				if (xhr !== original) {
					replacedAbort = xhr.abort
					xhr.abort = function() {
						aborted = true
						replacedAbort.call(this)
					}
				}
			}

			if (body == null) xhr.send()
			else if (typeof args.serialize === "function") xhr.send(args.serialize(body))
			else if (body instanceof $window.FormData) xhr.send(body)
			else xhr.send(JSON.stringify(body))
		}),
		jsonp: makeRequest(function(url, args, resolve, reject) {
			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
			var script = $window.document.createElement("script")
			$window[callbackName] = function(data) {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				resolve(data)
			}
			script.onerror = function() {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				reject(new Error("JSONP request failed"))
			}
			script.src = url + (url.indexOf("?") < 0 ? "?" : "&") +
				encodeURIComponent(args.callbackKey || "callback") + "=" +
				encodeURIComponent(callbackName)
			$window.document.documentElement.appendChild(script)
		}),
	}
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/route.js":
/*!*****************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/mithril/route.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mountRedraw = __webpack_require__(/*! ./mount-redraw */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/mount-redraw.js")

module.exports = __webpack_require__(/*! ./api/router */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/api/router.js")(window, mountRedraw)


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/process/browser.js":
/*!*************************************************!*\
  !*** (webpack)/node_modules/process/browser.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/setimmediate/setImmediate.js":
/*!***********************************************************!*\
  !*** (webpack)/node_modules/setimmediate/setImmediate.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buildin/global.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/process/browser.js")))

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/timers-browserify/main.js":
/*!********************************************************!*\
  !*** (webpack)/node_modules/timers-browserify/main.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buildin/global.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./bin/Config.js":
/*!***********************!*\
  !*** ./bin/Config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __webpack_require__(/*! ./mithril */ "./bin/mithril.js");
class Config {
    oninit(node) {
        const context = node.attrs.context;
        if (typeof node.attrs.source === 'string') {
            if (!node.state.cfg) {
                mithril_1.m.request({ method: "GET", url: node.attrs.source }).then((s) => {
                    node.state.cfg = translate(s, s.root, context);
                });
            }
        }
        else {
            node.state.cfg = translate(node.attrs.source, node.attrs.source.root, context);
        }
    }
    view(node) {
        const cfg = node.state.cfg;
        return (cfg && cfg.compClass) ? mithril_1.m(cfg.compClass, Object.assign(cfg.attrs, node.attrs)) : mithril_1.m('div', 'waiting');
    }
}
exports.Config = Config;
function translate(config, subcfg, context) {
    if (isSynonym(config, subcfg)) {
        subcfg = config[subcfg];
    }
    if (['string', 'number', 'boolean', 'function'].indexOf(typeof subcfg) >= 0) {
        return subcfg;
    }
    let result = subcfg.length ? [] : {};
    const options = Object.keys(subcfg);
    options.map((opt) => {
        const cl = resolve(opt, context);
        const content = translate(config, subcfg[opt], context);
        if (cl) {
            const r = {
                compClass: cl,
                attrs: content
            };
            (!Array.isArray(subcfg) && options.length === 1) ?
                result = r :
                result[opt] = r;
        }
        else {
            result[opt] = content;
        }
    });
    return result;
}
function resolve(sym, context) {
    let cl;
    context.some((c) => cl = c[sym]);
    return cl;
}
function isSynonym(config, key) { return typeof key === 'string' && config[key]; }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQTJEQSx1Q0FBcUM7QUFLckMsTUFBYSxNQUFNO0lBQ2YsTUFBTSxDQUFDLElBQVU7UUFDYixNQUFNLE9BQU8sR0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN6QyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtnQkFBRSxXQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUssRUFBQyxFQUFFO29CQUN0RixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ25ELENBQUMsQ0FBQyxDQUFDO2FBQUU7U0FDUjthQUFNO1lBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNsRjtJQUNMLENBQUM7SUFDRCxJQUFJLENBQUMsSUFBVTtRQUNYLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxXQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQUMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEgsQ0FBQztDQUNKO0FBZkQsd0JBZUM7QUFhRCxTQUFTLFNBQVMsQ0FBQyxNQUFVLEVBQUUsTUFBVSxFQUFFLE9BQWE7SUFFcEQsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUFFO0lBRTNELElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxNQUFNLENBQUMsSUFBRSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQzdGLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBRXBDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQVUsRUFBUSxFQUFFO1FBQzdCLE1BQU0sRUFBRSxHQUFPLE9BQU8sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDckMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEQsSUFBSSxFQUFFLEVBQUU7WUFDSixNQUFNLENBQUMsR0FBRztnQkFDTixTQUFTLEVBQUMsRUFBRTtnQkFDWixLQUFLLEVBQUMsT0FBTzthQUNoQixDQUFDO1lBQ0YsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUM3QyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2QjthQUNJO1lBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztTQUFFO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQVVELFNBQVMsT0FBTyxDQUFDLEdBQVUsRUFBRSxPQUFhO0lBQ3RDLElBQUksRUFBTSxDQUFDO0lBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFLENBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLE9BQU8sRUFBRSxDQUFDO0FBQ2QsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLE1BQVUsRUFBRSxHQUFPLElBQUksT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyJ9

/***/ }),

/***/ "./bin/index.js":
/*!**********************!*\
  !*** ./bin/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./view/PillaredLayouter */ "./bin/view/PillaredLayouter.js");
__webpack_require__(/*! ./view/TileLayouter */ "./bin/view/TileLayouter.js");
var Layout_1 = __webpack_require__(/*! ./view/Layout */ "./bin/view/Layout.js");
exports.Layout = Layout_1.Layout;
var Tokens_1 = __webpack_require__(/*! ./view/Tokens */ "./bin/view/Tokens.js");
exports.FILL = Tokens_1.FILL;
exports.px = Tokens_1.px;
exports.pc = Tokens_1.pc;
exports.LayoutToken = Tokens_1.LayoutToken;
var Layouter_1 = __webpack_require__(/*! ./view/Layouter */ "./bin/view/Layouter.js");
exports.Layouter = Layouter_1.Layouter;
var Config_1 = __webpack_require__(/*! ./Config */ "./bin/Config.js");
exports.Config = Config_1.Config;
var mithril_1 = __webpack_require__(/*! ./mithril */ "./bin/mithril.js");
exports.m = mithril_1.m;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxtQ0FBaUM7QUFDakMsK0JBQTZCO0FBRTdCLHdDQUE2QztBQUFwQywwQkFBQSxNQUFNLENBQUE7QUFDZix3Q0FDNkM7QUFEcEMsd0JBQUEsSUFBSSxDQUFBO0FBQUUsc0JBQUEsRUFBRSxDQUFBO0FBQUUsc0JBQUEsRUFBRSxDQUFBO0FBQ1osK0JBQUEsV0FBVyxDQUFBO0FBQ3BCLDRDQUErQztBQUF0Qyw4QkFBQSxRQUFRLENBQUE7QUFDakIsbUNBQXdDO0FBQS9CLDBCQUFBLE1BQU0sQ0FBQTtBQUNmLHFDQUF5QztBQUFoQyxzQkFBQSxDQUFDLENBQUEifQ==

/***/ }),

/***/ "./bin/mithril.js":
/*!************************!*\
  !*** ./bin/mithril.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.m = __webpack_require__(/*! mithril */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/index.js");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWl0aHJpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9taXRocmlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUWEsUUFBQSxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDIn0=

/***/ }),

/***/ "./bin/view/Layout.js":
/*!****************************!*\
  !*** ./bin/view/Layout.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __webpack_require__(/*! ../mithril */ "./bin/mithril.js");
const Layouter_1 = __webpack_require__(/*! ./Layouter */ "./bin/view/Layouter.js");
class Layout {
    getComponents(node) {
        return !Array.isArray(node.attrs.content) ? node.attrs.content :
            node.attrs.content.map((c) => {
                if (c.compClass) {
                    c.attrs.route = node.attrs.route;
                    return mithril_1.m(c.compClass, c.attrs);
                }
                else {
                    return c;
                }
            });
    }
    getCSS(node) {
        return node.attrs.css || '';
    }
    normalizeContent(components) {
        if (typeof components === 'string') {
            return [mithril_1.m('.hs-leaf', mithril_1.m.trust(components))];
        }
        if (components.length > 0) {
            return components.map((comp) => (comp instanceof Layout) ? comp : mithril_1.m(Layout, { content: comp }));
        }
        return [components];
    }
    view(node) {
        const content = this.normalizeContent(this.getComponents(node));
        let css = Layouter_1.Layouter.createLayout(node.attrs, content);
        const attrs = {
            style: node.style,
            route: node.attrs.route,
            onclick: node.attrs.onclick
        };
        node.attrs.route = undefined;
        if (node.attrs.href) {
            attrs.href = node.attrs.href;
            attrs.oncreate = mithril_1.m.route.link;
            attrs.onupdate = mithril_1.m.route.link;
        }
        return mithril_1.m(`.hs-layout ${css} ${this.getCSS(node)}`, attrs, content.map((c) => c));
    }
}
exports.Layout = Layout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZpZXcvTGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBaUJBLHdDQUFzQztBQUN0Qyx5Q0FBc0M7QUF5QnRDLE1BQWEsTUFBTTtJQW9CTCxhQUFhLENBQUMsSUFBVTtRQUM5QixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFO2dCQUM3QixJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7b0JBQ2IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7b0JBQ2pDLE9BQU8sV0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNsQztxQkFBTTtvQkFDSCxPQUFPLENBQUMsQ0FBQztpQkFDWjtZQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQVFTLE1BQU0sQ0FBQyxJQUFVO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFHTyxnQkFBZ0IsQ0FBQyxVQUE2QztRQUNsRSxJQUFJLE9BQU8sVUFBVSxLQUFLLFFBQVEsRUFBRTtZQUNoQyxPQUFPLENBQUMsV0FBQyxDQUFDLFVBQVUsRUFBRSxXQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksVUFBVSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUU7WUFDckIsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBeUIsRUFBUSxFQUFFLENBQ2xELENBQUMsSUFBSSxZQUFZLE1BQU0sQ0FBQyxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FDakUsQ0FBQztTQUNMO1FBRUQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFxQkQsSUFBSSxDQUFDLElBQVU7UUFDWCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksR0FBRyxHQUFHLG1CQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDckQsTUFBTSxLQUFLLEdBQU87WUFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztZQUN2QixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO1NBQzlCLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQzdCLEtBQUssQ0FBQyxRQUFRLEdBQUcsV0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDOUIsS0FBSyxDQUFDLFFBQVEsR0FBRyxXQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztTQUNqQztRQUNELE9BQU8sV0FBQyxDQUFDLGNBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDO0NBQ0o7QUEzRkQsd0JBMkZDIn0=

/***/ }),

/***/ "./bin/view/Layouter.js":
/*!******************************!*\
  !*** ./bin/view/Layouter.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Tokens_1 = __webpack_require__(/*! ./Tokens */ "./bin/view/Tokens.js");
class Layouter {
    constructor(areaDesc) {
        this.areaDesc = areaDesc;
        this.spacing = 0;
    }
    static translate(params) {
        if (params.length === 0) {
            params.push('');
        }
        return params.map((param) => {
            if (typeof param === 'string') {
                if (param.endsWith('px')) {
                    return Tokens_1.px(parseInt(param));
                }
                if (param.endsWith('%')) {
                    return Tokens_1.pc(parseInt(param));
                }
                if (param.toLowerCase() === 'fill') {
                    return Tokens_1.FILL;
                }
            }
            else {
                return param;
            }
        });
    }
    static register(keyword, style) {
        Layouter.layoutStyles[keyword] = style;
    }
    static createLayout(attrs, components) {
        let css = '';
        Object.keys(Layouter.layoutStyles).some(key => {
            if (attrs[key]) {
                css = new Layouter.layoutStyles[key](Layouter.translate(attrs[key])).getStyles(components);
                attrs[key] = undefined;
                return true;
            }
            return false;
        });
        return css;
    }
}
exports.Layouter = Layouter;
Layouter.layoutStyles = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF5b3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmlldy9MYXlvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVlBLHFDQUF3QztBQXlCeEMsTUFBc0IsUUFBUTtJQXlFMUIsWUFBbUIsUUFBc0I7UUFBdEIsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQVJ6QyxZQUFPLEdBQUcsQ0FBQyxDQUFDO0lBUWdDLENBQUM7SUF6RHJDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBd0I7UUFDN0MsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM3QyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFnQixFQUFFLEVBQUU7WUFDbkMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7Z0JBQzNCLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFBRSxPQUFPLFdBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFBRTtnQkFDekQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUFFLE9BQU8sV0FBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUFFO2dCQUN4RCxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBRyxNQUFNLEVBQUU7b0JBQUUsT0FBTyxhQUFJLENBQUM7aUJBQUM7YUFDcEQ7aUJBQU07Z0JBQ0gsT0FBTyxLQUFLLENBQUM7YUFDaEI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFXTSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQWMsRUFBRSxLQUFxQjtRQUV4RCxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBVU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFTLEVBQUUsVUFBdUI7UUFDekQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNaLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDM0YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztnQkFDdkIsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDOztBQTlETCw0QkEwRkM7QUFyRlUscUJBQVksR0FBdUIsRUFBRSxDQUFDIn0=

/***/ }),

/***/ "./bin/view/PillaredLayouter.js":
/*!**************************************!*\
  !*** ./bin/view/PillaredLayouter.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Layouter_1 = __webpack_require__(/*! ./Layouter */ "./bin/view/Layouter.js");
const Tokens_1 = __webpack_require__(/*! ./Tokens */ "./bin/view/Tokens.js");
exports.PillarLayouts = [
    'columns', 'rows'
];
const cParams = {
    columns: {
        cssClass: '.hs-column-layout',
        fields: ['top', 'bottom', 'left', 'right', 'height', 'width']
    },
    rows: {
        cssClass: '.hs-row-layout',
        fields: ['left', 'right', 'top', 'bottom', 'width', 'height']
    }
};
class PillarLayouter extends Layouter_1.Layouter {
    constructor(params, areaDesc) {
        super(areaDesc);
        this.areaDesc = areaDesc;
        this.fields = params.fields;
        this.cssClass = params.cssClass;
        let n = areaDesc.length - 1;
        let first = 0;
        let last = 0;
        this.unit = areaDesc.some((area) => (area instanceof Tokens_1.PixelToken)) ?
            this.unitPixel : this.unitPercent;
        areaDesc.some((area, i) => ((areaDesc[i] instanceof Tokens_1.DefinedToken) ? ++first < 0 : true));
        areaDesc.some((area, i) => ((areaDesc[n - i] instanceof Tokens_1.DefinedToken) ? ++last < 0 : true));
        this.firstFixed = first;
        this.lastFixed = Math.min(last, areaDesc.length - first);
    }
    getSizes(num) {
        const first = this.firstFixed;
        const last = this.lastFixed;
        const desc = this.areaDesc;
        const len = desc.length;
        return [...Array(num).keys()].map((i) => {
            let size = null;
            let t = null;
            if (i > num - 1 - last) {
                size = desc[len - (num - i)].getSize();
                t = 'end';
            }
            else if (i < first) {
                size = desc[i].getSize();
                t = 'start';
            }
            else if (len > 0 && len === first) {
                size = desc[len - 1].getSize();
                t = 'start';
            }
            return { size: size, code: t, fields: {} };
        });
    }
    unitPercent(num) {
        let f = this.fields;
        let max = 100.0;
        let styles = this.getSizes(num);
        styles.forEach(style => { if (style.size) {
            max = max - style.size;
            num--;
        } });
        let defDim = max / num;
        function pass(styles, ix0, ix1, breakCond) {
            let sumDim = 0;
            styles.some(style => {
                let size = style.size || defDim;
                if (breakCond(style.code)) {
                    return true;
                }
                style.fields[ix0] = sumDim + '%';
                sumDim += size;
                style.fields[ix1] = (100 - sumDim) + '%';
                style.fields[f[5]] = 'auto';
                return false;
            });
        }
        pass(styles, f[2], f[3], (e) => e === 'end');
        pass(styles.reverse(), f[3], f[2], (e) => e !== 'end');
        return styles.reverse();
    }
    unitPixel(num) {
        let styles = this.getSizes(num);
        let f = this.fields;
        let defDim = 100.0 / num;
        let sumDim = 0;
        styles.some((style, i) => {
            if (style.code === 'start') {
                style.fields[f[2]] = sumDim + 'px';
                sumDim += style.size + (this.spacing || 0) + (this.spacing || 0);
                style.fields[f[3]] = 'auto';
                style.fields[f[5]] = style.size + 'px';
            }
            else if (style.code === null) {
                style.fields[f[2]] = (sumDim > 0) ? (sumDim + 'px') : (i * defDim + '%');
                sumDim = -1;
                style.fields[f[3]] = (100 - (i + 1) * defDim) + '%';
                style.fields[f[5]] = 'auto';
            }
            else if (style.code === 'end') {
                return true;
            }
            return false;
        });
        sumDim = 0;
        styles.slice().reverse().some((style, i) => {
            style.fields[f[3]] = sumDim + 'px';
            if (style.code === 'end') {
                sumDim += style.size + (this.spacing || 0) + (this.spacing || 0);
                style.fields[f[2]] = 'auto';
                style.fields[f[5]] = style.size + 'px';
            }
            else {
                if (sumDim > 0 && style.code !== 'start') {
                    style.fields[f[5]] = 'auto';
                }
                return true;
            }
            return false;
        });
        return styles;
    }
    getStyles(components) {
        let f = this.fields;
        let styles = this.unit(components.length);
        components.map((c, i) => {
            c.style = `${f[0]}:0%; ${f[1]}:0%; `;
            Object.keys(styles[i].fields).forEach((st) => { c.style += `${st}: ${styles[i].fields[st]};`; });
        });
        return this.cssClass;
    }
}
class Columns extends PillarLayouter {
    constructor(areaDesc) {
        super(cParams[exports.PillarLayouts[0]], areaDesc);
        this.areaDesc = areaDesc;
    }
}
class Rows extends PillarLayouter {
    constructor(areaDesc) {
        super(cParams[exports.PillarLayouts[1]], areaDesc);
        this.areaDesc = areaDesc;
    }
}
Layouter_1.Layouter.register(exports.PillarLayouts[0], Columns);
Layouter_1.Layouter.register(exports.PillarLayouts[1], Rows);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlsbGFyZWRMYXlvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3L1BpbGxhcmVkTGF5b3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUEyQ0EseUNBQTBDO0FBQzFDLHFDQUV3QztBQWdCM0IsUUFBQSxhQUFhLEdBQUc7SUFDekIsU0FBUyxFQUFFLE1BQU07Q0FDcEIsQ0FBQztBQUtGLE1BQU0sT0FBTyxHQUFHO0lBQ1osT0FBTyxFQUFnQjtRQUNuQixRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDO0tBQ2hFO0lBQ0QsSUFBSSxFQUFnQjtRQUNoQixRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0tBQ2hFO0NBQ0osQ0FBQztBQU9GLE1BQWUsY0FBZSxTQUFRLG1CQUFRO0lBYTFDLFlBQVksTUFBbUIsRUFBUyxRQUFzQjtRQUMxRCxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFEb0IsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUUxRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBRWhDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksSUFBSSxHQUFJLENBQUMsQ0FBQztRQUVkLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxZQUFZLG1CQUFV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

/***/ }),

/***/ "./bin/view/TileLayouter.js":
/*!**********************************!*\
  !*** ./bin/view/TileLayouter.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Layouter_1 = __webpack_require__(/*! ./Layouter */ "./bin/view/Layouter.js");
const Tokens_1 = __webpack_require__(/*! ./Tokens */ "./bin/view/Tokens.js");
class TileLayouter extends Layouter_1.Layouter {
    constructor(areaDesc) {
        super(areaDesc);
        this.areaDesc = areaDesc;
        this.unit = areaDesc.some((area) => (area instanceof Tokens_1.PixelToken)) ?
            this.unitPixel : this.unitPercent;
    }
    unitPercent(num) {
        const desc = this.areaDesc;
        const fill = this.areaDesc.some(a => (a instanceof Tokens_1.FillToken));
        const root = Math.sqrt(num);
        const rows = Math.round(root);
        let cols = Math.floor(root);
        if (root > cols) {
            cols++;
        }
        let width = (desc[0] instanceof Tokens_1.DefinedToken) ? desc[0].getSize() : undefined;
        let height = (desc[1] instanceof Tokens_1.DefinedToken) ? desc[1].getSize() : width;
        width = width || 100 / cols;
        height = height || 100 / rows;
        let left = 0;
        let top = 0;
        let styles = [...Array(num).keys()].map(i => {
            let r = 'auto';
            let w = width + '%';
            let b = 'auto';
            let h = height + '%';
            if ((left + 2 * width) > 100 && fill) {
                r = '0%';
                w = 'auto';
            }
            if ((top + 2 * height) > 100 && fill) {
                b = '0%';
                h = 'auto';
            }
            const style = `
                top: ${Math.floor(top)}%; bottom:${b};
                left: ${left}%;           right:${r};
                width: ${w};              height: ${h};
            `;
            if (Math.round(left += width) > 100 - Math.floor(width)) {
                left = 0;
                top += height;
            }
            return style;
        });
        return styles;
    }
    unitPixel(num) {
        const desc = this.areaDesc;
        const root = Math.sqrt(num);
        const rows = Math.round(root);
        let cols = Math.floor(root);
        if (root > cols) {
            cols++;
        }
        let width = (desc[0] instanceof Tokens_1.DefinedToken) ? desc[0].getSize() : undefined;
        let height = (desc[1] instanceof Tokens_1.DefinedToken) ? desc[1].getSize() : width;
        width = width || 100 / cols;
        height = height || 100 / rows;
        let left = 0;
        let top = 0;
        let styles = [...Array(num).keys()].map(i => {
            let r = 'auto';
            let w = width + 'px';
            let b = 'auto';
            let h = height + 'px';
            const style = `
                top: ${Math.floor(top)}%; bottom:${b};
                left: ${left}%;           right:${r};
                width: ${w};              height: ${h};
            `;
            if (Math.round(left += width) > 100 - Math.floor(width)) {
                left = 0;
                top += height;
            }
            return style;
        });
        return styles;
    }
    getStyles(components) {
        let styles = this.unit(components.length);
        components.map((c, i) => {
            c.style = styles[i];
        });
        return '.hs-tile-layout';
    }
}
Layouter_1.Layouter.register('tiles', TileLayouter);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlsZUxheW91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZpZXcvVGlsZUxheW91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBOERBLHlDQUEwQztBQUMxQyxxQ0FHd0M7QUFPeEMsTUFBTSxZQUFhLFNBQVEsbUJBQVE7SUFRL0IsWUFBbUIsUUFBc0I7UUFDckMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBREQsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUlyQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksWUFBWSxtQkFBVSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQzFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUMsQ0FBQztJQUVPLFdBQVcsQ0FBQyxHQUFVO1FBQzFCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDM0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxrQkFBUyxDQUFDLENBQUMsQ0FBQztRQUMvRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLElBQUksR0FBRyxJQUFJLEVBQUU7WUFBRSxJQUFJLEVBQUUsQ0FBQztTQUFFO1FBQzVCLElBQUksS0FBSyxHQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLHFCQUFZLENBQUMsQ0FBQSxDQUFDLENBQUMs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

/***/ }),

/***/ "./bin/view/Tokens.js":
/*!****************************!*\
  !*** ./bin/view/Tokens.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class LayoutToken {
    constructor(size) {
        this.size = size;
    }
    getSize() { return this.size; }
}
exports.LayoutToken = LayoutToken;
class DefinedToken extends LayoutToken {
    constructor(size) { super(size); }
}
exports.DefinedToken = DefinedToken;
class FillToken extends LayoutToken {
    constructor() { super(-1); }
}
exports.FillToken = FillToken;
class PixelToken extends DefinedToken {
    constructor(size) { super(size); }
}
exports.PixelToken = PixelToken;
class PercentToken extends DefinedToken {
    constructor(size) { super(size); }
}
exports.PercentToken = PercentToken;
function px(px) { return new PixelToken(px); }
exports.px = px;
function pc(pc) { return new PercentToken(pc); }
exports.pc = pc;
exports.FILL = new FillToken();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZpZXcvVG9rZW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsTUFBc0IsV0FBVztJQUM3QixZQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFHLENBQUM7SUFDN0IsT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Q0FDekM7QUFIRCxrQ0FHQztBQUtELE1BQXNCLFlBQWEsU0FBUSxXQUFXO0lBQ2xELFlBQVksSUFBWSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDN0M7QUFGRCxvQ0FFQztBQUtELE1BQWEsU0FBVSxTQUFRLFdBQVc7SUFDdEMsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUMvQjtBQUZELDhCQUVDO0FBS0QsTUFBYSxVQUFXLFNBQVEsWUFBWTtJQUN4QyxZQUFZLElBQVcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzVDO0FBRkQsZ0NBRUM7QUFLRCxNQUFhLFlBQWEsU0FBUSxZQUFZO0lBQzFDLFlBQVksSUFBVyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDNUM7QUFGRCxvQ0FFQztBQU1ELFNBQWdCLEVBQUUsQ0FBQyxFQUFTLElBQU0sT0FBTyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBOUQsZ0JBQThEO0FBTTlELFNBQWdCLEVBQUUsQ0FBQyxFQUFTLElBQU0sT0FBTyxJQUFJLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBaEUsZ0JBQWdFO0FBS25ELFFBQUEsSUFBSSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUMifQ==

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oc0xheW91dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oc0xheW91dC8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL21pdGhyaWwvYXBpL21vdW50LXJlZHJhdy5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL21pdGhyaWwvYXBpL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL21pdGhyaWwvaHlwZXJzY3JpcHQuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9taXRocmlsL2luZGV4LmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvbWl0aHJpbC9tb3VudC1yZWRyYXcuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9taXRocmlsL3BhdGhuYW1lL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL21pdGhyaWwvcGF0aG5hbWUvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9taXRocmlsL3BhdGhuYW1lL2NvbXBpbGVUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL21pdGhyaWwvcGF0aG5hbWUvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9taXRocmlsL3Byb21pc2UvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9taXRocmlsL3Byb21pc2UvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL21pdGhyaWwvcXVlcnlzdHJpbmcvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9taXRocmlsL3F1ZXJ5c3RyaW5nL3BhcnNlLmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvbWl0aHJpbC9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9taXRocmlsL3JlbmRlci9mcmFnbWVudC5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVuZGVyL2h5cGVyc2NyaXB0LmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvbWl0aHJpbC9yZW5kZXIvaHlwZXJzY3JpcHRWbm9kZS5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVuZGVyL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVuZGVyL3RydXN0LmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvbWl0aHJpbC9yZW5kZXIvdm5vZGUuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9taXRocmlsL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9taXRocmlsL3JlcXVlc3QvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL21pdGhyaWwvcm91dGUuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2hzTGF5b3V0Lyh3ZWJwYWNrKS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2hzTGF5b3V0Lyh3ZWJwYWNrKS9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8od2VicGFjaykvbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvLi9iaW4vQ29uZmlnLmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly4vYmluL2luZGV4LmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly4vYmluL21pdGhyaWwuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvLi9iaW4vdmlldy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvLi9iaW4vdmlldy9MYXlvdXRlci5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8uL2Jpbi92aWV3L1BpbGxhcmVkTGF5b3V0ZXIuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvLi9iaW4vdmlldy9UaWxlTGF5b3V0ZXIuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvLi9iaW4vdmlldy9Ub2tlbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRlk7O0FBRVosWUFBWSxtQkFBTyxDQUFDLDRIQUFpQjs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQyxRQUFRO0FBQ1IsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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N0IsWUFBWSxlQUFlO0FBQzNCO0FBQ0EsWUFBWSxlQUFlO0FBQzNCLFlBQVksV0FBVztBQUN2QixZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBLFlBQVksK0JBQStCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsc0JBQXNCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFD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VztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG9CQUFvQiwyQkFBMkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGVBQWU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1OEJZOztBQUVaLFlBQVksbUJBQU8sQ0FBQyw0SEFBaUI7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUFk7O0FBRVo7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUM5Qlk7O0FBRVosc0JBQXNCLG1CQUFPLENBQUMsaUlBQW1CO0FBQ2pELGtCQUFrQixtQkFBTyxDQUFDLDJIQUFnQjs7QUFFMUMsaUJBQWlCLG1CQUFPLENBQUMsaUlBQW1COzs7Ozs7Ozs7Ozs7O0FDTGhDOztBQUVaLG9CQUFvQixtQkFBTyxDQUFDLGdJQUFtQjs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLFlBQVk7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqTVk7O0FBRVosa0JBQWtCLG1CQUFPLENBQUMsMkhBQWdCOztBQUUxQyxpQkFBaUIsbUJBQU8sQ0FBQyx1SEFBYzs7Ozs7Ozs7Ozs7O0FDSnZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQixFQUFFO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDekxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQixFQUFFLFVBQVU7QUFDbkQsd0JBQXdCLEtBQUssRUFBRSxtQkFBbUI7QUFDbEQseUJBQXlCLEdBQUcsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0IsRUFBRSxVQUFVO0FBQ25ELHdCQUF3QixLQUFLLEVBQUUsbUJBQW1CO0FBQ2xELHlCQUF5QixHQUFHLHdCQUF3QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHUySjs7Ozs7Ozs7Ozs7O0FDN0Y5QjtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQkFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQSxpQkFBaUIsNkJBQTZCO0FBQzlDO0FBQ0E7QUFDQSwyQ0FBMkMsbW9DIiwiZmlsZSI6ImhzTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9iaW4vaW5kZXguanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgVm5vZGUgPSByZXF1aXJlKFwiLi4vcmVuZGVyL3Zub2RlXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocmVuZGVyLCBzY2hlZHVsZSwgY29uc29sZSkge1xuXHR2YXIgc3Vic2NyaXB0aW9ucyA9IFtdXG5cdHZhciByZW5kZXJpbmcgPSBmYWxzZVxuXHR2YXIgcGVuZGluZyA9IGZhbHNlXG5cblx0ZnVuY3Rpb24gc3luYygpIHtcblx0XHRpZiAocmVuZGVyaW5nKSB0aHJvdyBuZXcgRXJyb3IoXCJOZXN0ZWQgbS5yZWRyYXcuc3luYygpIGNhbGxcIilcblx0XHRyZW5kZXJpbmcgPSB0cnVlXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzY3JpcHRpb25zLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHR0cnkgeyByZW5kZXIoc3Vic2NyaXB0aW9uc1tpXSwgVm5vZGUoc3Vic2NyaXB0aW9uc1tpICsgMV0pLCByZWRyYXcpIH1cblx0XHRcdGNhdGNoIChlKSB7IGNvbnNvbGUuZXJyb3IoZSkgfVxuXHRcdH1cblx0XHRyZW5kZXJpbmcgPSBmYWxzZVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVkcmF3KCkge1xuXHRcdGlmICghcGVuZGluZykge1xuXHRcdFx0cGVuZGluZyA9IHRydWVcblx0XHRcdHNjaGVkdWxlKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRwZW5kaW5nID0gZmFsc2Vcblx0XHRcdFx0c3luYygpXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdHJlZHJhdy5zeW5jID0gc3luY1xuXG5cdGZ1bmN0aW9uIG1vdW50KHJvb3QsIGNvbXBvbmVudCkge1xuXHRcdGlmIChjb21wb25lbnQgIT0gbnVsbCAmJiBjb21wb25lbnQudmlldyA9PSBudWxsICYmIHR5cGVvZiBjb21wb25lbnQgIT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcIm0ubW91bnQoZWxlbWVudCwgY29tcG9uZW50KSBleHBlY3RzIGEgY29tcG9uZW50LCBub3QgYSB2bm9kZVwiKVxuXHRcdH1cblxuXHRcdHZhciBpbmRleCA9IHN1YnNjcmlwdGlvbnMuaW5kZXhPZihyb290KVxuXHRcdGlmIChpbmRleCA+PSAwKSB7XG5cdFx0XHRzdWJzY3JpcHRpb25zLnNwbGljZShpbmRleCwgMilcblx0XHRcdHJlbmRlcihyb290LCBbXSwgcmVkcmF3KVxuXHRcdH1cblxuXHRcdGlmIChjb21wb25lbnQgIT0gbnVsbCkge1xuXHRcdFx0c3Vic2NyaXB0aW9ucy5wdXNoKHJvb3QsIGNvbXBvbmVudClcblx0XHRcdHJlbmRlcihyb290LCBWbm9kZShjb21wb25lbnQpLCByZWRyYXcpXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHttb3VudDogbW91bnQsIHJlZHJhdzogcmVkcmF3fVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFZub2RlID0gcmVxdWlyZShcIi4uL3JlbmRlci92bm9kZVwiKVxudmFyIG0gPSByZXF1aXJlKFwiLi4vcmVuZGVyL2h5cGVyc2NyaXB0XCIpXG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoXCIuLi9wcm9taXNlL3Byb21pc2VcIilcblxudmFyIGJ1aWxkUGF0aG5hbWUgPSByZXF1aXJlKFwiLi4vcGF0aG5hbWUvYnVpbGRcIilcbnZhciBwYXJzZVBhdGhuYW1lID0gcmVxdWlyZShcIi4uL3BhdGhuYW1lL3BhcnNlXCIpXG52YXIgY29tcGlsZVRlbXBsYXRlID0gcmVxdWlyZShcIi4uL3BhdGhuYW1lL2NvbXBpbGVUZW1wbGF0ZVwiKVxudmFyIGFzc2lnbiA9IHJlcXVpcmUoXCIuLi9wYXRobmFtZS9hc3NpZ25cIilcblxudmFyIHNlbnRpbmVsID0ge31cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkd2luZG93LCBtb3VudFJlZHJhdykge1xuXHR2YXIgZmlyZUFzeW5jXG5cblx0ZnVuY3Rpb24gc2V0UGF0aChwYXRoLCBkYXRhLCBvcHRpb25zKSB7XG5cdFx0cGF0aCA9IGJ1aWxkUGF0aG5hbWUocGF0aCwgZGF0YSlcblx0XHRpZiAoZmlyZUFzeW5jICE9IG51bGwpIHtcblx0XHRcdGZpcmVBc3luYygpXG5cdFx0XHR2YXIgc3RhdGUgPSBvcHRpb25zID8gb3B0aW9ucy5zdGF0ZSA6IG51bGxcblx0XHRcdHZhciB0aXRsZSA9IG9wdGlvbnMgPyBvcHRpb25zLnRpdGxlIDogbnVsbFxuXHRcdFx0aWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5yZXBsYWNlKSAkd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHN0YXRlLCB0aXRsZSwgcm91dGUucHJlZml4ICsgcGF0aClcblx0XHRcdGVsc2UgJHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSwgdGl0bGUsIHJvdXRlLnByZWZpeCArIHBhdGgpXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0JHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcm91dGUucHJlZml4ICsgcGF0aFxuXHRcdH1cblx0fVxuXG5cdHZhciBjdXJyZW50UmVzb2x2ZXIgPSBzZW50aW5lbCwgY29tcG9uZW50LCBhdHRycywgY3VycmVudFBhdGgsIGxhc3RVcGRhdGVcblxuXHR2YXIgU0tJUCA9IHJvdXRlLlNLSVAgPSB7fVxuXG5cdGZ1bmN0aW9uIHJvdXRlKHJvb3QsIGRlZmF1bHRSb3V0ZSwgcm91dGVzKSB7XG5cdFx0aWYgKHJvb3QgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKFwiRW5zdXJlIHRoZSBET00gZWxlbWVudCB0aGF0IHdhcyBwYXNzZWQgdG8gYG0ucm91dGVgIGlzIG5vdCB1bmRlZmluZWRcIilcblx0XHQvLyAwID0gc3RhcnRcblx0XHQvLyAxID0gaW5pdFxuXHRcdC8vIDIgPSByZWFkeVxuXHRcdHZhciBzdGF0ZSA9IDBcblxuXHRcdHZhciBjb21waWxlZCA9IE9iamVjdC5rZXlzKHJvdXRlcykubWFwKGZ1bmN0aW9uKHJvdXRlKSB7XG5cdFx0XHRpZiAocm91dGVbMF0gIT09IFwiL1wiKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJSb3V0ZXMgbXVzdCBzdGFydCB3aXRoIGEgYC9gXCIpXG5cdFx0XHRpZiAoKC86KFteXFwvXFwuLV0rKShcXC57M30pPzovKS50ZXN0KHJvdXRlKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJSb3V0ZSBwYXJhbWV0ZXIgbmFtZXMgbXVzdCBiZSBzZXBhcmF0ZWQgd2l0aCBlaXRoZXIgYC9gLCBgLmAsIG9yIGAtYFwiKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0cm91dGU6IHJvdXRlLFxuXHRcdFx0XHRjb21wb25lbnQ6IHJvdXRlc1tyb3V0ZV0sXG5cdFx0XHRcdGNoZWNrOiBjb21waWxlVGVtcGxhdGUocm91dGUpLFxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0dmFyIGNhbGxBc3luYyA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHNldEltbWVkaWF0ZSA6IHNldFRpbWVvdXRcblx0XHR2YXIgcCA9IFByb21pc2UucmVzb2x2ZSgpXG5cdFx0dmFyIHNjaGVkdWxlZCA9IGZhbHNlXG5cdFx0dmFyIG9ucmVtb3ZlXG5cblx0XHRmaXJlQXN5bmMgPSBudWxsXG5cblx0XHRpZiAoZGVmYXVsdFJvdXRlICE9IG51bGwpIHtcblx0XHRcdHZhciBkZWZhdWx0RGF0YSA9IHBhcnNlUGF0aG5hbWUoZGVmYXVsdFJvdXRlKVxuXG5cdFx0XHRpZiAoIWNvbXBpbGVkLnNvbWUoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkuY2hlY2soZGVmYXVsdERhdGEpIH0pKSB7XG5cdFx0XHRcdHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcIkRlZmF1bHQgcm91dGUgZG9lc24ndCBtYXRjaCBhbnkga25vd24gcm91dGVzXCIpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcmVzb2x2ZVJvdXRlKCkge1xuXHRcdFx0c2NoZWR1bGVkID0gZmFsc2Vcblx0XHRcdC8vIENvbnNpZGVyIHRoZSBwYXRobmFtZSBob2xpc3RpY2FsbHkuIFRoZSBwcmVmaXggbWlnaHQgZXZlbiBiZSBpbnZhbGlkLFxuXHRcdFx0Ly8gYnV0IHRoYXQncyBub3Qgb3VyIHByb2JsZW0uXG5cdFx0XHR2YXIgcHJlZml4ID0gJHdpbmRvdy5sb2NhdGlvbi5oYXNoXG5cdFx0XHRpZiAocm91dGUucHJlZml4WzBdICE9PSBcIiNcIikge1xuXHRcdFx0XHRwcmVmaXggPSAkd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHByZWZpeFxuXHRcdFx0XHRpZiAocm91dGUucHJlZml4WzBdICE9PSBcIj9cIikge1xuXHRcdFx0XHRcdHByZWZpeCA9ICR3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyBwcmVmaXhcblx0XHRcdFx0XHRpZiAocHJlZml4WzBdICE9PSBcIi9cIikgcHJlZml4ID0gXCIvXCIgKyBwcmVmaXhcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gVGhpcyBzZWVtaW5nbHkgdXNlbGVzcyBgLmNvbmNhdCgpYCBzcGVlZHMgdXAgdGhlIHRlc3RzIHF1aXRlIGEgYml0LFxuXHRcdFx0Ly8gc2luY2UgdGhlIHJlcHJlc2VudGF0aW9uIGlzIGNvbnNpc3RlbnRseSBhIHJlbGF0aXZlbHkgcG9vcmx5XG5cdFx0XHQvLyBvcHRpbWl6ZWQgY29ucyBzdHJpbmcuXG5cdFx0XHR2YXIgcGF0aCA9IHByZWZpeC5jb25jYXQoKVxuXHRcdFx0XHQucmVwbGFjZSgvKD86JVthLWY4OV1bYS1mMC05XSkrL2dpbSwgZGVjb2RlVVJJQ29tcG9uZW50KVxuXHRcdFx0XHQuc2xpY2Uocm91dGUucHJlZml4Lmxlbmd0aClcblx0XHRcdHZhciBkYXRhID0gcGFyc2VQYXRobmFtZShwYXRoKVxuXG5cdFx0XHRhc3NpZ24oZGF0YS5wYXJhbXMsICR3aW5kb3cuaGlzdG9yeS5zdGF0ZSlcblxuXHRcdFx0ZnVuY3Rpb24gZmFpbCgpIHtcblx0XHRcdFx0aWYgKHBhdGggPT09IGRlZmF1bHRSb3V0ZSkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IHJlc29sdmUgZGVmYXVsdCByb3V0ZSBcIiArIGRlZmF1bHRSb3V0ZSlcblx0XHRcdFx0c2V0UGF0aChkZWZhdWx0Um91dGUsIG51bGwsIHtyZXBsYWNlOiB0cnVlfSlcblx0XHRcdH1cblxuXHRcdFx0bG9vcCgwKVxuXHRcdFx0ZnVuY3Rpb24gbG9vcChpKSB7XG5cdFx0XHRcdC8vIDAgPSBpbml0XG5cdFx0XHRcdC8vIDEgPSBzY2hlZHVsZWRcblx0XHRcdFx0Ly8gMiA9IGRvbmVcblx0XHRcdFx0Zm9yICg7IGkgPCBjb21waWxlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChjb21waWxlZFtpXS5jaGVjayhkYXRhKSkge1xuXHRcdFx0XHRcdFx0dmFyIHBheWxvYWQgPSBjb21waWxlZFtpXS5jb21wb25lbnRcblx0XHRcdFx0XHRcdHZhciBtYXRjaGVkUm91dGUgPSBjb21waWxlZFtpXS5yb3V0ZVxuXHRcdFx0XHRcdFx0dmFyIGxvY2FsQ29tcCA9IHBheWxvYWRcblx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBsYXN0VXBkYXRlID0gZnVuY3Rpb24oY29tcCkge1xuXHRcdFx0XHRcdFx0XHRpZiAodXBkYXRlICE9PSBsYXN0VXBkYXRlKSByZXR1cm5cblx0XHRcdFx0XHRcdFx0aWYgKGNvbXAgPT09IFNLSVApIHJldHVybiBsb29wKGkgKyAxKVxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnQgPSBjb21wICE9IG51bGwgJiYgKHR5cGVvZiBjb21wLnZpZXcgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgY29tcCA9PT0gXCJmdW5jdGlvblwiKT8gY29tcCA6IFwiZGl2XCJcblx0XHRcdFx0XHRcdFx0YXR0cnMgPSBkYXRhLnBhcmFtcywgY3VycmVudFBhdGggPSBwYXRoLCBsYXN0VXBkYXRlID0gbnVsbFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50UmVzb2x2ZXIgPSBwYXlsb2FkLnJlbmRlciA/IHBheWxvYWQgOiBudWxsXG5cdFx0XHRcdFx0XHRcdGlmIChzdGF0ZSA9PT0gMikgbW91bnRSZWRyYXcucmVkcmF3KClcblx0XHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RhdGUgPSAyXG5cdFx0XHRcdFx0XHRcdFx0bW91bnRSZWRyYXcucmVkcmF3LnN5bmMoKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBUaGVyZSdzIG5vIHVuZGVyc3RhdGluZyBob3cgbXVjaCBJICp3aXNoKiBJIGNvdWxkXG5cdFx0XHRcdFx0XHQvLyB1c2UgYGFzeW5jYC9gYXdhaXRgIGhlcmUuLi5cblx0XHRcdFx0XHRcdGlmIChwYXlsb2FkLnZpZXcgfHwgdHlwZW9mIHBheWxvYWQgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRwYXlsb2FkID0ge31cblx0XHRcdFx0XHRcdFx0dXBkYXRlKGxvY2FsQ29tcClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2UgaWYgKHBheWxvYWQub25tYXRjaCkge1xuXHRcdFx0XHRcdFx0XHRwLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBwYXlsb2FkLm9ubWF0Y2goZGF0YS5wYXJhbXMsIHBhdGgsIG1hdGNoZWRSb3V0ZSlcblx0XHRcdFx0XHRcdFx0fSkudGhlbih1cGRhdGUsIGZhaWwpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIHVwZGF0ZShcImRpdlwiKVxuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZhaWwoKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFNldCBpdCB1bmNvbmRpdGlvbmFsbHkgc28gYG0ucm91dGUuc2V0YCBhbmQgYG0ucm91dGUuTGlua2AgYm90aCB3b3JrLFxuXHRcdC8vIGV2ZW4gaWYgbmVpdGhlciBgcHVzaFN0YXRlYCBub3IgYGhhc2hjaGFuZ2VgIGFyZSBzdXBwb3J0ZWQuIEl0J3Ncblx0XHQvLyBjbGVhcmVkIGlmIGBoYXNoY2hhbmdlYCBpcyB1c2VkLCBzaW5jZSB0aGF0IG1ha2VzIGl0IGF1dG9tYXRpY2FsbHlcblx0XHQvLyBhc3luYy5cblx0XHRmaXJlQXN5bmMgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICghc2NoZWR1bGVkKSB7XG5cdFx0XHRcdHNjaGVkdWxlZCA9IHRydWVcblx0XHRcdFx0Y2FsbEFzeW5jKHJlc29sdmVSb3V0ZSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodHlwZW9mICR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0b25yZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgZmlyZUFzeW5jLCBmYWxzZSlcblx0XHRcdH1cblx0XHRcdCR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIGZpcmVBc3luYywgZmFsc2UpXG5cdFx0fSBlbHNlIGlmIChyb3V0ZS5wcmVmaXhbMF0gPT09IFwiI1wiKSB7XG5cdFx0XHRmaXJlQXN5bmMgPSBudWxsXG5cdFx0XHRvbnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIHJlc29sdmVSb3V0ZSwgZmFsc2UpXG5cdFx0XHR9XG5cdFx0XHQkd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIHJlc29sdmVSb3V0ZSwgZmFsc2UpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1vdW50UmVkcmF3Lm1vdW50KHJvb3QsIHtcblx0XHRcdG9uYmVmb3JldXBkYXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c3RhdGUgPSBzdGF0ZSA/IDIgOiAxXG5cdFx0XHRcdHJldHVybiAhKCFzdGF0ZSB8fCBzZW50aW5lbCA9PT0gY3VycmVudFJlc29sdmVyKVxuXHRcdFx0fSxcblx0XHRcdG9uY3JlYXRlOiByZXNvbHZlUm91dGUsXG5cdFx0XHRvbnJlbW92ZTogb25yZW1vdmUsXG5cdFx0XHR2aWV3OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCFzdGF0ZSB8fCBzZW50aW5lbCA9PT0gY3VycmVudFJlc29sdmVyKSByZXR1cm5cblx0XHRcdFx0Ly8gV3JhcCBpbiBhIGZyYWdtZW50IHRvIHByZXNlcnZlIGV4aXN0aW5nIGtleSBzZW1hbnRpY3Ncblx0XHRcdFx0dmFyIHZub2RlID0gW1Zub2RlKGNvbXBvbmVudCwgYXR0cnMua2V5LCBhdHRycyldXG5cdFx0XHRcdGlmIChjdXJyZW50UmVzb2x2ZXIpIHZub2RlID0gY3VycmVudFJlc29sdmVyLnJlbmRlcih2bm9kZVswXSlcblx0XHRcdFx0cmV0dXJuIHZub2RlXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblx0cm91dGUuc2V0ID0gZnVuY3Rpb24ocGF0aCwgZGF0YSwgb3B0aW9ucykge1xuXHRcdGlmIChsYXN0VXBkYXRlICE9IG51bGwpIHtcblx0XHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cdFx0XHRvcHRpb25zLnJlcGxhY2UgPSB0cnVlXG5cdFx0fVxuXHRcdGxhc3RVcGRhdGUgPSBudWxsXG5cdFx0c2V0UGF0aChwYXRoLCBkYXRhLCBvcHRpb25zKVxuXHR9XG5cdHJvdXRlLmdldCA9IGZ1bmN0aW9uKCkge3JldHVybiBjdXJyZW50UGF0aH1cblx0cm91dGUucHJlZml4ID0gXCIjIVwiXG5cdHJvdXRlLkxpbmsgPSB7XG5cdFx0dmlldzogZnVuY3Rpb24odm5vZGUpIHtcblx0XHRcdHZhciBvcHRpb25zID0gdm5vZGUuYXR0cnMub3B0aW9uc1xuXHRcdFx0Ly8gUmVtb3ZlIHRoZXNlIHNvIHRoZXkgZG9uJ3QgZ2V0IG92ZXJ3cml0dGVuXG5cdFx0XHR2YXIgYXR0cnMgPSB7fSwgb25jbGljaywgaHJlZlxuXHRcdFx0YXNzaWduKGF0dHJzLCB2bm9kZS5hdHRycylcblx0XHRcdC8vIFRoZSBmaXJzdCB0d28gYXJlIGludGVybmFsLCBidXQgdGhlIHJlc3QgYXJlIG1hZ2ljIGF0dHJpYnV0ZXNcblx0XHRcdC8vIHRoYXQgbmVlZCBjZW5zb3JlZCB0byBub3Qgc2NyZXcgdXAgcmVuZGVyaW5nLlxuXHRcdFx0YXR0cnMuc2VsZWN0b3IgPSBhdHRycy5vcHRpb25zID0gYXR0cnMua2V5ID0gYXR0cnMub25pbml0ID1cblx0XHRcdGF0dHJzLm9uY3JlYXRlID0gYXR0cnMub25iZWZvcmV1cGRhdGUgPSBhdHRycy5vbnVwZGF0ZSA9XG5cdFx0XHRhdHRycy5vbmJlZm9yZXJlbW92ZSA9IGF0dHJzLm9ucmVtb3ZlID0gbnVsbFxuXG5cdFx0XHQvLyBEbyB0aGlzIG5vdyBzbyB3ZSBjYW4gZ2V0IHRoZSBtb3N0IGN1cnJlbnQgYGhyZWZgIGFuZCBgZGlzYWJsZWRgLlxuXHRcdFx0Ly8gVGhvc2UgYXR0cmlidXRlcyBtYXkgYWxzbyBiZSBzcGVjaWZpZWQgaW4gdGhlIHNlbGVjdG9yLCBhbmQgd2Vcblx0XHRcdC8vIHNob3VsZCBob25vciB0aGF0LlxuXHRcdFx0dmFyIGNoaWxkID0gbSh2bm9kZS5hdHRycy5zZWxlY3RvciB8fCBcImFcIiwgYXR0cnMsIHZub2RlLmNoaWxkcmVuKVxuXG5cdFx0XHQvLyBMZXQncyBwcm92aWRlIGEgKnJpZ2h0KiB3YXkgdG8gZGlzYWJsZSBhIHJvdXRlIGxpbmssIHJhdGhlciB0aGFuXG5cdFx0XHQvLyBsZXR0aW5nIHBlb3BsZSBzY3JldyB1cCBhY2Nlc3NpYmlsaXR5IG9uIGFjY2lkZW50LlxuXHRcdFx0Ly9cblx0XHRcdC8vIFRoZSBhdHRyaWJ1dGUgaXMgY29lcmNlZCBzbyB1c2VycyBkb24ndCBnZXQgc3VycHJpc2VkIG92ZXJcblx0XHRcdC8vIGBkaXNhYmxlZDogMGAgcmVzdWx0aW5nIGluIGEgYnV0dG9uIHRoYXQncyBzb21laG93IHJvdXRhYmxlXG5cdFx0XHQvLyBkZXNwaXRlIGJlaW5nIHZpc2libHkgZGlzYWJsZWQuXG5cdFx0XHRpZiAoY2hpbGQuYXR0cnMuZGlzYWJsZWQgPSBCb29sZWFuKGNoaWxkLmF0dHJzLmRpc2FibGVkKSkge1xuXHRcdFx0XHRjaGlsZC5hdHRycy5ocmVmID0gbnVsbFxuXHRcdFx0XHRjaGlsZC5hdHRyc1tcImFyaWEtZGlzYWJsZWRcIl0gPSBcInRydWVcIlxuXHRcdFx0XHQvLyBJZiB5b3UgKnJlYWxseSogZG8gd2FudCB0byBkbyB0aGlzIG9uIGEgZGlzYWJsZWQgbGluaywgdXNlXG5cdFx0XHRcdC8vIGFuIGBvbmNyZWF0ZWAgaG9vayB0byBhZGQgaXQuXG5cdFx0XHRcdGNoaWxkLmF0dHJzLm9uY2xpY2sgPSBudWxsXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbmNsaWNrID0gY2hpbGQuYXR0cnMub25jbGlja1xuXHRcdFx0XHRocmVmID0gY2hpbGQuYXR0cnMuaHJlZlxuXHRcdFx0XHRjaGlsZC5hdHRycy5ocmVmID0gcm91dGUucHJlZml4ICsgaHJlZlxuXHRcdFx0XHRjaGlsZC5hdHRycy5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdHZhciByZXN1bHRcblx0XHRcdFx0XHRpZiAodHlwZW9mIG9uY2xpY2sgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gb25jbGljay5jYWxsKGUuY3VycmVudFRhcmdldCwgZSlcblx0XHRcdFx0XHR9IGVsc2UgaWYgKG9uY2xpY2sgPT0gbnVsbCB8fCB0eXBlb2Ygb25jbGljayAhPT0gXCJvYmplY3RcIikge1xuXHRcdFx0XHRcdFx0Ly8gZG8gbm90aGluZ1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIG9uY2xpY2suaGFuZGxlRXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0b25jbGljay5oYW5kbGVFdmVudChlKVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEFkYXB0ZWQgZnJvbSBSZWFjdCBSb3V0ZXIncyBpbXBsZW1lbnRhdGlvbjpcblx0XHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vUmVhY3RUcmFpbmluZy9yZWFjdC1yb3V0ZXIvYmxvYi81MjBhMGFjZDQ4YWUxYjA2NmViMGIwN2Q2ZDRkMTc5MGExZDAyNDgyL3BhY2thZ2VzL3JlYWN0LXJvdXRlci1kb20vbW9kdWxlcy9MaW5rLmpzXG5cdFx0XHRcdFx0Ly9cblx0XHRcdFx0XHQvLyBUcnkgdG8gYmUgZmxleGlibGUgYW5kIGludHVpdGl2ZSBpbiBob3cgd2UgaGFuZGxlIGxpbmtzLlxuXHRcdFx0XHRcdC8vIEZ1biBmYWN0OiBsaW5rcyBhcmVuJ3QgYXMgb2J2aW91cyB0byBnZXQgcmlnaHQgYXMgeW91XG5cdFx0XHRcdFx0Ly8gd291bGQgZXhwZWN0LiBUaGVyZSdzIGEgbG90IG1vcmUgdmFsaWQgd2F5cyB0byBjbGljayBhXG5cdFx0XHRcdFx0Ly8gbGluayB0aGFuIHRoaXMsIGFuZCBvbmUgbWlnaHQgd2FudCB0byBub3Qgc2ltcGx5IGNsaWNrIGFcblx0XHRcdFx0XHQvLyBsaW5rLCBidXQgcmlnaHQgY2xpY2sgb3IgY29tbWFuZC1jbGljayBpdCB0byBjb3B5IHRoZVxuXHRcdFx0XHRcdC8vIGxpbmsgdGFyZ2V0LCBldGMuIE5vcGUsIHRoaXMgaXNuJ3QganVzdCBmb3IgYmxpbmQgcGVvcGxlLlxuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdC8vIFNraXAgaWYgYG9uY2xpY2tgIHByZXZlbnRlZCBkZWZhdWx0XG5cdFx0XHRcdFx0XHRyZXN1bHQgIT09IGZhbHNlICYmICFlLmRlZmF1bHRQcmV2ZW50ZWQgJiZcblx0XHRcdFx0XHRcdC8vIElnbm9yZSBldmVyeXRoaW5nIGJ1dCBsZWZ0IGNsaWNrc1xuXHRcdFx0XHRcdFx0KGUuYnV0dG9uID09PSAwIHx8IGUud2hpY2ggPT09IDAgfHwgZS53aGljaCA9PT0gMSkgJiZcblx0XHRcdFx0XHRcdC8vIExldCB0aGUgYnJvd3NlciBoYW5kbGUgYHRhcmdldD1fYmxhbmtgLCBldGMuXG5cdFx0XHRcdFx0XHQoIWUuY3VycmVudFRhcmdldC50YXJnZXQgfHwgZS5jdXJyZW50VGFyZ2V0LnRhcmdldCA9PT0gXCJfc2VsZlwiKSAmJlxuXHRcdFx0XHRcdFx0Ly8gTm8gbW9kaWZpZXIga2V5c1xuXHRcdFx0XHRcdFx0IWUuY3RybEtleSAmJiAhZS5tZXRhS2V5ICYmICFlLnNoaWZ0S2V5ICYmICFlLmFsdEtleVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdFx0XHRlLnJlZHJhdyA9IGZhbHNlXG5cdFx0XHRcdFx0XHRyb3V0ZS5zZXQoaHJlZiwgbnVsbCwgb3B0aW9ucylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjaGlsZFxuXHRcdH0sXG5cdH1cblx0cm91dGUucGFyYW0gPSBmdW5jdGlvbihrZXkpIHtcblx0XHRyZXR1cm4gYXR0cnMgJiYga2V5ICE9IG51bGwgPyBhdHRyc1trZXldIDogYXR0cnNcblx0fVxuXG5cdHJldHVybiByb3V0ZVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIGh5cGVyc2NyaXB0ID0gcmVxdWlyZShcIi4vcmVuZGVyL2h5cGVyc2NyaXB0XCIpXG5cbmh5cGVyc2NyaXB0LnRydXN0ID0gcmVxdWlyZShcIi4vcmVuZGVyL3RydXN0XCIpXG5oeXBlcnNjcmlwdC5mcmFnbWVudCA9IHJlcXVpcmUoXCIuL3JlbmRlci9mcmFnbWVudFwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGh5cGVyc2NyaXB0XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgaHlwZXJzY3JpcHQgPSByZXF1aXJlKFwiLi9oeXBlcnNjcmlwdFwiKVxudmFyIHJlcXVlc3QgPSByZXF1aXJlKFwiLi9yZXF1ZXN0XCIpXG52YXIgbW91bnRSZWRyYXcgPSByZXF1aXJlKFwiLi9tb3VudC1yZWRyYXdcIilcblxudmFyIG0gPSBmdW5jdGlvbiBtKCkgeyByZXR1cm4gaHlwZXJzY3JpcHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9XG5tLm0gPSBoeXBlcnNjcmlwdFxubS50cnVzdCA9IGh5cGVyc2NyaXB0LnRydXN0XG5tLmZyYWdtZW50ID0gaHlwZXJzY3JpcHQuZnJhZ21lbnRcbm0ubW91bnQgPSBtb3VudFJlZHJhdy5tb3VudFxubS5yb3V0ZSA9IHJlcXVpcmUoXCIuL3JvdXRlXCIpXG5tLnJlbmRlciA9IHJlcXVpcmUoXCIuL3JlbmRlclwiKVxubS5yZWRyYXcgPSBtb3VudFJlZHJhdy5yZWRyYXdcbm0ucmVxdWVzdCA9IHJlcXVlc3QucmVxdWVzdFxubS5qc29ucCA9IHJlcXVlc3QuanNvbnBcbm0ucGFyc2VRdWVyeVN0cmluZyA9IHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nL3BhcnNlXCIpXG5tLmJ1aWxkUXVlcnlTdHJpbmcgPSByZXF1aXJlKFwiLi9xdWVyeXN0cmluZy9idWlsZFwiKVxubS5wYXJzZVBhdGhuYW1lID0gcmVxdWlyZShcIi4vcGF0aG5hbWUvcGFyc2VcIilcbm0uYnVpbGRQYXRobmFtZSA9IHJlcXVpcmUoXCIuL3BhdGhuYW1lL2J1aWxkXCIpXG5tLnZub2RlID0gcmVxdWlyZShcIi4vcmVuZGVyL3Zub2RlXCIpXG5tLlByb21pc2VQb2x5ZmlsbCA9IHJlcXVpcmUoXCIuL3Byb21pc2UvcG9seWZpbGxcIilcblxubW9kdWxlLmV4cG9ydHMgPSBtXG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgcmVuZGVyID0gcmVxdWlyZShcIi4vcmVuZGVyXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vYXBpL21vdW50LXJlZHJhd1wiKShyZW5kZXIsIHJlcXVlc3RBbmltYXRpb25GcmFtZSwgY29uc29sZSlcbiIsIlwidXNlIHN0cmljdFwiXG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0YXJnZXQsIHNvdXJjZSkge1xuXHRpZihzb3VyY2UpIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XSB9KVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIGJ1aWxkUXVlcnlTdHJpbmcgPSByZXF1aXJlKFwiLi4vcXVlcnlzdHJpbmcvYnVpbGRcIilcbnZhciBhc3NpZ24gPSByZXF1aXJlKFwiLi9hc3NpZ25cIilcblxuLy8gUmV0dXJucyBgcGF0aGAgZnJvbSBgdGVtcGxhdGVgICsgYHBhcmFtc2Bcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGVtcGxhdGUsIHBhcmFtcykge1xuXHRpZiAoKC86KFteXFwvXFwuLV0rKShcXC57M30pPzovKS50ZXN0KHRlbXBsYXRlKSkge1xuXHRcdHRocm93IG5ldyBTeW50YXhFcnJvcihcIlRlbXBsYXRlIHBhcmFtZXRlciBuYW1lcyAqbXVzdCogYmUgc2VwYXJhdGVkXCIpXG5cdH1cblx0aWYgKHBhcmFtcyA9PSBudWxsKSByZXR1cm4gdGVtcGxhdGVcblx0dmFyIHF1ZXJ5SW5kZXggPSB0ZW1wbGF0ZS5pbmRleE9mKFwiP1wiKVxuXHR2YXIgaGFzaEluZGV4ID0gdGVtcGxhdGUuaW5kZXhPZihcIiNcIilcblx0dmFyIHF1ZXJ5RW5kID0gaGFzaEluZGV4IDwgMCA/IHRlbXBsYXRlLmxlbmd0aCA6IGhhc2hJbmRleFxuXHR2YXIgcGF0aEVuZCA9IHF1ZXJ5SW5kZXggPCAwID8gcXVlcnlFbmQgOiBxdWVyeUluZGV4XG5cdHZhciBwYXRoID0gdGVtcGxhdGUuc2xpY2UoMCwgcGF0aEVuZClcblx0dmFyIHF1ZXJ5ID0ge31cblxuXHRhc3NpZ24ocXVlcnksIHBhcmFtcylcblxuXHR2YXIgcmVzb2x2ZWQgPSBwYXRoLnJlcGxhY2UoLzooW15cXC9cXC4tXSspKFxcLnszfSk/L2csIGZ1bmN0aW9uKG0sIGtleSwgdmFyaWFkaWMpIHtcblx0XHRkZWxldGUgcXVlcnlba2V5XVxuXHRcdC8vIElmIG5vIHN1Y2ggcGFyYW1ldGVyIGV4aXN0cywgZG9uJ3QgaW50ZXJwb2xhdGUgaXQuXG5cdFx0aWYgKHBhcmFtc1trZXldID09IG51bGwpIHJldHVybiBtXG5cdFx0Ly8gRXNjYXBlIG5vcm1hbCBwYXJhbWV0ZXJzLCBidXQgbm90IHZhcmlhZGljIG9uZXMuXG5cdFx0cmV0dXJuIHZhcmlhZGljID8gcGFyYW1zW2tleV0gOiBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHBhcmFtc1trZXldKSlcblx0fSlcblxuXHQvLyBJbiBjYXNlIHRoZSB0ZW1wbGF0ZSBzdWJzdGl0dXRpb24gYWRkcyBuZXcgcXVlcnkvaGFzaCBwYXJhbWV0ZXJzLlxuXHR2YXIgbmV3UXVlcnlJbmRleCA9IHJlc29sdmVkLmluZGV4T2YoXCI/XCIpXG5cdHZhciBuZXdIYXNoSW5kZXggPSByZXNvbHZlZC5pbmRleE9mKFwiI1wiKVxuXHR2YXIgbmV3UXVlcnlFbmQgPSBuZXdIYXNoSW5kZXggPCAwID8gcmVzb2x2ZWQubGVuZ3RoIDogbmV3SGFzaEluZGV4XG5cdHZhciBuZXdQYXRoRW5kID0gbmV3UXVlcnlJbmRleCA8IDAgPyBuZXdRdWVyeUVuZCA6IG5ld1F1ZXJ5SW5kZXhcblx0dmFyIHJlc3VsdCA9IHJlc29sdmVkLnNsaWNlKDAsIG5ld1BhdGhFbmQpXG5cblx0aWYgKHF1ZXJ5SW5kZXggPj0gMCkgcmVzdWx0ICs9IHRlbXBsYXRlLnNsaWNlKHF1ZXJ5SW5kZXgsIHF1ZXJ5RW5kKVxuXHRpZiAobmV3UXVlcnlJbmRleCA+PSAwKSByZXN1bHQgKz0gKHF1ZXJ5SW5kZXggPCAwID8gXCI/XCIgOiBcIiZcIikgKyByZXNvbHZlZC5zbGljZShuZXdRdWVyeUluZGV4LCBuZXdRdWVyeUVuZClcblx0dmFyIHF1ZXJ5c3RyaW5nID0gYnVpbGRRdWVyeVN0cmluZyhxdWVyeSlcblx0aWYgKHF1ZXJ5c3RyaW5nKSByZXN1bHQgKz0gKHF1ZXJ5SW5kZXggPCAwICYmIG5ld1F1ZXJ5SW5kZXggPCAwID8gXCI/XCIgOiBcIiZcIikgKyBxdWVyeXN0cmluZ1xuXHRpZiAoaGFzaEluZGV4ID49IDApIHJlc3VsdCArPSB0ZW1wbGF0ZS5zbGljZShoYXNoSW5kZXgpXG5cdGlmIChuZXdIYXNoSW5kZXggPj0gMCkgcmVzdWx0ICs9IChoYXNoSW5kZXggPCAwID8gXCJcIiA6IFwiJlwiKSArIHJlc29sdmVkLnNsaWNlKG5ld0hhc2hJbmRleClcblx0cmV0dXJuIHJlc3VsdFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIHBhcnNlUGF0aG5hbWUgPSByZXF1aXJlKFwiLi9wYXJzZVwiKVxuXG4vLyBDb21waWxlcyBhIHRlbXBsYXRlIGludG8gYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcmVzb2x2ZWQgcGF0aCAod2l0aG91dCBxdWVyeVxuLy8gc3RyaW5ncykgYW5kIHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHRlbXBsYXRlIHBhcmFtZXRlcnMgd2l0aCB0aGVpclxuLy8gcGFyc2VkIHZhbHVlcy4gVGhpcyBleHBlY3RzIHRoZSBpbnB1dCBvZiB0aGUgY29tcGlsZWQgdGVtcGxhdGUgdG8gYmUgdGhlXG4vLyBvdXRwdXQgb2YgYHBhcnNlUGF0aG5hbWVgLiBOb3RlIHRoYXQgaXQgZG9lcyAqbm90KiByZW1vdmUgcXVlcnkgcGFyYW1ldGVyc1xuLy8gc3BlY2lmaWVkIGluIHRoZSB0ZW1wbGF0ZS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGVtcGxhdGUpIHtcblx0dmFyIHRlbXBsYXRlRGF0YSA9IHBhcnNlUGF0aG5hbWUodGVtcGxhdGUpXG5cdHZhciB0ZW1wbGF0ZUtleXMgPSBPYmplY3Qua2V5cyh0ZW1wbGF0ZURhdGEucGFyYW1zKVxuXHR2YXIga2V5cyA9IFtdXG5cdHZhciByZWdleHAgPSBuZXcgUmVnRXhwKFwiXlwiICsgdGVtcGxhdGVEYXRhLnBhdGgucmVwbGFjZShcblx0XHQvLyBJIGVzY2FwZSBsaXRlcmFsIHRleHQgc28gcGVvcGxlIGNhbiB1c2UgdGhpbmdzIGxpa2UgYDpmaWxlLjpleHRgIG9yXG5cdFx0Ly8gYDpsYW5nLTpsb2NhbGVgIGluIHJvdXRlcy4gVGhpcyBpcyBhbGwgbWVyZ2VkIGludG8gb25lIHBhc3Mgc28gSVxuXHRcdC8vIGRvbid0IGFsc28gYWNjaWRlbnRhbGx5IGVzY2FwZSBgLWAgYW5kIG1ha2UgaXQgaGFyZGVyIHRvIGRldGVjdCBpdCB0b1xuXHRcdC8vIGJhbiBpdCBmcm9tIHRlbXBsYXRlIHBhcmFtZXRlcnMuXG5cdFx0LzooW15cXC8uLV0rKShcXC57M318XFwuKD8hXFwuKXwtKT98W1xcXFxeJCorLigpfFxcW1xcXXt9XS9nLFxuXHRcdGZ1bmN0aW9uKG0sIGtleSwgZXh0cmEpIHtcblx0XHRcdGlmIChrZXkgPT0gbnVsbCkgcmV0dXJuIFwiXFxcXFwiICsgbVxuXHRcdFx0a2V5cy5wdXNoKHtrOiBrZXksIHI6IGV4dHJhID09PSBcIi4uLlwifSlcblx0XHRcdGlmIChleHRyYSA9PT0gXCIuLi5cIikgcmV0dXJuIFwiKC4qKVwiXG5cdFx0XHRpZiAoZXh0cmEgPT09IFwiLlwiKSByZXR1cm4gXCIoW14vXSspXFxcXC5cIlxuXHRcdFx0cmV0dXJuIFwiKFteL10rKVwiICsgKGV4dHJhIHx8IFwiXCIpXG5cdFx0fVxuXHQpICsgXCIkXCIpXG5cdHJldHVybiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0Ly8gRmlyc3QsIGNoZWNrIHRoZSBwYXJhbXMuIFVzdWFsbHksIHRoZXJlIGlzbid0IGFueSwgYW5kIGl0J3MganVzdFxuXHRcdC8vIGNoZWNraW5nIGEgc3RhdGljIHNldC5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBsYXRlS2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRlbXBsYXRlRGF0YS5wYXJhbXNbdGVtcGxhdGVLZXlzW2ldXSAhPT0gZGF0YS5wYXJhbXNbdGVtcGxhdGVLZXlzW2ldXSkgcmV0dXJuIGZhbHNlXG5cdFx0fVxuXHRcdC8vIElmIG5vIGludGVycG9sYXRpb25zIGV4aXN0LCBsZXQncyBza2lwIGFsbCB0aGUgY2VyZW1vbnlcblx0XHRpZiAoIWtleXMubGVuZ3RoKSByZXR1cm4gcmVnZXhwLnRlc3QoZGF0YS5wYXRoKVxuXHRcdHZhciB2YWx1ZXMgPSByZWdleHAuZXhlYyhkYXRhLnBhdGgpXG5cdFx0aWYgKHZhbHVlcyA9PSBudWxsKSByZXR1cm4gZmFsc2Vcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGRhdGEucGFyYW1zW2tleXNbaV0ua10gPSBrZXlzW2ldLnIgPyB2YWx1ZXNbaSArIDFdIDogZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlc1tpICsgMV0pXG5cdFx0fVxuXHRcdHJldHVybiB0cnVlXG5cdH1cbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBwYXJzZVF1ZXJ5U3RyaW5nID0gcmVxdWlyZShcIi4uL3F1ZXJ5c3RyaW5nL3BhcnNlXCIpXG5cbi8vIFJldHVybnMgYHtwYXRoLCBwYXJhbXN9YCBmcm9tIGB1cmxgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVybCkge1xuXHR2YXIgcXVlcnlJbmRleCA9IHVybC5pbmRleE9mKFwiP1wiKVxuXHR2YXIgaGFzaEluZGV4ID0gdXJsLmluZGV4T2YoXCIjXCIpXG5cdHZhciBxdWVyeUVuZCA9IGhhc2hJbmRleCA8IDAgPyB1cmwubGVuZ3RoIDogaGFzaEluZGV4XG5cdHZhciBwYXRoRW5kID0gcXVlcnlJbmRleCA8IDAgPyBxdWVyeUVuZCA6IHF1ZXJ5SW5kZXhcblx0dmFyIHBhdGggPSB1cmwuc2xpY2UoMCwgcGF0aEVuZCkucmVwbGFjZSgvXFwvezIsfS9nLCBcIi9cIilcblxuXHRpZiAoIXBhdGgpIHBhdGggPSBcIi9cIlxuXHRlbHNlIHtcblx0XHRpZiAocGF0aFswXSAhPT0gXCIvXCIpIHBhdGggPSBcIi9cIiArIHBhdGhcblx0XHRpZiAocGF0aC5sZW5ndGggPiAxICYmIHBhdGhbcGF0aC5sZW5ndGggLSAxXSA9PT0gXCIvXCIpIHBhdGggPSBwYXRoLnNsaWNlKDAsIC0xKVxuXHR9XG5cdHJldHVybiB7XG5cdFx0cGF0aDogcGF0aCxcblx0XHRwYXJhbXM6IHF1ZXJ5SW5kZXggPCAwXG5cdFx0XHQ/IHt9XG5cdFx0XHQ6IHBhcnNlUXVlcnlTdHJpbmcodXJsLnNsaWNlKHF1ZXJ5SW5kZXggKyAxLCBxdWVyeUVuZCkpLFxuXHR9XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuLyoqIEBjb25zdHJ1Y3RvciAqL1xudmFyIFByb21pc2VQb2x5ZmlsbCA9IGZ1bmN0aW9uKGV4ZWN1dG9yKSB7XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlUG9seWZpbGwpKSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9taXNlIG11c3QgYmUgY2FsbGVkIHdpdGggYG5ld2BcIilcblx0aWYgKHR5cGVvZiBleGVjdXRvciAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpXG5cblx0dmFyIHNlbGYgPSB0aGlzLCByZXNvbHZlcnMgPSBbXSwgcmVqZWN0b3JzID0gW10sIHJlc29sdmVDdXJyZW50ID0gaGFuZGxlcihyZXNvbHZlcnMsIHRydWUpLCByZWplY3RDdXJyZW50ID0gaGFuZGxlcihyZWplY3RvcnMsIGZhbHNlKVxuXHR2YXIgaW5zdGFuY2UgPSBzZWxmLl9pbnN0YW5jZSA9IHtyZXNvbHZlcnM6IHJlc29sdmVycywgcmVqZWN0b3JzOiByZWplY3RvcnN9XG5cdHZhciBjYWxsQXN5bmMgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIgPyBzZXRJbW1lZGlhdGUgOiBzZXRUaW1lb3V0XG5cdGZ1bmN0aW9uIGhhbmRsZXIobGlzdCwgc2hvdWxkQWJzb3JiKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGUodmFsdWUpIHtcblx0XHRcdHZhciB0aGVuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoc2hvdWxkQWJzb3JiICYmIHZhbHVlICE9IG51bGwgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikgJiYgdHlwZW9mICh0aGVuID0gdmFsdWUudGhlbikgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gc2VsZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgdy8gaXRzZWxmXCIpXG5cdFx0XHRcdFx0ZXhlY3V0ZU9uY2UodGhlbi5iaW5kKHZhbHVlKSlcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRjYWxsQXN5bmMoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZiAoIXNob3VsZEFic29yYiAmJiBsaXN0Lmxlbmd0aCA9PT0gMCkgY29uc29sZS5lcnJvcihcIlBvc3NpYmxlIHVuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbjpcIiwgdmFsdWUpXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIGxpc3RbaV0odmFsdWUpXG5cdFx0XHRcdFx0XHRyZXNvbHZlcnMubGVuZ3RoID0gMCwgcmVqZWN0b3JzLmxlbmd0aCA9IDBcblx0XHRcdFx0XHRcdGluc3RhbmNlLnN0YXRlID0gc2hvdWxkQWJzb3JiXG5cdFx0XHRcdFx0XHRpbnN0YW5jZS5yZXRyeSA9IGZ1bmN0aW9uKCkge2V4ZWN1dGUodmFsdWUpfVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNhdGNoIChlKSB7XG5cdFx0XHRcdHJlamVjdEN1cnJlbnQoZSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gZXhlY3V0ZU9uY2UodGhlbikge1xuXHRcdHZhciBydW5zID0gMFxuXHRcdGZ1bmN0aW9uIHJ1bihmbikge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdGlmIChydW5zKysgPiAwKSByZXR1cm5cblx0XHRcdFx0Zm4odmFsdWUpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHZhciBvbmVycm9yID0gcnVuKHJlamVjdEN1cnJlbnQpXG5cdFx0dHJ5IHt0aGVuKHJ1bihyZXNvbHZlQ3VycmVudCksIG9uZXJyb3IpfSBjYXRjaCAoZSkge29uZXJyb3IoZSl9XG5cdH1cblxuXHRleGVjdXRlT25jZShleGVjdXRvcilcbn1cblByb21pc2VQb2x5ZmlsbC5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGlvbikge1xuXHR2YXIgc2VsZiA9IHRoaXMsIGluc3RhbmNlID0gc2VsZi5faW5zdGFuY2Vcblx0ZnVuY3Rpb24gaGFuZGxlKGNhbGxiYWNrLCBsaXN0LCBuZXh0LCBzdGF0ZSkge1xuXHRcdGxpc3QucHVzaChmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSBuZXh0KHZhbHVlKVxuXHRcdFx0ZWxzZSB0cnkge3Jlc29sdmVOZXh0KGNhbGxiYWNrKHZhbHVlKSl9IGNhdGNoIChlKSB7aWYgKHJlamVjdE5leHQpIHJlamVjdE5leHQoZSl9XG5cdFx0fSlcblx0XHRpZiAodHlwZW9mIGluc3RhbmNlLnJldHJ5ID09PSBcImZ1bmN0aW9uXCIgJiYgc3RhdGUgPT09IGluc3RhbmNlLnN0YXRlKSBpbnN0YW5jZS5yZXRyeSgpXG5cdH1cblx0dmFyIHJlc29sdmVOZXh0LCByZWplY3ROZXh0XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2VQb2x5ZmlsbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtyZXNvbHZlTmV4dCA9IHJlc29sdmUsIHJlamVjdE5leHQgPSByZWplY3R9KVxuXHRoYW5kbGUob25GdWxmaWxsZWQsIGluc3RhbmNlLnJlc29sdmVycywgcmVzb2x2ZU5leHQsIHRydWUpLCBoYW5kbGUob25SZWplY3Rpb24sIGluc3RhbmNlLnJlamVjdG9ycywgcmVqZWN0TmV4dCwgZmFsc2UpXG5cdHJldHVybiBwcm9taXNlXG59XG5Qcm9taXNlUG9seWZpbGwucHJvdG90eXBlLmNhdGNoID0gZnVuY3Rpb24ob25SZWplY3Rpb24pIHtcblx0cmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGlvbilcbn1cblByb21pc2VQb2x5ZmlsbC5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdHJldHVybiB0aGlzLnRoZW4oXG5cdFx0ZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdHJldHVybiBQcm9taXNlUG9seWZpbGwucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWVcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRmdW5jdGlvbihyZWFzb24pIHtcblx0XHRcdHJldHVybiBQcm9taXNlUG9seWZpbGwucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZVBvbHlmaWxsLnJlamVjdChyZWFzb24pO1xuXHRcdFx0fSlcblx0XHR9XG5cdClcbn1cblByb21pc2VQb2x5ZmlsbC5yZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpIHtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZVBvbHlmaWxsKSByZXR1cm4gdmFsdWVcblx0cmV0dXJuIG5ldyBQcm9taXNlUG9seWZpbGwoZnVuY3Rpb24ocmVzb2x2ZSkge3Jlc29sdmUodmFsdWUpfSlcbn1cblByb21pc2VQb2x5ZmlsbC5yZWplY3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRyZXR1cm4gbmV3IFByb21pc2VQb2x5ZmlsbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtyZWplY3QodmFsdWUpfSlcbn1cblByb21pc2VQb2x5ZmlsbC5hbGwgPSBmdW5jdGlvbihsaXN0KSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZVBvbHlmaWxsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHZhciB0b3RhbCA9IGxpc3QubGVuZ3RoLCBjb3VudCA9IDAsIHZhbHVlcyA9IFtdXG5cdFx0aWYgKGxpc3QubGVuZ3RoID09PSAwKSByZXNvbHZlKFtdKVxuXHRcdGVsc2UgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQoZnVuY3Rpb24oaSkge1xuXHRcdFx0XHRmdW5jdGlvbiBjb25zdW1lKHZhbHVlKSB7XG5cdFx0XHRcdFx0Y291bnQrK1xuXHRcdFx0XHRcdHZhbHVlc1tpXSA9IHZhbHVlXG5cdFx0XHRcdFx0aWYgKGNvdW50ID09PSB0b3RhbCkgcmVzb2x2ZSh2YWx1ZXMpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGxpc3RbaV0gIT0gbnVsbCAmJiAodHlwZW9mIGxpc3RbaV0gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGxpc3RbaV0gPT09IFwiZnVuY3Rpb25cIikgJiYgdHlwZW9mIGxpc3RbaV0udGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0bGlzdFtpXS50aGVuKGNvbnN1bWUsIHJlamVjdClcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGNvbnN1bWUobGlzdFtpXSlcblx0XHRcdH0pKGkpXG5cdFx0fVxuXHR9KVxufVxuUHJvbWlzZVBvbHlmaWxsLnJhY2UgPSBmdW5jdGlvbihsaXN0KSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZVBvbHlmaWxsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGlzdFtpXS50aGVuKHJlc29sdmUsIHJlamVjdClcblx0XHR9XG5cdH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZVBvbHlmaWxsXG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgUHJvbWlzZVBvbHlmaWxsID0gcmVxdWlyZShcIi4vcG9seWZpbGxcIilcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0aWYgKHR5cGVvZiB3aW5kb3cuUHJvbWlzZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdHdpbmRvdy5Qcm9taXNlID0gUHJvbWlzZVBvbHlmaWxsXG5cdH0gZWxzZSBpZiAoIXdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG5cdFx0d2luZG93LlByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBQcm9taXNlUG9seWZpbGwucHJvdG90eXBlLmZpbmFsbHlcblx0fVxuXHRtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5Qcm9taXNlXG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWwuUHJvbWlzZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdGdsb2JhbC5Qcm9taXNlID0gUHJvbWlzZVBvbHlmaWxsXG5cdH0gZWxzZSBpZiAoIWdsb2JhbC5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG5cdFx0Z2xvYmFsLlByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBQcm9taXNlUG9seWZpbGwucHJvdG90eXBlLmZpbmFsbHlcblx0fVxuXHRtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5Qcm9taXNlXG59IGVsc2Uge1xuXHRtb2R1bGUuZXhwb3J0cyA9IFByb21pc2VQb2x5ZmlsbFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QpIHtcblx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpICE9PSBcIltvYmplY3QgT2JqZWN0XVwiKSByZXR1cm4gXCJcIlxuXG5cdHZhciBhcmdzID0gW11cblx0Zm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuXHRcdGRlc3RydWN0dXJlKGtleSwgb2JqZWN0W2tleV0pXG5cdH1cblxuXHRyZXR1cm4gYXJncy5qb2luKFwiJlwiKVxuXG5cdGZ1bmN0aW9uIGRlc3RydWN0dXJlKGtleSwgdmFsdWUpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0ZGVzdHJ1Y3R1cmUoa2V5ICsgXCJbXCIgKyBpICsgXCJdXCIsIHZhbHVlW2ldKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG5cdFx0XHRmb3IgKHZhciBpIGluIHZhbHVlKSB7XG5cdFx0XHRcdGRlc3RydWN0dXJlKGtleSArIFwiW1wiICsgaSArIFwiXVwiLCB2YWx1ZVtpXSlcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSBhcmdzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gXCJcIiA/IFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSA6IFwiXCIpKVxuXHR9XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0cmluZykge1xuXHRpZiAoc3RyaW5nID09PSBcIlwiIHx8IHN0cmluZyA9PSBudWxsKSByZXR1cm4ge31cblx0aWYgKHN0cmluZy5jaGFyQXQoMCkgPT09IFwiP1wiKSBzdHJpbmcgPSBzdHJpbmcuc2xpY2UoMSlcblxuXHR2YXIgZW50cmllcyA9IHN0cmluZy5zcGxpdChcIiZcIiksIGNvdW50ZXJzID0ge30sIGRhdGEgPSB7fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZW50cnkgPSBlbnRyaWVzW2ldLnNwbGl0KFwiPVwiKVxuXHRcdHZhciBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoZW50cnlbMF0pXG5cdFx0dmFyIHZhbHVlID0gZW50cnkubGVuZ3RoID09PSAyID8gZGVjb2RlVVJJQ29tcG9uZW50KGVudHJ5WzFdKSA6IFwiXCJcblxuXHRcdGlmICh2YWx1ZSA9PT0gXCJ0cnVlXCIpIHZhbHVlID0gdHJ1ZVxuXHRcdGVsc2UgaWYgKHZhbHVlID09PSBcImZhbHNlXCIpIHZhbHVlID0gZmFsc2VcblxuXHRcdHZhciBsZXZlbHMgPSBrZXkuc3BsaXQoL1xcXVxcWz98XFxbLylcblx0XHR2YXIgY3Vyc29yID0gZGF0YVxuXHRcdGlmIChrZXkuaW5kZXhPZihcIltcIikgPiAtMSkgbGV2ZWxzLnBvcCgpXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsZXZlbHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBsZXZlbCA9IGxldmVsc1tqXSwgbmV4dExldmVsID0gbGV2ZWxzW2ogKyAxXVxuXHRcdFx0dmFyIGlzTnVtYmVyID0gbmV4dExldmVsID09IFwiXCIgfHwgIWlzTmFOKHBhcnNlSW50KG5leHRMZXZlbCwgMTApKVxuXHRcdFx0aWYgKGxldmVsID09PSBcIlwiKSB7XG5cdFx0XHRcdHZhciBrZXkgPSBsZXZlbHMuc2xpY2UoMCwgaikuam9pbigpXG5cdFx0XHRcdGlmIChjb3VudGVyc1trZXldID09IG51bGwpIHtcblx0XHRcdFx0XHRjb3VudGVyc1trZXldID0gQXJyYXkuaXNBcnJheShjdXJzb3IpID8gY3Vyc29yLmxlbmd0aCA6IDBcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXZlbCA9IGNvdW50ZXJzW2tleV0rK1xuXHRcdFx0fVxuXHRcdFx0Ly8gRGlzYWxsb3cgZGlyZWN0IHByb3RvdHlwZSBwb2xsdXRpb25cblx0XHRcdGVsc2UgaWYgKGxldmVsID09PSBcIl9fcHJvdG9fX1wiKSBicmVha1xuXHRcdFx0aWYgKGogPT09IGxldmVscy5sZW5ndGggLSAxKSBjdXJzb3JbbGV2ZWxdID0gdmFsdWVcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHQvLyBSZWFkIG93biBwcm9wZXJ0aWVzIGV4Y2x1c2l2ZWx5IHRvIGRpc2FsbG93IGluZGlyZWN0XG5cdFx0XHRcdC8vIHByb3RvdHlwZSBwb2xsdXRpb25cblx0XHRcdFx0dmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGN1cnNvciwgbGV2ZWwpXG5cdFx0XHRcdGlmIChkZXNjICE9IG51bGwpIGRlc2MgPSBkZXNjLnZhbHVlXG5cdFx0XHRcdGlmIChkZXNjID09IG51bGwpIGN1cnNvcltsZXZlbF0gPSBkZXNjID0gaXNOdW1iZXIgPyBbXSA6IHt9XG5cdFx0XHRcdGN1cnNvciA9IGRlc2Ncblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGRhdGFcbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcmVuZGVyL3JlbmRlclwiKSh3aW5kb3cpXG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgVm5vZGUgPSByZXF1aXJlKFwiLi4vcmVuZGVyL3Zub2RlXCIpXG52YXIgaHlwZXJzY3JpcHRWbm9kZSA9IHJlcXVpcmUoXCIuL2h5cGVyc2NyaXB0Vm5vZGVcIilcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0dmFyIHZub2RlID0gaHlwZXJzY3JpcHRWbm9kZS5hcHBseSgwLCBhcmd1bWVudHMpXG5cblx0dm5vZGUudGFnID0gXCJbXCJcblx0dm5vZGUuY2hpbGRyZW4gPSBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbih2bm9kZS5jaGlsZHJlbilcblx0cmV0dXJuIHZub2RlXG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgVm5vZGUgPSByZXF1aXJlKFwiLi4vcmVuZGVyL3Zub2RlXCIpXG52YXIgaHlwZXJzY3JpcHRWbm9kZSA9IHJlcXVpcmUoXCIuL2h5cGVyc2NyaXB0Vm5vZGVcIilcblxudmFyIHNlbGVjdG9yUGFyc2VyID0gLyg/OihefCN8XFwuKShbXiNcXC5cXFtcXF1dKykpfChcXFsoLis/KSg/Olxccyo9XFxzKihcInwnfCkoKD86XFxcXFtcIidcXF1dfC4pKj8pXFw1KT9cXF0pL2dcbnZhciBzZWxlY3RvckNhY2hlID0ge31cbnZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG5mdW5jdGlvbiBpc0VtcHR5KG9iamVjdCkge1xuXHRmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSBpZiAoaGFzT3duLmNhbGwob2JqZWN0LCBrZXkpKSByZXR1cm4gZmFsc2Vcblx0cmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gY29tcGlsZVNlbGVjdG9yKHNlbGVjdG9yKSB7XG5cdHZhciBtYXRjaCwgdGFnID0gXCJkaXZcIiwgY2xhc3NlcyA9IFtdLCBhdHRycyA9IHt9XG5cdHdoaWxlIChtYXRjaCA9IHNlbGVjdG9yUGFyc2VyLmV4ZWMoc2VsZWN0b3IpKSB7XG5cdFx0dmFyIHR5cGUgPSBtYXRjaFsxXSwgdmFsdWUgPSBtYXRjaFsyXVxuXHRcdGlmICh0eXBlID09PSBcIlwiICYmIHZhbHVlICE9PSBcIlwiKSB0YWcgPSB2YWx1ZVxuXHRcdGVsc2UgaWYgKHR5cGUgPT09IFwiI1wiKSBhdHRycy5pZCA9IHZhbHVlXG5cdFx0ZWxzZSBpZiAodHlwZSA9PT0gXCIuXCIpIGNsYXNzZXMucHVzaCh2YWx1ZSlcblx0XHRlbHNlIGlmIChtYXRjaFszXVswXSA9PT0gXCJbXCIpIHtcblx0XHRcdHZhciBhdHRyVmFsdWUgPSBtYXRjaFs2XVxuXHRcdFx0aWYgKGF0dHJWYWx1ZSkgYXR0clZhbHVlID0gYXR0clZhbHVlLnJlcGxhY2UoL1xcXFwoW1wiJ10pL2csIFwiJDFcIikucmVwbGFjZSgvXFxcXFxcXFwvZywgXCJcXFxcXCIpXG5cdFx0XHRpZiAobWF0Y2hbNF0gPT09IFwiY2xhc3NcIikgY2xhc3Nlcy5wdXNoKGF0dHJWYWx1ZSlcblx0XHRcdGVsc2UgYXR0cnNbbWF0Y2hbNF1dID0gYXR0clZhbHVlID09PSBcIlwiID8gYXR0clZhbHVlIDogYXR0clZhbHVlIHx8IHRydWVcblx0XHR9XG5cdH1cblx0aWYgKGNsYXNzZXMubGVuZ3RoID4gMCkgYXR0cnMuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKFwiIFwiKVxuXHRyZXR1cm4gc2VsZWN0b3JDYWNoZVtzZWxlY3Rvcl0gPSB7dGFnOiB0YWcsIGF0dHJzOiBhdHRyc31cbn1cblxuZnVuY3Rpb24gZXhlY1NlbGVjdG9yKHN0YXRlLCB2bm9kZSkge1xuXHR2YXIgYXR0cnMgPSB2bm9kZS5hdHRyc1xuXHR2YXIgY2hpbGRyZW4gPSBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbih2bm9kZS5jaGlsZHJlbilcblx0dmFyIGhhc0NsYXNzID0gaGFzT3duLmNhbGwoYXR0cnMsIFwiY2xhc3NcIilcblx0dmFyIGNsYXNzTmFtZSA9IGhhc0NsYXNzID8gYXR0cnMuY2xhc3MgOiBhdHRycy5jbGFzc05hbWVcblxuXHR2bm9kZS50YWcgPSBzdGF0ZS50YWdcblx0dm5vZGUuYXR0cnMgPSBudWxsXG5cdHZub2RlLmNoaWxkcmVuID0gdW5kZWZpbmVkXG5cblx0aWYgKCFpc0VtcHR5KHN0YXRlLmF0dHJzKSAmJiAhaXNFbXB0eShhdHRycykpIHtcblx0XHR2YXIgbmV3QXR0cnMgPSB7fVxuXG5cdFx0Zm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0XHRpZiAoaGFzT3duLmNhbGwoYXR0cnMsIGtleSkpIG5ld0F0dHJzW2tleV0gPSBhdHRyc1trZXldXG5cdFx0fVxuXG5cdFx0YXR0cnMgPSBuZXdBdHRyc1xuXHR9XG5cblx0Zm9yICh2YXIga2V5IGluIHN0YXRlLmF0dHJzKSB7XG5cdFx0aWYgKGhhc093bi5jYWxsKHN0YXRlLmF0dHJzLCBrZXkpICYmIGtleSAhPT0gXCJjbGFzc05hbWVcIiAmJiAhaGFzT3duLmNhbGwoYXR0cnMsIGtleSkpe1xuXHRcdFx0YXR0cnNba2V5XSA9IHN0YXRlLmF0dHJzW2tleV1cblx0XHR9XG5cdH1cblx0aWYgKGNsYXNzTmFtZSAhPSBudWxsIHx8IHN0YXRlLmF0dHJzLmNsYXNzTmFtZSAhPSBudWxsKSBhdHRycy5jbGFzc05hbWUgPVxuXHRcdGNsYXNzTmFtZSAhPSBudWxsXG5cdFx0XHQ/IHN0YXRlLmF0dHJzLmNsYXNzTmFtZSAhPSBudWxsXG5cdFx0XHRcdD8gU3RyaW5nKHN0YXRlLmF0dHJzLmNsYXNzTmFtZSkgKyBcIiBcIiArIFN0cmluZyhjbGFzc05hbWUpXG5cdFx0XHRcdDogY2xhc3NOYW1lXG5cdFx0XHQ6IHN0YXRlLmF0dHJzLmNsYXNzTmFtZSAhPSBudWxsXG5cdFx0XHRcdD8gc3RhdGUuYXR0cnMuY2xhc3NOYW1lXG5cdFx0XHRcdDogbnVsbFxuXG5cdGlmIChoYXNDbGFzcykgYXR0cnMuY2xhc3MgPSBudWxsXG5cblx0Zm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0aWYgKGhhc093bi5jYWxsKGF0dHJzLCBrZXkpICYmIGtleSAhPT0gXCJrZXlcIikge1xuXHRcdFx0dm5vZGUuYXR0cnMgPSBhdHRyc1xuXHRcdFx0YnJlYWtcblx0XHR9XG5cdH1cblxuXHRpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiYgY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIGNoaWxkcmVuWzBdICE9IG51bGwgJiYgY2hpbGRyZW5bMF0udGFnID09PSBcIiNcIikge1xuXHRcdHZub2RlLnRleHQgPSBjaGlsZHJlblswXS5jaGlsZHJlblxuXHR9IGVsc2Uge1xuXHRcdHZub2RlLmNoaWxkcmVuID0gY2hpbGRyZW5cblx0fVxuXG5cdHJldHVybiB2bm9kZVxufVxuXG5mdW5jdGlvbiBoeXBlcnNjcmlwdChzZWxlY3Rvcikge1xuXHRpZiAoc2VsZWN0b3IgPT0gbnVsbCB8fCB0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHNlbGVjdG9yICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHNlbGVjdG9yLnZpZXcgIT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHRocm93IEVycm9yKFwiVGhlIHNlbGVjdG9yIG11c3QgYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGEgY29tcG9uZW50LlwiKTtcblx0fVxuXG5cdHZhciB2bm9kZSA9IGh5cGVyc2NyaXB0Vm5vZGUuYXBwbHkoMSwgYXJndW1lbnRzKVxuXG5cdGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcblx0XHR2bm9kZS5jaGlsZHJlbiA9IFZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuKHZub2RlLmNoaWxkcmVuKVxuXHRcdGlmIChzZWxlY3RvciAhPT0gXCJbXCIpIHJldHVybiBleGVjU2VsZWN0b3Ioc2VsZWN0b3JDYWNoZVtzZWxlY3Rvcl0gfHwgY29tcGlsZVNlbGVjdG9yKHNlbGVjdG9yKSwgdm5vZGUpXG5cdH1cblxuXHR2bm9kZS50YWcgPSBzZWxlY3RvclxuXHRyZXR1cm4gdm5vZGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoeXBlcnNjcmlwdFxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFZub2RlID0gcmVxdWlyZShcIi4uL3JlbmRlci92bm9kZVwiKVxuXG4vLyBDYWxsIHZpYSBgaHlwZXJzY3JpcHRWbm9kZS5hcHBseShzdGFydE9mZnNldCwgYXJndW1lbnRzKWBcbi8vXG4vLyBUaGUgcmVhc29uIEkgZG8gaXQgdGhpcyB3YXksIGZvcndhcmRpbmcgdGhlIGFyZ3VtZW50cyBhbmQgcGFzc2luZyB0aGUgc3RhcnRcbi8vIG9mZnNldCBpbiBgdGhpc2AsIGlzIHNvIEkgZG9uJ3QgaGF2ZSB0byBjcmVhdGUgYSB0ZW1wb3JhcnkgYXJyYXkgaW4gYVxuLy8gcGVyZm9ybWFuY2UtY3JpdGljYWwgcGF0aC5cbi8vXG4vLyBJbiBuYXRpdmUgRVM2LCBJJ2QgaW5zdGVhZCBhZGQgYSBmaW5hbCBgLi4uYXJnc2AgcGFyYW1ldGVyIHRvIHRoZVxuLy8gYGh5cGVyc2NyaXB0YCBhbmQgYGZyYWdtZW50YCBmYWN0b3JpZXMgYW5kIGRlZmluZSB0aGlzIGFzXG4vLyBgaHlwZXJzY3JpcHRWbm9kZSguLi5hcmdzKWAsIHNpbmNlIG1vZGVybiBlbmdpbmVzIGRvIG9wdGltaXplIHRoYXQgYXdheS4gQnV0XG4vLyBFUzUgKHdoYXQgTWl0aHJpbCByZXF1aXJlcyB0aGFua3MgdG8gSUUgc3VwcG9ydCkgZG9lc24ndCBnaXZlIG1lIHRoYXQgbHV4dXJ5LFxuLy8gYW5kIGVuZ2luZXMgYXJlbid0IG5lYXJseSBpbnRlbGxpZ2VudCBlbm91Z2ggdG8gZG8gZWl0aGVyIG9mIHRoZXNlOlxuLy9cbi8vIDEuIEVsaWRlIHRoZSBhbGxvY2F0aW9uIGZvciBgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpYCB3aGVuIGl0J3MgcGFzc2VkIHRvXG4vLyAgICBhbm90aGVyIGZ1bmN0aW9uIG9ubHkgdG8gYmUgaW5kZXhlZC5cbi8vIDIuIEVsaWRlIGFuIGBhcmd1bWVudHNgIGFsbG9jYXRpb24gd2hlbiBpdCdzIHBhc3NlZCB0byBhbnkgZnVuY3Rpb24gb3RoZXJcbi8vICAgIHRoYW4gYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAgb3IgYFJlZmxlY3QuYXBwbHlgLlxuLy9cbi8vIEluIEVTNiwgaXQnZCBwcm9iYWJseSBsb29rIGNsb3NlciB0byB0aGlzIChJJ2QgbmVlZCB0byBwcm9maWxlIGl0LCB0aG91Z2gpOlxuLy8gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhdHRycywgLi4uY2hpbGRyZW4pIHtcbi8vICAgICBpZiAoYXR0cnMgPT0gbnVsbCB8fCB0eXBlb2YgYXR0cnMgPT09IFwib2JqZWN0XCIgJiYgYXR0cnMudGFnID09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkoYXR0cnMpKSB7XG4vLyAgICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShjaGlsZHJlblswXSkpIGNoaWxkcmVuID0gY2hpbGRyZW5bMF1cbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmxlbmd0aCA9PT0gMCAmJiBBcnJheS5pc0FycmF5KGF0dHJzKSA/IGF0dHJzIDogW2F0dHJzLCAuLi5jaGlsZHJlbl1cbi8vICAgICAgICAgYXR0cnMgPSB1bmRlZmluZWRcbi8vICAgICB9XG4vL1xuLy8gICAgIGlmIChhdHRycyA9PSBudWxsKSBhdHRycyA9IHt9XG4vLyAgICAgcmV0dXJuIFZub2RlKFwiXCIsIGF0dHJzLmtleSwgYXR0cnMsIGNoaWxkcmVuKVxuLy8gfVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0dmFyIGF0dHJzID0gYXJndW1lbnRzW3RoaXNdLCBzdGFydCA9IHRoaXMgKyAxLCBjaGlsZHJlblxuXG5cdGlmIChhdHRycyA9PSBudWxsKSB7XG5cdFx0YXR0cnMgPSB7fVxuXHR9IGVsc2UgaWYgKHR5cGVvZiBhdHRycyAhPT0gXCJvYmplY3RcIiB8fCBhdHRycy50YWcgIT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KGF0dHJzKSkge1xuXHRcdGF0dHJzID0ge31cblx0XHRzdGFydCA9IHRoaXNcblx0fVxuXG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSBzdGFydCArIDEpIHtcblx0XHRjaGlsZHJlbiA9IGFyZ3VtZW50c1tzdGFydF1cblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSBjaGlsZHJlbiA9IFtjaGlsZHJlbl1cblx0fSBlbHNlIHtcblx0XHRjaGlsZHJlbiA9IFtdXG5cdFx0d2hpbGUgKHN0YXJ0IDwgYXJndW1lbnRzLmxlbmd0aCkgY2hpbGRyZW4ucHVzaChhcmd1bWVudHNbc3RhcnQrK10pXG5cdH1cblxuXHRyZXR1cm4gVm5vZGUoXCJcIiwgYXR0cnMua2V5LCBhdHRycywgY2hpbGRyZW4pXG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgVm5vZGUgPSByZXF1aXJlKFwiLi4vcmVuZGVyL3Zub2RlXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJHdpbmRvdykge1xuXHR2YXIgJGRvYyA9ICR3aW5kb3cgJiYgJHdpbmRvdy5kb2N1bWVudFxuXHR2YXIgY3VycmVudFJlZHJhd1xuXG5cdHZhciBuYW1lU3BhY2UgPSB7XG5cdFx0c3ZnOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG5cdFx0bWF0aDogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCJcblx0fVxuXG5cdGZ1bmN0aW9uIGdldE5hbWVTcGFjZSh2bm9kZSkge1xuXHRcdHJldHVybiB2bm9kZS5hdHRycyAmJiB2bm9kZS5hdHRycy54bWxucyB8fCBuYW1lU3BhY2Vbdm5vZGUudGFnXVxuXHR9XG5cblx0Ly9zYW5pdHkgY2hlY2sgdG8gZGlzY291cmFnZSBwZW9wbGUgZnJvbSBkb2luZyBgdm5vZGUuc3RhdGUgPSAuLi5gXG5cdGZ1bmN0aW9uIGNoZWNrU3RhdGUodm5vZGUsIG9yaWdpbmFsKSB7XG5cdFx0aWYgKHZub2RlLnN0YXRlICE9PSBvcmlnaW5hbCkgdGhyb3cgbmV3IEVycm9yKFwiYHZub2RlLnN0YXRlYCBtdXN0IG5vdCBiZSBtb2RpZmllZFwiKVxuXHR9XG5cblx0Ly9Ob3RlOiB0aGUgaG9vayBpcyBwYXNzZWQgYXMgdGhlIGB0aGlzYCBhcmd1bWVudCB0byBhbGxvdyBwcm94eWluZyB0aGVcblx0Ly9hcmd1bWVudHMgd2l0aG91dCByZXF1aXJpbmcgYSBmdWxsIGFycmF5IGFsbG9jYXRpb24gdG8gZG8gc28uIEl0IGFsc29cblx0Ly90YWtlcyBhZHZhbnRhZ2Ugb2YgdGhlIGZhY3QgdGhlIGN1cnJlbnQgYHZub2RlYCBpcyB0aGUgZmlyc3QgYXJndW1lbnQgaW5cblx0Ly9hbGwgbGlmZWN5Y2xlIG1ldGhvZHMuXG5cdGZ1bmN0aW9uIGNhbGxIb29rKHZub2RlKSB7XG5cdFx0dmFyIG9yaWdpbmFsID0gdm5vZGUuc3RhdGVcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYXBwbHkob3JpZ2luYWwsIGFyZ3VtZW50cylcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0Y2hlY2tTdGF0ZSh2bm9kZSwgb3JpZ2luYWwpXG5cdFx0fVxuXHR9XG5cblx0Ly8gSUUxMSAoYXQgbGVhc3QpIHRocm93cyBhbiBVbnNwZWNpZmllZEVycm9yIHdoZW4gYWNjZXNzaW5nIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgd2hlblxuXHQvLyBpbnNpZGUgYW4gaWZyYW1lLiBDYXRjaCBhbmQgc3dhbGxvdyB0aGlzIGVycm9yLCBhbmQgaGVhdnktaGFuZGlkbHkgcmV0dXJuIG51bGwuXG5cdGZ1bmN0aW9uIGFjdGl2ZUVsZW1lbnQoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiAkZG9jLmFjdGl2ZUVsZW1lbnRcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gbnVsbFxuXHRcdH1cblx0fVxuXHQvL2NyZWF0ZVxuXHRmdW5jdGlvbiBjcmVhdGVOb2RlcyhwYXJlbnQsIHZub2Rlcywgc3RhcnQsIGVuZCwgaG9va3MsIG5leHRTaWJsaW5nLCBucykge1xuXHRcdGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG5cdFx0XHR2YXIgdm5vZGUgPSB2bm9kZXNbaV1cblx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSB7XG5cdFx0XHRcdGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlTm9kZShwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKSB7XG5cdFx0dmFyIHRhZyA9IHZub2RlLnRhZ1xuXHRcdGlmICh0eXBlb2YgdGFnID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHR2bm9kZS5zdGF0ZSA9IHt9XG5cdFx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCkgaW5pdExpZmVjeWNsZSh2bm9kZS5hdHRycywgdm5vZGUsIGhvb2tzKVxuXHRcdFx0c3dpdGNoICh0YWcpIHtcblx0XHRcdFx0Y2FzZSBcIiNcIjogY3JlYXRlVGV4dChwYXJlbnQsIHZub2RlLCBuZXh0U2libGluZyk7IGJyZWFrXG5cdFx0XHRcdGNhc2UgXCI8XCI6IGNyZWF0ZUhUTUwocGFyZW50LCB2bm9kZSwgbnMsIG5leHRTaWJsaW5nKTsgYnJlYWtcblx0XHRcdFx0Y2FzZSBcIltcIjogY3JlYXRlRnJhZ21lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZyk7IGJyZWFrXG5cdFx0XHRcdGRlZmF1bHQ6IGNyZWF0ZUVsZW1lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSBjcmVhdGVDb21wb25lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVUZXh0KHBhcmVudCwgdm5vZGUsIG5leHRTaWJsaW5nKSB7XG5cdFx0dm5vZGUuZG9tID0gJGRvYy5jcmVhdGVUZXh0Tm9kZSh2bm9kZS5jaGlsZHJlbilcblx0XHRpbnNlcnROb2RlKHBhcmVudCwgdm5vZGUuZG9tLCBuZXh0U2libGluZylcblx0fVxuXHR2YXIgcG9zc2libGVQYXJlbnRzID0ge2NhcHRpb246IFwidGFibGVcIiwgdGhlYWQ6IFwidGFibGVcIiwgdGJvZHk6IFwidGFibGVcIiwgdGZvb3Q6IFwidGFibGVcIiwgdHI6IFwidGJvZHlcIiwgdGg6IFwidHJcIiwgdGQ6IFwidHJcIiwgY29sZ3JvdXA6IFwidGFibGVcIiwgY29sOiBcImNvbGdyb3VwXCJ9XG5cdGZ1bmN0aW9uIGNyZWF0ZUhUTUwocGFyZW50LCB2bm9kZSwgbnMsIG5leHRTaWJsaW5nKSB7XG5cdFx0dmFyIG1hdGNoID0gdm5vZGUuY2hpbGRyZW4ubWF0Y2goL15cXHMqPzwoXFx3KykvaW0pIHx8IFtdXG5cdFx0Ly8gbm90IHVzaW5nIHRoZSBwcm9wZXIgcGFyZW50IG1ha2VzIHRoZSBjaGlsZCBlbGVtZW50KHMpIHZhbmlzaC5cblx0XHQvLyAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblx0XHQvLyAgICAgZGl2LmlubmVySFRNTCA9IFwiPHRkPmk8L3RkPjx0ZD5qPC90ZD5cIlxuXHRcdC8vICAgICBjb25zb2xlLmxvZyhkaXYuaW5uZXJIVE1MKVxuXHRcdC8vIC0tPiBcImlqXCIsIG5vIDx0ZD4gaW4gc2lnaHQuXG5cdFx0dmFyIHRlbXAgPSAkZG9jLmNyZWF0ZUVsZW1lbnQocG9zc2libGVQYXJlbnRzW21hdGNoWzFdXSB8fCBcImRpdlwiKVxuXHRcdGlmIChucyA9PT0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiKSB7XG5cdFx0XHR0ZW1wLmlubmVySFRNTCA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPlwiICsgdm5vZGUuY2hpbGRyZW4gKyBcIjwvc3ZnPlwiXG5cdFx0XHR0ZW1wID0gdGVtcC5maXJzdENoaWxkXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRlbXAuaW5uZXJIVE1MID0gdm5vZGUuY2hpbGRyZW5cblx0XHR9XG5cdFx0dm5vZGUuZG9tID0gdGVtcC5maXJzdENoaWxkXG5cdFx0dm5vZGUuZG9tU2l6ZSA9IHRlbXAuY2hpbGROb2Rlcy5sZW5ndGhcblx0XHQvLyBDYXB0dXJlIG5vZGVzIHRvIHJlbW92ZSwgc28gd2UgZG9uJ3QgY29uZnVzZSB0aGVtLlxuXHRcdHZub2RlLmluc3RhbmNlID0gW11cblx0XHR2YXIgZnJhZ21lbnQgPSAkZG9jLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuXHRcdHZhciBjaGlsZFxuXHRcdHdoaWxlIChjaGlsZCA9IHRlbXAuZmlyc3RDaGlsZCkge1xuXHRcdFx0dm5vZGUuaW5zdGFuY2UucHVzaChjaGlsZClcblx0XHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKGNoaWxkKVxuXHRcdH1cblx0XHRpbnNlcnROb2RlKHBhcmVudCwgZnJhZ21lbnQsIG5leHRTaWJsaW5nKVxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50KHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgZnJhZ21lbnQgPSAkZG9jLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuXHRcdGlmICh2bm9kZS5jaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHR2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdFx0Y3JlYXRlTm9kZXMoZnJhZ21lbnQsIGNoaWxkcmVuLCAwLCBjaGlsZHJlbi5sZW5ndGgsIGhvb2tzLCBudWxsLCBucylcblx0XHR9XG5cdFx0dm5vZGUuZG9tID0gZnJhZ21lbnQuZmlyc3RDaGlsZFxuXHRcdHZub2RlLmRvbVNpemUgPSBmcmFnbWVudC5jaGlsZE5vZGVzLmxlbmd0aFxuXHRcdGluc2VydE5vZGUocGFyZW50LCBmcmFnbWVudCwgbmV4dFNpYmxpbmcpXG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlRWxlbWVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKSB7XG5cdFx0dmFyIHRhZyA9IHZub2RlLnRhZ1xuXHRcdHZhciBhdHRycyA9IHZub2RlLmF0dHJzXG5cdFx0dmFyIGlzID0gYXR0cnMgJiYgYXR0cnMuaXNcblxuXHRcdG5zID0gZ2V0TmFtZVNwYWNlKHZub2RlKSB8fCBuc1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBucyA/XG5cdFx0XHRpcyA/ICRkb2MuY3JlYXRlRWxlbWVudE5TKG5zLCB0YWcsIHtpczogaXN9KSA6ICRkb2MuY3JlYXRlRWxlbWVudE5TKG5zLCB0YWcpIDpcblx0XHRcdGlzID8gJGRvYy5jcmVhdGVFbGVtZW50KHRhZywge2lzOiBpc30pIDogJGRvYy5jcmVhdGVFbGVtZW50KHRhZylcblx0XHR2bm9kZS5kb20gPSBlbGVtZW50XG5cblx0XHRpZiAoYXR0cnMgIT0gbnVsbCkge1xuXHRcdFx0c2V0QXR0cnModm5vZGUsIGF0dHJzLCBucylcblx0XHR9XG5cblx0XHRpbnNlcnROb2RlKHBhcmVudCwgZWxlbWVudCwgbmV4dFNpYmxpbmcpXG5cblx0XHRpZiAoIW1heWJlU2V0Q29udGVudEVkaXRhYmxlKHZub2RlKSkge1xuXHRcdFx0aWYgKHZub2RlLnRleHQgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAodm5vZGUudGV4dCAhPT0gXCJcIikgZWxlbWVudC50ZXh0Q29udGVudCA9IHZub2RlLnRleHRcblx0XHRcdFx0ZWxzZSB2bm9kZS5jaGlsZHJlbiA9IFtWbm9kZShcIiNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHZub2RlLnRleHQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKV1cblx0XHRcdH1cblx0XHRcdGlmICh2bm9kZS5jaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHRcdHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0XHRcdGNyZWF0ZU5vZGVzKGVsZW1lbnQsIGNoaWxkcmVuLCAwLCBjaGlsZHJlbi5sZW5ndGgsIGhvb2tzLCBudWxsLCBucylcblx0XHRcdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJzZWxlY3RcIiAmJiBhdHRycyAhPSBudWxsKSBzZXRMYXRlU2VsZWN0QXR0cnModm5vZGUsIGF0dHJzKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBpbml0Q29tcG9uZW50KHZub2RlLCBob29rcykge1xuXHRcdHZhciBzZW50aW5lbFxuXHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnLnZpZXcgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0dm5vZGUuc3RhdGUgPSBPYmplY3QuY3JlYXRlKHZub2RlLnRhZylcblx0XHRcdHNlbnRpbmVsID0gdm5vZGUuc3RhdGUudmlld1xuXHRcdFx0aWYgKHNlbnRpbmVsLiQkcmVlbnRyYW50TG9jayQkICE9IG51bGwpIHJldHVyblxuXHRcdFx0c2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgPSB0cnVlXG5cdFx0fSBlbHNlIHtcblx0XHRcdHZub2RlLnN0YXRlID0gdm9pZCAwXG5cdFx0XHRzZW50aW5lbCA9IHZub2RlLnRhZ1xuXHRcdFx0aWYgKHNlbnRpbmVsLiQkcmVlbnRyYW50TG9jayQkICE9IG51bGwpIHJldHVyblxuXHRcdFx0c2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgPSB0cnVlXG5cdFx0XHR2bm9kZS5zdGF0ZSA9ICh2bm9kZS50YWcucHJvdG90eXBlICE9IG51bGwgJiYgdHlwZW9mIHZub2RlLnRhZy5wcm90b3R5cGUudmlldyA9PT0gXCJmdW5jdGlvblwiKSA/IG5ldyB2bm9kZS50YWcodm5vZGUpIDogdm5vZGUudGFnKHZub2RlKVxuXHRcdH1cblx0XHRpbml0TGlmZWN5Y2xlKHZub2RlLnN0YXRlLCB2bm9kZSwgaG9va3MpXG5cdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwpIGluaXRMaWZlY3ljbGUodm5vZGUuYXR0cnMsIHZub2RlLCBob29rcylcblx0XHR2bm9kZS5pbnN0YW5jZSA9IFZub2RlLm5vcm1hbGl6ZShjYWxsSG9vay5jYWxsKHZub2RlLnN0YXRlLnZpZXcsIHZub2RlKSlcblx0XHRpZiAodm5vZGUuaW5zdGFuY2UgPT09IHZub2RlKSB0aHJvdyBFcnJvcihcIkEgdmlldyBjYW5ub3QgcmV0dXJuIHRoZSB2bm9kZSBpdCByZWNlaXZlZCBhcyBhcmd1bWVudFwiKVxuXHRcdHNlbnRpbmVsLiQkcmVlbnRyYW50TG9jayQkID0gbnVsbFxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKSB7XG5cdFx0aW5pdENvbXBvbmVudCh2bm9kZSwgaG9va3MpXG5cdFx0aWYgKHZub2RlLmluc3RhbmNlICE9IG51bGwpIHtcblx0XHRcdGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZS5pbnN0YW5jZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdHZub2RlLmRvbSA9IHZub2RlLmluc3RhbmNlLmRvbVxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IHZub2RlLmRvbSAhPSBudWxsID8gdm5vZGUuaW5zdGFuY2UuZG9tU2l6ZSA6IDBcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR2bm9kZS5kb21TaXplID0gMFxuXHRcdH1cblx0fVxuXG5cdC8vdXBkYXRlXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0VsZW1lbnR8RnJhZ21lbnR9IHBhcmVudCAtIHRoZSBwYXJlbnQgZWxlbWVudFxuXHQgKiBAcGFyYW0ge1Zub2RlW10gfCBudWxsfSBvbGQgLSB0aGUgbGlzdCBvZiB2bm9kZXMgb2YgdGhlIGxhc3QgYHJlbmRlcigpYCBjYWxsIGZvclxuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzIHBhcnQgb2YgdGhlIHRyZWVcblx0ICogQHBhcmFtIHtWbm9kZVtdIHwgbnVsbH0gdm5vZGVzIC0gYXMgYWJvdmUsIGJ1dCBmb3IgdGhlIGN1cnJlbnQgYHJlbmRlcigpYCBjYWxsLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9uW119IGhvb2tzIC0gYW4gYWNjdW11bGF0b3Igb2YgcG9zdC1yZW5kZXIgaG9va3MgKG9uY3JlYXRlL29udXBkYXRlKVxuXHQgKiBAcGFyYW0ge0VsZW1lbnQgfCBudWxsfSBuZXh0U2libGluZyAtIHRoZSBuZXh0IERPTSBub2RlIGlmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgdGhhdCBpcyBub3QgdGhlIGxhc3QgaXRlbSBpbiBpdHNcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRcblx0ICogQHBhcmFtIHsnc3ZnJyB8ICdtYXRoJyB8IFN0cmluZyB8IG51bGx9IG5zKSAtIHRoZSBjdXJyZW50IFhNTCBuYW1lc3BhY2UsIGlmIGFueVxuXHQgKiBAcmV0dXJucyB2b2lkXG5cdCAqL1xuXHQvLyBUaGlzIGZ1bmN0aW9uIGRpZmZzIGFuZCBwYXRjaGVzIGxpc3RzIG9mIHZub2RlcywgYm90aCBrZXllZCBhbmQgdW5rZXllZC5cblx0Ly9cblx0Ly8gV2Ugd2lsbDpcblx0Ly9cblx0Ly8gMS4gZGVzY3JpYmUgaXRzIGdlbmVyYWwgc3RydWN0dXJlXG5cdC8vIDIuIGZvY3VzIG9uIHRoZSBkaWZmIGFsZ29yaXRobSBvcHRpbWl6YXRpb25zXG5cdC8vIDMuIGRpc2N1c3MgRE9NIG5vZGUgb3BlcmF0aW9ucy5cblxuXHQvLyAjIyBPdmVydmlldzpcblx0Ly9cblx0Ly8gVGhlIHVwZGF0ZU5vZGVzKCkgZnVuY3Rpb246XG5cdC8vIC0gZGVhbHMgd2l0aCB0cml2aWFsIGNhc2VzXG5cdC8vIC0gZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBsaXN0cyBhcmUga2V5ZWQgb3IgdW5rZXllZCBiYXNlZCBvbiB0aGUgZmlyc3Qgbm9uLW51bGwgbm9kZVxuXHQvLyAgIG9mIGVhY2ggbGlzdC5cblx0Ly8gLSBkaWZmcyB0aGVtIGFuZCBwYXRjaGVzIHRoZSBET00gaWYgbmVlZGVkICh0aGF0J3MgdGhlIGJydW50IG9mIHRoZSBjb2RlKVxuXHQvLyAtIG1hbmFnZXMgdGhlIGxlZnRvdmVyczogYWZ0ZXIgZGlmZmluZywgYXJlIHRoZXJlOlxuXHQvLyAgIC0gb2xkIG5vZGVzIGxlZnQgdG8gcmVtb3ZlP1xuXHQvLyBcdCAtIG5ldyBub2RlcyB0byBpbnNlcnQ/XG5cdC8vIFx0IGRlYWwgd2l0aCB0aGVtIVxuXHQvL1xuXHQvLyBUaGUgbGlzdHMgYXJlIG9ubHkgaXRlcmF0ZWQgb3ZlciBvbmNlLCB3aXRoIGFuIGV4Y2VwdGlvbiBmb3IgdGhlIG5vZGVzIGluIGBvbGRgIHRoYXRcblx0Ly8gYXJlIHZpc2l0ZWQgaW4gdGhlIGZvdXJ0aCBwYXJ0IG9mIHRoZSBkaWZmIGFuZCBpbiB0aGUgYHJlbW92ZU5vZGVzYCBsb29wLlxuXG5cdC8vICMjIERpZmZpbmdcblx0Ly9cblx0Ly8gUmVhZGluZyBodHRwczovL2dpdGh1Yi5jb20vbG9jYWx2b2lkL2l2aS9ibG9iL2RkYzA5ZDA2YWJhZWY0NTI0OGU2MTMzZjcwNDBkMDBkM2M2YmU4NTMvcGFja2FnZXMvaXZpL3NyYy92ZG9tL2ltcGxlbWVudGF0aW9uLnRzI0w2MTctTDgzN1xuXHQvLyBtYXkgYmUgZ29vZCBmb3IgY29udGV4dCBvbiBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2UtYmFzZWQgbG9naWMgZm9yIG1vdmluZyBub2Rlcy5cblx0Ly9cblx0Ly8gSW4gb3JkZXIgdG8gZGlmZiBrZXllZCBsaXN0cywgb25lIGhhcyB0b1xuXHQvL1xuXHQvLyAxKSBtYXRjaCBub2RlcyBpbiBib3RoIGxpc3RzLCBwZXIga2V5LCBhbmQgdXBkYXRlIHRoZW0gYWNjb3JkaW5nbHlcblx0Ly8gMikgY3JlYXRlIHRoZSBub2RlcyBwcmVzZW50IGluIHRoZSBuZXcgbGlzdCwgYnV0IGFic2VudCBpbiB0aGUgb2xkIG9uZVxuXHQvLyAzKSByZW1vdmUgdGhlIG5vZGVzIHByZXNlbnQgaW4gdGhlIG9sZCBsaXN0LCBidXQgYWJzZW50IGluIHRoZSBuZXcgb25lXG5cdC8vIDQpIGZpZ3VyZSBvdXQgd2hhdCBub2RlcyBpbiAxKSB0byBtb3ZlIGluIG9yZGVyIHRvIG1pbmltaXplIHRoZSBET00gb3BlcmF0aW9ucy5cblx0Ly9cblx0Ly8gVG8gYWNoaWV2ZSAxKSBvbmUgY2FuIGNyZWF0ZSBhIGRpY3Rpb25hcnkgb2Yga2V5cyA9PiBpbmRleCAoZm9yIHRoZSBvbGQgbGlzdCksIHRoZW4gaXRlcmF0ZVxuXHQvLyBvdmVyIHRoZSBuZXcgbGlzdCBhbmQgZm9yIGVhY2ggbmV3IHZub2RlLCBmaW5kIHRoZSBjb3JyZXNwb25kaW5nIHZub2RlIGluIHRoZSBvbGQgbGlzdCB1c2luZ1xuXHQvLyB0aGUgbWFwLlxuXHQvLyAyKSBpcyBhY2hpZXZlZCBpbiB0aGUgc2FtZSBzdGVwOiBpZiBhIG5ldyBub2RlIGhhcyBubyBjb3JyZXNwb25kaW5nIGVudHJ5IGluIHRoZSBtYXAsIGl0IGlzIG5ld1xuXHQvLyBhbmQgbXVzdCBiZSBjcmVhdGVkLlxuXHQvLyBGb3IgdGhlIHJlbW92YWxzLCB3ZSBhY3R1YWxseSByZW1vdmUgdGhlIG5vZGVzIHRoYXQgaGF2ZSBiZWVuIHVwZGF0ZWQgZnJvbSB0aGUgb2xkIGxpc3QuXG5cdC8vIFRoZSBub2RlcyB0aGF0IHJlbWFpbiBpbiB0aGF0IGxpc3QgYWZ0ZXIgMSkgYW5kIDIpIGhhdmUgYmVlbiBwZXJmb3JtZWQgY2FuIGJlIHNhZmVseSByZW1vdmVkLlxuXHQvLyBUaGUgZm91cnRoIHN0ZXAgaXMgYSBiaXQgbW9yZSBjb21wbGV4IGFuZCByZWxpZXMgb24gdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSAoTElTKVxuXHQvLyBhbGdvcml0aG0uXG5cdC8vXG5cdC8vIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2UgaXMgdGhlIGxpc3Qgb2Ygbm9kZXMgdGhhdCBjYW4gcmVtYWluIGluIHBsYWNlLiBJbWFnaW5lIGdvaW5nXG5cdC8vIGZyb20gYDEsMiwzLDQsNWAgdG8gYDQsNSwxLDIsM2Agd2hlcmUgdGhlIG51bWJlcnMgYXJlIG5vdCBuZWNlc3NhcmlseSB0aGUga2V5cywgYnV0IHRoZSBpbmRpY2VzXG5cdC8vIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGtleWVkIG5vZGVzIGluIHRoZSBvbGQgbGlzdCAoa2V5ZWQgbm9kZXMgYGUsZCxjLGIsYWAgPT4gYGIsYSxlLGQsY2Agd291bGRcblx0Ly8gIG1hdGNoIHRoZSBhYm92ZSBsaXN0cywgZm9yIGV4YW1wbGUpLlxuXHQvL1xuXHQvLyBJbiB0aGVyZSBhcmUgdHdvIGluY3JlYXNpbmcgc3Vic2VxdWVuY2VzOiBgNCw1YCBhbmQgYDEsMiwzYCwgdGhlIGxhdHRlciBiZWluZyB0aGUgbG9uZ2VzdC4gV2Vcblx0Ly8gY2FuIHVwZGF0ZSB0aG9zZSBub2RlcyB3aXRob3V0IG1vdmluZyB0aGVtLCBhbmQgb25seSBjYWxsIGBpbnNlcnROb2RlYCBvbiBgNGAgYW5kIGA1YC5cblx0Ly9cblx0Ly8gQGxvY2Fsdm9pZCBhZGFwdGVkIHRoZSBhbGdvIHRvIGFsc28gc3VwcG9ydCBub2RlIGRlbGV0aW9ucyBhbmQgaW5zZXJ0aW9ucyAodGhlIGBsaXNgIGlzIGFjdHVhbGx5XG5cdC8vIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2UgKm9mIG9sZCBub2RlcyBzdGlsbCBwcmVzZW50IGluIHRoZSBuZXcgbGlzdCopLlxuXHQvL1xuXHQvLyBJdCBpcyBhIGdlbmVyYWwgYWxnb3JpdGhtIHRoYXQgaXMgZmlyZXByb29mIGluIGFsbCBjaXJjdW1zdGFuY2VzLCBidXQgaXQgcmVxdWlyZXMgdGhlIGFsbG9jYXRpb25cblx0Ly8gYW5kIHRoZSBjb25zdHJ1Y3Rpb24gb2YgYSBga2V5ID0+IG9sZEluZGV4YCBtYXAsIGFuZCB0aHJlZSBhcnJheXMgKG9uZSB3aXRoIGBuZXdJbmRleCA9PiBvbGRJbmRleGAsXG5cdC8vIHRoZSBgTElTYCBhbmQgYSB0ZW1wb3Jhcnkgb25lIHRvIGNyZWF0ZSB0aGUgTElTKS5cblx0Ly9cblx0Ly8gU28gd2UgY2hlYXQgd2hlcmUgd2UgY2FuOiBpZiB0aGUgdGFpbHMgb2YgdGhlIGxpc3RzIGFyZSBpZGVudGljYWwsIHRoZXkgYXJlIGd1YXJhbnRlZWQgdG8gYmUgcGFydCBvZlxuXHQvLyB0aGUgTElTIGFuZCBjYW4gYmUgdXBkYXRlZCB3aXRob3V0IG1vdmluZyB0aGVtLlxuXHQvL1xuXHQvLyBJZiB0d28gbm9kZXMgYXJlIHN3YXBwZWQsIHRoZXkgYXJlIGd1YXJhbnRlZWQgbm90IHRvIGJlIHBhcnQgb2YgdGhlIExJUywgYW5kIG11c3QgYmUgbW92ZWQgKHdpdGhcblx0Ly8gdGhlIGV4Y2VwdGlvbiBvZiB0aGUgbGFzdCBub2RlIGlmIHRoZSBsaXN0IGlzIGZ1bGx5IHJldmVyc2VkKS5cblx0Ly9cblx0Ly8gIyMgRmluZGluZyB0aGUgbmV4dCBzaWJsaW5nLlxuXHQvL1xuXHQvLyBgdXBkYXRlTm9kZSgpYCBhbmQgYGNyZWF0ZU5vZGUoKWAgZXhwZWN0IGEgbmV4dFNpYmxpbmcgcGFyYW1ldGVyIHRvIHBlcmZvcm0gRE9NIG9wZXJhdGlvbnMuXG5cdC8vIFdoZW4gdGhlIGxpc3QgaXMgYmVpbmcgdHJhdmVyc2VkIHRvcC1kb3duLCBhdCBhbnkgaW5kZXgsIHRoZSBET00gbm9kZXMgdXAgdG8gdGhlIHByZXZpb3VzXG5cdC8vIHZub2RlIHJlZmxlY3QgdGhlIGNvbnRlbnQgb2YgdGhlIG5ldyBsaXN0LCB3aGVyZWFzIHRoZSByZXN0IG9mIHRoZSBET00gbm9kZXMgcmVmbGVjdCB0aGUgb2xkXG5cdC8vIGxpc3QuIFRoZSBuZXh0IHNpYmxpbmcgbXVzdCBiZSBsb29rZWQgZm9yIGluIHRoZSBvbGQgbGlzdCB1c2luZyBgZ2V0TmV4dFNpYmxpbmcoLi4uIG9sZFN0YXJ0ICsgMSAuLi4pYC5cblx0Ly9cblx0Ly8gSW4gdGhlIG90aGVyIHNjZW5hcmlvcyAoc3dhcHMsIHVwd2FyZHMgdHJhdmVyc2FsLCBtYXAtYmFzZWQgZGlmZiksXG5cdC8vIHRoZSBuZXcgdm5vZGVzIGxpc3QgaXMgdHJhdmVyc2VkIHVwd2FyZHMuIFRoZSBET00gbm9kZXMgYXQgdGhlIGJvdHRvbSBvZiB0aGUgbGlzdCByZWZsZWN0IHRoZVxuXHQvLyBib3R0b20gcGFydCBvZiB0aGUgbmV3IHZub2RlcyBsaXN0LCBhbmQgd2UgY2FuIHVzZSB0aGUgYHYuZG9tYCAgdmFsdWUgb2YgdGhlIHByZXZpb3VzIG5vZGVcblx0Ly8gYXMgdGhlIG5leHQgc2libGluZyAoY2FjaGVkIGluIHRoZSBgbmV4dFNpYmxpbmdgIHZhcmlhYmxlKS5cblxuXG5cdC8vICMjIERPTSBub2RlIG1vdmVzXG5cdC8vXG5cdC8vIEluIG1vc3Qgc2NlbmFyaW9zIGB1cGRhdGVOb2RlKClgIGFuZCBgY3JlYXRlTm9kZSgpYCBwZXJmb3JtIHRoZSBET00gb3BlcmF0aW9ucy4gSG93ZXZlcixcblx0Ly8gdGhpcyBpcyBub3QgdGhlIGNhc2UgaWYgdGhlIG5vZGUgbW92ZWQgKHNlY29uZCBhbmQgZm91cnRoIHBhcnQgb2YgdGhlIGRpZmYgYWxnbykuIFdlIG1vdmVcblx0Ly8gdGhlIG9sZCBET00gbm9kZXMgYmVmb3JlIHVwZGF0ZU5vZGUgcnVucyBiZWNhdXNlIGl0IGVuYWJsZXMgdXMgdG8gdXNlIHRoZSBjYWNoZWQgYG5leHRTaWJsaW5nYFxuXHQvLyB2YXJpYWJsZSByYXRoZXIgdGhhbiBmZXRjaGluZyBpdCB1c2luZyBgZ2V0TmV4dFNpYmxpbmcoKWAuXG5cdC8vXG5cdC8vIFRoZSBmb3VydGggcGFydCBvZiB0aGUgZGlmZiBjdXJyZW50bHkgaW5zZXJ0cyBub2RlcyB1bmNvbmRpdGlvbmFsbHksIGxlYWRpbmcgdG8gaXNzdWVzXG5cdC8vIGxpa2UgIzE3OTEgYW5kICMxOTk5LiBXZSBuZWVkIHRvIGJlIHNtYXJ0ZXIgYWJvdXQgdGhvc2Ugc2l0dWF0aW9ucyB3aGVyZSBhZGphc2NlbnQgb2xkXG5cdC8vIG5vZGVzIHJlbWFpbiB0b2dldGhlciBpbiB0aGUgbmV3IGxpc3QgaW4gYSB3YXkgdGhhdCBpc24ndCBjb3ZlcmVkIGJ5IHBhcnRzIG9uZSBhbmRcblx0Ly8gdGhyZWUgb2YgdGhlIGRpZmYgYWxnby5cblxuXHRmdW5jdGlvbiB1cGRhdGVOb2RlcyhwYXJlbnQsIG9sZCwgdm5vZGVzLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKSB7XG5cdFx0aWYgKG9sZCA9PT0gdm5vZGVzIHx8IG9sZCA9PSBudWxsICYmIHZub2RlcyA9PSBudWxsKSByZXR1cm5cblx0XHRlbHNlIGlmIChvbGQgPT0gbnVsbCB8fCBvbGQubGVuZ3RoID09PSAwKSBjcmVhdGVOb2RlcyhwYXJlbnQsIHZub2RlcywgMCwgdm5vZGVzLmxlbmd0aCwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRlbHNlIGlmICh2bm9kZXMgPT0gbnVsbCB8fCB2bm9kZXMubGVuZ3RoID09PSAwKSByZW1vdmVOb2RlcyhwYXJlbnQsIG9sZCwgMCwgb2xkLmxlbmd0aClcblx0XHRlbHNlIHtcblx0XHRcdHZhciBpc09sZEtleWVkID0gb2xkWzBdICE9IG51bGwgJiYgb2xkWzBdLmtleSAhPSBudWxsXG5cdFx0XHR2YXIgaXNLZXllZCA9IHZub2Rlc1swXSAhPSBudWxsICYmIHZub2Rlc1swXS5rZXkgIT0gbnVsbFxuXHRcdFx0dmFyIHN0YXJ0ID0gMCwgb2xkU3RhcnQgPSAwXG5cdFx0XHRpZiAoIWlzT2xkS2V5ZWQpIHdoaWxlIChvbGRTdGFydCA8IG9sZC5sZW5ndGggJiYgb2xkW29sZFN0YXJ0XSA9PSBudWxsKSBvbGRTdGFydCsrXG5cdFx0XHRpZiAoIWlzS2V5ZWQpIHdoaWxlIChzdGFydCA8IHZub2Rlcy5sZW5ndGggJiYgdm5vZGVzW3N0YXJ0XSA9PSBudWxsKSBzdGFydCsrXG5cdFx0XHRpZiAoaXNLZXllZCA9PT0gbnVsbCAmJiBpc09sZEtleWVkID09IG51bGwpIHJldHVybiAvLyBib3RoIGxpc3RzIGFyZSBmdWxsIG9mIG51bGxzXG5cdFx0XHRpZiAoaXNPbGRLZXllZCAhPT0gaXNLZXllZCkge1xuXHRcdFx0XHRyZW1vdmVOb2RlcyhwYXJlbnQsIG9sZCwgb2xkU3RhcnQsIG9sZC5sZW5ndGgpXG5cdFx0XHRcdGNyZWF0ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCBzdGFydCwgdm5vZGVzLmxlbmd0aCwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRcdH0gZWxzZSBpZiAoIWlzS2V5ZWQpIHtcblx0XHRcdFx0Ly8gRG9uJ3QgaW5kZXggcGFzdCB0aGUgZW5kIG9mIGVpdGhlciBsaXN0IChjYXVzZXMgZGVvcHRzKS5cblx0XHRcdFx0dmFyIGNvbW1vbkxlbmd0aCA9IG9sZC5sZW5ndGggPCB2bm9kZXMubGVuZ3RoID8gb2xkLmxlbmd0aCA6IHZub2Rlcy5sZW5ndGhcblx0XHRcdFx0Ly8gUmV3aW5kIGlmIG5lY2Vzc2FyeSB0byB0aGUgZmlyc3Qgbm9uLW51bGwgaW5kZXggb24gZWl0aGVyIHNpZGUuXG5cdFx0XHRcdC8vIFdlIGNvdWxkIGFsdGVybmF0aXZlbHkgZWl0aGVyIGV4cGxpY2l0bHkgY3JlYXRlIG9yIHJlbW92ZSBub2RlcyB3aGVuIGBzdGFydCAhPT0gb2xkU3RhcnRgXG5cdFx0XHRcdC8vIGJ1dCB0aGF0IHdvdWxkIGJlIG9wdGltaXppbmcgZm9yIHNwYXJzZSBsaXN0cyB3aGljaCBhcmUgbW9yZSByYXJlIHRoYW4gZGVuc2Ugb25lcy5cblx0XHRcdFx0c3RhcnQgPSBzdGFydCA8IG9sZFN0YXJ0ID8gc3RhcnQgOiBvbGRTdGFydFxuXHRcdFx0XHRmb3IgKDsgc3RhcnQgPCBjb21tb25MZW5ndGg7IHN0YXJ0KyspIHtcblx0XHRcdFx0XHRvID0gb2xkW3N0YXJ0XVxuXHRcdFx0XHRcdHYgPSB2bm9kZXNbc3RhcnRdXG5cdFx0XHRcdFx0aWYgKG8gPT09IHYgfHwgbyA9PSBudWxsICYmIHYgPT0gbnVsbCkgY29udGludWVcblx0XHRcdFx0XHRlbHNlIGlmIChvID09IG51bGwpIGNyZWF0ZU5vZGUocGFyZW50LCB2LCBob29rcywgbnMsIGdldE5leHRTaWJsaW5nKG9sZCwgc3RhcnQgKyAxLCBuZXh0U2libGluZykpXG5cdFx0XHRcdFx0ZWxzZSBpZiAodiA9PSBudWxsKSByZW1vdmVOb2RlKHBhcmVudCwgbylcblx0XHRcdFx0XHRlbHNlIHVwZGF0ZU5vZGUocGFyZW50LCBvLCB2LCBob29rcywgZ2V0TmV4dFNpYmxpbmcob2xkLCBzdGFydCArIDEsIG5leHRTaWJsaW5nKSwgbnMpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG9sZC5sZW5ndGggPiBjb21tb25MZW5ndGgpIHJlbW92ZU5vZGVzKHBhcmVudCwgb2xkLCBzdGFydCwgb2xkLmxlbmd0aClcblx0XHRcdFx0aWYgKHZub2Rlcy5sZW5ndGggPiBjb21tb25MZW5ndGgpIGNyZWF0ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCBzdGFydCwgdm5vZGVzLmxlbmd0aCwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGtleWVkIGRpZmZcblx0XHRcdFx0dmFyIG9sZEVuZCA9IG9sZC5sZW5ndGggLSAxLCBlbmQgPSB2bm9kZXMubGVuZ3RoIC0gMSwgbWFwLCBvLCB2LCBvZSwgdmUsIHRvcFNpYmxpbmdcblxuXHRcdFx0XHQvLyBib3R0b20tdXBcblx0XHRcdFx0d2hpbGUgKG9sZEVuZCA+PSBvbGRTdGFydCAmJiBlbmQgPj0gc3RhcnQpIHtcblx0XHRcdFx0XHRvZSA9IG9sZFtvbGRFbmRdXG5cdFx0XHRcdFx0dmUgPSB2bm9kZXNbZW5kXVxuXHRcdFx0XHRcdGlmIChvZS5rZXkgIT09IHZlLmtleSkgYnJlYWtcblx0XHRcdFx0XHRpZiAob2UgIT09IHZlKSB1cGRhdGVOb2RlKHBhcmVudCwgb2UsIHZlLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0XHRcdGlmICh2ZS5kb20gIT0gbnVsbCkgbmV4dFNpYmxpbmcgPSB2ZS5kb21cblx0XHRcdFx0XHRvbGRFbmQtLSwgZW5kLS1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyB0b3AtZG93blxuXHRcdFx0XHR3aGlsZSAob2xkRW5kID49IG9sZFN0YXJ0ICYmIGVuZCA+PSBzdGFydCkge1xuXHRcdFx0XHRcdG8gPSBvbGRbb2xkU3RhcnRdXG5cdFx0XHRcdFx0diA9IHZub2Rlc1tzdGFydF1cblx0XHRcdFx0XHRpZiAoby5rZXkgIT09IHYua2V5KSBicmVha1xuXHRcdFx0XHRcdG9sZFN0YXJ0KyssIHN0YXJ0Kytcblx0XHRcdFx0XHRpZiAobyAhPT0gdikgdXBkYXRlTm9kZShwYXJlbnQsIG8sIHYsIGhvb2tzLCBnZXROZXh0U2libGluZyhvbGQsIG9sZFN0YXJ0LCBuZXh0U2libGluZyksIG5zKVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHN3YXBzIGFuZCBsaXN0IHJldmVyc2Fsc1xuXHRcdFx0XHR3aGlsZSAob2xkRW5kID49IG9sZFN0YXJ0ICYmIGVuZCA+PSBzdGFydCkge1xuXHRcdFx0XHRcdGlmIChzdGFydCA9PT0gZW5kKSBicmVha1xuXHRcdFx0XHRcdGlmIChvLmtleSAhPT0gdmUua2V5IHx8IG9lLmtleSAhPT0gdi5rZXkpIGJyZWFrXG5cdFx0XHRcdFx0dG9wU2libGluZyA9IGdldE5leHRTaWJsaW5nKG9sZCwgb2xkU3RhcnQsIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRcdG1vdmVOb2RlcyhwYXJlbnQsIG9lLCB0b3BTaWJsaW5nKVxuXHRcdFx0XHRcdGlmIChvZSAhPT0gdikgdXBkYXRlTm9kZShwYXJlbnQsIG9lLCB2LCBob29rcywgdG9wU2libGluZywgbnMpXG5cdFx0XHRcdFx0aWYgKCsrc3RhcnQgPD0gLS1lbmQpIG1vdmVOb2RlcyhwYXJlbnQsIG8sIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRcdGlmIChvICE9PSB2ZSkgdXBkYXRlTm9kZShwYXJlbnQsIG8sIHZlLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0XHRcdGlmICh2ZS5kb20gIT0gbnVsbCkgbmV4dFNpYmxpbmcgPSB2ZS5kb21cblx0XHRcdFx0XHRvbGRTdGFydCsrOyBvbGRFbmQtLVxuXHRcdFx0XHRcdG9lID0gb2xkW29sZEVuZF1cblx0XHRcdFx0XHR2ZSA9IHZub2Rlc1tlbmRdXG5cdFx0XHRcdFx0byA9IG9sZFtvbGRTdGFydF1cblx0XHRcdFx0XHR2ID0gdm5vZGVzW3N0YXJ0XVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGJvdHRvbSB1cCBvbmNlIGFnYWluXG5cdFx0XHRcdHdoaWxlIChvbGRFbmQgPj0gb2xkU3RhcnQgJiYgZW5kID49IHN0YXJ0KSB7XG5cdFx0XHRcdFx0aWYgKG9lLmtleSAhPT0gdmUua2V5KSBicmVha1xuXHRcdFx0XHRcdGlmIChvZSAhPT0gdmUpIHVwZGF0ZU5vZGUocGFyZW50LCBvZSwgdmUsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHRcdFx0aWYgKHZlLmRvbSAhPSBudWxsKSBuZXh0U2libGluZyA9IHZlLmRvbVxuXHRcdFx0XHRcdG9sZEVuZC0tLCBlbmQtLVxuXHRcdFx0XHRcdG9lID0gb2xkW29sZEVuZF1cblx0XHRcdFx0XHR2ZSA9IHZub2Rlc1tlbmRdXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0YXJ0ID4gZW5kKSByZW1vdmVOb2RlcyhwYXJlbnQsIG9sZCwgb2xkU3RhcnQsIG9sZEVuZCArIDEpXG5cdFx0XHRcdGVsc2UgaWYgKG9sZFN0YXJ0ID4gb2xkRW5kKSBjcmVhdGVOb2RlcyhwYXJlbnQsIHZub2Rlcywgc3RhcnQsIGVuZCArIDEsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdC8vIGluc3BpcmVkIGJ5IGl2aSBodHRwczovL2dpdGh1Yi5jb20vaXZpanMvaXZpLyBieSBCb3JpcyBLYXVsXG5cdFx0XHRcdFx0dmFyIG9yaWdpbmFsTmV4dFNpYmxpbmcgPSBuZXh0U2libGluZywgdm5vZGVzTGVuZ3RoID0gZW5kIC0gc3RhcnQgKyAxLCBvbGRJbmRpY2VzID0gbmV3IEFycmF5KHZub2Rlc0xlbmd0aCksIGxpPTAsIGk9MCwgcG9zID0gMjE0NzQ4MzY0NywgbWF0Y2hlZCA9IDAsIG1hcCwgbGlzSW5kaWNlc1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB2bm9kZXNMZW5ndGg7IGkrKykgb2xkSW5kaWNlc1tpXSA9IC0xXG5cdFx0XHRcdFx0Zm9yIChpID0gZW5kOyBpID49IHN0YXJ0OyBpLS0pIHtcblx0XHRcdFx0XHRcdGlmIChtYXAgPT0gbnVsbCkgbWFwID0gZ2V0S2V5TWFwKG9sZCwgb2xkU3RhcnQsIG9sZEVuZCArIDEpXG5cdFx0XHRcdFx0XHR2ZSA9IHZub2Rlc1tpXVxuXHRcdFx0XHRcdFx0dmFyIG9sZEluZGV4ID0gbWFwW3ZlLmtleV1cblx0XHRcdFx0XHRcdGlmIChvbGRJbmRleCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdHBvcyA9IChvbGRJbmRleCA8IHBvcykgPyBvbGRJbmRleCA6IC0xIC8vIGJlY29tZXMgLTEgaWYgbm9kZXMgd2VyZSByZS1vcmRlcmVkXG5cdFx0XHRcdFx0XHRcdG9sZEluZGljZXNbaS1zdGFydF0gPSBvbGRJbmRleFxuXHRcdFx0XHRcdFx0XHRvZSA9IG9sZFtvbGRJbmRleF1cblx0XHRcdFx0XHRcdFx0b2xkW29sZEluZGV4XSA9IG51bGxcblx0XHRcdFx0XHRcdFx0aWYgKG9lICE9PSB2ZSkgdXBkYXRlTm9kZShwYXJlbnQsIG9lLCB2ZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRcdFx0XHRcdFx0aWYgKHZlLmRvbSAhPSBudWxsKSBuZXh0U2libGluZyA9IHZlLmRvbVxuXHRcdFx0XHRcdFx0XHRtYXRjaGVkKytcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bmV4dFNpYmxpbmcgPSBvcmlnaW5hbE5leHRTaWJsaW5nXG5cdFx0XHRcdFx0aWYgKG1hdGNoZWQgIT09IG9sZEVuZCAtIG9sZFN0YXJ0ICsgMSkgcmVtb3ZlTm9kZXMocGFyZW50LCBvbGQsIG9sZFN0YXJ0LCBvbGRFbmQgKyAxKVxuXHRcdFx0XHRcdGlmIChtYXRjaGVkID09PSAwKSBjcmVhdGVOb2RlcyhwYXJlbnQsIHZub2Rlcywgc3RhcnQsIGVuZCArIDEsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAocG9zID09PSAtMSkge1xuXHRcdFx0XHRcdFx0XHQvLyB0aGUgaW5kaWNlcyBvZiB0aGUgaW5kaWNlcyBvZiB0aGUgaXRlbXMgdGhhdCBhcmUgcGFydCBvZiB0aGVcblx0XHRcdFx0XHRcdFx0Ly8gbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIGluIHRoZSBvbGRJbmRpY2VzIGxpc3Rcblx0XHRcdFx0XHRcdFx0bGlzSW5kaWNlcyA9IG1ha2VMaXNJbmRpY2VzKG9sZEluZGljZXMpXG5cdFx0XHRcdFx0XHRcdGxpID0gbGlzSW5kaWNlcy5sZW5ndGggLSAxXG5cdFx0XHRcdFx0XHRcdGZvciAoaSA9IGVuZDsgaSA+PSBzdGFydDsgaS0tKSB7XG5cdFx0XHRcdFx0XHRcdFx0diA9IHZub2Rlc1tpXVxuXHRcdFx0XHRcdFx0XHRcdGlmIChvbGRJbmRpY2VzW2ktc3RhcnRdID09PSAtMSkgY3JlYXRlTm9kZShwYXJlbnQsIHYsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAobGlzSW5kaWNlc1tsaV0gPT09IGkgLSBzdGFydCkgbGktLVxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxzZSBtb3ZlTm9kZXMocGFyZW50LCB2LCBuZXh0U2libGluZylcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHYuZG9tICE9IG51bGwpIG5leHRTaWJsaW5nID0gdm5vZGVzW2ldLmRvbVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRmb3IgKGkgPSBlbmQ7IGkgPj0gc3RhcnQ7IGktLSkge1xuXHRcdFx0XHRcdFx0XHRcdHYgPSB2bm9kZXNbaV1cblx0XHRcdFx0XHRcdFx0XHRpZiAob2xkSW5kaWNlc1tpLXN0YXJ0XSA9PT0gLTEpIGNyZWF0ZU5vZGUocGFyZW50LCB2LCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRcdFx0XHRcdGlmICh2LmRvbSAhPSBudWxsKSBuZXh0U2libGluZyA9IHZub2Rlc1tpXS5kb21cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVOb2RlKHBhcmVudCwgb2xkLCB2bm9kZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucykge1xuXHRcdHZhciBvbGRUYWcgPSBvbGQudGFnLCB0YWcgPSB2bm9kZS50YWdcblx0XHRpZiAob2xkVGFnID09PSB0YWcpIHtcblx0XHRcdHZub2RlLnN0YXRlID0gb2xkLnN0YXRlXG5cdFx0XHR2bm9kZS5ldmVudHMgPSBvbGQuZXZlbnRzXG5cdFx0XHRpZiAoc2hvdWxkTm90VXBkYXRlKHZub2RlLCBvbGQpKSByZXR1cm5cblx0XHRcdGlmICh0eXBlb2Ygb2xkVGFnID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsKSB7XG5cdFx0XHRcdFx0dXBkYXRlTGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0XHRcdH1cblx0XHRcdFx0c3dpdGNoIChvbGRUYWcpIHtcblx0XHRcdFx0XHRjYXNlIFwiI1wiOiB1cGRhdGVUZXh0KG9sZCwgdm5vZGUpOyBicmVha1xuXHRcdFx0XHRcdGNhc2UgXCI8XCI6IHVwZGF0ZUhUTUwocGFyZW50LCBvbGQsIHZub2RlLCBucywgbmV4dFNpYmxpbmcpOyBicmVha1xuXHRcdFx0XHRcdGNhc2UgXCJbXCI6IHVwZGF0ZUZyYWdtZW50KHBhcmVudCwgb2xkLCB2bm9kZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucyk7IGJyZWFrXG5cdFx0XHRcdFx0ZGVmYXVsdDogdXBkYXRlRWxlbWVudChvbGQsIHZub2RlLCBob29rcywgbnMpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2UgdXBkYXRlQ29tcG9uZW50KHBhcmVudCwgb2xkLCB2bm9kZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZW1vdmVOb2RlKHBhcmVudCwgb2xkKVxuXHRcdFx0Y3JlYXRlTm9kZShwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVUZXh0KG9sZCwgdm5vZGUpIHtcblx0XHRpZiAob2xkLmNoaWxkcmVuLnRvU3RyaW5nKCkgIT09IHZub2RlLmNoaWxkcmVuLnRvU3RyaW5nKCkpIHtcblx0XHRcdG9sZC5kb20ubm9kZVZhbHVlID0gdm5vZGUuY2hpbGRyZW5cblx0XHR9XG5cdFx0dm5vZGUuZG9tID0gb2xkLmRvbVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUhUTUwocGFyZW50LCBvbGQsIHZub2RlLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHRpZiAob2xkLmNoaWxkcmVuICE9PSB2bm9kZS5jaGlsZHJlbikge1xuXHRcdFx0cmVtb3ZlSFRNTChwYXJlbnQsIG9sZClcblx0XHRcdGNyZWF0ZUhUTUwocGFyZW50LCB2bm9kZSwgbnMsIG5leHRTaWJsaW5nKVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHZub2RlLmRvbSA9IG9sZC5kb21cblx0XHRcdHZub2RlLmRvbVNpemUgPSBvbGQuZG9tU2l6ZVxuXHRcdFx0dm5vZGUuaW5zdGFuY2UgPSBvbGQuaW5zdGFuY2Vcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlRnJhZ21lbnQocGFyZW50LCBvbGQsIHZub2RlLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKSB7XG5cdFx0dXBkYXRlTm9kZXMocGFyZW50LCBvbGQuY2hpbGRyZW4sIHZub2RlLmNoaWxkcmVuLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdHZhciBkb21TaXplID0gMCwgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdHZub2RlLmRvbSA9IG51bGxcblx0XHRpZiAoY2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuXHRcdFx0XHRpZiAoY2hpbGQgIT0gbnVsbCAmJiBjaGlsZC5kb20gIT0gbnVsbCkge1xuXHRcdFx0XHRcdGlmICh2bm9kZS5kb20gPT0gbnVsbCkgdm5vZGUuZG9tID0gY2hpbGQuZG9tXG5cdFx0XHRcdFx0ZG9tU2l6ZSArPSBjaGlsZC5kb21TaXplIHx8IDFcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvbVNpemUgIT09IDEpIHZub2RlLmRvbVNpemUgPSBkb21TaXplXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQob2xkLCB2bm9kZSwgaG9va3MsIG5zKSB7XG5cdFx0dmFyIGVsZW1lbnQgPSB2bm9kZS5kb20gPSBvbGQuZG9tXG5cdFx0bnMgPSBnZXROYW1lU3BhY2Uodm5vZGUpIHx8IG5zXG5cblx0XHRpZiAodm5vZGUudGFnID09PSBcInRleHRhcmVhXCIpIHtcblx0XHRcdGlmICh2bm9kZS5hdHRycyA9PSBudWxsKSB2bm9kZS5hdHRycyA9IHt9XG5cdFx0XHRpZiAodm5vZGUudGV4dCAhPSBudWxsKSB7XG5cdFx0XHRcdHZub2RlLmF0dHJzLnZhbHVlID0gdm5vZGUudGV4dCAvL0ZJWE1FIGhhbmRsZSBtdWx0aXBsZSBjaGlsZHJlblxuXHRcdFx0XHR2bm9kZS50ZXh0ID0gdW5kZWZpbmVkXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHVwZGF0ZUF0dHJzKHZub2RlLCBvbGQuYXR0cnMsIHZub2RlLmF0dHJzLCBucylcblx0XHRpZiAoIW1heWJlU2V0Q29udGVudEVkaXRhYmxlKHZub2RlKSkge1xuXHRcdFx0aWYgKG9sZC50ZXh0ICE9IG51bGwgJiYgdm5vZGUudGV4dCAhPSBudWxsICYmIHZub2RlLnRleHQgIT09IFwiXCIpIHtcblx0XHRcdFx0aWYgKG9sZC50ZXh0LnRvU3RyaW5nKCkgIT09IHZub2RlLnRleHQudG9TdHJpbmcoKSkgb2xkLmRvbS5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IHZub2RlLnRleHRcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRpZiAob2xkLnRleHQgIT0gbnVsbCkgb2xkLmNoaWxkcmVuID0gW1Zub2RlKFwiI1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgb2xkLnRleHQsIHVuZGVmaW5lZCwgb2xkLmRvbS5maXJzdENoaWxkKV1cblx0XHRcdFx0aWYgKHZub2RlLnRleHQgIT0gbnVsbCkgdm5vZGUuY2hpbGRyZW4gPSBbVm5vZGUoXCIjXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB2bm9kZS50ZXh0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCldXG5cdFx0XHRcdHVwZGF0ZU5vZGVzKGVsZW1lbnQsIG9sZC5jaGlsZHJlbiwgdm5vZGUuY2hpbGRyZW4sIGhvb2tzLCBudWxsLCBucylcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50KHBhcmVudCwgb2xkLCB2bm9kZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucykge1xuXHRcdHZub2RlLmluc3RhbmNlID0gVm5vZGUubm9ybWFsaXplKGNhbGxIb29rLmNhbGwodm5vZGUuc3RhdGUudmlldywgdm5vZGUpKVxuXHRcdGlmICh2bm9kZS5pbnN0YW5jZSA9PT0gdm5vZGUpIHRocm93IEVycm9yKFwiQSB2aWV3IGNhbm5vdCByZXR1cm4gdGhlIHZub2RlIGl0IHJlY2VpdmVkIGFzIGFyZ3VtZW50XCIpXG5cdFx0dXBkYXRlTGlmZWN5Y2xlKHZub2RlLnN0YXRlLCB2bm9kZSwgaG9va3MpXG5cdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwpIHVwZGF0ZUxpZmVjeWNsZSh2bm9kZS5hdHRycywgdm5vZGUsIGhvb2tzKVxuXHRcdGlmICh2bm9kZS5pbnN0YW5jZSAhPSBudWxsKSB7XG5cdFx0XHRpZiAob2xkLmluc3RhbmNlID09IG51bGwpIGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZS5pbnN0YW5jZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdGVsc2UgdXBkYXRlTm9kZShwYXJlbnQsIG9sZC5pbnN0YW5jZSwgdm5vZGUuaW5zdGFuY2UsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHR2bm9kZS5kb20gPSB2bm9kZS5pbnN0YW5jZS5kb21cblx0XHRcdHZub2RlLmRvbVNpemUgPSB2bm9kZS5pbnN0YW5jZS5kb21TaXplXG5cdFx0fVxuXHRcdGVsc2UgaWYgKG9sZC5pbnN0YW5jZSAhPSBudWxsKSB7XG5cdFx0XHRyZW1vdmVOb2RlKHBhcmVudCwgb2xkLmluc3RhbmNlKVxuXHRcdFx0dm5vZGUuZG9tID0gdW5kZWZpbmVkXG5cdFx0XHR2bm9kZS5kb21TaXplID0gMFxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHZub2RlLmRvbSA9IG9sZC5kb21cblx0XHRcdHZub2RlLmRvbVNpemUgPSBvbGQuZG9tU2l6ZVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBnZXRLZXlNYXAodm5vZGVzLCBzdGFydCwgZW5kKSB7XG5cdFx0dmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcblx0XHRmb3IgKDsgc3RhcnQgPCBlbmQ7IHN0YXJ0KyspIHtcblx0XHRcdHZhciB2bm9kZSA9IHZub2Rlc1tzdGFydF1cblx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSB7XG5cdFx0XHRcdHZhciBrZXkgPSB2bm9kZS5rZXlcblx0XHRcdFx0aWYgKGtleSAhPSBudWxsKSBtYXBba2V5XSA9IHN0YXJ0XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBtYXBcblx0fVxuXHQvLyBMaWZ0ZWQgZnJvbSBpdmkgaHR0cHM6Ly9naXRodWIuY29tL2l2aWpzL2l2aS9cblx0Ly8gdGFrZXMgYSBsaXN0IG9mIHVuaXF1ZSBudW1iZXJzICgtMSBpcyBzcGVjaWFsIGFuZCBjYW5cblx0Ly8gb2NjdXIgbXVsdGlwbGUgdGltZXMpIGFuZCByZXR1cm5zIGFuIGFycmF5IHdpdGggdGhlIGluZGljZXNcblx0Ly8gb2YgdGhlIGl0ZW1zIHRoYXQgYXJlIHBhcnQgb2YgdGhlIGxvbmdlc3QgaW5jcmVhc2luZ1xuXHQvLyBzdWJzZXF1ZWNlXG5cdHZhciBsaXNUZW1wID0gW11cblx0ZnVuY3Rpb24gbWFrZUxpc0luZGljZXMoYSkge1xuXHRcdHZhciByZXN1bHQgPSBbMF1cblx0XHR2YXIgdSA9IDAsIHYgPSAwLCBpID0gMFxuXHRcdHZhciBpbCA9IGxpc1RlbXAubGVuZ3RoID0gYS5sZW5ndGhcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGlsOyBpKyspIGxpc1RlbXBbaV0gPSBhW2ldXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpbDsgKytpKSB7XG5cdFx0XHRpZiAoYVtpXSA9PT0gLTEpIGNvbnRpbnVlXG5cdFx0XHR2YXIgaiA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV1cblx0XHRcdGlmIChhW2pdIDwgYVtpXSkge1xuXHRcdFx0XHRsaXNUZW1wW2ldID0galxuXHRcdFx0XHRyZXN1bHQucHVzaChpKVxuXHRcdFx0XHRjb250aW51ZVxuXHRcdFx0fVxuXHRcdFx0dSA9IDBcblx0XHRcdHYgPSByZXN1bHQubGVuZ3RoIC0gMVxuXHRcdFx0d2hpbGUgKHUgPCB2KSB7XG5cdFx0XHRcdC8vIEZhc3QgaW50ZWdlciBhdmVyYWdlIHdpdGhvdXQgb3ZlcmZsb3cuXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG5cdFx0XHRcdHZhciBjID0gKHUgPj4+IDEpICsgKHYgPj4+IDEpICsgKHUgJiB2ICYgMSlcblx0XHRcdFx0aWYgKGFbcmVzdWx0W2NdXSA8IGFbaV0pIHtcblx0XHRcdFx0XHR1ID0gYyArIDFcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR2ID0gY1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoYVtpXSA8IGFbcmVzdWx0W3VdXSkge1xuXHRcdFx0XHRpZiAodSA+IDApIGxpc1RlbXBbaV0gPSByZXN1bHRbdSAtIDFdXG5cdFx0XHRcdHJlc3VsdFt1XSA9IGlcblx0XHRcdH1cblx0XHR9XG5cdFx0dSA9IHJlc3VsdC5sZW5ndGhcblx0XHR2ID0gcmVzdWx0W3UgLSAxXVxuXHRcdHdoaWxlICh1LS0gPiAwKSB7XG5cdFx0XHRyZXN1bHRbdV0gPSB2XG5cdFx0XHR2ID0gbGlzVGVtcFt2XVxuXHRcdH1cblx0XHRsaXNUZW1wLmxlbmd0aCA9IDBcblx0XHRyZXR1cm4gcmVzdWx0XG5cdH1cblxuXHRmdW5jdGlvbiBnZXROZXh0U2libGluZyh2bm9kZXMsIGksIG5leHRTaWJsaW5nKSB7XG5cdFx0Zm9yICg7IGkgPCB2bm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh2bm9kZXNbaV0gIT0gbnVsbCAmJiB2bm9kZXNbaV0uZG9tICE9IG51bGwpIHJldHVybiB2bm9kZXNbaV0uZG9tXG5cdFx0fVxuXHRcdHJldHVybiBuZXh0U2libGluZ1xuXHR9XG5cblx0Ly8gVGhpcyBjb3ZlcnMgYSByZWFsbHkgc3BlY2lmaWMgZWRnZSBjYXNlOlxuXHQvLyAtIFBhcmVudCBub2RlIGlzIGtleWVkIGFuZCBjb250YWlucyBjaGlsZFxuXHQvLyAtIENoaWxkIGlzIHJlbW92ZWQsIHJldHVybnMgdW5yZXNvbHZlZCBwcm9taXNlIGluIGBvbmJlZm9yZXJlbW92ZWBcblx0Ly8gLSBQYXJlbnQgbm9kZSBpcyBtb3ZlZCBpbiBrZXllZCBkaWZmXG5cdC8vIC0gUmVtYWluaW5nIGNoaWxkcmVuIHN0aWxsIG5lZWQgbW92ZWQgYXBwcm9wcmlhdGVseVxuXHQvL1xuXHQvLyBJZGVhbGx5LCBJJ2QgdHJhY2sgcmVtb3ZlZCBub2RlcyBhcyB3ZWxsLCBidXQgdGhhdCBpbnRyb2R1Y2VzIGEgbG90IG1vcmVcblx0Ly8gY29tcGxleGl0eSBhbmQgSSdtIG5vdCBleGFjdGx5IGludGVyZXN0ZWQgaW4gZG9pbmcgdGhhdC5cblx0ZnVuY3Rpb24gbW92ZU5vZGVzKHBhcmVudCwgdm5vZGUsIG5leHRTaWJsaW5nKSB7XG5cdFx0dmFyIGZyYWcgPSAkZG9jLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuXHRcdG1vdmVDaGlsZFRvRnJhZyhwYXJlbnQsIGZyYWcsIHZub2RlKVxuXHRcdGluc2VydE5vZGUocGFyZW50LCBmcmFnLCBuZXh0U2libGluZylcblx0fVxuXHRmdW5jdGlvbiBtb3ZlQ2hpbGRUb0ZyYWcocGFyZW50LCBmcmFnLCB2bm9kZSkge1xuXHRcdC8vIERvZGdlIHRoZSByZWN1cnNpb24gb3ZlcmhlYWQgaW4gYSBmZXcgb2YgdGhlIG1vc3QgY29tbW9uIGNhc2VzLlxuXHRcdHdoaWxlICh2bm9kZS5kb20gIT0gbnVsbCAmJiB2bm9kZS5kb20ucGFyZW50Tm9kZSA9PT0gcGFyZW50KSB7XG5cdFx0XHRpZiAodHlwZW9mIHZub2RlLnRhZyAhPT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHR2bm9kZSA9IHZub2RlLmluc3RhbmNlXG5cdFx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSBjb250aW51ZVxuXHRcdFx0fSBlbHNlIGlmICh2bm9kZS50YWcgPT09IFwiPFwiKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdm5vZGUuaW5zdGFuY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRmcmFnLmFwcGVuZENoaWxkKHZub2RlLmluc3RhbmNlW2ldKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHZub2RlLnRhZyAhPT0gXCJbXCIpIHtcblx0XHRcdFx0Ly8gRG9uJ3QgcmVjdXJzZSBmb3IgdGV4dCBub2RlcyAqb3IqIGVsZW1lbnRzLCBqdXN0IGZyYWdtZW50c1xuXHRcdFx0XHRmcmFnLmFwcGVuZENoaWxkKHZub2RlLmRvbSlcblx0XHRcdH0gZWxzZSBpZiAodm5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdHZub2RlID0gdm5vZGUuY2hpbGRyZW5bMF1cblx0XHRcdFx0aWYgKHZub2RlICE9IG51bGwpIGNvbnRpbnVlXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gdm5vZGUuY2hpbGRyZW5baV1cblx0XHRcdFx0XHRpZiAoY2hpbGQgIT0gbnVsbCkgbW92ZUNoaWxkVG9GcmFnKHBhcmVudCwgZnJhZywgY2hpbGQpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGJyZWFrXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gaW5zZXJ0Tm9kZShwYXJlbnQsIGRvbSwgbmV4dFNpYmxpbmcpIHtcblx0XHRpZiAobmV4dFNpYmxpbmcgIT0gbnVsbCkgcGFyZW50Lmluc2VydEJlZm9yZShkb20sIG5leHRTaWJsaW5nKVxuXHRcdGVsc2UgcGFyZW50LmFwcGVuZENoaWxkKGRvbSlcblx0fVxuXG5cdGZ1bmN0aW9uIG1heWJlU2V0Q29udGVudEVkaXRhYmxlKHZub2RlKSB7XG5cdFx0aWYgKHZub2RlLmF0dHJzID09IG51bGwgfHwgKFxuXHRcdFx0dm5vZGUuYXR0cnMuY29udGVudGVkaXRhYmxlID09IG51bGwgJiYgLy8gYXR0cmlidXRlXG5cdFx0XHR2bm9kZS5hdHRycy5jb250ZW50RWRpdGFibGUgPT0gbnVsbCAvLyBwcm9wZXJ0eVxuXHRcdCkpIHJldHVybiBmYWxzZVxuXHRcdHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0aWYgKGNoaWxkcmVuICE9IG51bGwgJiYgY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIGNoaWxkcmVuWzBdLnRhZyA9PT0gXCI8XCIpIHtcblx0XHRcdHZhciBjb250ZW50ID0gY2hpbGRyZW5bMF0uY2hpbGRyZW5cblx0XHRcdGlmICh2bm9kZS5kb20uaW5uZXJIVE1MICE9PSBjb250ZW50KSB2bm9kZS5kb20uaW5uZXJIVE1MID0gY29udGVudFxuXHRcdH1cblx0XHRlbHNlIGlmICh2bm9kZS50ZXh0ICE9IG51bGwgfHwgY2hpbGRyZW4gIT0gbnVsbCAmJiBjaGlsZHJlbi5sZW5ndGggIT09IDApIHRocm93IG5ldyBFcnJvcihcIkNoaWxkIG5vZGUgb2YgYSBjb250ZW50ZWRpdGFibGUgbXVzdCBiZSB0cnVzdGVkXCIpXG5cdFx0cmV0dXJuIHRydWVcblx0fVxuXG5cdC8vcmVtb3ZlXG5cdGZ1bmN0aW9uIHJlbW92ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCBzdGFydCwgZW5kKSB7XG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcblx0XHRcdHZhciB2bm9kZSA9IHZub2Rlc1tpXVxuXHRcdFx0aWYgKHZub2RlICE9IG51bGwpIHJlbW92ZU5vZGUocGFyZW50LCB2bm9kZSlcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gcmVtb3ZlTm9kZShwYXJlbnQsIHZub2RlKSB7XG5cdFx0dmFyIG1hc2sgPSAwXG5cdFx0dmFyIG9yaWdpbmFsID0gdm5vZGUuc3RhdGVcblx0XHR2YXIgc3RhdGVSZXN1bHQsIGF0dHJzUmVzdWx0XG5cdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZub2RlLnN0YXRlLm9uYmVmb3JlcmVtb3ZlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHZhciByZXN1bHQgPSBjYWxsSG9vay5jYWxsKHZub2RlLnN0YXRlLm9uYmVmb3JlcmVtb3ZlLCB2bm9kZSlcblx0XHRcdGlmIChyZXN1bHQgIT0gbnVsbCAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRtYXNrID0gMVxuXHRcdFx0XHRzdGF0ZVJlc3VsdCA9IHJlc3VsdFxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodm5vZGUuYXR0cnMgJiYgdHlwZW9mIHZub2RlLmF0dHJzLm9uYmVmb3JlcmVtb3ZlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHZhciByZXN1bHQgPSBjYWxsSG9vay5jYWxsKHZub2RlLmF0dHJzLm9uYmVmb3JlcmVtb3ZlLCB2bm9kZSlcblx0XHRcdGlmIChyZXN1bHQgIT0gbnVsbCAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuXHRcdFx0XHRtYXNrIHw9IDJcblx0XHRcdFx0YXR0cnNSZXN1bHQgPSByZXN1bHRcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2hlY2tTdGF0ZSh2bm9kZSwgb3JpZ2luYWwpXG5cblx0XHQvLyBJZiB3ZSBjYW4sIHRyeSB0byBmYXN0LXBhdGggaXQgYW5kIGF2b2lkIGFsbCB0aGUgb3ZlcmhlYWQgb2YgYXdhaXRpbmdcblx0XHRpZiAoIW1hc2spIHtcblx0XHRcdG9ucmVtb3ZlKHZub2RlKVxuXHRcdFx0cmVtb3ZlQ2hpbGQocGFyZW50LCB2bm9kZSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHN0YXRlUmVzdWx0ICE9IG51bGwpIHtcblx0XHRcdFx0dmFyIG5leHQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2Vcblx0XHRcdFx0XHRpZiAobWFzayAmIDEpIHsgbWFzayAmPSAyOyBpZiAoIW1hc2spIHJlYWxseVJlbW92ZSgpIH1cblx0XHRcdFx0fVxuXHRcdFx0XHRzdGF0ZVJlc3VsdC50aGVuKG5leHQsIG5leHQpXG5cdFx0XHR9XG5cdFx0XHRpZiAoYXR0cnNSZXN1bHQgIT0gbnVsbCkge1xuXHRcdFx0XHR2YXIgbmV4dCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuXHRcdFx0XHRcdGlmIChtYXNrICYgMikgeyBtYXNrICY9IDE7IGlmICghbWFzaykgcmVhbGx5UmVtb3ZlKCkgfVxuXHRcdFx0XHR9XG5cdFx0XHRcdGF0dHJzUmVzdWx0LnRoZW4obmV4dCwgbmV4dClcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiByZWFsbHlSZW1vdmUoKSB7XG5cdFx0XHRjaGVja1N0YXRlKHZub2RlLCBvcmlnaW5hbClcblx0XHRcdG9ucmVtb3ZlKHZub2RlKVxuXHRcdFx0cmVtb3ZlQ2hpbGQocGFyZW50LCB2bm9kZSlcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gcmVtb3ZlSFRNTChwYXJlbnQsIHZub2RlKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZS5pbnN0YW5jZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKHZub2RlLmluc3RhbmNlW2ldKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiByZW1vdmVDaGlsZChwYXJlbnQsIHZub2RlKSB7XG5cdFx0Ly8gRG9kZ2UgdGhlIHJlY3Vyc2lvbiBvdmVyaGVhZCBpbiBhIGZldyBvZiB0aGUgbW9zdCBjb21tb24gY2FzZXMuXG5cdFx0d2hpbGUgKHZub2RlLmRvbSAhPSBudWxsICYmIHZub2RlLmRvbS5wYXJlbnROb2RlID09PSBwYXJlbnQpIHtcblx0XHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdHZub2RlID0gdm5vZGUuaW5zdGFuY2Vcblx0XHRcdFx0aWYgKHZub2RlICE9IG51bGwpIGNvbnRpbnVlXG5cdFx0XHR9IGVsc2UgaWYgKHZub2RlLnRhZyA9PT0gXCI8XCIpIHtcblx0XHRcdFx0cmVtb3ZlSFRNTChwYXJlbnQsIHZub2RlKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHZub2RlLnRhZyAhPT0gXCJbXCIpIHtcblx0XHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQodm5vZGUuZG9tKVxuXHRcdFx0XHRcdGlmICghQXJyYXkuaXNBcnJheSh2bm9kZS5jaGlsZHJlbikpIGJyZWFrXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHZub2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHZub2RlID0gdm5vZGUuY2hpbGRyZW5bMF1cblx0XHRcdFx0XHRpZiAodm5vZGUgIT0gbnVsbCkgY29udGludWVcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR2YXIgY2hpbGQgPSB2bm9kZS5jaGlsZHJlbltpXVxuXHRcdFx0XHRcdFx0aWYgKGNoaWxkICE9IG51bGwpIHJlbW92ZUNoaWxkKHBhcmVudCwgY2hpbGQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRicmVha1xuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBvbnJlbW92ZSh2bm9kZSkge1xuXHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2bm9kZS5zdGF0ZS5vbnJlbW92ZSA9PT0gXCJmdW5jdGlvblwiKSBjYWxsSG9vay5jYWxsKHZub2RlLnN0YXRlLm9ucmVtb3ZlLCB2bm9kZSlcblx0XHRpZiAodm5vZGUuYXR0cnMgJiYgdHlwZW9mIHZub2RlLmF0dHJzLm9ucmVtb3ZlID09PSBcImZ1bmN0aW9uXCIpIGNhbGxIb29rLmNhbGwodm5vZGUuYXR0cnMub25yZW1vdmUsIHZub2RlKVxuXHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRpZiAodm5vZGUuaW5zdGFuY2UgIT0gbnVsbCkgb25yZW1vdmUodm5vZGUuaW5zdGFuY2UpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldXG5cdFx0XHRcdFx0aWYgKGNoaWxkICE9IG51bGwpIG9ucmVtb3ZlKGNoaWxkKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly9hdHRyc1xuXHRmdW5jdGlvbiBzZXRBdHRycyh2bm9kZSwgYXR0cnMsIG5zKSB7XG5cdFx0Zm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0XHRzZXRBdHRyKHZub2RlLCBrZXksIG51bGwsIGF0dHJzW2tleV0sIG5zKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBzZXRBdHRyKHZub2RlLCBrZXksIG9sZCwgdmFsdWUsIG5zKSB7XG5cdFx0aWYgKGtleSA9PT0gXCJrZXlcIiB8fCBrZXkgPT09IFwiaXNcIiB8fCB2YWx1ZSA9PSBudWxsIHx8IGlzTGlmZWN5Y2xlTWV0aG9kKGtleSkgfHwgKG9sZCA9PT0gdmFsdWUgJiYgIWlzRm9ybUF0dHJpYnV0ZSh2bm9kZSwga2V5KSkgJiYgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiKSByZXR1cm5cblx0XHRpZiAoa2V5WzBdID09PSBcIm9cIiAmJiBrZXlbMV0gPT09IFwiblwiKSByZXR1cm4gdXBkYXRlRXZlbnQodm5vZGUsIGtleSwgdmFsdWUpXG5cdFx0aWYgKGtleS5zbGljZSgwLCA2KSA9PT0gXCJ4bGluazpcIikgdm5vZGUuZG9tLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBrZXkuc2xpY2UoNiksIHZhbHVlKVxuXHRcdGVsc2UgaWYgKGtleSA9PT0gXCJzdHlsZVwiKSB1cGRhdGVTdHlsZSh2bm9kZS5kb20sIG9sZCwgdmFsdWUpXG5cdFx0ZWxzZSBpZiAoaGFzUHJvcGVydHlLZXkodm5vZGUsIGtleSwgbnMpKSB7XG5cdFx0XHRpZiAoa2V5ID09PSBcInZhbHVlXCIpIHtcblx0XHRcdFx0Ly8gT25seSBkbyB0aGUgY29lcmNpb24gaWYgd2UncmUgYWN0dWFsbHkgZ29pbmcgdG8gY2hlY2sgdGhlIHZhbHVlLlxuXHRcdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1pbXBsaWNpdC1jb2VyY2lvbiAqL1xuXHRcdFx0XHQvL3NldHRpbmcgaW5wdXRbdmFsdWVdIHRvIHNhbWUgdmFsdWUgYnkgdHlwaW5nIG9uIGZvY3VzZWQgZWxlbWVudCBtb3ZlcyBjdXJzb3IgdG8gZW5kIGluIENocm9tZVxuXHRcdFx0XHRpZiAoKHZub2RlLnRhZyA9PT0gXCJpbnB1dFwiIHx8IHZub2RlLnRhZyA9PT0gXCJ0ZXh0YXJlYVwiKSAmJiB2bm9kZS5kb20udmFsdWUgPT09IFwiXCIgKyB2YWx1ZSAmJiB2bm9kZS5kb20gPT09IGFjdGl2ZUVsZW1lbnQoKSkgcmV0dXJuXG5cdFx0XHRcdC8vc2V0dGluZyBzZWxlY3RbdmFsdWVdIHRvIHNhbWUgdmFsdWUgd2hpbGUgaGF2aW5nIHNlbGVjdCBvcGVuIGJsaW5rcyBzZWxlY3QgZHJvcGRvd24gaW4gQ2hyb21lXG5cdFx0XHRcdGlmICh2bm9kZS50YWcgPT09IFwic2VsZWN0XCIgJiYgb2xkICE9PSBudWxsICYmIHZub2RlLmRvbS52YWx1ZSA9PT0gXCJcIiArIHZhbHVlKSByZXR1cm5cblx0XHRcdFx0Ly9zZXR0aW5nIG9wdGlvblt2YWx1ZV0gdG8gc2FtZSB2YWx1ZSB3aGlsZSBoYXZpbmcgc2VsZWN0IG9wZW4gYmxpbmtzIHNlbGVjdCBkcm9wZG93biBpbiBDaHJvbWVcblx0XHRcdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJvcHRpb25cIiAmJiBvbGQgIT09IG51bGwgJiYgdm5vZGUuZG9tLnZhbHVlID09PSBcIlwiICsgdmFsdWUpIHJldHVyblxuXHRcdFx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWltcGxpY2l0LWNvZXJjaW9uICovXG5cdFx0XHR9XG5cdFx0XHQvLyBJZiB5b3UgYXNzaWduIGFuIGlucHV0IHR5cGUgdGhhdCBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFIDExIHdpdGggYW4gYXNzaWdubWVudCBleHByZXNzaW9uLCBhbiBlcnJvciB3aWxsIG9jY3VyLlxuXHRcdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJpbnB1dFwiICYmIGtleSA9PT0gXCJ0eXBlXCIpIHZub2RlLmRvbS5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcblx0XHRcdGVsc2Ugdm5vZGUuZG9tW2tleV0gPSB2YWx1ZVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuXHRcdFx0XHRpZiAodmFsdWUpIHZub2RlLmRvbS5zZXRBdHRyaWJ1dGUoa2V5LCBcIlwiKVxuXHRcdFx0XHRlbHNlIHZub2RlLmRvbS5yZW1vdmVBdHRyaWJ1dGUoa2V5KVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB2bm9kZS5kb20uc2V0QXR0cmlidXRlKGtleSA9PT0gXCJjbGFzc05hbWVcIiA/IFwiY2xhc3NcIiA6IGtleSwgdmFsdWUpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZUF0dHIodm5vZGUsIGtleSwgb2xkLCBucykge1xuXHRcdGlmIChrZXkgPT09IFwia2V5XCIgfHwga2V5ID09PSBcImlzXCIgfHwgb2xkID09IG51bGwgfHwgaXNMaWZlY3ljbGVNZXRob2Qoa2V5KSkgcmV0dXJuXG5cdFx0aWYgKGtleVswXSA9PT0gXCJvXCIgJiYga2V5WzFdID09PSBcIm5cIiAmJiAhaXNMaWZlY3ljbGVNZXRob2Qoa2V5KSkgdXBkYXRlRXZlbnQodm5vZGUsIGtleSwgdW5kZWZpbmVkKVxuXHRcdGVsc2UgaWYgKGtleSA9PT0gXCJzdHlsZVwiKSB1cGRhdGVTdHlsZSh2bm9kZS5kb20sIG9sZCwgbnVsbClcblx0XHRlbHNlIGlmIChcblx0XHRcdGhhc1Byb3BlcnR5S2V5KHZub2RlLCBrZXksIG5zKVxuXHRcdFx0JiYga2V5ICE9PSBcImNsYXNzTmFtZVwiXG5cdFx0XHQmJiAhKGtleSA9PT0gXCJ2YWx1ZVwiICYmIChcblx0XHRcdFx0dm5vZGUudGFnID09PSBcIm9wdGlvblwiXG5cdFx0XHRcdHx8IHZub2RlLnRhZyA9PT0gXCJzZWxlY3RcIiAmJiB2bm9kZS5kb20uc2VsZWN0ZWRJbmRleCA9PT0gLTEgJiYgdm5vZGUuZG9tID09PSBhY3RpdmVFbGVtZW50KClcblx0XHRcdCkpXG5cdFx0XHQmJiAhKHZub2RlLnRhZyA9PT0gXCJpbnB1dFwiICYmIGtleSA9PT0gXCJ0eXBlXCIpXG5cdFx0KSB7XG5cdFx0XHR2bm9kZS5kb21ba2V5XSA9IG51bGxcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIG5zTGFzdEluZGV4ID0ga2V5LmluZGV4T2YoXCI6XCIpXG5cdFx0XHRpZiAobnNMYXN0SW5kZXggIT09IC0xKSBrZXkgPSBrZXkuc2xpY2UobnNMYXN0SW5kZXggKyAxKVxuXHRcdFx0aWYgKG9sZCAhPT0gZmFsc2UpIHZub2RlLmRvbS5yZW1vdmVBdHRyaWJ1dGUoa2V5ID09PSBcImNsYXNzTmFtZVwiID8gXCJjbGFzc1wiIDoga2V5KVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBzZXRMYXRlU2VsZWN0QXR0cnModm5vZGUsIGF0dHJzKSB7XG5cdFx0aWYgKFwidmFsdWVcIiBpbiBhdHRycykge1xuXHRcdFx0aWYoYXR0cnMudmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0aWYgKHZub2RlLmRvbS5zZWxlY3RlZEluZGV4ICE9PSAtMSkgdm5vZGUuZG9tLnZhbHVlID0gbnVsbFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIG5vcm1hbGl6ZWQgPSBcIlwiICsgYXR0cnMudmFsdWUgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1pbXBsaWNpdC1jb2VyY2lvblxuXHRcdFx0XHRpZiAodm5vZGUuZG9tLnZhbHVlICE9PSBub3JtYWxpemVkIHx8IHZub2RlLmRvbS5zZWxlY3RlZEluZGV4ID09PSAtMSkge1xuXHRcdFx0XHRcdHZub2RlLmRvbS52YWx1ZSA9IG5vcm1hbGl6ZWRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoXCJzZWxlY3RlZEluZGV4XCIgaW4gYXR0cnMpIHNldEF0dHIodm5vZGUsIFwic2VsZWN0ZWRJbmRleFwiLCBudWxsLCBhdHRycy5zZWxlY3RlZEluZGV4LCB1bmRlZmluZWQpXG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlQXR0cnModm5vZGUsIG9sZCwgYXR0cnMsIG5zKSB7XG5cdFx0aWYgKGF0dHJzICE9IG51bGwpIHtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRycykge1xuXHRcdFx0XHRzZXRBdHRyKHZub2RlLCBrZXksIG9sZCAmJiBvbGRba2V5XSwgYXR0cnNba2V5XSwgbnMpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHZhciB2YWxcblx0XHRpZiAob2xkICE9IG51bGwpIHtcblx0XHRcdGZvciAodmFyIGtleSBpbiBvbGQpIHtcblx0XHRcdFx0aWYgKCgodmFsID0gb2xkW2tleV0pICE9IG51bGwpICYmIChhdHRycyA9PSBudWxsIHx8IGF0dHJzW2tleV0gPT0gbnVsbCkpIHtcblx0XHRcdFx0XHRyZW1vdmVBdHRyKHZub2RlLCBrZXksIHZhbCwgbnMpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gaXNGb3JtQXR0cmlidXRlKHZub2RlLCBhdHRyKSB7XG5cdFx0cmV0dXJuIGF0dHIgPT09IFwidmFsdWVcIiB8fCBhdHRyID09PSBcImNoZWNrZWRcIiB8fCBhdHRyID09PSBcInNlbGVjdGVkSW5kZXhcIiB8fCBhdHRyID09PSBcInNlbGVjdGVkXCIgJiYgdm5vZGUuZG9tID09PSBhY3RpdmVFbGVtZW50KCkgfHwgdm5vZGUudGFnID09PSBcIm9wdGlvblwiICYmIHZub2RlLmRvbS5wYXJlbnROb2RlID09PSAkZG9jLmFjdGl2ZUVsZW1lbnRcblx0fVxuXHRmdW5jdGlvbiBpc0xpZmVjeWNsZU1ldGhvZChhdHRyKSB7XG5cdFx0cmV0dXJuIGF0dHIgPT09IFwib25pbml0XCIgfHwgYXR0ciA9PT0gXCJvbmNyZWF0ZVwiIHx8IGF0dHIgPT09IFwib251cGRhdGVcIiB8fCBhdHRyID09PSBcIm9ucmVtb3ZlXCIgfHwgYXR0ciA9PT0gXCJvbmJlZm9yZXJlbW92ZVwiIHx8IGF0dHIgPT09IFwib25iZWZvcmV1cGRhdGVcIlxuXHR9XG5cdGZ1bmN0aW9uIGhhc1Byb3BlcnR5S2V5KHZub2RlLCBrZXksIG5zKSB7XG5cdFx0Ly8gRmlsdGVyIG91dCBuYW1lc3BhY2VkIGtleXNcblx0XHRyZXR1cm4gbnMgPT09IHVuZGVmaW5lZCAmJiAoXG5cdFx0XHQvLyBJZiBpdCdzIGEgY3VzdG9tIGVsZW1lbnQsIGp1c3Qga2VlcCBpdC5cblx0XHRcdHZub2RlLnRhZy5pbmRleE9mKFwiLVwiKSA+IC0xIHx8IHZub2RlLmF0dHJzICE9IG51bGwgJiYgdm5vZGUuYXR0cnMuaXMgfHxcblx0XHRcdC8vIElmIGl0J3MgYSBub3JtYWwgZWxlbWVudCwgbGV0J3MgdHJ5IHRvIGF2b2lkIGEgZmV3IGJyb3dzZXIgYnVncy5cblx0XHRcdGtleSAhPT0gXCJocmVmXCIgJiYga2V5ICE9PSBcImxpc3RcIiAmJiBrZXkgIT09IFwiZm9ybVwiICYmIGtleSAhPT0gXCJ3aWR0aFwiICYmIGtleSAhPT0gXCJoZWlnaHRcIi8vICYmIGtleSAhPT0gXCJ0eXBlXCJcblx0XHRcdC8vIERlZmVyIHRoZSBwcm9wZXJ0eSBjaGVjayB1bnRpbCAqYWZ0ZXIqIHdlIGNoZWNrIGV2ZXJ5dGhpbmcuXG5cdFx0KSAmJiBrZXkgaW4gdm5vZGUuZG9tXG5cdH1cblxuXHQvL3N0eWxlXG5cdHZhciB1cHBlcmNhc2VSZWdleCA9IC9bQS1aXS9nXG5cdGZ1bmN0aW9uIHRvTG93ZXJDYXNlKGNhcGl0YWwpIHsgcmV0dXJuIFwiLVwiICsgY2FwaXRhbC50b0xvd2VyQ2FzZSgpIH1cblx0ZnVuY3Rpb24gbm9ybWFsaXplS2V5KGtleSkge1xuXHRcdHJldHVybiBrZXlbMF0gPT09IFwiLVwiICYmIGtleVsxXSA9PT0gXCItXCIgPyBrZXkgOlxuXHRcdFx0a2V5ID09PSBcImNzc0Zsb2F0XCIgPyBcImZsb2F0XCIgOlxuXHRcdFx0XHRrZXkucmVwbGFjZSh1cHBlcmNhc2VSZWdleCwgdG9Mb3dlckNhc2UpXG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlU3R5bGUoZWxlbWVudCwgb2xkLCBzdHlsZSkge1xuXHRcdGlmIChvbGQgPT09IHN0eWxlKSB7XG5cdFx0XHQvLyBTdHlsZXMgYXJlIGVxdWl2YWxlbnQsIGRvIG5vdGhpbmcuXG5cdFx0fSBlbHNlIGlmIChzdHlsZSA9PSBudWxsKSB7XG5cdFx0XHQvLyBOZXcgc3R5bGUgaXMgbWlzc2luZywganVzdCBjbGVhciBpdC5cblx0XHRcdGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IFwiXCJcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBzdHlsZSAhPT0gXCJvYmplY3RcIikge1xuXHRcdFx0Ly8gTmV3IHN0eWxlIGlzIGEgc3RyaW5nLCBsZXQgZW5naW5lIGRlYWwgd2l0aCBwYXRjaGluZy5cblx0XHRcdGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG5cdFx0fSBlbHNlIGlmIChvbGQgPT0gbnVsbCB8fCB0eXBlb2Ygb2xkICE9PSBcIm9iamVjdFwiKSB7XG5cdFx0XHQvLyBgb2xkYCBpcyBtaXNzaW5nIG9yIGEgc3RyaW5nLCBgc3R5bGVgIGlzIGFuIG9iamVjdC5cblx0XHRcdGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IFwiXCJcblx0XHRcdC8vIEFkZCBuZXcgc3R5bGUgcHJvcGVydGllc1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IHN0eWxlW2tleV1cblx0XHRcdFx0aWYgKHZhbHVlICE9IG51bGwpIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkobm9ybWFsaXplS2V5KGtleSksIFN0cmluZyh2YWx1ZSkpXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIEJvdGggb2xkICYgbmV3IGFyZSAoZGlmZmVyZW50KSBvYmplY3RzLlxuXHRcdFx0Ly8gVXBkYXRlIHN0eWxlIHByb3BlcnRpZXMgdGhhdCBoYXZlIGNoYW5nZWRcblx0XHRcdGZvciAodmFyIGtleSBpbiBzdHlsZSkge1xuXHRcdFx0XHR2YXIgdmFsdWUgPSBzdHlsZVtrZXldXG5cdFx0XHRcdGlmICh2YWx1ZSAhPSBudWxsICYmICh2YWx1ZSA9IFN0cmluZyh2YWx1ZSkpICE9PSBTdHJpbmcob2xkW2tleV0pKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShub3JtYWxpemVLZXkoa2V5KSwgdmFsdWUpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIFJlbW92ZSBzdHlsZSBwcm9wZXJ0aWVzIHRoYXQgbm8gbG9uZ2VyIGV4aXN0XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gb2xkKSB7XG5cdFx0XHRcdGlmIChvbGRba2V5XSAhPSBudWxsICYmIHN0eWxlW2tleV0gPT0gbnVsbCkge1xuXHRcdFx0XHRcdGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkobm9ybWFsaXplS2V5KGtleSkpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBIZXJlJ3MgYW4gZXhwbGFuYXRpb24gb2YgaG93IHRoaXMgd29ya3M6XG5cdC8vIDEuIFRoZSBldmVudCBuYW1lcyBhcmUgYWx3YXlzIChieSBkZXNpZ24pIHByZWZpeGVkIGJ5IGBvbmAuXG5cdC8vIDIuIFRoZSBFdmVudExpc3RlbmVyIGludGVyZmFjZSBhY2NlcHRzIGVpdGhlciBhIGZ1bmN0aW9uIG9yIGFuIG9iamVjdFxuXHQvLyAgICB3aXRoIGEgYGhhbmRsZUV2ZW50YCBtZXRob2QuXG5cdC8vIDMuIFRoZSBvYmplY3QgZG9lcyBub3QgaW5oZXJpdCBmcm9tIGBPYmplY3QucHJvdG90eXBlYCwgdG8gYXZvaWRcblx0Ly8gICAgYW55IHBvdGVudGlhbCBpbnRlcmZlcmVuY2Ugd2l0aCB0aGF0IChlLmcuIHNldHRlcnMpLlxuXHQvLyA0LiBUaGUgZXZlbnQgbmFtZSBpcyByZW1hcHBlZCB0byB0aGUgaGFuZGxlciBiZWZvcmUgY2FsbGluZyBpdC5cblx0Ly8gNS4gSW4gZnVuY3Rpb24tYmFzZWQgZXZlbnQgaGFuZGxlcnMsIGBldi50YXJnZXQgPT09IHRoaXNgLiBXZSByZXBsaWNhdGVcblx0Ly8gICAgdGhhdCBiZWxvdy5cblx0Ly8gNi4gSW4gZnVuY3Rpb24tYmFzZWQgZXZlbnQgaGFuZGxlcnMsIGByZXR1cm4gZmFsc2VgIHByZXZlbnRzIHRoZSBkZWZhdWx0XG5cdC8vICAgIGFjdGlvbiBhbmQgc3RvcHMgZXZlbnQgcHJvcGFnYXRpb24uIFdlIHJlcGxpY2F0ZSB0aGF0IGJlbG93LlxuXHRmdW5jdGlvbiBFdmVudERpY3QoKSB7XG5cdFx0Ly8gU2F2ZSB0aGlzLCBzbyB0aGUgY3VycmVudCByZWRyYXcgaXMgY29ycmVjdGx5IHRyYWNrZWQuXG5cdFx0dGhpcy5fID0gY3VycmVudFJlZHJhd1xuXHR9XG5cdEV2ZW50RGljdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cdEV2ZW50RGljdC5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZXYpIHtcblx0XHR2YXIgaGFuZGxlciA9IHRoaXNbXCJvblwiICsgZXYudHlwZV1cblx0XHR2YXIgcmVzdWx0XG5cdFx0aWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHJlc3VsdCA9IGhhbmRsZXIuY2FsbChldi5jdXJyZW50VGFyZ2V0LCBldilcblx0XHRlbHNlIGlmICh0eXBlb2YgaGFuZGxlci5oYW5kbGVFdmVudCA9PT0gXCJmdW5jdGlvblwiKSBoYW5kbGVyLmhhbmRsZUV2ZW50KGV2KVxuXHRcdGlmICh0aGlzLl8gJiYgZXYucmVkcmF3ICE9PSBmYWxzZSkgKDAsIHRoaXMuXykoKVxuXHRcdGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG5cdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRldi5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdH1cblx0fVxuXG5cdC8vZXZlbnRcblx0ZnVuY3Rpb24gdXBkYXRlRXZlbnQodm5vZGUsIGtleSwgdmFsdWUpIHtcblx0XHRpZiAodm5vZGUuZXZlbnRzICE9IG51bGwpIHtcblx0XHRcdGlmICh2bm9kZS5ldmVudHNba2V5XSA9PT0gdmFsdWUpIHJldHVyblxuXHRcdFx0aWYgKHZhbHVlICE9IG51bGwgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikpIHtcblx0XHRcdFx0aWYgKHZub2RlLmV2ZW50c1trZXldID09IG51bGwpIHZub2RlLmRvbS5hZGRFdmVudExpc3RlbmVyKGtleS5zbGljZSgyKSwgdm5vZGUuZXZlbnRzLCBmYWxzZSlcblx0XHRcdFx0dm5vZGUuZXZlbnRzW2tleV0gPSB2YWx1ZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHZub2RlLmV2ZW50c1trZXldICE9IG51bGwpIHZub2RlLmRvbS5yZW1vdmVFdmVudExpc3RlbmVyKGtleS5zbGljZSgyKSwgdm5vZGUuZXZlbnRzLCBmYWxzZSlcblx0XHRcdFx0dm5vZGUuZXZlbnRzW2tleV0gPSB1bmRlZmluZWRcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHZhbHVlICE9IG51bGwgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikpIHtcblx0XHRcdHZub2RlLmV2ZW50cyA9IG5ldyBFdmVudERpY3QoKVxuXHRcdFx0dm5vZGUuZG9tLmFkZEV2ZW50TGlzdGVuZXIoa2V5LnNsaWNlKDIpLCB2bm9kZS5ldmVudHMsIGZhbHNlKVxuXHRcdFx0dm5vZGUuZXZlbnRzW2tleV0gPSB2YWx1ZVxuXHRcdH1cblx0fVxuXG5cdC8vbGlmZWN5Y2xlXG5cdGZ1bmN0aW9uIGluaXRMaWZlY3ljbGUoc291cmNlLCB2bm9kZSwgaG9va3MpIHtcblx0XHRpZiAodHlwZW9mIHNvdXJjZS5vbmluaXQgPT09IFwiZnVuY3Rpb25cIikgY2FsbEhvb2suY2FsbChzb3VyY2Uub25pbml0LCB2bm9kZSlcblx0XHRpZiAodHlwZW9mIHNvdXJjZS5vbmNyZWF0ZSA9PT0gXCJmdW5jdGlvblwiKSBob29rcy5wdXNoKGNhbGxIb29rLmJpbmQoc291cmNlLm9uY3JlYXRlLCB2bm9kZSkpXG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTGlmZWN5Y2xlKHNvdXJjZSwgdm5vZGUsIGhvb2tzKSB7XG5cdFx0aWYgKHR5cGVvZiBzb3VyY2Uub251cGRhdGUgPT09IFwiZnVuY3Rpb25cIikgaG9va3MucHVzaChjYWxsSG9vay5iaW5kKHNvdXJjZS5vbnVwZGF0ZSwgdm5vZGUpKVxuXHR9XG5cdGZ1bmN0aW9uIHNob3VsZE5vdFVwZGF0ZSh2bm9kZSwgb2xkKSB7XG5cdFx0ZG8ge1xuXHRcdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwgJiYgdHlwZW9mIHZub2RlLmF0dHJzLm9uYmVmb3JldXBkYXRlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0dmFyIGZvcmNlID0gY2FsbEhvb2suY2FsbCh2bm9kZS5hdHRycy5vbmJlZm9yZXVwZGF0ZSwgdm5vZGUsIG9sZClcblx0XHRcdFx0aWYgKGZvcmNlICE9PSB1bmRlZmluZWQgJiYgIWZvcmNlKSBicmVha1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZub2RlLnN0YXRlLm9uYmVmb3JldXBkYXRlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0dmFyIGZvcmNlID0gY2FsbEhvb2suY2FsbCh2bm9kZS5zdGF0ZS5vbmJlZm9yZXVwZGF0ZSwgdm5vZGUsIG9sZClcblx0XHRcdFx0aWYgKGZvcmNlICE9PSB1bmRlZmluZWQgJiYgIWZvcmNlKSBicmVha1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0fSB3aGlsZSAoZmFsc2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuXHRcdHZub2RlLmRvbSA9IG9sZC5kb21cblx0XHR2bm9kZS5kb21TaXplID0gb2xkLmRvbVNpemVcblx0XHR2bm9kZS5pbnN0YW5jZSA9IG9sZC5pbnN0YW5jZVxuXHRcdC8vIE9uZSB3b3VsZCB0aGluayBoYXZpbmcgdGhlIGFjdHVhbCBsYXRlc3QgYXR0cmlidXRlcyB3b3VsZCBiZSBpZGVhbCxcblx0XHQvLyBidXQgaXQgZG9lc24ndCBsZXQgdXMgcHJvcGVybHkgZGlmZiBiYXNlZCBvbiBvdXIgY3VycmVudCBpbnRlcm5hbFxuXHRcdC8vIHJlcHJlc2VudGF0aW9uLiBXZSBoYXZlIHRvIHNhdmUgbm90IG9ubHkgdGhlIG9sZCBET00gaW5mbywgYnV0IGFsc29cblx0XHQvLyB0aGUgYXR0cmlidXRlcyB1c2VkIHRvIGNyZWF0ZSBpdCwgYXMgd2UgZGlmZiAqdGhhdCosIG5vdCBhZ2FpbnN0IHRoZVxuXHRcdC8vIERPTSBkaXJlY3RseSAod2l0aCBhIGZldyBleGNlcHRpb25zIGluIGBzZXRBdHRyYCkuIEFuZCwgb2YgY291cnNlLCB3ZVxuXHRcdC8vIG5lZWQgdG8gc2F2ZSB0aGUgY2hpbGRyZW4gYW5kIHRleHQgYXMgdGhleSBhcmUgY29uY2VwdHVhbGx5IG5vdFxuXHRcdC8vIHVubGlrZSBzcGVjaWFsIFwiYXR0cmlidXRlc1wiIGludGVybmFsbHkuXG5cdFx0dm5vZGUuYXR0cnMgPSBvbGQuYXR0cnNcblx0XHR2bm9kZS5jaGlsZHJlbiA9IG9sZC5jaGlsZHJlblxuXHRcdHZub2RlLnRleHQgPSBvbGQudGV4dFxuXHRcdHJldHVybiB0cnVlXG5cdH1cblxuXHRyZXR1cm4gZnVuY3Rpb24oZG9tLCB2bm9kZXMsIHJlZHJhdykge1xuXHRcdGlmICghZG9tKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRW5zdXJlIHRoZSBET00gZWxlbWVudCBiZWluZyBwYXNzZWQgdG8gbS5yb3V0ZS9tLm1vdW50L20ucmVuZGVyIGlzIG5vdCB1bmRlZmluZWQuXCIpXG5cdFx0dmFyIGhvb2tzID0gW11cblx0XHR2YXIgYWN0aXZlID0gYWN0aXZlRWxlbWVudCgpXG5cdFx0dmFyIG5hbWVzcGFjZSA9IGRvbS5uYW1lc3BhY2VVUklcblxuXHRcdC8vIEZpcnN0IHRpbWUgcmVuZGVyaW5nIGludG8gYSBub2RlIGNsZWFycyBpdCBvdXRcblx0XHRpZiAoZG9tLnZub2RlcyA9PSBudWxsKSBkb20udGV4dENvbnRlbnQgPSBcIlwiXG5cblx0XHR2bm9kZXMgPSBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbihBcnJheS5pc0FycmF5KHZub2RlcykgPyB2bm9kZXMgOiBbdm5vZGVzXSlcblx0XHR2YXIgcHJldlJlZHJhdyA9IGN1cnJlbnRSZWRyYXdcblx0XHR0cnkge1xuXHRcdFx0Y3VycmVudFJlZHJhdyA9IHR5cGVvZiByZWRyYXcgPT09IFwiZnVuY3Rpb25cIiA/IHJlZHJhdyA6IHVuZGVmaW5lZFxuXHRcdFx0dXBkYXRlTm9kZXMoZG9tLCBkb20udm5vZGVzLCB2bm9kZXMsIGhvb2tzLCBudWxsLCBuYW1lc3BhY2UgPT09IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiID8gdW5kZWZpbmVkIDogbmFtZXNwYWNlKVxuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRjdXJyZW50UmVkcmF3ID0gcHJldlJlZHJhd1xuXHRcdH1cblx0XHRkb20udm5vZGVzID0gdm5vZGVzXG5cdFx0Ly8gYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgIGNhbiByZXR1cm4gbnVsbDogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNkb20tZG9jdW1lbnQtYWN0aXZlZWxlbWVudFxuXHRcdGlmIChhY3RpdmUgIT0gbnVsbCAmJiBhY3RpdmVFbGVtZW50KCkgIT09IGFjdGl2ZSAmJiB0eXBlb2YgYWN0aXZlLmZvY3VzID09PSBcImZ1bmN0aW9uXCIpIGFjdGl2ZS5mb2N1cygpXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykgaG9va3NbaV0oKVxuXHR9XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgVm5vZGUgPSByZXF1aXJlKFwiLi4vcmVuZGVyL3Zub2RlXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaHRtbCkge1xuXHRpZiAoaHRtbCA9PSBudWxsKSBodG1sID0gXCJcIlxuXHRyZXR1cm4gVm5vZGUoXCI8XCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBodG1sLCB1bmRlZmluZWQsIHVuZGVmaW5lZClcbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbmZ1bmN0aW9uIFZub2RlKHRhZywga2V5LCBhdHRycywgY2hpbGRyZW4sIHRleHQsIGRvbSkge1xuXHRyZXR1cm4ge3RhZzogdGFnLCBrZXk6IGtleSwgYXR0cnM6IGF0dHJzLCBjaGlsZHJlbjogY2hpbGRyZW4sIHRleHQ6IHRleHQsIGRvbTogZG9tLCBkb21TaXplOiB1bmRlZmluZWQsIHN0YXRlOiB1bmRlZmluZWQsIGV2ZW50czogdW5kZWZpbmVkLCBpbnN0YW5jZTogdW5kZWZpbmVkfVxufVxuVm5vZGUubm9ybWFsaXplID0gZnVuY3Rpb24obm9kZSkge1xuXHRpZiAoQXJyYXkuaXNBcnJheShub2RlKSkgcmV0dXJuIFZub2RlKFwiW1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4obm9kZSksIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxuXHRpZiAobm9kZSA9PSBudWxsIHx8IHR5cGVvZiBub2RlID09PSBcImJvb2xlYW5cIikgcmV0dXJuIG51bGxcblx0aWYgKHR5cGVvZiBub2RlID09PSBcIm9iamVjdFwiKSByZXR1cm4gbm9kZVxuXHRyZXR1cm4gVm5vZGUoXCIjXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTdHJpbmcobm9kZSksIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxufVxuVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4gPSBmdW5jdGlvbihpbnB1dCkge1xuXHR2YXIgY2hpbGRyZW4gPSBbXVxuXHRpZiAoaW5wdXQubGVuZ3RoKSB7XG5cdFx0dmFyIGlzS2V5ZWQgPSBpbnB1dFswXSAhPSBudWxsICYmIGlucHV0WzBdLmtleSAhPSBudWxsXG5cdFx0Ly8gTm90ZTogdGhpcyBpcyBhICp2ZXJ5KiBwZXJmLXNlbnNpdGl2ZSBjaGVjay5cblx0XHQvLyBGdW4gZmFjdDogbWVyZ2luZyB0aGUgbG9vcCBsaWtlIHRoaXMgaXMgc29tZWhvdyBmYXN0ZXIgdGhhbiBzcGxpdHRpbmdcblx0XHQvLyBpdCwgbm90aWNlYWJseSBzby5cblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoKGlucHV0W2ldICE9IG51bGwgJiYgaW5wdXRbaV0ua2V5ICE9IG51bGwpICE9PSBpc0tleWVkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJWbm9kZXMgbXVzdCBlaXRoZXIgYWx3YXlzIGhhdmUga2V5cyBvciBuZXZlciBoYXZlIGtleXMhXCIpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNoaWxkcmVuW2ldID0gVm5vZGUubm9ybWFsaXplKGlucHV0W2ldKVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2hpbGRyZW5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWbm9kZVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFByb21pc2VQb2x5ZmlsbCA9IHJlcXVpcmUoXCIuL3Byb21pc2UvcHJvbWlzZVwiKVxudmFyIG1vdW50UmVkcmF3ID0gcmVxdWlyZShcIi4vbW91bnQtcmVkcmF3XCIpXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcmVxdWVzdC9yZXF1ZXN0XCIpKHdpbmRvdywgUHJvbWlzZVBvbHlmaWxsLCBtb3VudFJlZHJhdy5yZWRyYXcpXG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgYnVpbGRQYXRobmFtZSA9IHJlcXVpcmUoXCIuLi9wYXRobmFtZS9idWlsZFwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCR3aW5kb3csIFByb21pc2UsIG9uY29tcGxldGlvbikge1xuXHR2YXIgY2FsbGJhY2tDb3VudCA9IDBcblxuXHRmdW5jdGlvbiBQcm9taXNlUHJveHkoZXhlY3V0b3IpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IpXG5cdH1cblxuXHQvLyBJbiBjYXNlIHRoZSBnbG9iYWwgUHJvbWlzZSBpcyBzb21lIHVzZXJsYW5kIGxpYnJhcnkncyB3aGVyZSB0aGV5IHJlbHkgb25cblx0Ly8gYGZvbyBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3JgLCBgdGhpcy5jb25zdHJ1Y3Rvci5yZXNvbHZlKHZhbHVlKWAsIG9yXG5cdC8vIHNpbWlsYXIuIExldCdzICpub3QqIGJyZWFrIHRoZW0uXG5cdFByb21pc2VQcm94eS5wcm90b3R5cGUgPSBQcm9taXNlLnByb3RvdHlwZVxuXHRQcm9taXNlUHJveHkuX19wcm90b19fID0gUHJvbWlzZSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvXG5cblx0ZnVuY3Rpb24gbWFrZVJlcXVlc3QoZmFjdG9yeSkge1xuXHRcdHJldHVybiBmdW5jdGlvbih1cmwsIGFyZ3MpIHtcblx0XHRcdGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7IGFyZ3MgPSB1cmw7IHVybCA9IHVybC51cmwgfVxuXHRcdFx0ZWxzZSBpZiAoYXJncyA9PSBudWxsKSBhcmdzID0ge31cblx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRcdGZhY3RvcnkoYnVpbGRQYXRobmFtZSh1cmwsIGFyZ3MucGFyYW1zKSwgYXJncywgZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGFyZ3MudHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuXHRcdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHRkYXRhW2ldID0gbmV3IGFyZ3MudHlwZShkYXRhW2ldKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGRhdGEgPSBuZXcgYXJncy50eXBlKGRhdGEpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlc29sdmUoZGF0YSlcblx0XHRcdFx0fSwgcmVqZWN0KVxuXHRcdFx0fSlcblx0XHRcdGlmIChhcmdzLmJhY2tncm91bmQgPT09IHRydWUpIHJldHVybiBwcm9taXNlXG5cdFx0XHR2YXIgY291bnQgPSAwXG5cdFx0XHRmdW5jdGlvbiBjb21wbGV0ZSgpIHtcblx0XHRcdFx0aWYgKC0tY291bnQgPT09IDAgJiYgdHlwZW9mIG9uY29tcGxldGlvbiA9PT0gXCJmdW5jdGlvblwiKSBvbmNvbXBsZXRpb24oKVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gd3JhcChwcm9taXNlKVxuXG5cdFx0XHRmdW5jdGlvbiB3cmFwKHByb21pc2UpIHtcblx0XHRcdFx0dmFyIHRoZW4gPSBwcm9taXNlLnRoZW5cblx0XHRcdFx0Ly8gU2V0IHRoZSBjb25zdHJ1Y3Rvciwgc28gZW5naW5lcyBrbm93IHRvIG5vdCBhd2FpdCBvciByZXNvbHZlXG5cdFx0XHRcdC8vIHRoaXMgYXMgYSBuYXRpdmUgcHJvbWlzZS4gQXQgdGhlIHRpbWUgb2Ygd3JpdGluZywgdGhpcyBpc1xuXHRcdFx0XHQvLyBvbmx5IG5lY2Vzc2FyeSBmb3IgVjgsIGJ1dCB0aGVpciBiZWhhdmlvciBpcyB0aGUgY29ycmVjdFxuXHRcdFx0XHQvLyBiZWhhdmlvciBwZXIgc3BlYy4gU2VlIHRoaXMgc3BlYyBpc3N1ZSBmb3IgbW9yZSBkZXRhaWxzOlxuXHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9lY21hMjYyL2lzc3Vlcy8xNTc3LiBBbHNvLCBzZWUgdGhlXG5cdFx0XHRcdC8vIGNvcnJlc3BvbmRpbmcgY29tbWVudCBpbiBgcmVxdWVzdC90ZXN0cy90ZXN0LXJlcXVlc3QuanNgIGZvclxuXHRcdFx0XHQvLyBhIGJpdCBtb3JlIGJhY2tncm91bmQgb24gdGhlIGlzc3VlIGF0IGhhbmQuXG5cdFx0XHRcdHByb21pc2UuY29uc3RydWN0b3IgPSBQcm9taXNlUHJveHlcblx0XHRcdFx0cHJvbWlzZS50aGVuID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Y291bnQrK1xuXHRcdFx0XHRcdHZhciBuZXh0ID0gdGhlbi5hcHBseShwcm9taXNlLCBhcmd1bWVudHMpXG5cdFx0XHRcdFx0bmV4dC50aGVuKGNvbXBsZXRlLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRjb21wbGV0ZSgpXG5cdFx0XHRcdFx0XHRpZiAoY291bnQgPT09IDApIHRocm93IGVcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHJldHVybiB3cmFwKG5leHQpXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHByb21pc2Vcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBoYXNIZWFkZXIoYXJncywgbmFtZSkge1xuXHRcdGZvciAodmFyIGtleSBpbiBhcmdzLmhlYWRlcnMpIHtcblx0XHRcdGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3MuaGVhZGVycywga2V5KSAmJiBuYW1lLnRlc3Qoa2V5KSkgcmV0dXJuIHRydWVcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHJlcXVlc3Q6IG1ha2VSZXF1ZXN0KGZ1bmN0aW9uKHVybCwgYXJncywgcmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHR2YXIgbWV0aG9kID0gYXJncy5tZXRob2QgIT0gbnVsbCA/IGFyZ3MubWV0aG9kLnRvVXBwZXJDYXNlKCkgOiBcIkdFVFwiXG5cdFx0XHR2YXIgYm9keSA9IGFyZ3MuYm9keVxuXHRcdFx0dmFyIGFzc3VtZUpTT04gPSAoYXJncy5zZXJpYWxpemUgPT0gbnVsbCB8fCBhcmdzLnNlcmlhbGl6ZSA9PT0gSlNPTi5zZXJpYWxpemUpICYmICEoYm9keSBpbnN0YW5jZW9mICR3aW5kb3cuRm9ybURhdGEpXG5cdFx0XHR2YXIgcmVzcG9uc2VUeXBlID0gYXJncy5yZXNwb25zZVR5cGUgfHwgKHR5cGVvZiBhcmdzLmV4dHJhY3QgPT09IFwiZnVuY3Rpb25cIiA/IFwiXCIgOiBcImpzb25cIilcblxuXHRcdFx0dmFyIHhociA9IG5ldyAkd2luZG93LlhNTEh0dHBSZXF1ZXN0KCksIGFib3J0ZWQgPSBmYWxzZVxuXHRcdFx0dmFyIG9yaWdpbmFsID0geGhyLCByZXBsYWNlZEFib3J0XG5cdFx0XHR2YXIgYWJvcnQgPSB4aHIuYWJvcnRcblxuXHRcdFx0eGhyLmFib3J0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGFib3J0ZWQgPSB0cnVlXG5cdFx0XHRcdGFib3J0LmNhbGwodGhpcylcblx0XHRcdH1cblxuXHRcdFx0eGhyLm9wZW4obWV0aG9kLCB1cmwsIGFyZ3MuYXN5bmMgIT09IGZhbHNlLCB0eXBlb2YgYXJncy51c2VyID09PSBcInN0cmluZ1wiID8gYXJncy51c2VyIDogdW5kZWZpbmVkLCB0eXBlb2YgYXJncy5wYXNzd29yZCA9PT0gXCJzdHJpbmdcIiA/IGFyZ3MucGFzc3dvcmQgOiB1bmRlZmluZWQpXG5cblx0XHRcdGlmIChhc3N1bWVKU09OICYmIGJvZHkgIT0gbnVsbCAmJiAhaGFzSGVhZGVyKGFyZ3MsIC9eY29udGVudC10eXBlJC9pKSkge1xuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIilcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgYXJncy5kZXNlcmlhbGl6ZSAhPT0gXCJmdW5jdGlvblwiICYmICFoYXNIZWFkZXIoYXJncywgL15hY2NlcHQkL2kpKSB7XG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsIFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC8qXCIpXG5cdFx0XHR9XG5cdFx0XHRpZiAoYXJncy53aXRoQ3JlZGVudGlhbHMpIHhoci53aXRoQ3JlZGVudGlhbHMgPSBhcmdzLndpdGhDcmVkZW50aWFsc1xuXHRcdFx0aWYgKGFyZ3MudGltZW91dCkgeGhyLnRpbWVvdXQgPSBhcmdzLnRpbWVvdXRcblx0XHRcdHhoci5yZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGVcblxuXHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZ3MuaGVhZGVycykge1xuXHRcdFx0XHRpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChhcmdzLmhlYWRlcnMsIGtleSkpIHtcblx0XHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGFyZ3MuaGVhZGVyc1trZXldKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbihldikge1xuXHRcdFx0XHQvLyBEb24ndCB0aHJvdyBlcnJvcnMgb24geGhyLmFib3J0KCkuXG5cdFx0XHRcdGlmIChhYm9ydGVkKSByZXR1cm5cblxuXHRcdFx0XHRpZiAoZXYudGFyZ2V0LnJlYWR5U3RhdGUgPT09IDQpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0dmFyIHN1Y2Nlc3MgPSAoZXYudGFyZ2V0LnN0YXR1cyA+PSAyMDAgJiYgZXYudGFyZ2V0LnN0YXR1cyA8IDMwMCkgfHwgZXYudGFyZ2V0LnN0YXR1cyA9PT0gMzA0IHx8ICgvXmZpbGU6XFwvXFwvL2kpLnRlc3QodXJsKVxuXHRcdFx0XHRcdFx0Ly8gV2hlbiB0aGUgcmVzcG9uc2UgdHlwZSBpc24ndCBcIlwiIG9yIFwidGV4dFwiLFxuXHRcdFx0XHRcdFx0Ly8gYHhoci5yZXNwb25zZVRleHRgIGlzIHRoZSB3cm9uZyB0aGluZyB0byB1c2UuXG5cdFx0XHRcdFx0XHQvLyBCcm93c2VycyBkbyB0aGUgcmlnaHQgdGhpbmcgYW5kIHRocm93IGhlcmUsIGFuZCB3ZVxuXHRcdFx0XHRcdFx0Ly8gc2hvdWxkIGhvbm9yIHRoYXQgYW5kIGRvIHRoZSByaWdodCB0aGluZyBieVxuXHRcdFx0XHRcdFx0Ly8gcHJlZmVycmluZyBgeGhyLnJlc3BvbnNlYCB3aGVyZSBwb3NzaWJsZS9wcmFjdGljYWwuXG5cdFx0XHRcdFx0XHR2YXIgcmVzcG9uc2UgPSBldi50YXJnZXQucmVzcG9uc2UsIG1lc3NhZ2VcblxuXHRcdFx0XHRcdFx0aWYgKHJlc3BvbnNlVHlwZSA9PT0gXCJqc29uXCIpIHtcblx0XHRcdFx0XHRcdFx0Ly8gRm9yIElFIGFuZCBFZGdlLCB3aGljaCBkb24ndCBpbXBsZW1lbnRcblx0XHRcdFx0XHRcdFx0Ly8gYHJlc3BvbnNlVHlwZTogXCJqc29uXCJgLlxuXHRcdFx0XHRcdFx0XHRpZiAoIWV2LnRhcmdldC5yZXNwb25zZVR5cGUgJiYgdHlwZW9mIGFyZ3MuZXh0cmFjdCAhPT0gXCJmdW5jdGlvblwiKSByZXNwb25zZSA9IEpTT04ucGFyc2UoZXYudGFyZ2V0LnJlc3BvbnNlVGV4dClcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIXJlc3BvbnNlVHlwZSB8fCByZXNwb25zZVR5cGUgPT09IFwidGV4dFwiKSB7XG5cdFx0XHRcdFx0XHRcdC8vIE9ubHkgdXNlIHRoaXMgZGVmYXVsdCBpZiBpdCdzIHRleHQuIElmIGEgcGFyc2VkXG5cdFx0XHRcdFx0XHRcdC8vIGRvY3VtZW50IGlzIG5lZWRlZCBvbiBvbGQgSUUgYW5kIGZyaWVuZHMgKGFsbFxuXHRcdFx0XHRcdFx0XHQvLyB1bnN1cHBvcnRlZCksIHRoZSB1c2VyIHNob3VsZCB1c2UgYSBjdXN0b21cblx0XHRcdFx0XHRcdFx0Ly8gYGNvbmZpZ2AgaW5zdGVhZC4gVGhleSdyZSBhbHJlYWR5IHVzaW5nIHRoaXMgYXRcblx0XHRcdFx0XHRcdFx0Ly8gdGhlaXIgb3duIHJpc2suXG5cdFx0XHRcdFx0XHRcdGlmIChyZXNwb25zZSA9PSBudWxsKSByZXNwb25zZSA9IGV2LnRhcmdldC5yZXNwb25zZVRleHRcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBhcmdzLmV4dHJhY3QgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRyZXNwb25zZSA9IGFyZ3MuZXh0cmFjdChldi50YXJnZXQsIGFyZ3MpXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MgPSB0cnVlXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBhcmdzLmRlc2VyaWFsaXplID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UgPSBhcmdzLmRlc2VyaWFsaXplKHJlc3BvbnNlKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHN1Y2Nlc3MpIHJlc29sdmUocmVzcG9uc2UpXG5cdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0dHJ5IHsgbWVzc2FnZSA9IGV2LnRhcmdldC5yZXNwb25zZVRleHQgfVxuXHRcdFx0XHRcdFx0XHRjYXRjaCAoZSkgeyBtZXNzYWdlID0gcmVzcG9uc2UgfVxuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSlcblx0XHRcdFx0XHRcdFx0ZXJyb3IuY29kZSA9IGV2LnRhcmdldC5zdGF0dXNcblx0XHRcdFx0XHRcdFx0ZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZVxuXHRcdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHRyZWplY3QoZSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzLmNvbmZpZyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHhociA9IGFyZ3MuY29uZmlnKHhociwgYXJncywgdXJsKSB8fCB4aHJcblxuXHRcdFx0XHQvLyBQcm9wYWdhdGUgdGhlIGBhYm9ydGAgdG8gYW55IHJlcGxhY2VtZW50IFhIUiBhcyB3ZWxsLlxuXHRcdFx0XHRpZiAoeGhyICE9PSBvcmlnaW5hbCkge1xuXHRcdFx0XHRcdHJlcGxhY2VkQWJvcnQgPSB4aHIuYWJvcnRcblx0XHRcdFx0XHR4aHIuYWJvcnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGFib3J0ZWQgPSB0cnVlXG5cdFx0XHRcdFx0XHRyZXBsYWNlZEFib3J0LmNhbGwodGhpcylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGJvZHkgPT0gbnVsbCkgeGhyLnNlbmQoKVxuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGFyZ3Muc2VyaWFsaXplID09PSBcImZ1bmN0aW9uXCIpIHhoci5zZW5kKGFyZ3Muc2VyaWFsaXplKGJvZHkpKVxuXHRcdFx0ZWxzZSBpZiAoYm9keSBpbnN0YW5jZW9mICR3aW5kb3cuRm9ybURhdGEpIHhoci5zZW5kKGJvZHkpXG5cdFx0XHRlbHNlIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGJvZHkpKVxuXHRcdH0pLFxuXHRcdGpzb25wOiBtYWtlUmVxdWVzdChmdW5jdGlvbih1cmwsIGFyZ3MsIHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0dmFyIGNhbGxiYWNrTmFtZSA9IGFyZ3MuY2FsbGJhY2tOYW1lIHx8IFwiX21pdGhyaWxfXCIgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxZTE2KSArIFwiX1wiICsgY2FsbGJhY2tDb3VudCsrXG5cdFx0XHR2YXIgc2NyaXB0ID0gJHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpXG5cdFx0XHQkd2luZG93W2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdGRlbGV0ZSAkd2luZG93W2NhbGxiYWNrTmFtZV1cblx0XHRcdFx0c2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KVxuXHRcdFx0XHRyZXNvbHZlKGRhdGEpXG5cdFx0XHR9XG5cdFx0XHRzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkZWxldGUgJHdpbmRvd1tjYWxsYmFja05hbWVdXG5cdFx0XHRcdHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdClcblx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIkpTT05QIHJlcXVlc3QgZmFpbGVkXCIpKVxuXHRcdFx0fVxuXHRcdFx0c2NyaXB0LnNyYyA9IHVybCArICh1cmwuaW5kZXhPZihcIj9cIikgPCAwID8gXCI/XCIgOiBcIiZcIikgK1xuXHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnQoYXJncy5jYWxsYmFja0tleSB8fCBcImNhbGxiYWNrXCIpICsgXCI9XCIgK1xuXHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnQoY2FsbGJhY2tOYW1lKVxuXHRcdFx0JHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXHRcdH0pLFxuXHR9XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgbW91bnRSZWRyYXcgPSByZXF1aXJlKFwiLi9tb3VudC1yZWRyYXdcIilcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9hcGkvcm91dGVyXCIpKHdpbmRvdywgbW91bnRSZWRyYXcpXG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1pdGhyaWxfMSA9IHJlcXVpcmUoXCIuL21pdGhyaWxcIik7XG5jbGFzcyBDb25maWcge1xuICAgIG9uaW5pdChub2RlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBub2RlLmF0dHJzLmNvbnRleHQ7XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZS5hdHRycy5zb3VyY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoIW5vZGUuc3RhdGUuY2ZnKSB7XG4gICAgICAgICAgICAgICAgbWl0aHJpbF8xLm0ucmVxdWVzdCh7IG1ldGhvZDogXCJHRVRcIiwgdXJsOiBub2RlLmF0dHJzLnNvdXJjZSB9KS50aGVuKChzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3RhdGUuY2ZnID0gdHJhbnNsYXRlKHMsIHMucm9vdCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLnN0YXRlLmNmZyA9IHRyYW5zbGF0ZShub2RlLmF0dHJzLnNvdXJjZSwgbm9kZS5hdHRycy5zb3VyY2Uucm9vdCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmlldyhub2RlKSB7XG4gICAgICAgIGNvbnN0IGNmZyA9IG5vZGUuc3RhdGUuY2ZnO1xuICAgICAgICByZXR1cm4gKGNmZyAmJiBjZmcuY29tcENsYXNzKSA/IG1pdGhyaWxfMS5tKGNmZy5jb21wQ2xhc3MsIE9iamVjdC5hc3NpZ24oY2ZnLmF0dHJzLCBub2RlLmF0dHJzKSkgOiBtaXRocmlsXzEubSgnZGl2JywgJ3dhaXRpbmcnKTtcbiAgICB9XG59XG5leHBvcnRzLkNvbmZpZyA9IENvbmZpZztcbmZ1bmN0aW9uIHRyYW5zbGF0ZShjb25maWcsIHN1YmNmZywgY29udGV4dCkge1xuICAgIGlmIChpc1N5bm9ueW0oY29uZmlnLCBzdWJjZmcpKSB7XG4gICAgICAgIHN1YmNmZyA9IGNvbmZpZ1tzdWJjZmddO1xuICAgIH1cbiAgICBpZiAoWydzdHJpbmcnLCAnbnVtYmVyJywgJ2Jvb2xlYW4nLCAnZnVuY3Rpb24nXS5pbmRleE9mKHR5cGVvZiBzdWJjZmcpID49IDApIHtcbiAgICAgICAgcmV0dXJuIHN1YmNmZztcbiAgICB9XG4gICAgbGV0IHJlc3VsdCA9IHN1YmNmZy5sZW5ndGggPyBbXSA6IHt9O1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3Qua2V5cyhzdWJjZmcpO1xuICAgIG9wdGlvbnMubWFwKChvcHQpID0+IHtcbiAgICAgICAgY29uc3QgY2wgPSByZXNvbHZlKG9wdCwgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0cmFuc2xhdGUoY29uZmlnLCBzdWJjZmdbb3B0XSwgY29udGV4dCk7XG4gICAgICAgIGlmIChjbCkge1xuICAgICAgICAgICAgY29uc3QgciA9IHtcbiAgICAgICAgICAgICAgICBjb21wQ2xhc3M6IGNsLFxuICAgICAgICAgICAgICAgIGF0dHJzOiBjb250ZW50XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgKCFBcnJheS5pc0FycmF5KHN1YmNmZykgJiYgb3B0aW9ucy5sZW5ndGggPT09IDEpID9cbiAgICAgICAgICAgICAgICByZXN1bHQgPSByIDpcbiAgICAgICAgICAgICAgICByZXN1bHRbb3B0XSA9IHI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRbb3B0XSA9IGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gcmVzb2x2ZShzeW0sIGNvbnRleHQpIHtcbiAgICBsZXQgY2w7XG4gICAgY29udGV4dC5zb21lKChjKSA9PiBjbCA9IGNbc3ltXSk7XG4gICAgcmV0dXJuIGNsO1xufVxuZnVuY3Rpb24gaXNTeW5vbnltKGNvbmZpZywga2V5KSB7IHJldHVybiB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBjb25maWdba2V5XTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTI5dVptbG5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDBOdmJtWnBaeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFUSkVRU3gxUTBGQmNVTTdRVUZMY2tNc1RVRkJZU3hOUVVGTk8wbEJRMllzVFVGQlRTeERRVUZETEVsQlFWVTdVVUZEWWl4TlFVRk5MRTlCUVU4c1IwRkJVeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXp0UlFVTjZReXhKUVVGSkxFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRXRCUVVzc1VVRkJVU3hGUVVGRk8xbEJRM1pETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJUdG5Ra0ZCUlN4WFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzVFVGQlRTeEZRVUZGTEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVXNzUlVGQlF5eEZRVUZGTzI5Q1FVTjBSaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NSMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1owSkJRMjVFTEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUVVVN1UwRkRVanRoUVVGTk8xbEJRMGdzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRWRCUVVjc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRUUVVOc1JqdEpRVU5NTEVOQlFVTTdTVUZEUkN4SlFVRkpMRU5CUVVNc1NVRkJWVHRSUVVOWUxFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRE8xRkJRek5DTEU5QlFVOHNRMEZCUXl4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUXl4WFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUlVGQlJTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1NVRkRhRWdzUTBGQlF6dERRVU5LTzBGQlprUXNkMEpCWlVNN1FVRmhSQ3hUUVVGVExGTkJRVk1zUTBGQlF5eE5RVUZWTEVWQlFVVXNUVUZCVlN4RlFVRkZMRTlCUVdFN1NVRkZjRVFzU1VGQlNTeFRRVUZUTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhGUVVGRk8xRkJRVVVzVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRMUVVGRk8wbEJSVE5FTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hGUVVGRkxGTkJRVk1zUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhOUVVGTkxFTkJRVU1zU1VGQlJTeERRVUZETEVWQlFVVTdVVUZCUlN4UFFVRlBMRTFCUVUwc1EwRkJRenRMUVVGRk8wbEJRemRHTEVsQlFVa3NUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVUVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8wbEJSWEJETEUxQlFVMHNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEY0VNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFWVXNSVUZCVVN4RlFVRkZPMUZCUXpkQ0xFMUJRVTBzUlVGQlJTeEhRVUZQTEU5QlFVOHNRMEZCUXl4SFFVRkhMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGNrTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1UwRkJVeXhEUVVGRExFMUJRVTBzUlVGQlJTeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGVFUXNTVUZCU1N4RlFVRkZMRVZCUVVVN1dVRkRTaXhOUVVGTkxFTkJRVU1zUjBGQlJ6dG5Ra0ZEVGl4VFFVRlRMRVZCUVVNc1JVRkJSVHRuUWtGRFdpeExRVUZMTEVWQlFVTXNUMEZCVHp0aFFVTm9RaXhEUVVGRE8xbEJRMFlzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVDBGQlR5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRU3hEUVVGRE8yZENRVU0zUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlExb3NUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU4yUWp0aFFVTkpPMWxCUVVVc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEU5QlFVOHNRMEZCUXp0VFFVRkZPMGxCUTI1RExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwZ3NUMEZCVHl4TlFVRk5MRU5CUVVNN1FVRkRiRUlzUTBGQlF6dEJRVlZFTEZOQlFWTXNUMEZCVHl4RFFVRkRMRWRCUVZVc1JVRkJSU3hQUVVGaE8wbEJRM1JETEVsQlFVa3NSVUZCVFN4RFFVRkRPMGxCUTFnc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVc3NSVUZCUlN4RlFVRkZMRU5CUVVVc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNSRExFOUJRVThzUlVGQlJTeERRVUZETzBGQlEyUXNRMEZCUXp0QlFVVkVMRk5CUVZNc1UwRkJVeXhEUVVGRExFMUJRVlVzUlVGQlJTeEhRVUZQTEVsQlFVa3NUMEZCVHl4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUkxFbEJRVWtzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi92aWV3L1BpbGxhcmVkTGF5b3V0ZXJcIik7XG5yZXF1aXJlKFwiLi92aWV3L1RpbGVMYXlvdXRlclwiKTtcbnZhciBMYXlvdXRfMSA9IHJlcXVpcmUoXCIuL3ZpZXcvTGF5b3V0XCIpO1xuZXhwb3J0cy5MYXlvdXQgPSBMYXlvdXRfMS5MYXlvdXQ7XG52YXIgVG9rZW5zXzEgPSByZXF1aXJlKFwiLi92aWV3L1Rva2Vuc1wiKTtcbmV4cG9ydHMuRklMTCA9IFRva2Vuc18xLkZJTEw7XG5leHBvcnRzLnB4ID0gVG9rZW5zXzEucHg7XG5leHBvcnRzLnBjID0gVG9rZW5zXzEucGM7XG5leHBvcnRzLkxheW91dFRva2VuID0gVG9rZW5zXzEuTGF5b3V0VG9rZW47XG52YXIgTGF5b3V0ZXJfMSA9IHJlcXVpcmUoXCIuL3ZpZXcvTGF5b3V0ZXJcIik7XG5leHBvcnRzLkxheW91dGVyID0gTGF5b3V0ZXJfMS5MYXlvdXRlcjtcbnZhciBDb25maWdfMSA9IHJlcXVpcmUoXCIuL0NvbmZpZ1wiKTtcbmV4cG9ydHMuQ29uZmlnID0gQ29uZmlnXzEuQ29uZmlnO1xudmFyIG1pdGhyaWxfMSA9IHJlcXVpcmUoXCIuL21pdGhyaWxcIik7XG5leHBvcnRzLm0gPSBtaXRocmlsXzEubTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkxRU3h0UTBGQmFVTTdRVUZEYWtNc0swSkJRVFpDTzBGQlJUZENMSGREUVVFMlF6dEJRVUZ3UXl3d1FrRkJRU3hOUVVGTkxFTkJRVUU3UVVGRFppeDNRMEZETmtNN1FVRkVjRU1zZDBKQlFVRXNTVUZCU1N4RFFVRkJPMEZCUVVVc2MwSkJRVUVzUlVGQlJTeERRVUZCTzBGQlFVVXNjMEpCUVVFc1JVRkJSU3hEUVVGQk8wRkJRMW9zSzBKQlFVRXNWMEZCVnl4RFFVRkJPMEZCUTNCQ0xEUkRRVUVyUXp0QlFVRjBReXc0UWtGQlFTeFJRVUZSTEVOQlFVRTdRVUZEYWtJc2JVTkJRWGRETzBGQlFTOUNMREJDUVVGQkxFMUJRVTBzUTBGQlFUdEJRVU5tTEhGRFFVRjVRenRCUVVGb1F5eHpRa0ZCUVN4RFFVRkRMRU5CUVVFaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubSA9IHJlcXVpcmUoXCJtaXRocmlsXCIpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldsMGFISnBiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5dGFYUm9jbWxzTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJVV0VzVVVGQlFTeERRVUZETEVkQlFVY3NUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1pdGhyaWxfMSA9IHJlcXVpcmUoXCIuLi9taXRocmlsXCIpO1xuY29uc3QgTGF5b3V0ZXJfMSA9IHJlcXVpcmUoXCIuL0xheW91dGVyXCIpO1xuY2xhc3MgTGF5b3V0IHtcbiAgICBnZXRDb21wb25lbnRzKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuICFBcnJheS5pc0FycmF5KG5vZGUuYXR0cnMuY29udGVudCkgPyBub2RlLmF0dHJzLmNvbnRlbnQgOlxuICAgICAgICAgICAgbm9kZS5hdHRycy5jb250ZW50Lm1hcCgoYykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjLmNvbXBDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICBjLmF0dHJzLnJvdXRlID0gbm9kZS5hdHRycy5yb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1pdGhyaWxfMS5tKGMuY29tcENsYXNzLCBjLmF0dHJzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDU1Mobm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZS5hdHRycy5jc3MgfHwgJyc7XG4gICAgfVxuICAgIG5vcm1hbGl6ZUNvbnRlbnQoY29tcG9uZW50cykge1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gW21pdGhyaWxfMS5tKCcuaHMtbGVhZicsIG1pdGhyaWxfMS5tLnRydXN0KGNvbXBvbmVudHMpKV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXBvbmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMubWFwKChjb21wKSA9PiAoY29tcCBpbnN0YW5jZW9mIExheW91dCkgPyBjb21wIDogbWl0aHJpbF8xLm0oTGF5b3V0LCB7IGNvbnRlbnQ6IGNvbXAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbY29tcG9uZW50c107XG4gICAgfVxuICAgIHZpZXcobm9kZSkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5ub3JtYWxpemVDb250ZW50KHRoaXMuZ2V0Q29tcG9uZW50cyhub2RlKSk7XG4gICAgICAgIGxldCBjc3MgPSBMYXlvdXRlcl8xLkxheW91dGVyLmNyZWF0ZUxheW91dChub2RlLmF0dHJzLCBjb250ZW50KTtcbiAgICAgICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICAgICAgICBzdHlsZTogbm9kZS5zdHlsZSxcbiAgICAgICAgICAgIHJvdXRlOiBub2RlLmF0dHJzLnJvdXRlLFxuICAgICAgICAgICAgb25jbGljazogbm9kZS5hdHRycy5vbmNsaWNrXG4gICAgICAgIH07XG4gICAgICAgIG5vZGUuYXR0cnMucm91dGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChub2RlLmF0dHJzLmhyZWYpIHtcbiAgICAgICAgICAgIGF0dHJzLmhyZWYgPSBub2RlLmF0dHJzLmhyZWY7XG4gICAgICAgICAgICBhdHRycy5vbmNyZWF0ZSA9IG1pdGhyaWxfMS5tLnJvdXRlLmxpbms7XG4gICAgICAgICAgICBhdHRycy5vbnVwZGF0ZSA9IG1pdGhyaWxfMS5tLnJvdXRlLmxpbms7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pdGhyaWxfMS5tKGAuaHMtbGF5b3V0ICR7Y3NzfSAke3RoaXMuZ2V0Q1NTKG5vZGUpfWAsIGF0dHJzLCBjb250ZW50Lm1hcCgoYykgPT4gYykpO1xuICAgIH1cbn1cbmV4cG9ydHMuTGF5b3V0ID0gTGF5b3V0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVEdGNWIzVjBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzWnBaWGN2VEdGNWIzVjBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQmFVSkJMSGREUVVGelF6dEJRVU4wUXl4NVEwRkJjME03UVVGNVFuUkRMRTFCUVdFc1RVRkJUVHRKUVc5Q1RDeGhRVUZoTEVOQlFVTXNTVUZCVlR0UlFVTTVRaXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFsQlF6TkVMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVzc1JVRkJSU3hGUVVGRk8yZENRVU0zUWl4SlFVRkpMRU5CUVVNc1EwRkJReXhUUVVGVExFVkJRVVU3YjBKQlEySXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNN2IwSkJRMnBETEU5QlFVOHNWMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMmxDUVVOc1F6dHhRa0ZCVFR0dlFrRkRTQ3hQUVVGUExFTkJRVU1zUTBGQlF6dHBRa0ZEV2p0WlFVTk1MRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMWdzUTBGQlF6dEpRVkZUTEUxQlFVMHNRMEZCUXl4SlFVRlZPMUZCUTNaQ0xFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRWxCUVVrc1JVRkJSU3hEUVVGRE8wbEJRMmhETEVOQlFVTTdTVUZIVHl4blFrRkJaMElzUTBGQlF5eFZRVUUyUXp0UlFVTnNSU3hKUVVGSkxFOUJRVThzVlVGQlZTeExRVUZMTEZGQlFWRXNSVUZCUlR0WlFVTm9ReXhQUVVGUExFTkJRVU1zVjBGQlF5eERRVUZETEZWQlFWVXNSVUZCUlN4WFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTXZRenRSUVVORUxFbEJRVWtzVlVGQlZTeERRVUZETEUxQlFVMHNSMEZCUXl4RFFVRkRMRVZCUVVVN1dVRkRja0lzVDBGQlR5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJlVUlzUlVGQlVTeEZRVUZGTEVOQlEyeEVMRU5CUVVNc1NVRkJTU3haUVVGWkxFMUJRVTBzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNSVUZCUXl4UFFVRlBMRVZCUVVNc1NVRkJTU3hGUVVGRExFTkJRVU1zUTBGRGFrVXNRMEZCUXp0VFFVTk1PMUZCUlVRc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzBsQlEzaENMRU5CUVVNN1NVRnhRa1FzU1VGQlNTeERRVUZETEVsQlFWVTdVVUZEV0N4TlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoRkxFbEJRVWtzUjBGQlJ5eEhRVUZITEcxQ1FVRlJMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRja1FzVFVGQlRTeExRVUZMTEVkQlFVODdXVUZEWkN4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXM3V1VGRGFrSXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN6dFpRVU4yUWl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTzFOQlF6bENMRU5CUVVNN1VVRkRSaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NSMEZCUnl4VFFVRlRMRU5CUVVNN1VVRkROMElzU1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSVHRaUVVOcVFpeExRVUZMTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETzFsQlF6ZENMRXRCUVVzc1EwRkJReXhSUVVGUkxFZEJRVWNzVjBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNN1dVRkRPVUlzUzBGQlN5eERRVUZETEZGQlFWRXNSMEZCUnl4WFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF6dFRRVU5xUXp0UlFVTkVMRTlCUVU4c1YwRkJReXhEUVVGRExHTkJRV01zUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVXNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONlJpeERRVUZETzBOQlEwbzdRVUV6UmtRc2QwSkJNa1pESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgVG9rZW5zXzEgPSByZXF1aXJlKFwiLi9Ub2tlbnNcIik7XG5jbGFzcyBMYXlvdXRlciB7XG4gICAgY29uc3RydWN0b3IoYXJlYURlc2MpIHtcbiAgICAgICAgdGhpcy5hcmVhRGVzYyA9IGFyZWFEZXNjO1xuICAgICAgICB0aGlzLnNwYWNpbmcgPSAwO1xuICAgIH1cbiAgICBzdGF0aWMgdHJhbnNsYXRlKHBhcmFtcykge1xuICAgICAgICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcGFyYW1zLnB1c2goJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJhbXMubWFwKChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW0uZW5kc1dpdGgoJ3B4JykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRva2Vuc18xLnB4KHBhcnNlSW50KHBhcmFtKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYXJhbS5lbmRzV2l0aCgnJScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUb2tlbnNfMS5wYyhwYXJzZUludChwYXJhbSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFyYW0udG9Mb3dlckNhc2UoKSA9PT0gJ2ZpbGwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBUb2tlbnNfMS5GSUxMO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyByZWdpc3RlcihrZXl3b3JkLCBzdHlsZSkge1xuICAgICAgICBMYXlvdXRlci5sYXlvdXRTdHlsZXNba2V5d29yZF0gPSBzdHlsZTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZUxheW91dChhdHRycywgY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY3NzID0gJyc7XG4gICAgICAgIE9iamVjdC5rZXlzKExheW91dGVyLmxheW91dFN0eWxlcykuc29tZShrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKGF0dHJzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBjc3MgPSBuZXcgTGF5b3V0ZXIubGF5b3V0U3R5bGVzW2tleV0oTGF5b3V0ZXIudHJhbnNsYXRlKGF0dHJzW2tleV0pKS5nZXRTdHlsZXMoY29tcG9uZW50cyk7XG4gICAgICAgICAgICAgICAgYXR0cnNba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjc3M7XG4gICAgfVxufVxuZXhwb3J0cy5MYXlvdXRlciA9IExheW91dGVyO1xuTGF5b3V0ZXIubGF5b3V0U3R5bGVzID0ge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUR0Y1YjNWMFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmRtbGxkeTlNWVhsdmRYUmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFWbEJMSEZEUVVGM1F6dEJRWGxDZUVNc1RVRkJjMElzVVVGQlVUdEpRWGxGTVVJc1dVRkJiVUlzVVVGQmMwSTdVVUZCZEVJc1lVRkJVU3hIUVVGU0xGRkJRVkVzUTBGQll6dFJRVko2UXl4WlFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJVV2RETEVOQlFVTTdTVUY2UkhKRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCZDBJN1VVRkROME1zU1VGQlNTeE5RVUZOTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVGRkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkJSVHRSUVVNM1F5eFBRVUZQTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGblFpeEZRVUZGTEVWQlFVVTdXVUZEYmtNc1NVRkJTU3hQUVVGUExFdEJRVXNzUzBGQlN5eFJRVUZSTEVWQlFVVTdaMEpCUXpOQ0xFbEJRVWtzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHR2UWtGQlJTeFBRVUZQTEZkQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dHBRa0ZCUlR0blFrRkRla1FzU1VGQlNTeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8yOUNRVUZGTEU5QlFVOHNWMEZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzJsQ1FVRkZPMmRDUVVONFJDeEpRVUZKTEV0QlFVc3NRMEZCUXl4WFFVRlhMRVZCUVVVc1MwRkJSeXhOUVVGTkxFVkJRVVU3YjBKQlFVVXNUMEZCVHl4aFFVRkpMRU5CUVVNN2FVSkJRVU03WVVGRGNFUTdhVUpCUVUwN1owSkJRMGdzVDBGQlR5eExRVUZMTEVOQlFVTTdZVUZEYUVJN1VVRkRUQ3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5RTEVOQlFVTTdTVUZYVFN4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRV01zUlVGQlJTeExRVUZ4UWp0UlFVVjRSQ3hSUVVGUkxFTkJRVU1zV1VGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVNelF5eERRVUZETzBsQlZVMHNUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGVExFVkJRVVVzVlVGQmRVSTdVVUZEZWtRc1NVRkJTU3hIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEySXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRekZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU5hTEVkQlFVY3NSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dG5Ra0ZETTBZc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXp0blFrRkRka0lzVDBGQlR5eEpRVUZKTEVOQlFVTTdZVUZEWmp0WlFVTkVMRTlCUVU4c1MwRkJTeXhEUVVGRE8xRkJRMnBDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTBnc1QwRkJUeXhIUVVGSExFTkJRVU03U1VGRFppeERRVUZET3p0QlFUbEVUQ3cwUWtFd1JrTTdRVUZ5UmxVc2NVSkJRVmtzUjBGQmRVSXNSVUZCUlN4RFFVRkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBMYXlvdXRlcl8xID0gcmVxdWlyZShcIi4vTGF5b3V0ZXJcIik7XG5jb25zdCBUb2tlbnNfMSA9IHJlcXVpcmUoXCIuL1Rva2Vuc1wiKTtcbmV4cG9ydHMuUGlsbGFyTGF5b3V0cyA9IFtcbiAgICAnY29sdW1ucycsICdyb3dzJ1xuXTtcbmNvbnN0IGNQYXJhbXMgPSB7XG4gICAgY29sdW1uczoge1xuICAgICAgICBjc3NDbGFzczogJy5ocy1jb2x1bW4tbGF5b3V0JyxcbiAgICAgICAgZmllbGRzOiBbJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcsICdoZWlnaHQnLCAnd2lkdGgnXVxuICAgIH0sXG4gICAgcm93czoge1xuICAgICAgICBjc3NDbGFzczogJy5ocy1yb3ctbGF5b3V0JyxcbiAgICAgICAgZmllbGRzOiBbJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbScsICd3aWR0aCcsICdoZWlnaHQnXVxuICAgIH1cbn07XG5jbGFzcyBQaWxsYXJMYXlvdXRlciBleHRlbmRzIExheW91dGVyXzEuTGF5b3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtcywgYXJlYURlc2MpIHtcbiAgICAgICAgc3VwZXIoYXJlYURlc2MpO1xuICAgICAgICB0aGlzLmFyZWFEZXNjID0gYXJlYURlc2M7XG4gICAgICAgIHRoaXMuZmllbGRzID0gcGFyYW1zLmZpZWxkcztcbiAgICAgICAgdGhpcy5jc3NDbGFzcyA9IHBhcmFtcy5jc3NDbGFzcztcbiAgICAgICAgbGV0IG4gPSBhcmVhRGVzYy5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgZmlyc3QgPSAwO1xuICAgICAgICBsZXQgbGFzdCA9IDA7XG4gICAgICAgIHRoaXMudW5pdCA9IGFyZWFEZXNjLnNvbWUoKGFyZWEpID0+IChhcmVhIGluc3RhbmNlb2YgVG9rZW5zXzEuUGl4ZWxUb2tlbikpID9cbiAgICAgICAgICAgIHRoaXMudW5pdFBpeGVsIDogdGhpcy51bml0UGVyY2VudDtcbiAgICAgICAgYXJlYURlc2Muc29tZSgoYXJlYSwgaSkgPT4gKChhcmVhRGVzY1tpXSBpbnN0YW5jZW9mIFRva2Vuc18xLkRlZmluZWRUb2tlbikgPyArK2ZpcnN0IDwgMCA6IHRydWUpKTtcbiAgICAgICAgYXJlYURlc2Muc29tZSgoYXJlYSwgaSkgPT4gKChhcmVhRGVzY1tuIC0gaV0gaW5zdGFuY2VvZiBUb2tlbnNfMS5EZWZpbmVkVG9rZW4pID8gKytsYXN0IDwgMCA6IHRydWUpKTtcbiAgICAgICAgdGhpcy5maXJzdEZpeGVkID0gZmlyc3Q7XG4gICAgICAgIHRoaXMubGFzdEZpeGVkID0gTWF0aC5taW4obGFzdCwgYXJlYURlc2MubGVuZ3RoIC0gZmlyc3QpO1xuICAgIH1cbiAgICBnZXRTaXplcyhudW0pIHtcbiAgICAgICAgY29uc3QgZmlyc3QgPSB0aGlzLmZpcnN0Rml4ZWQ7XG4gICAgICAgIGNvbnN0IGxhc3QgPSB0aGlzLmxhc3RGaXhlZDtcbiAgICAgICAgY29uc3QgZGVzYyA9IHRoaXMuYXJlYURlc2M7XG4gICAgICAgIGNvbnN0IGxlbiA9IGRlc2MubGVuZ3RoO1xuICAgICAgICByZXR1cm4gWy4uLkFycmF5KG51bSkua2V5cygpXS5tYXAoKGkpID0+IHtcbiAgICAgICAgICAgIGxldCBzaXplID0gbnVsbDtcbiAgICAgICAgICAgIGxldCB0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChpID4gbnVtIC0gMSAtIGxhc3QpIHtcbiAgICAgICAgICAgICAgICBzaXplID0gZGVzY1tsZW4gLSAobnVtIC0gaSldLmdldFNpemUoKTtcbiAgICAgICAgICAgICAgICB0ID0gJ2VuZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpIDwgZmlyc3QpIHtcbiAgICAgICAgICAgICAgICBzaXplID0gZGVzY1tpXS5nZXRTaXplKCk7XG4gICAgICAgICAgICAgICAgdCA9ICdzdGFydCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsZW4gPiAwICYmIGxlbiA9PT0gZmlyc3QpIHtcbiAgICAgICAgICAgICAgICBzaXplID0gZGVzY1tsZW4gLSAxXS5nZXRTaXplKCk7XG4gICAgICAgICAgICAgICAgdCA9ICdzdGFydCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBzaXplOiBzaXplLCBjb2RlOiB0LCBmaWVsZHM6IHt9IH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1bml0UGVyY2VudChudW0pIHtcbiAgICAgICAgbGV0IGYgPSB0aGlzLmZpZWxkcztcbiAgICAgICAgbGV0IG1heCA9IDEwMC4wO1xuICAgICAgICBsZXQgc3R5bGVzID0gdGhpcy5nZXRTaXplcyhudW0pO1xuICAgICAgICBzdHlsZXMuZm9yRWFjaChzdHlsZSA9PiB7IGlmIChzdHlsZS5zaXplKSB7XG4gICAgICAgICAgICBtYXggPSBtYXggLSBzdHlsZS5zaXplO1xuICAgICAgICAgICAgbnVtLS07XG4gICAgICAgIH0gfSk7XG4gICAgICAgIGxldCBkZWZEaW0gPSBtYXggLyBudW07XG4gICAgICAgIGZ1bmN0aW9uIHBhc3Moc3R5bGVzLCBpeDAsIGl4MSwgYnJlYWtDb25kKSB7XG4gICAgICAgICAgICBsZXQgc3VtRGltID0gMDtcbiAgICAgICAgICAgIHN0eWxlcy5zb21lKHN0eWxlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2l6ZSA9IHN0eWxlLnNpemUgfHwgZGVmRGltO1xuICAgICAgICAgICAgICAgIGlmIChicmVha0NvbmQoc3R5bGUuY29kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0eWxlLmZpZWxkc1tpeDBdID0gc3VtRGltICsgJyUnO1xuICAgICAgICAgICAgICAgIHN1bURpbSArPSBzaXplO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpZWxkc1tpeDFdID0gKDEwMCAtIHN1bURpbSkgKyAnJSc7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmllbGRzW2ZbNV1dID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHBhc3Moc3R5bGVzLCBmWzJdLCBmWzNdLCAoZSkgPT4gZSA9PT0gJ2VuZCcpO1xuICAgICAgICBwYXNzKHN0eWxlcy5yZXZlcnNlKCksIGZbM10sIGZbMl0sIChlKSA9PiBlICE9PSAnZW5kJyk7XG4gICAgICAgIHJldHVybiBzdHlsZXMucmV2ZXJzZSgpO1xuICAgIH1cbiAgICB1bml0UGl4ZWwobnVtKSB7XG4gICAgICAgIGxldCBzdHlsZXMgPSB0aGlzLmdldFNpemVzKG51bSk7XG4gICAgICAgIGxldCBmID0gdGhpcy5maWVsZHM7XG4gICAgICAgIGxldCBkZWZEaW0gPSAxMDAuMCAvIG51bTtcbiAgICAgICAgbGV0IHN1bURpbSA9IDA7XG4gICAgICAgIHN0eWxlcy5zb21lKChzdHlsZSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0eWxlLmNvZGUgPT09ICdzdGFydCcpIHtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWVsZHNbZlsyXV0gPSBzdW1EaW0gKyAncHgnO1xuICAgICAgICAgICAgICAgIHN1bURpbSArPSBzdHlsZS5zaXplICsgKHRoaXMuc3BhY2luZyB8fCAwKSArICh0aGlzLnNwYWNpbmcgfHwgMCk7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmllbGRzW2ZbM11dID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpZWxkc1tmWzVdXSA9IHN0eWxlLnNpemUgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3R5bGUuY29kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpZWxkc1tmWzJdXSA9IChzdW1EaW0gPiAwKSA/IChzdW1EaW0gKyAncHgnKSA6IChpICogZGVmRGltICsgJyUnKTtcbiAgICAgICAgICAgICAgICBzdW1EaW0gPSAtMTtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWVsZHNbZlszXV0gPSAoMTAwIC0gKGkgKyAxKSAqIGRlZkRpbSkgKyAnJSc7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmllbGRzW2ZbNV1dID0gJ2F1dG8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3R5bGUuY29kZSA9PT0gJ2VuZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN1bURpbSA9IDA7XG4gICAgICAgIHN0eWxlcy5zbGljZSgpLnJldmVyc2UoKS5zb21lKChzdHlsZSwgaSkgPT4ge1xuICAgICAgICAgICAgc3R5bGUuZmllbGRzW2ZbM11dID0gc3VtRGltICsgJ3B4JztcbiAgICAgICAgICAgIGlmIChzdHlsZS5jb2RlID09PSAnZW5kJykge1xuICAgICAgICAgICAgICAgIHN1bURpbSArPSBzdHlsZS5zaXplICsgKHRoaXMuc3BhY2luZyB8fCAwKSArICh0aGlzLnNwYWNpbmcgfHwgMCk7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmllbGRzW2ZbMl1dID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpZWxkc1tmWzVdXSA9IHN0eWxlLnNpemUgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHN1bURpbSA+IDAgJiYgc3R5bGUuY29kZSAhPT0gJ3N0YXJ0Jykge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5maWVsZHNbZls1XV0gPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICB9XG4gICAgZ2V0U3R5bGVzKGNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IGYgPSB0aGlzLmZpZWxkcztcbiAgICAgICAgbGV0IHN0eWxlcyA9IHRoaXMudW5pdChjb21wb25lbnRzLmxlbmd0aCk7XG4gICAgICAgIGNvbXBvbmVudHMubWFwKChjLCBpKSA9PiB7XG4gICAgICAgICAgICBjLnN0eWxlID0gYCR7ZlswXX06MCU7ICR7ZlsxXX06MCU7IGA7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdHlsZXNbaV0uZmllbGRzKS5mb3JFYWNoKChzdCkgPT4geyBjLnN0eWxlICs9IGAke3N0fTogJHtzdHlsZXNbaV0uZmllbGRzW3N0XX07YDsgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5jc3NDbGFzcztcbiAgICB9XG59XG5jbGFzcyBDb2x1bW5zIGV4dGVuZHMgUGlsbGFyTGF5b3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGFyZWFEZXNjKSB7XG4gICAgICAgIHN1cGVyKGNQYXJhbXNbZXhwb3J0cy5QaWxsYXJMYXlvdXRzWzBdXSwgYXJlYURlc2MpO1xuICAgICAgICB0aGlzLmFyZWFEZXNjID0gYXJlYURlc2M7XG4gICAgfVxufVxuY2xhc3MgUm93cyBleHRlbmRzIFBpbGxhckxheW91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihhcmVhRGVzYykge1xuICAgICAgICBzdXBlcihjUGFyYW1zW2V4cG9ydHMuUGlsbGFyTGF5b3V0c1sxXV0sIGFyZWFEZXNjKTtcbiAgICAgICAgdGhpcy5hcmVhRGVzYyA9IGFyZWFEZXNjO1xuICAgIH1cbn1cbkxheW91dGVyXzEuTGF5b3V0ZXIucmVnaXN0ZXIoZXhwb3J0cy5QaWxsYXJMYXlvdXRzWzBdLCBDb2x1bW5zKTtcbkxheW91dGVyXzEuTGF5b3V0ZXIucmVnaXN0ZXIoZXhwb3J0cy5QaWxsYXJMYXlvdXRzWzFdLCBSb3dzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVHbHNiR0Z5WldSTVlYbHZkWFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTkyYVdWM0wxQnBiR3hoY21Wa1RHRjViM1YwWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUV5UTBFc2VVTkJRVEJETzBGQlF6RkRMSEZEUVVWM1F6dEJRV2RDTTBJc1VVRkJRU3hoUVVGaExFZEJRVWM3U1VGRGVrSXNVMEZCVXl4RlFVRkZMRTFCUVUwN1EwRkRjRUlzUTBGQlF6dEJRVXRHTEUxQlFVMHNUMEZCVHl4SFFVRkhPMGxCUTFvc1QwRkJUeXhGUVVGblFqdFJRVU51UWl4UlFVRlJMRVZCUVVVc2JVSkJRVzFDTzFGQlF6ZENMRTFCUVUwc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeFJRVUZSTEVWQlFVVXNUVUZCVFN4RlFVRkZMRTlCUVU4c1JVRkJSU3hSUVVGUkxFVkJRVVVzVDBGQlR5eERRVUZETzB0QlEyaEZPMGxCUTBRc1NVRkJTU3hGUVVGblFqdFJRVU5vUWl4UlFVRlJMRVZCUVVVc1owSkJRV2RDTzFGQlF6RkNMRTFCUVUwc1JVRkJSU3hEUVVGRExFMUJRVTBzUlVGQlJTeFBRVUZQTEVWQlFVVXNTMEZCU3l4RlFVRkZMRkZCUVZFc1JVRkJSU3hQUVVGUExFVkJRVVVzVVVGQlVTeERRVUZETzB0QlEyaEZPME5CUTBvc1EwRkJRenRCUVU5R0xFMUJRV1VzWTBGQlpTeFRRVUZSTEcxQ1FVRlJPMGxCWVRGRExGbEJRVmtzVFVGQmJVSXNSVUZCVXl4UlFVRnpRanRSUVVNeFJDeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkViMElzWVVGQlVTeEhRVUZTTEZGQlFWRXNRMEZCWXp0UlFVVXhSQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkROVUlzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRE8xRkJSV2hETEVsQlFVa3NRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhOUVVGTkxFZEJRVU1zUTBGQlF5eERRVUZETzFGQlF6RkNMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5rTEVsQlFVa3NTVUZCU1N4SFFVRkpMRU5CUVVNc1EwRkJRenRSUVVWa0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRV2RDTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3haUVVGWkxHMUNRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkJMRU5CUVVNN1dVRkRNVVVzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dFJRVWQwUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlowSXNSVUZCUlN4RFFVRlJMRVZCUVVVc1JVRkJSU3hEUVVONlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhaUVVGakxIRkNRVUZaTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGTExFZEJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSMnBGTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGblFpeEZRVUZGTEVOQlFWRXNSVUZCUlN4RlFVRkZMRU5CUTNwRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkRMRU5CUVVNc1EwRkJReXhaUVVGWkxIRkNRVUZaTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFZEJRVU1zUTBGQlF5eERRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSV3BGTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRM2hDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRTFCUVUwc1IwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU0xUkN4RFFVRkRPMGxCVTA4c1VVRkJVU3hEUVVGRExFZEJRVlU3VVVGRGRrSXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF6dFJRVU01UWl4TlFVRk5MRWxCUVVrc1IwRkJTU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETzFGQlF6ZENMRTFCUVUwc1NVRkJTU3hIUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTTdVVUZETlVJc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVVjRRaXhQUVVGUExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRlJMRVZCUVVVc1JVRkJSVHRaUVVNelF5eEpRVUZKTEVsQlFVa3NSMEZCVlN4SlFVRkpMRU5CUVVNN1dVRkRka0lzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUTJJc1NVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZETEVOQlFVTXNSMEZCUXl4SlFVRkpMRVZCUVVjN1owSkJRVVVzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPMkZCUVVVN2FVSkJRM0JGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRXRCUVVzc1JVRkJSenRuUWtGQlJTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzJkQ1FVRkRMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU03WVVGQlJUdHBRa0ZETVVRc1NVRkJTU3hIUVVGSExFZEJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVY3NTMEZCUnl4TFFVRkxMRVZCUVVNN1owSkJRVVVzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdaMEpCUVVNc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF6dGhRVUZGTzFsQlF6VkZMRTlCUVU4c1JVRkJReXhKUVVGSkxFVkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUXl4RFFVRkRMRVZCUVVVc1RVRkJUU3hGUVVGRExFVkJRVVVzUlVGQlF5eERRVUZETzFGQlF6RkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF6dEpRVVZQTEZkQlFWY3NRMEZCUXl4SFFVRlZPMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRjRUlzU1VGQlNTeEhRVUZITEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTJoQ0xFbEJRVWtzVFVGQlRTeEhRVUZuUWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJUZERMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVXNSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJReXhKUVVGSkxFVkJRVVU3V1VGQlJTeEhRVUZITEVkQlFVY3NSMEZCUnl4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU03V1VGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0VFFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFWXNTVUZCU1N4TlFVRk5MRWRCUVVjc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF6dFJRVVYyUWl4VFFVRlRMRWxCUVVrc1EwRkJReXhOUVVGdFFpeEZRVUZGTEVkQlFWVXNSVUZCUlN4SFFVRlZMRVZCUVVVc1UwRkJaME03V1VGRGRrWXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMllzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRuUWtGRGFFSXNTVUZCU1N4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzU1VGQlNTeE5RVUZOTEVOQlFVTTdaMEpCUTJoRExFbEJRVWtzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHR2UWtGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXp0cFFrRkJSVHRuUWtGRE0wTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVkQlFVTXNSMEZCUnl4RFFVRkRPMmRDUVVNdlFpeE5RVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRPMmRDUVVObUxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVU1zVFVGQlRTeERRVUZETEVkQlFVTXNSMEZCUnl4RFFVRkRPMmRDUVVOeVF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXp0blFrRkROVUlzVDBGQlR5eExRVUZMTEVOQlFVTTdXVUZEYWtJc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFVDeERRVUZETzFGQlJVUXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlVTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGJFUXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCVVN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTTdVVUZETlVRc1QwRkJUeXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdTVUZETlVJc1EwRkJRenRKUVVWUExGTkJRVk1zUTBGQlF5eEhRVUZWTzFGQlEzaENMRWxCUVVrc1RVRkJUU3hIUVVGblFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRemRETEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRmNFSXNTVUZCU1N4TlFVRk5MRWRCUVVjc1MwRkJTeXhIUVVGRExFZEJRVWNzUTBGQlF6dFJRVWQyUWl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFppeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzSkNMRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUzBGQlJ5eFBRVUZQTEVWQlFVVTdaMEpCUTNSQ0xFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeEhRVUZGTEVsQlFVa3NRMEZCUXp0blFrRkRiRU1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRha1VzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTTdaMEpCUXpWQ0xFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NSMEZCUlN4SlFVRkpMRU5CUVVNN1lVRkRla003YVVKQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hMUVVGTExFbEJRVWtzUlVGQlJUdG5Ra0ZETlVJc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUjBGQlF5eERRVUZETEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFZEJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkRia1VzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOYUxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVNc1EwRkJReXhEUVVGRExFZEJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMmRDUVVNNVF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXp0aFFVTXZRanRwUWtGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRXRCUVVjc1MwRkJTeXhGUVVGRk8yZENRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRPMkZCUVVVN1dVRkRMME1zVDBGQlR5eExRVUZMTEVOQlFVTTdVVUZEYWtJc1EwRkJReXhEUVVGRExFTkJRVU03VVVGSFNDeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTFnc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZEYmtNc1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeExRVUZMTEV0QlFVc3NSVUZCUlR0blFrRkRkRUlzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRha1VzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTTdaMEpCUXpWQ0xFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NSMEZCUXl4SlFVRkpMRU5CUVVNN1lVRkRlRU03YVVKQlFVMDdaMEpCUTBnc1NVRkJTU3hOUVVGTkxFZEJRVU1zUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRXRCUVVzc1QwRkJUeXhGUVVGRk8yOUNRVU53UXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJRenRwUWtGREwwSTdaMEpCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU03WVVGRFpqdFpRVU5FTEU5QlFVOHNTMEZCU3l4RFFVRkRPMUZCUTJwQ0xFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEwZ3NUMEZCVHl4TlFVRk5MRU5CUVVNN1NVRkRiRUlzUTBGQlF6dEpRVkZUTEZOQlFWTXNRMEZCUXl4VlFVRTRRanRSUVVNNVF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM0JDTEVsQlFVa3NUVUZCVFN4SFFVRm5RaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOMlJDeFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJZeXhGUVVGRkxFTkJRVkVzUlVGQlJTeEZRVUZGTzFsQlEzaERMRU5CUVVNc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTTdXVUZEY2tNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNSVUZCVXl4RlFVRkZMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eEpRVUZKTEVkQlFVY3NSVUZCUlN4TFFVRkxMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6VkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMGdzVDBGQlR5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRPMGxCUTNwQ0xFTkJRVU03UTBGRFNqdEJRWFZFUkN4TlFVRk5MRTlCUVZFc1UwRkJVU3hqUVVGak8wbEJRMmhETEZsQlFXMUNMRkZCUVhOQ08xRkJRVWtzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4eFFrRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkJja1VzWVVGQlVTeEhRVUZTTEZGQlFWRXNRMEZCWXp0SlFVRnBSQ3hEUVVGRE8wTkJRemxHTzBGQmRVUkVMRTFCUVUwc1NVRkJTeXhUUVVGUkxHTkJRV003U1VGRE4wSXNXVUZCYlVJc1VVRkJjMEk3VVVGQlNTeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMSEZDUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVGeVJTeGhRVUZSTEVkQlFWSXNVVUZCVVN4RFFVRmpPMGxCUVdsRUxFTkJRVU03UTBGRE9VWTdRVUZGUkN4dFFrRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eHhRa0ZCWVN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBGQlF6ZERMRzFDUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEhGQ1FVRmhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVXNzU1VGQlNTeERRVUZETEVOQlFVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBMYXlvdXRlcl8xID0gcmVxdWlyZShcIi4vTGF5b3V0ZXJcIik7XG5jb25zdCBUb2tlbnNfMSA9IHJlcXVpcmUoXCIuL1Rva2Vuc1wiKTtcbmNsYXNzIFRpbGVMYXlvdXRlciBleHRlbmRzIExheW91dGVyXzEuTGF5b3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGFyZWFEZXNjKSB7XG4gICAgICAgIHN1cGVyKGFyZWFEZXNjKTtcbiAgICAgICAgdGhpcy5hcmVhRGVzYyA9IGFyZWFEZXNjO1xuICAgICAgICB0aGlzLnVuaXQgPSBhcmVhRGVzYy5zb21lKChhcmVhKSA9PiAoYXJlYSBpbnN0YW5jZW9mIFRva2Vuc18xLlBpeGVsVG9rZW4pKSA/XG4gICAgICAgICAgICB0aGlzLnVuaXRQaXhlbCA6IHRoaXMudW5pdFBlcmNlbnQ7XG4gICAgfVxuICAgIHVuaXRQZXJjZW50KG51bSkge1xuICAgICAgICBjb25zdCBkZXNjID0gdGhpcy5hcmVhRGVzYztcbiAgICAgICAgY29uc3QgZmlsbCA9IHRoaXMuYXJlYURlc2Muc29tZShhID0+IChhIGluc3RhbmNlb2YgVG9rZW5zXzEuRmlsbFRva2VuKSk7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBNYXRoLnNxcnQobnVtKTtcbiAgICAgICAgY29uc3Qgcm93cyA9IE1hdGgucm91bmQocm9vdCk7XG4gICAgICAgIGxldCBjb2xzID0gTWF0aC5mbG9vcihyb290KTtcbiAgICAgICAgaWYgKHJvb3QgPiBjb2xzKSB7XG4gICAgICAgICAgICBjb2xzKys7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHdpZHRoID0gKGRlc2NbMF0gaW5zdGFuY2VvZiBUb2tlbnNfMS5EZWZpbmVkVG9rZW4pID8gZGVzY1swXS5nZXRTaXplKCkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBoZWlnaHQgPSAoZGVzY1sxXSBpbnN0YW5jZW9mIFRva2Vuc18xLkRlZmluZWRUb2tlbikgPyBkZXNjWzFdLmdldFNpemUoKSA6IHdpZHRoO1xuICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IDEwMCAvIGNvbHM7XG4gICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCAxMDAgLyByb3dzO1xuICAgICAgICBsZXQgbGVmdCA9IDA7XG4gICAgICAgIGxldCB0b3AgPSAwO1xuICAgICAgICBsZXQgc3R5bGVzID0gWy4uLkFycmF5KG51bSkua2V5cygpXS5tYXAoaSA9PiB7XG4gICAgICAgICAgICBsZXQgciA9ICdhdXRvJztcbiAgICAgICAgICAgIGxldCB3ID0gd2lkdGggKyAnJSc7XG4gICAgICAgICAgICBsZXQgYiA9ICdhdXRvJztcbiAgICAgICAgICAgIGxldCBoID0gaGVpZ2h0ICsgJyUnO1xuICAgICAgICAgICAgaWYgKChsZWZ0ICsgMiAqIHdpZHRoKSA+IDEwMCAmJiBmaWxsKSB7XG4gICAgICAgICAgICAgICAgciA9ICcwJSc7XG4gICAgICAgICAgICAgICAgdyA9ICdhdXRvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgodG9wICsgMiAqIGhlaWdodCkgPiAxMDAgJiYgZmlsbCkge1xuICAgICAgICAgICAgICAgIGIgPSAnMCUnO1xuICAgICAgICAgICAgICAgIGggPSAnYXV0byc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGBcbiAgICAgICAgICAgICAgICB0b3A6ICR7TWF0aC5mbG9vcih0b3ApfSU7IGJvdHRvbToke2J9O1xuICAgICAgICAgICAgICAgIGxlZnQ6ICR7bGVmdH0lOyAgICAgICAgICAgcmlnaHQ6JHtyfTtcbiAgICAgICAgICAgICAgICB3aWR0aDogJHt3fTsgICAgICAgICAgICAgIGhlaWdodDogJHtofTtcbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBpZiAoTWF0aC5yb3VuZChsZWZ0ICs9IHdpZHRoKSA+IDEwMCAtIE1hdGguZmxvb3Iod2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IDA7XG4gICAgICAgICAgICAgICAgdG9wICs9IGhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgfVxuICAgIHVuaXRQaXhlbChudW0pIHtcbiAgICAgICAgY29uc3QgZGVzYyA9IHRoaXMuYXJlYURlc2M7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBNYXRoLnNxcnQobnVtKTtcbiAgICAgICAgY29uc3Qgcm93cyA9IE1hdGgucm91bmQocm9vdCk7XG4gICAgICAgIGxldCBjb2xzID0gTWF0aC5mbG9vcihyb290KTtcbiAgICAgICAgaWYgKHJvb3QgPiBjb2xzKSB7XG4gICAgICAgICAgICBjb2xzKys7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHdpZHRoID0gKGRlc2NbMF0gaW5zdGFuY2VvZiBUb2tlbnNfMS5EZWZpbmVkVG9rZW4pID8gZGVzY1swXS5nZXRTaXplKCkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBoZWlnaHQgPSAoZGVzY1sxXSBpbnN0YW5jZW9mIFRva2Vuc18xLkRlZmluZWRUb2tlbikgPyBkZXNjWzFdLmdldFNpemUoKSA6IHdpZHRoO1xuICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IDEwMCAvIGNvbHM7XG4gICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCAxMDAgLyByb3dzO1xuICAgICAgICBsZXQgbGVmdCA9IDA7XG4gICAgICAgIGxldCB0b3AgPSAwO1xuICAgICAgICBsZXQgc3R5bGVzID0gWy4uLkFycmF5KG51bSkua2V5cygpXS5tYXAoaSA9PiB7XG4gICAgICAgICAgICBsZXQgciA9ICdhdXRvJztcbiAgICAgICAgICAgIGxldCB3ID0gd2lkdGggKyAncHgnO1xuICAgICAgICAgICAgbGV0IGIgPSAnYXV0byc7XG4gICAgICAgICAgICBsZXQgaCA9IGhlaWdodCArICdweCc7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGBcbiAgICAgICAgICAgICAgICB0b3A6ICR7TWF0aC5mbG9vcih0b3ApfSU7IGJvdHRvbToke2J9O1xuICAgICAgICAgICAgICAgIGxlZnQ6ICR7bGVmdH0lOyAgICAgICAgICAgcmlnaHQ6JHtyfTtcbiAgICAgICAgICAgICAgICB3aWR0aDogJHt3fTsgICAgICAgICAgICAgIGhlaWdodDogJHtofTtcbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBpZiAoTWF0aC5yb3VuZChsZWZ0ICs9IHdpZHRoKSA+IDEwMCAtIE1hdGguZmxvb3Iod2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IDA7XG4gICAgICAgICAgICAgICAgdG9wICs9IGhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgfVxuICAgIGdldFN0eWxlcyhjb21wb25lbnRzKSB7XG4gICAgICAgIGxldCBzdHlsZXMgPSB0aGlzLnVuaXQoY29tcG9uZW50cy5sZW5ndGgpO1xuICAgICAgICBjb21wb25lbnRzLm1hcCgoYywgaSkgPT4ge1xuICAgICAgICAgICAgYy5zdHlsZSA9IHN0eWxlc1tpXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAnLmhzLXRpbGUtbGF5b3V0JztcbiAgICB9XG59XG5MYXlvdXRlcl8xLkxheW91dGVyLnJlZ2lzdGVyKCd0aWxlcycsIFRpbGVMYXlvdXRlcik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR2xzWlV4aGVXOTFkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM1pwWlhjdlZHbHNaVXhoZVc5MWRHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQk9FUkJMSGxEUVVFd1F6dEJRVU14UXl4eFEwRkhkME03UVVGUGVFTXNUVUZCVFN4WlFVRmhMRk5CUVZFc2JVSkJRVkU3U1VGUkwwSXNXVUZCYlVJc1VVRkJjMEk3VVVGRGNrTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJSRVFzWVVGQlVTeEhRVUZTTEZGQlFWRXNRMEZCWXp0UlFVbHlReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGblFpeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1dVRkJXU3h0UWtGQlZTeERRVUZETEVOQlFVTXNRMEZCUVN4RFFVRkRPMWxCUXpGRkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03U1VGRE1VTXNRMEZCUXp0SlFVVlBMRmRCUVZjc1EwRkJReXhIUVVGVk8xRkJRekZDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU03VVVGRE0wSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeHJRa0ZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNdlJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6VkNMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRPVUlzU1VGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU01UWl4SlFVRkpMRWxCUVVrc1IwRkJSeXhKUVVGSkxFVkJRVVU3V1VGQlJTeEpRVUZKTEVWQlFVVXNRMEZCUXp0VFFVRkZPMUZCUXpWQ0xFbEJRVWtzUzBGQlN5eEhRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhaUVVGWkxIRkNRVUZaTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU03VVVGRE9VVXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NjVUpCUVZrc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0UlFVVXhSU3hMUVVGTExFZEJRVWtzUzBGQlN5eEpRVUZMTEVkQlFVY3NSMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkROVUlzVFVGQlRTeEhRVUZITEUxQlFVMHNTVUZCU1N4SFFVRkhMRWRCUVVNc1NVRkJTU3hEUVVGRE8xRkJRelZDTEVsQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOaUxFbEJRVWtzUjBGQlJ5eEhRVUZKTEVOQlFVTXNRMEZCUXp0UlFVVmlMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN1dVRkRlRU1zU1VGQlNTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRPMWxCUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzUzBGQlN5eEhRVUZETEVkQlFVY3NRMEZCUXp0WlFVTnlReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTTdXVUZCU1N4SlFVRkpMRU5CUVVNc1IwRkJSeXhOUVVGTkxFZEJRVU1zUjBGQlJ5eERRVUZETzFsQlEzUkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eEhRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRWRCUVVjc1NVRkJTU3hKUVVGSkxFVkJRVVU3WjBKQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRenRuUWtGQlF5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRPMkZCUVVVN1dVRkROMFFzU1VGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVsQlFVa3NSVUZCUlR0blFrRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETzJkQ1FVRkRMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU03WVVGQlJUdFpRVU0zUkN4TlFVRk5MRXRCUVVzc1IwRkJSenQxUWtGRFNDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhoUVVGaExFTkJRVU03ZDBKQlF6VkNMRWxCUVVrc2MwSkJRWE5DTEVOQlFVTTdlVUpCUXpGQ0xFTkJRVU1zTUVKQlFUQkNMRU5CUVVNN1lVRkRlRU1zUTBGQlF6dFpRVU5HTEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFbEJRVWtzUzBGQlN5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdaMEpCUVVVc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZCUXl4SFFVRkhMRWxCUVVrc1RVRkJUU3hEUVVGRE8yRkJRVVU3V1VGRGJrWXNUMEZCVHl4TFFVRkxMRU5CUVVNN1VVRkRhRUlzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEU2l4UFFVRlBMRTFCUVUwc1EwRkJRenRKUVVOc1FpeERRVUZETzBsQlJVOHNVMEZCVXl4RFFVRkRMRWRCUVZVN1VVRkRlRUlzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJRenRSUVVVelFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6VkNMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRPVUlzU1VGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU01UWl4SlFVRkpMRWxCUVVrc1IwRkJSeXhKUVVGSkxFVkJRVVU3V1VGQlJTeEpRVUZKTEVWQlFVVXNRMEZCUXp0VFFVRkZPMUZCUXpWQ0xFbEJRVWtzUzBGQlN5eEhRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhaUVVGWkxIRkNRVUZaTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU03VVVGRE9VVXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NjVUpCUVZrc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0UlFVVXhSU3hMUVVGTExFZEJRVWtzUzBGQlN5eEpRVUZMTEVkQlFVY3NSMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkROVUlzVFVGQlRTeEhRVUZITEUxQlFVMHNTVUZCU1N4SFFVRkhMRWRCUVVNc1NVRkJTU3hEUVVGRE8xRkJRelZDTEVsQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOaUxFbEJRVWtzUjBGQlJ5eEhRVUZKTEVOQlFVTXNRMEZCUXp0UlFVVmlMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN1dVRkRlRU1zU1VGQlNTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRPMWxCUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzUzBGQlN5eEhRVUZETEVsQlFVa3NRMEZCUXp0WlFVTjBReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTTdXVUZCU1N4SlFVRkpMRU5CUVVNc1IwRkJSeXhOUVVGTkxFZEJRVU1zU1VGQlNTeERRVUZETzFsQlEzWkRMRTFCUVUwc1MwRkJTeXhIUVVGSE8zVkNRVU5JTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExHRkJRV0VzUTBGQlF6dDNRa0ZETlVJc1NVRkJTU3h6UWtGQmMwSXNRMEZCUXp0NVFrRkRNVUlzUTBGQlF5d3dRa0ZCTUVJc1EwRkJRenRoUVVONFF5eERRVUZETzFsQlEwWXNTVUZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzU1VGQlNTeExRVUZMTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0blFrRkJSU3hKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVRkRMRWRCUVVjc1NVRkJTU3hOUVVGTkxFTkJRVU03WVVGQlJUdFpRVU51Uml4UFFVRlBMRXRCUVVzc1EwRkJRenRSUVVOb1FpeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTktMRTlCUVU4c1RVRkJUU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdTVUZSVXl4VFFVRlRMRU5CUVVNc1ZVRkJPRUk3VVVGRE9VTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRNVU1zVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVdNc1JVRkJSU3hEUVVGUkxFVkJRVVVzUlVGQlJUdFpRVU40UXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjRRaXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5JTEU5QlFVOHNhVUpCUVdsQ0xFTkJRVU03U1VGRE4wSXNRMEZCUXp0RFFVTktPMEZCUjBRc2JVSkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RlFVRkZMRmxCUVZrc1EwRkJReXhEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIExheW91dFRva2VuIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgfVxuICAgIGdldFNpemUoKSB7IHJldHVybiB0aGlzLnNpemU7IH1cbn1cbmV4cG9ydHMuTGF5b3V0VG9rZW4gPSBMYXlvdXRUb2tlbjtcbmNsYXNzIERlZmluZWRUb2tlbiBleHRlbmRzIExheW91dFRva2VuIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7IHN1cGVyKHNpemUpOyB9XG59XG5leHBvcnRzLkRlZmluZWRUb2tlbiA9IERlZmluZWRUb2tlbjtcbmNsYXNzIEZpbGxUb2tlbiBleHRlbmRzIExheW91dFRva2VuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoLTEpOyB9XG59XG5leHBvcnRzLkZpbGxUb2tlbiA9IEZpbGxUb2tlbjtcbmNsYXNzIFBpeGVsVG9rZW4gZXh0ZW5kcyBEZWZpbmVkVG9rZW4ge1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHsgc3VwZXIoc2l6ZSk7IH1cbn1cbmV4cG9ydHMuUGl4ZWxUb2tlbiA9IFBpeGVsVG9rZW47XG5jbGFzcyBQZXJjZW50VG9rZW4gZXh0ZW5kcyBEZWZpbmVkVG9rZW4ge1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHsgc3VwZXIoc2l6ZSk7IH1cbn1cbmV4cG9ydHMuUGVyY2VudFRva2VuID0gUGVyY2VudFRva2VuO1xuZnVuY3Rpb24gcHgocHgpIHsgcmV0dXJuIG5ldyBQaXhlbFRva2VuKHB4KTsgfVxuZXhwb3J0cy5weCA9IHB4O1xuZnVuY3Rpb24gcGMocGMpIHsgcmV0dXJuIG5ldyBQZXJjZW50VG9rZW4ocGMpOyB9XG5leHBvcnRzLnBjID0gcGM7XG5leHBvcnRzLkZJTEwgPSBuZXcgRmlsbFRva2VuKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWRzlyWlc1ekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNacFpYY3ZWRzlyWlc1ekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCVVVFc1RVRkJjMElzVjBGQlZ6dEpRVU0zUWl4WlFVRnZRaXhKUVVGWk8xRkJRVm9zVTBGQlNTeEhRVUZLTEVsQlFVa3NRMEZCVVR0SlFVRkhMRU5CUVVNN1NVRkROMElzVDBGQlR5eExRVUZMTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03UTBGRGVrTTdRVUZJUkN4clEwRkhRenRCUVV0RUxFMUJRWE5DTEZsQlFXRXNVMEZCVVN4WFFVRlhPMGxCUTJ4RUxGbEJRVmtzU1VGQldTeEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UTBGRE4wTTdRVUZHUkN4dlEwRkZRenRCUVV0RUxFMUJRV0VzVTBGQlZTeFRRVUZSTEZkQlFWYzdTVUZEZEVNc1owSkJRV2RDTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dERRVU12UWp0QlFVWkVMRGhDUVVWRE8wRkJTMFFzVFVGQllTeFZRVUZYTEZOQlFWRXNXVUZCV1R0SlFVTjRReXhaUVVGWkxFbEJRVmNzU1VGQlNTeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wTkJRelZETzBGQlJrUXNaME5CUlVNN1FVRkxSQ3hOUVVGaExGbEJRV0VzVTBGQlVTeFpRVUZaTzBsQlF6RkRMRmxCUVZrc1NVRkJWeXhKUVVGSkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1EwRkROVU03UVVGR1JDeHZRMEZGUXp0QlFVMUVMRk5CUVdkQ0xFVkJRVVVzUTBGQlF5eEZRVUZUTEVsQlFVMHNUMEZCVHl4SlFVRkpMRlZCUVZVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZCT1VRc1owSkJRVGhFTzBGQlRUbEVMRk5CUVdkQ0xFVkJRVVVzUTBGQlF5eEZRVUZUTEVsQlFVMHNUMEZCVHl4SlFVRkpMRmxCUVZrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZCYUVVc1owSkJRV2RGTzBGQlMyNUVMRkZCUVVFc1NVRkJTU3hIUVVGSExFbEJRVWtzVTBGQlV5eEZRVUZGTEVOQlFVTWlmUT09Il0sInNvdXJjZVJvb3QiOiIifQ==