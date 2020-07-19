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
/******/ 	return __webpack_require__(__webpack_require__.s = "./bin/esm/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Array.js":
/*!************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Array.js ***!
  \************************************************************************************/
/*! exports provided: uniquefy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniquefy", function() { return uniquefy; });
function uniquefy(array, key) {
    const unique = {};
    return key ? array.filter(t => unique[t['' + key]] ? false : (unique[t['' + key]] = true))
        : array.filter(t => unique['' + t] ? false : (unique['' + t] = true));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NBLE1BQU0sVUFBVSxRQUFRLENBQUksS0FBUyxFQUFFLEdBQWtCO0lBQ3JELE1BQU0sTUFBTSxHQUE0QixFQUFFLENBQUM7SUFDM0MsT0FBTyxHQUFHLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDN0UsQ0FBQyJ9

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Auth.js":
/*!***********************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Auth.js ***!
  \***********************************************************************************/
/*! exports provided: Auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return Auth; });
class Auth {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sT0FBZ0IsSUFBSTtJQUl0QixZQUFZLFFBQWUsRUFBRSxRQUFlO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FHSiJ9

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthBasic.js":
/*!****************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthBasic.js ***!
  \****************************************************************************************/
/*! exports provided: AuthBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthBasic", function() { return AuthBasic; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Auth.js");

const log = new _log__WEBPACK_IMPORTED_MODULE_0__["Log"]('RequestBasic');

class AuthBasic extends _Auth__WEBPACK_IMPORTED_MODULE_1__["Auth"] {
    testAuth(options, data, response) {
        log.debug(() => `received www-authenticate request for ${options.host}`);
        options.headers.Authorization = 'Basic ' + _btoa(`${this.username}:${this.password}`);
        return options;
    }
}
function _btoa(str) {
    const buffer = str instanceof Buffer ? str : Buffer.from(str.toString(), 'binary');
    return buffer.toString('base64');
}
function _atob(str) {
    return Buffer.from(str, 'base64').toString('binary');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aEJhc2ljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0F1dGhCYXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQW1CLE9BQU8sQ0FBQztBQUFHLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBR2hGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBa0IsUUFBUSxDQUFDO0FBRzFDLE1BQU0sT0FBTyxTQUFVLFNBQVEsSUFBSTtJQUMvQixRQUFRLENBQUMsT0FBZSxFQUFFLElBQVcsRUFBRSxRQUF3QjtRQUMzRCxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFBLHlDQUF5QyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RSxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN0RixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFFRCxTQUFTLEtBQUssQ0FBQyxHQUFpQjtJQUM1QixNQUFNLE1BQU0sR0FBRyxHQUFHLFlBQVksTUFBTSxDQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xGLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRUQsU0FBUyxLQUFLLENBQUMsR0FBVTtJQUNyQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6RCxDQUFDIn0=
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/node_modules/buffer/index.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthDigest.js":
/*!*****************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthDigest.js ***!
  \*****************************************************************************************/
/*! exports provided: AuthDigest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthDigest", function() { return AuthDigest; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Auth */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Auth.js");

const log = new _log__WEBPACK_IMPORTED_MODULE_0__["Log"]('RequestDigest');


class AuthDigest extends _Auth__WEBPACK_IMPORTED_MODULE_2__["Auth"] {
    constructor() {
        super(...arguments);
        this.nc = 0;
    }
    updateNC() {
        let max = 99999999;
        let padding = new Array(8).join('0') + '';
        this.nc = (this.nc > max ? 1 : this.nc + 1);
        let nc = this.nc + '';
        return padding.substr(0, 8 - nc.length) + nc;
    }
    generateCNONCE(qop) {
        let cnonce;
        let nc;
        if (typeof qop === 'string') {
            let cnonceHash = Object(crypto__WEBPACK_IMPORTED_MODULE_1__["createHash"])('md5');
            cnonceHash.update(Math.random().toString(36));
            cnonce = cnonceHash.digest('hex').substr(0, 16);
            nc = this.updateNC();
        }
        return { cnonce: cnonce, nc: nc };
    }
    testAuth(options, data, response) {
        log.debug(() => `received www-authenticate request for ${options.host}`);
        let challenge = parseDigestResponse(response.headers['www-authenticate']);
        let ha1 = Object(crypto__WEBPACK_IMPORTED_MODULE_1__["createHash"])('md5');
        let _str = `${this.username}:${challenge.realm}:${this.password}`;
        ha1.update(_str);
        let ha2 = Object(crypto__WEBPACK_IMPORTED_MODULE_1__["createHash"])('md5');
        _str = `${options.method}:${options.path}`;
        ha2.update(_str);
        let { nc, cnonce } = this.generateCNONCE(challenge.qop);
        let hash = Object(crypto__WEBPACK_IMPORTED_MODULE_1__["createHash"])('md5');
        _str = `${ha1.digest('hex')}:${challenge.nonce}:${nc}:${cnonce}:${challenge.qop}:${ha2.digest('hex')}`;
        hash.update(_str);
        let authParams = {
            realm: challenge.realm,
            username: this.username,
            uri: options.path,
            qop: challenge.qop,
            nonce: challenge.nonce,
            algorithm: "MD5",
            response: hash.digest('hex')
        };
        authParams = omitNull(authParams);
        if (cnonce) {
            authParams.nc = nc;
            authParams.cnonce = cnonce;
        }
        options.headers.Authorization = compileParams(authParams);
        return options;
    }
}
function omitNull(data) {
    let newObject = {};
    Object.keys(data).forEach((k) => {
        if (data[k] !== null && data[k] !== undefined) {
            newObject[k] = data[k];
        }
    });
    return newObject;
}
function compileParams(params) {
    let parts = [];
    for (let i in params) {
        if (typeof params[i] !== 'function') {
            let param = i + '=' + (putDoubleQuotes(i) ? `"${params[i]}"` : params[i]);
            parts.push(param);
        }
    }
    return 'Digest ' + parts.join(',');
}
function putDoubleQuotes(entry) {
    return ['qop', 'nc'].indexOf(entry) < 0;
}
function parseDigestResponse(digestHeader) {
    digestHeader = digestHeader.split('Digest ')[1];
    const params = {};
    digestHeader.replace(/(([^"]|"[^"]*")*?)(,)/g, (...rest) => {
        const part = rest[1];
        const kv = part.split('=').map((v) => v.trim());
        params[kv[0]] = kv[1].replace(/\"/g, '');
        return '';
    });
    return params;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aERpZ2VzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoRGlnZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBbUIsT0FBTyxDQUFDO0FBQUcsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFZLFFBQVEsQ0FBQztBQUcxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQWtCLFFBQVEsQ0FBQztBQU0xQyxNQUFNLE9BQU8sVUFBVyxTQUFRLElBQUk7SUFBcEM7O1FBQ0ksT0FBRSxHQUFHLENBQUMsQ0FBQztJQXlFWCxDQUFDO0lBcEVHLFFBQVE7UUFDSixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFDbkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUN0QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFNRCxjQUFjLENBQUMsR0FBVTtRQUNyQixJQUFJLE1BQVUsQ0FBQztRQUNmLElBQUksRUFBUyxDQUFDO1FBRWQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDekIsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxD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

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Checksum.js":
/*!***************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Checksum.js ***!
  \***************************************************************************************/
/*! exports provided: shortCheckSum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortCheckSum", function() { return shortCheckSum; });
function shortCheckSum(s) {
    let chk = 0x12345678;
    for (let i = 0; i < s.length; i++) {
        chk += (s.charCodeAt(i) * (i + 1));
    }
    return (chk & 0xffffffff).toString(16);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tzdW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ2hlY2tzdW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUMsTUFBTSxVQUFVLGFBQWEsQ0FBQyxDQUFRO0lBQ25DLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQztJQUNyQixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEM7SUFDRCxPQUFPLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQyxDQUFDIn0=

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Date.js":
/*!***********************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Date.js ***!
  \***********************************************************************************/
/*! exports provided: date, ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms", function() { return ms; });
const monthStr = [
    ['Jan', 'January'], ['Feb', 'February'], ['Mar', 'March'], ['Apr', 'April'], ['May', 'May'], ['Jun', 'June'],
    ['Jul', 'July'], ['Aug', 'August'], ['Sep', 'September'], ['Oct', 'October'], ['Nov', 'November'], ['Dec', 'December']
];
const dayStr = [
    ['Sun', 'Sunday'], ['Mon', 'Monday'], ['Tue', 'Tuesday'], ['Wed', 'Wednesday'], ['Thu', 'Thursday'], ['Fri', 'Friday'], ['Sat', 'Saturday']
];
function formatNumber(number, digits) {
    let r = '' + number;
    while (r.length < digits) {
        r = "0" + r;
    }
    return r;
}
function date(formatString, date = new Date()) {
    return (typeof formatString !== 'string' || isNaN(date.getTime())) ?
        'invalid' :
        formatString
            .replace(/%YYYY/g, '' + date.getFullYear())
            .replace(/%YY/g, '' + (date.getFullYear() % 100))
            .replace(/%MMMM/g, monthStr[date.getMonth()][1])
            .replace(/%MMM/g, monthStr[date.getMonth()][0])
            .replace(/%MM/g, formatNumber(date.getMonth() + 1, 2))
            .replace(/%M/g, '' + (date.getMonth() + 1))
            .replace(/%DDDD/g, dayStr[date.getDay()][1])
            .replace(/%DDD/g, dayStr[date.getDay()][0])
            .replace(/%DD/g, formatNumber(date.getDate(), 2))
            .replace(/%D/g, '' + date.getDate())
            .replace(/%hh/g, formatNumber(date.getHours(), 2))
            .replace(/%h/g, '' + date.getHours())
            .replace(/%mm/g, formatNumber(date.getMinutes(), 2))
            .replace(/%m/g, '' + date.getMinutes())
            .replace(/%ss/g, formatNumber(date.getSeconds(), 2))
            .replace(/%jjj/g, formatNumber(date.getMilliseconds(), 3))
            .replace(/%jj/g, formatNumber(date.getMilliseconds() / 10, 2))
            .replace(/%j/g, formatNumber(date.getMilliseconds() / 100, 1));
}
const ms = {
    fromMinutes: (min) => 1000 * 60 * min,
    fromHours: (h) => 1000 * 60 * 60 * h,
    fromDays: (d) => 1000 * 60 * 60 * 24 * d,
    fromWeeks: (w) => 1000 * 60 * 60 * 24 * 7 * w,
    toMinutes: (ms) => ms / (1000 * 60),
    toHours: (ms) => ms / (1000 * 60 * 60),
    toDays: (ms) => ms / (1000 * 60 * 60 * 24),
    toWeeks: (ms) => ms / (1000 * 60 * 60 * 24 * 7)
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBLE1BQU0sUUFBUSxHQUFHO0lBQ2IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO0lBQzVHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQztDQUFDLENBQUM7QUFHNUgsTUFBTSxNQUFNLEdBQUc7SUFDWCxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUM7Q0FBQyxDQUFDO0FBRzNJLFNBQVMsWUFBWSxDQUFDLE1BQWEsRUFBRSxNQUFhO0lBQzlDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBQyxNQUFNLENBQUM7SUFDbEIsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtRQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQUU7SUFDMUMsT0FB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SUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLENBQUM7SUFDL0MsU0FBUyxFQUFPLENBQUMsQ0FBUSxFQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFDLENBQUM7SUFDakQsU0FBUyxFQUFPLENBQUMsRUFBUyxFQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxDQUFDO0lBQzVDLE9BQU8sRUFBUyxDQUFDLEVBQVMsRUFBRyxFQUFFLENBQUMsRUFBRSxHQUFDLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUM7SUFDL0MsTUFBTSxFQUFVLENBQUMsRUFBUyxFQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUM7SUFDbEQsT0FBTyxFQUFTLENBQUMsRUFBUyxFQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO0NBQ3ZELENBQUMifQ==

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Pacing.js":
/*!*************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Pacing.js ***!
  \*************************************************************************************/
/*! exports provided: timeout, delay, Pace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return timeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pace", function() { return Pace; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");

const log = new _log__WEBPACK_IMPORTED_MODULE_0__["Log"]('Pacing');
function timeout(ms, ...rest) {
    return new Promise((resolve, reject) => { setTimeout(reject, ms, ...rest); });
}
function delay(ms) {
    return (args) => {
        return new Promise((resolve) => {
            setTimeout(() => { resolve(args); }, ms);
        });
    };
}
class Pace {
    constructor({ pace = 100, maxConcurrent = -1, collectionPeriod = 0 }) {
        this.maxConcurrent = -1;
        this.pace = 0;
        this.waitUntil = 0;
        this.waiting = 0;
        this.started = 0;
        this.queue = {};
        this.collectionPeriod = 0;
        this.pace = pace;
        this.maxConcurrent = maxConcurrent;
        this.collectionPeriod = collectionPeriod;
    }
    isAllowed() { return this.maxConcurrent < 0 || this.started < this.maxConcurrent; }
    setPace(ms) { this.pace = ms; }
    setMaxConcurrent(maxConcurrent) { this.maxConcurrent = maxConcurrent; }
    inQueue() { return this.waiting; }
    inProgress() { return this.started; }
    async add(fn, key) {
        const now = new Date().getTime();
        const callTime = now + Math.max(this.collectionPeriod, this.waitUntil);
        this.waitUntil += this.pace;
        let item;
        if (key && this.queue[key]) {
            item = this.queue[key];
            clearTimeout(item.timer);
            item.fn = fn;
            item.added = now;
        }
        else {
            key = key || `${now}-${Math.floor(Math.random() * 100000)}`;
            item = { fn: fn, added: now, pace: this, key: key };
            this.queue[key] = item;
            this.waiting++;
        }
        return this.resolveItem(item, callTime - now);
    }
    resolveItem(item, waitTime) {
        return new Promise((resolve, reject) => {
            const execute = async (_item) => {
                try {
                    const key = _item.key;
                    delete _item.pace.queue[key];
                    _item.pace.waiting--;
                    await belowConcurrentLimit(_item.pace);
                    _item.pace.started++;
                    const actualDelay = Date.now() - _item.added;
                    const ret = await _item.fn(actualDelay);
                    _item.pace.started--;
                    resolve(ret);
                }
                catch (e) {
                    _item.pace.started--;
                    reject(e);
                }
            };
            item.timer = setTimeout(execute, waitTime, item);
        });
    }
}
function belowConcurrentLimit(pace) {
    return new Promise(release => {
        const waitLoop = () => pace.isAllowed() ? release() : setTimeout(waitLoop, 10);
        waitLoop();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFjaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1BhY2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU8sT0FBTyxDQUFDO0FBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFTNUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxFQUFTLEVBQUUsR0FBRyxJQUFVO0lBQzVDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEYsQ0FBQztBQWdDRCxNQUFNLFVBQVUsS0FBSyxDQUFDLEVBQVM7SUFDM0IsT0FBTyxDQUFJLElBQU8sRUFBYSxFQUFFO1FBQzdCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFzQixFQUFFLEVBQUU7WUFDMUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQztBQUNOLENBQUM7QUFtQkQsTUFBTSxPQUFPLElBQUk7SUFpQ2IsWUFBWSxFQUFDLElBQUksR0FBQyxHQUFHLEVBQUUsYUFBYSxHQUFDLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixHQUFDLENBQUMsRUFBQztRQS9CcEQsa0JBQWEsR0FBSyxDQUFDLENBQUMsQ0FBQztRQUVyQixTQUFJLEdBQWMsQ0FBQyxDQUFDO1FBRXBCLGNBQVMsR0FBUyxDQUFDLENBQUM7UUFFcEIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLFVBQUssR0FBd0IsRUFBRSxDQUFDO1FBY2pDLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQVF4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFDN0MsQ0FBQztJQW5CTSxTQUFTLEtBQWEsT0FBTyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBc0IzRixPQUFPLENBQUMsRUFBUyxJQUFTLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUUzQyxnQkFBZ0IsQ0FBQyxhQUFvQixJQUFTLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUVuRixPQUFPLEtBQWUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUU1QyxVQUFVLEtBQVksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQVFuRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWdCLEVBQUUsR0FBVztRQUNuQyxNQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRTVCLElBQUksSUFBUyxDQUFDO1FBQ2QsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7U0FDcEI7YUFBTTtZQUNILEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUMxRCxJQUFJLEdBQUcsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEtBQUssRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsR0FBRyxFQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUE7SUFDakQsQ0FBQztJQUVPLFdBQVcsQ0FBQyxJQUFTLEVBQUUsUUFBZTtRQUMxQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ25DLE1BQU0sT0FBTyxHQUFHLEtBQUssRUFBRSxLQUFVLEVBQUUsRUFBRTtnQkFBRyxJQUFJO29CQUN4QyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO29CQUN0QixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNyQixNQUFNLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDckIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7b0JBQzNDLE1BQU0sR0FBRyxHQUFHLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNoQjtnQkFBQyxPQUFNLENBQUMsRUFBRTtvQkFDUCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNyQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2I7WUFBQSxDQUFDLENBQUE7WUFHRixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBR0QsU0FBUyxvQkFBb0IsQ0FBQyxJQUFTO0lBQ25DLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDekIsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5RSxRQUFRLEVBQUUsQ0FBQztJQUNmLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyJ9

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Request.js":
/*!**************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Request.js ***!
  \**************************************************************************************/
/*! exports provided: Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");
/* harmony import */ var _Pacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pacing */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Pacing.js");
/* harmony import */ var _AuthDigest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthDigest */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthDigest.js");
/* harmony import */ var _AuthBasic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthBasic */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthBasic.js");

const log = new _log__WEBPACK_IMPORTED_MODULE_0__["Log"]('Request');



log.messageLength = 120;
class Request {
    constructor() {
        this.log = log;
        this.setCredentials = (user, password) => {
            this.credentials = user === undefined ? undefined : { user: user, password: password };
        };
        this.setAuthToken = (token) => this.authToken = token;
        this.setPace = ({ pace = 50, max = 10, collectionPeriod = 100 } = { pace: undefined }) => {
            this.pace = pace === undefined ? undefined : new _Pacing__WEBPACK_IMPORTED_MODULE_1__["Pace"]({ pace: pace, maxConcurrent: max, collectionPeriod: collectionPeriod });
        };
        this.decode = undefined;
        this.cacheName = (options) => this.cache === undefined ? undefined :
            `${this.cache}/${options.path.replace(/q=(.*?)\//g, 'q=$1-').replace(/\?/g, '')}`;
    }
    async get(url, { useCached = true, headers = {} } = {}) {
        const options = this.getOptions(url, 'GET');
        return this.decodedRequest(options, useCached, headers);
    }
    async put(url, postData, { useCached = false, headers = {} } = {}) {
        const options = this.getOptions(url, 'PUT');
        return this.decodedRequest(options, useCached, headers, postData);
    }
    async post(url, postData, { useCached = false, headers = {} } = {}) {
        const options = this.getOptions(url, 'POST');
        return this.decodedRequest(options, useCached, headers, postData);
    }
    getURL(url) {
        return (typeof url === 'string') ? new URL(url, document.URL) : url;
    }
    getOptions(url, method) {
        url = this.getURL(url);
        const prefix = '';
        const options = {
            rejectUnauthorized: false,
            method: method,
            protocol: url.protocol,
            host: url.host,
            hostname: url.hostname,
            port: url.port,
            pathname: prefix + url.pathname,
            path: prefix + url.pathname + (url.search || ''),
            headers: {},
            url: `${url.protocol}//${url.host}${url.port ? ':' + url.port : ''}${prefix + url.pathname + (url.search || '')}`,
        };
        if (this.authToken) {
            options.headers.AuthToken = this.authToken;
        }
        return options;
    }
    async decodedRequest(options, useCached, headers, postData) {
        const result = await this.requestOptions(options, useCached, postData);
        if (this.decode && result.response.txt && options.method === 'GET') {
            result.data = this.decode(result.data, options);
        }
        return result;
    }
    async readCached(fname) {
        return undefined;
    }
    async writeCached(fname, response) {
    }
    async requestOptions(options, useCached, postData) {
        const fname = this.cache ? this.cacheName(options) : undefined;
        if (fname && useCached && options.method === 'GET') {
            const result = await this.readCached(fname);
            if (result !== undefined) {
                return result;
            }
        }
        let request;
        if (this.pace) {
            this.log.info(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) ${options.method}-ing ${options.url}`);
            request = this.pace.add(() => this.request(options, postData), `${options.method} ${options.url}`);
        }
        else {
            request = this.request(options, postData);
        }
        this.log.debug(() => `${options.method}-ing ${options.url}`);
        const response = await request;
        if (this.pace) {
            this.log.transient(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) received ${options.method} ${options.url} `);
        }
        this.log.debug(() => `received ${options.method} ${response.response.statusMessage} ${options.method} ${options.url}`);
        const code = response.response.statusCode || response.response.status;
        if (code >= 200 && code < 300) {
            if (fname && options.method === 'GET') {
                await this.writeCached(fname, response);
            }
        }
        return response;
    }
    async request(options, postData) {
        try {
            const response = await this.issueRequest(options, postData);
            let authenticate = response.response.headers['www-authenticate'];
            if (!authenticate) {
                return response;
            }
            else if (this.credentials) {
                authenticate = authenticate.trim();
                let auth;
                if (authenticate.indexOf('Digest') === 0) {
                    auth = new _AuthDigest__WEBPACK_IMPORTED_MODULE_2__["AuthDigest"](this.credentials.user, this.credentials.password);
                }
                else if (authenticate.indexOf('Basic') === 0) {
                    auth = new _AuthBasic__WEBPACK_IMPORTED_MODULE_3__["AuthBasic"](this.credentials.user, this.credentials.password);
                }
                else {
                    throw `unimplemented authentication request ${authenticate} for '${options.url}'`;
                }
                auth.testAuth(options, response.data, response.response);
                return this.request(options);
            }
            else {
                throw `authentication missing; call 'setCredentials' before calling 'get'`;
            }
        }
        catch (e) {
            throw `error requesting ${options.url}: ${e}`;
        }
    }
    async issueRequest(options, postData) {
        const request = this;
        return new Promise((resolve, reject) => {
            try {
                function confirmRequest(e) {
                    const headersText = xhr.getAllResponseHeaders();
                    const headers = { 'content-type': '' };
                    headersText.split('\r\n').map(h => {
                        const kv = h.split(':').map(p => p.trim());
                        if (kv[0].length) {
                            headers[kv[0]] = kv[1];
                        }
                    });
                    const contentType = this.responseType;
                    const txt = request.isTextualContent(contentType);
                    const data = this.response;
                    const response = {
                        data: data,
                        response: {
                            txt: txt,
                            headers: headers,
                            method: options.method,
                            status: this.status,
                            statusCode: this.status,
                            statusMessage: `${this.status} ${this.statusText}`,
                            url: this.responseURL,
                        }
                    };
                    resolve(response);
                }
                const xhr = new XMLHttpRequest();
                const txt = request.isTextualRequest(options.pathname);
                this.log.debug(() => `requesting ${options.method} ${this.log.inspect(options, { depth: 4 })}`);
                xhr.open(options.method, options.url, true);
                Object.keys(options.headers).forEach(h => xhr.setRequestHeader(h, options.headers[h]));
                xhr.responseType = txt ? 'text' : 'arraybuffer';
                xhr.onload = confirmRequest;
                xhr.send(postData ? JSON.stringify(postData) : undefined);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    isTextualContent(contentType) {
        let txt = false;
        if (contentType === undefined) {
            contentType = 'text/html';
        }
        else {
            contentType = contentType.split(';')[0];
        }
        const subTypes = contentType.split('/');
        switch (subTypes[0]) {
            case '':
            case 'text':
                txt = true;
                break;
            case 'image':
            case 'audio':
            case 'font': break;
            case 'application':
                switch (subTypes[1]) {
                    case 'json':
                        txt = true;
                        break;
                    case 'pdf': break;
                    case 'vnd.openxmlformats-officedocument.presentationml.presentation': break;
                    case 'vnd.openxmlformats-officedocument.spreadsheetml.sheet': break;
                    case 'vnd.ms-powerpoint': break;
                    case 'vnd.ms-excel': break;
                    case 'octet-stream': break;
                    case 'vnd.ms-excel.sheet.macroenabled.12': break;
                    default: this.log.info(`caching ${contentType} as binary`);
                }
                break;
            default: this.log.warn(`caching '${contentType}' as binary`);
        }
        return txt;
    }
    isTextualRequest(pathName) {
        return ['json', 'txt', 'html'].some(ext => pathName.indexOf(ext) >= 0);
    }
}
Request.decoders = {
    str2json: (data) => { try {
        return JSON.parse(data);
    }
    catch (e) {
        return {};
    } },
    html2json: undefined
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQWUsT0FBTyxDQUFDO0FBQUcsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFjLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQVEsY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBUyxhQUFhLENBQUM7QUFHM0MsR0FBRyxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7QUF3RHhCLE1BQU0sT0FBTyxPQUFPO0lBQXBCO1FBT2MsUUFBRyxHQUFRLEdBQUcsQ0FBQztRQXVCbEIsbUJBQWMsR0FBRyxDQUFDLElBQVksRUFBRSxRQUFnQixFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUcsU0FBUyxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDeEYsQ0FBQyxDQUFBO1FBR00saUJBQVksR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO1FBUW5CLFlBQU8sR0FBRyxDQUFDLEVBQUMsSUFBSSxHQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUMsRUFBRSxFQUFFLGdCQUFnQixHQUFDLEdBQUcsS0FBRSxFQUFDLElBQUksRUFBTSxTQUFTLEVBQUMsRUFBRSxFQUFFO1lBQy9FLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFHLFNBQVMsQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFDLElBQUksRUFB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

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/index.js":
/*!************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/index.js ***!
  \************************************************************************************/
/*! exports provided: timeout, delay, Pace, Request, shortCheckSum, date, ms, Log, uniquefy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pacing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pacing */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Pacing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return _Pacing__WEBPACK_IMPORTED_MODULE_0__["timeout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _Pacing__WEBPACK_IMPORTED_MODULE_0__["delay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pace", function() { return _Pacing__WEBPACK_IMPORTED_MODULE_0__["Pace"]; });

/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Request */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Request.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return _Request__WEBPACK_IMPORTED_MODULE_1__["Request"]; });

/* harmony import */ var _Checksum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checksum */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Checksum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shortCheckSum", function() { return _Checksum__WEBPACK_IMPORTED_MODULE_2__["shortCheckSum"]; });

/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Date */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "date", function() { return _Date__WEBPACK_IMPORTED_MODULE_3__["date"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ms", function() { return _Date__WEBPACK_IMPORTED_MODULE_3__["ms"]; });

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return _log__WEBPACK_IMPORTED_MODULE_4__["Log"]; });

/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Array */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniquefy", function() { return _Array__WEBPACK_IMPORTED_MODULE_5__["uniquefy"]; });







//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBaUIsVUFBVSxDQUFDO0FBQzVCLGNBQWlCLFdBQVcsQ0FBQztBQUM3QixjQUFpQixZQUFZLENBQUM7QUFDOUIsY0FBaUIsUUFBUSxDQUFDO0FBQzFCLGNBQWlCLE9BQU8sQ0FBQztBQUN6QixjQUFpQixTQUFTLENBQUMifQ==

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js":
/*!**********************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js ***!
  \**********************************************************************************/
/*! exports provided: Log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Date */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Date.js");

const COLOR = {
    clear: 'color:#000; background-color:inherit; font-weight:normal;',
    bold: 'font-weight:bold;',
    dim: '',
    underscore: '',
    blink: '',
    reverse: '',
    hidden: '',
    black: 'color:#000;',
    red: 'color:#f00;',
    green: 'color:#0f0;',
    yellow: 'color:#ff0;',
    blue: 'color:#00f;',
    magenta: 'color:#f0f;',
    cyan: 'color:#0ff;',
    white: 'color:#fff;',
    darkred: 'color:#800;',
    darkgreen: 'color:#080;',
    darkyellow: 'color:#880;',
    darkblue: 'color:#008;',
    darkmagenta: 'color:#808;',
    darkcyan: 'color:#088;',
    gray: 'color:#888;',
    bgBlack: 'background-color:#000;',
    bgRed: 'background-color:#f00;',
    bgGreen: 'background-color:#0f0;',
    bgYellow: 'background-color:#ff0;',
    bgBlue: 'background-color:#00f;',
    bgMagenta: 'background-color:#f0f;',
    bgCyan: 'background-color:#0ff;',
    bgWhite: 'background-color:#fff;'
};
class Log {
    constructor(prefix) {
        this.reportLevel = undefined;
        this.reportPrefix = '';
        this.maxLength = -1;
        this.colors = true;
        this.reportPrefix = prefix;
    }
    set messageLength(max) { this.maxLength = max; }
    get messageLength() { return this.maxLength; }
    level(newLevelSym, setGlobalLevel) {
        let newLevel = Log.levels[newLevelSym] || Log.globalLevel;
        let oldLevel = this.reportLevel || Log.globalLevel;
        if (newLevelSym === undefined) {
            newLevel = oldLevel;
        }
        else if (newLevelSym === null) {
            this.reportLevel = undefined;
        }
        else if (Log.levels[newLevelSym]) {
            if (setGlobalLevel) {
                Log.globalLevel = newLevel;
            }
            else {
                this.reportLevel = newLevel;
            }
            const msg = `new ${setGlobalLevel ? 'global' : this.reportPrefix} log level ${newLevel.desc.toUpperCase()} (was ${oldLevel.desc.toUpperCase()})`;
            (newLevel.sym === oldLevel.sym) ? this.debug(msg) : this.info(msg);
        }
        else {
            this.error(`unkown level ${newLevelSym}; log level remains ${oldLevel.sym}`);
        }
        return newLevel.sym;
    }
    debug(msg) { return this.out(Log.DEBUG, msg, { color: ['gray'] }); }
    transient(msg) { return this.out(Log.INFO, msg, { color: ['darkgreen'], lf: '\r' }); }
    progress(msg) { return this.out(Log.INFO, msg, { color: ['darkblue'] }); }
    info(msg) { return this.out(Log.INFO, msg, { color: ['darkgreen'] }); }
    warn(msg) { return this.out(Log.WARN, msg, { color: ['darkyellow', 'bold'] }); }
    error(msg) {
        const color = ['darkred', 'bold'];
        if (msg.message) {
            this.out(Log.ERROR, msg.message, { color: color });
            this.out(Log.ERROR, msg.stack, { color: color });
            return msg.message;
        }
        else {
            return this.out(Log.ERROR, msg, { color: color });
        }
    }
    out(lvl, msg, options) {
        let desc = Log.levels[lvl];
        const filterLevel = this.reportLevel || Log.globalLevel;
        if (desc.importance >= filterLevel.importance) {
            let line;
            switch (typeof msg) {
                case 'function':
                    line = msg();
                    break;
                case 'string':
                    line = msg;
                    break;
                case 'object':
                default: line = this.inspect(msg);
            }
            const dateStr = Object(_Date__WEBPACK_IMPORTED_MODULE_0__["date"])(Log.dateFormat);
            if (line.length > this.maxLength && this.maxLength > 0) {
                line = `${line.slice(0, this.maxLength / 2 - 2)}...${line.slice(-this.maxLength / 2 + 2)}`;
            }
            if (msg.stack) {
                line = `${line}\n${msg.stack}`;
            }
            const header = `${dateStr} ${this.reportPrefix} ${desc.desc}`;
            this.output(options.color, header, line);
            return line + (options.lf || '');
        }
        return undefined;
    }
    output(color, header, line) {
        console.log(`%c${header}%c ${line}`, color.map(c => COLOR[c]).join(' '), COLOR['clear']);
    }
    format(fmtStr) {
        if (fmtStr === null) {
            Log.dateFormat = Log.defDateFormat;
        }
        else if (fmtStr) {
            Log.dateFormat = fmtStr;
        }
        return Log.dateFormat;
    }
    prefix(prf) {
        if (prf) {
            this.reportPrefix = prf;
        }
        return this.reportPrefix;
    }
    config(cfg) {
        if (cfg.format !== undefined) {
            this.format(cfg.format);
        }
        if (cfg.level !== undefined) {
            this.level(cfg.level);
        }
        if (cfg.colors !== undefined) {
            this.colors = cfg.colors;
        }
    }
    inspect(msg, { depth = -1, indent = '   ', colors = Log.INDENT_COLORS } = { depth: 0, indent: '   ', colors: Log.INDENT_COLORS }) {
        function _inspect(msg, depth, level, currIndent) {
            if (msg === null) {
                return 'null';
            }
            if (msg === undefined) {
                return 'undefined';
            }
            if (typeof msg === 'function') {
                return 'function';
            }
            if (typeof msg === 'string') {
                return `'${msg}'`;
            }
            if (typeof msg === 'object') {
                if (depth < 0) {
                    return (msg.length === undefined) ? '{...}' : '[...]';
                }
                if (msg.map !== undefined) {
                    return `[${msg.map((e) => (e === undefined) ? '' : _inspect(e, depth - 1, level + 1, currIndent)).join(', ')}]`;
                }
                const [prefix, postfix, lf, postIndent] = log.getPrePostfix(indent, level, currIndent, colors);
                return `{${lf}` + Object.keys(msg).map(k => `${prefix}${k}${postfix}: ${_inspect(msg[k], depth - 1, level + 1, currIndent + indent)}`).join(`,${lf}`) + `${lf}${postIndent}}`;
            }
            return msg.toString();
        }
        const log = this;
        return _inspect(msg, (depth !== undefined && depth !== null && depth >= 0) ? depth : 999, 0, '');
    }
    getPrePostfix(indent, level, currIndent, colors) {
        let cstart = '', cstop = '', lf = '\n';
        if (colors) {
            indent = indent.replace(/ /g, '&nbsp;');
            currIndent = currIndent.replace(/ /g, '&nbsp;');
            const color = COLOR[colors[level % colors.length]] || colors[level % colors.length];
            cstart = `<b><span style='${color}'>`;
            cstop = `</span></b>`;
            lf = '<br>';
        }
        return [`${currIndent}${indent}${cstart}`, `${cstop}`, colors ? '<br>' : '\n', currIndent];
    }
}
Log.INDENT_COLORS = ['darkblue', 'darkgreen', 'darkred', 'darkcyan', 'darkyellow', 'darkmagenta'];
Log.defDateFormat = '%YYYY%MM%DD %hh:%mm:%ss.%jjj';
Log.dateFormat = Log.defDateFormat;
Log.DEBUG = 'DEBUG';
Log.INFO = 'INFO';
Log.WARN = 'WARN';
Log.ERROR = 'ERROR';
Log.levels = {
    [Log.DEBUG]: { importance: 0, sym: Log.DEBUG, desc: 'DEBUG' },
    [Log.INFO]: { importance: 1, sym: Log.INFO, desc: 'INFO' },
    [Log.WARN]: { importance: 2, sym: Log.WARN, desc: 'WARN' },
    [Log.ERROR]: { importance: 3, sym: Log.ERROR, desc: 'ERROR' }
};
Log.log = new Log('');
Log.globalLevel = Log.levels[Log.INFO];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRkEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUk5QixNQUFNLEtBQUssR0FBRztJQUNWLEtBQUssRUFBTywyREFBMkQ7SUFFdkUsSUFBSSxFQUFRLG1CQUFtQjtJQUMvQixHQUFHLEVBQVMsRUFBRTtJQUNkLFVBQVUsRUFBRSxFQUFFO0lBQ2QsS0FBSyxFQUFPLEVBQUU7SUFDZCxPQUFPLEVBQUssRUFBRTtJQUNkLE1BQU0sRUFBTSxFQUFFO0lBRWQsS0FBSyxFQUFPLGFBQWE7SUFDekIsR0FBRyxFQUFTLGFBQWE7SUFDekIsS0FBSyxFQUFPLGFBQWE7SUFDekIsTUFBTSxFQUFNLGFBQWE7SUFDekIsSUFBSSxFQUFRLGFBQWE7SUFDekIsT0FBTyxFQUFLLGFBQWE7SUFDekIsSUFBSSxFQUFRLGFBQWE7SUFDekIsS0FBSyxFQUFPLGFBQWE7SUFFekIsT0FBTyxFQUFLLGFBQWE7SUFDekIsU0FBUyxFQUFHLGFBQWE7SUFDekIsVUFBVSxFQUFFLGFBQWE7SUFDekIsUUFBUSxFQUFJLGFBQWE7SUFDekIsV0FBVyxFQUFDLGFBQWE7SUFDekIsUUFBUSxFQUFJLGFBQWE7SUFDekIsSUFBSSxFQUFRLGFBQWE7SUFFekIsT0FBTyxFQUFLLHdCQUF3QjtJQUNwQyxLQUFLLEVBQU8sd0JBQXdCO0lBQ3BDLE9BQU8sRUFBSyx3QkFBd0I7SUFDcEMsUUFBUSxFQUFJLHdCQUF3QjtJQUNwQyxNQUFNLEVBQU0sd0JBQXdCO0lBQ3BDLFNBQVMsRUFBRyx3QkFBd0I7SUFDcEMsTUFBTSxFQUFNLHdCQUF3QjtJQUNwQyxPQUFPLEVBQUssd0JBQXdCO0NBQ3ZDLENBQUM7QUFlRixNQUFNLE9BQU8sR0FBRztJQXFDWixZQUFZLE1BQWE7UUFMZixnQkFBVyxHQUFnQixTQUFTLENBQUM7UUFDckMsaUJBQVksR0FBSSxFQUFF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

/***/ }),

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

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/base64-js/index.js":
/*!*************************************************!*\
  !*** (webpack)/node_modules/base64-js/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/buffer/index.js":
/*!**********************************************!*\
  !*** (webpack)/node_modules/buffer/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buildin/global.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/ieee754/index.js":
/*!***********************************************!*\
  !*** (webpack)/node_modules/ieee754/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/isarray/index.js":
/*!***********************************************!*\
  !*** (webpack)/node_modules/isarray/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


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

/***/ "./bin/esm/Config.js":
/*!***************************!*\
  !*** ./bin/esm/Config.js ***!
  \***************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hsutil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hsutil */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/index.js");


const log = new hsutil__WEBPACK_IMPORTED_MODULE_1__["Log"]('Config');
class Config {
    async oninit(node) {
        const context = node.attrs.context;
        if (!node.state.cfg) {
            const s = (typeof node.attrs.source === 'string') ?
                await mithril__WEBPACK_IMPORTED_MODULE_0___default.a.request({ method: "GET", url: node.attrs.source })
                : node.attrs.source;
            node.state.cfg = translate(s, s.root, context);
        }
    }
    view(node) {
        const cfg = node.state.cfg;
        return (cfg && cfg.compClass) ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(cfg.compClass, Object.assign(Object.assign({}, cfg.attrs), node.attrs)) : mithril__WEBPACK_IMPORTED_MODULE_0___default()('div', 'waiting');
    }
}
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
            log.debug(() => `resolved class '${opt}' to ${log.inspect(cl, { depth: 1 })}`);
            const r = {
                compClass: cl,
                attrs: content
            };
            (!Array.isArray(subcfg) && options.length === 1) ?
                result = r :
                result[opt] = r;
        }
        else {
            if (isNaN(parseInt(opt))) {
                log.debug(() => `resolved direct '${opt}' to ${log.inspect(content)}`);
            }
            result[opt] = content;
        }
    });
    return result;
}
function resolve(sym, context) {
    log.debug(() => `resolving ${sym} in context '${log.inspect(context)}'`);
    let cl;
    context.some((c) => cl = c[sym]);
    log.debug(() => `resolving ${sym} => ${log.inspect(cl)}`);
    return cl;
}
function isSynonym(config, key) { return typeof key === 'string' && config[key]; }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RkMsT0FBTyxDQUFDLE1BQU0sU0FBUyxDQUFDO0FBRXhCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTyxRQUFRLENBQUM7QUFBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUs5RCxNQUFNLE9BQU8sTUFBTTtJQUNmLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBVTtRQUNuQixNQUFNLE9BQU8sR0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDakIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFBLENBQUM7Z0JBQzlDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLENBQUM7Z0JBQzNELENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDbEQ7SUFDTCxDQUFDO0lBQ0QsSUFBSSxDQUFDLElBQVU7UUFDWCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENB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

/***/ }),

/***/ "./bin/esm/index.js":
/*!**************************!*\
  !*** ./bin/esm/index.js ***!
  \**************************/
/*! exports provided: Layout, FILL, px, pc, LayoutToken, Layouter, Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_PillaredLayouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/PillaredLayouter */ "./bin/esm/view/PillaredLayouter.js");
/* harmony import */ var _view_TileLayouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/TileLayouter */ "./bin/esm/view/TileLayouter.js");
/* harmony import */ var _view_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/Layout */ "./bin/esm/view/Layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _view_Layout__WEBPACK_IMPORTED_MODULE_2__["Layout"]; });

/* harmony import */ var _view_Tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/Tokens */ "./bin/esm/view/Tokens.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FILL", function() { return _view_Tokens__WEBPACK_IMPORTED_MODULE_3__["FILL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "px", function() { return _view_Tokens__WEBPACK_IMPORTED_MODULE_3__["px"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pc", function() { return _view_Tokens__WEBPACK_IMPORTED_MODULE_3__["pc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutToken", function() { return _view_Tokens__WEBPACK_IMPORTED_MODULE_3__["LayoutToken"]; });

/* harmony import */ var _view_Layouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/Layouter */ "./bin/esm/view/Layouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layouter", function() { return _view_Layouter__WEBPACK_IMPORTED_MODULE_4__["Layouter"]; });

/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Config */ "./bin/esm/Config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return _Config__WEBPACK_IMPORTED_MODULE_5__["Config"]; });







//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsT0FBTyx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLHFCQUFxQixDQUFDO0FBRzdCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBWSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUNaLFdBQVcsRUFBRSxNQUFPLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQVUsaUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFZLFVBQVUsQ0FBQyJ9

/***/ }),

/***/ "./bin/esm/view/Layout.js":
/*!********************************!*\
  !*** ./bin/esm/view/Layout.js ***!
  \********************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layouter */ "./bin/esm/view/Layouter.js");
/* harmony import */ var hsutil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hsutil */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/index.js");



const log = new hsutil__WEBPACK_IMPORTED_MODULE_2__["Log"]('Layout');
class Layout {
    getComponents(node) {
        return !Array.isArray(node.attrs.content) ? node.attrs.content :
            node.attrs.content.map((c) => {
                if (c.compClass) {
                    c.attrs.route = node.attrs.route;
                    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(c.compClass, c.attrs);
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
            return [mithril__WEBPACK_IMPORTED_MODULE_0___default()('.hs-leaf', mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(components))];
        }
        else if (components instanceof Array) {
            return components.map((comp) => (comp instanceof Layout) ? comp : mithril__WEBPACK_IMPORTED_MODULE_0___default()(Layout, { content: comp }));
        }
        return [components];
    }
    view(node) {
        const content = this.normalizeContent(this.getComponents(node));
        let css = _Layouter__WEBPACK_IMPORTED_MODULE_1__["Layouter"].createLayout(node.attrs, content);
        const attrs = {
            style: node.style,
            route: node.attrs.route,
            onclick: node.attrs.onclick,
            onmouseenter: node.attrs.onmouseenter,
            onmousemove: node.attrs.onmousemove,
            onmouseleave: node.attrs.onmouseleave,
        };
        node.attrs.route = undefined;
        if (node.attrs.href) {
            log.debug(() => `href ${node.attrs.href}`);
            attrs.href = node.attrs.href;
            attrs.target = attrs.target || '_blank';
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`a.hs-layout ${css} ${this.getCSS(node)}`, attrs, content.map((c) => c));
        }
        else {
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.hs-layout ${css} ${this.getCSS(node)}`, attrs, content.map((c) => c));
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZpZXcvTGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDQSxPQUFPLENBQUMsTUFBTSxTQUFTLENBQUM7QUFFeEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU8sUUFBUSxDQUFDO0FBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFrQzdELE1BQU0sT0FBTyxNQUFNO0lBb0JMLGFBQWEsQ0FBQyxJQUFVO1FBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBSyxFQUFFLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTtvQkFDYixDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztvQkFDakMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2xDO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxDQUFDO2lCQUNaO1lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBUVMsTUFBTSxDQUFDLElBQVU7UUFDdkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQVFPLGdCQUFnQixDQUFDLFVBQWdCO1FBQ3JDLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9DO2FBQU0sSUFBSSxVQUFVLFlBQVksS0FBSyxFQUFFO1lBRWhDLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVUsRUFBUSxFQUFFLENBQ3ZDLENBQUMsSUFBSSxZQUFZLE1BQU0sQ0FBQyxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FDN0QsQ0FBQztTQUVUO1FBRUQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFxQkQsSUFBSSxDQUFDLElBQVU7UUFDWCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyRCxNQUFNLEtBQUssR0FBZ0I7WUFDdkIsS0FBSyxFQUFRLElBQUssQ0FBQyxLQUFLO1lBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztZQUMzQixZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO1lBQ3JDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVc7WUFDbkMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTtTQUN4QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDakIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFFLEVBQUUsQ0FBQSxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN6QyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQzdCLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUM7WUFJeEMsT0FBTyxDQUFDLENBQUMsZUFBZSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pGO2FBQU07WUFDSCxPQUFPLENBQUMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEY7SUFDTCxDQUFDO0NBQ0oifQ==

/***/ }),

/***/ "./bin/esm/view/Layouter.js":
/*!**********************************!*\
  !*** ./bin/esm/view/Layouter.js ***!
  \**********************************/
/*! exports provided: Layouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layouter", function() { return Layouter; });
/* harmony import */ var _Tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tokens */ "./bin/esm/view/Tokens.js");

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
                    return Object(_Tokens__WEBPACK_IMPORTED_MODULE_0__["px"])(parseInt(param));
                }
                if (param.endsWith('%')) {
                    return Object(_Tokens__WEBPACK_IMPORTED_MODULE_0__["pc"])(parseInt(param));
                }
                if (param.toLowerCase() === 'fill') {
                    return _Tokens__WEBPACK_IMPORTED_MODULE_0__["FILL"];
                }
            }
            else {
                return param;
            }
        });
    }
    static register(keyword, layouter) {
        Layouter.layoutStyles[keyword] = layouter;
    }
    static createLayout(attrs, components) {
        let css = '';
        Object.keys(Layouter.layoutStyles).some(key => {
            if (attrs[key]) {
                css = new Layouter.layoutStyles[key](Layouter.translate(attrs[key])).getStyles(components);
                return true;
            }
            return false;
        });
        return css;
    }
}
Layouter.layoutStyles = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF5b3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmlldy9MYXlvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQSxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFzQnhDLE1BQU0sT0FBZ0IsUUFBUTtJQXlFMUIsWUFBbUIsUUFBc0I7UUFBdEIsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQVJ6QyxZQUFPLEdBQUcsQ0FBQyxDQUFDO0lBUWdDLENBQUM7SUF6RHJDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBd0I7UUFDN0MsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM3QyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFnQixFQUFFLEVBQUU7WUFDbkMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7Z0JBQzNCLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFBRSxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFBRTtnQkFDekQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUFFLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUFFO2dCQUN4RCxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBRyxNQUFNLEVBQUU7b0JBQUUsT0FBTyxJQUFJLENBQUM7aUJBQUM7YUFDcEQ7aUJBQU07Z0JBQ0gsT0FBTyxLQUFLLENBQUM7YUFDaEI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFXTSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQWMsRUFBRSxRQUF3QjtRQUUzRCxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUM5QyxDQUFDO0lBVU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFTLEVBQUUsVUFBdUI7UUFDekQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNaLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFFM0YsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDOztBQXpETSxxQkFBWSxHQUF1QixFQUFFLENBQUMifQ==

/***/ }),

/***/ "./bin/esm/view/PillaredLayouter.js":
/*!******************************************!*\
  !*** ./bin/esm/view/PillaredLayouter.js ***!
  \******************************************/
/*! exports provided: PillarLayouts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PillarLayouts", function() { return PillarLayouts; });
/* harmony import */ var _Layouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layouter */ "./bin/esm/view/Layouter.js");
/* harmony import */ var _Tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tokens */ "./bin/esm/view/Tokens.js");


const PillarLayouts = [
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
class PillarLayouter extends _Layouter__WEBPACK_IMPORTED_MODULE_0__["Layouter"] {
    constructor(params, areaDesc) {
        super(areaDesc);
        this.areaDesc = areaDesc;
        this.fields = params.fields;
        this.cssClass = params.cssClass;
        let n = areaDesc.length - 1;
        let first = 0;
        let last = 0;
        this.unit = areaDesc.some((area) => (area instanceof _Tokens__WEBPACK_IMPORTED_MODULE_1__["PixelToken"])) ?
            this.unitPixel : this.unitPercent;
        areaDesc.some((area, i) => ((areaDesc[i] instanceof _Tokens__WEBPACK_IMPORTED_MODULE_1__["DefinedToken"]) ? ++first < 0 : true));
        areaDesc.some((area, i) => ((areaDesc[n - i] instanceof _Tokens__WEBPACK_IMPORTED_MODULE_1__["DefinedToken"]) ? ++last < 0 : true));
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
            c.style = `${f[4]}:100%;`;
            Object.keys(styles[i].fields).forEach((st) => { c.style += `${st}: ${styles[i].fields[st]};`; });
        });
        return this.cssClass;
    }
}
class Columns extends PillarLayouter {
    constructor(areaDesc) {
        super(cParams[PillarLayouts[0]], areaDesc);
        this.areaDesc = areaDesc;
    }
}
class Rows extends PillarLayouter {
    constructor(areaDesc) {
        super(cParams[PillarLayouts[1]], areaDesc);
        this.areaDesc = areaDesc;
    }
}
_Layouter__WEBPACK_IMPORTED_MODULE_0__["Layouter"].register(PillarLayouts[0], Columns);
_Layouter__WEBPACK_IMPORTED_MODULE_0__["Layouter"].register(PillarLayouts[1], Rows);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlsbGFyZWRMYXlvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L1BpbGxhcmVkTGF5b3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBVSxZQUFZLENBQUM7QUFDMUMsT0FBTyxFQUNFLFlBQVksRUFDWixVQUFVLEVBQUUsTUFBUSxVQUFVLENBQUM7QUFpQnhDLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRztJQUN6QixTQUFTLEVBQUUsTUFBTTtDQUNwQixDQUFDO0FBS0YsTUFBTSxPQUFPLEdBQUc7SUFDWixPQUFPLEVBQWdCO1FBQ25CLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7S0FDaEU7SUFDRCxJQUFJLEVBQWdCO1FBQ2hCLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7S0FDaEU7Q0FDSixDQUFDO0FBT0YsTUFBZSxjQUFlLFNBQVEsUUFBUTtJQWExQyxZQUFZLE1BQW1CLEVBQVMsUUFBc0I7UUFDMUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRG9CLGFBQVEsR0FBUixRQUFRLENBQWM7UUFFMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUVoQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLElBQUksR0FBSSxDQUFDLENBQUM7UUFFZCxJQUFJLENBQUMs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

/***/ }),

/***/ "./bin/esm/view/TileLayouter.js":
/*!**************************************!*\
  !*** ./bin/esm/view/TileLayouter.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layouter */ "./bin/esm/view/Layouter.js");
/* harmony import */ var _Tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tokens */ "./bin/esm/view/Tokens.js");


class TileLayouter extends _Layouter__WEBPACK_IMPORTED_MODULE_0__["Layouter"] {
    constructor(areaDesc) {
        super(areaDesc);
        this.areaDesc = areaDesc;
        this.unit = areaDesc.some((area) => (area instanceof _Tokens__WEBPACK_IMPORTED_MODULE_1__["PixelToken"])) ?
            this.unitPixel : this.unitPercent;
    }
    unitPercent(num) {
        const desc = this.areaDesc;
        const fill = this.areaDesc.some(a => (a instanceof _Tokens__WEBPACK_IMPORTED_MODULE_1__["FillToken"]));
        const root = Math.sqrt(num);
        const rows = Math.round(root);
        let cols = Math.floor(root);
        if (root > cols) {
            cols++;
        }
        let width = (desc[0] instanceof _Tokens__WEBPACK_IMPORTED_MODULE_1__["DefinedToken"]) ? desc[0].getSize() : undefined;
        let height = (desc[1] instanceof _Tokens__WEBPACK_IMPORTED_MODULE_1__["DefinedToken"]) ? desc[1].getSize() : width;
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
        let width = (desc[0] instanceof _Tokens__WEBPACK_IMPORTED_MODULE_1__["DefinedToken"]) ? desc[0].getSize() : undefined;
        let height = (desc[1] instanceof _Tokens__WEBPACK_IMPORTED_MODULE_1__["DefinedToken"]) ? desc[1].getSize() : width;
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
_Layouter__WEBPACK_IMPORTED_MODULE_0__["Layouter"].register('tiles', TileLayouter);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlsZUxheW91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZpZXcvVGlsZUxheW91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQVUsWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFDRSxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFBRSxNQUFRLFVBQVUsQ0FBQztBQVF4QyxNQUFNLFlBQWEsU0FBUSxRQUFRO0lBUS9CLFlBQW1CLFFBQXNCO1FBQ3JDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQURELGFBQVEsR0FBUixRQUFRLENBQWM7UUFJckMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLFlBQVksVUFBVSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQzFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUMsQ0FBQztJQUVPLFdBQVcsQ0FBQyxHQUFVO1FBQzFCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDM0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksSUFBSSxHQUFHLElBQUksRUFBRTtZQUFFLElBQUksRUFBRSxDQUFDO1NBQUU7UUFDNUIsSUFBSSxLQUFLLEdBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksWUFBWSxDQUFDLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzlFLElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLFlBQVksQ0FBQyxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUUxRSxLQUFLLEdBQUksS0FBSyxJQUFLLEdBQUcsR0FBQyxJQUFJLENBQUM7UUFDNUIsTUFBTSxHQUFHLE1BQU0sSUFBSSxHQUFHLEdBQUMsSUFBSSxDQUFDO1FBQzVCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksR0FBRyxHQUFJLENBQUMsQ0FBQztRQUViLElBQUksTUFBTSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFDLEdBQUcsQ0FBQztZQUNyQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7WUFBSSxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUMsR0FBRyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQUU7WUFDN0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRTtnQkFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUFDLENBQUMs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

/***/ }),

/***/ "./bin/esm/view/Tokens.js":
/*!********************************!*\
  !*** ./bin/esm/view/Tokens.js ***!
  \********************************/
/*! exports provided: LayoutToken, DefinedToken, FillToken, PixelToken, PercentToken, px, pc, FILL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutToken", function() { return LayoutToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinedToken", function() { return DefinedToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillToken", function() { return FillToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixelToken", function() { return PixelToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentToken", function() { return PercentToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "px", function() { return px; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pc", function() { return pc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILL", function() { return FILL; });
class LayoutToken {
    constructor(size) {
        this.size = size;
    }
    getSize() { return this.size; }
}
class DefinedToken extends LayoutToken {
    constructor(size) { super(size); }
}
class FillToken extends LayoutToken {
    constructor() { super(-1); }
}
class PixelToken extends DefinedToken {
    constructor(size) { super(size); }
}
class PercentToken extends DefinedToken {
    constructor(size) { super(size); }
}
function px(px) { return new PixelToken(px); }
function pc(pc) { return new PercentToken(pc); }
const FILL = new FillToken();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZpZXcvVG9rZW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBLE1BQU0sT0FBZ0IsV0FBVztJQUM3QixZQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFHLENBQUM7SUFDN0IsT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Q0FDekM7QUFLRCxNQUFNLE9BQWdCLFlBQWEsU0FBUSxXQUFXO0lBQ2xELFlBQVksSUFBWSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDN0M7QUFLRCxNQUFNLE9BQU8sU0FBVSxTQUFRLFdBQVc7SUFDdEMsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUMvQjtBQUtELE1BQU0sT0FBTyxVQUFXLFNBQVEsWUFBWTtJQUN4QyxZQUFZLElBQVcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzVDO0FBS0QsTUFBTSxPQUFPLFlBQWEsU0FBUSxZQUFZO0lBQzFDLFlBQVksSUFBVyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDNUM7QUFNRCxNQUFNLFVBQVUsRUFBRSxDQUFDLEVBQVMsSUFBTSxPQUFPLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQU05RCxNQUFNLFVBQVUsRUFBRSxDQUFDLEVBQVMsSUFBTSxPQUFPLElBQUksWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUtoRSxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQyJ9

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["crypto"]; }());

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oc0xheW91dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oc0xheW91dC8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9iaW4vZXNtL0FycmF5LmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL2Jpbi9lc20vQXV0aC5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9iaW4vZXNtL0F1dGhCYXNpYy5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9iaW4vZXNtL0F1dGhEaWdlc3QuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvYmluL2VzbS9DaGVja3N1bS5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9iaW4vZXNtL0RhdGUuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvYmluL2VzbS9QYWNpbmcuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvYmluL2VzbS9SZXF1ZXN0LmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL2Jpbi9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvYmluL2VzbS9sb2cuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9taXRocmlsL2FwaS9tb3VudC1yZWRyYXcuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9taXRocmlsL2FwaS9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9taXRocmlsL2h5cGVyc2NyaXB0LmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvbWl0aHJpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL21pdGhyaWwvbW91bnQtcmVkcmF3LmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvbWl0aHJpbC9wYXRobmFtZS9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9taXRocmlsL3BhdGhuYW1lL2J1aWxkLmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvbWl0aHJpbC9wYXRobmFtZS9jb21waWxlVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9taXRocmlsL3BhdGhuYW1lL3BhcnNlLmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvbWl0aHJpbC9wcm9taXNlL3BvbHlmaWxsLmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvbWl0aHJpbC9wcm9taXNlL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9taXRocmlsL3F1ZXJ5c3RyaW5nL2J1aWxkLmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvbWl0aHJpbC9xdWVyeXN0cmluZy9wYXJzZS5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVuZGVyLmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvbWl0aHJpbC9yZW5kZXIvZnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9taXRocmlsL3JlbmRlci9oeXBlcnNjcmlwdC5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVuZGVyL2h5cGVyc2NyaXB0Vm5vZGUuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9taXRocmlsL3JlbmRlci9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9taXRocmlsL3JlbmRlci90cnVzdC5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVuZGVyL3Zub2RlLmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvbWl0aHJpbC9yZXF1ZXN0LmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvbWl0aHJpbC9yZXF1ZXN0L3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9taXRocmlsL3JvdXRlLmpzIiwid2VicGFjazovL2hzTGF5b3V0Lyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8od2VicGFjaykvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8od2VicGFjaykvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8od2VicGFjaykvbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvKHdlYnBhY2spL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovL2hzTGF5b3V0Lyh3ZWJwYWNrKS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2hzTGF5b3V0Lyh3ZWJwYWNrKS9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8od2VicGFjaykvbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvLi9iaW4vZXNtL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC8uL2Jpbi9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvLi9iaW4vZXNtL3ZpZXcvTGF5b3V0LmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly4vYmluL2VzbS92aWV3L0xheW91dGVyLmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly4vYmluL2VzbS92aWV3L1BpbGxhcmVkTGF5b3V0ZXIuanMiLCJ3ZWJwYWNrOi8vaHNMYXlvdXQvLi9iaW4vZXNtL3ZpZXcvVGlsZUxheW91dGVyLmpzIiwid2VicGFjazovL2hzTGF5b3V0Ly4vYmluL2VzbS92aWV3L1Rva2Vucy5qcyIsIndlYnBhY2s6Ly9oc0xheW91dC9leHRlcm5hbCBcImNyeXB0b1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtR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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixZQUFZO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzV2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsV0FBVzs7QUFFbkI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0EsUUFBUSxVQUFVOztBQUVsQjtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRkEsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQixFQUFFO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDekxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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LHVCQUF1QixhQUFhO0FBQ3BDO0FBQ087QUFDUCx1QkFBdUIsYUFBYTtBQUNwQztBQUNPLGlCQUFpQiwyQkFBMkI7QUFDNUMsaUJBQWlCLDZCQUE2QjtBQUM5QztBQUNQLDJDQUEyQywra0M7Ozs7Ozs7Ozs7O0FDckIzQyxhQUFhLGlDQUFpQyxFQUFFLEkiLCJmaWxlIjoiaHNMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jpbi9lc20vaW5kZXguanNcIik7XG4iLCJleHBvcnQgZnVuY3Rpb24gdW5pcXVlZnkoYXJyYXksIGtleSkge1xuICAgIGNvbnN0IHVuaXF1ZSA9IHt9O1xuICAgIHJldHVybiBrZXkgPyBhcnJheS5maWx0ZXIodCA9PiB1bmlxdWVbdFsnJyArIGtleV1dID8gZmFsc2UgOiAodW5pcXVlW3RbJycgKyBrZXldXSA9IHRydWUpKVxuICAgICAgICA6IGFycmF5LmZpbHRlcih0ID0+IHVuaXF1ZVsnJyArIHRdID8gZmFsc2UgOiAodW5pcXVlWycnICsgdF0gPSB0cnVlKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWEp5WVhrdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12UVhKeVlYa3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCWjBOQkxFMUJRVTBzVlVGQlZTeFJRVUZSTEVOQlFVa3NTMEZCVXl4RlFVRkZMRWRCUVd0Q08wbEJRM0pFTEUxQlFVMHNUVUZCVFN4SFFVRTBRaXhGUVVGRkxFTkJRVU03U1VGRE0wTXNUMEZCVHl4SFFVRkhMRU5CUVVFc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU40UlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF5eERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZETjBVc1EwRkJReUo5IiwiZXhwb3J0IGNsYXNzIEF1dGgge1xuICAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWFYwYUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlCZFhSb0xuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVWRCTEUxQlFVMHNUMEZCWjBJc1NVRkJTVHRKUVVsMFFpeFpRVUZaTEZGQlFXVXNSVUZCUlN4UlFVRmxPMUZCUTNoRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRPMGxCUXpkQ0xFTkJRVU03UTBGSFNpSjkiLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuL2xvZyc7XG5jb25zdCBsb2cgPSBuZXcgTG9nKCdSZXF1ZXN0QmFzaWMnKTtcbmltcG9ydCB7IEF1dGggfSBmcm9tICcuL0F1dGgnO1xuZXhwb3J0IGNsYXNzIEF1dGhCYXNpYyBleHRlbmRzIEF1dGgge1xuICAgIHRlc3RBdXRoKG9wdGlvbnMsIGRhdGEsIHJlc3BvbnNlKSB7XG4gICAgICAgIGxvZy5kZWJ1ZygoKSA9PiBgcmVjZWl2ZWQgd3d3LWF1dGhlbnRpY2F0ZSByZXF1ZXN0IGZvciAke29wdGlvbnMuaG9zdH1gKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIF9idG9hKGAke3RoaXMudXNlcm5hbWV9OiR7dGhpcy5wYXNzd29yZH1gKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxufVxuZnVuY3Rpb24gX2J0b2Eoc3RyKSB7XG4gICAgY29uc3QgYnVmZmVyID0gc3RyIGluc3RhbmNlb2YgQnVmZmVyID8gc3RyIDogQnVmZmVyLmZyb20oc3RyLnRvU3RyaW5nKCksICdiaW5hcnknKTtcbiAgICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCdiYXNlNjQnKTtcbn1cbmZ1bmN0aW9uIF9hdG9iKHN0cikge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbShzdHIsICdiYXNlNjQnKS50b1N0cmluZygnYmluYXJ5Jyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWFYwYUVKaGMybGpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwwRjFkR2hDWVhOcFl5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRkxFMUJRVzFDTEU5QlFVOHNRMEZCUXp0QlFVRkhMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMEZCUjJoR0xFOUJRVThzUlVGQlJTeEpRVUZKTEVWQlFVVXNUVUZCYTBJc1VVRkJVU3hEUVVGRE8wRkJSekZETEUxQlFVMHNUMEZCVHl4VFFVRlZMRk5CUVZFc1NVRkJTVHRKUVVNdlFpeFJRVUZSTEVOQlFVTXNUMEZCWlN4RlFVRkZMRWxCUVZjc1JVRkJSU3hSUVVGM1FqdFJRVU16UkN4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVVVzUlVGQlJTeERRVUZCTEhsRFFVRjVReXhQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjJSU3hQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEdGQlFXRXNSMEZCUnl4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU4wUml4UFFVRlBMRTlCUVU4c1EwRkJRenRKUVVOdVFpeERRVUZETzBOQlEwbzdRVUZGUkN4VFFVRlRMRXRCUVVzc1EwRkJReXhIUVVGcFFqdEpRVU0xUWl4TlFVRk5MRTFCUVUwc1IwRkJSeXhIUVVGSExGbEJRVmtzVFVGQlRTeERRVUZCTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzBsQlEyeEdMRTlCUVU4c1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0QlFVTnlReXhEUVVGRE8wRkJSVVFzVTBGQlV5eExRVUZMTEVOQlFVTXNSMEZCVlR0SlFVTnlRaXhQUVVGUExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0QlFVTjZSQ3hEUVVGREluMD0iLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuL2xvZyc7XG5jb25zdCBsb2cgPSBuZXcgTG9nKCdSZXF1ZXN0RGlnZXN0Jyk7XG5pbXBvcnQgeyBjcmVhdGVIYXNoIH0gZnJvbSAnY3J5cHRvJztcbmltcG9ydCB7IEF1dGggfSBmcm9tICcuL0F1dGgnO1xuZXhwb3J0IGNsYXNzIEF1dGhEaWdlc3QgZXh0ZW5kcyBBdXRoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYyA9IDA7XG4gICAgfVxuICAgIHVwZGF0ZU5DKCkge1xuICAgICAgICBsZXQgbWF4ID0gOTk5OTk5OTk7XG4gICAgICAgIGxldCBwYWRkaW5nID0gbmV3IEFycmF5KDgpLmpvaW4oJzAnKSArICcnO1xuICAgICAgICB0aGlzLm5jID0gKHRoaXMubmMgPiBtYXggPyAxIDogdGhpcy5uYyArIDEpO1xuICAgICAgICBsZXQgbmMgPSB0aGlzLm5jICsgJyc7XG4gICAgICAgIHJldHVybiBwYWRkaW5nLnN1YnN0cigwLCA4IC0gbmMubGVuZ3RoKSArIG5jO1xuICAgIH1cbiAgICBnZW5lcmF0ZUNOT05DRShxb3ApIHtcbiAgICAgICAgbGV0IGNub25jZTtcbiAgICAgICAgbGV0IG5jO1xuICAgICAgICBpZiAodHlwZW9mIHFvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGxldCBjbm9uY2VIYXNoID0gY3JlYXRlSGFzaCgnbWQ1Jyk7XG4gICAgICAgICAgICBjbm9uY2VIYXNoLnVwZGF0ZShNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KSk7XG4gICAgICAgICAgICBjbm9uY2UgPSBjbm9uY2VIYXNoLmRpZ2VzdCgnaGV4Jykuc3Vic3RyKDAsIDE2KTtcbiAgICAgICAgICAgIG5jID0gdGhpcy51cGRhdGVOQygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNub25jZTogY25vbmNlLCBuYzogbmMgfTtcbiAgICB9XG4gICAgdGVzdEF1dGgob3B0aW9ucywgZGF0YSwgcmVzcG9uc2UpIHtcbiAgICAgICAgbG9nLmRlYnVnKCgpID0+IGByZWNlaXZlZCB3d3ctYXV0aGVudGljYXRlIHJlcXVlc3QgZm9yICR7b3B0aW9ucy5ob3N0fWApO1xuICAgICAgICBsZXQgY2hhbGxlbmdlID0gcGFyc2VEaWdlc3RSZXNwb25zZShyZXNwb25zZS5oZWFkZXJzWyd3d3ctYXV0aGVudGljYXRlJ10pO1xuICAgICAgICBsZXQgaGExID0gY3JlYXRlSGFzaCgnbWQ1Jyk7XG4gICAgICAgIGxldCBfc3RyID0gYCR7dGhpcy51c2VybmFtZX06JHtjaGFsbGVuZ2UucmVhbG19OiR7dGhpcy5wYXNzd29yZH1gO1xuICAgICAgICBoYTEudXBkYXRlKF9zdHIpO1xuICAgICAgICBsZXQgaGEyID0gY3JlYXRlSGFzaCgnbWQ1Jyk7XG4gICAgICAgIF9zdHIgPSBgJHtvcHRpb25zLm1ldGhvZH06JHtvcHRpb25zLnBhdGh9YDtcbiAgICAgICAgaGEyLnVwZGF0ZShfc3RyKTtcbiAgICAgICAgbGV0IHsgbmMsIGNub25jZSB9ID0gdGhpcy5nZW5lcmF0ZUNOT05DRShjaGFsbGVuZ2UucW9wKTtcbiAgICAgICAgbGV0IGhhc2ggPSBjcmVhdGVIYXNoKCdtZDUnKTtcbiAgICAgICAgX3N0ciA9IGAke2hhMS5kaWdlc3QoJ2hleCcpfToke2NoYWxsZW5nZS5ub25jZX06JHtuY306JHtjbm9uY2V9OiR7Y2hhbGxlbmdlLnFvcH06JHtoYTIuZGlnZXN0KCdoZXgnKX1gO1xuICAgICAgICBoYXNoLnVwZGF0ZShfc3RyKTtcbiAgICAgICAgbGV0IGF1dGhQYXJhbXMgPSB7XG4gICAgICAgICAgICByZWFsbTogY2hhbGxlbmdlLnJlYWxtLFxuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgICAgICB1cmk6IG9wdGlvbnMucGF0aCxcbiAgICAgICAgICAgIHFvcDogY2hhbGxlbmdlLnFvcCxcbiAgICAgICAgICAgIG5vbmNlOiBjaGFsbGVuZ2Uubm9uY2UsXG4gICAgICAgICAgICBhbGdvcml0aG06IFwiTUQ1XCIsXG4gICAgICAgICAgICByZXNwb25zZTogaGFzaC5kaWdlc3QoJ2hleCcpXG4gICAgICAgIH07XG4gICAgICAgIGF1dGhQYXJhbXMgPSBvbWl0TnVsbChhdXRoUGFyYW1zKTtcbiAgICAgICAgaWYgKGNub25jZSkge1xuICAgICAgICAgICAgYXV0aFBhcmFtcy5uYyA9IG5jO1xuICAgICAgICAgICAgYXV0aFBhcmFtcy5jbm9uY2UgPSBjbm9uY2U7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBjb21waWxlUGFyYW1zKGF1dGhQYXJhbXMpO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG59XG5mdW5jdGlvbiBvbWl0TnVsbChkYXRhKSB7XG4gICAgbGV0IG5ld09iamVjdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgaWYgKGRhdGFba10gIT09IG51bGwgJiYgZGF0YVtrXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuZXdPYmplY3Rba10gPSBkYXRhW2tdO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld09iamVjdDtcbn1cbmZ1bmN0aW9uIGNvbXBpbGVQYXJhbXMocGFyYW1zKSB7XG4gICAgbGV0IHBhcnRzID0gW107XG4gICAgZm9yIChsZXQgaSBpbiBwYXJhbXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbaV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxldCBwYXJhbSA9IGkgKyAnPScgKyAocHV0RG91YmxlUXVvdGVzKGkpID8gYFwiJHtwYXJhbXNbaV19XCJgIDogcGFyYW1zW2ldKTtcbiAgICAgICAgICAgIHBhcnRzLnB1c2gocGFyYW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnRGlnZXN0ICcgKyBwYXJ0cy5qb2luKCcsJyk7XG59XG5mdW5jdGlvbiBwdXREb3VibGVRdW90ZXMoZW50cnkpIHtcbiAgICByZXR1cm4gWydxb3AnLCAnbmMnXS5pbmRleE9mKGVudHJ5KSA8IDA7XG59XG5mdW5jdGlvbiBwYXJzZURpZ2VzdFJlc3BvbnNlKGRpZ2VzdEhlYWRlcikge1xuICAgIGRpZ2VzdEhlYWRlciA9IGRpZ2VzdEhlYWRlci5zcGxpdCgnRGlnZXN0ICcpWzFdO1xuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgIGRpZ2VzdEhlYWRlci5yZXBsYWNlKC8oKFteXCJdfFwiW15cIl0qXCIpKj8pKCwpL2csICguLi5yZXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSByZXN0WzFdO1xuICAgICAgICBjb25zdCBrdiA9IHBhcnQuc3BsaXQoJz0nKS5tYXAoKHYpID0+IHYudHJpbSgpKTtcbiAgICAgICAgcGFyYW1zW2t2WzBdXSA9IGt2WzFdLnJlcGxhY2UoL1xcXCIvZywgJycpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcmFtcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFYVjBhRVJwWjJWemRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5QmRYUm9SR2xuWlhOMExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTEU5QlFVOHNSVUZCUlN4SFFVRkhMRVZCUVVVc1RVRkJiVUlzVDBGQlR5eERRVUZETzBGQlFVY3NUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdRVUZEYWtZc1QwRkJUeXhGUVVGRkxGVkJRVlVzUlVGQlJTeE5RVUZaTEZGQlFWRXNRMEZCUXp0QlFVY3hReXhQUVVGUExFVkJRVVVzU1VGQlNTeEZRVUZGTEUxQlFXdENMRkZCUVZFc1EwRkJRenRCUVUweFF5eE5RVUZOTEU5QlFVOHNWVUZCVnl4VFFVRlJMRWxCUVVrN1NVRkJjRU03TzFGQlEwa3NUMEZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVhsRldDeERRVUZETzBsQmNFVkhMRkZCUVZFN1VVRkRTaXhKUVVGSkxFZEJRVWNzUjBGQlJ5eFJRVUZSTEVOQlFVTTdVVUZEYmtJc1NVRkJTU3hQUVVGUExFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTXhReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTFReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOMFFpeFBRVUZQTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wbEJRMnBFTEVOQlFVTTdTVUZOUkN4alFVRmpMRU5CUVVNc1IwRkJWVHRSUVVOeVFpeEpRVUZKTEUxQlFWVXNRMEZCUXp0UlFVTm1MRWxCUVVrc1JVRkJVeXhEUVVGRE8xRkJSV1FzU1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRVZCUVVVN1dVRkRla0lzU1VGQlNTeFZRVUZWTEVkQlFVY3NWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRMjVETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemxETEUxQlFVMHNSMEZCUnl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGFFUXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFRRVU40UWp0UlFVTkVMRTlCUVU4c1JVRkJReXhOUVVGTkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVNc1EwRkJRenRKUVVOd1F5eERRVUZETzBsQlVVUXNVVUZCVVN4RFFVRkRMRTlCUVdVc1JVRkJSU3hKUVVGWExFVkJRVVVzVVVGQmQwSTdVVUZETTBRc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZGTEVWQlFVVXNRMEZCUVN4NVEwRkJlVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkZka1VzU1VGQlNTeFRRVUZUTEVkQlFVOHNiVUpCUVcxQ0xFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZET1VVc1NVRkJTU3hIUVVGSExFZEJRVWNzVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpWQ0xFbEJRVWtzU1VGQlNTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1NVRkJTU3hUUVVGVExFTkJRVU1zUzBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVOc1JTeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMnBDTEVsQlFVa3NSMEZCUnl4SFFVRkhMRlZCUVZVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU0xUWl4SlFVRkpMRWRCUVVjc1IwRkJSeXhQUVVGUExFTkJRVU1zVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVNelF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJSV3BDTEVsQlFVa3NSVUZCUXl4RlFVRkZMRVZCUVVVc1RVRkJUU3hGUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGRFUXNTVUZCU1N4SlFVRkpMRWRCUVVjc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlF6ZENMRWxCUVVrc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1UwRkJVeXhEUVVGRExFdEJRVXNzU1VGQlNTeEZRVUZGTEVsQlFVa3NUVUZCVFN4SlFVRkpMRk5CUVZNc1EwRkJReXhIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRM1pITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGSGJFSXNTVUZCU1N4VlFVRlZMRWRCUVU4N1dVRkRha0lzUzBGQlN5eEZRVUZGTEZOQlFWTXNRMEZCUXl4TFFVRkxPMWxCUTNSQ0xGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVR0WlFVTjJRaXhIUVVGSExFVkJRVVVzVDBGQlR5eERRVUZETEVsQlFVazdXVUZEYWtJc1IwRkJSeXhGUVVGRkxGTkJRVk1zUTBGQlF5eEhRVUZITzFsQlEyeENMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU1zUzBGQlN6dFpRVU4wUWl4VFFVRlRMRVZCUVVVc1MwRkJTenRaUVVOb1FpeFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU03VTBGREwwSXNRMEZCUXp0UlFVVkdMRlZCUVZVc1IwRkJSeXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdVVUZGYkVNc1NVRkJTU3hOUVVGTkxFVkJRVVU3V1VGRFVpeFZRVUZWTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVOdVFpeFZRVUZWTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRUUVVNNVFqdFJRVVZFTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hIUVVGSExHRkJRV0VzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTXhSQ3hQUVVGUExFOUJRVThzUTBGQlF6dEpRVU51UWl4RFFVRkRPME5CUTBvN1FVRkZSQ3hUUVVGVExGRkJRVkVzUTBGQlF5eEpRVUZSTzBsQlEzUkNMRWxCUVVrc1UwRkJVeXhIUVVGSExFVkJRVVVzUTBGQlF6dEpRVU51UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVZFc1JVRkJSU3hGUVVGRk8xRkJRMjVETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhGUVVGRk8xbEJRVVVzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVUZGTzBsQlF6bEZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMGdzVDBGQlR5eFRRVUZUTEVOQlFVTTdRVUZEY2tJc1EwRkJRenRCUVUxRUxGTkJRVk1zWVVGQllTeERRVUZETEUxQlFWVTdTVUZETjBJc1NVRkJTU3hMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETzBsQlEyWXNTMEZCU3l4SlFVRkpMRU5CUVVNc1NVRkJTU3hOUVVGTkxFVkJRVVU3VVVGRGJFSXNTVUZCU1N4UFFVRlBMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eFZRVUZWTEVWQlFVVTdXVUZEYWtNc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE1VVXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFRRVU55UWp0TFFVTktPMGxCUTBRc1QwRkJUeXhUUVVGVExFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOMlF5eERRVUZETzBGQlRVUXNVMEZCVXl4bFFVRmxMRU5CUVVNc1MwRkJXVHRKUVVOcVF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRNVU1zUTBGQlF6dEJRVVZFTEZOQlFWTXNiVUpCUVcxQ0xFTkJRVU1zV1VGQmJVSTdTVUZETlVNc1dVRkJXU3hIUVVGSExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFFUXNUVUZCVFN4TlFVRk5MRWRCUVVjc1JVRkJSU3hEUVVGRE8wbEJRMnhDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc2QwSkJRWGRDTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVdFc1JVRkJSU3hGUVVGRk8xRkJRMmhGTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU55UWl4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVkVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRGRrUXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTNwRExFOUJRVThzUlVGQlJTeERRVUZETzBsQlEyUXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRTQ3hQUVVGUExFMUJRVTBzUTBGQlF6dEJRVU5zUWl4RFFVRkRJbjA9IiwiZXhwb3J0IGZ1bmN0aW9uIHNob3J0Q2hlY2tTdW0ocykge1xuICAgIGxldCBjaGsgPSAweDEyMzQ1Njc4O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjaGsgKz0gKHMuY2hhckNvZGVBdChpKSAqIChpICsgMSkpO1xuICAgIH1cbiAgICByZXR1cm4gKGNoayAmIDB4ZmZmZmZmZmYpLnRvU3RyaW5nKDE2KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyaGxZMnR6ZFcwdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12UTJobFkydHpkVzB1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlVVTXNUVUZCVFN4VlFVRlZMR0ZCUVdFc1EwRkJReXhEUVVGUk8wbEJRMjVETEVsQlFVa3NSMEZCUnl4SFFVRkhMRlZCUVZVc1EwRkJRenRKUVVOeVFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRSUVVNelFpeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UzBGRGRFTTdTVUZEUkN4UFFVRlBMRU5CUVVNc1IwRkJSeXhIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRCUVVNeFF5eERRVUZESW4wPSIsImNvbnN0IG1vbnRoU3RyID0gW1xuICAgIFsnSmFuJywgJ0phbnVhcnknXSwgWydGZWInLCAnRmVicnVhcnknXSwgWydNYXInLCAnTWFyY2gnXSwgWydBcHInLCAnQXByaWwnXSwgWydNYXknLCAnTWF5J10sIFsnSnVuJywgJ0p1bmUnXSxcbiAgICBbJ0p1bCcsICdKdWx5J10sIFsnQXVnJywgJ0F1Z3VzdCddLCBbJ1NlcCcsICdTZXB0ZW1iZXInXSwgWydPY3QnLCAnT2N0b2JlciddLCBbJ05vdicsICdOb3ZlbWJlciddLCBbJ0RlYycsICdEZWNlbWJlciddXG5dO1xuY29uc3QgZGF5U3RyID0gW1xuICAgIFsnU3VuJywgJ1N1bmRheSddLCBbJ01vbicsICdNb25kYXknXSwgWydUdWUnLCAnVHVlc2RheSddLCBbJ1dlZCcsICdXZWRuZXNkYXknXSwgWydUaHUnLCAnVGh1cnNkYXknXSwgWydGcmknLCAnRnJpZGF5J10sIFsnU2F0JywgJ1NhdHVyZGF5J11cbl07XG5mdW5jdGlvbiBmb3JtYXROdW1iZXIobnVtYmVyLCBkaWdpdHMpIHtcbiAgICBsZXQgciA9ICcnICsgbnVtYmVyO1xuICAgIHdoaWxlIChyLmxlbmd0aCA8IGRpZ2l0cykge1xuICAgICAgICByID0gXCIwXCIgKyByO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkYXRlKGZvcm1hdFN0cmluZywgZGF0ZSA9IG5ldyBEYXRlKCkpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBmb3JtYXRTdHJpbmcgIT09ICdzdHJpbmcnIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkgP1xuICAgICAgICAnaW52YWxpZCcgOlxuICAgICAgICBmb3JtYXRTdHJpbmdcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lWVlZWS9nLCAnJyArIGRhdGUuZ2V0RnVsbFllYXIoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lWVkvZywgJycgKyAoZGF0ZS5nZXRGdWxsWWVhcigpICUgMTAwKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTU1NTS9nLCBtb250aFN0cltkYXRlLmdldE1vbnRoKCldWzFdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNTU0vZywgbW9udGhTdHJbZGF0ZS5nZXRNb250aCgpXVswXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTU0vZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNL2csICcnICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVEREREL2csIGRheVN0cltkYXRlLmdldERheSgpXVsxXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lREREL2csIGRheVN0cltkYXRlLmdldERheSgpXVswXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lREQvZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0RGF0ZSgpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lRC9nLCAnJyArIGRhdGUuZ2V0RGF0ZSgpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVoaC9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRIb3VycygpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8laC9nLCAnJyArIGRhdGUuZ2V0SG91cnMoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lbW0vZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWludXRlcygpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lbS9nLCAnJyArIGRhdGUuZ2V0TWludXRlcygpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVzcy9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRTZWNvbmRzKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVqamovZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIDMpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVqai9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lai9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwMCwgMSkpO1xufVxuZXhwb3J0IGNvbnN0IG1zID0ge1xuICAgIGZyb21NaW51dGVzOiAobWluKSA9PiAxMDAwICogNjAgKiBtaW4sXG4gICAgZnJvbUhvdXJzOiAoaCkgPT4gMTAwMCAqIDYwICogNjAgKiBoLFxuICAgIGZyb21EYXlzOiAoZCkgPT4gMTAwMCAqIDYwICogNjAgKiAyNCAqIGQsXG4gICAgZnJvbVdlZWtzOiAodykgPT4gMTAwMCAqIDYwICogNjAgKiAyNCAqIDcgKiB3LFxuICAgIHRvTWludXRlczogKG1zKSA9PiBtcyAvICgxMDAwICogNjApLFxuICAgIHRvSG91cnM6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwICogNjApLFxuICAgIHRvRGF5czogKG1zKSA9PiBtcyAvICgxMDAwICogNjAgKiA2MCAqIDI0KSxcbiAgICB0b1dlZWtzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCAqIDYwICogMjQgKiA3KVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVJHRjBaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OUVZWFJsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFXVkJMRTFCUVUwc1VVRkJVU3hIUVVGSE8wbEJRMklzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVlVGQlZTeERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1RVRkJUU3hEUVVGRE8wbEJRelZITEVOQlFVTXNTMEZCU3l4RlFVRkZMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxGZEJRVmNzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRk5CUVZNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxGVkJRVlVzUTBGQlF6dERRVUZETEVOQlFVTTdRVUZITlVnc1RVRkJUU3hOUVVGTkxFZEJRVWM3U1VGRFdDeERRVUZETEV0QlFVc3NSVUZCUlN4UlFVRlJMRU5CUVVNc1JVRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU1zUlVGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4WFFVRlhMRU5CUVVNc1JVRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeFZRVUZWTEVOQlFVTXNSVUZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUkxFTkJRVU1zUlVGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4VlFVRlZMRU5CUVVNN1EwRkJReXhEUVVGRE8wRkJSek5KTEZOQlFWTXNXVUZCV1N4RFFVRkRMRTFCUVdFc1JVRkJSU3hOUVVGaE8wbEJRemxETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJReXhOUVVGTkxFTkJRVU03U1VGRGJFSXNUMEZCVHl4RFFVRkRMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUlVGQlJUdFJRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8wdEJRVVU3U1VGRE1VTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1FVRkRZaXhEUVVGRE8wRkJZMFFzVFVGQlRTeFZRVUZWTEVsQlFVa3NRMEZCUXl4WlFVRnRRaXhGUVVGRkxFbEJRVWtzUjBGQlF5eEpRVUZKTEVsQlFVa3NSVUZCUlR0SlFVTnlSQ3hQUVVGUExFTkJRVU1zVDBGQlR5eFpRVUZaTEV0QlFVc3NVVUZCVVN4SlFVRkpMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRhRVVzVTBGQlV5eERRVUZCTEVOQlFVTTdVVUZEVml4WlFVRlpPMkZCUTFBc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEVkQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8yRkJRM2hETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVrc1JVRkJSU3hIUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4SFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRemxETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVjc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRMmhFTEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVrc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRMmhFTEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVrc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNSMEZCUXl4RFFVRkRMRVZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGNFUXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJTU3hGUVVGRkxFZEJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGVFTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRE5VTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRE5VTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJTU3haUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRMnBFTEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVrc1JVRkJSU3hIUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0aFFVTnVReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZKTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYkVRc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJ5eEZRVUZGTEVkQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8yRkJRMjVETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVrc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNSVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOd1JDeFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkpMRVZCUVVVc1IwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTTdZVUZEZEVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlNTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hGUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEzQkVMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVWtzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVc1JVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU14UkN4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGSkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRWRCUVVNc1JVRkJSU3hGUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlF6VkVMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVWNzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVc1IwRkJReXhIUVVGSExFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjZSU3hEUVVGRE8wRkJSMFFzVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhPMGxCUTJRc1YwRkJWeXhGUVVGTExFTkJRVU1zUjBGQlZTeEZRVUZGTEVWQlFVVXNRMEZCUXl4SlFVRkpMRWRCUVVNc1JVRkJSU3hIUVVGRExFZEJRVWM3U1VGRE0wTXNVMEZCVXl4RlFVRlBMRU5CUVVNc1EwRkJVU3hGUVVGSkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVkQlFVTXNSVUZCUlN4SFFVRkRMRVZCUVVVc1IwRkJReXhEUVVGRE8wbEJRelZETEZGQlFWRXNSVUZCVVN4RFFVRkRMRU5CUVZFc1JVRkJTU3hGUVVGRkxFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRWRCUVVNc1JVRkJSU3hIUVVGRExFTkJRVU03U1VGREwwTXNVMEZCVXl4RlFVRlBMRU5CUVVNc1EwRkJVU3hGUVVGSkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVkQlFVTXNSVUZCUlN4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF5eEhRVUZETEVOQlFVTTdTVUZEYWtRc1UwRkJVeXhGUVVGUExFTkJRVU1zUlVGQlV5eEZRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVNc1EwRkJReXhKUVVGSkxFZEJRVU1zUlVGQlJTeERRVUZETzBsQlF6VkRMRTlCUVU4c1JVRkJVeXhEUVVGRExFVkJRVk1zUlVGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVOQlFVTTdTVUZETDBNc1RVRkJUU3hGUVVGVkxFTkJRVU1zUlVGQlV5eEZRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVNc1EwRkJReXhKUVVGSkxFZEJRVU1zUlVGQlJTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkRiRVFzVDBGQlR5eEZRVUZUTEVOQlFVTXNSVUZCVXl4RlFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVTXNSVUZCUlN4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF5eERRVUZETzBOQlEzWkVMRU5CUVVNaWZRPT0iLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuL2xvZyc7XG5jb25zdCBsb2cgPSBuZXcgTG9nKCdQYWNpbmcnKTtcbmV4cG9ydCBmdW5jdGlvbiB0aW1lb3V0KG1zLCAuLi5yZXN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHsgc2V0VGltZW91dChyZWplY3QsIG1zLCAuLi5yZXN0KTsgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVsYXkobXMpIHtcbiAgICByZXR1cm4gKGFyZ3MpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgcmVzb2x2ZShhcmdzKTsgfSwgbXMpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZXhwb3J0IGNsYXNzIFBhY2Uge1xuICAgIGNvbnN0cnVjdG9yKHsgcGFjZSA9IDEwMCwgbWF4Q29uY3VycmVudCA9IC0xLCBjb2xsZWN0aW9uUGVyaW9kID0gMCB9KSB7XG4gICAgICAgIHRoaXMubWF4Q29uY3VycmVudCA9IC0xO1xuICAgICAgICB0aGlzLnBhY2UgPSAwO1xuICAgICAgICB0aGlzLndhaXRVbnRpbCA9IDA7XG4gICAgICAgIHRoaXMud2FpdGluZyA9IDA7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IDA7XG4gICAgICAgIHRoaXMucXVldWUgPSB7fTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uUGVyaW9kID0gMDtcbiAgICAgICAgdGhpcy5wYWNlID0gcGFjZTtcbiAgICAgICAgdGhpcy5tYXhDb25jdXJyZW50ID0gbWF4Q29uY3VycmVudDtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uUGVyaW9kID0gY29sbGVjdGlvblBlcmlvZDtcbiAgICB9XG4gICAgaXNBbGxvd2VkKCkgeyByZXR1cm4gdGhpcy5tYXhDb25jdXJyZW50IDwgMCB8fCB0aGlzLnN0YXJ0ZWQgPCB0aGlzLm1heENvbmN1cnJlbnQ7IH1cbiAgICBzZXRQYWNlKG1zKSB7IHRoaXMucGFjZSA9IG1zOyB9XG4gICAgc2V0TWF4Q29uY3VycmVudChtYXhDb25jdXJyZW50KSB7IHRoaXMubWF4Q29uY3VycmVudCA9IG1heENvbmN1cnJlbnQ7IH1cbiAgICBpblF1ZXVlKCkgeyByZXR1cm4gdGhpcy53YWl0aW5nOyB9XG4gICAgaW5Qcm9ncmVzcygpIHsgcmV0dXJuIHRoaXMuc3RhcnRlZDsgfVxuICAgIGFzeW5jIGFkZChmbiwga2V5KSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBjb25zdCBjYWxsVGltZSA9IG5vdyArIE1hdGgubWF4KHRoaXMuY29sbGVjdGlvblBlcmlvZCwgdGhpcy53YWl0VW50aWwpO1xuICAgICAgICB0aGlzLndhaXRVbnRpbCArPSB0aGlzLnBhY2U7XG4gICAgICAgIGxldCBpdGVtO1xuICAgICAgICBpZiAoa2V5ICYmIHRoaXMucXVldWVba2V5XSkge1xuICAgICAgICAgICAgaXRlbSA9IHRoaXMucXVldWVba2V5XTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpdGVtLnRpbWVyKTtcbiAgICAgICAgICAgIGl0ZW0uZm4gPSBmbjtcbiAgICAgICAgICAgIGl0ZW0uYWRkZWQgPSBub3c7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBrZXkgPSBrZXkgfHwgYCR7bm93fS0ke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCl9YDtcbiAgICAgICAgICAgIGl0ZW0gPSB7IGZuOiBmbiwgYWRkZWQ6IG5vdywgcGFjZTogdGhpcywga2V5OiBrZXkgfTtcbiAgICAgICAgICAgIHRoaXMucXVldWVba2V5XSA9IGl0ZW07XG4gICAgICAgICAgICB0aGlzLndhaXRpbmcrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlSXRlbShpdGVtLCBjYWxsVGltZSAtIG5vdyk7XG4gICAgfVxuICAgIHJlc29sdmVJdGVtKGl0ZW0sIHdhaXRUaW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBleGVjdXRlID0gYXN5bmMgKF9pdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gX2l0ZW0ua2V5O1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgX2l0ZW0ucGFjZS5xdWV1ZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICBfaXRlbS5wYWNlLndhaXRpbmctLTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYmVsb3dDb25jdXJyZW50TGltaXQoX2l0ZW0ucGFjZSk7XG4gICAgICAgICAgICAgICAgICAgIF9pdGVtLnBhY2Uuc3RhcnRlZCsrO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3R1YWxEZWxheSA9IERhdGUubm93KCkgLSBfaXRlbS5hZGRlZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgX2l0ZW0uZm4oYWN0dWFsRGVsYXkpO1xuICAgICAgICAgICAgICAgICAgICBfaXRlbS5wYWNlLnN0YXJ0ZWQtLTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBfaXRlbS5wYWNlLnN0YXJ0ZWQtLTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpdGVtLnRpbWVyID0gc2V0VGltZW91dChleGVjdXRlLCB3YWl0VGltZSwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGJlbG93Q29uY3VycmVudExpbWl0KHBhY2UpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVsZWFzZSA9PiB7XG4gICAgICAgIGNvbnN0IHdhaXRMb29wID0gKCkgPT4gcGFjZS5pc0FsbG93ZWQoKSA/IHJlbGVhc2UoKSA6IHNldFRpbWVvdXQod2FpdExvb3AsIDEwKTtcbiAgICAgICAgd2FpdExvb3AoKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVHRmphVzVuTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMUJoWTJsdVp5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZKUVN4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRkxFMUJRVThzVDBGQlR5eERRVUZETzBGQlFVTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdRVUZUTlVRc1RVRkJUU3hWUVVGVkxFOUJRVThzUTBGQlF5eEZRVUZUTEVWQlFVVXNSMEZCUnl4SlFVRlZPMGxCUXpWRExFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRiRVlzUTBGQlF6dEJRV2REUkN4TlFVRk5MRlZCUVZVc1MwRkJTeXhEUVVGRExFVkJRVk03U1VGRE0wSXNUMEZCVHl4RFFVRkpMRWxCUVU4c1JVRkJZU3hGUVVGRk8xRkJRemRDTEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGelFpeEZRVUZGTEVWQlFVVTdXVUZETVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTNReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5RTEVOQlFVTXNRMEZCUXp0QlFVTk9MRU5CUVVNN1FVRnRRa1FzVFVGQlRTeFBRVUZQTEVsQlFVazdTVUZwUTJJc1dVRkJXU3hGUVVGRExFbEJRVWtzUjBGQlF5eEhRVUZITEVWQlFVVXNZVUZCWVN4SFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxHZENRVUZuUWl4SFFVRkRMRU5CUVVNc1JVRkJRenRSUVM5Q2NFUXNhMEpCUVdFc1IwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVZ5UWl4VFFVRkpMRWRCUVdNc1EwRkJReXhEUVVGRE8xRkJSWEJDTEdOQlFWTXNSMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkZjRUlzV1VGQlR5eEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVVndRaXhaUVVGUExFZEJRVmNzUTBGQlF5eERRVUZETzFGQlJYQkNMRlZCUVVzc1IwRkJkMElzUlVGQlJTeERRVUZETzFGQlkycERMSEZDUVVGblFpeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFWRjRRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnFRaXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEdGQlFXRXNRMEZCUXp0UlFVTnVReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdTVUZETjBNc1EwRkJRenRKUVc1Q1RTeFRRVUZUTEV0QlFXRXNUMEZCVHl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETzBsQmMwSXpSaXhQUVVGUExFTkJRVU1zUlVGQlV5eEpRVUZUTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVVV6UXl4blFrRkJaMElzUTBGQlF5eGhRVUZ2UWl4SlFVRlRMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzWVVGQllTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVVnVSaXhQUVVGUExFdEJRV1VzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVVMVF5eFZRVUZWTEV0QlFWa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVkZ1UkN4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRV2RDTEVWQlFVVXNSMEZCVnp0UlFVTnVReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVsQlFVa3NSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRMnBETEUxQlFVMHNVVUZCVVN4SFFVRkhMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUlVGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkRka1VzU1VGQlNTeERRVUZETEZOQlFWTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRE8xRkJSVFZDTEVsQlFVa3NTVUZCVXl4RFFVRkRPMUZCUTJRc1NVRkJTU3hIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVONFFpeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU4yUWl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlEzcENMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEySXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVGSExFTkJRVU03VTBGRGNFSTdZVUZCVFR0WlFVTklMRWRCUVVjc1IwRkJSeXhIUVVGSExFbEJRVWtzUjBGQlJ5eEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJRenRaUVVNeFJDeEpRVUZKTEVkQlFVY3NSVUZCUXl4RlFVRkZMRVZCUVVNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlF5eEhRVUZITEVWQlFVVXNTVUZCU1N4RlFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFVkJRVU1zUjBGQlJ5eEZRVUZETEVOQlFVTTdXVUZET1VNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNN1dVRkRka0lzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMU5CUTJ4Q08xRkJSVVFzVDBGQlR5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVRTdTVUZEYWtRc1EwRkJRenRKUVVWUExGZEJRVmNzUTBGQlF5eEpRVUZUTEVWQlFVVXNVVUZCWlR0UlFVTXhReXhQUVVGUExFbEJRVWtzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRTFCUVUwc1JVRkJSU3hGUVVGRk8xbEJRMjVETEUxQlFVMHNUMEZCVHl4SFFVRkhMRXRCUVVzc1JVRkJSU3hMUVVGVkxFVkJRVVVzUlVGQlJUdG5Ra0ZCUnl4SlFVRkpPMjlDUVVONFF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRE8yOUNRVU4wUWl4UFFVRlBMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMjlDUVVNM1FpeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yOUNRVU55UWl4TlFVRk5MRzlDUVVGdlFpeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenR2UWtGRGRrTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dHZRa0ZEY2tJc1RVRkJUU3hYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU03YjBKQlF6TkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenR2UWtGRGVFTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dHZRa0ZEY2tJc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJsQ1FVTm9RanRuUWtGQlF5eFBRVUZOTEVOQlFVTXNSVUZCUlR0dlFrRkRVQ3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMjlDUVVOeVFpeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJRMkk3V1VGQlFTeERRVUZETEVOQlFVRTdXVUZIUml4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExGVkJRVlVzUTBGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRM0pFTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFBc1EwRkJRenREUVVOS08wRkJSMFFzVTBGQlV5eHZRa0ZCYjBJc1EwRkJReXhKUVVGVE8wbEJRMjVETEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVU3VVVGRGVrSXNUVUZCVFN4UlFVRlJMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkJMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU01UlN4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVObUxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlExQXNRMEZCUXlKOSIsImltcG9ydCB7IExvZyB9IGZyb20gJy4vbG9nJztcbmNvbnN0IGxvZyA9IG5ldyBMb2coJ1JlcXVlc3QnKTtcbmltcG9ydCB7IFBhY2UgfSBmcm9tICcuL1BhY2luZyc7XG5pbXBvcnQgeyBBdXRoRGlnZXN0IH0gZnJvbSAnLi9BdXRoRGlnZXN0JztcbmltcG9ydCB7IEF1dGhCYXNpYyB9IGZyb20gJy4vQXV0aEJhc2ljJztcbmxvZy5tZXNzYWdlTGVuZ3RoID0gMTIwO1xuZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxvZyA9IGxvZztcbiAgICAgICAgdGhpcy5zZXRDcmVkZW50aWFscyA9ICh1c2VyLCBwYXNzd29yZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVkZW50aWFscyA9IHVzZXIgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHsgdXNlcjogdXNlciwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0QXV0aFRva2VuID0gKHRva2VuKSA9PiB0aGlzLmF1dGhUb2tlbiA9IHRva2VuO1xuICAgICAgICB0aGlzLnNldFBhY2UgPSAoeyBwYWNlID0gNTAsIG1heCA9IDEwLCBjb2xsZWN0aW9uUGVyaW9kID0gMTAwIH0gPSB7IHBhY2U6IHVuZGVmaW5lZCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhY2UgPSBwYWNlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBuZXcgUGFjZSh7IHBhY2U6IHBhY2UsIG1heENvbmN1cnJlbnQ6IG1heCwgY29sbGVjdGlvblBlcmlvZDogY29sbGVjdGlvblBlcmlvZCB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kZWNvZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY2FjaGVOYW1lID0gKG9wdGlvbnMpID0+IHRoaXMuY2FjaGUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6XG4gICAgICAgICAgICBgJHt0aGlzLmNhY2hlfS8ke29wdGlvbnMucGF0aC5yZXBsYWNlKC9xPSguKj8pXFwvL2csICdxPSQxLScpLnJlcGxhY2UoL1xcPy9nLCAnJyl9YDtcbiAgICB9XG4gICAgYXN5bmMgZ2V0KHVybCwgeyB1c2VDYWNoZWQgPSB0cnVlLCBoZWFkZXJzID0ge30gfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnModXJsLCAnR0VUJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlY29kZWRSZXF1ZXN0KG9wdGlvbnMsIHVzZUNhY2hlZCwgaGVhZGVycyk7XG4gICAgfVxuICAgIGFzeW5jIHB1dCh1cmwsIHBvc3REYXRhLCB7IHVzZUNhY2hlZCA9IGZhbHNlLCBoZWFkZXJzID0ge30gfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnModXJsLCAnUFVUJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlY29kZWRSZXF1ZXN0KG9wdGlvbnMsIHVzZUNhY2hlZCwgaGVhZGVycywgcG9zdERhdGEpO1xuICAgIH1cbiAgICBhc3luYyBwb3N0KHVybCwgcG9zdERhdGEsIHsgdXNlQ2FjaGVkID0gZmFsc2UsIGhlYWRlcnMgPSB7fSB9ID0ge30pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucyh1cmwsICdQT1NUJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlY29kZWRSZXF1ZXN0KG9wdGlvbnMsIHVzZUNhY2hlZCwgaGVhZGVycywgcG9zdERhdGEpO1xuICAgIH1cbiAgICBnZXRVUkwodXJsKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpID8gbmV3IFVSTCh1cmwsIGRvY3VtZW50LlVSTCkgOiB1cmw7XG4gICAgfVxuICAgIGdldE9wdGlvbnModXJsLCBtZXRob2QpIHtcbiAgICAgICAgdXJsID0gdGhpcy5nZXRVUkwodXJsKTtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gJyc7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICBwcm90b2NvbDogdXJsLnByb3RvY29sLFxuICAgICAgICAgICAgaG9zdDogdXJsLmhvc3QsXG4gICAgICAgICAgICBob3N0bmFtZTogdXJsLmhvc3RuYW1lLFxuICAgICAgICAgICAgcG9ydDogdXJsLnBvcnQsXG4gICAgICAgICAgICBwYXRobmFtZTogcHJlZml4ICsgdXJsLnBhdGhuYW1lLFxuICAgICAgICAgICAgcGF0aDogcHJlZml4ICsgdXJsLnBhdGhuYW1lICsgKHVybC5zZWFyY2ggfHwgJycpLFxuICAgICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgICB1cmw6IGAke3VybC5wcm90b2NvbH0vLyR7dXJsLmhvc3R9JHt1cmwucG9ydCA/ICc6JyArIHVybC5wb3J0IDogJyd9JHtwcmVmaXggKyB1cmwucGF0aG5hbWUgKyAodXJsLnNlYXJjaCB8fCAnJyl9YCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuYXV0aFRva2VuKSB7XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnMuQXV0aFRva2VuID0gdGhpcy5hdXRoVG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuICAgIGFzeW5jIGRlY29kZWRSZXF1ZXN0KG9wdGlvbnMsIHVzZUNhY2hlZCwgaGVhZGVycywgcG9zdERhdGEpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0T3B0aW9ucyhvcHRpb25zLCB1c2VDYWNoZWQsIHBvc3REYXRhKTtcbiAgICAgICAgaWYgKHRoaXMuZGVjb2RlICYmIHJlc3VsdC5yZXNwb25zZS50eHQgJiYgb3B0aW9ucy5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICByZXN1bHQuZGF0YSA9IHRoaXMuZGVjb2RlKHJlc3VsdC5kYXRhLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBhc3luYyByZWFkQ2FjaGVkKGZuYW1lKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGFzeW5jIHdyaXRlQ2FjaGVkKGZuYW1lLCByZXNwb25zZSkge1xuICAgIH1cbiAgICBhc3luYyByZXF1ZXN0T3B0aW9ucyhvcHRpb25zLCB1c2VDYWNoZWQsIHBvc3REYXRhKSB7XG4gICAgICAgIGNvbnN0IGZuYW1lID0gdGhpcy5jYWNoZSA/IHRoaXMuY2FjaGVOYW1lKG9wdGlvbnMpIDogdW5kZWZpbmVkO1xuICAgICAgICBpZiAoZm5hbWUgJiYgdXNlQ2FjaGVkICYmIG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZWFkQ2FjaGVkKGZuYW1lKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlcXVlc3Q7XG4gICAgICAgIGlmICh0aGlzLnBhY2UpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLmluZm8oYCgke3RoaXMucGFjZS5pblF1ZXVlKCl9IHwgJHt0aGlzLnBhY2UuaW5Qcm9ncmVzcygpfSkgJHtvcHRpb25zLm1ldGhvZH0taW5nICR7b3B0aW9ucy51cmx9YCk7XG4gICAgICAgICAgICByZXF1ZXN0ID0gdGhpcy5wYWNlLmFkZCgoKSA9PiB0aGlzLnJlcXVlc3Qob3B0aW9ucywgcG9zdERhdGEpLCBgJHtvcHRpb25zLm1ldGhvZH0gJHtvcHRpb25zLnVybH1gKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcXVlc3QgPSB0aGlzLnJlcXVlc3Qob3B0aW9ucywgcG9zdERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKCgpID0+IGAke29wdGlvbnMubWV0aG9kfS1pbmcgJHtvcHRpb25zLnVybH1gKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0O1xuICAgICAgICBpZiAodGhpcy5wYWNlKSB7XG4gICAgICAgICAgICB0aGlzLmxvZy50cmFuc2llbnQoYCgke3RoaXMucGFjZS5pblF1ZXVlKCl9IHwgJHt0aGlzLnBhY2UuaW5Qcm9ncmVzcygpfSkgcmVjZWl2ZWQgJHtvcHRpb25zLm1ldGhvZH0gJHtvcHRpb25zLnVybH0gYCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2cuZGVidWcoKCkgPT4gYHJlY2VpdmVkICR7b3B0aW9ucy5tZXRob2R9ICR7cmVzcG9uc2UucmVzcG9uc2Uuc3RhdHVzTWVzc2FnZX0gJHtvcHRpb25zLm1ldGhvZH0gJHtvcHRpb25zLnVybH1gKTtcbiAgICAgICAgY29uc3QgY29kZSA9IHJlc3BvbnNlLnJlc3BvbnNlLnN0YXR1c0NvZGUgfHwgcmVzcG9uc2UucmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICBpZiAoY29kZSA+PSAyMDAgJiYgY29kZSA8IDMwMCkge1xuICAgICAgICAgICAgaWYgKGZuYW1lICYmIG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMud3JpdGVDYWNoZWQoZm5hbWUsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIGFzeW5jIHJlcXVlc3Qob3B0aW9ucywgcG9zdERhdGEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5pc3N1ZVJlcXVlc3Qob3B0aW9ucywgcG9zdERhdGEpO1xuICAgICAgICAgICAgbGV0IGF1dGhlbnRpY2F0ZSA9IHJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnNbJ3d3dy1hdXRoZW50aWNhdGUnXTtcbiAgICAgICAgICAgIGlmICghYXV0aGVudGljYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jcmVkZW50aWFscykge1xuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZSA9IGF1dGhlbnRpY2F0ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgbGV0IGF1dGg7XG4gICAgICAgICAgICAgICAgaWYgKGF1dGhlbnRpY2F0ZS5pbmRleE9mKCdEaWdlc3QnKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhdXRoID0gbmV3IEF1dGhEaWdlc3QodGhpcy5jcmVkZW50aWFscy51c2VyLCB0aGlzLmNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYXV0aGVudGljYXRlLmluZGV4T2YoJ0Jhc2ljJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aCA9IG5ldyBBdXRoQmFzaWModGhpcy5jcmVkZW50aWFscy51c2VyLCB0aGlzLmNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGB1bmltcGxlbWVudGVkIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgJHthdXRoZW50aWNhdGV9IGZvciAnJHtvcHRpb25zLnVybH0nYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXV0aC50ZXN0QXV0aChvcHRpb25zLCByZXNwb25zZS5kYXRhLCByZXNwb25zZS5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGBhdXRoZW50aWNhdGlvbiBtaXNzaW5nOyBjYWxsICdzZXRDcmVkZW50aWFscycgYmVmb3JlIGNhbGxpbmcgJ2dldCdgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBgZXJyb3IgcmVxdWVzdGluZyAke29wdGlvbnMudXJsfTogJHtlfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaXNzdWVSZXF1ZXN0KG9wdGlvbnMsIHBvc3REYXRhKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjb25maXJtUmVxdWVzdChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnNUZXh0ID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0geyAnY29udGVudC10eXBlJzogJycgfTtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1RleHQuc3BsaXQoJ1xcclxcbicpLm1hcChoID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGt2ID0gaC5zcGxpdCgnOicpLm1hcChwID0+IHAudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrdlswXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW2t2WzBdXSA9IGt2WzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSB0aGlzLnJlc3BvbnNlVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHh0ID0gcmVxdWVzdC5pc1RleHR1YWxDb250ZW50KGNvbnRlbnRUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0OiB0eHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZTogYCR7dGhpcy5zdGF0dXN9ICR7dGhpcy5zdGF0dXNUZXh0fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLnJlc3BvbnNlVVJMLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHh0ID0gcmVxdWVzdC5pc1RleHR1YWxSZXF1ZXN0KG9wdGlvbnMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKCgpID0+IGByZXF1ZXN0aW5nICR7b3B0aW9ucy5tZXRob2R9ICR7dGhpcy5sb2cuaW5zcGVjdChvcHRpb25zLCB7IGRlcHRoOiA0IH0pfWApO1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5oZWFkZXJzKS5mb3JFYWNoKGggPT4geGhyLnNldFJlcXVlc3RIZWFkZXIoaCwgb3B0aW9ucy5oZWFkZXJzW2hdKSk7XG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IHR4dCA/ICd0ZXh0JyA6ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGNvbmZpcm1SZXF1ZXN0O1xuICAgICAgICAgICAgICAgIHhoci5zZW5kKHBvc3REYXRhID8gSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNUZXh0dWFsQ29udGVudChjb250ZW50VHlwZSkge1xuICAgICAgICBsZXQgdHh0ID0gZmFsc2U7XG4gICAgICAgIGlmIChjb250ZW50VHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250ZW50VHlwZSA9ICd0ZXh0L2h0bWwnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29udGVudFR5cGUgPSBjb250ZW50VHlwZS5zcGxpdCgnOycpWzBdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN1YlR5cGVzID0gY29udGVudFR5cGUuc3BsaXQoJy8nKTtcbiAgICAgICAgc3dpdGNoIChzdWJUeXBlc1swXSkge1xuICAgICAgICAgICAgY2FzZSAnJzpcbiAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgICAgIHR4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgICAgICBjYXNlICdhdWRpbyc6XG4gICAgICAgICAgICBjYXNlICdmb250JzogYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcHBsaWNhdGlvbic6XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzdWJUeXBlc1sxXSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdqc29uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncGRmJzogYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC5wcmVzZW50YXRpb24nOiBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnOiBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndm5kLm1zLXBvd2VycG9pbnQnOiBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndm5kLm1zLWV4Y2VsJzogYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ29jdGV0LXN0cmVhbSc6IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2bmQubXMtZXhjZWwuc2hlZXQubWFjcm9lbmFibGVkLjEyJzogYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRoaXMubG9nLmluZm8oYGNhY2hpbmcgJHtjb250ZW50VHlwZX0gYXMgYmluYXJ5YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDogdGhpcy5sb2cud2FybihgY2FjaGluZyAnJHtjb250ZW50VHlwZX0nIGFzIGJpbmFyeWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0eHQ7XG4gICAgfVxuICAgIGlzVGV4dHVhbFJlcXVlc3QocGF0aE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFsnanNvbicsICd0eHQnLCAnaHRtbCddLnNvbWUoZXh0ID0+IHBhdGhOYW1lLmluZGV4T2YoZXh0KSA+PSAwKTtcbiAgICB9XG59XG5SZXF1ZXN0LmRlY29kZXJzID0ge1xuICAgIHN0cjJqc29uOiAoZGF0YSkgPT4geyB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0gfSxcbiAgICBodG1sMmpzb246IHVuZGVmaW5lZFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVtVnhkV1Z6ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlTWlhGMVpYTjBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVhkRFFTeFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVdVc1QwRkJUeXhEUVVGRE8wRkJRVWNzVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03UVVGRGRrVXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGakxGVkJRVlVzUTBGQlF6dEJRVU40UXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFMUJRVkVzWTBGQll5eERRVUZETzBGQlF6VkRMRTlCUVU4c1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlV5eGhRVUZoTEVOQlFVTTdRVUZITTBNc1IwRkJSeXhEUVVGRExHRkJRV0VzUjBGQlJ5eEhRVUZITEVOQlFVTTdRVUYzUkhoQ0xFMUJRVTBzVDBGQlR5eFBRVUZQTzBsQlFYQkNPMUZCVDJNc1VVRkJSeXhIUVVGUkxFZEJRVWNzUTBGQlF6dFJRWFZDYkVJc2JVSkJRV01zUjBGQlJ5eERRVUZETEVsQlFWa3NSVUZCUlN4UlFVRm5RaXhGUVVGRkxFVkJRVVU3V1VGRGRrUXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFdEJRVWNzVTBGQlV5eERRVUZCTEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4UlFVRlJMRVZCUVVVc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRGVFWXNRMEZCUXl4RFFVRkJPMUZCUjAwc2FVSkJRVmtzUjBGQlJ5eERRVUZETEV0QlFXRXNSVUZCUlN4RlFVRkZMRU5CUTNCRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NTMEZCU3l4RFFVRkJPMUZCVVc1Q0xGbEJRVThzUjBGQlJ5eERRVUZETEVWQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1JVRkJSU3hIUVVGSExFZEJRVU1zUlVGQlJTeEZRVUZGTEdkQ1FVRm5RaXhIUVVGRExFZEJRVWNzUzBGQlJTeEZRVUZETEVsQlFVa3NSVUZCVFN4VFFVRlRMRVZCUVVNc1JVRkJSU3hGUVVGRk8xbEJReTlGTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hMUVVGSExGTkJRVk1zUTBGQlFTeERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eEZRVUZETEVsQlFVa3NSVUZCUXl4SlFVRkpMRVZCUVVVc1lVRkJZU3hGUVVGRExFZEJRVWNzUlVGQlJTeG5Ra0ZCWjBJc1JVRkJReXhuUWtGQlowSXNSVUZCUXl4RFFVRkRMRU5CUVVNN1VVRkRNVWdzUTBGQlF5eERRVUZCTzFGQlVVMHNWMEZCVFN4SFFVRlpMRk5CUVZNc1EwRkJRenRSUVZNMVFpeGpRVUZUTEVkQlFVY3NRMEZCUXl4UFFVRmxMRVZCUVZNc1JVRkJSU3hEUVVNeFF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4TFFVRkhMRk5CUVZNc1EwRkJRU3hEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZETDBJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUlVGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVRTdTVUVyVGpOR0xFTkJRVU03U1VGeVRsVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGakxFVkJRVVVzUlVGQlF5eFRRVUZUTEVkQlFVTXNTVUZCU1N4RlFVRkZMRTlCUVU4c1IwRkJReXhGUVVGRkxFVkJRVU1zUjBGQlF5eEZRVUZGTzFGQlF6VkVMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRelZETEU5QlFVOHNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhQUVVGUExFVkJRVVVzVTBGQlV5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUXpWRUxFTkJRVU03U1VGVFRTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVdNc1JVRkJSU3hSUVVGWkxFVkJRVVVzUlVGQlF5eFRRVUZUTEVkQlFVTXNTMEZCU3l4RlFVRkZMRTlCUVU4c1IwRkJReXhGUVVGRkxFVkJRVU1zUjBGQlF5eEZRVUZGTzFGQlF6TkZMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRelZETEU5QlFVOHNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhQUVVGUExFVkJRVVVzVTBGQlV5eEZRVUZGTEU5QlFVOHNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVOMFJTeERRVUZETzBsQlUwMHNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGakxFVkJRVVVzVVVGQldTeEZRVUZGTEVWQlFVTXNVMEZCVXl4SFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFZEJRVU1zUlVGQlJTeEZRVUZETEVkQlFVTXNSVUZCUlR0UlFVTTFSU3hOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU0zUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zVDBGQlR5eEZRVUZGTEZOQlFWTXNSVUZCUlN4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRGRFVXNRMEZCUXp0SlFVVlRMRTFCUVUwc1EwRkJReXhIUVVGak8xRkJRek5DTEU5QlFVOHNRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRE8wbEJRM1pGTEVOQlFVTTdTVUZGVXl4VlFVRlZMRU5CUVVNc1IwRkJZeXhGUVVGRkxFMUJRV0U3VVVGRE9VTXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZGtJc1RVRkJUU3hOUVVGTkxFZEJRVFJETEVWQlFVVXNRMEZCUXp0UlFVTXpSQ3hOUVVGTkxFOUJRVThzUjBGQlJ6dFpRVU5hTEd0Q1FVRnJRaXhGUVVGRkxFdEJRVXM3V1VGRGVrSXNUVUZCVFN4RlFVRk5MRTFCUVUwN1dVRkRiRUlzVVVGQlVTeEZRVUZKTEVkQlFVY3NRMEZCUXl4UlFVRlJPMWxCUTNoQ0xFbEJRVWtzUlVGQlVTeEhRVUZITEVOQlFVTXNTVUZCU1R0WlFVTndRaXhSUVVGUkxFVkJRVWtzUjBGQlJ5eERRVUZETEZGQlFWRTdXVUZEZUVJc1NVRkJTU3hGUVVGUkxFZEJRVWNzUTBGQlF5eEpRVUZKTzFsQlEzQkNMRkZCUVZFc1JVRkJTU3hOUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEZGQlFWRTdXVUZEYWtNc1NVRkJTU3hGUVVGUkxFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTXNVVUZCVVN4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzU1VGQlNTeEZRVUZGTEVOQlFVTTdXVUZEZEVRc1QwRkJUeXhGUVVGVkxFVkJRVVU3V1VGRGJrSXNSMEZCUnl4RlFVRlRMRWRCUVVjc1IwRkJSeXhEUVVGRExGRkJRVkVzUzBGQlN5eEhRVUZITEVOQlFVTXNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVUVzUTBGQlF5eERRVUZCTEVkQlFVY3NSMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhSUVVGUkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4SlFVRkpMRVZCUVVVc1EwRkJReXhGUVVGRk8xTkJRM1pJTEVOQlFVTTdVVUZEUml4SlFVRkpMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVU3V1VGQlJTeFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETzFOQlFVVTdVVUZEYmtVc1QwRkJUeXhQUVVGUExFTkJRVU03U1VGRGJrSXNRMEZCUXp0SlFXRlRMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zVDBGQlpTeEZRVUZGTEZOQlFXbENMRVZCUVVVc1QwRkJWeXhGUVVGRkxGRkJRV0U3VVVGRGVrWXNUVUZCVFN4TlFVRk5MRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEU5QlFVOHNSVUZCUlN4VFFVRlRMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGRGRrVXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4SlFVRkpMRTlCUVU4c1EwRkJReXhOUVVGTkxFdEJRVWNzUzBGQlN5eEZRVUZGTzFsQlF6bEVMRTFCUVUwc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCVXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFOQlF6TkVPMUZCUTBRc1QwRkJUeXhOUVVGTkxFTkJRVU03U1VGRGJFSXNRMEZCUXp0SlFWVlRMRXRCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQldUdFJRVU51UXl4UFFVRlBMRk5CUVZNc1EwRkJRenRKUVVOeVFpeERRVUZETzBsQlJWTXNTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhMUVVGWkxFVkJRVVVzVVVGQmFVSTdTVUZETTBRc1EwRkJRenRKUVVWVExFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTXNUMEZCWlN4RlFVRkZMRk5CUVdsQ0xFVkJRVVVzVVVGQllUdFJRVU0xUlN4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZCTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1VVRkRPVVFzU1VGQlNTeExRVUZMTEVsQlFVa3NVMEZCVXl4SlFVRkpMRTlCUVU4c1EwRkJReXhOUVVGTkxFdEJRVXNzUzBGQlN5eEZRVUZGTzFsQlEyaEVMRTFCUVUwc1RVRkJUU3hIUVVGSExFMUJRVTBzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVNMVF5eEpRVUZKTEUxQlFVMHNTMEZCU3l4VFFVRlRMRVZCUVVVN1owSkJRVVVzVDBGQlR5eE5RVUZOTEVOQlFVTTdZVUZCUlR0VFFVTXZRenRSUVVWRUxFbEJRVWtzVDBGQk1FSXNRMEZCUXp0UlFVTXZRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVTdXVUZEV0N4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1MwRkJTeXhQUVVGUExFTkJRVU1zVFVGQlRTeFJRVUZSTEU5QlFVOHNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRek5ITEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUlN4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFbEJRVWtzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRkRWM3WVVGQlRUdFpRVU5JTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0VFFVTTNRenRSUVVORUxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVVc1JVRkJSU3hEUVVGQkxFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNVVUZCVVN4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU16UkN4TlFVRk5MRkZCUVZFc1IwRkJSeXhOUVVGTkxFOUJRVThzUTBGQlF6dFJRVU12UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVU3V1VGQlJTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTFCUVUwc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNZMEZCWXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hKUVVGSkxFOUJRVThzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUVVVN1VVRkRla2tzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSU3hGUVVGRkxFTkJRVUVzV1VGQldTeFBRVUZQTEVOQlFVTXNUVUZCVFN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zWVVGQllTeEpRVUZKTEU5QlFVOHNRMEZCUXl4TlFVRk5MRWxCUVVrc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZGY2tnc1RVRkJUU3hKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRWxCUVVVc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZEY0VVc1NVRkJSeXhKUVVGSkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVsQlFVa3NSMEZCUnl4SFFVRkhMRVZCUVVVN1dVRkRNVUlzU1VGQlNTeExRVUZMTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTFCUVUwc1MwRkJTeXhMUVVGTExFVkJRVVU3WjBKQlEyNURMRTFCUVUwc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eExRVUZMTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1lVRkRNME03VTBGRFNqdFJRVU5FTEU5QlFVOHNVVUZCVVN4RFFVRkRPMGxCUTNCQ0xFTkJRVU03U1VGRlV5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVdVc1JVRkJSU3hSUVVGaE8xRkJRMnhFTEVsQlFVazdXVUZEUVN4TlFVRk5MRkZCUVZFc1IwRkJSeXhOUVVGTkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8xbEJRelZFTEVsQlFVa3NXVUZCV1N4SFFVRkhMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEd0Q1FVRnJRaXhEUVVGRExFTkJRVU03V1VGRGFrVXNTVUZCU1N4RFFVRkRMRmxCUVZrc1JVRkJSVHRuUWtGRFppeFBRVUZQTEZGQlFWRXNRMEZCUXp0aFFVTnVRanRwUWtGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVN1owSkJRM0pDTEZsQlFWa3NSMEZCUnl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03WjBKQlEyNURMRWxCUVVrc1NVRkJWU3hEUVVGRE8yZENRVU5tTEVsQlFVa3NXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdiMEpCUTNSRExFbEJRVWtzUjBGQlJ5eEpRVUZKTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8ybENRVU16UlR0eFFrRkJUU3hKUVVGSkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8yOUNRVU0xUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0cFFrRkRNVVU3Y1VKQlFVMDdiMEpCUTBnc1RVRkJUU3gzUTBGQmQwTXNXVUZCV1N4VFFVRlRMRTlCUVU4c1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dHBRa0ZEY2tZN1owSkJRMFFzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFbEJRVWtzUlVGQlJTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1owSkJRM3BFTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dGhRVU53UXp0cFFrRkJUVHRuUWtGRFNDeE5RVUZOTEc5RlFVRnZSU3hEUVVGRE8yRkJRemxGTzFOQlEwbzdVVUZCUXl4UFFVRk5MRU5CUVVNc1JVRkJSVHRaUVVOUUxFMUJRVTBzYjBKQlFXOUNMRTlCUVU4c1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTTdVMEZEYWtRN1NVRkRUQ3hEUVVGRE8wbEJSVk1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4UFFVRmxMRVZCUVVVc1VVRkJZVHRSUVVOMlJDeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRja0lzVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVRSQ0xFVkJRVVVzVFVGQmVVSXNSVUZCUlN4RlFVRkZPMWxCUVVjc1NVRkJTVHRuUWtGRGJFWXNVMEZCVXl4alFVRmpMRU5CUVVNc1EwRkJTenR2UWtGRGVrSXNUVUZCVFN4WFFVRlhMRWRCUVVjc1IwRkJSeXhEUVVGRExIRkNRVUZ4UWl4RlFVRkZMRU5CUVVNN2IwSkJRMmhFTEUxQlFVMHNUMEZCVHl4SFFVRkhMRVZCUVVNc1kwRkJZeXhGUVVGRExFVkJRVVVzUlVGQlF5eERRVUZETzI5Q1FVTndReXhYUVVGWExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdDNRa0ZET1VJc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF6dDNRa0ZETTBNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZPelJDUVVGRkxFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdlVUpCUVVVN2IwSkJRMnBFTEVOQlFVTXNRMEZCUXl4RFFVRkJPMjlDUVVOR0xFMUJRVTBzVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNN2IwSkJRM1JETEUxQlFVMHNSMEZCUnl4SFFVRkhMRTlCUVU4c1EwRkJReXhuUWtGQlowSXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenR2UWtGSGJFUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF6dHZRa0ZETTBJc1RVRkJUU3hSUVVGUkxFZEJRVms3ZDBKQlEzUkNMRWxCUVVrc1JVRkJaMElzU1VGQlNUdDNRa0ZEZUVJc1VVRkJVU3hGUVVGRk96UkNRVU5PTEVkQlFVY3NSVUZCWVN4SFFVRkhPelJDUVVOdVFpeFBRVUZQTEVWQlFWTXNUMEZCVHpzMFFrRkRka0lzVFVGQlRTeEZRVUZWTEU5QlFVOHNRMEZCUXl4TlFVRk5PelJDUVVNNVFpeE5RVUZOTEVWQlFWVXNTVUZCU1N4RFFVRkRMRTFCUVUwN05FSkJRek5DTEZWQlFWVXNSVUZCVFN4SlFVRkpMRU5CUVVNc1RVRkJUVHMwUWtGRE0wSXNZVUZCWVN4RlFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZPelJDUVVOdVJDeEhRVUZITEVWQlFXRXNTVUZCU1N4RFFVRkRMRmRCUVZjN2VVSkJRMjVETzNGQ1FVTktMRU5CUVVNN2IwSkJRMFlzVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMmRDUVVOMFFpeERRVUZETzJkQ1FVTkVMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzWTBGQll5eEZRVUZGTEVOQlFVTTdaMEpCUTJwRExFMUJRVTBzUjBGQlJ5eEhRVUZITEU5QlFVOHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1owSkJRM1pFTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVVVzUlVGQlJTeERRVUZCTEdOQlFXTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVc1JVRkJReXhMUVVGTExFVkJRVU1zUTBGQlF5eEZRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJRek5HTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU0xUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjJSaXhIUVVGSExFTkJRVU1zV1VGQldTeEhRVUZITEVkQlFVY3NRMEZCUVN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eGhRVUZoTEVOQlFVTTdaMEpCUXk5RExFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NZMEZCWXl4RFFVRkRPMmRDUVVNMVFpeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJRU3hEUVVGRExFTkJRVUVzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVUVzVTBGQlV5eERRVUZETEVOQlFVTTdZVUZEZWtRN1dVRkJReXhQUVVGTkxFTkJRVU1zUlVGQlJUdG5Ra0ZEVUN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRFlqdFJRVUZCTEVOQlFVTXNRMEZCUXl4RFFVRkJPMGxCUTFBc1EwRkJRenRKUVVWVExHZENRVUZuUWl4RFFVRkRMRmRCUVd0Q08xRkJRM3BETEVsQlFVa3NSMEZCUnl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOb1FpeEpRVUZKTEZkQlFWY3NTMEZCUnl4VFFVRlRMRVZCUVVVN1dVRkJSU3hYUVVGWExFZEJRVWNzVjBGQlZ5eERRVUZETzFOQlFVVTdZVUZEZEVRN1dVRkJSU3hYUVVGWExFZEJRVWNzVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVUZGTzFGQlEycEVMRTFCUVUwc1VVRkJVU3hIUVVGSExGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRlRU1zVVVGQlVTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN1dVRkRha0lzUzBGQlN5eEZRVUZGTEVOQlFVTTdXVUZEVWl4TFFVRkxMRTFCUVUwN1owSkJRVk1zUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXp0blFrRkJReXhOUVVGTk8xbEJRM1JETEV0QlFVc3NUMEZCVHl4RFFVRkRPMWxCUTJJc1MwRkJTeXhQUVVGUExFTkJRVU03V1VGRFlpeExRVUZMTEUxQlFVMHNRMEZCUXl4RFFVRlJMRTFCUVUwN1dVRkRNVUlzUzBGQlN5eGhRVUZoTzJkQ1FVRkZMRkZCUVU4c1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTzI5Q1FVTndReXhMUVVGTExFMUJRVTA3ZDBKQlFVc3NSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJRenQzUWtGQlF5eE5RVUZOTzI5Q1FVTnNReXhMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZMTEUxQlFVMDdiMEpCUTNSQ0xFdEJRVXNzSzBSQlFTdEVMRU5CUVVNc1EwRkJReXhOUVVGTk8yOUNRVU0xUlN4TFFVRkxMSFZFUVVGMVJDeERRVUZETEVOQlFVTXNUVUZCVFR0dlFrRkRjRVVzUzBGQlN5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRExFMUJRVTA3YjBKQlEyaERMRXRCUVVzc1kwRkJZeXhEUVVGRExFTkJRVU1zVFVGQlRUdHZRa0ZETTBJc1MwRkJTeXhqUVVGakxFTkJRVU1zUTBGQlF5eE5RVUZOTzI5Q1FVTXpRaXhMUVVGTExHOURRVUZ2UXl4RFFVRkRMRU5CUVVNc1RVRkJUVHR2UWtGRGFrUXNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4WFFVRlhMRmxCUVZrc1EwRkJReXhEUVVGRE8ybENRVU01UkR0blFrRkRSQ3hOUVVGTk8xbEJRMDRzVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeFhRVUZYTEdGQlFXRXNRMEZCUXl4RFFVRkRPMU5CUTJoRk8xRkJRMFFzVDBGQlR5eEhRVUZITEVOQlFVTTdTVUZEWml4RFFVRkRPMGxCUlZNc1owSkJRV2RDTEVOQlFVTXNVVUZCWlR0UlFVTjBReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEV0QlFVc3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpORkxFTkJRVU03TzBGQk9WSmhMR2RDUVVGUkxFZEJRVWM3U1VGRGNrSXNVVUZCVVN4RlFVRkhMRU5CUVVNc1NVRkJWeXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEpRVUZKTzFGQlFVTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZCTzB0QlFVTTdTVUZCUXl4UFFVRk5MRU5CUVVNc1JVRkJSVHRSUVVGRkxFOUJRVThzUlVGQlJTeERRVUZCTzB0QlFVTXNRMEZCUVN4RFFVRkRPMGxCUTJ4R0xGTkJRVk1zUlVGQmQwSXNVMEZCVXp0RFFVTTNReXhEUVVGREluMD0iLCJleHBvcnQgKiBmcm9tICcuL1BhY2luZyc7XG5leHBvcnQgKiBmcm9tICcuL1JlcXVlc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9DaGVja3N1bSc7XG5leHBvcnQgKiBmcm9tICcuL0RhdGUnO1xuZXhwb3J0ICogZnJvbSBcIi4vbG9nXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9BcnJheVwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNZMEZCYVVJc1ZVRkJWU3hEUVVGRE8wRkJRelZDTEdOQlFXbENMRmRCUVZjc1EwRkJRenRCUVVNM1FpeGpRVUZwUWl4WlFVRlpMRU5CUVVNN1FVRkRPVUlzWTBGQmFVSXNVVUZCVVN4RFFVRkRPMEZCUXpGQ0xHTkJRV2xDTEU5QlFVOHNRMEZCUXp0QlFVTjZRaXhqUVVGcFFpeFRRVUZUTEVOQlFVTWlmUT09IiwiaW1wb3J0IHsgZGF0ZSB9IGZyb20gJy4vRGF0ZSc7XG5jb25zdCBDT0xPUiA9IHtcbiAgICBjbGVhcjogJ2NvbG9yOiMwMDA7IGJhY2tncm91bmQtY29sb3I6aW5oZXJpdDsgZm9udC13ZWlnaHQ6bm9ybWFsOycsXG4gICAgYm9sZDogJ2ZvbnQtd2VpZ2h0OmJvbGQ7JyxcbiAgICBkaW06ICcnLFxuICAgIHVuZGVyc2NvcmU6ICcnLFxuICAgIGJsaW5rOiAnJyxcbiAgICByZXZlcnNlOiAnJyxcbiAgICBoaWRkZW46ICcnLFxuICAgIGJsYWNrOiAnY29sb3I6IzAwMDsnLFxuICAgIHJlZDogJ2NvbG9yOiNmMDA7JyxcbiAgICBncmVlbjogJ2NvbG9yOiMwZjA7JyxcbiAgICB5ZWxsb3c6ICdjb2xvcjojZmYwOycsXG4gICAgYmx1ZTogJ2NvbG9yOiMwMGY7JyxcbiAgICBtYWdlbnRhOiAnY29sb3I6I2YwZjsnLFxuICAgIGN5YW46ICdjb2xvcjojMGZmOycsXG4gICAgd2hpdGU6ICdjb2xvcjojZmZmOycsXG4gICAgZGFya3JlZDogJ2NvbG9yOiM4MDA7JyxcbiAgICBkYXJrZ3JlZW46ICdjb2xvcjojMDgwOycsXG4gICAgZGFya3llbGxvdzogJ2NvbG9yOiM4ODA7JyxcbiAgICBkYXJrYmx1ZTogJ2NvbG9yOiMwMDg7JyxcbiAgICBkYXJrbWFnZW50YTogJ2NvbG9yOiM4MDg7JyxcbiAgICBkYXJrY3lhbjogJ2NvbG9yOiMwODg7JyxcbiAgICBncmF5OiAnY29sb3I6Izg4ODsnLFxuICAgIGJnQmxhY2s6ICdiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7JyxcbiAgICBiZ1JlZDogJ2JhY2tncm91bmQtY29sb3I6I2YwMDsnLFxuICAgIGJnR3JlZW46ICdiYWNrZ3JvdW5kLWNvbG9yOiMwZjA7JyxcbiAgICBiZ1llbGxvdzogJ2JhY2tncm91bmQtY29sb3I6I2ZmMDsnLFxuICAgIGJnQmx1ZTogJ2JhY2tncm91bmQtY29sb3I6IzAwZjsnLFxuICAgIGJnTWFnZW50YTogJ2JhY2tncm91bmQtY29sb3I6I2YwZjsnLFxuICAgIGJnQ3lhbjogJ2JhY2tncm91bmQtY29sb3I6IzBmZjsnLFxuICAgIGJnV2hpdGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7J1xufTtcbmV4cG9ydCBjbGFzcyBMb2cge1xuICAgIGNvbnN0cnVjdG9yKHByZWZpeCkge1xuICAgICAgICB0aGlzLnJlcG9ydExldmVsID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnJlcG9ydFByZWZpeCA9ICcnO1xuICAgICAgICB0aGlzLm1heExlbmd0aCA9IC0xO1xuICAgICAgICB0aGlzLmNvbG9ycyA9IHRydWU7XG4gICAgICAgIHRoaXMucmVwb3J0UHJlZml4ID0gcHJlZml4O1xuICAgIH1cbiAgICBzZXQgbWVzc2FnZUxlbmd0aChtYXgpIHsgdGhpcy5tYXhMZW5ndGggPSBtYXg7IH1cbiAgICBnZXQgbWVzc2FnZUxlbmd0aCgpIHsgcmV0dXJuIHRoaXMubWF4TGVuZ3RoOyB9XG4gICAgbGV2ZWwobmV3TGV2ZWxTeW0sIHNldEdsb2JhbExldmVsKSB7XG4gICAgICAgIGxldCBuZXdMZXZlbCA9IExvZy5sZXZlbHNbbmV3TGV2ZWxTeW1dIHx8IExvZy5nbG9iYWxMZXZlbDtcbiAgICAgICAgbGV0IG9sZExldmVsID0gdGhpcy5yZXBvcnRMZXZlbCB8fCBMb2cuZ2xvYmFsTGV2ZWw7XG4gICAgICAgIGlmIChuZXdMZXZlbFN5bSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuZXdMZXZlbCA9IG9sZExldmVsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld0xldmVsU3ltID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJlcG9ydExldmVsID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKExvZy5sZXZlbHNbbmV3TGV2ZWxTeW1dKSB7XG4gICAgICAgICAgICBpZiAoc2V0R2xvYmFsTGV2ZWwpIHtcbiAgICAgICAgICAgICAgICBMb2cuZ2xvYmFsTGV2ZWwgPSBuZXdMZXZlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0TGV2ZWwgPSBuZXdMZXZlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IGBuZXcgJHtzZXRHbG9iYWxMZXZlbCA/ICdnbG9iYWwnIDogdGhpcy5yZXBvcnRQcmVmaXh9IGxvZyBsZXZlbCAke25ld0xldmVsLmRlc2MudG9VcHBlckNhc2UoKX0gKHdhcyAke29sZExldmVsLmRlc2MudG9VcHBlckNhc2UoKX0pYDtcbiAgICAgICAgICAgIChuZXdMZXZlbC5zeW0gPT09IG9sZExldmVsLnN5bSkgPyB0aGlzLmRlYnVnKG1zZykgOiB0aGlzLmluZm8obXNnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoYHVua293biBsZXZlbCAke25ld0xldmVsU3ltfTsgbG9nIGxldmVsIHJlbWFpbnMgJHtvbGRMZXZlbC5zeW19YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0xldmVsLnN5bTtcbiAgICB9XG4gICAgZGVidWcobXNnKSB7IHJldHVybiB0aGlzLm91dChMb2cuREVCVUcsIG1zZywgeyBjb2xvcjogWydncmF5J10gfSk7IH1cbiAgICB0cmFuc2llbnQobXNnKSB7IHJldHVybiB0aGlzLm91dChMb2cuSU5GTywgbXNnLCB7IGNvbG9yOiBbJ2RhcmtncmVlbiddLCBsZjogJ1xccicgfSk7IH1cbiAgICBwcm9ncmVzcyhtc2cpIHsgcmV0dXJuIHRoaXMub3V0KExvZy5JTkZPLCBtc2csIHsgY29sb3I6IFsnZGFya2JsdWUnXSB9KTsgfVxuICAgIGluZm8obXNnKSB7IHJldHVybiB0aGlzLm91dChMb2cuSU5GTywgbXNnLCB7IGNvbG9yOiBbJ2RhcmtncmVlbiddIH0pOyB9XG4gICAgd2Fybihtc2cpIHsgcmV0dXJuIHRoaXMub3V0KExvZy5XQVJOLCBtc2csIHsgY29sb3I6IFsnZGFya3llbGxvdycsICdib2xkJ10gfSk7IH1cbiAgICBlcnJvcihtc2cpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSBbJ2RhcmtyZWQnLCAnYm9sZCddO1xuICAgICAgICBpZiAobXNnLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub3V0KExvZy5FUlJPUiwgbXNnLm1lc3NhZ2UsIHsgY29sb3I6IGNvbG9yIH0pO1xuICAgICAgICAgICAgdGhpcy5vdXQoTG9nLkVSUk9SLCBtc2cuc3RhY2ssIHsgY29sb3I6IGNvbG9yIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG1zZy5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3V0KExvZy5FUlJPUiwgbXNnLCB7IGNvbG9yOiBjb2xvciB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvdXQobHZsLCBtc2csIG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IGRlc2MgPSBMb2cubGV2ZWxzW2x2bF07XG4gICAgICAgIGNvbnN0IGZpbHRlckxldmVsID0gdGhpcy5yZXBvcnRMZXZlbCB8fCBMb2cuZ2xvYmFsTGV2ZWw7XG4gICAgICAgIGlmIChkZXNjLmltcG9ydGFuY2UgPj0gZmlsdGVyTGV2ZWwuaW1wb3J0YW5jZSkge1xuICAgICAgICAgICAgbGV0IGxpbmU7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBtc2cpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSBtc2coKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IG1zZztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBsaW5lID0gdGhpcy5pbnNwZWN0KG1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRlU3RyID0gZGF0ZShMb2cuZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICBpZiAobGluZS5sZW5ndGggPiB0aGlzLm1heExlbmd0aCAmJiB0aGlzLm1heExlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsaW5lID0gYCR7bGluZS5zbGljZSgwLCB0aGlzLm1heExlbmd0aCAvIDIgLSAyKX0uLi4ke2xpbmUuc2xpY2UoLXRoaXMubWF4TGVuZ3RoIC8gMiArIDIpfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXNnLnN0YWNrKSB7XG4gICAgICAgICAgICAgICAgbGluZSA9IGAke2xpbmV9XFxuJHttc2cuc3RhY2t9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGAke2RhdGVTdHJ9ICR7dGhpcy5yZXBvcnRQcmVmaXh9ICR7ZGVzYy5kZXNjfWA7XG4gICAgICAgICAgICB0aGlzLm91dHB1dChvcHRpb25zLmNvbG9yLCBoZWFkZXIsIGxpbmUpO1xuICAgICAgICAgICAgcmV0dXJuIGxpbmUgKyAob3B0aW9ucy5sZiB8fCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgb3V0cHV0KGNvbG9yLCBoZWFkZXIsIGxpbmUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCVjJHtoZWFkZXJ9JWMgJHtsaW5lfWAsIGNvbG9yLm1hcChjID0+IENPTE9SW2NdKS5qb2luKCcgJyksIENPTE9SWydjbGVhciddKTtcbiAgICB9XG4gICAgZm9ybWF0KGZtdFN0cikge1xuICAgICAgICBpZiAoZm10U3RyID09PSBudWxsKSB7XG4gICAgICAgICAgICBMb2cuZGF0ZUZvcm1hdCA9IExvZy5kZWZEYXRlRm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZtdFN0cikge1xuICAgICAgICAgICAgTG9nLmRhdGVGb3JtYXQgPSBmbXRTdHI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIExvZy5kYXRlRm9ybWF0O1xuICAgIH1cbiAgICBwcmVmaXgocHJmKSB7XG4gICAgICAgIGlmIChwcmYpIHtcbiAgICAgICAgICAgIHRoaXMucmVwb3J0UHJlZml4ID0gcHJmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcG9ydFByZWZpeDtcbiAgICB9XG4gICAgY29uZmlnKGNmZykge1xuICAgICAgICBpZiAoY2ZnLmZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1hdChjZmcuZm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ZnLmxldmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwoY2ZnLmxldmVsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ZnLmNvbG9ycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9ycyA9IGNmZy5jb2xvcnM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5zcGVjdChtc2csIHsgZGVwdGggPSAtMSwgaW5kZW50ID0gJyAgICcsIGNvbG9ycyA9IExvZy5JTkRFTlRfQ09MT1JTIH0gPSB7IGRlcHRoOiAwLCBpbmRlbnQ6ICcgICAnLCBjb2xvcnM6IExvZy5JTkRFTlRfQ09MT1JTIH0pIHtcbiAgICAgICAgZnVuY3Rpb24gX2luc3BlY3QobXNnLCBkZXB0aCwgbGV2ZWwsIGN1cnJJbmRlbnQpIHtcbiAgICAgICAgICAgIGlmIChtc2cgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1zZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Z1bmN0aW9uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJyR7bXNnfSdgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlcHRoIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG1zZy5sZW5ndGggPT09IHVuZGVmaW5lZCkgPyAney4uLn0nIDogJ1suLi5dJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1zZy5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFske21zZy5tYXAoKGUpID0+IChlID09PSB1bmRlZmluZWQpID8gJycgOiBfaW5zcGVjdChlLCBkZXB0aCAtIDEsIGxldmVsICsgMSwgY3VyckluZGVudCkpLmpvaW4oJywgJyl9XWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IFtwcmVmaXgsIHBvc3RmaXgsIGxmLCBwb3N0SW5kZW50XSA9IGxvZy5nZXRQcmVQb3N0Zml4KGluZGVudCwgbGV2ZWwsIGN1cnJJbmRlbnQsIGNvbG9ycyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGB7JHtsZn1gICsgT2JqZWN0LmtleXMobXNnKS5tYXAoayA9PiBgJHtwcmVmaXh9JHtrfSR7cG9zdGZpeH06ICR7X2luc3BlY3QobXNnW2tdLCBkZXB0aCAtIDEsIGxldmVsICsgMSwgY3VyckluZGVudCArIGluZGVudCl9YCkuam9pbihgLCR7bGZ9YCkgKyBgJHtsZn0ke3Bvc3RJbmRlbnR9fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbXNnLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9nID0gdGhpcztcbiAgICAgICAgcmV0dXJuIF9pbnNwZWN0KG1zZywgKGRlcHRoICE9PSB1bmRlZmluZWQgJiYgZGVwdGggIT09IG51bGwgJiYgZGVwdGggPj0gMCkgPyBkZXB0aCA6IDk5OSwgMCwgJycpO1xuICAgIH1cbiAgICBnZXRQcmVQb3N0Zml4KGluZGVudCwgbGV2ZWwsIGN1cnJJbmRlbnQsIGNvbG9ycykge1xuICAgICAgICBsZXQgY3N0YXJ0ID0gJycsIGNzdG9wID0gJycsIGxmID0gJ1xcbic7XG4gICAgICAgIGlmIChjb2xvcnMpIHtcbiAgICAgICAgICAgIGluZGVudCA9IGluZGVudC5yZXBsYWNlKC8gL2csICcmbmJzcDsnKTtcbiAgICAgICAgICAgIGN1cnJJbmRlbnQgPSBjdXJySW5kZW50LnJlcGxhY2UoLyAvZywgJyZuYnNwOycpO1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBDT0xPUltjb2xvcnNbbGV2ZWwgJSBjb2xvcnMubGVuZ3RoXV0gfHwgY29sb3JzW2xldmVsICUgY29sb3JzLmxlbmd0aF07XG4gICAgICAgICAgICBjc3RhcnQgPSBgPGI+PHNwYW4gc3R5bGU9JyR7Y29sb3J9Jz5gO1xuICAgICAgICAgICAgY3N0b3AgPSBgPC9zcGFuPjwvYj5gO1xuICAgICAgICAgICAgbGYgPSAnPGJyPic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtgJHtjdXJySW5kZW50fSR7aW5kZW50fSR7Y3N0YXJ0fWAsIGAke2NzdG9wfWAsIGNvbG9ycyA/ICc8YnI+JyA6ICdcXG4nLCBjdXJySW5kZW50XTtcbiAgICB9XG59XG5Mb2cuSU5ERU5UX0NPTE9SUyA9IFsnZGFya2JsdWUnLCAnZGFya2dyZWVuJywgJ2RhcmtyZWQnLCAnZGFya2N5YW4nLCAnZGFya3llbGxvdycsICdkYXJrbWFnZW50YSddO1xuTG9nLmRlZkRhdGVGb3JtYXQgPSAnJVlZWVklTU0lREQgJWhoOiVtbTolc3MuJWpqaic7XG5Mb2cuZGF0ZUZvcm1hdCA9IExvZy5kZWZEYXRlRm9ybWF0O1xuTG9nLkRFQlVHID0gJ0RFQlVHJztcbkxvZy5JTkZPID0gJ0lORk8nO1xuTG9nLldBUk4gPSAnV0FSTic7XG5Mb2cuRVJST1IgPSAnRVJST1InO1xuTG9nLmxldmVscyA9IHtcbiAgICBbTG9nLkRFQlVHXTogeyBpbXBvcnRhbmNlOiAwLCBzeW06IExvZy5ERUJVRywgZGVzYzogJ0RFQlVHJyB9LFxuICAgIFtMb2cuSU5GT106IHsgaW1wb3J0YW5jZTogMSwgc3ltOiBMb2cuSU5GTywgZGVzYzogJ0lORk8nIH0sXG4gICAgW0xvZy5XQVJOXTogeyBpbXBvcnRhbmNlOiAyLCBzeW06IExvZy5XQVJOLCBkZXNjOiAnV0FSTicgfSxcbiAgICBbTG9nLkVSUk9SXTogeyBpbXBvcnRhbmNlOiAzLCBzeW06IExvZy5FUlJPUiwgZGVzYzogJ0VSUk9SJyB9XG59O1xuTG9nLmxvZyA9IG5ldyBMb2coJycpO1xuTG9nLmdsb2JhbExldmVsID0gTG9nLmxldmVsc1tMb2cuSU5GT107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liRzluTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMnh2Wnk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRnZSa0VzVDBGQlR5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TlFVRk5MRkZCUVZFc1EwRkJRenRCUVVrNVFpeE5RVUZOTEV0QlFVc3NSMEZCUnp0SlFVTldMRXRCUVVzc1JVRkJUeXd5UkVGQk1rUTdTVUZGZGtVc1NVRkJTU3hGUVVGUkxHMUNRVUZ0UWp0SlFVTXZRaXhIUVVGSExFVkJRVk1zUlVGQlJUdEpRVU5rTEZWQlFWVXNSVUZCUlN4RlFVRkZPMGxCUTJRc1MwRkJTeXhGUVVGUExFVkJRVVU3U1VGRFpDeFBRVUZQTEVWQlFVc3NSVUZCUlR0SlFVTmtMRTFCUVUwc1JVRkJUU3hGUVVGRk8wbEJSV1FzUzBGQlN5eEZRVUZQTEdGQlFXRTdTVUZEZWtJc1IwRkJSeXhGUVVGVExHRkJRV0U3U1VGRGVrSXNTMEZCU3l4RlFVRlBMR0ZCUVdFN1NVRkRla0lzVFVGQlRTeEZRVUZOTEdGQlFXRTdTVUZEZWtJc1NVRkJTU3hGUVVGUkxHRkJRV0U3U1VGRGVrSXNUMEZCVHl4RlFVRkxMR0ZCUVdFN1NVRkRla0lzU1VGQlNTeEZRVUZSTEdGQlFXRTdTVUZEZWtJc1MwRkJTeXhGUVVGUExHRkJRV0U3U1VGRmVrSXNUMEZCVHl4RlFVRkxMR0ZCUVdFN1NVRkRla0lzVTBGQlV5eEZRVUZITEdGQlFXRTdTVUZEZWtJc1ZVRkJWU3hGUVVGRkxHRkJRV0U3U1VGRGVrSXNVVUZCVVN4RlFVRkpMR0ZCUVdFN1NVRkRla0lzVjBGQlZ5eEZRVUZETEdGQlFXRTdTVUZEZWtJc1VVRkJVU3hGUVVGSkxHRkJRV0U3U1VGRGVrSXNTVUZCU1N4RlFVRlJMR0ZCUVdFN1NVRkZla0lzVDBGQlR5eEZRVUZMTEhkQ1FVRjNRanRKUVVOd1F5eExRVUZMTEVWQlFVOHNkMEpCUVhkQ08wbEJRM0JETEU5QlFVOHNSVUZCU3l4M1FrRkJkMEk3U1VGRGNFTXNVVUZCVVN4RlFVRkpMSGRDUVVGM1FqdEpRVU53UXl4TlFVRk5MRVZCUVUwc2QwSkJRWGRDTzBsQlEzQkRMRk5CUVZNc1JVRkJSeXgzUWtGQmQwSTdTVUZEY0VNc1RVRkJUU3hGUVVGTkxIZENRVUYzUWp0SlFVTndReXhQUVVGUExFVkJRVXNzZDBKQlFYZENPME5CUTNaRExFTkJRVU03UVVGbFJpeE5RVUZOTEU5QlFVOHNSMEZCUnp0SlFYRkRXaXhaUVVGWkxFMUJRV0U3VVVGTVppeG5Ra0ZCVnl4SFFVRm5RaXhUUVVGVExFTkJRVU03VVVGRGNrTXNhVUpCUVZrc1IwRkJTU3hGUVVGRkxFTkJRVU03VVVGRGJrSXNZMEZCVXl4SFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMjVDTEZkQlFVMHNSMEZCVlN4SlFVRkpMRU5CUVVNN1VVRkZSaXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEUxQlFVMHNRMEZCUXp0SlFVRkRMRU5CUVVNN1NVRlJNVVFzU1VGQlZ5eGhRVUZoTEVOQlFVTXNSMEZCVlN4SlFVRkpMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVYzVSQ3hKUVVGWExHRkJRV0VzUzBGQlN5eFBRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJiVUk1UXl4TFFVRkxMRU5CUVVNc1YwRkJiVUlzUlVGQlJTeGpRVUYxUWp0UlFVTnlSQ3hKUVVGSkxGRkJRVkVzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZETVVRc1NVRkJTU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRMjVFTEVsQlFVa3NWMEZCVnl4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVNelFpeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRPMU5CUTNaQ08yRkJRVTBzU1VGQlNTeFhRVUZYTEV0QlFVc3NTVUZCU1N4RlFVRkZPMWxCUXpkQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NVMEZCVXl4RFFVRkRPMU5CUTJoRE8yRkJRVTBzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRk8xbEJRMmhETEVsQlFVa3NZMEZCWXl4RlFVRkZPMmRDUVVGRkxFZEJRVWNzUTBGQlF5eFhRVUZYTEVkQlFVY3NVVUZCVVN4RFFVRkRPMkZCUVVVN2FVSkJReTlDTzJkQ1FVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzVVVGQlVTeERRVUZETzJGQlFVVTdXVUZEY0VRc1RVRkJUU3hIUVVGSExFZEJRVWNzVDBGQlR5eGpRVUZqTEVOQlFVRXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NZMEZCWXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeFRRVUZUTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFZEJRVWNzUTBGQlF6dFpRVU5vU2l4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFdEJRVXNzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUTNKRk8yRkJRVTA3V1VGRFNDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMR2RDUVVGblFpeFhRVUZYTEhWQ1FVRjFRaXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTm9SanRSUVVORUxFOUJRVThzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJVMDBzUzBGQlN5eERRVUZETEVkQlFVOHNTVUZCVnl4UFFVRlBMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJVeTlGTEZOQlFWTXNRMEZCUXl4SFFVRlBMRWxCUVZjc1QwRkJUeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCVTJoSExGRkJRVkVzUTBGQlF5eEhRVUZQTEVsQlFWY3NUMEZCVHl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVdGeVJpeEpRVUZKTEVOQlFVTXNSMEZCVHl4SlFVRlhMRTlCUVU4c1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGVGJFWXNTVUZCU1N4RFFVRkRMRWRCUVU4c1NVRkJWeXhQUVVGUExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFWVXpSaXhMUVVGTExFTkJRVU1zUjBGQlR6dFJRVU5vUWl4TlFVRk5MRXRCUVVzc1IwRkJSeXhEUVVGRExGTkJRVk1zUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTnNReXhKUVVGSkxFZEJRVWNzUTBGQlF5eFBRVUZQTEVWQlFVVTdXVUZEWWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTI1RUxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGFrUXNUMEZCVHl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRE8xTkJRM1JDTzJGQlFVMDdXVUZEU0N4UFFVRlBMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTnlSRHRKUVVOTUxFTkJRVU03U1VGaFV5eEhRVUZITEVOQlFVTXNSMEZCVlN4RlFVRkZMRWRCUVU4c1JVRkJSU3hQUVVGWE8xRkJRekZETEVsQlFVa3NTVUZCU1N4SFFVRmhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEY2tNc1RVRkJUU3hYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRM2hFTEVsQlFVa3NTVUZCU1N4RFFVRkRMRlZCUVZVc1NVRkJTU3hYUVVGWExFTkJRVU1zVlVGQlZTeEZRVUZGTzFsQlF6TkRMRWxCUVVrc1NVRkJTU3hEUVVGRE8xbEJRMVFzVVVGQlR5eFBRVUZQTEVkQlFVY3NSVUZCUlR0blFrRkRaaXhMUVVGTExGVkJRVlU3YjBKQlFVVXNTVUZCU1N4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRE8yOUNRVUZETEUxQlFVMDdaMEpCUTNKRExFdEJRVXNzVVVGQlVUdHZRa0ZCU1N4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRE8yOUNRVUZETEUxQlFVMDdaMEpCUTI1RExFdEJRVXNzVVVGQlVTeERRVUZETzJkQ1FVTmtMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRM0pETzFsQlEwUXNUVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0WlFVTnlReXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZETEVOQlFVTXNSVUZCUlR0blFrRkRiRVFzU1VGQlNTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUXl4RFFVRkRMRWRCUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVU1zUTBGQlF5eEhRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVFN1lVRkRja1k3V1VGRFJDeEpRVUZKTEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVN1owSkJRVVVzU1VGQlNTeEhRVUZITEVkQlFVY3NTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dGhRVUZGTzFsQlEyeEVMRTFCUVUwc1RVRkJUU3hIUVVGSExFZEJRVWNzVDBGQlR5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWxCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzFsQlF6bEVMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGVrTXNUMEZCVHl4SlFVRkpMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeEpRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTJ4RE8xRkJRMFFzVDBGQlR5eFRRVUZUTEVOQlFVTTdTVUZEY2tJc1EwRkJRenRKUVVsVExFMUJRVTBzUTBGQlF5eExRVUZqTEVWQlFVVXNUVUZCWVN4RlFVRkZMRWxCUVZjN1VVRkRka1FzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRTFCUVUwc1RVRkJUU3hKUVVGSkxFVkJRVVVzUlVGQlJTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVUVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRelZHTEVOQlFVTTdTVUZaVFN4TlFVRk5MRU5CUVVNc1RVRkJZenRSUVVONFFpeEpRVUZKTEUxQlFVMHNTMEZCU3l4SlFVRkpMRVZCUVVVN1dVRkJSU3hIUVVGSExFTkJRVU1zVlVGQlZTeEhRVUZITEVkQlFVY3NRMEZCUXl4aFFVRmhMRU5CUVVNN1UwRkJSVHRoUVVOMlJDeEpRVUZKTEUxQlFVMHNSVUZCVFR0WlFVRkZMRWRCUVVjc1EwRkJReXhWUVVGVkxFZEJRVWNzVFVGQlRTeERRVUZETzFOQlFVVTdVVUZEYWtRc1QwRkJUeXhIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETzBsQlF6RkNMRU5CUVVNN1NVRlBUU3hOUVVGTkxFTkJRVU1zUjBGQlZ6dFJRVU55UWl4SlFVRkpMRWRCUVVjc1JVRkJSVHRaUVVGRkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NSMEZCUnl4RFFVRkRPMU5CUVVVN1VVRkRja01zVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRPMGxCUXpkQ0xFTkJRVU03U1VGVlRTeE5RVUZOTEVOQlFVTXNSMEZCY1VRN1VVRkRMMFFzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4TFFVRkhMRk5CUVZNc1JVRkJSVHRaUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xTkJRVVU3VVVGRGVFUXNTVUZCU1N4SFFVRkhMRU5CUVVNc1MwRkJTeXhMUVVGSExGTkJRVk1zUlVGQlJ6dFpRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFOQlFVVTdVVUZEZEVRc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeExRVUZITEZOQlFWTXNSVUZCUlR0WlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXp0VFFVRkZPMGxCUXpkRUxFTkJRVU03U1VGcFFrMHNUMEZCVHl4RFFVRkRMRWRCUVU4c1JVRkJSU3hGUVVGRExFdEJRVXNzUjBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4TlFVRk5MRWRCUVVNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUjBGQlF5eEhRVUZITEVOQlFVTXNZVUZCWVN4RlFVRkRMRWRCUVVNc1JVRkJReXhMUVVGTExFVkJRVU1zUTBGQlF5eEZRVUZGTEUxQlFVMHNSVUZCUXl4TFFVRkxMRVZCUVVVc1RVRkJUU3hGUVVGRExFZEJRVWNzUTBGQlF5eGhRVUZoTEVWQlFVTTdVVUZEZUVnc1UwRkJVeXhSUVVGUkxFTkJRVU1zUjBGQlR5eEZRVUZGTEV0QlFWa3NSVUZCUlN4TFFVRlpMRVZCUVVVc1ZVRkJhVUk3V1VGRGNFVXNTVUZCU1N4SFFVRkhMRXRCUVVzc1NVRkJTU3hGUVVGblFqdG5Ra0ZCUlN4UFFVRlBMRTFCUVUwc1EwRkJRenRoUVVGRk8xbEJRMnhFTEVsQlFVa3NSMEZCUnl4TFFVRkxMRk5CUVZNc1JVRkJWenRuUWtGQlJTeFBRVUZQTEZkQlFWY3NRMEZCUXp0aFFVRkZPMWxCUTNaRUxFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NWVUZCVlN4RlFVRkhPMmRDUVVGRkxFOUJRVThzVlVGQlZTeERRVUZETzJGQlFVVTdXVUZEZEVRc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTEVWQlFVczdaMEpCUVVVc1QwRkJUeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETzJGQlFVVTdXVUZEZEVRc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTEVWQlFVczdaMEpCUXpWQ0xFbEJRVWtzUzBGQlN5eEhRVUZETEVOQlFVTXNSVUZCUlR0dlFrRkRWQ3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNTMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNN2FVSkJRM1JFTzJkQ1FVTkVMRWxCUVVrc1IwRkJSeXhEUVVGRExFZEJRVWNzUzBGQlN5eFRRVUZUTEVWQlFVVTdiMEpCUTNaQ0xFOUJRVThzU1VGQlNTeEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJTeXhGUVVGRExFVkJRVVVzUTBGQlFTeERRVUZETEVOQlFVTXNTMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVUVzUlVGQlJTeERRVUZCTEVOQlFVTXNRMEZCUVN4UlFVRlJMRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzUjBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4SFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRE8ybENRVU16Unp0blFrRkRSQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEU5QlFVOHNSVUZCUlN4RlFVRkZMRVZCUVVVc1ZVRkJWU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEdGQlFXRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0blFrRkRMMFlzVDBGQlR5eEpRVUZKTEVWQlFVVXNSVUZCUlN4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVkQlFVY3NRMEZCUXl4SFFVRkhMRTlCUVU4c1MwRkRMMFFzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGTExFZEJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hIUVVGRExFMUJRVTBzUTBGRGVFUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1IwRkJSeXhWUVVGVkxFZEJRVWNzUTBGQlF6dGhRVU01UXp0WlFVTkVMRTlCUVU4c1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlF6RkNMRU5CUVVNN1VVRkRSQ3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZGYWtJc1QwRkJUeXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNTMEZCU3l4TFFVRkhMRk5CUVZNc1NVRkJTU3hMUVVGTExFdEJRVWNzU1VGQlNTeEpRVUZKTEV0QlFVc3NTVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF5OUdMRU5CUVVNN1NVRkZVeXhoUVVGaExFTkJRVU1zVFVGQllTeEZRVUZGTEV0QlFWa3NSVUZCUlN4VlFVRnBRaXhGUVVGRkxFMUJRV1U3VVVGRGJrWXNTVUZCU1N4TlFVRk5MRWRCUVVjc1JVRkJSU3hGUVVGRkxFdEJRVXNzUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOMlF5eEpRVUZKTEUxQlFVMHNSVUZCUlR0WlFVTlNMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVVONFF5eFZRVUZWTEVkQlFVY3NWVUZCVlN4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdXVUZGYUVRc1RVRkJUU3hMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZEY0VZc1RVRkJUU3hIUVVGSkxHMUNRVUZ0UWl4TFFVRkxMRWxCUVVrc1EwRkJRenRaUVVOMlF5eExRVUZMTEVkQlFVc3NZVUZCWVN4RFFVRkRPMWxCUTNoQ0xFVkJRVVVzUjBGQlVTeE5RVUZOTEVOQlFVTTdVMEZEY0VJN1VVRkRSQ3hQUVVGUExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVkQlFVY3NUVUZCVFN4SFFVRkhMRTFCUVUwc1JVRkJSU3hGUVVGRkxFZEJRVWNzUzBGQlN5eEZRVUZGTEVWQlFVVXNUVUZCVFN4RFFVRkJMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRKUVVNNVJpeERRVUZET3p0QlFUVlNaMElzYVVKQlFXRXNSMEZCUnl4RFFVRkRMRlZCUVZVc1JVRkJSU3hYUVVGWExFVkJRVVVzVTBGQlV5eEZRVUZGTEZWQlFWVXNSVUZCUlN4WlFVRlpMRVZCUVVVc1lVRkJZU3hEUVVGRExFTkJRVU03UVVGRk9VWXNhVUpCUVdFc1IwRkJSeXc0UWtGQk9FSXNRMEZCUXp0QlFVTXZReXhqUVVGVkxFZEJRVTBzUjBGQlJ5eERRVUZETEdGQlFXRXNRMEZCUXp0QlFVZHlReXhUUVVGTExFZEJRVWNzVDBGQlR5eERRVUZETzBGQlIyaENMRkZCUVVrc1IwRkJTeXhOUVVGTkxFTkJRVU03UVVGSGFFSXNVVUZCU1N4SFFVRkxMRTFCUVUwc1EwRkJRenRCUVVkb1FpeFRRVUZMTEVkQlFVa3NUMEZCVHl4RFFVRkRPMEZCUjJRc1ZVRkJUU3hIUVVGSE8wbEJRM1JDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGTExFVkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNUMEZCVHl4RlFVRkRPMGxCUXpsRUxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRk5MRVZCUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRWxCUVVrc1JVRkJSeXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZETzBsQlF6ZEVMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZOTEVWQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUnl4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRE8wbEJRemRFTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGTExFVkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNUMEZCVHl4RlFVRkRPME5CUTJwRkxFTkJRVU03UVVGSFdTeFBRVUZITEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGSFppeGxRVUZYTEVkQlFXRXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFZub2RlID0gcmVxdWlyZShcIi4uL3JlbmRlci92bm9kZVwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHJlbmRlciwgc2NoZWR1bGUsIGNvbnNvbGUpIHtcblx0dmFyIHN1YnNjcmlwdGlvbnMgPSBbXVxuXHR2YXIgcmVuZGVyaW5nID0gZmFsc2Vcblx0dmFyIHBlbmRpbmcgPSBmYWxzZVxuXG5cdGZ1bmN0aW9uIHN5bmMoKSB7XG5cdFx0aWYgKHJlbmRlcmluZykgdGhyb3cgbmV3IEVycm9yKFwiTmVzdGVkIG0ucmVkcmF3LnN5bmMoKSBjYWxsXCIpXG5cdFx0cmVuZGVyaW5nID0gdHJ1ZVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaXB0aW9ucy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0dHJ5IHsgcmVuZGVyKHN1YnNjcmlwdGlvbnNbaV0sIFZub2RlKHN1YnNjcmlwdGlvbnNbaSArIDFdKSwgcmVkcmF3KSB9XG5cdFx0XHRjYXRjaCAoZSkgeyBjb25zb2xlLmVycm9yKGUpIH1cblx0XHR9XG5cdFx0cmVuZGVyaW5nID0gZmFsc2Vcblx0fVxuXG5cdGZ1bmN0aW9uIHJlZHJhdygpIHtcblx0XHRpZiAoIXBlbmRpbmcpIHtcblx0XHRcdHBlbmRpbmcgPSB0cnVlXG5cdFx0XHRzY2hlZHVsZShmdW5jdGlvbigpIHtcblx0XHRcdFx0cGVuZGluZyA9IGZhbHNlXG5cdFx0XHRcdHN5bmMoKVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHRyZWRyYXcuc3luYyA9IHN5bmNcblxuXHRmdW5jdGlvbiBtb3VudChyb290LCBjb21wb25lbnQpIHtcblx0XHRpZiAoY29tcG9uZW50ICE9IG51bGwgJiYgY29tcG9uZW50LnZpZXcgPT0gbnVsbCAmJiB0eXBlb2YgY29tcG9uZW50ICE9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJtLm1vdW50KGVsZW1lbnQsIGNvbXBvbmVudCkgZXhwZWN0cyBhIGNvbXBvbmVudCwgbm90IGEgdm5vZGVcIilcblx0XHR9XG5cblx0XHR2YXIgaW5kZXggPSBzdWJzY3JpcHRpb25zLmluZGV4T2Yocm9vdClcblx0XHRpZiAoaW5kZXggPj0gMCkge1xuXHRcdFx0c3Vic2NyaXB0aW9ucy5zcGxpY2UoaW5kZXgsIDIpXG5cdFx0XHRyZW5kZXIocm9vdCwgW10sIHJlZHJhdylcblx0XHR9XG5cblx0XHRpZiAoY29tcG9uZW50ICE9IG51bGwpIHtcblx0XHRcdHN1YnNjcmlwdGlvbnMucHVzaChyb290LCBjb21wb25lbnQpXG5cdFx0XHRyZW5kZXIocm9vdCwgVm5vZGUoY29tcG9uZW50KSwgcmVkcmF3KVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7bW91bnQ6IG1vdW50LCByZWRyYXc6IHJlZHJhd31cbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBWbm9kZSA9IHJlcXVpcmUoXCIuLi9yZW5kZXIvdm5vZGVcIilcbnZhciBtID0gcmVxdWlyZShcIi4uL3JlbmRlci9oeXBlcnNjcmlwdFwiKVxudmFyIFByb21pc2UgPSByZXF1aXJlKFwiLi4vcHJvbWlzZS9wcm9taXNlXCIpXG5cbnZhciBidWlsZFBhdGhuYW1lID0gcmVxdWlyZShcIi4uL3BhdGhuYW1lL2J1aWxkXCIpXG52YXIgcGFyc2VQYXRobmFtZSA9IHJlcXVpcmUoXCIuLi9wYXRobmFtZS9wYXJzZVwiKVxudmFyIGNvbXBpbGVUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuLi9wYXRobmFtZS9jb21waWxlVGVtcGxhdGVcIilcbnZhciBhc3NpZ24gPSByZXF1aXJlKFwiLi4vcGF0aG5hbWUvYXNzaWduXCIpXG5cbnZhciBzZW50aW5lbCA9IHt9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJHdpbmRvdywgbW91bnRSZWRyYXcpIHtcblx0dmFyIGZpcmVBc3luY1xuXG5cdGZ1bmN0aW9uIHNldFBhdGgocGF0aCwgZGF0YSwgb3B0aW9ucykge1xuXHRcdHBhdGggPSBidWlsZFBhdGhuYW1lKHBhdGgsIGRhdGEpXG5cdFx0aWYgKGZpcmVBc3luYyAhPSBudWxsKSB7XG5cdFx0XHRmaXJlQXN5bmMoKVxuXHRcdFx0dmFyIHN0YXRlID0gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdGUgOiBudWxsXG5cdFx0XHR2YXIgdGl0bGUgPSBvcHRpb25zID8gb3B0aW9ucy50aXRsZSA6IG51bGxcblx0XHRcdGlmIChvcHRpb25zICYmIG9wdGlvbnMucmVwbGFjZSkgJHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShzdGF0ZSwgdGl0bGUsIHJvdXRlLnByZWZpeCArIHBhdGgpXG5cdFx0XHRlbHNlICR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUsIHRpdGxlLCByb3V0ZS5wcmVmaXggKyBwYXRoKVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdCR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJvdXRlLnByZWZpeCArIHBhdGhcblx0XHR9XG5cdH1cblxuXHR2YXIgY3VycmVudFJlc29sdmVyID0gc2VudGluZWwsIGNvbXBvbmVudCwgYXR0cnMsIGN1cnJlbnRQYXRoLCBsYXN0VXBkYXRlXG5cblx0dmFyIFNLSVAgPSByb3V0ZS5TS0lQID0ge31cblxuXHRmdW5jdGlvbiByb3V0ZShyb290LCBkZWZhdWx0Um91dGUsIHJvdXRlcykge1xuXHRcdGlmIChyb290ID09IG51bGwpIHRocm93IG5ldyBFcnJvcihcIkVuc3VyZSB0aGUgRE9NIGVsZW1lbnQgdGhhdCB3YXMgcGFzc2VkIHRvIGBtLnJvdXRlYCBpcyBub3QgdW5kZWZpbmVkXCIpXG5cdFx0Ly8gMCA9IHN0YXJ0XG5cdFx0Ly8gMSA9IGluaXRcblx0XHQvLyAyID0gcmVhZHlcblx0XHR2YXIgc3RhdGUgPSAwXG5cblx0XHR2YXIgY29tcGlsZWQgPSBPYmplY3Qua2V5cyhyb3V0ZXMpLm1hcChmdW5jdGlvbihyb3V0ZSkge1xuXHRcdFx0aWYgKHJvdXRlWzBdICE9PSBcIi9cIikgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiUm91dGVzIG11c3Qgc3RhcnQgd2l0aCBhIGAvYFwiKVxuXHRcdFx0aWYgKCgvOihbXlxcL1xcLi1dKykoXFwuezN9KT86LykudGVzdChyb3V0ZSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFN5bnRheEVycm9yKFwiUm91dGUgcGFyYW1ldGVyIG5hbWVzIG11c3QgYmUgc2VwYXJhdGVkIHdpdGggZWl0aGVyIGAvYCwgYC5gLCBvciBgLWBcIilcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHJvdXRlOiByb3V0ZSxcblx0XHRcdFx0Y29tcG9uZW50OiByb3V0ZXNbcm91dGVdLFxuXHRcdFx0XHRjaGVjazogY29tcGlsZVRlbXBsYXRlKHJvdXRlKSxcblx0XHRcdH1cblx0XHR9KVxuXHRcdHZhciBjYWxsQXN5bmMgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIgPyBzZXRJbW1lZGlhdGUgOiBzZXRUaW1lb3V0XG5cdFx0dmFyIHAgPSBQcm9taXNlLnJlc29sdmUoKVxuXHRcdHZhciBzY2hlZHVsZWQgPSBmYWxzZVxuXHRcdHZhciBvbnJlbW92ZVxuXG5cdFx0ZmlyZUFzeW5jID0gbnVsbFxuXG5cdFx0aWYgKGRlZmF1bHRSb3V0ZSAhPSBudWxsKSB7XG5cdFx0XHR2YXIgZGVmYXVsdERhdGEgPSBwYXJzZVBhdGhuYW1lKGRlZmF1bHRSb3V0ZSlcblxuXHRcdFx0aWYgKCFjb21waWxlZC5zb21lKGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLmNoZWNrKGRlZmF1bHREYXRhKSB9KSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJEZWZhdWx0IHJvdXRlIGRvZXNuJ3QgbWF0Y2ggYW55IGtub3duIHJvdXRlc1wiKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJlc29sdmVSb3V0ZSgpIHtcblx0XHRcdHNjaGVkdWxlZCA9IGZhbHNlXG5cdFx0XHQvLyBDb25zaWRlciB0aGUgcGF0aG5hbWUgaG9saXN0aWNhbGx5LiBUaGUgcHJlZml4IG1pZ2h0IGV2ZW4gYmUgaW52YWxpZCxcblx0XHRcdC8vIGJ1dCB0aGF0J3Mgbm90IG91ciBwcm9ibGVtLlxuXHRcdFx0dmFyIHByZWZpeCA9ICR3aW5kb3cubG9jYXRpb24uaGFzaFxuXHRcdFx0aWYgKHJvdXRlLnByZWZpeFswXSAhPT0gXCIjXCIpIHtcblx0XHRcdFx0cHJlZml4ID0gJHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyBwcmVmaXhcblx0XHRcdFx0aWYgKHJvdXRlLnByZWZpeFswXSAhPT0gXCI/XCIpIHtcblx0XHRcdFx0XHRwcmVmaXggPSAkd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgcHJlZml4XG5cdFx0XHRcdFx0aWYgKHByZWZpeFswXSAhPT0gXCIvXCIpIHByZWZpeCA9IFwiL1wiICsgcHJlZml4XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIFRoaXMgc2VlbWluZ2x5IHVzZWxlc3MgYC5jb25jYXQoKWAgc3BlZWRzIHVwIHRoZSB0ZXN0cyBxdWl0ZSBhIGJpdCxcblx0XHRcdC8vIHNpbmNlIHRoZSByZXByZXNlbnRhdGlvbiBpcyBjb25zaXN0ZW50bHkgYSByZWxhdGl2ZWx5IHBvb3JseVxuXHRcdFx0Ly8gb3B0aW1pemVkIGNvbnMgc3RyaW5nLlxuXHRcdFx0dmFyIHBhdGggPSBwcmVmaXguY29uY2F0KClcblx0XHRcdFx0LnJlcGxhY2UoLyg/OiVbYS1mODldW2EtZjAtOV0pKy9naW0sIGRlY29kZVVSSUNvbXBvbmVudClcblx0XHRcdFx0LnNsaWNlKHJvdXRlLnByZWZpeC5sZW5ndGgpXG5cdFx0XHR2YXIgZGF0YSA9IHBhcnNlUGF0aG5hbWUocGF0aClcblxuXHRcdFx0YXNzaWduKGRhdGEucGFyYW1zLCAkd2luZG93Lmhpc3Rvcnkuc3RhdGUpXG5cblx0XHRcdGZ1bmN0aW9uIGZhaWwoKSB7XG5cdFx0XHRcdGlmIChwYXRoID09PSBkZWZhdWx0Um91dGUpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCByZXNvbHZlIGRlZmF1bHQgcm91dGUgXCIgKyBkZWZhdWx0Um91dGUpXG5cdFx0XHRcdHNldFBhdGgoZGVmYXVsdFJvdXRlLCBudWxsLCB7cmVwbGFjZTogdHJ1ZX0pXG5cdFx0XHR9XG5cblx0XHRcdGxvb3AoMClcblx0XHRcdGZ1bmN0aW9uIGxvb3AoaSkge1xuXHRcdFx0XHQvLyAwID0gaW5pdFxuXHRcdFx0XHQvLyAxID0gc2NoZWR1bGVkXG5cdFx0XHRcdC8vIDIgPSBkb25lXG5cdFx0XHRcdGZvciAoOyBpIDwgY29tcGlsZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoY29tcGlsZWRbaV0uY2hlY2soZGF0YSkpIHtcblx0XHRcdFx0XHRcdHZhciBwYXlsb2FkID0gY29tcGlsZWRbaV0uY29tcG9uZW50XG5cdFx0XHRcdFx0XHR2YXIgbWF0Y2hlZFJvdXRlID0gY29tcGlsZWRbaV0ucm91dGVcblx0XHRcdFx0XHRcdHZhciBsb2NhbENvbXAgPSBwYXlsb2FkXG5cdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gbGFzdFVwZGF0ZSA9IGZ1bmN0aW9uKGNvbXApIHtcblx0XHRcdFx0XHRcdFx0aWYgKHVwZGF0ZSAhPT0gbGFzdFVwZGF0ZSkgcmV0dXJuXG5cdFx0XHRcdFx0XHRcdGlmIChjb21wID09PSBTS0lQKSByZXR1cm4gbG9vcChpICsgMSlcblx0XHRcdFx0XHRcdFx0Y29tcG9uZW50ID0gY29tcCAhPSBudWxsICYmICh0eXBlb2YgY29tcC52aWV3ID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIGNvbXAgPT09IFwiZnVuY3Rpb25cIik/IGNvbXAgOiBcImRpdlwiXG5cdFx0XHRcdFx0XHRcdGF0dHJzID0gZGF0YS5wYXJhbXMsIGN1cnJlbnRQYXRoID0gcGF0aCwgbGFzdFVwZGF0ZSA9IG51bGxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFJlc29sdmVyID0gcGF5bG9hZC5yZW5kZXIgPyBwYXlsb2FkIDogbnVsbFxuXHRcdFx0XHRcdFx0XHRpZiAoc3RhdGUgPT09IDIpIG1vdW50UmVkcmF3LnJlZHJhdygpXG5cdFx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHN0YXRlID0gMlxuXHRcdFx0XHRcdFx0XHRcdG1vdW50UmVkcmF3LnJlZHJhdy5zeW5jKClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gVGhlcmUncyBubyB1bmRlcnN0YXRpbmcgaG93IG11Y2ggSSAqd2lzaCogSSBjb3VsZFxuXHRcdFx0XHRcdFx0Ly8gdXNlIGBhc3luY2AvYGF3YWl0YCBoZXJlLi4uXG5cdFx0XHRcdFx0XHRpZiAocGF5bG9hZC52aWV3IHx8IHR5cGVvZiBwYXlsb2FkID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0cGF5bG9hZCA9IHt9XG5cdFx0XHRcdFx0XHRcdHVwZGF0ZShsb2NhbENvbXApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGlmIChwYXlsb2FkLm9ubWF0Y2gpIHtcblx0XHRcdFx0XHRcdFx0cC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcGF5bG9hZC5vbm1hdGNoKGRhdGEucGFyYW1zLCBwYXRoLCBtYXRjaGVkUm91dGUpXG5cdFx0XHRcdFx0XHRcdH0pLnRoZW4odXBkYXRlLCBmYWlsKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSB1cGRhdGUoXCJkaXZcIilcblx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRmYWlsKClcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBTZXQgaXQgdW5jb25kaXRpb25hbGx5IHNvIGBtLnJvdXRlLnNldGAgYW5kIGBtLnJvdXRlLkxpbmtgIGJvdGggd29yayxcblx0XHQvLyBldmVuIGlmIG5laXRoZXIgYHB1c2hTdGF0ZWAgbm9yIGBoYXNoY2hhbmdlYCBhcmUgc3VwcG9ydGVkLiBJdCdzXG5cdFx0Ly8gY2xlYXJlZCBpZiBgaGFzaGNoYW5nZWAgaXMgdXNlZCwgc2luY2UgdGhhdCBtYWtlcyBpdCBhdXRvbWF0aWNhbGx5XG5cdFx0Ly8gYXN5bmMuXG5cdFx0ZmlyZUFzeW5jID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIXNjaGVkdWxlZCkge1xuXHRcdFx0XHRzY2hlZHVsZWQgPSB0cnVlXG5cdFx0XHRcdGNhbGxBc3luYyhyZXNvbHZlUm91dGUpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiAkd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdG9ucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIGZpcmVBc3luYywgZmFsc2UpXG5cdFx0XHR9XG5cdFx0XHQkd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBmaXJlQXN5bmMsIGZhbHNlKVxuXHRcdH0gZWxzZSBpZiAocm91dGUucHJlZml4WzBdID09PSBcIiNcIikge1xuXHRcdFx0ZmlyZUFzeW5jID0gbnVsbFxuXHRcdFx0b25yZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0JHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCByZXNvbHZlUm91dGUsIGZhbHNlKVxuXHRcdFx0fVxuXHRcdFx0JHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCByZXNvbHZlUm91dGUsIGZhbHNlKVxuXHRcdH1cblxuXHRcdHJldHVybiBtb3VudFJlZHJhdy5tb3VudChyb290LCB7XG5cdFx0XHRvbmJlZm9yZXVwZGF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHN0YXRlID0gc3RhdGUgPyAyIDogMVxuXHRcdFx0XHRyZXR1cm4gISghc3RhdGUgfHwgc2VudGluZWwgPT09IGN1cnJlbnRSZXNvbHZlcilcblx0XHRcdH0sXG5cdFx0XHRvbmNyZWF0ZTogcmVzb2x2ZVJvdXRlLFxuXHRcdFx0b25yZW1vdmU6IG9ucmVtb3ZlLFxuXHRcdFx0dmlldzogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICghc3RhdGUgfHwgc2VudGluZWwgPT09IGN1cnJlbnRSZXNvbHZlcikgcmV0dXJuXG5cdFx0XHRcdC8vIFdyYXAgaW4gYSBmcmFnbWVudCB0byBwcmVzZXJ2ZSBleGlzdGluZyBrZXkgc2VtYW50aWNzXG5cdFx0XHRcdHZhciB2bm9kZSA9IFtWbm9kZShjb21wb25lbnQsIGF0dHJzLmtleSwgYXR0cnMpXVxuXHRcdFx0XHRpZiAoY3VycmVudFJlc29sdmVyKSB2bm9kZSA9IGN1cnJlbnRSZXNvbHZlci5yZW5kZXIodm5vZGVbMF0pXG5cdFx0XHRcdHJldHVybiB2bm9kZVxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cdHJvdXRlLnNldCA9IGZ1bmN0aW9uKHBhdGgsIGRhdGEsIG9wdGlvbnMpIHtcblx0XHRpZiAobGFzdFVwZGF0ZSAhPSBudWxsKSB7XG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXHRcdFx0b3B0aW9ucy5yZXBsYWNlID0gdHJ1ZVxuXHRcdH1cblx0XHRsYXN0VXBkYXRlID0gbnVsbFxuXHRcdHNldFBhdGgocGF0aCwgZGF0YSwgb3B0aW9ucylcblx0fVxuXHRyb3V0ZS5nZXQgPSBmdW5jdGlvbigpIHtyZXR1cm4gY3VycmVudFBhdGh9XG5cdHJvdXRlLnByZWZpeCA9IFwiIyFcIlxuXHRyb3V0ZS5MaW5rID0ge1xuXHRcdHZpZXc6IGZ1bmN0aW9uKHZub2RlKSB7XG5cdFx0XHR2YXIgb3B0aW9ucyA9IHZub2RlLmF0dHJzLm9wdGlvbnNcblx0XHRcdC8vIFJlbW92ZSB0aGVzZSBzbyB0aGV5IGRvbid0IGdldCBvdmVyd3JpdHRlblxuXHRcdFx0dmFyIGF0dHJzID0ge30sIG9uY2xpY2ssIGhyZWZcblx0XHRcdGFzc2lnbihhdHRycywgdm5vZGUuYXR0cnMpXG5cdFx0XHQvLyBUaGUgZmlyc3QgdHdvIGFyZSBpbnRlcm5hbCwgYnV0IHRoZSByZXN0IGFyZSBtYWdpYyBhdHRyaWJ1dGVzXG5cdFx0XHQvLyB0aGF0IG5lZWQgY2Vuc29yZWQgdG8gbm90IHNjcmV3IHVwIHJlbmRlcmluZy5cblx0XHRcdGF0dHJzLnNlbGVjdG9yID0gYXR0cnMub3B0aW9ucyA9IGF0dHJzLmtleSA9IGF0dHJzLm9uaW5pdCA9XG5cdFx0XHRhdHRycy5vbmNyZWF0ZSA9IGF0dHJzLm9uYmVmb3JldXBkYXRlID0gYXR0cnMub251cGRhdGUgPVxuXHRcdFx0YXR0cnMub25iZWZvcmVyZW1vdmUgPSBhdHRycy5vbnJlbW92ZSA9IG51bGxcblxuXHRcdFx0Ly8gRG8gdGhpcyBub3cgc28gd2UgY2FuIGdldCB0aGUgbW9zdCBjdXJyZW50IGBocmVmYCBhbmQgYGRpc2FibGVkYC5cblx0XHRcdC8vIFRob3NlIGF0dHJpYnV0ZXMgbWF5IGFsc28gYmUgc3BlY2lmaWVkIGluIHRoZSBzZWxlY3RvciwgYW5kIHdlXG5cdFx0XHQvLyBzaG91bGQgaG9ub3IgdGhhdC5cblx0XHRcdHZhciBjaGlsZCA9IG0odm5vZGUuYXR0cnMuc2VsZWN0b3IgfHwgXCJhXCIsIGF0dHJzLCB2bm9kZS5jaGlsZHJlbilcblxuXHRcdFx0Ly8gTGV0J3MgcHJvdmlkZSBhICpyaWdodCogd2F5IHRvIGRpc2FibGUgYSByb3V0ZSBsaW5rLCByYXRoZXIgdGhhblxuXHRcdFx0Ly8gbGV0dGluZyBwZW9wbGUgc2NyZXcgdXAgYWNjZXNzaWJpbGl0eSBvbiBhY2NpZGVudC5cblx0XHRcdC8vXG5cdFx0XHQvLyBUaGUgYXR0cmlidXRlIGlzIGNvZXJjZWQgc28gdXNlcnMgZG9uJ3QgZ2V0IHN1cnByaXNlZCBvdmVyXG5cdFx0XHQvLyBgZGlzYWJsZWQ6IDBgIHJlc3VsdGluZyBpbiBhIGJ1dHRvbiB0aGF0J3Mgc29tZWhvdyByb3V0YWJsZVxuXHRcdFx0Ly8gZGVzcGl0ZSBiZWluZyB2aXNpYmx5IGRpc2FibGVkLlxuXHRcdFx0aWYgKGNoaWxkLmF0dHJzLmRpc2FibGVkID0gQm9vbGVhbihjaGlsZC5hdHRycy5kaXNhYmxlZCkpIHtcblx0XHRcdFx0Y2hpbGQuYXR0cnMuaHJlZiA9IG51bGxcblx0XHRcdFx0Y2hpbGQuYXR0cnNbXCJhcmlhLWRpc2FibGVkXCJdID0gXCJ0cnVlXCJcblx0XHRcdFx0Ly8gSWYgeW91ICpyZWFsbHkqIGRvIHdhbnQgdG8gZG8gdGhpcyBvbiBhIGRpc2FibGVkIGxpbmssIHVzZVxuXHRcdFx0XHQvLyBhbiBgb25jcmVhdGVgIGhvb2sgdG8gYWRkIGl0LlxuXHRcdFx0XHRjaGlsZC5hdHRycy5vbmNsaWNrID0gbnVsbFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b25jbGljayA9IGNoaWxkLmF0dHJzLm9uY2xpY2tcblx0XHRcdFx0aHJlZiA9IGNoaWxkLmF0dHJzLmhyZWZcblx0XHRcdFx0Y2hpbGQuYXR0cnMuaHJlZiA9IHJvdXRlLnByZWZpeCArIGhyZWZcblx0XHRcdFx0Y2hpbGQuYXR0cnMub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHR2YXIgcmVzdWx0XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBvbmNsaWNrID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IG9uY2xpY2suY2FsbChlLmN1cnJlbnRUYXJnZXQsIGUpXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChvbmNsaWNrID09IG51bGwgfHwgdHlwZW9mIG9uY2xpY2sgIT09IFwib2JqZWN0XCIpIHtcblx0XHRcdFx0XHRcdC8vIGRvIG5vdGhpbmdcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBvbmNsaWNrLmhhbmRsZUV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdG9uY2xpY2suaGFuZGxlRXZlbnQoZSlcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBBZGFwdGVkIGZyb20gUmVhY3QgUm91dGVyJ3MgaW1wbGVtZW50YXRpb246XG5cdFx0XHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0VHJhaW5pbmcvcmVhY3Qtcm91dGVyL2Jsb2IvNTIwYTBhY2Q0OGFlMWIwNjZlYjBiMDdkNmQ0ZDE3OTBhMWQwMjQ4Mi9wYWNrYWdlcy9yZWFjdC1yb3V0ZXItZG9tL21vZHVsZXMvTGluay5qc1xuXHRcdFx0XHRcdC8vXG5cdFx0XHRcdFx0Ly8gVHJ5IHRvIGJlIGZsZXhpYmxlIGFuZCBpbnR1aXRpdmUgaW4gaG93IHdlIGhhbmRsZSBsaW5rcy5cblx0XHRcdFx0XHQvLyBGdW4gZmFjdDogbGlua3MgYXJlbid0IGFzIG9idmlvdXMgdG8gZ2V0IHJpZ2h0IGFzIHlvdVxuXHRcdFx0XHRcdC8vIHdvdWxkIGV4cGVjdC4gVGhlcmUncyBhIGxvdCBtb3JlIHZhbGlkIHdheXMgdG8gY2xpY2sgYVxuXHRcdFx0XHRcdC8vIGxpbmsgdGhhbiB0aGlzLCBhbmQgb25lIG1pZ2h0IHdhbnQgdG8gbm90IHNpbXBseSBjbGljayBhXG5cdFx0XHRcdFx0Ly8gbGluaywgYnV0IHJpZ2h0IGNsaWNrIG9yIGNvbW1hbmQtY2xpY2sgaXQgdG8gY29weSB0aGVcblx0XHRcdFx0XHQvLyBsaW5rIHRhcmdldCwgZXRjLiBOb3BlLCB0aGlzIGlzbid0IGp1c3QgZm9yIGJsaW5kIHBlb3BsZS5cblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHQvLyBTa2lwIGlmIGBvbmNsaWNrYCBwcmV2ZW50ZWQgZGVmYXVsdFxuXHRcdFx0XHRcdFx0cmVzdWx0ICE9PSBmYWxzZSAmJiAhZS5kZWZhdWx0UHJldmVudGVkICYmXG5cdFx0XHRcdFx0XHQvLyBJZ25vcmUgZXZlcnl0aGluZyBidXQgbGVmdCBjbGlja3Ncblx0XHRcdFx0XHRcdChlLmJ1dHRvbiA9PT0gMCB8fCBlLndoaWNoID09PSAwIHx8IGUud2hpY2ggPT09IDEpICYmXG5cdFx0XHRcdFx0XHQvLyBMZXQgdGhlIGJyb3dzZXIgaGFuZGxlIGB0YXJnZXQ9X2JsYW5rYCwgZXRjLlxuXHRcdFx0XHRcdFx0KCFlLmN1cnJlbnRUYXJnZXQudGFyZ2V0IHx8IGUuY3VycmVudFRhcmdldC50YXJnZXQgPT09IFwiX3NlbGZcIikgJiZcblx0XHRcdFx0XHRcdC8vIE5vIG1vZGlmaWVyIGtleXNcblx0XHRcdFx0XHRcdCFlLmN0cmxLZXkgJiYgIWUubWV0YUtleSAmJiAhZS5zaGlmdEtleSAmJiAhZS5hbHRLZXlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRcdFx0ZS5yZWRyYXcgPSBmYWxzZVxuXHRcdFx0XHRcdFx0cm91dGUuc2V0KGhyZWYsIG51bGwsIG9wdGlvbnMpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2hpbGRcblx0XHR9LFxuXHR9XG5cdHJvdXRlLnBhcmFtID0gZnVuY3Rpb24oa2V5KSB7XG5cdFx0cmV0dXJuIGF0dHJzICYmIGtleSAhPSBudWxsID8gYXR0cnNba2V5XSA6IGF0dHJzXG5cdH1cblxuXHRyZXR1cm4gcm91dGVcbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBoeXBlcnNjcmlwdCA9IHJlcXVpcmUoXCIuL3JlbmRlci9oeXBlcnNjcmlwdFwiKVxuXG5oeXBlcnNjcmlwdC50cnVzdCA9IHJlcXVpcmUoXCIuL3JlbmRlci90cnVzdFwiKVxuaHlwZXJzY3JpcHQuZnJhZ21lbnQgPSByZXF1aXJlKFwiLi9yZW5kZXIvZnJhZ21lbnRcIilcblxubW9kdWxlLmV4cG9ydHMgPSBoeXBlcnNjcmlwdFxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIGh5cGVyc2NyaXB0ID0gcmVxdWlyZShcIi4vaHlwZXJzY3JpcHRcIilcbnZhciByZXF1ZXN0ID0gcmVxdWlyZShcIi4vcmVxdWVzdFwiKVxudmFyIG1vdW50UmVkcmF3ID0gcmVxdWlyZShcIi4vbW91bnQtcmVkcmF3XCIpXG5cbnZhciBtID0gZnVuY3Rpb24gbSgpIHsgcmV0dXJuIGh5cGVyc2NyaXB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfVxubS5tID0gaHlwZXJzY3JpcHRcbm0udHJ1c3QgPSBoeXBlcnNjcmlwdC50cnVzdFxubS5mcmFnbWVudCA9IGh5cGVyc2NyaXB0LmZyYWdtZW50XG5tLm1vdW50ID0gbW91bnRSZWRyYXcubW91bnRcbm0ucm91dGUgPSByZXF1aXJlKFwiLi9yb3V0ZVwiKVxubS5yZW5kZXIgPSByZXF1aXJlKFwiLi9yZW5kZXJcIilcbm0ucmVkcmF3ID0gbW91bnRSZWRyYXcucmVkcmF3XG5tLnJlcXVlc3QgPSByZXF1ZXN0LnJlcXVlc3Rcbm0uanNvbnAgPSByZXF1ZXN0Lmpzb25wXG5tLnBhcnNlUXVlcnlTdHJpbmcgPSByZXF1aXJlKFwiLi9xdWVyeXN0cmluZy9wYXJzZVwiKVxubS5idWlsZFF1ZXJ5U3RyaW5nID0gcmVxdWlyZShcIi4vcXVlcnlzdHJpbmcvYnVpbGRcIilcbm0ucGFyc2VQYXRobmFtZSA9IHJlcXVpcmUoXCIuL3BhdGhuYW1lL3BhcnNlXCIpXG5tLmJ1aWxkUGF0aG5hbWUgPSByZXF1aXJlKFwiLi9wYXRobmFtZS9idWlsZFwiKVxubS52bm9kZSA9IHJlcXVpcmUoXCIuL3JlbmRlci92bm9kZVwiKVxubS5Qcm9taXNlUG9seWZpbGwgPSByZXF1aXJlKFwiLi9wcm9taXNlL3BvbHlmaWxsXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gbVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIHJlbmRlciA9IHJlcXVpcmUoXCIuL3JlbmRlclwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2FwaS9tb3VudC1yZWRyYXdcIikocmVuZGVyLCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIGNvbnNvbGUpXG4iLCJcInVzZSBzdHJpY3RcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odGFyZ2V0LCBzb3VyY2UpIHtcblx0aWYoc291cmNlKSBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV0gfSlcbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBidWlsZFF1ZXJ5U3RyaW5nID0gcmVxdWlyZShcIi4uL3F1ZXJ5c3RyaW5nL2J1aWxkXCIpXG52YXIgYXNzaWduID0gcmVxdWlyZShcIi4vYXNzaWduXCIpXG5cbi8vIFJldHVybnMgYHBhdGhgIGZyb20gYHRlbXBsYXRlYCArIGBwYXJhbXNgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRlbXBsYXRlLCBwYXJhbXMpIHtcblx0aWYgKCgvOihbXlxcL1xcLi1dKykoXFwuezN9KT86LykudGVzdCh0ZW1wbGF0ZSkpIHtcblx0XHR0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJUZW1wbGF0ZSBwYXJhbWV0ZXIgbmFtZXMgKm11c3QqIGJlIHNlcGFyYXRlZFwiKVxuXHR9XG5cdGlmIChwYXJhbXMgPT0gbnVsbCkgcmV0dXJuIHRlbXBsYXRlXG5cdHZhciBxdWVyeUluZGV4ID0gdGVtcGxhdGUuaW5kZXhPZihcIj9cIilcblx0dmFyIGhhc2hJbmRleCA9IHRlbXBsYXRlLmluZGV4T2YoXCIjXCIpXG5cdHZhciBxdWVyeUVuZCA9IGhhc2hJbmRleCA8IDAgPyB0ZW1wbGF0ZS5sZW5ndGggOiBoYXNoSW5kZXhcblx0dmFyIHBhdGhFbmQgPSBxdWVyeUluZGV4IDwgMCA/IHF1ZXJ5RW5kIDogcXVlcnlJbmRleFxuXHR2YXIgcGF0aCA9IHRlbXBsYXRlLnNsaWNlKDAsIHBhdGhFbmQpXG5cdHZhciBxdWVyeSA9IHt9XG5cblx0YXNzaWduKHF1ZXJ5LCBwYXJhbXMpXG5cblx0dmFyIHJlc29sdmVkID0gcGF0aC5yZXBsYWNlKC86KFteXFwvXFwuLV0rKShcXC57M30pPy9nLCBmdW5jdGlvbihtLCBrZXksIHZhcmlhZGljKSB7XG5cdFx0ZGVsZXRlIHF1ZXJ5W2tleV1cblx0XHQvLyBJZiBubyBzdWNoIHBhcmFtZXRlciBleGlzdHMsIGRvbid0IGludGVycG9sYXRlIGl0LlxuXHRcdGlmIChwYXJhbXNba2V5XSA9PSBudWxsKSByZXR1cm4gbVxuXHRcdC8vIEVzY2FwZSBub3JtYWwgcGFyYW1ldGVycywgYnV0IG5vdCB2YXJpYWRpYyBvbmVzLlxuXHRcdHJldHVybiB2YXJpYWRpYyA/IHBhcmFtc1trZXldIDogZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhwYXJhbXNba2V5XSkpXG5cdH0pXG5cblx0Ly8gSW4gY2FzZSB0aGUgdGVtcGxhdGUgc3Vic3RpdHV0aW9uIGFkZHMgbmV3IHF1ZXJ5L2hhc2ggcGFyYW1ldGVycy5cblx0dmFyIG5ld1F1ZXJ5SW5kZXggPSByZXNvbHZlZC5pbmRleE9mKFwiP1wiKVxuXHR2YXIgbmV3SGFzaEluZGV4ID0gcmVzb2x2ZWQuaW5kZXhPZihcIiNcIilcblx0dmFyIG5ld1F1ZXJ5RW5kID0gbmV3SGFzaEluZGV4IDwgMCA/IHJlc29sdmVkLmxlbmd0aCA6IG5ld0hhc2hJbmRleFxuXHR2YXIgbmV3UGF0aEVuZCA9IG5ld1F1ZXJ5SW5kZXggPCAwID8gbmV3UXVlcnlFbmQgOiBuZXdRdWVyeUluZGV4XG5cdHZhciByZXN1bHQgPSByZXNvbHZlZC5zbGljZSgwLCBuZXdQYXRoRW5kKVxuXG5cdGlmIChxdWVyeUluZGV4ID49IDApIHJlc3VsdCArPSB0ZW1wbGF0ZS5zbGljZShxdWVyeUluZGV4LCBxdWVyeUVuZClcblx0aWYgKG5ld1F1ZXJ5SW5kZXggPj0gMCkgcmVzdWx0ICs9IChxdWVyeUluZGV4IDwgMCA/IFwiP1wiIDogXCImXCIpICsgcmVzb2x2ZWQuc2xpY2UobmV3UXVlcnlJbmRleCwgbmV3UXVlcnlFbmQpXG5cdHZhciBxdWVyeXN0cmluZyA9IGJ1aWxkUXVlcnlTdHJpbmcocXVlcnkpXG5cdGlmIChxdWVyeXN0cmluZykgcmVzdWx0ICs9IChxdWVyeUluZGV4IDwgMCAmJiBuZXdRdWVyeUluZGV4IDwgMCA/IFwiP1wiIDogXCImXCIpICsgcXVlcnlzdHJpbmdcblx0aWYgKGhhc2hJbmRleCA+PSAwKSByZXN1bHQgKz0gdGVtcGxhdGUuc2xpY2UoaGFzaEluZGV4KVxuXHRpZiAobmV3SGFzaEluZGV4ID49IDApIHJlc3VsdCArPSAoaGFzaEluZGV4IDwgMCA/IFwiXCIgOiBcIiZcIikgKyByZXNvbHZlZC5zbGljZShuZXdIYXNoSW5kZXgpXG5cdHJldHVybiByZXN1bHRcbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBwYXJzZVBhdGhuYW1lID0gcmVxdWlyZShcIi4vcGFyc2VcIilcblxuLy8gQ29tcGlsZXMgYSB0ZW1wbGF0ZSBpbnRvIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHJlc29sdmVkIHBhdGggKHdpdGhvdXQgcXVlcnlcbi8vIHN0cmluZ3MpIGFuZCByZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSB0ZW1wbGF0ZSBwYXJhbWV0ZXJzIHdpdGggdGhlaXJcbi8vIHBhcnNlZCB2YWx1ZXMuIFRoaXMgZXhwZWN0cyB0aGUgaW5wdXQgb2YgdGhlIGNvbXBpbGVkIHRlbXBsYXRlIHRvIGJlIHRoZVxuLy8gb3V0cHV0IG9mIGBwYXJzZVBhdGhuYW1lYC4gTm90ZSB0aGF0IGl0IGRvZXMgKm5vdCogcmVtb3ZlIHF1ZXJ5IHBhcmFtZXRlcnNcbi8vIHNwZWNpZmllZCBpbiB0aGUgdGVtcGxhdGUuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRlbXBsYXRlKSB7XG5cdHZhciB0ZW1wbGF0ZURhdGEgPSBwYXJzZVBhdGhuYW1lKHRlbXBsYXRlKVxuXHR2YXIgdGVtcGxhdGVLZXlzID0gT2JqZWN0LmtleXModGVtcGxhdGVEYXRhLnBhcmFtcylcblx0dmFyIGtleXMgPSBbXVxuXHR2YXIgcmVnZXhwID0gbmV3IFJlZ0V4cChcIl5cIiArIHRlbXBsYXRlRGF0YS5wYXRoLnJlcGxhY2UoXG5cdFx0Ly8gSSBlc2NhcGUgbGl0ZXJhbCB0ZXh0IHNvIHBlb3BsZSBjYW4gdXNlIHRoaW5ncyBsaWtlIGA6ZmlsZS46ZXh0YCBvclxuXHRcdC8vIGA6bGFuZy06bG9jYWxlYCBpbiByb3V0ZXMuIFRoaXMgaXMgYWxsIG1lcmdlZCBpbnRvIG9uZSBwYXNzIHNvIElcblx0XHQvLyBkb24ndCBhbHNvIGFjY2lkZW50YWxseSBlc2NhcGUgYC1gIGFuZCBtYWtlIGl0IGhhcmRlciB0byBkZXRlY3QgaXQgdG9cblx0XHQvLyBiYW4gaXQgZnJvbSB0ZW1wbGF0ZSBwYXJhbWV0ZXJzLlxuXHRcdC86KFteXFwvLi1dKykoXFwuezN9fFxcLig/IVxcLil8LSk/fFtcXFxcXiQqKy4oKXxcXFtcXF17fV0vZyxcblx0XHRmdW5jdGlvbihtLCBrZXksIGV4dHJhKSB7XG5cdFx0XHRpZiAoa2V5ID09IG51bGwpIHJldHVybiBcIlxcXFxcIiArIG1cblx0XHRcdGtleXMucHVzaCh7azoga2V5LCByOiBleHRyYSA9PT0gXCIuLi5cIn0pXG5cdFx0XHRpZiAoZXh0cmEgPT09IFwiLi4uXCIpIHJldHVybiBcIiguKilcIlxuXHRcdFx0aWYgKGV4dHJhID09PSBcIi5cIikgcmV0dXJuIFwiKFteL10rKVxcXFwuXCJcblx0XHRcdHJldHVybiBcIihbXi9dKylcIiArIChleHRyYSB8fCBcIlwiKVxuXHRcdH1cblx0KSArIFwiJFwiKVxuXHRyZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuXHRcdC8vIEZpcnN0LCBjaGVjayB0aGUgcGFyYW1zLiBVc3VhbGx5LCB0aGVyZSBpc24ndCBhbnksIGFuZCBpdCdzIGp1c3Rcblx0XHQvLyBjaGVja2luZyBhIHN0YXRpYyBzZXQuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wbGF0ZUtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh0ZW1wbGF0ZURhdGEucGFyYW1zW3RlbXBsYXRlS2V5c1tpXV0gIT09IGRhdGEucGFyYW1zW3RlbXBsYXRlS2V5c1tpXV0pIHJldHVybiBmYWxzZVxuXHRcdH1cblx0XHQvLyBJZiBubyBpbnRlcnBvbGF0aW9ucyBleGlzdCwgbGV0J3Mgc2tpcCBhbGwgdGhlIGNlcmVtb255XG5cdFx0aWYgKCFrZXlzLmxlbmd0aCkgcmV0dXJuIHJlZ2V4cC50ZXN0KGRhdGEucGF0aClcblx0XHR2YXIgdmFsdWVzID0gcmVnZXhwLmV4ZWMoZGF0YS5wYXRoKVxuXHRcdGlmICh2YWx1ZXMgPT0gbnVsbCkgcmV0dXJuIGZhbHNlXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRkYXRhLnBhcmFtc1trZXlzW2ldLmtdID0ga2V5c1tpXS5yID8gdmFsdWVzW2kgKyAxXSA6IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZXNbaSArIDFdKVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZVxuXHR9XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgcGFyc2VRdWVyeVN0cmluZyA9IHJlcXVpcmUoXCIuLi9xdWVyeXN0cmluZy9wYXJzZVwiKVxuXG4vLyBSZXR1cm5zIGB7cGF0aCwgcGFyYW1zfWAgZnJvbSBgdXJsYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1cmwpIHtcblx0dmFyIHF1ZXJ5SW5kZXggPSB1cmwuaW5kZXhPZihcIj9cIilcblx0dmFyIGhhc2hJbmRleCA9IHVybC5pbmRleE9mKFwiI1wiKVxuXHR2YXIgcXVlcnlFbmQgPSBoYXNoSW5kZXggPCAwID8gdXJsLmxlbmd0aCA6IGhhc2hJbmRleFxuXHR2YXIgcGF0aEVuZCA9IHF1ZXJ5SW5kZXggPCAwID8gcXVlcnlFbmQgOiBxdWVyeUluZGV4XG5cdHZhciBwYXRoID0gdXJsLnNsaWNlKDAsIHBhdGhFbmQpLnJlcGxhY2UoL1xcL3syLH0vZywgXCIvXCIpXG5cblx0aWYgKCFwYXRoKSBwYXRoID0gXCIvXCJcblx0ZWxzZSB7XG5cdFx0aWYgKHBhdGhbMF0gIT09IFwiL1wiKSBwYXRoID0gXCIvXCIgKyBwYXRoXG5cdFx0aWYgKHBhdGgubGVuZ3RoID4gMSAmJiBwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPT09IFwiL1wiKSBwYXRoID0gcGF0aC5zbGljZSgwLCAtMSlcblx0fVxuXHRyZXR1cm4ge1xuXHRcdHBhdGg6IHBhdGgsXG5cdFx0cGFyYW1zOiBxdWVyeUluZGV4IDwgMFxuXHRcdFx0PyB7fVxuXHRcdFx0OiBwYXJzZVF1ZXJ5U3RyaW5nKHVybC5zbGljZShxdWVyeUluZGV4ICsgMSwgcXVlcnlFbmQpKSxcblx0fVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcbi8qKiBAY29uc3RydWN0b3IgKi9cbnZhciBQcm9taXNlUG9seWZpbGwgPSBmdW5jdGlvbihleGVjdXRvcikge1xuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgUHJvbWlzZVBvbHlmaWxsKSkgdGhyb3cgbmV3IEVycm9yKFwiUHJvbWlzZSBtdXN0IGJlIGNhbGxlZCB3aXRoIGBuZXdgXCIpXG5cdGlmICh0eXBlb2YgZXhlY3V0b3IgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcImV4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvblwiKVxuXG5cdHZhciBzZWxmID0gdGhpcywgcmVzb2x2ZXJzID0gW10sIHJlamVjdG9ycyA9IFtdLCByZXNvbHZlQ3VycmVudCA9IGhhbmRsZXIocmVzb2x2ZXJzLCB0cnVlKSwgcmVqZWN0Q3VycmVudCA9IGhhbmRsZXIocmVqZWN0b3JzLCBmYWxzZSlcblx0dmFyIGluc3RhbmNlID0gc2VsZi5faW5zdGFuY2UgPSB7cmVzb2x2ZXJzOiByZXNvbHZlcnMsIHJlamVjdG9yczogcmVqZWN0b3JzfVxuXHR2YXIgY2FsbEFzeW5jID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gc2V0SW1tZWRpYXRlIDogc2V0VGltZW91dFxuXHRmdW5jdGlvbiBoYW5kbGVyKGxpc3QsIHNob3VsZEFic29yYikge1xuXHRcdHJldHVybiBmdW5jdGlvbiBleGVjdXRlKHZhbHVlKSB7XG5cdFx0XHR2YXIgdGhlblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKHNob3VsZEFic29yYiAmJiB2YWx1ZSAhPSBudWxsICYmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpICYmIHR5cGVvZiAodGhlbiA9IHZhbHVlLnRoZW4pID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRpZiAodmFsdWUgPT09IHNlbGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIHcvIGl0c2VsZlwiKVxuXHRcdFx0XHRcdGV4ZWN1dGVPbmNlKHRoZW4uYmluZCh2YWx1ZSkpXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0Y2FsbEFzeW5jKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYgKCFzaG91bGRBYnNvcmIgJiYgbGlzdC5sZW5ndGggPT09IDApIGNvbnNvbGUuZXJyb3IoXCJQb3NzaWJsZSB1bmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb246XCIsIHZhbHVlKVxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSBsaXN0W2ldKHZhbHVlKVxuXHRcdFx0XHRcdFx0cmVzb2x2ZXJzLmxlbmd0aCA9IDAsIHJlamVjdG9ycy5sZW5ndGggPSAwXG5cdFx0XHRcdFx0XHRpbnN0YW5jZS5zdGF0ZSA9IHNob3VsZEFic29yYlxuXHRcdFx0XHRcdFx0aW5zdGFuY2UucmV0cnkgPSBmdW5jdGlvbigpIHtleGVjdXRlKHZhbHVlKX1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjYXRjaCAoZSkge1xuXHRcdFx0XHRyZWplY3RDdXJyZW50KGUpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGV4ZWN1dGVPbmNlKHRoZW4pIHtcblx0XHR2YXIgcnVucyA9IDBcblx0XHRmdW5jdGlvbiBydW4oZm4pIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRpZiAocnVucysrID4gMCkgcmV0dXJuXG5cdFx0XHRcdGZuKHZhbHVlKVxuXHRcdFx0fVxuXHRcdH1cblx0XHR2YXIgb25lcnJvciA9IHJ1bihyZWplY3RDdXJyZW50KVxuXHRcdHRyeSB7dGhlbihydW4ocmVzb2x2ZUN1cnJlbnQpLCBvbmVycm9yKX0gY2F0Y2ggKGUpIHtvbmVycm9yKGUpfVxuXHR9XG5cblx0ZXhlY3V0ZU9uY2UoZXhlY3V0b3IpXG59XG5Qcm9taXNlUG9seWZpbGwucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3Rpb24pIHtcblx0dmFyIHNlbGYgPSB0aGlzLCBpbnN0YW5jZSA9IHNlbGYuX2luc3RhbmNlXG5cdGZ1bmN0aW9uIGhhbmRsZShjYWxsYmFjaywgbGlzdCwgbmV4dCwgc3RhdGUpIHtcblx0XHRsaXN0LnB1c2goZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgbmV4dCh2YWx1ZSlcblx0XHRcdGVsc2UgdHJ5IHtyZXNvbHZlTmV4dChjYWxsYmFjayh2YWx1ZSkpfSBjYXRjaCAoZSkge2lmIChyZWplY3ROZXh0KSByZWplY3ROZXh0KGUpfVxuXHRcdH0pXG5cdFx0aWYgKHR5cGVvZiBpbnN0YW5jZS5yZXRyeSA9PT0gXCJmdW5jdGlvblwiICYmIHN0YXRlID09PSBpbnN0YW5jZS5zdGF0ZSkgaW5zdGFuY2UucmV0cnkoKVxuXHR9XG5cdHZhciByZXNvbHZlTmV4dCwgcmVqZWN0TmV4dFxuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlUG9seWZpbGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7cmVzb2x2ZU5leHQgPSByZXNvbHZlLCByZWplY3ROZXh0ID0gcmVqZWN0fSlcblx0aGFuZGxlKG9uRnVsZmlsbGVkLCBpbnN0YW5jZS5yZXNvbHZlcnMsIHJlc29sdmVOZXh0LCB0cnVlKSwgaGFuZGxlKG9uUmVqZWN0aW9uLCBpbnN0YW5jZS5yZWplY3RvcnMsIHJlamVjdE5leHQsIGZhbHNlKVxuXHRyZXR1cm4gcHJvbWlzZVxufVxuUHJvbWlzZVBvbHlmaWxsLnByb3RvdHlwZS5jYXRjaCA9IGZ1bmN0aW9uKG9uUmVqZWN0aW9uKSB7XG5cdHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3Rpb24pXG59XG5Qcm9taXNlUG9seWZpbGwucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRyZXR1cm4gdGhpcy50aGVuKFxuXHRcdGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZVBvbHlmaWxsLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0ZnVuY3Rpb24ocmVhc29uKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZVBvbHlmaWxsLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIFByb21pc2VQb2x5ZmlsbC5yZWplY3QocmVhc29uKTtcblx0XHRcdH0pXG5cdFx0fVxuXHQpXG59XG5Qcm9taXNlUG9seWZpbGwucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2VQb2x5ZmlsbCkgcmV0dXJuIHZhbHVlXG5cdHJldHVybiBuZXcgUHJvbWlzZVBvbHlmaWxsKGZ1bmN0aW9uKHJlc29sdmUpIHtyZXNvbHZlKHZhbHVlKX0pXG59XG5Qcm9taXNlUG9seWZpbGwucmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlUG9seWZpbGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7cmVqZWN0KHZhbHVlKX0pXG59XG5Qcm9taXNlUG9seWZpbGwuYWxsID0gZnVuY3Rpb24obGlzdCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2VQb2x5ZmlsbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2YXIgdG90YWwgPSBsaXN0Lmxlbmd0aCwgY291bnQgPSAwLCB2YWx1ZXMgPSBbXVxuXHRcdGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgcmVzb2x2ZShbXSlcblx0XHRlbHNlIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0KGZ1bmN0aW9uKGkpIHtcblx0XHRcdFx0ZnVuY3Rpb24gY29uc3VtZSh2YWx1ZSkge1xuXHRcdFx0XHRcdGNvdW50Kytcblx0XHRcdFx0XHR2YWx1ZXNbaV0gPSB2YWx1ZVxuXHRcdFx0XHRcdGlmIChjb3VudCA9PT0gdG90YWwpIHJlc29sdmUodmFsdWVzKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChsaXN0W2ldICE9IG51bGwgJiYgKHR5cGVvZiBsaXN0W2ldID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBsaXN0W2ldID09PSBcImZ1bmN0aW9uXCIpICYmIHR5cGVvZiBsaXN0W2ldLnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdGxpc3RbaV0udGhlbihjb25zdW1lLCByZWplY3QpXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBjb25zdW1lKGxpc3RbaV0pXG5cdFx0XHR9KShpKVxuXHRcdH1cblx0fSlcbn1cblByb21pc2VQb2x5ZmlsbC5yYWNlID0gZnVuY3Rpb24obGlzdCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2VQb2x5ZmlsbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxpc3RbaV0udGhlbihyZXNvbHZlLCByZWplY3QpXG5cdFx0fVxuXHR9KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2VQb2x5ZmlsbFxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFByb21pc2VQb2x5ZmlsbCA9IHJlcXVpcmUoXCIuL3BvbHlmaWxsXCIpXG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdGlmICh0eXBlb2Ygd2luZG93LlByb21pc2UgPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHR3aW5kb3cuUHJvbWlzZSA9IFByb21pc2VQb2x5ZmlsbFxuXHR9IGVsc2UgaWYgKCF3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xuXHRcdHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gUHJvbWlzZVBvbHlmaWxsLnByb3RvdHlwZS5maW5hbGx5XG5cdH1cblx0bW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuUHJvbWlzZVxufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsLlByb21pc2UgPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRnbG9iYWwuUHJvbWlzZSA9IFByb21pc2VQb2x5ZmlsbFxuXHR9IGVsc2UgaWYgKCFnbG9iYWwuUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xuXHRcdGdsb2JhbC5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gUHJvbWlzZVBvbHlmaWxsLnByb3RvdHlwZS5maW5hbGx5XG5cdH1cblx0bW9kdWxlLmV4cG9ydHMgPSBnbG9iYWwuUHJvbWlzZVxufSBlbHNlIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlUG9seWZpbGxcbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikgcmV0dXJuIFwiXCJcblxuXHR2YXIgYXJncyA9IFtdXG5cdGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcblx0XHRkZXN0cnVjdHVyZShrZXksIG9iamVjdFtrZXldKVxuXHR9XG5cblx0cmV0dXJuIGFyZ3Muam9pbihcIiZcIilcblxuXHRmdW5jdGlvbiBkZXN0cnVjdHVyZShrZXksIHZhbHVlKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGRlc3RydWN0dXJlKGtleSArIFwiW1wiICsgaSArIFwiXVwiLCB2YWx1ZVtpXSlcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuXHRcdFx0Zm9yICh2YXIgaSBpbiB2YWx1ZSkge1xuXHRcdFx0XHRkZXN0cnVjdHVyZShrZXkgKyBcIltcIiArIGkgKyBcIl1cIiwgdmFsdWVbaV0pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgYXJncy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09IFwiXCIgPyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgOiBcIlwiKSlcblx0fVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzdHJpbmcpIHtcblx0aWYgKHN0cmluZyA9PT0gXCJcIiB8fCBzdHJpbmcgPT0gbnVsbCkgcmV0dXJuIHt9XG5cdGlmIChzdHJpbmcuY2hhckF0KDApID09PSBcIj9cIikgc3RyaW5nID0gc3RyaW5nLnNsaWNlKDEpXG5cblx0dmFyIGVudHJpZXMgPSBzdHJpbmcuc3BsaXQoXCImXCIpLCBjb3VudGVycyA9IHt9LCBkYXRhID0ge31cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGVudHJ5ID0gZW50cmllc1tpXS5zcGxpdChcIj1cIilcblx0XHR2YXIga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGVudHJ5WzBdKVxuXHRcdHZhciB2YWx1ZSA9IGVudHJ5Lmxlbmd0aCA9PT0gMiA/IGRlY29kZVVSSUNvbXBvbmVudChlbnRyeVsxXSkgOiBcIlwiXG5cblx0XHRpZiAodmFsdWUgPT09IFwidHJ1ZVwiKSB2YWx1ZSA9IHRydWVcblx0XHRlbHNlIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSB2YWx1ZSA9IGZhbHNlXG5cblx0XHR2YXIgbGV2ZWxzID0ga2V5LnNwbGl0KC9cXF1cXFs/fFxcWy8pXG5cdFx0dmFyIGN1cnNvciA9IGRhdGFcblx0XHRpZiAoa2V5LmluZGV4T2YoXCJbXCIpID4gLTEpIGxldmVscy5wb3AoKVxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgbGV2ZWxzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgbGV2ZWwgPSBsZXZlbHNbal0sIG5leHRMZXZlbCA9IGxldmVsc1tqICsgMV1cblx0XHRcdHZhciBpc051bWJlciA9IG5leHRMZXZlbCA9PSBcIlwiIHx8ICFpc05hTihwYXJzZUludChuZXh0TGV2ZWwsIDEwKSlcblx0XHRcdGlmIChsZXZlbCA9PT0gXCJcIikge1xuXHRcdFx0XHR2YXIga2V5ID0gbGV2ZWxzLnNsaWNlKDAsIGopLmpvaW4oKVxuXHRcdFx0XHRpZiAoY291bnRlcnNba2V5XSA9PSBudWxsKSB7XG5cdFx0XHRcdFx0Y291bnRlcnNba2V5XSA9IEFycmF5LmlzQXJyYXkoY3Vyc29yKSA/IGN1cnNvci5sZW5ndGggOiAwXG5cdFx0XHRcdH1cblx0XHRcdFx0bGV2ZWwgPSBjb3VudGVyc1trZXldKytcblx0XHRcdH1cblx0XHRcdC8vIERpc2FsbG93IGRpcmVjdCBwcm90b3R5cGUgcG9sbHV0aW9uXG5cdFx0XHRlbHNlIGlmIChsZXZlbCA9PT0gXCJfX3Byb3RvX19cIikgYnJlYWtcblx0XHRcdGlmIChqID09PSBsZXZlbHMubGVuZ3RoIC0gMSkgY3Vyc29yW2xldmVsXSA9IHZhbHVlXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Ly8gUmVhZCBvd24gcHJvcGVydGllcyBleGNsdXNpdmVseSB0byBkaXNhbGxvdyBpbmRpcmVjdFxuXHRcdFx0XHQvLyBwcm90b3R5cGUgcG9sbHV0aW9uXG5cdFx0XHRcdHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjdXJzb3IsIGxldmVsKVxuXHRcdFx0XHRpZiAoZGVzYyAhPSBudWxsKSBkZXNjID0gZGVzYy52YWx1ZVxuXHRcdFx0XHRpZiAoZGVzYyA9PSBudWxsKSBjdXJzb3JbbGV2ZWxdID0gZGVzYyA9IGlzTnVtYmVyID8gW10gOiB7fVxuXHRcdFx0XHRjdXJzb3IgPSBkZXNjXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBkYXRhXG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3JlbmRlci9yZW5kZXJcIikod2luZG93KVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFZub2RlID0gcmVxdWlyZShcIi4uL3JlbmRlci92bm9kZVwiKVxudmFyIGh5cGVyc2NyaXB0Vm5vZGUgPSByZXF1aXJlKFwiLi9oeXBlcnNjcmlwdFZub2RlXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdHZhciB2bm9kZSA9IGh5cGVyc2NyaXB0Vm5vZGUuYXBwbHkoMCwgYXJndW1lbnRzKVxuXG5cdHZub2RlLnRhZyA9IFwiW1wiXG5cdHZub2RlLmNoaWxkcmVuID0gVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4odm5vZGUuY2hpbGRyZW4pXG5cdHJldHVybiB2bm9kZVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFZub2RlID0gcmVxdWlyZShcIi4uL3JlbmRlci92bm9kZVwiKVxudmFyIGh5cGVyc2NyaXB0Vm5vZGUgPSByZXF1aXJlKFwiLi9oeXBlcnNjcmlwdFZub2RlXCIpXG5cbnZhciBzZWxlY3RvclBhcnNlciA9IC8oPzooXnwjfFxcLikoW14jXFwuXFxbXFxdXSspKXwoXFxbKC4rPykoPzpcXHMqPVxccyooXCJ8J3wpKCg/OlxcXFxbXCInXFxdXXwuKSo/KVxcNSk/XFxdKS9nXG52YXIgc2VsZWN0b3JDYWNoZSA9IHt9XG52YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHlcblxuZnVuY3Rpb24gaXNFbXB0eShvYmplY3QpIHtcblx0Zm9yICh2YXIga2V5IGluIG9iamVjdCkgaWYgKGhhc093bi5jYWxsKG9iamVjdCwga2V5KSkgcmV0dXJuIGZhbHNlXG5cdHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVTZWxlY3RvcihzZWxlY3Rvcikge1xuXHR2YXIgbWF0Y2gsIHRhZyA9IFwiZGl2XCIsIGNsYXNzZXMgPSBbXSwgYXR0cnMgPSB7fVxuXHR3aGlsZSAobWF0Y2ggPSBzZWxlY3RvclBhcnNlci5leGVjKHNlbGVjdG9yKSkge1xuXHRcdHZhciB0eXBlID0gbWF0Y2hbMV0sIHZhbHVlID0gbWF0Y2hbMl1cblx0XHRpZiAodHlwZSA9PT0gXCJcIiAmJiB2YWx1ZSAhPT0gXCJcIikgdGFnID0gdmFsdWVcblx0XHRlbHNlIGlmICh0eXBlID09PSBcIiNcIikgYXR0cnMuaWQgPSB2YWx1ZVxuXHRcdGVsc2UgaWYgKHR5cGUgPT09IFwiLlwiKSBjbGFzc2VzLnB1c2godmFsdWUpXG5cdFx0ZWxzZSBpZiAobWF0Y2hbM11bMF0gPT09IFwiW1wiKSB7XG5cdFx0XHR2YXIgYXR0clZhbHVlID0gbWF0Y2hbNl1cblx0XHRcdGlmIChhdHRyVmFsdWUpIGF0dHJWYWx1ZSA9IGF0dHJWYWx1ZS5yZXBsYWNlKC9cXFxcKFtcIiddKS9nLCBcIiQxXCIpLnJlcGxhY2UoL1xcXFxcXFxcL2csIFwiXFxcXFwiKVxuXHRcdFx0aWYgKG1hdGNoWzRdID09PSBcImNsYXNzXCIpIGNsYXNzZXMucHVzaChhdHRyVmFsdWUpXG5cdFx0XHRlbHNlIGF0dHJzW21hdGNoWzRdXSA9IGF0dHJWYWx1ZSA9PT0gXCJcIiA/IGF0dHJWYWx1ZSA6IGF0dHJWYWx1ZSB8fCB0cnVlXG5cdFx0fVxuXHR9XG5cdGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIGF0dHJzLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbihcIiBcIilcblx0cmV0dXJuIHNlbGVjdG9yQ2FjaGVbc2VsZWN0b3JdID0ge3RhZzogdGFnLCBhdHRyczogYXR0cnN9XG59XG5cbmZ1bmN0aW9uIGV4ZWNTZWxlY3RvcihzdGF0ZSwgdm5vZGUpIHtcblx0dmFyIGF0dHJzID0gdm5vZGUuYXR0cnNcblx0dmFyIGNoaWxkcmVuID0gVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4odm5vZGUuY2hpbGRyZW4pXG5cdHZhciBoYXNDbGFzcyA9IGhhc093bi5jYWxsKGF0dHJzLCBcImNsYXNzXCIpXG5cdHZhciBjbGFzc05hbWUgPSBoYXNDbGFzcyA/IGF0dHJzLmNsYXNzIDogYXR0cnMuY2xhc3NOYW1lXG5cblx0dm5vZGUudGFnID0gc3RhdGUudGFnXG5cdHZub2RlLmF0dHJzID0gbnVsbFxuXHR2bm9kZS5jaGlsZHJlbiA9IHVuZGVmaW5lZFxuXG5cdGlmICghaXNFbXB0eShzdGF0ZS5hdHRycykgJiYgIWlzRW1wdHkoYXR0cnMpKSB7XG5cdFx0dmFyIG5ld0F0dHJzID0ge31cblxuXHRcdGZvciAodmFyIGtleSBpbiBhdHRycykge1xuXHRcdFx0aWYgKGhhc093bi5jYWxsKGF0dHJzLCBrZXkpKSBuZXdBdHRyc1trZXldID0gYXR0cnNba2V5XVxuXHRcdH1cblxuXHRcdGF0dHJzID0gbmV3QXR0cnNcblx0fVxuXG5cdGZvciAodmFyIGtleSBpbiBzdGF0ZS5hdHRycykge1xuXHRcdGlmIChoYXNPd24uY2FsbChzdGF0ZS5hdHRycywga2V5KSAmJiBrZXkgIT09IFwiY2xhc3NOYW1lXCIgJiYgIWhhc093bi5jYWxsKGF0dHJzLCBrZXkpKXtcblx0XHRcdGF0dHJzW2tleV0gPSBzdGF0ZS5hdHRyc1trZXldXG5cdFx0fVxuXHR9XG5cdGlmIChjbGFzc05hbWUgIT0gbnVsbCB8fCBzdGF0ZS5hdHRycy5jbGFzc05hbWUgIT0gbnVsbCkgYXR0cnMuY2xhc3NOYW1lID1cblx0XHRjbGFzc05hbWUgIT0gbnVsbFxuXHRcdFx0PyBzdGF0ZS5hdHRycy5jbGFzc05hbWUgIT0gbnVsbFxuXHRcdFx0XHQ/IFN0cmluZyhzdGF0ZS5hdHRycy5jbGFzc05hbWUpICsgXCIgXCIgKyBTdHJpbmcoY2xhc3NOYW1lKVxuXHRcdFx0XHQ6IGNsYXNzTmFtZVxuXHRcdFx0OiBzdGF0ZS5hdHRycy5jbGFzc05hbWUgIT0gbnVsbFxuXHRcdFx0XHQ/IHN0YXRlLmF0dHJzLmNsYXNzTmFtZVxuXHRcdFx0XHQ6IG51bGxcblxuXHRpZiAoaGFzQ2xhc3MpIGF0dHJzLmNsYXNzID0gbnVsbFxuXG5cdGZvciAodmFyIGtleSBpbiBhdHRycykge1xuXHRcdGlmIChoYXNPd24uY2FsbChhdHRycywga2V5KSAmJiBrZXkgIT09IFwia2V5XCIpIHtcblx0XHRcdHZub2RlLmF0dHJzID0gYXR0cnNcblx0XHRcdGJyZWFrXG5cdFx0fVxuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmIGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBjaGlsZHJlblswXSAhPSBudWxsICYmIGNoaWxkcmVuWzBdLnRhZyA9PT0gXCIjXCIpIHtcblx0XHR2bm9kZS50ZXh0ID0gY2hpbGRyZW5bMF0uY2hpbGRyZW5cblx0fSBlbHNlIHtcblx0XHR2bm9kZS5jaGlsZHJlbiA9IGNoaWxkcmVuXG5cdH1cblxuXHRyZXR1cm4gdm5vZGVcbn1cblxuZnVuY3Rpb24gaHlwZXJzY3JpcHQoc2VsZWN0b3IpIHtcblx0aWYgKHNlbGVjdG9yID09IG51bGwgfHwgdHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBzZWxlY3Rvci52aWV3ICE9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHR0aHJvdyBFcnJvcihcIlRoZSBzZWxlY3RvciBtdXN0IGJlIGVpdGhlciBhIHN0cmluZyBvciBhIGNvbXBvbmVudC5cIik7XG5cdH1cblxuXHR2YXIgdm5vZGUgPSBoeXBlcnNjcmlwdFZub2RlLmFwcGx5KDEsIGFyZ3VtZW50cylcblxuXHRpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG5cdFx0dm5vZGUuY2hpbGRyZW4gPSBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbih2bm9kZS5jaGlsZHJlbilcblx0XHRpZiAoc2VsZWN0b3IgIT09IFwiW1wiKSByZXR1cm4gZXhlY1NlbGVjdG9yKHNlbGVjdG9yQ2FjaGVbc2VsZWN0b3JdIHx8IGNvbXBpbGVTZWxlY3RvcihzZWxlY3RvciksIHZub2RlKVxuXHR9XG5cblx0dm5vZGUudGFnID0gc2VsZWN0b3Jcblx0cmV0dXJuIHZub2RlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaHlwZXJzY3JpcHRcbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBWbm9kZSA9IHJlcXVpcmUoXCIuLi9yZW5kZXIvdm5vZGVcIilcblxuLy8gQ2FsbCB2aWEgYGh5cGVyc2NyaXB0Vm5vZGUuYXBwbHkoc3RhcnRPZmZzZXQsIGFyZ3VtZW50cylgXG4vL1xuLy8gVGhlIHJlYXNvbiBJIGRvIGl0IHRoaXMgd2F5LCBmb3J3YXJkaW5nIHRoZSBhcmd1bWVudHMgYW5kIHBhc3NpbmcgdGhlIHN0YXJ0XG4vLyBvZmZzZXQgaW4gYHRoaXNgLCBpcyBzbyBJIGRvbid0IGhhdmUgdG8gY3JlYXRlIGEgdGVtcG9yYXJ5IGFycmF5IGluIGFcbi8vIHBlcmZvcm1hbmNlLWNyaXRpY2FsIHBhdGguXG4vL1xuLy8gSW4gbmF0aXZlIEVTNiwgSSdkIGluc3RlYWQgYWRkIGEgZmluYWwgYC4uLmFyZ3NgIHBhcmFtZXRlciB0byB0aGVcbi8vIGBoeXBlcnNjcmlwdGAgYW5kIGBmcmFnbWVudGAgZmFjdG9yaWVzIGFuZCBkZWZpbmUgdGhpcyBhc1xuLy8gYGh5cGVyc2NyaXB0Vm5vZGUoLi4uYXJncylgLCBzaW5jZSBtb2Rlcm4gZW5naW5lcyBkbyBvcHRpbWl6ZSB0aGF0IGF3YXkuIEJ1dFxuLy8gRVM1ICh3aGF0IE1pdGhyaWwgcmVxdWlyZXMgdGhhbmtzIHRvIElFIHN1cHBvcnQpIGRvZXNuJ3QgZ2l2ZSBtZSB0aGF0IGx1eHVyeSxcbi8vIGFuZCBlbmdpbmVzIGFyZW4ndCBuZWFybHkgaW50ZWxsaWdlbnQgZW5vdWdoIHRvIGRvIGVpdGhlciBvZiB0aGVzZTpcbi8vXG4vLyAxLiBFbGlkZSB0aGUgYWxsb2NhdGlvbiBmb3IgYFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKWAgd2hlbiBpdCdzIHBhc3NlZCB0b1xuLy8gICAgYW5vdGhlciBmdW5jdGlvbiBvbmx5IHRvIGJlIGluZGV4ZWQuXG4vLyAyLiBFbGlkZSBhbiBgYXJndW1lbnRzYCBhbGxvY2F0aW9uIHdoZW4gaXQncyBwYXNzZWQgdG8gYW55IGZ1bmN0aW9uIG90aGVyXG4vLyAgICB0aGFuIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgIG9yIGBSZWZsZWN0LmFwcGx5YC5cbi8vXG4vLyBJbiBFUzYsIGl0J2QgcHJvYmFibHkgbG9vayBjbG9zZXIgdG8gdGhpcyAoSSdkIG5lZWQgdG8gcHJvZmlsZSBpdCwgdGhvdWdoKTpcbi8vIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXR0cnMsIC4uLmNoaWxkcmVuKSB7XG4vLyAgICAgaWYgKGF0dHJzID09IG51bGwgfHwgdHlwZW9mIGF0dHJzID09PSBcIm9iamVjdFwiICYmIGF0dHJzLnRhZyA9PSBudWxsICYmICFBcnJheS5pc0FycmF5KGF0dHJzKSkge1xuLy8gICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoY2hpbGRyZW5bMF0pKSBjaGlsZHJlbiA9IGNoaWxkcmVuWzBdXG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5sZW5ndGggPT09IDAgJiYgQXJyYXkuaXNBcnJheShhdHRycykgPyBhdHRycyA6IFthdHRycywgLi4uY2hpbGRyZW5dXG4vLyAgICAgICAgIGF0dHJzID0gdW5kZWZpbmVkXG4vLyAgICAgfVxuLy9cbi8vICAgICBpZiAoYXR0cnMgPT0gbnVsbCkgYXR0cnMgPSB7fVxuLy8gICAgIHJldHVybiBWbm9kZShcIlwiLCBhdHRycy5rZXksIGF0dHJzLCBjaGlsZHJlbilcbi8vIH1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdHZhciBhdHRycyA9IGFyZ3VtZW50c1t0aGlzXSwgc3RhcnQgPSB0aGlzICsgMSwgY2hpbGRyZW5cblxuXHRpZiAoYXR0cnMgPT0gbnVsbCkge1xuXHRcdGF0dHJzID0ge31cblx0fSBlbHNlIGlmICh0eXBlb2YgYXR0cnMgIT09IFwib2JqZWN0XCIgfHwgYXR0cnMudGFnICE9IG51bGwgfHwgQXJyYXkuaXNBcnJheShhdHRycykpIHtcblx0XHRhdHRycyA9IHt9XG5cdFx0c3RhcnQgPSB0aGlzXG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gc3RhcnQgKyAxKSB7XG5cdFx0Y2hpbGRyZW4gPSBhcmd1bWVudHNbc3RhcnRdXG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkgY2hpbGRyZW4gPSBbY2hpbGRyZW5dXG5cdH0gZWxzZSB7XG5cdFx0Y2hpbGRyZW4gPSBbXVxuXHRcdHdoaWxlIChzdGFydCA8IGFyZ3VtZW50cy5sZW5ndGgpIGNoaWxkcmVuLnB1c2goYXJndW1lbnRzW3N0YXJ0KytdKVxuXHR9XG5cblx0cmV0dXJuIFZub2RlKFwiXCIsIGF0dHJzLmtleSwgYXR0cnMsIGNoaWxkcmVuKVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFZub2RlID0gcmVxdWlyZShcIi4uL3JlbmRlci92bm9kZVwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCR3aW5kb3cpIHtcblx0dmFyICRkb2MgPSAkd2luZG93ICYmICR3aW5kb3cuZG9jdW1lbnRcblx0dmFyIGN1cnJlbnRSZWRyYXdcblxuXHR2YXIgbmFtZVNwYWNlID0ge1xuXHRcdHN2ZzogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuXHRcdG1hdGg6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiXG5cdH1cblxuXHRmdW5jdGlvbiBnZXROYW1lU3BhY2Uodm5vZGUpIHtcblx0XHRyZXR1cm4gdm5vZGUuYXR0cnMgJiYgdm5vZGUuYXR0cnMueG1sbnMgfHwgbmFtZVNwYWNlW3Zub2RlLnRhZ11cblx0fVxuXG5cdC8vc2FuaXR5IGNoZWNrIHRvIGRpc2NvdXJhZ2UgcGVvcGxlIGZyb20gZG9pbmcgYHZub2RlLnN0YXRlID0gLi4uYFxuXHRmdW5jdGlvbiBjaGVja1N0YXRlKHZub2RlLCBvcmlnaW5hbCkge1xuXHRcdGlmICh2bm9kZS5zdGF0ZSAhPT0gb3JpZ2luYWwpIHRocm93IG5ldyBFcnJvcihcImB2bm9kZS5zdGF0ZWAgbXVzdCBub3QgYmUgbW9kaWZpZWRcIilcblx0fVxuXG5cdC8vTm90ZTogdGhlIGhvb2sgaXMgcGFzc2VkIGFzIHRoZSBgdGhpc2AgYXJndW1lbnQgdG8gYWxsb3cgcHJveHlpbmcgdGhlXG5cdC8vYXJndW1lbnRzIHdpdGhvdXQgcmVxdWlyaW5nIGEgZnVsbCBhcnJheSBhbGxvY2F0aW9uIHRvIGRvIHNvLiBJdCBhbHNvXG5cdC8vdGFrZXMgYWR2YW50YWdlIG9mIHRoZSBmYWN0IHRoZSBjdXJyZW50IGB2bm9kZWAgaXMgdGhlIGZpcnN0IGFyZ3VtZW50IGluXG5cdC8vYWxsIGxpZmVjeWNsZSBtZXRob2RzLlxuXHRmdW5jdGlvbiBjYWxsSG9vayh2bm9kZSkge1xuXHRcdHZhciBvcmlnaW5hbCA9IHZub2RlLnN0YXRlXG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiB0aGlzLmFwcGx5KG9yaWdpbmFsLCBhcmd1bWVudHMpXG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdGNoZWNrU3RhdGUodm5vZGUsIG9yaWdpbmFsKVxuXHRcdH1cblx0fVxuXG5cdC8vIElFMTEgKGF0IGxlYXN0KSB0aHJvd3MgYW4gVW5zcGVjaWZpZWRFcnJvciB3aGVuIGFjY2Vzc2luZyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IHdoZW5cblx0Ly8gaW5zaWRlIGFuIGlmcmFtZS4gQ2F0Y2ggYW5kIHN3YWxsb3cgdGhpcyBlcnJvciwgYW5kIGhlYXZ5LWhhbmRpZGx5IHJldHVybiBudWxsLlxuXHRmdW5jdGlvbiBhY3RpdmVFbGVtZW50KCkge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gJGRvYy5hY3RpdmVFbGVtZW50XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIG51bGxcblx0XHR9XG5cdH1cblx0Ly9jcmVhdGVcblx0ZnVuY3Rpb24gY3JlYXRlTm9kZXMocGFyZW50LCB2bm9kZXMsIHN0YXJ0LCBlbmQsIGhvb2tzLCBuZXh0U2libGluZywgbnMpIHtcblx0XHRmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuXHRcdFx0dmFyIHZub2RlID0gdm5vZGVzW2ldXG5cdFx0XHRpZiAodm5vZGUgIT0gbnVsbCkge1xuXHRcdFx0XHRjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZykge1xuXHRcdHZhciB0YWcgPSB2bm9kZS50YWdcblx0XHRpZiAodHlwZW9mIHRhZyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0dm5vZGUuc3RhdGUgPSB7fVxuXHRcdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwpIGluaXRMaWZlY3ljbGUodm5vZGUuYXR0cnMsIHZub2RlLCBob29rcylcblx0XHRcdHN3aXRjaCAodGFnKSB7XG5cdFx0XHRcdGNhc2UgXCIjXCI6IGNyZWF0ZVRleHQocGFyZW50LCB2bm9kZSwgbmV4dFNpYmxpbmcpOyBicmVha1xuXHRcdFx0XHRjYXNlIFwiPFwiOiBjcmVhdGVIVE1MKHBhcmVudCwgdm5vZGUsIG5zLCBuZXh0U2libGluZyk7IGJyZWFrXG5cdFx0XHRcdGNhc2UgXCJbXCI6IGNyZWF0ZUZyYWdtZW50KHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpOyBicmVha1xuXHRcdFx0XHRkZWZhdWx0OiBjcmVhdGVFbGVtZW50KHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgY3JlYXRlQ29tcG9uZW50KHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlVGV4dChwYXJlbnQsIHZub2RlLCBuZXh0U2libGluZykge1xuXHRcdHZub2RlLmRvbSA9ICRkb2MuY3JlYXRlVGV4dE5vZGUodm5vZGUuY2hpbGRyZW4pXG5cdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIHZub2RlLmRvbSwgbmV4dFNpYmxpbmcpXG5cdH1cblx0dmFyIHBvc3NpYmxlUGFyZW50cyA9IHtjYXB0aW9uOiBcInRhYmxlXCIsIHRoZWFkOiBcInRhYmxlXCIsIHRib2R5OiBcInRhYmxlXCIsIHRmb290OiBcInRhYmxlXCIsIHRyOiBcInRib2R5XCIsIHRoOiBcInRyXCIsIHRkOiBcInRyXCIsIGNvbGdyb3VwOiBcInRhYmxlXCIsIGNvbDogXCJjb2xncm91cFwifVxuXHRmdW5jdGlvbiBjcmVhdGVIVE1MKHBhcmVudCwgdm5vZGUsIG5zLCBuZXh0U2libGluZykge1xuXHRcdHZhciBtYXRjaCA9IHZub2RlLmNoaWxkcmVuLm1hdGNoKC9eXFxzKj88KFxcdyspL2ltKSB8fCBbXVxuXHRcdC8vIG5vdCB1c2luZyB0aGUgcHJvcGVyIHBhcmVudCBtYWtlcyB0aGUgY2hpbGQgZWxlbWVudChzKSB2YW5pc2guXG5cdFx0Ly8gICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cdFx0Ly8gICAgIGRpdi5pbm5lckhUTUwgPSBcIjx0ZD5pPC90ZD48dGQ+ajwvdGQ+XCJcblx0XHQvLyAgICAgY29uc29sZS5sb2coZGl2LmlubmVySFRNTClcblx0XHQvLyAtLT4gXCJpalwiLCBubyA8dGQ+IGluIHNpZ2h0LlxuXHRcdHZhciB0ZW1wID0gJGRvYy5jcmVhdGVFbGVtZW50KHBvc3NpYmxlUGFyZW50c1ttYXRjaFsxXV0gfHwgXCJkaXZcIilcblx0XHRpZiAobnMgPT09IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIikge1xuXHRcdFx0dGVtcC5pbm5lckhUTUwgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj5cIiArIHZub2RlLmNoaWxkcmVuICsgXCI8L3N2Zz5cIlxuXHRcdFx0dGVtcCA9IHRlbXAuZmlyc3RDaGlsZFxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0ZW1wLmlubmVySFRNTCA9IHZub2RlLmNoaWxkcmVuXG5cdFx0fVxuXHRcdHZub2RlLmRvbSA9IHRlbXAuZmlyc3RDaGlsZFxuXHRcdHZub2RlLmRvbVNpemUgPSB0ZW1wLmNoaWxkTm9kZXMubGVuZ3RoXG5cdFx0Ly8gQ2FwdHVyZSBub2RlcyB0byByZW1vdmUsIHNvIHdlIGRvbid0IGNvbmZ1c2UgdGhlbS5cblx0XHR2bm9kZS5pbnN0YW5jZSA9IFtdXG5cdFx0dmFyIGZyYWdtZW50ID0gJGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblx0XHR2YXIgY2hpbGRcblx0XHR3aGlsZSAoY2hpbGQgPSB0ZW1wLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHZub2RlLmluc3RhbmNlLnB1c2goY2hpbGQpXG5cdFx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZChjaGlsZClcblx0XHR9XG5cdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIGZyYWdtZW50LCBuZXh0U2libGluZylcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVGcmFnbWVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKSB7XG5cdFx0dmFyIGZyYWdtZW50ID0gJGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblx0XHRpZiAodm5vZGUuY2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0dmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblx0XHRcdGNyZWF0ZU5vZGVzKGZyYWdtZW50LCBjaGlsZHJlbiwgMCwgY2hpbGRyZW4ubGVuZ3RoLCBob29rcywgbnVsbCwgbnMpXG5cdFx0fVxuXHRcdHZub2RlLmRvbSA9IGZyYWdtZW50LmZpcnN0Q2hpbGRcblx0XHR2bm9kZS5kb21TaXplID0gZnJhZ21lbnQuY2hpbGROb2Rlcy5sZW5ndGhcblx0XHRpbnNlcnROb2RlKHBhcmVudCwgZnJhZ21lbnQsIG5leHRTaWJsaW5nKVxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZykge1xuXHRcdHZhciB0YWcgPSB2bm9kZS50YWdcblx0XHR2YXIgYXR0cnMgPSB2bm9kZS5hdHRyc1xuXHRcdHZhciBpcyA9IGF0dHJzICYmIGF0dHJzLmlzXG5cblx0XHRucyA9IGdldE5hbWVTcGFjZSh2bm9kZSkgfHwgbnNcblxuXHRcdHZhciBlbGVtZW50ID0gbnMgP1xuXHRcdFx0aXMgPyAkZG9jLmNyZWF0ZUVsZW1lbnROUyhucywgdGFnLCB7aXM6IGlzfSkgOiAkZG9jLmNyZWF0ZUVsZW1lbnROUyhucywgdGFnKSA6XG5cdFx0XHRpcyA/ICRkb2MuY3JlYXRlRWxlbWVudCh0YWcsIHtpczogaXN9KSA6ICRkb2MuY3JlYXRlRWxlbWVudCh0YWcpXG5cdFx0dm5vZGUuZG9tID0gZWxlbWVudFxuXG5cdFx0aWYgKGF0dHJzICE9IG51bGwpIHtcblx0XHRcdHNldEF0dHJzKHZub2RlLCBhdHRycywgbnMpXG5cdFx0fVxuXG5cdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIGVsZW1lbnQsIG5leHRTaWJsaW5nKVxuXG5cdFx0aWYgKCFtYXliZVNldENvbnRlbnRFZGl0YWJsZSh2bm9kZSkpIHtcblx0XHRcdGlmICh2bm9kZS50ZXh0ICE9IG51bGwpIHtcblx0XHRcdFx0aWYgKHZub2RlLnRleHQgIT09IFwiXCIpIGVsZW1lbnQudGV4dENvbnRlbnQgPSB2bm9kZS50ZXh0XG5cdFx0XHRcdGVsc2Ugdm5vZGUuY2hpbGRyZW4gPSBbVm5vZGUoXCIjXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB2bm9kZS50ZXh0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCldXG5cdFx0XHR9XG5cdFx0XHRpZiAodm5vZGUuY2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0XHR2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdFx0XHRjcmVhdGVOb2RlcyhlbGVtZW50LCBjaGlsZHJlbiwgMCwgY2hpbGRyZW4ubGVuZ3RoLCBob29rcywgbnVsbCwgbnMpXG5cdFx0XHRcdGlmICh2bm9kZS50YWcgPT09IFwic2VsZWN0XCIgJiYgYXR0cnMgIT0gbnVsbCkgc2V0TGF0ZVNlbGVjdEF0dHJzKHZub2RlLCBhdHRycylcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gaW5pdENvbXBvbmVudCh2bm9kZSwgaG9va3MpIHtcblx0XHR2YXIgc2VudGluZWxcblx0XHRpZiAodHlwZW9mIHZub2RlLnRhZy52aWV3ID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHZub2RlLnN0YXRlID0gT2JqZWN0LmNyZWF0ZSh2bm9kZS50YWcpXG5cdFx0XHRzZW50aW5lbCA9IHZub2RlLnN0YXRlLnZpZXdcblx0XHRcdGlmIChzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCAhPSBudWxsKSByZXR1cm5cblx0XHRcdHNlbnRpbmVsLiQkcmVlbnRyYW50TG9jayQkID0gdHJ1ZVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2bm9kZS5zdGF0ZSA9IHZvaWQgMFxuXHRcdFx0c2VudGluZWwgPSB2bm9kZS50YWdcblx0XHRcdGlmIChzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCAhPSBudWxsKSByZXR1cm5cblx0XHRcdHNlbnRpbmVsLiQkcmVlbnRyYW50TG9jayQkID0gdHJ1ZVxuXHRcdFx0dm5vZGUuc3RhdGUgPSAodm5vZGUudGFnLnByb3RvdHlwZSAhPSBudWxsICYmIHR5cGVvZiB2bm9kZS50YWcucHJvdG90eXBlLnZpZXcgPT09IFwiZnVuY3Rpb25cIikgPyBuZXcgdm5vZGUudGFnKHZub2RlKSA6IHZub2RlLnRhZyh2bm9kZSlcblx0XHR9XG5cdFx0aW5pdExpZmVjeWNsZSh2bm9kZS5zdGF0ZSwgdm5vZGUsIGhvb2tzKVxuXHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsKSBpbml0TGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0dm5vZGUuaW5zdGFuY2UgPSBWbm9kZS5ub3JtYWxpemUoY2FsbEhvb2suY2FsbCh2bm9kZS5zdGF0ZS52aWV3LCB2bm9kZSkpXG5cdFx0aWYgKHZub2RlLmluc3RhbmNlID09PSB2bm9kZSkgdGhyb3cgRXJyb3IoXCJBIHZpZXcgY2Fubm90IHJldHVybiB0aGUgdm5vZGUgaXQgcmVjZWl2ZWQgYXMgYXJndW1lbnRcIilcblx0XHRzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCA9IG51bGxcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVDb21wb25lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZykge1xuXHRcdGluaXRDb21wb25lbnQodm5vZGUsIGhvb2tzKVxuXHRcdGlmICh2bm9kZS5pbnN0YW5jZSAhPSBudWxsKSB7XG5cdFx0XHRjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUuaW5zdGFuY2UsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHR2bm9kZS5kb20gPSB2bm9kZS5pbnN0YW5jZS5kb21cblx0XHRcdHZub2RlLmRvbVNpemUgPSB2bm9kZS5kb20gIT0gbnVsbCA/IHZub2RlLmluc3RhbmNlLmRvbVNpemUgOiAwXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IDBcblx0XHR9XG5cdH1cblxuXHQvL3VwZGF0ZVxuXHQvKipcblx0ICogQHBhcmFtIHtFbGVtZW50fEZyYWdtZW50fSBwYXJlbnQgLSB0aGUgcGFyZW50IGVsZW1lbnRcblx0ICogQHBhcmFtIHtWbm9kZVtdIHwgbnVsbH0gb2xkIC0gdGhlIGxpc3Qgb2Ygdm5vZGVzIG9mIHRoZSBsYXN0IGByZW5kZXIoKWAgY2FsbCBmb3Jcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyBwYXJ0IG9mIHRoZSB0cmVlXG5cdCAqIEBwYXJhbSB7Vm5vZGVbXSB8IG51bGx9IHZub2RlcyAtIGFzIGFib3ZlLCBidXQgZm9yIHRoZSBjdXJyZW50IGByZW5kZXIoKWAgY2FsbC5cblx0ICogQHBhcmFtIHtGdW5jdGlvbltdfSBob29rcyAtIGFuIGFjY3VtdWxhdG9yIG9mIHBvc3QtcmVuZGVyIGhvb2tzIChvbmNyZWF0ZS9vbnVwZGF0ZSlcblx0ICogQHBhcmFtIHtFbGVtZW50IHwgbnVsbH0gbmV4dFNpYmxpbmcgLSB0aGUgbmV4dCBET00gbm9kZSBpZiB3ZSdyZSBkZWFsaW5nIHdpdGggYVxuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IHRoYXQgaXMgbm90IHRoZSBsYXN0IGl0ZW0gaW4gaXRzXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50XG5cdCAqIEBwYXJhbSB7J3N2ZycgfCAnbWF0aCcgfCBTdHJpbmcgfCBudWxsfSBucykgLSB0aGUgY3VycmVudCBYTUwgbmFtZXNwYWNlLCBpZiBhbnlcblx0ICogQHJldHVybnMgdm9pZFxuXHQgKi9cblx0Ly8gVGhpcyBmdW5jdGlvbiBkaWZmcyBhbmQgcGF0Y2hlcyBsaXN0cyBvZiB2bm9kZXMsIGJvdGgga2V5ZWQgYW5kIHVua2V5ZWQuXG5cdC8vXG5cdC8vIFdlIHdpbGw6XG5cdC8vXG5cdC8vIDEuIGRlc2NyaWJlIGl0cyBnZW5lcmFsIHN0cnVjdHVyZVxuXHQvLyAyLiBmb2N1cyBvbiB0aGUgZGlmZiBhbGdvcml0aG0gb3B0aW1pemF0aW9uc1xuXHQvLyAzLiBkaXNjdXNzIERPTSBub2RlIG9wZXJhdGlvbnMuXG5cblx0Ly8gIyMgT3ZlcnZpZXc6XG5cdC8vXG5cdC8vIFRoZSB1cGRhdGVOb2RlcygpIGZ1bmN0aW9uOlxuXHQvLyAtIGRlYWxzIHdpdGggdHJpdmlhbCBjYXNlc1xuXHQvLyAtIGRldGVybWluZXMgd2hldGhlciB0aGUgbGlzdHMgYXJlIGtleWVkIG9yIHVua2V5ZWQgYmFzZWQgb24gdGhlIGZpcnN0IG5vbi1udWxsIG5vZGVcblx0Ly8gICBvZiBlYWNoIGxpc3QuXG5cdC8vIC0gZGlmZnMgdGhlbSBhbmQgcGF0Y2hlcyB0aGUgRE9NIGlmIG5lZWRlZCAodGhhdCdzIHRoZSBicnVudCBvZiB0aGUgY29kZSlcblx0Ly8gLSBtYW5hZ2VzIHRoZSBsZWZ0b3ZlcnM6IGFmdGVyIGRpZmZpbmcsIGFyZSB0aGVyZTpcblx0Ly8gICAtIG9sZCBub2RlcyBsZWZ0IHRvIHJlbW92ZT9cblx0Ly8gXHQgLSBuZXcgbm9kZXMgdG8gaW5zZXJ0P1xuXHQvLyBcdCBkZWFsIHdpdGggdGhlbSFcblx0Ly9cblx0Ly8gVGhlIGxpc3RzIGFyZSBvbmx5IGl0ZXJhdGVkIG92ZXIgb25jZSwgd2l0aCBhbiBleGNlcHRpb24gZm9yIHRoZSBub2RlcyBpbiBgb2xkYCB0aGF0XG5cdC8vIGFyZSB2aXNpdGVkIGluIHRoZSBmb3VydGggcGFydCBvZiB0aGUgZGlmZiBhbmQgaW4gdGhlIGByZW1vdmVOb2Rlc2AgbG9vcC5cblxuXHQvLyAjIyBEaWZmaW5nXG5cdC8vXG5cdC8vIFJlYWRpbmcgaHR0cHM6Ly9naXRodWIuY29tL2xvY2Fsdm9pZC9pdmkvYmxvYi9kZGMwOWQwNmFiYWVmNDUyNDhlNjEzM2Y3MDQwZDAwZDNjNmJlODUzL3BhY2thZ2VzL2l2aS9zcmMvdmRvbS9pbXBsZW1lbnRhdGlvbi50cyNMNjE3LUw4Mzdcblx0Ly8gbWF5IGJlIGdvb2QgZm9yIGNvbnRleHQgb24gbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlLWJhc2VkIGxvZ2ljIGZvciBtb3Zpbmcgbm9kZXMuXG5cdC8vXG5cdC8vIEluIG9yZGVyIHRvIGRpZmYga2V5ZWQgbGlzdHMsIG9uZSBoYXMgdG9cblx0Ly9cblx0Ly8gMSkgbWF0Y2ggbm9kZXMgaW4gYm90aCBsaXN0cywgcGVyIGtleSwgYW5kIHVwZGF0ZSB0aGVtIGFjY29yZGluZ2x5XG5cdC8vIDIpIGNyZWF0ZSB0aGUgbm9kZXMgcHJlc2VudCBpbiB0aGUgbmV3IGxpc3QsIGJ1dCBhYnNlbnQgaW4gdGhlIG9sZCBvbmVcblx0Ly8gMykgcmVtb3ZlIHRoZSBub2RlcyBwcmVzZW50IGluIHRoZSBvbGQgbGlzdCwgYnV0IGFic2VudCBpbiB0aGUgbmV3IG9uZVxuXHQvLyA0KSBmaWd1cmUgb3V0IHdoYXQgbm9kZXMgaW4gMSkgdG8gbW92ZSBpbiBvcmRlciB0byBtaW5pbWl6ZSB0aGUgRE9NIG9wZXJhdGlvbnMuXG5cdC8vXG5cdC8vIFRvIGFjaGlldmUgMSkgb25lIGNhbiBjcmVhdGUgYSBkaWN0aW9uYXJ5IG9mIGtleXMgPT4gaW5kZXggKGZvciB0aGUgb2xkIGxpc3QpLCB0aGVuIGl0ZXJhdGVcblx0Ly8gb3ZlciB0aGUgbmV3IGxpc3QgYW5kIGZvciBlYWNoIG5ldyB2bm9kZSwgZmluZCB0aGUgY29ycmVzcG9uZGluZyB2bm9kZSBpbiB0aGUgb2xkIGxpc3QgdXNpbmdcblx0Ly8gdGhlIG1hcC5cblx0Ly8gMikgaXMgYWNoaWV2ZWQgaW4gdGhlIHNhbWUgc3RlcDogaWYgYSBuZXcgbm9kZSBoYXMgbm8gY29ycmVzcG9uZGluZyBlbnRyeSBpbiB0aGUgbWFwLCBpdCBpcyBuZXdcblx0Ly8gYW5kIG11c3QgYmUgY3JlYXRlZC5cblx0Ly8gRm9yIHRoZSByZW1vdmFscywgd2UgYWN0dWFsbHkgcmVtb3ZlIHRoZSBub2RlcyB0aGF0IGhhdmUgYmVlbiB1cGRhdGVkIGZyb20gdGhlIG9sZCBsaXN0LlxuXHQvLyBUaGUgbm9kZXMgdGhhdCByZW1haW4gaW4gdGhhdCBsaXN0IGFmdGVyIDEpIGFuZCAyKSBoYXZlIGJlZW4gcGVyZm9ybWVkIGNhbiBiZSBzYWZlbHkgcmVtb3ZlZC5cblx0Ly8gVGhlIGZvdXJ0aCBzdGVwIGlzIGEgYml0IG1vcmUgY29tcGxleCBhbmQgcmVsaWVzIG9uIHRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2UgKExJUylcblx0Ly8gYWxnb3JpdGhtLlxuXHQvL1xuXHQvLyB0aGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlIGlzIHRoZSBsaXN0IG9mIG5vZGVzIHRoYXQgY2FuIHJlbWFpbiBpbiBwbGFjZS4gSW1hZ2luZSBnb2luZ1xuXHQvLyBmcm9tIGAxLDIsMyw0LDVgIHRvIGA0LDUsMSwyLDNgIHdoZXJlIHRoZSBudW1iZXJzIGFyZSBub3QgbmVjZXNzYXJpbHkgdGhlIGtleXMsIGJ1dCB0aGUgaW5kaWNlc1xuXHQvLyBjb3JyZXNwb25kaW5nIHRvIHRoZSBrZXllZCBub2RlcyBpbiB0aGUgb2xkIGxpc3QgKGtleWVkIG5vZGVzIGBlLGQsYyxiLGFgID0+IGBiLGEsZSxkLGNgIHdvdWxkXG5cdC8vICBtYXRjaCB0aGUgYWJvdmUgbGlzdHMsIGZvciBleGFtcGxlKS5cblx0Ly9cblx0Ly8gSW4gdGhlcmUgYXJlIHR3byBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlczogYDQsNWAgYW5kIGAxLDIsM2AsIHRoZSBsYXR0ZXIgYmVpbmcgdGhlIGxvbmdlc3QuIFdlXG5cdC8vIGNhbiB1cGRhdGUgdGhvc2Ugbm9kZXMgd2l0aG91dCBtb3ZpbmcgdGhlbSwgYW5kIG9ubHkgY2FsbCBgaW5zZXJ0Tm9kZWAgb24gYDRgIGFuZCBgNWAuXG5cdC8vXG5cdC8vIEBsb2NhbHZvaWQgYWRhcHRlZCB0aGUgYWxnbyB0byBhbHNvIHN1cHBvcnQgbm9kZSBkZWxldGlvbnMgYW5kIGluc2VydGlvbnMgKHRoZSBgbGlzYCBpcyBhY3R1YWxseVxuXHQvLyB0aGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlICpvZiBvbGQgbm9kZXMgc3RpbGwgcHJlc2VudCBpbiB0aGUgbmV3IGxpc3QqKS5cblx0Ly9cblx0Ly8gSXQgaXMgYSBnZW5lcmFsIGFsZ29yaXRobSB0aGF0IGlzIGZpcmVwcm9vZiBpbiBhbGwgY2lyY3Vtc3RhbmNlcywgYnV0IGl0IHJlcXVpcmVzIHRoZSBhbGxvY2F0aW9uXG5cdC8vIGFuZCB0aGUgY29uc3RydWN0aW9uIG9mIGEgYGtleSA9PiBvbGRJbmRleGAgbWFwLCBhbmQgdGhyZWUgYXJyYXlzIChvbmUgd2l0aCBgbmV3SW5kZXggPT4gb2xkSW5kZXhgLFxuXHQvLyB0aGUgYExJU2AgYW5kIGEgdGVtcG9yYXJ5IG9uZSB0byBjcmVhdGUgdGhlIExJUykuXG5cdC8vXG5cdC8vIFNvIHdlIGNoZWF0IHdoZXJlIHdlIGNhbjogaWYgdGhlIHRhaWxzIG9mIHRoZSBsaXN0cyBhcmUgaWRlbnRpY2FsLCB0aGV5IGFyZSBndWFyYW50ZWVkIHRvIGJlIHBhcnQgb2Zcblx0Ly8gdGhlIExJUyBhbmQgY2FuIGJlIHVwZGF0ZWQgd2l0aG91dCBtb3ZpbmcgdGhlbS5cblx0Ly9cblx0Ly8gSWYgdHdvIG5vZGVzIGFyZSBzd2FwcGVkLCB0aGV5IGFyZSBndWFyYW50ZWVkIG5vdCB0byBiZSBwYXJ0IG9mIHRoZSBMSVMsIGFuZCBtdXN0IGJlIG1vdmVkICh3aXRoXG5cdC8vIHRoZSBleGNlcHRpb24gb2YgdGhlIGxhc3Qgbm9kZSBpZiB0aGUgbGlzdCBpcyBmdWxseSByZXZlcnNlZCkuXG5cdC8vXG5cdC8vICMjIEZpbmRpbmcgdGhlIG5leHQgc2libGluZy5cblx0Ly9cblx0Ly8gYHVwZGF0ZU5vZGUoKWAgYW5kIGBjcmVhdGVOb2RlKClgIGV4cGVjdCBhIG5leHRTaWJsaW5nIHBhcmFtZXRlciB0byBwZXJmb3JtIERPTSBvcGVyYXRpb25zLlxuXHQvLyBXaGVuIHRoZSBsaXN0IGlzIGJlaW5nIHRyYXZlcnNlZCB0b3AtZG93biwgYXQgYW55IGluZGV4LCB0aGUgRE9NIG5vZGVzIHVwIHRvIHRoZSBwcmV2aW91c1xuXHQvLyB2bm9kZSByZWZsZWN0IHRoZSBjb250ZW50IG9mIHRoZSBuZXcgbGlzdCwgd2hlcmVhcyB0aGUgcmVzdCBvZiB0aGUgRE9NIG5vZGVzIHJlZmxlY3QgdGhlIG9sZFxuXHQvLyBsaXN0LiBUaGUgbmV4dCBzaWJsaW5nIG11c3QgYmUgbG9va2VkIGZvciBpbiB0aGUgb2xkIGxpc3QgdXNpbmcgYGdldE5leHRTaWJsaW5nKC4uLiBvbGRTdGFydCArIDEgLi4uKWAuXG5cdC8vXG5cdC8vIEluIHRoZSBvdGhlciBzY2VuYXJpb3MgKHN3YXBzLCB1cHdhcmRzIHRyYXZlcnNhbCwgbWFwLWJhc2VkIGRpZmYpLFxuXHQvLyB0aGUgbmV3IHZub2RlcyBsaXN0IGlzIHRyYXZlcnNlZCB1cHdhcmRzLiBUaGUgRE9NIG5vZGVzIGF0IHRoZSBib3R0b20gb2YgdGhlIGxpc3QgcmVmbGVjdCB0aGVcblx0Ly8gYm90dG9tIHBhcnQgb2YgdGhlIG5ldyB2bm9kZXMgbGlzdCwgYW5kIHdlIGNhbiB1c2UgdGhlIGB2LmRvbWAgIHZhbHVlIG9mIHRoZSBwcmV2aW91cyBub2RlXG5cdC8vIGFzIHRoZSBuZXh0IHNpYmxpbmcgKGNhY2hlZCBpbiB0aGUgYG5leHRTaWJsaW5nYCB2YXJpYWJsZSkuXG5cblxuXHQvLyAjIyBET00gbm9kZSBtb3Zlc1xuXHQvL1xuXHQvLyBJbiBtb3N0IHNjZW5hcmlvcyBgdXBkYXRlTm9kZSgpYCBhbmQgYGNyZWF0ZU5vZGUoKWAgcGVyZm9ybSB0aGUgRE9NIG9wZXJhdGlvbnMuIEhvd2V2ZXIsXG5cdC8vIHRoaXMgaXMgbm90IHRoZSBjYXNlIGlmIHRoZSBub2RlIG1vdmVkIChzZWNvbmQgYW5kIGZvdXJ0aCBwYXJ0IG9mIHRoZSBkaWZmIGFsZ28pLiBXZSBtb3ZlXG5cdC8vIHRoZSBvbGQgRE9NIG5vZGVzIGJlZm9yZSB1cGRhdGVOb2RlIHJ1bnMgYmVjYXVzZSBpdCBlbmFibGVzIHVzIHRvIHVzZSB0aGUgY2FjaGVkIGBuZXh0U2libGluZ2Bcblx0Ly8gdmFyaWFibGUgcmF0aGVyIHRoYW4gZmV0Y2hpbmcgaXQgdXNpbmcgYGdldE5leHRTaWJsaW5nKClgLlxuXHQvL1xuXHQvLyBUaGUgZm91cnRoIHBhcnQgb2YgdGhlIGRpZmYgY3VycmVudGx5IGluc2VydHMgbm9kZXMgdW5jb25kaXRpb25hbGx5LCBsZWFkaW5nIHRvIGlzc3Vlc1xuXHQvLyBsaWtlICMxNzkxIGFuZCAjMTk5OS4gV2UgbmVlZCB0byBiZSBzbWFydGVyIGFib3V0IHRob3NlIHNpdHVhdGlvbnMgd2hlcmUgYWRqYXNjZW50IG9sZFxuXHQvLyBub2RlcyByZW1haW4gdG9nZXRoZXIgaW4gdGhlIG5ldyBsaXN0IGluIGEgd2F5IHRoYXQgaXNuJ3QgY292ZXJlZCBieSBwYXJ0cyBvbmUgYW5kXG5cdC8vIHRocmVlIG9mIHRoZSBkaWZmIGFsZ28uXG5cblx0ZnVuY3Rpb24gdXBkYXRlTm9kZXMocGFyZW50LCBvbGQsIHZub2RlcywgaG9va3MsIG5leHRTaWJsaW5nLCBucykge1xuXHRcdGlmIChvbGQgPT09IHZub2RlcyB8fCBvbGQgPT0gbnVsbCAmJiB2bm9kZXMgPT0gbnVsbCkgcmV0dXJuXG5cdFx0ZWxzZSBpZiAob2xkID09IG51bGwgfHwgb2xkLmxlbmd0aCA9PT0gMCkgY3JlYXRlTm9kZXMocGFyZW50LCB2bm9kZXMsIDAsIHZub2Rlcy5sZW5ndGgsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0ZWxzZSBpZiAodm5vZGVzID09IG51bGwgfHwgdm5vZGVzLmxlbmd0aCA9PT0gMCkgcmVtb3ZlTm9kZXMocGFyZW50LCBvbGQsIDAsIG9sZC5sZW5ndGgpXG5cdFx0ZWxzZSB7XG5cdFx0XHR2YXIgaXNPbGRLZXllZCA9IG9sZFswXSAhPSBudWxsICYmIG9sZFswXS5rZXkgIT0gbnVsbFxuXHRcdFx0dmFyIGlzS2V5ZWQgPSB2bm9kZXNbMF0gIT0gbnVsbCAmJiB2bm9kZXNbMF0ua2V5ICE9IG51bGxcblx0XHRcdHZhciBzdGFydCA9IDAsIG9sZFN0YXJ0ID0gMFxuXHRcdFx0aWYgKCFpc09sZEtleWVkKSB3aGlsZSAob2xkU3RhcnQgPCBvbGQubGVuZ3RoICYmIG9sZFtvbGRTdGFydF0gPT0gbnVsbCkgb2xkU3RhcnQrK1xuXHRcdFx0aWYgKCFpc0tleWVkKSB3aGlsZSAoc3RhcnQgPCB2bm9kZXMubGVuZ3RoICYmIHZub2Rlc1tzdGFydF0gPT0gbnVsbCkgc3RhcnQrK1xuXHRcdFx0aWYgKGlzS2V5ZWQgPT09IG51bGwgJiYgaXNPbGRLZXllZCA9PSBudWxsKSByZXR1cm4gLy8gYm90aCBsaXN0cyBhcmUgZnVsbCBvZiBudWxsc1xuXHRcdFx0aWYgKGlzT2xkS2V5ZWQgIT09IGlzS2V5ZWQpIHtcblx0XHRcdFx0cmVtb3ZlTm9kZXMocGFyZW50LCBvbGQsIG9sZFN0YXJ0LCBvbGQubGVuZ3RoKVxuXHRcdFx0XHRjcmVhdGVOb2RlcyhwYXJlbnQsIHZub2Rlcywgc3RhcnQsIHZub2Rlcy5sZW5ndGgsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHR9IGVsc2UgaWYgKCFpc0tleWVkKSB7XG5cdFx0XHRcdC8vIERvbid0IGluZGV4IHBhc3QgdGhlIGVuZCBvZiBlaXRoZXIgbGlzdCAoY2F1c2VzIGRlb3B0cykuXG5cdFx0XHRcdHZhciBjb21tb25MZW5ndGggPSBvbGQubGVuZ3RoIDwgdm5vZGVzLmxlbmd0aCA/IG9sZC5sZW5ndGggOiB2bm9kZXMubGVuZ3RoXG5cdFx0XHRcdC8vIFJld2luZCBpZiBuZWNlc3NhcnkgdG8gdGhlIGZpcnN0IG5vbi1udWxsIGluZGV4IG9uIGVpdGhlciBzaWRlLlxuXHRcdFx0XHQvLyBXZSBjb3VsZCBhbHRlcm5hdGl2ZWx5IGVpdGhlciBleHBsaWNpdGx5IGNyZWF0ZSBvciByZW1vdmUgbm9kZXMgd2hlbiBgc3RhcnQgIT09IG9sZFN0YXJ0YFxuXHRcdFx0XHQvLyBidXQgdGhhdCB3b3VsZCBiZSBvcHRpbWl6aW5nIGZvciBzcGFyc2UgbGlzdHMgd2hpY2ggYXJlIG1vcmUgcmFyZSB0aGFuIGRlbnNlIG9uZXMuXG5cdFx0XHRcdHN0YXJ0ID0gc3RhcnQgPCBvbGRTdGFydCA/IHN0YXJ0IDogb2xkU3RhcnRcblx0XHRcdFx0Zm9yICg7IHN0YXJ0IDwgY29tbW9uTGVuZ3RoOyBzdGFydCsrKSB7XG5cdFx0XHRcdFx0byA9IG9sZFtzdGFydF1cblx0XHRcdFx0XHR2ID0gdm5vZGVzW3N0YXJ0XVxuXHRcdFx0XHRcdGlmIChvID09PSB2IHx8IG8gPT0gbnVsbCAmJiB2ID09IG51bGwpIGNvbnRpbnVlXG5cdFx0XHRcdFx0ZWxzZSBpZiAobyA9PSBudWxsKSBjcmVhdGVOb2RlKHBhcmVudCwgdiwgaG9va3MsIG5zLCBnZXROZXh0U2libGluZyhvbGQsIHN0YXJ0ICsgMSwgbmV4dFNpYmxpbmcpKVxuXHRcdFx0XHRcdGVsc2UgaWYgKHYgPT0gbnVsbCkgcmVtb3ZlTm9kZShwYXJlbnQsIG8pXG5cdFx0XHRcdFx0ZWxzZSB1cGRhdGVOb2RlKHBhcmVudCwgbywgdiwgaG9va3MsIGdldE5leHRTaWJsaW5nKG9sZCwgc3RhcnQgKyAxLCBuZXh0U2libGluZyksIG5zKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvbGQubGVuZ3RoID4gY29tbW9uTGVuZ3RoKSByZW1vdmVOb2RlcyhwYXJlbnQsIG9sZCwgc3RhcnQsIG9sZC5sZW5ndGgpXG5cdFx0XHRcdGlmICh2bm9kZXMubGVuZ3RoID4gY29tbW9uTGVuZ3RoKSBjcmVhdGVOb2RlcyhwYXJlbnQsIHZub2Rlcywgc3RhcnQsIHZub2Rlcy5sZW5ndGgsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBrZXllZCBkaWZmXG5cdFx0XHRcdHZhciBvbGRFbmQgPSBvbGQubGVuZ3RoIC0gMSwgZW5kID0gdm5vZGVzLmxlbmd0aCAtIDEsIG1hcCwgbywgdiwgb2UsIHZlLCB0b3BTaWJsaW5nXG5cblx0XHRcdFx0Ly8gYm90dG9tLXVwXG5cdFx0XHRcdHdoaWxlIChvbGRFbmQgPj0gb2xkU3RhcnQgJiYgZW5kID49IHN0YXJ0KSB7XG5cdFx0XHRcdFx0b2UgPSBvbGRbb2xkRW5kXVxuXHRcdFx0XHRcdHZlID0gdm5vZGVzW2VuZF1cblx0XHRcdFx0XHRpZiAob2Uua2V5ICE9PSB2ZS5rZXkpIGJyZWFrXG5cdFx0XHRcdFx0aWYgKG9lICE9PSB2ZSkgdXBkYXRlTm9kZShwYXJlbnQsIG9lLCB2ZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRcdFx0XHRpZiAodmUuZG9tICE9IG51bGwpIG5leHRTaWJsaW5nID0gdmUuZG9tXG5cdFx0XHRcdFx0b2xkRW5kLS0sIGVuZC0tXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gdG9wLWRvd25cblx0XHRcdFx0d2hpbGUgKG9sZEVuZCA+PSBvbGRTdGFydCAmJiBlbmQgPj0gc3RhcnQpIHtcblx0XHRcdFx0XHRvID0gb2xkW29sZFN0YXJ0XVxuXHRcdFx0XHRcdHYgPSB2bm9kZXNbc3RhcnRdXG5cdFx0XHRcdFx0aWYgKG8ua2V5ICE9PSB2LmtleSkgYnJlYWtcblx0XHRcdFx0XHRvbGRTdGFydCsrLCBzdGFydCsrXG5cdFx0XHRcdFx0aWYgKG8gIT09IHYpIHVwZGF0ZU5vZGUocGFyZW50LCBvLCB2LCBob29rcywgZ2V0TmV4dFNpYmxpbmcob2xkLCBvbGRTdGFydCwgbmV4dFNpYmxpbmcpLCBucylcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBzd2FwcyBhbmQgbGlzdCByZXZlcnNhbHNcblx0XHRcdFx0d2hpbGUgKG9sZEVuZCA+PSBvbGRTdGFydCAmJiBlbmQgPj0gc3RhcnQpIHtcblx0XHRcdFx0XHRpZiAoc3RhcnQgPT09IGVuZCkgYnJlYWtcblx0XHRcdFx0XHRpZiAoby5rZXkgIT09IHZlLmtleSB8fCBvZS5rZXkgIT09IHYua2V5KSBicmVha1xuXHRcdFx0XHRcdHRvcFNpYmxpbmcgPSBnZXROZXh0U2libGluZyhvbGQsIG9sZFN0YXJ0LCBuZXh0U2libGluZylcblx0XHRcdFx0XHRtb3ZlTm9kZXMocGFyZW50LCBvZSwgdG9wU2libGluZylcblx0XHRcdFx0XHRpZiAob2UgIT09IHYpIHVwZGF0ZU5vZGUocGFyZW50LCBvZSwgdiwgaG9va3MsIHRvcFNpYmxpbmcsIG5zKVxuXHRcdFx0XHRcdGlmICgrK3N0YXJ0IDw9IC0tZW5kKSBtb3ZlTm9kZXMocGFyZW50LCBvLCBuZXh0U2libGluZylcblx0XHRcdFx0XHRpZiAobyAhPT0gdmUpIHVwZGF0ZU5vZGUocGFyZW50LCBvLCB2ZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRcdFx0XHRpZiAodmUuZG9tICE9IG51bGwpIG5leHRTaWJsaW5nID0gdmUuZG9tXG5cdFx0XHRcdFx0b2xkU3RhcnQrKzsgb2xkRW5kLS1cblx0XHRcdFx0XHRvZSA9IG9sZFtvbGRFbmRdXG5cdFx0XHRcdFx0dmUgPSB2bm9kZXNbZW5kXVxuXHRcdFx0XHRcdG8gPSBvbGRbb2xkU3RhcnRdXG5cdFx0XHRcdFx0diA9IHZub2Rlc1tzdGFydF1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBib3R0b20gdXAgb25jZSBhZ2FpblxuXHRcdFx0XHR3aGlsZSAob2xkRW5kID49IG9sZFN0YXJ0ICYmIGVuZCA+PSBzdGFydCkge1xuXHRcdFx0XHRcdGlmIChvZS5rZXkgIT09IHZlLmtleSkgYnJlYWtcblx0XHRcdFx0XHRpZiAob2UgIT09IHZlKSB1cGRhdGVOb2RlKHBhcmVudCwgb2UsIHZlLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0XHRcdGlmICh2ZS5kb20gIT0gbnVsbCkgbmV4dFNpYmxpbmcgPSB2ZS5kb21cblx0XHRcdFx0XHRvbGRFbmQtLSwgZW5kLS1cblx0XHRcdFx0XHRvZSA9IG9sZFtvbGRFbmRdXG5cdFx0XHRcdFx0dmUgPSB2bm9kZXNbZW5kXVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGFydCA+IGVuZCkgcmVtb3ZlTm9kZXMocGFyZW50LCBvbGQsIG9sZFN0YXJ0LCBvbGRFbmQgKyAxKVxuXHRcdFx0XHRlbHNlIGlmIChvbGRTdGFydCA+IG9sZEVuZCkgY3JlYXRlTm9kZXMocGFyZW50LCB2bm9kZXMsIHN0YXJ0LCBlbmQgKyAxLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHQvLyBpbnNwaXJlZCBieSBpdmkgaHR0cHM6Ly9naXRodWIuY29tL2l2aWpzL2l2aS8gYnkgQm9yaXMgS2F1bFxuXHRcdFx0XHRcdHZhciBvcmlnaW5hbE5leHRTaWJsaW5nID0gbmV4dFNpYmxpbmcsIHZub2Rlc0xlbmd0aCA9IGVuZCAtIHN0YXJ0ICsgMSwgb2xkSW5kaWNlcyA9IG5ldyBBcnJheSh2bm9kZXNMZW5ndGgpLCBsaT0wLCBpPTAsIHBvcyA9IDIxNDc0ODM2NDcsIG1hdGNoZWQgPSAwLCBtYXAsIGxpc0luZGljZXNcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdm5vZGVzTGVuZ3RoOyBpKyspIG9sZEluZGljZXNbaV0gPSAtMVxuXHRcdFx0XHRcdGZvciAoaSA9IGVuZDsgaSA+PSBzdGFydDsgaS0tKSB7XG5cdFx0XHRcdFx0XHRpZiAobWFwID09IG51bGwpIG1hcCA9IGdldEtleU1hcChvbGQsIG9sZFN0YXJ0LCBvbGRFbmQgKyAxKVxuXHRcdFx0XHRcdFx0dmUgPSB2bm9kZXNbaV1cblx0XHRcdFx0XHRcdHZhciBvbGRJbmRleCA9IG1hcFt2ZS5rZXldXG5cdFx0XHRcdFx0XHRpZiAob2xkSW5kZXggIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRwb3MgPSAob2xkSW5kZXggPCBwb3MpID8gb2xkSW5kZXggOiAtMSAvLyBiZWNvbWVzIC0xIGlmIG5vZGVzIHdlcmUgcmUtb3JkZXJlZFxuXHRcdFx0XHRcdFx0XHRvbGRJbmRpY2VzW2ktc3RhcnRdID0gb2xkSW5kZXhcblx0XHRcdFx0XHRcdFx0b2UgPSBvbGRbb2xkSW5kZXhdXG5cdFx0XHRcdFx0XHRcdG9sZFtvbGRJbmRleF0gPSBudWxsXG5cdFx0XHRcdFx0XHRcdGlmIChvZSAhPT0gdmUpIHVwZGF0ZU5vZGUocGFyZW50LCBvZSwgdmUsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHRcdFx0XHRcdGlmICh2ZS5kb20gIT0gbnVsbCkgbmV4dFNpYmxpbmcgPSB2ZS5kb21cblx0XHRcdFx0XHRcdFx0bWF0Y2hlZCsrXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5leHRTaWJsaW5nID0gb3JpZ2luYWxOZXh0U2libGluZ1xuXHRcdFx0XHRcdGlmIChtYXRjaGVkICE9PSBvbGRFbmQgLSBvbGRTdGFydCArIDEpIHJlbW92ZU5vZGVzKHBhcmVudCwgb2xkLCBvbGRTdGFydCwgb2xkRW5kICsgMSlcblx0XHRcdFx0XHRpZiAobWF0Y2hlZCA9PT0gMCkgY3JlYXRlTm9kZXMocGFyZW50LCB2bm9kZXMsIHN0YXJ0LCBlbmQgKyAxLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKHBvcyA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdFx0Ly8gdGhlIGluZGljZXMgb2YgdGhlIGluZGljZXMgb2YgdGhlIGl0ZW1zIHRoYXQgYXJlIHBhcnQgb2YgdGhlXG5cdFx0XHRcdFx0XHRcdC8vIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBpbiB0aGUgb2xkSW5kaWNlcyBsaXN0XG5cdFx0XHRcdFx0XHRcdGxpc0luZGljZXMgPSBtYWtlTGlzSW5kaWNlcyhvbGRJbmRpY2VzKVxuXHRcdFx0XHRcdFx0XHRsaSA9IGxpc0luZGljZXMubGVuZ3RoIC0gMVxuXHRcdFx0XHRcdFx0XHRmb3IgKGkgPSBlbmQ7IGkgPj0gc3RhcnQ7IGktLSkge1xuXHRcdFx0XHRcdFx0XHRcdHYgPSB2bm9kZXNbaV1cblx0XHRcdFx0XHRcdFx0XHRpZiAob2xkSW5kaWNlc1tpLXN0YXJ0XSA9PT0gLTEpIGNyZWF0ZU5vZGUocGFyZW50LCB2LCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGxpc0luZGljZXNbbGldID09PSBpIC0gc3RhcnQpIGxpLS1cblx0XHRcdFx0XHRcdFx0XHRcdGVsc2UgbW92ZU5vZGVzKHBhcmVudCwgdiwgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGlmICh2LmRvbSAhPSBudWxsKSBuZXh0U2libGluZyA9IHZub2Rlc1tpXS5kb21cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Zm9yIChpID0gZW5kOyBpID49IHN0YXJ0OyBpLS0pIHtcblx0XHRcdFx0XHRcdFx0XHR2ID0gdm5vZGVzW2ldXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG9sZEluZGljZXNbaS1zdGFydF0gPT09IC0xKSBjcmVhdGVOb2RlKHBhcmVudCwgdiwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdFx0XHRcdFx0XHRpZiAodi5kb20gIT0gbnVsbCkgbmV4dFNpYmxpbmcgPSB2bm9kZXNbaV0uZG9tXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTm9kZShwYXJlbnQsIG9sZCwgdm5vZGUsIGhvb2tzLCBuZXh0U2libGluZywgbnMpIHtcblx0XHR2YXIgb2xkVGFnID0gb2xkLnRhZywgdGFnID0gdm5vZGUudGFnXG5cdFx0aWYgKG9sZFRhZyA9PT0gdGFnKSB7XG5cdFx0XHR2bm9kZS5zdGF0ZSA9IG9sZC5zdGF0ZVxuXHRcdFx0dm5vZGUuZXZlbnRzID0gb2xkLmV2ZW50c1xuXHRcdFx0aWYgKHNob3VsZE5vdFVwZGF0ZSh2bm9kZSwgb2xkKSkgcmV0dXJuXG5cdFx0XHRpZiAodHlwZW9mIG9sZFRhZyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCkge1xuXHRcdFx0XHRcdHVwZGF0ZUxpZmVjeWNsZSh2bm9kZS5hdHRycywgdm5vZGUsIGhvb2tzKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHN3aXRjaCAob2xkVGFnKSB7XG5cdFx0XHRcdFx0Y2FzZSBcIiNcIjogdXBkYXRlVGV4dChvbGQsIHZub2RlKTsgYnJlYWtcblx0XHRcdFx0XHRjYXNlIFwiPFwiOiB1cGRhdGVIVE1MKHBhcmVudCwgb2xkLCB2bm9kZSwgbnMsIG5leHRTaWJsaW5nKTsgYnJlYWtcblx0XHRcdFx0XHRjYXNlIFwiW1wiOiB1cGRhdGVGcmFnbWVudChwYXJlbnQsIG9sZCwgdm5vZGUsIGhvb2tzLCBuZXh0U2libGluZywgbnMpOyBicmVha1xuXHRcdFx0XHRcdGRlZmF1bHQ6IHVwZGF0ZUVsZW1lbnQob2xkLCB2bm9kZSwgaG9va3MsIG5zKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHVwZGF0ZUNvbXBvbmVudChwYXJlbnQsIG9sZCwgdm5vZGUsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmVtb3ZlTm9kZShwYXJlbnQsIG9sZClcblx0XHRcdGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlVGV4dChvbGQsIHZub2RlKSB7XG5cdFx0aWYgKG9sZC5jaGlsZHJlbi50b1N0cmluZygpICE9PSB2bm9kZS5jaGlsZHJlbi50b1N0cmluZygpKSB7XG5cdFx0XHRvbGQuZG9tLm5vZGVWYWx1ZSA9IHZub2RlLmNoaWxkcmVuXG5cdFx0fVxuXHRcdHZub2RlLmRvbSA9IG9sZC5kb21cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVIVE1MKHBhcmVudCwgb2xkLCB2bm9kZSwgbnMsIG5leHRTaWJsaW5nKSB7XG5cdFx0aWYgKG9sZC5jaGlsZHJlbiAhPT0gdm5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdHJlbW92ZUhUTUwocGFyZW50LCBvbGQpXG5cdFx0XHRjcmVhdGVIVE1MKHBhcmVudCwgdm5vZGUsIG5zLCBuZXh0U2libGluZylcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR2bm9kZS5kb20gPSBvbGQuZG9tXG5cdFx0XHR2bm9kZS5kb21TaXplID0gb2xkLmRvbVNpemVcblx0XHRcdHZub2RlLmluc3RhbmNlID0gb2xkLmluc3RhbmNlXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUZyYWdtZW50KHBhcmVudCwgb2xkLCB2bm9kZSwgaG9va3MsIG5leHRTaWJsaW5nLCBucykge1xuXHRcdHVwZGF0ZU5vZGVzKHBhcmVudCwgb2xkLmNoaWxkcmVuLCB2bm9kZS5jaGlsZHJlbiwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHR2YXIgZG9tU2l6ZSA9IDAsIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblx0XHR2bm9kZS5kb20gPSBudWxsXG5cdFx0aWYgKGNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIGNoaWxkID0gY2hpbGRyZW5baV1cblx0XHRcdFx0aWYgKGNoaWxkICE9IG51bGwgJiYgY2hpbGQuZG9tICE9IG51bGwpIHtcblx0XHRcdFx0XHRpZiAodm5vZGUuZG9tID09IG51bGwpIHZub2RlLmRvbSA9IGNoaWxkLmRvbVxuXHRcdFx0XHRcdGRvbVNpemUgKz0gY2hpbGQuZG9tU2l6ZSB8fCAxXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkb21TaXplICE9PSAxKSB2bm9kZS5kb21TaXplID0gZG9tU2l6ZVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVFbGVtZW50KG9sZCwgdm5vZGUsIGhvb2tzLCBucykge1xuXHRcdHZhciBlbGVtZW50ID0gdm5vZGUuZG9tID0gb2xkLmRvbVxuXHRcdG5zID0gZ2V0TmFtZVNwYWNlKHZub2RlKSB8fCBuc1xuXG5cdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJ0ZXh0YXJlYVwiKSB7XG5cdFx0XHRpZiAodm5vZGUuYXR0cnMgPT0gbnVsbCkgdm5vZGUuYXR0cnMgPSB7fVxuXHRcdFx0aWYgKHZub2RlLnRleHQgIT0gbnVsbCkge1xuXHRcdFx0XHR2bm9kZS5hdHRycy52YWx1ZSA9IHZub2RlLnRleHQgLy9GSVhNRSBoYW5kbGUgbXVsdGlwbGUgY2hpbGRyZW5cblx0XHRcdFx0dm5vZGUudGV4dCA9IHVuZGVmaW5lZFxuXHRcdFx0fVxuXHRcdH1cblx0XHR1cGRhdGVBdHRycyh2bm9kZSwgb2xkLmF0dHJzLCB2bm9kZS5hdHRycywgbnMpXG5cdFx0aWYgKCFtYXliZVNldENvbnRlbnRFZGl0YWJsZSh2bm9kZSkpIHtcblx0XHRcdGlmIChvbGQudGV4dCAhPSBudWxsICYmIHZub2RlLnRleHQgIT0gbnVsbCAmJiB2bm9kZS50ZXh0ICE9PSBcIlwiKSB7XG5cdFx0XHRcdGlmIChvbGQudGV4dC50b1N0cmluZygpICE9PSB2bm9kZS50ZXh0LnRvU3RyaW5nKCkpIG9sZC5kb20uZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSB2bm9kZS50ZXh0XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0aWYgKG9sZC50ZXh0ICE9IG51bGwpIG9sZC5jaGlsZHJlbiA9IFtWbm9kZShcIiNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG9sZC50ZXh0LCB1bmRlZmluZWQsIG9sZC5kb20uZmlyc3RDaGlsZCldXG5cdFx0XHRcdGlmICh2bm9kZS50ZXh0ICE9IG51bGwpIHZub2RlLmNoaWxkcmVuID0gW1Zub2RlKFwiI1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdm5vZGUudGV4dCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXVxuXHRcdFx0XHR1cGRhdGVOb2RlcyhlbGVtZW50LCBvbGQuY2hpbGRyZW4sIHZub2RlLmNoaWxkcmVuLCBob29rcywgbnVsbCwgbnMpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudChwYXJlbnQsIG9sZCwgdm5vZGUsIGhvb2tzLCBuZXh0U2libGluZywgbnMpIHtcblx0XHR2bm9kZS5pbnN0YW5jZSA9IFZub2RlLm5vcm1hbGl6ZShjYWxsSG9vay5jYWxsKHZub2RlLnN0YXRlLnZpZXcsIHZub2RlKSlcblx0XHRpZiAodm5vZGUuaW5zdGFuY2UgPT09IHZub2RlKSB0aHJvdyBFcnJvcihcIkEgdmlldyBjYW5ub3QgcmV0dXJuIHRoZSB2bm9kZSBpdCByZWNlaXZlZCBhcyBhcmd1bWVudFwiKVxuXHRcdHVwZGF0ZUxpZmVjeWNsZSh2bm9kZS5zdGF0ZSwgdm5vZGUsIGhvb2tzKVxuXHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsKSB1cGRhdGVMaWZlY3ljbGUodm5vZGUuYXR0cnMsIHZub2RlLCBob29rcylcblx0XHRpZiAodm5vZGUuaW5zdGFuY2UgIT0gbnVsbCkge1xuXHRcdFx0aWYgKG9sZC5pbnN0YW5jZSA9PSBudWxsKSBjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUuaW5zdGFuY2UsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHRlbHNlIHVwZGF0ZU5vZGUocGFyZW50LCBvbGQuaW5zdGFuY2UsIHZub2RlLmluc3RhbmNlLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0dm5vZGUuZG9tID0gdm5vZGUuaW5zdGFuY2UuZG9tXG5cdFx0XHR2bm9kZS5kb21TaXplID0gdm5vZGUuaW5zdGFuY2UuZG9tU2l6ZVxuXHRcdH1cblx0XHRlbHNlIGlmIChvbGQuaW5zdGFuY2UgIT0gbnVsbCkge1xuXHRcdFx0cmVtb3ZlTm9kZShwYXJlbnQsIG9sZC5pbnN0YW5jZSlcblx0XHRcdHZub2RlLmRvbSA9IHVuZGVmaW5lZFxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IDBcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR2bm9kZS5kb20gPSBvbGQuZG9tXG5cdFx0XHR2bm9kZS5kb21TaXplID0gb2xkLmRvbVNpemVcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gZ2V0S2V5TWFwKHZub2Rlcywgc3RhcnQsIGVuZCkge1xuXHRcdHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cdFx0Zm9yICg7IHN0YXJ0IDwgZW5kOyBzdGFydCsrKSB7XG5cdFx0XHR2YXIgdm5vZGUgPSB2bm9kZXNbc3RhcnRdXG5cdFx0XHRpZiAodm5vZGUgIT0gbnVsbCkge1xuXHRcdFx0XHR2YXIga2V5ID0gdm5vZGUua2V5XG5cdFx0XHRcdGlmIChrZXkgIT0gbnVsbCkgbWFwW2tleV0gPSBzdGFydFxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbWFwXG5cdH1cblx0Ly8gTGlmdGVkIGZyb20gaXZpIGh0dHBzOi8vZ2l0aHViLmNvbS9pdmlqcy9pdmkvXG5cdC8vIHRha2VzIGEgbGlzdCBvZiB1bmlxdWUgbnVtYmVycyAoLTEgaXMgc3BlY2lhbCBhbmQgY2FuXG5cdC8vIG9jY3VyIG11bHRpcGxlIHRpbWVzKSBhbmQgcmV0dXJucyBhbiBhcnJheSB3aXRoIHRoZSBpbmRpY2VzXG5cdC8vIG9mIHRoZSBpdGVtcyB0aGF0IGFyZSBwYXJ0IG9mIHRoZSBsb25nZXN0IGluY3JlYXNpbmdcblx0Ly8gc3Vic2VxdWVjZVxuXHR2YXIgbGlzVGVtcCA9IFtdXG5cdGZ1bmN0aW9uIG1ha2VMaXNJbmRpY2VzKGEpIHtcblx0XHR2YXIgcmVzdWx0ID0gWzBdXG5cdFx0dmFyIHUgPSAwLCB2ID0gMCwgaSA9IDBcblx0XHR2YXIgaWwgPSBsaXNUZW1wLmxlbmd0aCA9IGEubGVuZ3RoXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpbDsgaSsrKSBsaXNUZW1wW2ldID0gYVtpXVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaWw7ICsraSkge1xuXHRcdFx0aWYgKGFbaV0gPT09IC0xKSBjb250aW51ZVxuXHRcdFx0dmFyIGogPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdXG5cdFx0XHRpZiAoYVtqXSA8IGFbaV0pIHtcblx0XHRcdFx0bGlzVGVtcFtpXSA9IGpcblx0XHRcdFx0cmVzdWx0LnB1c2goaSlcblx0XHRcdFx0Y29udGludWVcblx0XHRcdH1cblx0XHRcdHUgPSAwXG5cdFx0XHR2ID0gcmVzdWx0Lmxlbmd0aCAtIDFcblx0XHRcdHdoaWxlICh1IDwgdikge1xuXHRcdFx0XHQvLyBGYXN0IGludGVnZXIgYXZlcmFnZSB3aXRob3V0IG92ZXJmbG93LlxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuXHRcdFx0XHR2YXIgYyA9ICh1ID4+PiAxKSArICh2ID4+PiAxKSArICh1ICYgdiAmIDEpXG5cdFx0XHRcdGlmIChhW3Jlc3VsdFtjXV0gPCBhW2ldKSB7XG5cdFx0XHRcdFx0dSA9IGMgKyAxXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0diA9IGNcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGFbaV0gPCBhW3Jlc3VsdFt1XV0pIHtcblx0XHRcdFx0aWYgKHUgPiAwKSBsaXNUZW1wW2ldID0gcmVzdWx0W3UgLSAxXVxuXHRcdFx0XHRyZXN1bHRbdV0gPSBpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHUgPSByZXN1bHQubGVuZ3RoXG5cdFx0diA9IHJlc3VsdFt1IC0gMV1cblx0XHR3aGlsZSAodS0tID4gMCkge1xuXHRcdFx0cmVzdWx0W3VdID0gdlxuXHRcdFx0diA9IGxpc1RlbXBbdl1cblx0XHR9XG5cdFx0bGlzVGVtcC5sZW5ndGggPSAwXG5cdFx0cmV0dXJuIHJlc3VsdFxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0TmV4dFNpYmxpbmcodm5vZGVzLCBpLCBuZXh0U2libGluZykge1xuXHRcdGZvciAoOyBpIDwgdm5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodm5vZGVzW2ldICE9IG51bGwgJiYgdm5vZGVzW2ldLmRvbSAhPSBudWxsKSByZXR1cm4gdm5vZGVzW2ldLmRvbVxuXHRcdH1cblx0XHRyZXR1cm4gbmV4dFNpYmxpbmdcblx0fVxuXG5cdC8vIFRoaXMgY292ZXJzIGEgcmVhbGx5IHNwZWNpZmljIGVkZ2UgY2FzZTpcblx0Ly8gLSBQYXJlbnQgbm9kZSBpcyBrZXllZCBhbmQgY29udGFpbnMgY2hpbGRcblx0Ly8gLSBDaGlsZCBpcyByZW1vdmVkLCByZXR1cm5zIHVucmVzb2x2ZWQgcHJvbWlzZSBpbiBgb25iZWZvcmVyZW1vdmVgXG5cdC8vIC0gUGFyZW50IG5vZGUgaXMgbW92ZWQgaW4ga2V5ZWQgZGlmZlxuXHQvLyAtIFJlbWFpbmluZyBjaGlsZHJlbiBzdGlsbCBuZWVkIG1vdmVkIGFwcHJvcHJpYXRlbHlcblx0Ly9cblx0Ly8gSWRlYWxseSwgSSdkIHRyYWNrIHJlbW92ZWQgbm9kZXMgYXMgd2VsbCwgYnV0IHRoYXQgaW50cm9kdWNlcyBhIGxvdCBtb3JlXG5cdC8vIGNvbXBsZXhpdHkgYW5kIEknbSBub3QgZXhhY3RseSBpbnRlcmVzdGVkIGluIGRvaW5nIHRoYXQuXG5cdGZ1bmN0aW9uIG1vdmVOb2RlcyhwYXJlbnQsIHZub2RlLCBuZXh0U2libGluZykge1xuXHRcdHZhciBmcmFnID0gJGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblx0XHRtb3ZlQ2hpbGRUb0ZyYWcocGFyZW50LCBmcmFnLCB2bm9kZSlcblx0XHRpbnNlcnROb2RlKHBhcmVudCwgZnJhZywgbmV4dFNpYmxpbmcpXG5cdH1cblx0ZnVuY3Rpb24gbW92ZUNoaWxkVG9GcmFnKHBhcmVudCwgZnJhZywgdm5vZGUpIHtcblx0XHQvLyBEb2RnZSB0aGUgcmVjdXJzaW9uIG92ZXJoZWFkIGluIGEgZmV3IG9mIHRoZSBtb3N0IGNvbW1vbiBjYXNlcy5cblx0XHR3aGlsZSAodm5vZGUuZG9tICE9IG51bGwgJiYgdm5vZGUuZG9tLnBhcmVudE5vZGUgPT09IHBhcmVudCkge1xuXHRcdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0dm5vZGUgPSB2bm9kZS5pbnN0YW5jZVxuXHRcdFx0XHRpZiAodm5vZGUgIT0gbnVsbCkgY29udGludWVcblx0XHRcdH0gZWxzZSBpZiAodm5vZGUudGFnID09PSBcIjxcIikge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZub2RlLmluc3RhbmNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0ZnJhZy5hcHBlbmRDaGlsZCh2bm9kZS5pbnN0YW5jZVtpXSlcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh2bm9kZS50YWcgIT09IFwiW1wiKSB7XG5cdFx0XHRcdC8vIERvbid0IHJlY3Vyc2UgZm9yIHRleHQgbm9kZXMgKm9yKiBlbGVtZW50cywganVzdCBmcmFnbWVudHNcblx0XHRcdFx0ZnJhZy5hcHBlbmRDaGlsZCh2bm9kZS5kb20pXG5cdFx0XHR9IGVsc2UgaWYgKHZub2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHR2bm9kZSA9IHZub2RlLmNoaWxkcmVuWzBdXG5cdFx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSBjb250aW51ZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IHZub2RlLmNoaWxkcmVuW2ldXG5cdFx0XHRcdFx0aWYgKGNoaWxkICE9IG51bGwpIG1vdmVDaGlsZFRvRnJhZyhwYXJlbnQsIGZyYWcsIGNoaWxkKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRicmVha1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGluc2VydE5vZGUocGFyZW50LCBkb20sIG5leHRTaWJsaW5nKSB7XG5cdFx0aWYgKG5leHRTaWJsaW5nICE9IG51bGwpIHBhcmVudC5pbnNlcnRCZWZvcmUoZG9tLCBuZXh0U2libGluZylcblx0XHRlbHNlIHBhcmVudC5hcHBlbmRDaGlsZChkb20pXG5cdH1cblxuXHRmdW5jdGlvbiBtYXliZVNldENvbnRlbnRFZGl0YWJsZSh2bm9kZSkge1xuXHRcdGlmICh2bm9kZS5hdHRycyA9PSBudWxsIHx8IChcblx0XHRcdHZub2RlLmF0dHJzLmNvbnRlbnRlZGl0YWJsZSA9PSBudWxsICYmIC8vIGF0dHJpYnV0ZVxuXHRcdFx0dm5vZGUuYXR0cnMuY29udGVudEVkaXRhYmxlID09IG51bGwgLy8gcHJvcGVydHlcblx0XHQpKSByZXR1cm4gZmFsc2Vcblx0XHR2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdGlmIChjaGlsZHJlbiAhPSBudWxsICYmIGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBjaGlsZHJlblswXS50YWcgPT09IFwiPFwiKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNoaWxkcmVuWzBdLmNoaWxkcmVuXG5cdFx0XHRpZiAodm5vZGUuZG9tLmlubmVySFRNTCAhPT0gY29udGVudCkgdm5vZGUuZG9tLmlubmVySFRNTCA9IGNvbnRlbnRcblx0XHR9XG5cdFx0ZWxzZSBpZiAodm5vZGUudGV4dCAhPSBudWxsIHx8IGNoaWxkcmVuICE9IG51bGwgJiYgY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJDaGlsZCBub2RlIG9mIGEgY29udGVudGVkaXRhYmxlIG11c3QgYmUgdHJ1c3RlZFwiKVxuXHRcdHJldHVybiB0cnVlXG5cdH1cblxuXHQvL3JlbW92ZVxuXHRmdW5jdGlvbiByZW1vdmVOb2RlcyhwYXJlbnQsIHZub2Rlcywgc3RhcnQsIGVuZCkge1xuXHRcdGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG5cdFx0XHR2YXIgdm5vZGUgPSB2bm9kZXNbaV1cblx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSByZW1vdmVOb2RlKHBhcmVudCwgdm5vZGUpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZU5vZGUocGFyZW50LCB2bm9kZSkge1xuXHRcdHZhciBtYXNrID0gMFxuXHRcdHZhciBvcmlnaW5hbCA9IHZub2RlLnN0YXRlXG5cdFx0dmFyIHN0YXRlUmVzdWx0LCBhdHRyc1Jlc3VsdFxuXHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2bm9kZS5zdGF0ZS5vbmJlZm9yZXJlbW92ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gY2FsbEhvb2suY2FsbCh2bm9kZS5zdGF0ZS5vbmJlZm9yZXJlbW92ZSwgdm5vZGUpXG5cdFx0XHRpZiAocmVzdWx0ICE9IG51bGwgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0bWFzayA9IDFcblx0XHRcdFx0c3RhdGVSZXN1bHQgPSByZXN1bHRcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHZub2RlLmF0dHJzICYmIHR5cGVvZiB2bm9kZS5hdHRycy5vbmJlZm9yZXJlbW92ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gY2FsbEhvb2suY2FsbCh2bm9kZS5hdHRycy5vbmJlZm9yZXJlbW92ZSwgdm5vZGUpXG5cdFx0XHRpZiAocmVzdWx0ICE9IG51bGwgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2Vcblx0XHRcdFx0bWFzayB8PSAyXG5cdFx0XHRcdGF0dHJzUmVzdWx0ID0gcmVzdWx0XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNoZWNrU3RhdGUodm5vZGUsIG9yaWdpbmFsKVxuXG5cdFx0Ly8gSWYgd2UgY2FuLCB0cnkgdG8gZmFzdC1wYXRoIGl0IGFuZCBhdm9pZCBhbGwgdGhlIG92ZXJoZWFkIG9mIGF3YWl0aW5nXG5cdFx0aWYgKCFtYXNrKSB7XG5cdFx0XHRvbnJlbW92ZSh2bm9kZSlcblx0XHRcdHJlbW92ZUNoaWxkKHBhcmVudCwgdm5vZGUpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChzdGF0ZVJlc3VsdCAhPSBudWxsKSB7XG5cdFx0XHRcdHZhciBuZXh0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG5cdFx0XHRcdFx0aWYgKG1hc2sgJiAxKSB7IG1hc2sgJj0gMjsgaWYgKCFtYXNrKSByZWFsbHlSZW1vdmUoKSB9XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RhdGVSZXN1bHQudGhlbihuZXh0LCBuZXh0KVxuXHRcdFx0fVxuXHRcdFx0aWYgKGF0dHJzUmVzdWx0ICE9IG51bGwpIHtcblx0XHRcdFx0dmFyIG5leHQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2Vcblx0XHRcdFx0XHRpZiAobWFzayAmIDIpIHsgbWFzayAmPSAxOyBpZiAoIW1hc2spIHJlYWxseVJlbW92ZSgpIH1cblx0XHRcdFx0fVxuXHRcdFx0XHRhdHRyc1Jlc3VsdC50aGVuKG5leHQsIG5leHQpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcmVhbGx5UmVtb3ZlKCkge1xuXHRcdFx0Y2hlY2tTdGF0ZSh2bm9kZSwgb3JpZ2luYWwpXG5cdFx0XHRvbnJlbW92ZSh2bm9kZSlcblx0XHRcdHJlbW92ZUNoaWxkKHBhcmVudCwgdm5vZGUpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZUhUTUwocGFyZW50LCB2bm9kZSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdm5vZGUuaW5zdGFuY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZCh2bm9kZS5pbnN0YW5jZVtpXSlcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gcmVtb3ZlQ2hpbGQocGFyZW50LCB2bm9kZSkge1xuXHRcdC8vIERvZGdlIHRoZSByZWN1cnNpb24gb3ZlcmhlYWQgaW4gYSBmZXcgb2YgdGhlIG1vc3QgY29tbW9uIGNhc2VzLlxuXHRcdHdoaWxlICh2bm9kZS5kb20gIT0gbnVsbCAmJiB2bm9kZS5kb20ucGFyZW50Tm9kZSA9PT0gcGFyZW50KSB7XG5cdFx0XHRpZiAodHlwZW9mIHZub2RlLnRhZyAhPT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHR2bm9kZSA9IHZub2RlLmluc3RhbmNlXG5cdFx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSBjb250aW51ZVxuXHRcdFx0fSBlbHNlIGlmICh2bm9kZS50YWcgPT09IFwiPFwiKSB7XG5cdFx0XHRcdHJlbW92ZUhUTUwocGFyZW50LCB2bm9kZSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh2bm9kZS50YWcgIT09IFwiW1wiKSB7XG5cdFx0XHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKHZub2RlLmRvbSlcblx0XHRcdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkodm5vZGUuY2hpbGRyZW4pKSBicmVha1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh2bm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHR2bm9kZSA9IHZub2RlLmNoaWxkcmVuWzBdXG5cdFx0XHRcdFx0aWYgKHZub2RlICE9IG51bGwpIGNvbnRpbnVlXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dmFyIGNoaWxkID0gdm5vZGUuY2hpbGRyZW5baV1cblx0XHRcdFx0XHRcdGlmIChjaGlsZCAhPSBudWxsKSByZW1vdmVDaGlsZChwYXJlbnQsIGNoaWxkKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0YnJlYWtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gb25yZW1vdmUodm5vZGUpIHtcblx0XHRpZiAodHlwZW9mIHZub2RlLnRhZyAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygdm5vZGUuc3RhdGUub25yZW1vdmUgPT09IFwiZnVuY3Rpb25cIikgY2FsbEhvb2suY2FsbCh2bm9kZS5zdGF0ZS5vbnJlbW92ZSwgdm5vZGUpXG5cdFx0aWYgKHZub2RlLmF0dHJzICYmIHR5cGVvZiB2bm9kZS5hdHRycy5vbnJlbW92ZSA9PT0gXCJmdW5jdGlvblwiKSBjYWxsSG9vay5jYWxsKHZub2RlLmF0dHJzLm9ucmVtb3ZlLCB2bm9kZSlcblx0XHRpZiAodHlwZW9mIHZub2RlLnRhZyAhPT0gXCJzdHJpbmdcIikge1xuXHRcdFx0aWYgKHZub2RlLmluc3RhbmNlICE9IG51bGwpIG9ucmVtb3ZlKHZub2RlLmluc3RhbmNlKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuXHRcdFx0XHRcdGlmIChjaGlsZCAhPSBudWxsKSBvbnJlbW92ZShjaGlsZClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vYXR0cnNcblx0ZnVuY3Rpb24gc2V0QXR0cnModm5vZGUsIGF0dHJzLCBucykge1xuXHRcdGZvciAodmFyIGtleSBpbiBhdHRycykge1xuXHRcdFx0c2V0QXR0cih2bm9kZSwga2V5LCBudWxsLCBhdHRyc1trZXldLCBucylcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gc2V0QXR0cih2bm9kZSwga2V5LCBvbGQsIHZhbHVlLCBucykge1xuXHRcdGlmIChrZXkgPT09IFwia2V5XCIgfHwga2V5ID09PSBcImlzXCIgfHwgdmFsdWUgPT0gbnVsbCB8fCBpc0xpZmVjeWNsZU1ldGhvZChrZXkpIHx8IChvbGQgPT09IHZhbHVlICYmICFpc0Zvcm1BdHRyaWJ1dGUodm5vZGUsIGtleSkpICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikgcmV0dXJuXG5cdFx0aWYgKGtleVswXSA9PT0gXCJvXCIgJiYga2V5WzFdID09PSBcIm5cIikgcmV0dXJuIHVwZGF0ZUV2ZW50KHZub2RlLCBrZXksIHZhbHVlKVxuXHRcdGlmIChrZXkuc2xpY2UoMCwgNikgPT09IFwieGxpbms6XCIpIHZub2RlLmRvbS5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwga2V5LnNsaWNlKDYpLCB2YWx1ZSlcblx0XHRlbHNlIGlmIChrZXkgPT09IFwic3R5bGVcIikgdXBkYXRlU3R5bGUodm5vZGUuZG9tLCBvbGQsIHZhbHVlKVxuXHRcdGVsc2UgaWYgKGhhc1Byb3BlcnR5S2V5KHZub2RlLCBrZXksIG5zKSkge1xuXHRcdFx0aWYgKGtleSA9PT0gXCJ2YWx1ZVwiKSB7XG5cdFx0XHRcdC8vIE9ubHkgZG8gdGhlIGNvZXJjaW9uIGlmIHdlJ3JlIGFjdHVhbGx5IGdvaW5nIHRvIGNoZWNrIHRoZSB2YWx1ZS5cblx0XHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8taW1wbGljaXQtY29lcmNpb24gKi9cblx0XHRcdFx0Ly9zZXR0aW5nIGlucHV0W3ZhbHVlXSB0byBzYW1lIHZhbHVlIGJ5IHR5cGluZyBvbiBmb2N1c2VkIGVsZW1lbnQgbW92ZXMgY3Vyc29yIHRvIGVuZCBpbiBDaHJvbWVcblx0XHRcdFx0aWYgKCh2bm9kZS50YWcgPT09IFwiaW5wdXRcIiB8fCB2bm9kZS50YWcgPT09IFwidGV4dGFyZWFcIikgJiYgdm5vZGUuZG9tLnZhbHVlID09PSBcIlwiICsgdmFsdWUgJiYgdm5vZGUuZG9tID09PSBhY3RpdmVFbGVtZW50KCkpIHJldHVyblxuXHRcdFx0XHQvL3NldHRpbmcgc2VsZWN0W3ZhbHVlXSB0byBzYW1lIHZhbHVlIHdoaWxlIGhhdmluZyBzZWxlY3Qgb3BlbiBibGlua3Mgc2VsZWN0IGRyb3Bkb3duIGluIENocm9tZVxuXHRcdFx0XHRpZiAodm5vZGUudGFnID09PSBcInNlbGVjdFwiICYmIG9sZCAhPT0gbnVsbCAmJiB2bm9kZS5kb20udmFsdWUgPT09IFwiXCIgKyB2YWx1ZSkgcmV0dXJuXG5cdFx0XHRcdC8vc2V0dGluZyBvcHRpb25bdmFsdWVdIHRvIHNhbWUgdmFsdWUgd2hpbGUgaGF2aW5nIHNlbGVjdCBvcGVuIGJsaW5rcyBzZWxlY3QgZHJvcGRvd24gaW4gQ2hyb21lXG5cdFx0XHRcdGlmICh2bm9kZS50YWcgPT09IFwib3B0aW9uXCIgJiYgb2xkICE9PSBudWxsICYmIHZub2RlLmRvbS52YWx1ZSA9PT0gXCJcIiArIHZhbHVlKSByZXR1cm5cblx0XHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1pbXBsaWNpdC1jb2VyY2lvbiAqL1xuXHRcdFx0fVxuXHRcdFx0Ly8gSWYgeW91IGFzc2lnbiBhbiBpbnB1dCB0eXBlIHRoYXQgaXMgbm90IHN1cHBvcnRlZCBieSBJRSAxMSB3aXRoIGFuIGFzc2lnbm1lbnQgZXhwcmVzc2lvbiwgYW4gZXJyb3Igd2lsbCBvY2N1ci5cblx0XHRcdGlmICh2bm9kZS50YWcgPT09IFwiaW5wdXRcIiAmJiBrZXkgPT09IFwidHlwZVwiKSB2bm9kZS5kb20uc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpXG5cdFx0XHRlbHNlIHZub2RlLmRvbVtrZXldID0gdmFsdWVcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcblx0XHRcdFx0aWYgKHZhbHVlKSB2bm9kZS5kb20uc2V0QXR0cmlidXRlKGtleSwgXCJcIilcblx0XHRcdFx0ZWxzZSB2bm9kZS5kb20ucmVtb3ZlQXR0cmlidXRlKGtleSlcblx0XHRcdH1cblx0XHRcdGVsc2Ugdm5vZGUuZG9tLnNldEF0dHJpYnV0ZShrZXkgPT09IFwiY2xhc3NOYW1lXCIgPyBcImNsYXNzXCIgOiBrZXksIHZhbHVlKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiByZW1vdmVBdHRyKHZub2RlLCBrZXksIG9sZCwgbnMpIHtcblx0XHRpZiAoa2V5ID09PSBcImtleVwiIHx8IGtleSA9PT0gXCJpc1wiIHx8IG9sZCA9PSBudWxsIHx8IGlzTGlmZWN5Y2xlTWV0aG9kKGtleSkpIHJldHVyblxuXHRcdGlmIChrZXlbMF0gPT09IFwib1wiICYmIGtleVsxXSA9PT0gXCJuXCIgJiYgIWlzTGlmZWN5Y2xlTWV0aG9kKGtleSkpIHVwZGF0ZUV2ZW50KHZub2RlLCBrZXksIHVuZGVmaW5lZClcblx0XHRlbHNlIGlmIChrZXkgPT09IFwic3R5bGVcIikgdXBkYXRlU3R5bGUodm5vZGUuZG9tLCBvbGQsIG51bGwpXG5cdFx0ZWxzZSBpZiAoXG5cdFx0XHRoYXNQcm9wZXJ0eUtleSh2bm9kZSwga2V5LCBucylcblx0XHRcdCYmIGtleSAhPT0gXCJjbGFzc05hbWVcIlxuXHRcdFx0JiYgIShrZXkgPT09IFwidmFsdWVcIiAmJiAoXG5cdFx0XHRcdHZub2RlLnRhZyA9PT0gXCJvcHRpb25cIlxuXHRcdFx0XHR8fCB2bm9kZS50YWcgPT09IFwic2VsZWN0XCIgJiYgdm5vZGUuZG9tLnNlbGVjdGVkSW5kZXggPT09IC0xICYmIHZub2RlLmRvbSA9PT0gYWN0aXZlRWxlbWVudCgpXG5cdFx0XHQpKVxuXHRcdFx0JiYgISh2bm9kZS50YWcgPT09IFwiaW5wdXRcIiAmJiBrZXkgPT09IFwidHlwZVwiKVxuXHRcdCkge1xuXHRcdFx0dm5vZGUuZG9tW2tleV0gPSBudWxsXG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBuc0xhc3RJbmRleCA9IGtleS5pbmRleE9mKFwiOlwiKVxuXHRcdFx0aWYgKG5zTGFzdEluZGV4ICE9PSAtMSkga2V5ID0ga2V5LnNsaWNlKG5zTGFzdEluZGV4ICsgMSlcblx0XHRcdGlmIChvbGQgIT09IGZhbHNlKSB2bm9kZS5kb20ucmVtb3ZlQXR0cmlidXRlKGtleSA9PT0gXCJjbGFzc05hbWVcIiA/IFwiY2xhc3NcIiA6IGtleSlcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gc2V0TGF0ZVNlbGVjdEF0dHJzKHZub2RlLCBhdHRycykge1xuXHRcdGlmIChcInZhbHVlXCIgaW4gYXR0cnMpIHtcblx0XHRcdGlmKGF0dHJzLnZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdGlmICh2bm9kZS5kb20uc2VsZWN0ZWRJbmRleCAhPT0gLTEpIHZub2RlLmRvbS52YWx1ZSA9IG51bGxcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBub3JtYWxpemVkID0gXCJcIiArIGF0dHJzLnZhbHVlIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8taW1wbGljaXQtY29lcmNpb25cblx0XHRcdFx0aWYgKHZub2RlLmRvbS52YWx1ZSAhPT0gbm9ybWFsaXplZCB8fCB2bm9kZS5kb20uc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcblx0XHRcdFx0XHR2bm9kZS5kb20udmFsdWUgPSBub3JtYWxpemVkXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKFwic2VsZWN0ZWRJbmRleFwiIGluIGF0dHJzKSBzZXRBdHRyKHZub2RlLCBcInNlbGVjdGVkSW5kZXhcIiwgbnVsbCwgYXR0cnMuc2VsZWN0ZWRJbmRleCwgdW5kZWZpbmVkKVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUF0dHJzKHZub2RlLCBvbGQsIGF0dHJzLCBucykge1xuXHRcdGlmIChhdHRycyAhPSBudWxsKSB7XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcblx0XHRcdFx0c2V0QXR0cih2bm9kZSwga2V5LCBvbGQgJiYgb2xkW2tleV0sIGF0dHJzW2tleV0sIG5zKVxuXHRcdFx0fVxuXHRcdH1cblx0XHR2YXIgdmFsXG5cdFx0aWYgKG9sZCAhPSBudWxsKSB7XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gb2xkKSB7XG5cdFx0XHRcdGlmICgoKHZhbCA9IG9sZFtrZXldKSAhPSBudWxsKSAmJiAoYXR0cnMgPT0gbnVsbCB8fCBhdHRyc1trZXldID09IG51bGwpKSB7XG5cdFx0XHRcdFx0cmVtb3ZlQXR0cih2bm9kZSwga2V5LCB2YWwsIG5zKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGlzRm9ybUF0dHJpYnV0ZSh2bm9kZSwgYXR0cikge1xuXHRcdHJldHVybiBhdHRyID09PSBcInZhbHVlXCIgfHwgYXR0ciA9PT0gXCJjaGVja2VkXCIgfHwgYXR0ciA9PT0gXCJzZWxlY3RlZEluZGV4XCIgfHwgYXR0ciA9PT0gXCJzZWxlY3RlZFwiICYmIHZub2RlLmRvbSA9PT0gYWN0aXZlRWxlbWVudCgpIHx8IHZub2RlLnRhZyA9PT0gXCJvcHRpb25cIiAmJiB2bm9kZS5kb20ucGFyZW50Tm9kZSA9PT0gJGRvYy5hY3RpdmVFbGVtZW50XG5cdH1cblx0ZnVuY3Rpb24gaXNMaWZlY3ljbGVNZXRob2QoYXR0cikge1xuXHRcdHJldHVybiBhdHRyID09PSBcIm9uaW5pdFwiIHx8IGF0dHIgPT09IFwib25jcmVhdGVcIiB8fCBhdHRyID09PSBcIm9udXBkYXRlXCIgfHwgYXR0ciA9PT0gXCJvbnJlbW92ZVwiIHx8IGF0dHIgPT09IFwib25iZWZvcmVyZW1vdmVcIiB8fCBhdHRyID09PSBcIm9uYmVmb3JldXBkYXRlXCJcblx0fVxuXHRmdW5jdGlvbiBoYXNQcm9wZXJ0eUtleSh2bm9kZSwga2V5LCBucykge1xuXHRcdC8vIEZpbHRlciBvdXQgbmFtZXNwYWNlZCBrZXlzXG5cdFx0cmV0dXJuIG5zID09PSB1bmRlZmluZWQgJiYgKFxuXHRcdFx0Ly8gSWYgaXQncyBhIGN1c3RvbSBlbGVtZW50LCBqdXN0IGtlZXAgaXQuXG5cdFx0XHR2bm9kZS50YWcuaW5kZXhPZihcIi1cIikgPiAtMSB8fCB2bm9kZS5hdHRycyAhPSBudWxsICYmIHZub2RlLmF0dHJzLmlzIHx8XG5cdFx0XHQvLyBJZiBpdCdzIGEgbm9ybWFsIGVsZW1lbnQsIGxldCdzIHRyeSB0byBhdm9pZCBhIGZldyBicm93c2VyIGJ1Z3MuXG5cdFx0XHRrZXkgIT09IFwiaHJlZlwiICYmIGtleSAhPT0gXCJsaXN0XCIgJiYga2V5ICE9PSBcImZvcm1cIiAmJiBrZXkgIT09IFwid2lkdGhcIiAmJiBrZXkgIT09IFwiaGVpZ2h0XCIvLyAmJiBrZXkgIT09IFwidHlwZVwiXG5cdFx0XHQvLyBEZWZlciB0aGUgcHJvcGVydHkgY2hlY2sgdW50aWwgKmFmdGVyKiB3ZSBjaGVjayBldmVyeXRoaW5nLlxuXHRcdCkgJiYga2V5IGluIHZub2RlLmRvbVxuXHR9XG5cblx0Ly9zdHlsZVxuXHR2YXIgdXBwZXJjYXNlUmVnZXggPSAvW0EtWl0vZ1xuXHRmdW5jdGlvbiB0b0xvd2VyQ2FzZShjYXBpdGFsKSB7IHJldHVybiBcIi1cIiArIGNhcGl0YWwudG9Mb3dlckNhc2UoKSB9XG5cdGZ1bmN0aW9uIG5vcm1hbGl6ZUtleShrZXkpIHtcblx0XHRyZXR1cm4ga2V5WzBdID09PSBcIi1cIiAmJiBrZXlbMV0gPT09IFwiLVwiID8ga2V5IDpcblx0XHRcdGtleSA9PT0gXCJjc3NGbG9hdFwiID8gXCJmbG9hdFwiIDpcblx0XHRcdFx0a2V5LnJlcGxhY2UodXBwZXJjYXNlUmVnZXgsIHRvTG93ZXJDYXNlKVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKGVsZW1lbnQsIG9sZCwgc3R5bGUpIHtcblx0XHRpZiAob2xkID09PSBzdHlsZSkge1xuXHRcdFx0Ly8gU3R5bGVzIGFyZSBlcXVpdmFsZW50LCBkbyBub3RoaW5nLlxuXHRcdH0gZWxzZSBpZiAoc3R5bGUgPT0gbnVsbCkge1xuXHRcdFx0Ly8gTmV3IHN0eWxlIGlzIG1pc3NpbmcsIGp1c3QgY2xlYXIgaXQuXG5cdFx0XHRlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBcIlwiXG5cdFx0fSBlbHNlIGlmICh0eXBlb2Ygc3R5bGUgIT09IFwib2JqZWN0XCIpIHtcblx0XHRcdC8vIE5ldyBzdHlsZSBpcyBhIHN0cmluZywgbGV0IGVuZ2luZSBkZWFsIHdpdGggcGF0Y2hpbmcuXG5cdFx0XHRlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuXHRcdH0gZWxzZSBpZiAob2xkID09IG51bGwgfHwgdHlwZW9mIG9sZCAhPT0gXCJvYmplY3RcIikge1xuXHRcdFx0Ly8gYG9sZGAgaXMgbWlzc2luZyBvciBhIHN0cmluZywgYHN0eWxlYCBpcyBhbiBvYmplY3QuXG5cdFx0XHRlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBcIlwiXG5cdFx0XHQvLyBBZGQgbmV3IHN0eWxlIHByb3BlcnRpZXNcblx0XHRcdGZvciAodmFyIGtleSBpbiBzdHlsZSkge1xuXHRcdFx0XHR2YXIgdmFsdWUgPSBzdHlsZVtrZXldXG5cdFx0XHRcdGlmICh2YWx1ZSAhPSBudWxsKSBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KG5vcm1hbGl6ZUtleShrZXkpLCBTdHJpbmcodmFsdWUpKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBCb3RoIG9sZCAmIG5ldyBhcmUgKGRpZmZlcmVudCkgb2JqZWN0cy5cblx0XHRcdC8vIFVwZGF0ZSBzdHlsZSBwcm9wZXJ0aWVzIHRoYXQgaGF2ZSBjaGFuZ2VkXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gc3R5bGUpIHtcblx0XHRcdFx0dmFyIHZhbHVlID0gc3R5bGVba2V5XVxuXHRcdFx0XHRpZiAodmFsdWUgIT0gbnVsbCAmJiAodmFsdWUgPSBTdHJpbmcodmFsdWUpKSAhPT0gU3RyaW5nKG9sZFtrZXldKSkge1xuXHRcdFx0XHRcdGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkobm9ybWFsaXplS2V5KGtleSksIHZhbHVlKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBSZW1vdmUgc3R5bGUgcHJvcGVydGllcyB0aGF0IG5vIGxvbmdlciBleGlzdFxuXHRcdFx0Zm9yICh2YXIga2V5IGluIG9sZCkge1xuXHRcdFx0XHRpZiAob2xkW2tleV0gIT0gbnVsbCAmJiBzdHlsZVtrZXldID09IG51bGwpIHtcblx0XHRcdFx0XHRlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KG5vcm1hbGl6ZUtleShrZXkpKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gSGVyZSdzIGFuIGV4cGxhbmF0aW9uIG9mIGhvdyB0aGlzIHdvcmtzOlxuXHQvLyAxLiBUaGUgZXZlbnQgbmFtZXMgYXJlIGFsd2F5cyAoYnkgZGVzaWduKSBwcmVmaXhlZCBieSBgb25gLlxuXHQvLyAyLiBUaGUgRXZlbnRMaXN0ZW5lciBpbnRlcmZhY2UgYWNjZXB0cyBlaXRoZXIgYSBmdW5jdGlvbiBvciBhbiBvYmplY3Rcblx0Ly8gICAgd2l0aCBhIGBoYW5kbGVFdmVudGAgbWV0aG9kLlxuXHQvLyAzLiBUaGUgb2JqZWN0IGRvZXMgbm90IGluaGVyaXQgZnJvbSBgT2JqZWN0LnByb3RvdHlwZWAsIHRvIGF2b2lkXG5cdC8vICAgIGFueSBwb3RlbnRpYWwgaW50ZXJmZXJlbmNlIHdpdGggdGhhdCAoZS5nLiBzZXR0ZXJzKS5cblx0Ly8gNC4gVGhlIGV2ZW50IG5hbWUgaXMgcmVtYXBwZWQgdG8gdGhlIGhhbmRsZXIgYmVmb3JlIGNhbGxpbmcgaXQuXG5cdC8vIDUuIEluIGZ1bmN0aW9uLWJhc2VkIGV2ZW50IGhhbmRsZXJzLCBgZXYudGFyZ2V0ID09PSB0aGlzYC4gV2UgcmVwbGljYXRlXG5cdC8vICAgIHRoYXQgYmVsb3cuXG5cdC8vIDYuIEluIGZ1bmN0aW9uLWJhc2VkIGV2ZW50IGhhbmRsZXJzLCBgcmV0dXJuIGZhbHNlYCBwcmV2ZW50cyB0aGUgZGVmYXVsdFxuXHQvLyAgICBhY3Rpb24gYW5kIHN0b3BzIGV2ZW50IHByb3BhZ2F0aW9uLiBXZSByZXBsaWNhdGUgdGhhdCBiZWxvdy5cblx0ZnVuY3Rpb24gRXZlbnREaWN0KCkge1xuXHRcdC8vIFNhdmUgdGhpcywgc28gdGhlIGN1cnJlbnQgcmVkcmF3IGlzIGNvcnJlY3RseSB0cmFja2VkLlxuXHRcdHRoaXMuXyA9IGN1cnJlbnRSZWRyYXdcblx0fVxuXHRFdmVudERpY3QucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXHRFdmVudERpY3QucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24gKGV2KSB7XG5cdFx0dmFyIGhhbmRsZXIgPSB0aGlzW1wib25cIiArIGV2LnR5cGVdXG5cdFx0dmFyIHJlc3VsdFxuXHRcdGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSByZXN1bHQgPSBoYW5kbGVyLmNhbGwoZXYuY3VycmVudFRhcmdldCwgZXYpXG5cdFx0ZWxzZSBpZiAodHlwZW9mIGhhbmRsZXIuaGFuZGxlRXZlbnQgPT09IFwiZnVuY3Rpb25cIikgaGFuZGxlci5oYW5kbGVFdmVudChldilcblx0XHRpZiAodGhpcy5fICYmIGV2LnJlZHJhdyAhPT0gZmFsc2UpICgwLCB0aGlzLl8pKClcblx0XHRpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuXHRcdFx0ZXYucHJldmVudERlZmF1bHQoKVxuXHRcdFx0ZXYuc3RvcFByb3BhZ2F0aW9uKClcblx0XHR9XG5cdH1cblxuXHQvL2V2ZW50XG5cdGZ1bmN0aW9uIHVwZGF0ZUV2ZW50KHZub2RlLCBrZXksIHZhbHVlKSB7XG5cdFx0aWYgKHZub2RlLmV2ZW50cyAhPSBudWxsKSB7XG5cdFx0XHRpZiAodm5vZGUuZXZlbnRzW2tleV0gPT09IHZhbHVlKSByZXR1cm5cblx0XHRcdGlmICh2YWx1ZSAhPSBudWxsICYmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpKSB7XG5cdFx0XHRcdGlmICh2bm9kZS5ldmVudHNba2V5XSA9PSBudWxsKSB2bm9kZS5kb20uYWRkRXZlbnRMaXN0ZW5lcihrZXkuc2xpY2UoMiksIHZub2RlLmV2ZW50cywgZmFsc2UpXG5cdFx0XHRcdHZub2RlLmV2ZW50c1trZXldID0gdmFsdWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh2bm9kZS5ldmVudHNba2V5XSAhPSBudWxsKSB2bm9kZS5kb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihrZXkuc2xpY2UoMiksIHZub2RlLmV2ZW50cywgZmFsc2UpXG5cdFx0XHRcdHZub2RlLmV2ZW50c1trZXldID0gdW5kZWZpbmVkXG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsICYmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpKSB7XG5cdFx0XHR2bm9kZS5ldmVudHMgPSBuZXcgRXZlbnREaWN0KClcblx0XHRcdHZub2RlLmRvbS5hZGRFdmVudExpc3RlbmVyKGtleS5zbGljZSgyKSwgdm5vZGUuZXZlbnRzLCBmYWxzZSlcblx0XHRcdHZub2RlLmV2ZW50c1trZXldID0gdmFsdWVcblx0XHR9XG5cdH1cblxuXHQvL2xpZmVjeWNsZVxuXHRmdW5jdGlvbiBpbml0TGlmZWN5Y2xlKHNvdXJjZSwgdm5vZGUsIGhvb2tzKSB7XG5cdFx0aWYgKHR5cGVvZiBzb3VyY2Uub25pbml0ID09PSBcImZ1bmN0aW9uXCIpIGNhbGxIb29rLmNhbGwoc291cmNlLm9uaW5pdCwgdm5vZGUpXG5cdFx0aWYgKHR5cGVvZiBzb3VyY2Uub25jcmVhdGUgPT09IFwiZnVuY3Rpb25cIikgaG9va3MucHVzaChjYWxsSG9vay5iaW5kKHNvdXJjZS5vbmNyZWF0ZSwgdm5vZGUpKVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUxpZmVjeWNsZShzb3VyY2UsIHZub2RlLCBob29rcykge1xuXHRcdGlmICh0eXBlb2Ygc291cmNlLm9udXBkYXRlID09PSBcImZ1bmN0aW9uXCIpIGhvb2tzLnB1c2goY2FsbEhvb2suYmluZChzb3VyY2Uub251cGRhdGUsIHZub2RlKSlcblx0fVxuXHRmdW5jdGlvbiBzaG91bGROb3RVcGRhdGUodm5vZGUsIG9sZCkge1xuXHRcdGRvIHtcblx0XHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsICYmIHR5cGVvZiB2bm9kZS5hdHRycy5vbmJlZm9yZXVwZGF0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHZhciBmb3JjZSA9IGNhbGxIb29rLmNhbGwodm5vZGUuYXR0cnMub25iZWZvcmV1cGRhdGUsIHZub2RlLCBvbGQpXG5cdFx0XHRcdGlmIChmb3JjZSAhPT0gdW5kZWZpbmVkICYmICFmb3JjZSkgYnJlYWtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2bm9kZS5zdGF0ZS5vbmJlZm9yZXVwZGF0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHZhciBmb3JjZSA9IGNhbGxIb29rLmNhbGwodm5vZGUuc3RhdGUub25iZWZvcmV1cGRhdGUsIHZub2RlLCBvbGQpXG5cdFx0XHRcdGlmIChmb3JjZSAhPT0gdW5kZWZpbmVkICYmICFmb3JjZSkgYnJlYWtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZVxuXHRcdH0gd2hpbGUgKGZhbHNlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cblx0XHR2bm9kZS5kb20gPSBvbGQuZG9tXG5cdFx0dm5vZGUuZG9tU2l6ZSA9IG9sZC5kb21TaXplXG5cdFx0dm5vZGUuaW5zdGFuY2UgPSBvbGQuaW5zdGFuY2Vcblx0XHQvLyBPbmUgd291bGQgdGhpbmsgaGF2aW5nIHRoZSBhY3R1YWwgbGF0ZXN0IGF0dHJpYnV0ZXMgd291bGQgYmUgaWRlYWwsXG5cdFx0Ly8gYnV0IGl0IGRvZXNuJ3QgbGV0IHVzIHByb3Blcmx5IGRpZmYgYmFzZWQgb24gb3VyIGN1cnJlbnQgaW50ZXJuYWxcblx0XHQvLyByZXByZXNlbnRhdGlvbi4gV2UgaGF2ZSB0byBzYXZlIG5vdCBvbmx5IHRoZSBvbGQgRE9NIGluZm8sIGJ1dCBhbHNvXG5cdFx0Ly8gdGhlIGF0dHJpYnV0ZXMgdXNlZCB0byBjcmVhdGUgaXQsIGFzIHdlIGRpZmYgKnRoYXQqLCBub3QgYWdhaW5zdCB0aGVcblx0XHQvLyBET00gZGlyZWN0bHkgKHdpdGggYSBmZXcgZXhjZXB0aW9ucyBpbiBgc2V0QXR0cmApLiBBbmQsIG9mIGNvdXJzZSwgd2Vcblx0XHQvLyBuZWVkIHRvIHNhdmUgdGhlIGNoaWxkcmVuIGFuZCB0ZXh0IGFzIHRoZXkgYXJlIGNvbmNlcHR1YWxseSBub3Rcblx0XHQvLyB1bmxpa2Ugc3BlY2lhbCBcImF0dHJpYnV0ZXNcIiBpbnRlcm5hbGx5LlxuXHRcdHZub2RlLmF0dHJzID0gb2xkLmF0dHJzXG5cdFx0dm5vZGUuY2hpbGRyZW4gPSBvbGQuY2hpbGRyZW5cblx0XHR2bm9kZS50ZXh0ID0gb2xkLnRleHRcblx0XHRyZXR1cm4gdHJ1ZVxuXHR9XG5cblx0cmV0dXJuIGZ1bmN0aW9uKGRvbSwgdm5vZGVzLCByZWRyYXcpIHtcblx0XHRpZiAoIWRvbSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkVuc3VyZSB0aGUgRE9NIGVsZW1lbnQgYmVpbmcgcGFzc2VkIHRvIG0ucm91dGUvbS5tb3VudC9tLnJlbmRlciBpcyBub3QgdW5kZWZpbmVkLlwiKVxuXHRcdHZhciBob29rcyA9IFtdXG5cdFx0dmFyIGFjdGl2ZSA9IGFjdGl2ZUVsZW1lbnQoKVxuXHRcdHZhciBuYW1lc3BhY2UgPSBkb20ubmFtZXNwYWNlVVJJXG5cblx0XHQvLyBGaXJzdCB0aW1lIHJlbmRlcmluZyBpbnRvIGEgbm9kZSBjbGVhcnMgaXQgb3V0XG5cdFx0aWYgKGRvbS52bm9kZXMgPT0gbnVsbCkgZG9tLnRleHRDb250ZW50ID0gXCJcIlxuXG5cdFx0dm5vZGVzID0gVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4oQXJyYXkuaXNBcnJheSh2bm9kZXMpID8gdm5vZGVzIDogW3Zub2Rlc10pXG5cdFx0dmFyIHByZXZSZWRyYXcgPSBjdXJyZW50UmVkcmF3XG5cdFx0dHJ5IHtcblx0XHRcdGN1cnJlbnRSZWRyYXcgPSB0eXBlb2YgcmVkcmF3ID09PSBcImZ1bmN0aW9uXCIgPyByZWRyYXcgOiB1bmRlZmluZWRcblx0XHRcdHVwZGF0ZU5vZGVzKGRvbSwgZG9tLnZub2Rlcywgdm5vZGVzLCBob29rcywgbnVsbCwgbmFtZXNwYWNlID09PSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiA/IHVuZGVmaW5lZCA6IG5hbWVzcGFjZSlcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0Y3VycmVudFJlZHJhdyA9IHByZXZSZWRyYXdcblx0XHR9XG5cdFx0ZG9tLnZub2RlcyA9IHZub2Rlc1xuXHRcdC8vIGBkb2N1bWVudC5hY3RpdmVFbGVtZW50YCBjYW4gcmV0dXJuIG51bGw6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjZG9tLWRvY3VtZW50LWFjdGl2ZWVsZW1lbnRcblx0XHRpZiAoYWN0aXZlICE9IG51bGwgJiYgYWN0aXZlRWxlbWVudCgpICE9PSBhY3RpdmUgJiYgdHlwZW9mIGFjdGl2ZS5mb2N1cyA9PT0gXCJmdW5jdGlvblwiKSBhY3RpdmUuZm9jdXMoKVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIGhvb2tzW2ldKClcblx0fVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFZub2RlID0gcmVxdWlyZShcIi4uL3JlbmRlci92bm9kZVwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGh0bWwpIHtcblx0aWYgKGh0bWwgPT0gbnVsbCkgaHRtbCA9IFwiXCJcblx0cmV0dXJuIFZub2RlKFwiPFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaHRtbCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5mdW5jdGlvbiBWbm9kZSh0YWcsIGtleSwgYXR0cnMsIGNoaWxkcmVuLCB0ZXh0LCBkb20pIHtcblx0cmV0dXJuIHt0YWc6IHRhZywga2V5OiBrZXksIGF0dHJzOiBhdHRycywgY2hpbGRyZW46IGNoaWxkcmVuLCB0ZXh0OiB0ZXh0LCBkb206IGRvbSwgZG9tU2l6ZTogdW5kZWZpbmVkLCBzdGF0ZTogdW5kZWZpbmVkLCBldmVudHM6IHVuZGVmaW5lZCwgaW5zdGFuY2U6IHVuZGVmaW5lZH1cbn1cblZub2RlLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKG5vZGUpIHtcblx0aWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHJldHVybiBWbm9kZShcIltcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuKG5vZGUpLCB1bmRlZmluZWQsIHVuZGVmaW5lZClcblx0aWYgKG5vZGUgPT0gbnVsbCB8fCB0eXBlb2Ygbm9kZSA9PT0gXCJib29sZWFuXCIpIHJldHVybiBudWxsXG5cdGlmICh0eXBlb2Ygbm9kZSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIG5vZGVcblx0cmV0dXJuIFZub2RlKFwiI1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU3RyaW5nKG5vZGUpLCB1bmRlZmluZWQsIHVuZGVmaW5lZClcbn1cblZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuID0gZnVuY3Rpb24oaW5wdXQpIHtcblx0dmFyIGNoaWxkcmVuID0gW11cblx0aWYgKGlucHV0Lmxlbmd0aCkge1xuXHRcdHZhciBpc0tleWVkID0gaW5wdXRbMF0gIT0gbnVsbCAmJiBpbnB1dFswXS5rZXkgIT0gbnVsbFxuXHRcdC8vIE5vdGU6IHRoaXMgaXMgYSAqdmVyeSogcGVyZi1zZW5zaXRpdmUgY2hlY2suXG5cdFx0Ly8gRnVuIGZhY3Q6IG1lcmdpbmcgdGhlIGxvb3AgbGlrZSB0aGlzIGlzIHNvbWVob3cgZmFzdGVyIHRoYW4gc3BsaXR0aW5nXG5cdFx0Ly8gaXQsIG5vdGljZWFibHkgc28uXG5cdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKChpbnB1dFtpXSAhPSBudWxsICYmIGlucHV0W2ldLmtleSAhPSBudWxsKSAhPT0gaXNLZXllZCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiVm5vZGVzIG11c3QgZWl0aGVyIGFsd2F5cyBoYXZlIGtleXMgb3IgbmV2ZXIgaGF2ZSBrZXlzIVwiKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjaGlsZHJlbltpXSA9IFZub2RlLm5vcm1hbGl6ZShpbnB1dFtpXSlcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNoaWxkcmVuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVm5vZGVcbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBQcm9taXNlUG9seWZpbGwgPSByZXF1aXJlKFwiLi9wcm9taXNlL3Byb21pc2VcIilcbnZhciBtb3VudFJlZHJhdyA9IHJlcXVpcmUoXCIuL21vdW50LXJlZHJhd1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3JlcXVlc3QvcmVxdWVzdFwiKSh3aW5kb3csIFByb21pc2VQb2x5ZmlsbCwgbW91bnRSZWRyYXcucmVkcmF3KVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIGJ1aWxkUGF0aG5hbWUgPSByZXF1aXJlKFwiLi4vcGF0aG5hbWUvYnVpbGRcIilcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkd2luZG93LCBQcm9taXNlLCBvbmNvbXBsZXRpb24pIHtcblx0dmFyIGNhbGxiYWNrQ291bnQgPSAwXG5cblx0ZnVuY3Rpb24gUHJvbWlzZVByb3h5KGV4ZWN1dG9yKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGV4ZWN1dG9yKVxuXHR9XG5cblx0Ly8gSW4gY2FzZSB0aGUgZ2xvYmFsIFByb21pc2UgaXMgc29tZSB1c2VybGFuZCBsaWJyYXJ5J3Mgd2hlcmUgdGhleSByZWx5IG9uXG5cdC8vIGBmb28gaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yYCwgYHRoaXMuY29uc3RydWN0b3IucmVzb2x2ZSh2YWx1ZSlgLCBvclxuXHQvLyBzaW1pbGFyLiBMZXQncyAqbm90KiBicmVhayB0aGVtLlxuXHRQcm9taXNlUHJveHkucHJvdG90eXBlID0gUHJvbWlzZS5wcm90b3R5cGVcblx0UHJvbWlzZVByb3h5Ll9fcHJvdG9fXyA9IFByb21pc2UgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b1xuXG5cdGZ1bmN0aW9uIG1ha2VSZXF1ZXN0KGZhY3RvcnkpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24odXJsLCBhcmdzKSB7XG5cdFx0XHRpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikgeyBhcmdzID0gdXJsOyB1cmwgPSB1cmwudXJsIH1cblx0XHRcdGVsc2UgaWYgKGFyZ3MgPT0gbnVsbCkgYXJncyA9IHt9XG5cdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0XHRmYWN0b3J5KGJ1aWxkUGF0aG5hbWUodXJsLCBhcmdzLnBhcmFtcyksIGFyZ3MsIGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBhcmdzLnR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcblx0XHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YVtpXSA9IG5ldyBhcmdzLnR5cGUoZGF0YVtpXSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBkYXRhID0gbmV3IGFyZ3MudHlwZShkYXRhKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXNvbHZlKGRhdGEpXG5cdFx0XHRcdH0sIHJlamVjdClcblx0XHRcdH0pXG5cdFx0XHRpZiAoYXJncy5iYWNrZ3JvdW5kID09PSB0cnVlKSByZXR1cm4gcHJvbWlzZVxuXHRcdFx0dmFyIGNvdW50ID0gMFxuXHRcdFx0ZnVuY3Rpb24gY29tcGxldGUoKSB7XG5cdFx0XHRcdGlmICgtLWNvdW50ID09PSAwICYmIHR5cGVvZiBvbmNvbXBsZXRpb24gPT09IFwiZnVuY3Rpb25cIikgb25jb21wbGV0aW9uKClcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHdyYXAocHJvbWlzZSlcblxuXHRcdFx0ZnVuY3Rpb24gd3JhcChwcm9taXNlKSB7XG5cdFx0XHRcdHZhciB0aGVuID0gcHJvbWlzZS50aGVuXG5cdFx0XHRcdC8vIFNldCB0aGUgY29uc3RydWN0b3IsIHNvIGVuZ2luZXMga25vdyB0byBub3QgYXdhaXQgb3IgcmVzb2x2ZVxuXHRcdFx0XHQvLyB0aGlzIGFzIGEgbmF0aXZlIHByb21pc2UuIEF0IHRoZSB0aW1lIG9mIHdyaXRpbmcsIHRoaXMgaXNcblx0XHRcdFx0Ly8gb25seSBuZWNlc3NhcnkgZm9yIFY4LCBidXQgdGhlaXIgYmVoYXZpb3IgaXMgdGhlIGNvcnJlY3Rcblx0XHRcdFx0Ly8gYmVoYXZpb3IgcGVyIHNwZWMuIFNlZSB0aGlzIHNwZWMgaXNzdWUgZm9yIG1vcmUgZGV0YWlsczpcblx0XHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvZWNtYTI2Mi9pc3N1ZXMvMTU3Ny4gQWxzbywgc2VlIHRoZVxuXHRcdFx0XHQvLyBjb3JyZXNwb25kaW5nIGNvbW1lbnQgaW4gYHJlcXVlc3QvdGVzdHMvdGVzdC1yZXF1ZXN0LmpzYCBmb3Jcblx0XHRcdFx0Ly8gYSBiaXQgbW9yZSBiYWNrZ3JvdW5kIG9uIHRoZSBpc3N1ZSBhdCBoYW5kLlxuXHRcdFx0XHRwcm9taXNlLmNvbnN0cnVjdG9yID0gUHJvbWlzZVByb3h5XG5cdFx0XHRcdHByb21pc2UudGhlbiA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGNvdW50Kytcblx0XHRcdFx0XHR2YXIgbmV4dCA9IHRoZW4uYXBwbHkocHJvbWlzZSwgYXJndW1lbnRzKVxuXHRcdFx0XHRcdG5leHQudGhlbihjb21wbGV0ZSwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0Y29tcGxldGUoKVxuXHRcdFx0XHRcdFx0aWYgKGNvdW50ID09PSAwKSB0aHJvdyBlXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRyZXR1cm4gd3JhcChuZXh0KVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBwcm9taXNlXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gaGFzSGVhZGVyKGFyZ3MsIG5hbWUpIHtcblx0XHRmb3IgKHZhciBrZXkgaW4gYXJncy5oZWFkZXJzKSB7XG5cdFx0XHRpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChhcmdzLmhlYWRlcnMsIGtleSkgJiYgbmFtZS50ZXN0KGtleSkpIHJldHVybiB0cnVlXG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRyZXF1ZXN0OiBtYWtlUmVxdWVzdChmdW5jdGlvbih1cmwsIGFyZ3MsIHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0dmFyIG1ldGhvZCA9IGFyZ3MubWV0aG9kICE9IG51bGwgPyBhcmdzLm1ldGhvZC50b1VwcGVyQ2FzZSgpIDogXCJHRVRcIlxuXHRcdFx0dmFyIGJvZHkgPSBhcmdzLmJvZHlcblx0XHRcdHZhciBhc3N1bWVKU09OID0gKGFyZ3Muc2VyaWFsaXplID09IG51bGwgfHwgYXJncy5zZXJpYWxpemUgPT09IEpTT04uc2VyaWFsaXplKSAmJiAhKGJvZHkgaW5zdGFuY2VvZiAkd2luZG93LkZvcm1EYXRhKVxuXHRcdFx0dmFyIHJlc3BvbnNlVHlwZSA9IGFyZ3MucmVzcG9uc2VUeXBlIHx8ICh0eXBlb2YgYXJncy5leHRyYWN0ID09PSBcImZ1bmN0aW9uXCIgPyBcIlwiIDogXCJqc29uXCIpXG5cblx0XHRcdHZhciB4aHIgPSBuZXcgJHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpLCBhYm9ydGVkID0gZmFsc2Vcblx0XHRcdHZhciBvcmlnaW5hbCA9IHhociwgcmVwbGFjZWRBYm9ydFxuXHRcdFx0dmFyIGFib3J0ID0geGhyLmFib3J0XG5cblx0XHRcdHhoci5hYm9ydCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRhYm9ydGVkID0gdHJ1ZVxuXHRcdFx0XHRhYm9ydC5jYWxsKHRoaXMpXG5cdFx0XHR9XG5cblx0XHRcdHhoci5vcGVuKG1ldGhvZCwgdXJsLCBhcmdzLmFzeW5jICE9PSBmYWxzZSwgdHlwZW9mIGFyZ3MudXNlciA9PT0gXCJzdHJpbmdcIiA/IGFyZ3MudXNlciA6IHVuZGVmaW5lZCwgdHlwZW9mIGFyZ3MucGFzc3dvcmQgPT09IFwic3RyaW5nXCIgPyBhcmdzLnBhc3N3b3JkIDogdW5kZWZpbmVkKVxuXG5cdFx0XHRpZiAoYXNzdW1lSlNPTiAmJiBib2R5ICE9IG51bGwgJiYgIWhhc0hlYWRlcihhcmdzLCAvXmNvbnRlbnQtdHlwZSQvaSkpIHtcblx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpXG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGFyZ3MuZGVzZXJpYWxpemUgIT09IFwiZnVuY3Rpb25cIiAmJiAhaGFzSGVhZGVyKGFyZ3MsIC9eYWNjZXB0JC9pKSkge1xuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLCBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvKlwiKVxuXHRcdFx0fVxuXHRcdFx0aWYgKGFyZ3Mud2l0aENyZWRlbnRpYWxzKSB4aHIud2l0aENyZWRlbnRpYWxzID0gYXJncy53aXRoQ3JlZGVudGlhbHNcblx0XHRcdGlmIChhcmdzLnRpbWVvdXQpIHhoci50aW1lb3V0ID0gYXJncy50aW1lb3V0XG5cdFx0XHR4aHIucmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlXG5cblx0XHRcdGZvciAodmFyIGtleSBpbiBhcmdzLmhlYWRlcnMpIHtcblx0XHRcdFx0aWYgKHt9Lmhhc093blByb3BlcnR5LmNhbGwoYXJncy5oZWFkZXJzLCBrZXkpKSB7XG5cdFx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBhcmdzLmhlYWRlcnNba2V5XSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oZXYpIHtcblx0XHRcdFx0Ly8gRG9uJ3QgdGhyb3cgZXJyb3JzIG9uIHhoci5hYm9ydCgpLlxuXHRcdFx0XHRpZiAoYWJvcnRlZCkgcmV0dXJuXG5cblx0XHRcdFx0aWYgKGV2LnRhcmdldC5yZWFkeVN0YXRlID09PSA0KSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHZhciBzdWNjZXNzID0gKGV2LnRhcmdldC5zdGF0dXMgPj0gMjAwICYmIGV2LnRhcmdldC5zdGF0dXMgPCAzMDApIHx8IGV2LnRhcmdldC5zdGF0dXMgPT09IDMwNCB8fCAoL15maWxlOlxcL1xcLy9pKS50ZXN0KHVybClcblx0XHRcdFx0XHRcdC8vIFdoZW4gdGhlIHJlc3BvbnNlIHR5cGUgaXNuJ3QgXCJcIiBvciBcInRleHRcIixcblx0XHRcdFx0XHRcdC8vIGB4aHIucmVzcG9uc2VUZXh0YCBpcyB0aGUgd3JvbmcgdGhpbmcgdG8gdXNlLlxuXHRcdFx0XHRcdFx0Ly8gQnJvd3NlcnMgZG8gdGhlIHJpZ2h0IHRoaW5nIGFuZCB0aHJvdyBoZXJlLCBhbmQgd2Vcblx0XHRcdFx0XHRcdC8vIHNob3VsZCBob25vciB0aGF0IGFuZCBkbyB0aGUgcmlnaHQgdGhpbmcgYnlcblx0XHRcdFx0XHRcdC8vIHByZWZlcnJpbmcgYHhoci5yZXNwb25zZWAgd2hlcmUgcG9zc2libGUvcHJhY3RpY2FsLlxuXHRcdFx0XHRcdFx0dmFyIHJlc3BvbnNlID0gZXYudGFyZ2V0LnJlc3BvbnNlLCBtZXNzYWdlXG5cblx0XHRcdFx0XHRcdGlmIChyZXNwb25zZVR5cGUgPT09IFwianNvblwiKSB7XG5cdFx0XHRcdFx0XHRcdC8vIEZvciBJRSBhbmQgRWRnZSwgd2hpY2ggZG9uJ3QgaW1wbGVtZW50XG5cdFx0XHRcdFx0XHRcdC8vIGByZXNwb25zZVR5cGU6IFwianNvblwiYC5cblx0XHRcdFx0XHRcdFx0aWYgKCFldi50YXJnZXQucmVzcG9uc2VUeXBlICYmIHR5cGVvZiBhcmdzLmV4dHJhY3QgIT09IFwiZnVuY3Rpb25cIikgcmVzcG9uc2UgPSBKU09OLnBhcnNlKGV2LnRhcmdldC5yZXNwb25zZVRleHQpXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCFyZXNwb25zZVR5cGUgfHwgcmVzcG9uc2VUeXBlID09PSBcInRleHRcIikge1xuXHRcdFx0XHRcdFx0XHQvLyBPbmx5IHVzZSB0aGlzIGRlZmF1bHQgaWYgaXQncyB0ZXh0LiBJZiBhIHBhcnNlZFxuXHRcdFx0XHRcdFx0XHQvLyBkb2N1bWVudCBpcyBuZWVkZWQgb24gb2xkIElFIGFuZCBmcmllbmRzIChhbGxcblx0XHRcdFx0XHRcdFx0Ly8gdW5zdXBwb3J0ZWQpLCB0aGUgdXNlciBzaG91bGQgdXNlIGEgY3VzdG9tXG5cdFx0XHRcdFx0XHRcdC8vIGBjb25maWdgIGluc3RlYWQuIFRoZXkncmUgYWxyZWFkeSB1c2luZyB0aGlzIGF0XG5cdFx0XHRcdFx0XHRcdC8vIHRoZWlyIG93biByaXNrLlxuXHRcdFx0XHRcdFx0XHRpZiAocmVzcG9uc2UgPT0gbnVsbCkgcmVzcG9uc2UgPSBldi50YXJnZXQucmVzcG9uc2VUZXh0XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgYXJncy5leHRyYWN0ID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UgPSBhcmdzLmV4dHJhY3QoZXYudGFyZ2V0LCBhcmdzKVxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzID0gdHJ1ZVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgYXJncy5kZXNlcmlhbGl6ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlID0gYXJncy5kZXNlcmlhbGl6ZShyZXNwb25zZSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChzdWNjZXNzKSByZXNvbHZlKHJlc3BvbnNlKVxuXHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7IG1lc3NhZ2UgPSBldi50YXJnZXQucmVzcG9uc2VUZXh0IH1cblx0XHRcdFx0XHRcdFx0Y2F0Y2ggKGUpIHsgbWVzc2FnZSA9IHJlc3BvbnNlIH1cblx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpXG5cdFx0XHRcdFx0XHRcdGVycm9yLmNvZGUgPSBldi50YXJnZXQuc3RhdHVzXG5cdFx0XHRcdFx0XHRcdGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2Vcblx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0cmVqZWN0KGUpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgYXJncy5jb25maWcgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHR4aHIgPSBhcmdzLmNvbmZpZyh4aHIsIGFyZ3MsIHVybCkgfHwgeGhyXG5cblx0XHRcdFx0Ly8gUHJvcGFnYXRlIHRoZSBgYWJvcnRgIHRvIGFueSByZXBsYWNlbWVudCBYSFIgYXMgd2VsbC5cblx0XHRcdFx0aWYgKHhociAhPT0gb3JpZ2luYWwpIHtcblx0XHRcdFx0XHRyZXBsYWNlZEFib3J0ID0geGhyLmFib3J0XG5cdFx0XHRcdFx0eGhyLmFib3J0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRhYm9ydGVkID0gdHJ1ZVxuXHRcdFx0XHRcdFx0cmVwbGFjZWRBYm9ydC5jYWxsKHRoaXMpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChib2R5ID09IG51bGwpIHhoci5zZW5kKClcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBhcmdzLnNlcmlhbGl6ZSA9PT0gXCJmdW5jdGlvblwiKSB4aHIuc2VuZChhcmdzLnNlcmlhbGl6ZShib2R5KSlcblx0XHRcdGVsc2UgaWYgKGJvZHkgaW5zdGFuY2VvZiAkd2luZG93LkZvcm1EYXRhKSB4aHIuc2VuZChib2R5KVxuXHRcdFx0ZWxzZSB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShib2R5KSlcblx0XHR9KSxcblx0XHRqc29ucDogbWFrZVJlcXVlc3QoZnVuY3Rpb24odXJsLCBhcmdzLCByZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdHZhciBjYWxsYmFja05hbWUgPSBhcmdzLmNhbGxiYWNrTmFtZSB8fCBcIl9taXRocmlsX1wiICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMWUxNikgKyBcIl9cIiArIGNhbGxiYWNrQ291bnQrK1xuXHRcdFx0dmFyIHNjcmlwdCA9ICR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKVxuXHRcdFx0JHdpbmRvd1tjYWxsYmFja05hbWVdID0gZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHRkZWxldGUgJHdpbmRvd1tjYWxsYmFja05hbWVdXG5cdFx0XHRcdHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdClcblx0XHRcdFx0cmVzb2x2ZShkYXRhKVxuXHRcdFx0fVxuXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGVsZXRlICR3aW5kb3dbY2FsbGJhY2tOYW1lXVxuXHRcdFx0XHRzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpXG5cdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJKU09OUCByZXF1ZXN0IGZhaWxlZFwiKSlcblx0XHRcdH1cblx0XHRcdHNjcmlwdC5zcmMgPSB1cmwgKyAodXJsLmluZGV4T2YoXCI/XCIpIDwgMCA/IFwiP1wiIDogXCImXCIpICtcblx0XHRcdFx0ZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3MuY2FsbGJhY2tLZXkgfHwgXCJjYWxsYmFja1wiKSArIFwiPVwiICtcblx0XHRcdFx0ZW5jb2RlVVJJQ29tcG9uZW50KGNhbGxiYWNrTmFtZSlcblx0XHRcdCR3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHNjcmlwdClcblx0XHR9KSxcblx0fVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIG1vdW50UmVkcmF3ID0gcmVxdWlyZShcIi4vbW91bnQtcmVkcmF3XCIpXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vYXBpL3JvdXRlclwiKSh3aW5kb3csIG1vdW50UmVkcmF3KVxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgdmFyIGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKFxuICAgICAgdWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKVxuICAgICkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBEdWUgdG8gdmFyaW91cyBicm93c2VyIGJ1Z3MsIHNvbWV0aW1lcyB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uIHdpbGwgYmUgdXNlZCBldmVuXG4gKiB3aGVuIHRoZSBicm93c2VyIHN1cHBvcnRzIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqICAgLSBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsXG4gKiAgICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cblxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXlcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IGJlaGF2ZXMgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUICE9PSB1bmRlZmluZWRcbiAgPyBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVFxuICA6IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuLypcbiAqIEV4cG9ydCBrTWF4TGVuZ3RoIGFmdGVyIHR5cGVkIGFycmF5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZC5cbiAqL1xuZXhwb3J0cy5rTWF4TGVuZ3RoID0ga01heExlbmd0aCgpXG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBhcnIuX19wcm90b19fID0ge19fcHJvdG9fXzogVWludDhBcnJheS5wcm90b3R5cGUsIGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfX1cbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBhcnIuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24ga01heExlbmd0aCAoKSB7XG4gIHJldHVybiBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKHRoYXQsIGxlbmd0aCkge1xuICBpZiAoa01heExlbmd0aCgpIDwgbGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdHlwZWQgYXJyYXkgbGVuZ3RoJylcbiAgfVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICBpZiAodGhhdCA9PT0gbnVsbCkge1xuICAgICAgdGhhdCA9IG5ldyBCdWZmZXIobGVuZ3RoKVxuICAgIH1cbiAgICB0aGF0Lmxlbmd0aCA9IGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0lmIGVuY29kaW5nIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUodGhpcywgYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKHRoaXMsIGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuLy8gVE9ETzogTGVnYWN5LCBub3QgbmVlZGVkIGFueW1vcmUuIFJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24uXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gZnJvbSAodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKG51bGwsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlXG4gIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuc3BlY2llcyAmJlxuICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSB7XG4gICAgLy8gRml4IHN1YmFycmF5KCkgaW4gRVMyMDE2LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvOTdcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAodGhhdCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2MobnVsbCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlICh0aGF0LCBzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICB0aGF0W2ldID0gMFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHRoYXQsIHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKVxuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuXG4gIHZhciBhY3R1YWwgPSB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICB0aGF0ID0gdGhhdC5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGFycmF5LmJ5dGVMZW5ndGggLy8gdGhpcyB0aHJvd3MgaWYgYGFycmF5YCBpcyBub3QgYSB2YWxpZCBBcnJheUJ1ZmZlclxuXG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gYXJyYXlcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdCA9IGZyb21BcnJheUxpa2UodGhhdCwgYXJyYXkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAodGhhdCwgb2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuKVxuXG4gICAgaWYgKHRoYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhhdFxuICAgIH1cblxuICAgIG9iai5jb3B5KHRoYXQsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gdGhhdFxuICB9XG5cbiAgaWYgKG9iaikge1xuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBpc25hbihvYmoubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApXG4gICAgICB9XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmopXG4gICAgfVxuXG4gICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpXG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBrTWF4TGVuZ3RoKClgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfVxuICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJzaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIGFuZCBgaXMtYnVmZmVyYCAoaW4gU2FmYXJpIDUtNykgdG8gZGV0ZWN0XG4vLyBCdWZmZXIgaW5zdGFuY2VzLlxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCB8IDBcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICB2YXIgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgdmFyIHkgPSBlbmQgLSBzdGFydFxuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICB2YXIgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgdmFyIHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0ICAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAoaXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJlxuICAgICAgICB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbIHZhbCBdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICB2YXIgaW5kZXhTaXplID0gMVxuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICB2YXIgaVxuICBpZiAoZGlyKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgdmFyIHJlcyA9IFtdXG5cbiAgdmFyIGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbFxuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERikgPyAzXG4gICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKSA/IDJcbiAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJydcbiAgdmFyIGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgICBuZXdCdWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGhcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiB1dGY4VG9CeXRlcyhuZXcgQnVmZmVyKHZhbCwgZW5jb2RpbmcpLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGlzbmFuICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdmFsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5pbXBvcnQgeyBMb2cgfSBmcm9tICdoc3V0aWwnO1xuY29uc3QgbG9nID0gbmV3IExvZygnQ29uZmlnJyk7XG5leHBvcnQgY2xhc3MgQ29uZmlnIHtcbiAgICBhc3luYyBvbmluaXQobm9kZSkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gbm9kZS5hdHRycy5jb250ZXh0O1xuICAgICAgICBpZiAoIW5vZGUuc3RhdGUuY2ZnKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gKHR5cGVvZiBub2RlLmF0dHJzLnNvdXJjZSA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICBhd2FpdCBtLnJlcXVlc3QoeyBtZXRob2Q6IFwiR0VUXCIsIHVybDogbm9kZS5hdHRycy5zb3VyY2UgfSlcbiAgICAgICAgICAgICAgICA6IG5vZGUuYXR0cnMuc291cmNlO1xuICAgICAgICAgICAgbm9kZS5zdGF0ZS5jZmcgPSB0cmFuc2xhdGUocywgcy5yb290LCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2aWV3KG5vZGUpIHtcbiAgICAgICAgY29uc3QgY2ZnID0gbm9kZS5zdGF0ZS5jZmc7XG4gICAgICAgIHJldHVybiAoY2ZnICYmIGNmZy5jb21wQ2xhc3MpID8gbShjZmcuY29tcENsYXNzLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNmZy5hdHRycyksIG5vZGUuYXR0cnMpKSA6IG0oJ2RpdicsICd3YWl0aW5nJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNsYXRlKGNvbmZpZywgc3ViY2ZnLCBjb250ZXh0KSB7XG4gICAgaWYgKGlzU3lub255bShjb25maWcsIHN1YmNmZykpIHtcbiAgICAgICAgc3ViY2ZnID0gY29uZmlnW3N1YmNmZ107XG4gICAgfVxuICAgIGlmIChbJ3N0cmluZycsICdudW1iZXInLCAnYm9vbGVhbicsICdmdW5jdGlvbiddLmluZGV4T2YodHlwZW9mIHN1YmNmZykgPj0gMCkge1xuICAgICAgICByZXR1cm4gc3ViY2ZnO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0gc3ViY2ZnLmxlbmd0aCA/IFtdIDoge307XG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5rZXlzKHN1YmNmZyk7XG4gICAgb3B0aW9ucy5tYXAoKG9wdCkgPT4ge1xuICAgICAgICBjb25zdCBjbCA9IHJlc29sdmUob3B0LCBjb250ZXh0KTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRyYW5zbGF0ZShjb25maWcsIHN1YmNmZ1tvcHRdLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKGNsKSB7XG4gICAgICAgICAgICBsb2cuZGVidWcoKCkgPT4gYHJlc29sdmVkIGNsYXNzICcke29wdH0nIHRvICR7bG9nLmluc3BlY3QoY2wsIHsgZGVwdGg6IDEgfSl9YCk7XG4gICAgICAgICAgICBjb25zdCByID0ge1xuICAgICAgICAgICAgICAgIGNvbXBDbGFzczogY2wsXG4gICAgICAgICAgICAgICAgYXR0cnM6IGNvbnRlbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAoIUFycmF5LmlzQXJyYXkoc3ViY2ZnKSAmJiBvcHRpb25zLmxlbmd0aCA9PT0gMSkgP1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHIgOlxuICAgICAgICAgICAgICAgIHJlc3VsdFtvcHRdID0gcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc05hTihwYXJzZUludChvcHQpKSkge1xuICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZygoKSA9PiBgcmVzb2x2ZWQgZGlyZWN0ICcke29wdH0nIHRvICR7bG9nLmluc3BlY3QoY29udGVudCl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRbb3B0XSA9IGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gcmVzb2x2ZShzeW0sIGNvbnRleHQpIHtcbiAgICBsb2cuZGVidWcoKCkgPT4gYHJlc29sdmluZyAke3N5bX0gaW4gY29udGV4dCAnJHtsb2cuaW5zcGVjdChjb250ZXh0KX0nYCk7XG4gICAgbGV0IGNsO1xuICAgIGNvbnRleHQuc29tZSgoYykgPT4gY2wgPSBjW3N5bV0pO1xuICAgIGxvZy5kZWJ1ZygoKSA9PiBgcmVzb2x2aW5nICR7c3ltfSA9PiAke2xvZy5pbnNwZWN0KGNsKX1gKTtcbiAgICByZXR1cm4gY2w7XG59XG5mdW5jdGlvbiBpc1N5bm9ueW0oY29uZmlnLCBrZXkpIHsgcmV0dXJuIHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGNvbmZpZ1trZXldOyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMjl1Wm1sbkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDBOdmJtWnBaeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGNVJrTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1UwRkJVeXhEUVVGRE8wRkJSWGhDTEU5QlFVOHNSVUZCUlN4SFFVRkhMRVZCUVVVc1RVRkJUeXhSUVVGUkxFTkJRVU03UVVGQlF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEJRVXM1UkN4TlFVRk5MRTlCUVU4c1RVRkJUVHRKUVVObUxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCVlR0UlFVTnVRaXhOUVVGTkxFOUJRVThzUjBGQlV5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJRenRSUVVONlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVU3V1VGRGFrSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4TFFVRkxMRkZCUVZFc1EwRkJReXhEUVVGQkxFTkJRVU03WjBKQlF6bERMRTFCUVUwc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkRMRU5CUVVNN1owSkJRek5FTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF6dFpRVU4wUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUjBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdVMEZEYkVRN1NVRkRUQ3hEUVVGRE8wbEJRMFFzU1VGQlNTeERRVUZETEVsQlFWVTdVVUZEV0N4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXp0UlFVTXpRaXhQUVVGUExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRVZCUVVVc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1JVRkJSU3hIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03U1VGRGJra3NRMEZCUXp0RFFVTktPMEZCWVVRc1UwRkJVeXhUUVVGVExFTkJRVU1zVFVGQlZTeEZRVUZGTEUxQlFWVXNSVUZCUlN4UFFVRmhPMGxCUlhCRUxFbEJRVWtzVTBGQlV5eERRVUZETEUxQlFVMHNSVUZCUlN4TlFVRk5MRU5CUVVNc1JVRkJSVHRSUVVGRkxFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1MwRkJSVHRKUVVVelJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSU3hUUVVGVExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1RVRkJUU3hEUVVGRExFbEJRVVVzUTBGQlF5eEZRVUZGTzFGQlFVVXNUMEZCVHl4TlFVRk5MRU5CUVVNN1MwRkJSVHRKUVVNM1JpeEpRVUZKTEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGQkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVWd1F5eE5RVUZOTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEzQkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZWTEVWQlFVVXNSVUZCUlR0UlFVTjJRaXhOUVVGTkxFVkJRVVVzUjBGQlR5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJRM0pETEUxQlFVMHNUMEZCVHl4SFFVRkhMRk5CUVZNc1EwRkJReXhOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJSWGhFTEVsQlFVa3NSVUZCUlN4RlFVRkZPMWxCUTBvc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZGTEVWQlFVVXNRMEZCUVN4dFFrRkJiVUlzUjBGQlJ5eFJRVUZSTEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVU1zUzBGQlN5eEZRVUZETEVOQlFVTXNSVUZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRekZGTEUxQlFVMHNRMEZCUXl4SFFVRkhPMmRDUVVOT0xGTkJRVk1zUlVGQlF5eEZRVUZGTzJkQ1FVTmFMRXRCUVVzc1JVRkJReXhQUVVGUE8yRkJRMmhDTEVOQlFVTTdXVUZEUml4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4UFFVRlBMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZCTEVOQlFVTTdaMEpCUXpkRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRXaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUTNaQ08yRkJSVWs3V1VGRFJDeEpRVUZKTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJUdG5Ra0ZEZEVJc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZGTEVWQlFVVXNRMEZCUVN4dlFrRkJiMElzUjBGQlJ5eFJRVUZSTEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzJGQlEzaEZPMWxCUTBRc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEU5QlFVOHNRMEZCUXp0VFFVTjZRanRKUVVOTUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwZ3NUMEZCVHl4TlFVRk5MRU5CUVVNN1FVRkRiRUlzUTBGQlF6dEJRVlZFTEZOQlFWTXNUMEZCVHl4RFFVRkRMRWRCUVZVc1JVRkJSU3hQUVVGaE8wbEJRM1JETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSU3hGUVVGRkxFTkJRVUVzWVVGQllTeEhRVUZITEdkQ1FVRm5RaXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOMlJTeEpRVUZKTEVWQlFVMHNRMEZCUXp0SlFVTllMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZMTEVWQlFVVXNSVUZCUlN4RFFVRkZMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjBReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVVXNSVUZCUlN4RFFVRkJMR0ZCUVdFc1IwRkJSeXhQUVVGUExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM2hFTEU5QlFVOHNSVUZCUlN4RFFVRkRPMEZCUTJRc1EwRkJRenRCUVVWRUxGTkJRVk1zVTBGQlV5eERRVUZETEUxQlFWVXNSVUZCUlN4SFFVRlBMRWxCUVVrc1QwRkJUeXhQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTEVsQlFVa3NUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5SjkiLCJpbXBvcnQgJy4vdmlldy9QaWxsYXJlZExheW91dGVyJztcbmltcG9ydCAnLi92aWV3L1RpbGVMYXlvdXRlcic7XG5leHBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL3ZpZXcvTGF5b3V0JztcbmV4cG9ydCB7IEZJTEwsIHB4LCBwYywgTGF5b3V0VG9rZW4gfSBmcm9tICcuL3ZpZXcvVG9rZW5zJztcbmV4cG9ydCB7IExheW91dGVyIH0gZnJvbSAnLi92aWV3L0xheW91dGVyJztcbmV4cG9ydCB7IENvbmZpZyB9IGZyb20gJy4vQ29uZmlnJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJTMEVzVDBGQlR5eDVRa0ZCZVVJc1EwRkJRenRCUVVOcVF5eFBRVUZQTEhGQ1FVRnhRaXhEUVVGRE8wRkJSemRDTEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1RVRkJXU3hsUVVGbExFTkJRVU03UVVGRE4wTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVU5hTEZkQlFWY3NSVUZCUlN4TlFVRlBMR1ZCUVdVc1EwRkJRenRCUVVNM1F5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RlFVRkZMRTFCUVZVc2FVSkJRV2xDTEVOQlFVTTdRVUZETDBNc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZaTEZWQlFWVXNRMEZCUXlKOSIsImltcG9ydCBtIGZyb20gXCJtaXRocmlsXCI7XG5pbXBvcnQgeyBMYXlvdXRlciB9IGZyb20gJy4vTGF5b3V0ZXInO1xuaW1wb3J0IHsgTG9nIH0gZnJvbSAnaHN1dGlsJztcbmNvbnN0IGxvZyA9IG5ldyBMb2coJ0xheW91dCcpO1xuZXhwb3J0IGNsYXNzIExheW91dCB7XG4gICAgZ2V0Q29tcG9uZW50cyhub2RlKSB7XG4gICAgICAgIHJldHVybiAhQXJyYXkuaXNBcnJheShub2RlLmF0dHJzLmNvbnRlbnQpID8gbm9kZS5hdHRycy5jb250ZW50IDpcbiAgICAgICAgICAgIG5vZGUuYXR0cnMuY29udGVudC5tYXAoKGMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYy5jb21wQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgYy5hdHRycy5yb3V0ZSA9IG5vZGUuYXR0cnMucm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtKGMuY29tcENsYXNzLCBjLmF0dHJzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDU1Mobm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZS5hdHRycy5jc3MgfHwgJyc7XG4gICAgfVxuICAgIG5vcm1hbGl6ZUNvbnRlbnQoY29tcG9uZW50cykge1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gW20oJy5ocy1sZWFmJywgbS50cnVzdChjb21wb25lbnRzKSldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXBvbmVudHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMubWFwKChjb21wKSA9PiAoY29tcCBpbnN0YW5jZW9mIExheW91dCkgPyBjb21wIDogbShMYXlvdXQsIHsgY29udGVudDogY29tcCB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtjb21wb25lbnRzXTtcbiAgICB9XG4gICAgdmlldyhub2RlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLm5vcm1hbGl6ZUNvbnRlbnQodGhpcy5nZXRDb21wb25lbnRzKG5vZGUpKTtcbiAgICAgICAgbGV0IGNzcyA9IExheW91dGVyLmNyZWF0ZUxheW91dChub2RlLmF0dHJzLCBjb250ZW50KTtcbiAgICAgICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICAgICAgICBzdHlsZTogbm9kZS5zdHlsZSxcbiAgICAgICAgICAgIHJvdXRlOiBub2RlLmF0dHJzLnJvdXRlLFxuICAgICAgICAgICAgb25jbGljazogbm9kZS5hdHRycy5vbmNsaWNrLFxuICAgICAgICAgICAgb25tb3VzZWVudGVyOiBub2RlLmF0dHJzLm9ubW91c2VlbnRlcixcbiAgICAgICAgICAgIG9ubW91c2Vtb3ZlOiBub2RlLmF0dHJzLm9ubW91c2Vtb3ZlLFxuICAgICAgICAgICAgb25tb3VzZWxlYXZlOiBub2RlLmF0dHJzLm9ubW91c2VsZWF2ZSxcbiAgICAgICAgfTtcbiAgICAgICAgbm9kZS5hdHRycy5yb3V0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKG5vZGUuYXR0cnMuaHJlZikge1xuICAgICAgICAgICAgbG9nLmRlYnVnKCgpID0+IGBocmVmICR7bm9kZS5hdHRycy5ocmVmfWApO1xuICAgICAgICAgICAgYXR0cnMuaHJlZiA9IG5vZGUuYXR0cnMuaHJlZjtcbiAgICAgICAgICAgIGF0dHJzLnRhcmdldCA9IGF0dHJzLnRhcmdldCB8fCAnX2JsYW5rJztcbiAgICAgICAgICAgIHJldHVybiBtKGBhLmhzLWxheW91dCAke2Nzc30gJHt0aGlzLmdldENTUyhub2RlKX1gLCBhdHRycywgY29udGVudC5tYXAoKGMpID0+IGMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtKGAuaHMtbGF5b3V0ICR7Y3NzfSAke3RoaXMuZ2V0Q1NTKG5vZGUpfWAsIGF0dHJzLCBjb250ZW50Lm1hcCgoYykgPT4gYykpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVEdGNWIzVjBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2TGk0dmMzSmpMM1pwWlhjdlRHRjViM1YwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFYRkRRU3hQUVVGUExFTkJRVU1zVFVGQlRTeFRRVUZUTEVOQlFVTTdRVUZGZUVJc1QwRkJUeXhGUVVGRkxGRkJRVkVzUlVGQlJTeE5RVUZOTEZsQlFWa3NRMEZCUXp0QlFVTjBReXhQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEUxQlFVOHNVVUZCVVN4RFFVRkRPMEZCUVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1FVRnJRemRFTEUxQlFVMHNUMEZCVHl4TlFVRk5PMGxCYjBKTUxHRkJRV0VzUTBGQlF5eEpRVUZWTzFGQlF6bENMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRE0wUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCU3l4RlFVRkZMRVZCUVVVN1owSkJRemRDTEVsQlFVa3NRMEZCUXl4RFFVRkRMRk5CUVZNc1JVRkJSVHR2UWtGRFlpeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXp0dlFrRkRha01zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdhVUpCUTJ4RE8zRkNRVUZOTzI5Q1FVTklMRTlCUVU4c1EwRkJReXhEUVVGRE8ybENRVU5hTzFsQlEwd3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRXQ3hEUVVGRE8wbEJVVk1zVFVGQlRTeERRVUZETEVsQlFWVTdVVUZEZGtJc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NTVUZCU1N4RlFVRkZMRU5CUVVNN1NVRkRhRU1zUTBGQlF6dEpRVkZQTEdkQ1FVRm5RaXhEUVVGRExGVkJRV2RDTzFGQlEzSkRMRWxCUVVrc1QwRkJUeXhWUVVGVkxFdEJRVXNzVVVGQlVTeEZRVUZGTzFsQlEyaERMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF5OURPMkZCUVUwc1NVRkJTU3hWUVVGVkxGbEJRVmtzUzBGQlN5eEZRVUZGTzFsQlJXaERMRTlCUVU4c1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFWVXNSVUZCVVN4RlFVRkZMRU5CUTNaRExFTkJRVU1zU1VGQlNTeFpRVUZaTEUxQlFVMHNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJReXhQUVVGUExFVkJRVU1zU1VGQlNTeEZRVUZETEVOQlFVTXNRMEZETjBRc1EwRkJRenRUUVVWVU8xRkJSVVFzVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMGxCUTNoQ0xFTkJRVU03U1VGeFFrUXNTVUZCU1N4RFFVRkRMRWxCUVZVN1VVRkRXQ3hOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhGTEVsQlFVa3NSMEZCUnl4SFFVRkhMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVOeVJDeE5RVUZOTEV0QlFVc3NSMEZCWjBJN1dVRkRka0lzUzBGQlN5eEZRVUZSTEVsQlFVc3NRMEZCUXl4TFFVRkxPMWxCUTNoQ0xFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzN1dVRkRka0lzVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUenRaUVVNelFpeFpRVUZaTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWk8xbEJRM0pETEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGZEJRVmM3V1VGRGJrTXNXVUZCV1N4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldUdFRRVU40UXl4RFFVRkRPMUZCUTBZc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUXpkQ0xFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVN1dVRkRha0lzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkZMRVZCUVVVc1EwRkJRU3hSUVVGUkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVONlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETzFsQlF6ZENMRXRCUVVzc1EwRkJReXhOUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNTVUZCU1N4UlFVRlJMRU5CUVVNN1dVRkplRU1zVDBGQlR5eERRVUZETEVOQlFVTXNaVUZCWlN4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCU3l4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzcEdPMkZCUVUwN1dVRkRTQ3hQUVVGUExFTkJRVU1zUTBGQlF5eGpRVUZqTEVkQlFVY3NTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZMTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGVFWTdTVUZEVEN4RFFVRkRPME5CUTBvaWZRPT0iLCJpbXBvcnQgeyBweCwgcGMsIEZJTEwgfSBmcm9tICcuL1Rva2Vucyc7XG5leHBvcnQgY2xhc3MgTGF5b3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGFyZWFEZXNjKSB7XG4gICAgICAgIHRoaXMuYXJlYURlc2MgPSBhcmVhRGVzYztcbiAgICAgICAgdGhpcy5zcGFjaW5nID0gMDtcbiAgICB9XG4gICAgc3RhdGljIHRyYW5zbGF0ZShwYXJhbXMpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHBhcmFtcy5wdXNoKCcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyYW1zLm1hcCgocGFyYW0pID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtLmVuZHNXaXRoKCdweCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBweChwYXJzZUludChwYXJhbSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFyYW0uZW5kc1dpdGgoJyUnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGMocGFyc2VJbnQocGFyYW0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtLnRvTG93ZXJDYXNlKCkgPT09ICdmaWxsJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRklMTDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgcmVnaXN0ZXIoa2V5d29yZCwgbGF5b3V0ZXIpIHtcbiAgICAgICAgTGF5b3V0ZXIubGF5b3V0U3R5bGVzW2tleXdvcmRdID0gbGF5b3V0ZXI7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVMYXlvdXQoYXR0cnMsIGNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IGNzcyA9ICcnO1xuICAgICAgICBPYmplY3Qua2V5cyhMYXlvdXRlci5sYXlvdXRTdHlsZXMpLnNvbWUoa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChhdHRyc1trZXldKSB7XG4gICAgICAgICAgICAgICAgY3NzID0gbmV3IExheW91dGVyLmxheW91dFN0eWxlc1trZXldKExheW91dGVyLnRyYW5zbGF0ZShhdHRyc1trZXldKSkuZ2V0U3R5bGVzKGNvbXBvbmVudHMpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNzcztcbiAgICB9XG59XG5MYXlvdXRlci5sYXlvdXRTdHlsZXMgPSB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRHRjViM1YwWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOHVMaTl6Y21NdmRtbGxkeTlNWVhsdmRYUmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGaFFTeFBRVUZQTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hKUVVGSkxFVkJRVVVzVFVGQlRTeFZRVUZWTEVOQlFVTTdRVUZ6UW5oRExFMUJRVTBzVDBGQlowSXNVVUZCVVR0SlFYbEZNVUlzV1VGQmJVSXNVVUZCYzBJN1VVRkJkRUlzWVVGQlVTeEhRVUZTTEZGQlFWRXNRMEZCWXp0UlFWSjZReXhaUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlVXZERMRU5CUVVNN1NVRjZSSEpETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJkMEk3VVVGRE4wTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUlVGQlJUdFpRVUZGTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGQlJUdFJRVU0zUXl4UFFVRlBMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eExRVUZuUWl4RlFVRkZMRVZCUVVVN1dVRkRia01zU1VGQlNTeFBRVUZQTEV0QlFVc3NTMEZCU3l4UlFVRlJMRVZCUVVVN1owSkJRek5DTEVsQlFVa3NTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdHZRa0ZCUlN4UFFVRlBMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0cFFrRkJSVHRuUWtGRGVrUXNTVUZCU1N4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzI5Q1FVRkZMRTlCUVU4c1JVRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmxDUVVGRk8yZENRVU40UkN4SlFVRkpMRXRCUVVzc1EwRkJReXhYUVVGWExFVkJRVVVzUzBGQlJ5eE5RVUZOTEVWQlFVVTdiMEpCUVVVc1QwRkJUeXhKUVVGSkxFTkJRVU03YVVKQlFVTTdZVUZEY0VRN2FVSkJRVTA3WjBKQlEwZ3NUMEZCVHl4TFFVRkxMRU5CUVVNN1lVRkRhRUk3VVVGRFRDeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTlFMRU5CUVVNN1NVRlhUU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFXTXNSVUZCUlN4UlFVRjNRanRSUVVVelJDeFJRVUZSTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF6dEpRVU01UXl4RFFVRkRPMGxCVlUwc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eExRVUZUTEVWQlFVVXNWVUZCZFVJN1VVRkRla1FzU1VGQlNTeEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTJJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF6RkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzJkQ1FVTmFMRWRCUVVjc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0blFrRkZNMFlzVDBGQlR5eEpRVUZKTEVOQlFVTTdZVUZEWmp0WlFVTkVMRTlCUVU4c1MwRkJTeXhEUVVGRE8xRkJRMnBDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTBnc1QwRkJUeXhIUVVGSExFTkJRVU03U1VGRFppeERRVUZET3p0QlFYcEVUU3h4UWtGQldTeEhRVUYxUWl4RlFVRkZMRU5CUVVNaWZRPT0iLCJpbXBvcnQgeyBMYXlvdXRlciB9IGZyb20gJy4vTGF5b3V0ZXInO1xuaW1wb3J0IHsgRGVmaW5lZFRva2VuLCBQaXhlbFRva2VuIH0gZnJvbSAnLi9Ub2tlbnMnO1xuZXhwb3J0IGNvbnN0IFBpbGxhckxheW91dHMgPSBbXG4gICAgJ2NvbHVtbnMnLCAncm93cydcbl07XG5jb25zdCBjUGFyYW1zID0ge1xuICAgIGNvbHVtbnM6IHtcbiAgICAgICAgY3NzQ2xhc3M6ICcuaHMtY29sdW1uLWxheW91dCcsXG4gICAgICAgIGZpZWxkczogWyd0b3AnLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnLCAnaGVpZ2h0JywgJ3dpZHRoJ11cbiAgICB9LFxuICAgIHJvd3M6IHtcbiAgICAgICAgY3NzQ2xhc3M6ICcuaHMtcm93LWxheW91dCcsXG4gICAgICAgIGZpZWxkczogWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nLCAnd2lkdGgnLCAnaGVpZ2h0J11cbiAgICB9XG59O1xuY2xhc3MgUGlsbGFyTGF5b3V0ZXIgZXh0ZW5kcyBMYXlvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zLCBhcmVhRGVzYykge1xuICAgICAgICBzdXBlcihhcmVhRGVzYyk7XG4gICAgICAgIHRoaXMuYXJlYURlc2MgPSBhcmVhRGVzYztcbiAgICAgICAgdGhpcy5maWVsZHMgPSBwYXJhbXMuZmllbGRzO1xuICAgICAgICB0aGlzLmNzc0NsYXNzID0gcGFyYW1zLmNzc0NsYXNzO1xuICAgICAgICBsZXQgbiA9IGFyZWFEZXNjLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBmaXJzdCA9IDA7XG4gICAgICAgIGxldCBsYXN0ID0gMDtcbiAgICAgICAgdGhpcy51bml0ID0gYXJlYURlc2Muc29tZSgoYXJlYSkgPT4gKGFyZWEgaW5zdGFuY2VvZiBQaXhlbFRva2VuKSkgP1xuICAgICAgICAgICAgdGhpcy51bml0UGl4ZWwgOiB0aGlzLnVuaXRQZXJjZW50O1xuICAgICAgICBhcmVhRGVzYy5zb21lKChhcmVhLCBpKSA9PiAoKGFyZWFEZXNjW2ldIGluc3RhbmNlb2YgRGVmaW5lZFRva2VuKSA/ICsrZmlyc3QgPCAwIDogdHJ1ZSkpO1xuICAgICAgICBhcmVhRGVzYy5zb21lKChhcmVhLCBpKSA9PiAoKGFyZWFEZXNjW24gLSBpXSBpbnN0YW5jZW9mIERlZmluZWRUb2tlbikgPyArK2xhc3QgPCAwIDogdHJ1ZSkpO1xuICAgICAgICB0aGlzLmZpcnN0Rml4ZWQgPSBmaXJzdDtcbiAgICAgICAgdGhpcy5sYXN0Rml4ZWQgPSBNYXRoLm1pbihsYXN0LCBhcmVhRGVzYy5sZW5ndGggLSBmaXJzdCk7XG4gICAgfVxuICAgIGdldFNpemVzKG51bSkge1xuICAgICAgICBjb25zdCBmaXJzdCA9IHRoaXMuZmlyc3RGaXhlZDtcbiAgICAgICAgY29uc3QgbGFzdCA9IHRoaXMubGFzdEZpeGVkO1xuICAgICAgICBjb25zdCBkZXNjID0gdGhpcy5hcmVhRGVzYztcbiAgICAgICAgY29uc3QgbGVuID0gZGVzYy5sZW5ndGg7XG4gICAgICAgIHJldHVybiBbLi4uQXJyYXkobnVtKS5rZXlzKCldLm1hcCgoaSkgPT4ge1xuICAgICAgICAgICAgbGV0IHNpemUgPSBudWxsO1xuICAgICAgICAgICAgbGV0IHQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGkgPiBudW0gLSAxIC0gbGFzdCkge1xuICAgICAgICAgICAgICAgIHNpemUgPSBkZXNjW2xlbiAtIChudW0gLSBpKV0uZ2V0U2l6ZSgpO1xuICAgICAgICAgICAgICAgIHQgPSAnZW5kJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPCBmaXJzdCkge1xuICAgICAgICAgICAgICAgIHNpemUgPSBkZXNjW2ldLmdldFNpemUoKTtcbiAgICAgICAgICAgICAgICB0ID0gJ3N0YXJ0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxlbiA+IDAgJiYgbGVuID09PSBmaXJzdCkge1xuICAgICAgICAgICAgICAgIHNpemUgPSBkZXNjW2xlbiAtIDFdLmdldFNpemUoKTtcbiAgICAgICAgICAgICAgICB0ID0gJ3N0YXJ0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHNpemU6IHNpemUsIGNvZGU6IHQsIGZpZWxkczoge30gfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVuaXRQZXJjZW50KG51bSkge1xuICAgICAgICBsZXQgZiA9IHRoaXMuZmllbGRzO1xuICAgICAgICBsZXQgbWF4ID0gMTAwLjA7XG4gICAgICAgIGxldCBzdHlsZXMgPSB0aGlzLmdldFNpemVzKG51bSk7XG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHsgaWYgKHN0eWxlLnNpemUpIHtcbiAgICAgICAgICAgIG1heCA9IG1heCAtIHN0eWxlLnNpemU7XG4gICAgICAgICAgICBudW0tLTtcbiAgICAgICAgfSB9KTtcbiAgICAgICAgbGV0IGRlZkRpbSA9IG1heCAvIG51bTtcbiAgICAgICAgZnVuY3Rpb24gcGFzcyhzdHlsZXMsIGl4MCwgaXgxLCBicmVha0NvbmQpIHtcbiAgICAgICAgICAgIGxldCBzdW1EaW0gPSAwO1xuICAgICAgICAgICAgc3R5bGVzLnNvbWUoc3R5bGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzaXplID0gc3R5bGUuc2l6ZSB8fCBkZWZEaW07XG4gICAgICAgICAgICAgICAgaWYgKGJyZWFrQ29uZChzdHlsZS5jb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3R5bGUuZmllbGRzW2l4MF0gPSBzdW1EaW0gKyAnJSc7XG4gICAgICAgICAgICAgICAgc3VtRGltICs9IHNpemU7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmllbGRzW2l4MV0gPSAoMTAwIC0gc3VtRGltKSArICclJztcbiAgICAgICAgICAgICAgICBzdHlsZS5maWVsZHNbZls1XV0gPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcGFzcyhzdHlsZXMsIGZbMl0sIGZbM10sIChlKSA9PiBlID09PSAnZW5kJyk7XG4gICAgICAgIHBhc3Moc3R5bGVzLnJldmVyc2UoKSwgZlszXSwgZlsyXSwgKGUpID0+IGUgIT09ICdlbmQnKTtcbiAgICAgICAgcmV0dXJuIHN0eWxlcy5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHVuaXRQaXhlbChudW0pIHtcbiAgICAgICAgbGV0IHN0eWxlcyA9IHRoaXMuZ2V0U2l6ZXMobnVtKTtcbiAgICAgICAgbGV0IGYgPSB0aGlzLmZpZWxkcztcbiAgICAgICAgbGV0IGRlZkRpbSA9IDEwMC4wIC8gbnVtO1xuICAgICAgICBsZXQgc3VtRGltID0gMDtcbiAgICAgICAgc3R5bGVzLnNvbWUoKHN0eWxlLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3R5bGUuY29kZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpZWxkc1tmWzJdXSA9IHN1bURpbSArICdweCc7XG4gICAgICAgICAgICAgICAgc3VtRGltICs9IHN0eWxlLnNpemUgKyAodGhpcy5zcGFjaW5nIHx8IDApICsgKHRoaXMuc3BhY2luZyB8fCAwKTtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWVsZHNbZlszXV0gPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmllbGRzW2ZbNV1dID0gc3R5bGUuc2l6ZSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdHlsZS5jb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmllbGRzW2ZbMl1dID0gKHN1bURpbSA+IDApID8gKHN1bURpbSArICdweCcpIDogKGkgKiBkZWZEaW0gKyAnJScpO1xuICAgICAgICAgICAgICAgIHN1bURpbSA9IC0xO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpZWxkc1tmWzNdXSA9ICgxMDAgLSAoaSArIDEpICogZGVmRGltKSArICclJztcbiAgICAgICAgICAgICAgICBzdHlsZS5maWVsZHNbZls1XV0gPSAnYXV0byc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdHlsZS5jb2RlID09PSAnZW5kJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgc3VtRGltID0gMDtcbiAgICAgICAgc3R5bGVzLnNsaWNlKCkucmV2ZXJzZSgpLnNvbWUoKHN0eWxlLCBpKSA9PiB7XG4gICAgICAgICAgICBzdHlsZS5maWVsZHNbZlszXV0gPSBzdW1EaW0gKyAncHgnO1xuICAgICAgICAgICAgaWYgKHN0eWxlLmNvZGUgPT09ICdlbmQnKSB7XG4gICAgICAgICAgICAgICAgc3VtRGltICs9IHN0eWxlLnNpemUgKyAodGhpcy5zcGFjaW5nIHx8IDApICsgKHRoaXMuc3BhY2luZyB8fCAwKTtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWVsZHNbZlsyXV0gPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmllbGRzW2ZbNV1dID0gc3R5bGUuc2l6ZSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc3VtRGltID4gMCAmJiBzdHlsZS5jb2RlICE9PSAnc3RhcnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmZpZWxkc1tmWzVdXSA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgIH1cbiAgICBnZXRTdHlsZXMoY29tcG9uZW50cykge1xuICAgICAgICBsZXQgZiA9IHRoaXMuZmllbGRzO1xuICAgICAgICBsZXQgc3R5bGVzID0gdGhpcy51bml0KGNvbXBvbmVudHMubGVuZ3RoKTtcbiAgICAgICAgY29tcG9uZW50cy5tYXAoKGMsIGkpID0+IHtcbiAgICAgICAgICAgIGMuc3R5bGUgPSBgJHtmWzRdfToxMDAlO2A7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdHlsZXNbaV0uZmllbGRzKS5mb3JFYWNoKChzdCkgPT4geyBjLnN0eWxlICs9IGAke3N0fTogJHtzdHlsZXNbaV0uZmllbGRzW3N0XX07YDsgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5jc3NDbGFzcztcbiAgICB9XG59XG5jbGFzcyBDb2x1bW5zIGV4dGVuZHMgUGlsbGFyTGF5b3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGFyZWFEZXNjKSB7XG4gICAgICAgIHN1cGVyKGNQYXJhbXNbUGlsbGFyTGF5b3V0c1swXV0sIGFyZWFEZXNjKTtcbiAgICAgICAgdGhpcy5hcmVhRGVzYyA9IGFyZWFEZXNjO1xuICAgIH1cbn1cbmNsYXNzIFJvd3MgZXh0ZW5kcyBQaWxsYXJMYXlvdXRlciB7XG4gICAgY29uc3RydWN0b3IoYXJlYURlc2MpIHtcbiAgICAgICAgc3VwZXIoY1BhcmFtc1tQaWxsYXJMYXlvdXRzWzFdXSwgYXJlYURlc2MpO1xuICAgICAgICB0aGlzLmFyZWFEZXNjID0gYXJlYURlc2M7XG4gICAgfVxufVxuTGF5b3V0ZXIucmVnaXN0ZXIoUGlsbGFyTGF5b3V0c1swXSwgQ29sdW1ucyk7XG5MYXlvdXRlci5yZWdpc3RlcihQaWxsYXJMYXlvdXRzWzFdLCBSb3dzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVHbHNiR0Z5WldSTVlYbHZkWFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5MmFXVjNMMUJwYkd4aGNtVmtUR0Y1YjNWMFpYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCTUVOQkxFOUJRVThzUlVGQlJTeFJRVUZSTEVWQlFVVXNUVUZCVlN4WlFVRlpMRU5CUVVNN1FVRkRNVU1zVDBGQlR5eEZRVU5GTEZsQlFWa3NSVUZEV2l4VlFVRlZMRVZCUVVVc1RVRkJVU3hWUVVGVkxFTkJRVU03UVVGcFFuaERMRTFCUVUwc1EwRkJReXhOUVVGTkxHRkJRV0VzUjBGQlJ6dEpRVU42UWl4VFFVRlRMRVZCUVVVc1RVRkJUVHREUVVOd1FpeERRVUZETzBGQlMwWXNUVUZCVFN4UFFVRlBMRWRCUVVjN1NVRkRXaXhQUVVGUExFVkJRV2RDTzFGQlEyNUNMRkZCUVZFc1JVRkJSU3h0UWtGQmJVSTdVVUZETjBJc1RVRkJUU3hGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNSVUZCUlN4TlFVRk5MRVZCUVVVc1QwRkJUeXhGUVVGRkxGRkJRVkVzUlVGQlJTeFBRVUZQTEVOQlFVTTdTMEZEYUVVN1NVRkRSQ3hKUVVGSkxFVkJRV2RDTzFGQlEyaENMRkZCUVZFc1JVRkJSU3huUWtGQlowSTdVVUZETVVJc1RVRkJUU3hGUVVGRkxFTkJRVU1zVFVGQlRTeEZRVUZGTEU5QlFVOHNSVUZCUlN4TFFVRkxMRVZCUVVVc1VVRkJVU3hGUVVGRkxFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTTdTMEZEYUVVN1EwRkRTaXhEUVVGRE8wRkJUMFlzVFVGQlpTeGpRVUZsTEZOQlFWRXNVVUZCVVR0SlFXRXhReXhaUVVGWkxFMUJRVzFDTEVWQlFWTXNVVUZCYzBJN1VVRkRNVVFzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUkc5Q0xHRkJRVkVzUjBGQlVpeFJRVUZSTEVOQlFXTTdVVUZGTVVRc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUXpWQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJRenRSUVVWb1F5eEpRVUZKTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hIUVVGRExFTkJRVU1zUTBGQlF6dFJRVU14UWl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFpDeEpRVUZKTEVsQlFVa3NSMEZCU1N4RFFVRkRMRU5CUVVNN1VVRkZaQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGblFpeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1dVRkJXU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZCTEVOQlFVTTdXVUZETVVVc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRSUVVkMFF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJaMElzUlVGQlJTeERRVUZSTEVWQlFVVXNSVUZCUlN4RFFVTjZReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4WlFVRmpMRmxCUVZrc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZIYWtVc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFXZENMRVZCUVVVc1EwRkJVU3hGUVVGRkxFVkJRVVVzUTBGRGVrTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NXVUZCV1N4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeEhRVUZETEVOQlFVTXNRMEZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVZxUlN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU40UWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJReXhOUVVGTkxFZEJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETlVRc1EwRkJRenRKUVZOUExGRkJRVkVzUTBGQlF5eEhRVUZWTzFGQlEzWkNMRTFCUVUwc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTTdVVUZET1VJc1RVRkJUU3hKUVVGSkxFZEJRVWtzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXp0UlFVTTNRaXhOUVVGTkxFbEJRVWtzUjBGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRPMUZCUXpWQ0xFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkZlRUlzVDBGQlR5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJVU3hGUVVGRkxFVkJRVVU3V1VGRE0wTXNTVUZCU1N4SlFVRkpMRWRCUVZVc1NVRkJTU3hEUVVGRE8xbEJRM1pDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVOaUxFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUXl4RFFVRkRMRWRCUVVNc1NVRkJTU3hGUVVGSE8yZENRVUZGTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03WjBKQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRoUVVGRk8ybENRVU53UlN4SlFVRkpMRU5CUVVNc1IwRkJSeXhMUVVGTExFVkJRVWM3WjBKQlFVVXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkJReXhEUVVGRExFZEJRVWNzVDBGQlR5eERRVUZETzJGQlFVVTdhVUpCUXpGRUxFbEJRVWtzUjBGQlJ5eEhRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRXRCUVVjc1MwRkJTeXhGUVVGRE8yZENRVUZGTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMmRDUVVGRExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTTdZVUZCUlR0WlFVTTFSU3hQUVVGUExFVkJRVU1zU1VGQlNTeEZRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVNc1EwRkJReXhGUVVGRkxFMUJRVTBzUlVGQlF5eEZRVUZGTEVWQlFVTXNRMEZCUXp0UlFVTXhReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5RTEVOQlFVTTdTVUZGVHl4WFFVRlhMRU5CUVVNc1IwRkJWVHRSUVVNeFFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM0JDTEVsQlFVa3NSMEZCUnl4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOb1FpeEpRVUZKTEUxQlFVMHNSMEZCWjBJc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVTNReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZMRWRCUVVjc1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTzFsQlFVVXNSMEZCUnl4SFFVRkhMRWRCUVVjc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETzFsQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1UwRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaEdMRWxCUVVrc1RVRkJUU3hIUVVGSExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZGZGtJc1UwRkJVeXhKUVVGSkxFTkJRVU1zVFVGQmJVSXNSVUZCUlN4SFFVRlZMRVZCUVVVc1IwRkJWU3hGUVVGRkxGTkJRV2RETzFsQlEzWkdMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU5tTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3WjBKQlEyaENMRWxCUVVrc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVsQlFVa3NUVUZCVFN4RFFVRkRPMmRDUVVOb1F5eEpRVUZKTEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3YjBKQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNN2FVSkJRVVU3WjBKQlF6TkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NUVUZCVFN4SFFVRkRMRWRCUVVjc1EwRkJRenRuUWtGREwwSXNUVUZCVFN4SlFVRkpMRWxCUVVrc1EwRkJRenRuUWtGRFppeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkRMRWRCUVVjc1EwRkJRenRuUWtGRGNrTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNN1owSkJRelZDTEU5QlFVOHNTMEZCU3l4RFFVRkRPMWxCUTJwQ0xFTkJRVU1zUTBGQlF5eERRVUZETzFGQlExQXNRMEZCUXp0UlFVVkVMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlEyeEVMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVZFc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpWRUxFOUJRVThzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMGxCUXpWQ0xFTkJRVU03U1VGRlR5eFRRVUZUTEVOQlFVTXNSMEZCVlR0UlFVTjRRaXhKUVVGSkxFMUJRVTBzUjBGQlowSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU0zUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlJYQkNMRWxCUVVrc1RVRkJUU3hIUVVGSExFdEJRVXNzUjBGQlF5eEhRVUZITEVOQlFVTTdVVUZIZGtJc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyWXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTnlRaXhKUVVGSkxFdEJRVXNzUTBGQlF5eEpRVUZKTEV0QlFVY3NUMEZCVHl4RlFVRkZPMmRDUVVOMFFpeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNSMEZCUlN4SlFVRkpMRU5CUVVNN1owSkJRMnhETEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMnBGTEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRPMmRDUVVNMVFpeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRWRCUVVVc1NVRkJTU3hEUVVGRE8yRkJRM3BETzJsQ1FVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUzBGQlN5eEpRVUZKTEVWQlFVVTdaMEpCUXpWQ0xFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRMjVGTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRFdpeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRuUWtGRE9VTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNN1lVRkRMMEk3YVVKQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hMUVVGSExFdEJRVXNzUlVGQlJUdG5Ra0ZETTBJc1QwRkJUeXhKUVVGSkxFTkJRVU03WVVGRFpqdFpRVU5FTEU5QlFVOHNTMEZCU3l4RFFVRkRPMUZCUTJwQ0xFTkJRVU1zUTBGQlF5eERRVUZETzFGQlIwZ3NUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOWUxFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRka01zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUTI1RExFbEJRVWtzUzBGQlN5eERRVUZETEVsQlFVa3NTMEZCU3l4TFFVRkxMRVZCUVVVN1owSkJRM1JDTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMnBGTEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRPMmRDUVVNMVFpeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRWRCUVVNc1NVRkJTU3hEUVVGRE8yRkJRM2hETzJsQ1FVRk5PMmRDUVVOSUxFbEJRVWtzVFVGQlRTeEhRVUZETEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hMUVVGTExFOUJRVThzUlVGQlJUdHZRa0ZEY0VNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU03YVVKQlF5OUNPMmRDUVVORUxFOUJRVThzU1VGQlNTeERRVUZETzJGQlEyWTdXVUZEUkN4UFFVRlBMRXRCUVVzc1EwRkJRenRSUVVOcVFpeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTklMRTlCUVU4c1RVRkJUU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdTVUZSVXl4VFFVRlRMRU5CUVVNc1ZVRkJhMEk3VVVGRGJFTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU53UWl4SlFVRkpMRTFCUVUwc1IwRkJaMElzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRGRrUXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVXNzUlVGQlJTeERRVUZSTEVWQlFVVXNSVUZCUlR0WlFVVXZRaXhEUVVGRExFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU03V1VGRE1VSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUlVGQlV5eEZRVUZGTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhKUVVGSkxFZEJRVWNzUlVGQlJTeExRVUZMTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRelZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTBnc1QwRkJUeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETzBsQlEzcENMRU5CUVVNN1EwRkRTanRCUVRKRVJDeE5RVUZOTEU5QlFWRXNVMEZCVVN4alFVRmpPMGxCUTJoRExGbEJRVzFDTEZGQlFYTkNPMUZCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVUZ5UlN4aFFVRlJMRWRCUVZJc1VVRkJVU3hEUVVGak8wbEJRV2xFTEVOQlFVTTdRMEZET1VZN1FVRXlSRVFzVFVGQlRTeEpRVUZMTEZOQlFWRXNZMEZCWXp0SlFVTTNRaXhaUVVGdFFpeFJRVUZ6UWp0UlFVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGQmNrVXNZVUZCVVN4SFFVRlNMRkZCUVZFc1EwRkJZenRKUVVGcFJDeERRVUZETzBOQlF6bEdPMEZCUlVRc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03UVVGRE4wTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNaWZRPT0iLCJpbXBvcnQgeyBMYXlvdXRlciB9IGZyb20gJy4vTGF5b3V0ZXInO1xuaW1wb3J0IHsgRmlsbFRva2VuLCBEZWZpbmVkVG9rZW4sIFBpeGVsVG9rZW4gfSBmcm9tICcuL1Rva2Vucyc7XG5jbGFzcyBUaWxlTGF5b3V0ZXIgZXh0ZW5kcyBMYXlvdXRlciB7XG4gICAgY29uc3RydWN0b3IoYXJlYURlc2MpIHtcbiAgICAgICAgc3VwZXIoYXJlYURlc2MpO1xuICAgICAgICB0aGlzLmFyZWFEZXNjID0gYXJlYURlc2M7XG4gICAgICAgIHRoaXMudW5pdCA9IGFyZWFEZXNjLnNvbWUoKGFyZWEpID0+IChhcmVhIGluc3RhbmNlb2YgUGl4ZWxUb2tlbikpID9cbiAgICAgICAgICAgIHRoaXMudW5pdFBpeGVsIDogdGhpcy51bml0UGVyY2VudDtcbiAgICB9XG4gICAgdW5pdFBlcmNlbnQobnVtKSB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSB0aGlzLmFyZWFEZXNjO1xuICAgICAgICBjb25zdCBmaWxsID0gdGhpcy5hcmVhRGVzYy5zb21lKGEgPT4gKGEgaW5zdGFuY2VvZiBGaWxsVG9rZW4pKTtcbiAgICAgICAgY29uc3Qgcm9vdCA9IE1hdGguc3FydChudW0pO1xuICAgICAgICBjb25zdCByb3dzID0gTWF0aC5yb3VuZChyb290KTtcbiAgICAgICAgbGV0IGNvbHMgPSBNYXRoLmZsb29yKHJvb3QpO1xuICAgICAgICBpZiAocm9vdCA+IGNvbHMpIHtcbiAgICAgICAgICAgIGNvbHMrKztcbiAgICAgICAgfVxuICAgICAgICBsZXQgd2lkdGggPSAoZGVzY1swXSBpbnN0YW5jZW9mIERlZmluZWRUb2tlbikgPyBkZXNjWzBdLmdldFNpemUoKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGhlaWdodCA9IChkZXNjWzFdIGluc3RhbmNlb2YgRGVmaW5lZFRva2VuKSA/IGRlc2NbMV0uZ2V0U2l6ZSgpIDogd2lkdGg7XG4gICAgICAgIHdpZHRoID0gd2lkdGggfHwgMTAwIC8gY29scztcbiAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IDEwMCAvIHJvd3M7XG4gICAgICAgIGxldCBsZWZ0ID0gMDtcbiAgICAgICAgbGV0IHRvcCA9IDA7XG4gICAgICAgIGxldCBzdHlsZXMgPSBbLi4uQXJyYXkobnVtKS5rZXlzKCldLm1hcChpID0+IHtcbiAgICAgICAgICAgIGxldCByID0gJ2F1dG8nO1xuICAgICAgICAgICAgbGV0IHcgPSB3aWR0aCArICclJztcbiAgICAgICAgICAgIGxldCBiID0gJ2F1dG8nO1xuICAgICAgICAgICAgbGV0IGggPSBoZWlnaHQgKyAnJSc7XG4gICAgICAgICAgICBpZiAoKGxlZnQgKyAyICogd2lkdGgpID4gMTAwICYmIGZpbGwpIHtcbiAgICAgICAgICAgICAgICByID0gJzAlJztcbiAgICAgICAgICAgICAgICB3ID0gJ2F1dG8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCh0b3AgKyAyICogaGVpZ2h0KSA+IDEwMCAmJiBmaWxsKSB7XG4gICAgICAgICAgICAgICAgYiA9ICcwJSc7XG4gICAgICAgICAgICAgICAgaCA9ICdhdXRvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gYFxuICAgICAgICAgICAgICAgIHRvcDogJHtNYXRoLmZsb29yKHRvcCl9JTsgYm90dG9tOiR7Yn07XG4gICAgICAgICAgICAgICAgbGVmdDogJHtsZWZ0fSU7ICAgICAgICAgICByaWdodDoke3J9O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAke3d9OyAgICAgICAgICAgICAgaGVpZ2h0OiAke2h9O1xuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIGlmIChNYXRoLnJvdW5kKGxlZnQgKz0gd2lkdGgpID4gMTAwIC0gTWF0aC5mbG9vcih3aWR0aCkpIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gMDtcbiAgICAgICAgICAgICAgICB0b3AgKz0gaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICB9XG4gICAgdW5pdFBpeGVsKG51bSkge1xuICAgICAgICBjb25zdCBkZXNjID0gdGhpcy5hcmVhRGVzYztcbiAgICAgICAgY29uc3Qgcm9vdCA9IE1hdGguc3FydChudW0pO1xuICAgICAgICBjb25zdCByb3dzID0gTWF0aC5yb3VuZChyb290KTtcbiAgICAgICAgbGV0IGNvbHMgPSBNYXRoLmZsb29yKHJvb3QpO1xuICAgICAgICBpZiAocm9vdCA+IGNvbHMpIHtcbiAgICAgICAgICAgIGNvbHMrKztcbiAgICAgICAgfVxuICAgICAgICBsZXQgd2lkdGggPSAoZGVzY1swXSBpbnN0YW5jZW9mIERlZmluZWRUb2tlbikgPyBkZXNjWzBdLmdldFNpemUoKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGhlaWdodCA9IChkZXNjWzFdIGluc3RhbmNlb2YgRGVmaW5lZFRva2VuKSA/IGRlc2NbMV0uZ2V0U2l6ZSgpIDogd2lkdGg7XG4gICAgICAgIHdpZHRoID0gd2lkdGggfHwgMTAwIC8gY29scztcbiAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IDEwMCAvIHJvd3M7XG4gICAgICAgIGxldCBsZWZ0ID0gMDtcbiAgICAgICAgbGV0IHRvcCA9IDA7XG4gICAgICAgIGxldCBzdHlsZXMgPSBbLi4uQXJyYXkobnVtKS5rZXlzKCldLm1hcChpID0+IHtcbiAgICAgICAgICAgIGxldCByID0gJ2F1dG8nO1xuICAgICAgICAgICAgbGV0IHcgPSB3aWR0aCArICdweCc7XG4gICAgICAgICAgICBsZXQgYiA9ICdhdXRvJztcbiAgICAgICAgICAgIGxldCBoID0gaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gYFxuICAgICAgICAgICAgICAgIHRvcDogJHtNYXRoLmZsb29yKHRvcCl9JTsgYm90dG9tOiR7Yn07XG4gICAgICAgICAgICAgICAgbGVmdDogJHtsZWZ0fSU7ICAgICAgICAgICByaWdodDoke3J9O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAke3d9OyAgICAgICAgICAgICAgaGVpZ2h0OiAke2h9O1xuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIGlmIChNYXRoLnJvdW5kKGxlZnQgKz0gd2lkdGgpID4gMTAwIC0gTWF0aC5mbG9vcih3aWR0aCkpIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gMDtcbiAgICAgICAgICAgICAgICB0b3AgKz0gaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICB9XG4gICAgZ2V0U3R5bGVzKGNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IHN0eWxlcyA9IHRoaXMudW5pdChjb21wb25lbnRzLmxlbmd0aCk7XG4gICAgICAgIGNvbXBvbmVudHMubWFwKChjLCBpKSA9PiB7XG4gICAgICAgICAgICBjLnN0eWxlID0gc3R5bGVzW2ldO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICcuaHMtdGlsZS1sYXlvdXQnO1xuICAgIH1cbn1cbkxheW91dGVyLnJlZ2lzdGVyKCd0aWxlcycsIFRpbGVMYXlvdXRlcik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR2xzWlV4aGVXOTFkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dkxpNHZjM0pqTDNacFpYY3ZWR2xzWlV4aGVXOTFkR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFUWkVRU3hQUVVGUExFVkJRVVVzVVVGQlVTeEZRVUZGTEUxQlFWVXNXVUZCV1N4RFFVRkRPMEZCUXpGRExFOUJRVThzUlVGRFJTeFRRVUZUTEVWQlExUXNXVUZCV1N4RlFVTmFMRlZCUVZVc1JVRkJSU3hOUVVGUkxGVkJRVlVzUTBGQlF6dEJRVkY0UXl4TlFVRk5MRmxCUVdFc1UwRkJVU3hSUVVGUk8wbEJVUzlDTEZsQlFXMUNMRkZCUVhOQ08xRkJRM0pETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVSRUxHRkJRVkVzUjBGQlVpeFJRVUZSTEVOQlFXTTdVVUZKY2tNc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJaMElzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRmxCUVZrc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlFTeERRVUZETzFsQlF6RkZMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1NVRkRNVU1zUTBGQlF6dEpRVVZQTEZkQlFWY3NRMEZCUXl4SFFVRlZPMUZCUXpGQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkRNMElzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF5OUVMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkROVUlzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU01UWl4SlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUXpsQ0xFbEJRVWtzU1VGQlNTeEhRVUZITEVsQlFVa3NSVUZCUlR0WlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRE8xTkJRVVU3VVVGRE5VSXNTVUZCU1N4TFFVRkxMRWRCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NXVUZCV1N4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETzFGQlF6bEZMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4WlFVRlpMRmxCUVZrc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0UlFVVXhSU3hMUVVGTExFZEJRVWtzUzBGQlN5eEpRVUZMTEVkQlFVY3NSMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkROVUlzVFVGQlRTeEhRVUZITEUxQlFVMHNTVUZCU1N4SFFVRkhMRWRCUVVNc1NVRkJTU3hEUVVGRE8xRkJRelZDTEVsQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOaUxFbEJRVWtzUjBGQlJ5eEhRVUZKTEVOQlFVTXNRMEZCUXp0UlFVVmlMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN1dVRkRlRU1zU1VGQlNTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRPMWxCUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzUzBGQlN5eEhRVUZETEVkQlFVY3NRMEZCUXp0WlFVTnlReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTTdXVUZCU1N4SlFVRkpMRU5CUVVNc1IwRkJSeXhOUVVGTkxFZEJRVU1zUjBGQlJ5eERRVUZETzFsQlEzUkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eEhRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRWRCUVVjc1NVRkJTU3hKUVVGSkxFVkJRVVU3WjBKQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRenRuUWtGQlF5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRPMkZCUVVVN1dVRkROMFFzU1VGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVsQlFVa3NSVUZCUlR0blFrRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETzJkQ1FVRkRMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU03WVVGQlJUdFpRVU0zUkN4TlFVRk5MRXRCUVVzc1IwRkJSenQxUWtGRFNDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhoUVVGaExFTkJRVU03ZDBKQlF6VkNMRWxCUVVrc2MwSkJRWE5DTEVOQlFVTTdlVUpCUXpGQ0xFTkJRVU1zTUVKQlFUQkNMRU5CUVVNN1lVRkRlRU1zUTBGQlF6dFpRVU5HTEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFbEJRVWtzUzBGQlN5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdaMEpCUVVVc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZCUXl4SFFVRkhMRWxCUVVrc1RVRkJUU3hEUVVGRE8yRkJRVVU3V1VGRGJrWXNUMEZCVHl4TFFVRkxMRU5CUVVNN1VVRkRhRUlzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEU2l4UFFVRlBMRTFCUVUwc1EwRkJRenRKUVVOc1FpeERRVUZETzBsQlJVOHNVMEZCVXl4RFFVRkRMRWRCUVZVN1VVRkRlRUlzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJRenRSUVVVelFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6VkNMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRPVUlzU1VGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU01UWl4SlFVRkpMRWxCUVVrc1IwRkJSeXhKUVVGSkxFVkJRVVU3V1VGQlJTeEpRVUZKTEVWQlFVVXNRMEZCUXp0VFFVRkZPMUZCUXpWQ0xFbEJRVWtzUzBGQlN5eEhRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhaUVVGWkxGbEJRVmtzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenRSUVVNNVJTeEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeFpRVUZaTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRk1VVXNTMEZCU3l4SFFVRkpMRXRCUVVzc1NVRkJTeXhIUVVGSExFZEJRVU1zU1VGQlNTeERRVUZETzFGQlF6VkNMRTFCUVUwc1IwRkJSeXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEhRVUZETEVsQlFVa3NRMEZCUXp0UlFVTTFRaXhKUVVGSkxFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWWl4SlFVRkpMRWRCUVVjc1IwRkJTU3hEUVVGRExFTkJRVU03VVVGRllpeEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTzFsQlEzaERMRWxCUVVrc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF6dFpRVUZKTEVsQlFVa3NRMEZCUXl4SFFVRkhMRXRCUVVzc1IwRkJReXhKUVVGSkxFTkJRVU03V1VGRGRFTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRE8xbEJRVWtzU1VGQlNTeERRVUZETEVkQlFVY3NUVUZCVFN4SFFVRkRMRWxCUVVrc1EwRkJRenRaUVVOMlF5eE5RVUZOTEV0QlFVc3NSMEZCUnp0MVFrRkRTQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4aFFVRmhMRU5CUVVNN2QwSkJRelZDTEVsQlFVa3NjMEpCUVhOQ0xFTkJRVU03ZVVKQlF6RkNMRU5CUVVNc01FSkJRVEJDTEVOQlFVTTdZVUZEZUVNc1EwRkJRenRaUVVOR0xFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRWxCUVVrc1MwRkJTeXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3WjBKQlFVVXNTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGQlF5eEhRVUZITEVsQlFVa3NUVUZCVFN4RFFVRkRPMkZCUVVVN1dVRkRia1lzVDBGQlR5eExRVUZMTEVOQlFVTTdVVUZEYUVJc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFNpeFBRVUZQTEUxQlFVMHNRMEZCUXp0SlFVTnNRaXhEUVVGRE8wbEJVVk1zVTBGQlV5eERRVUZETEZWQlFXdENPMUZCUTJ4RExFbEJRVWtzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlF6RkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZMTEVWQlFVVXNRMEZCVVN4RlFVRkZMRVZCUVVVN1dVRkRMMElzUTBGQlF5eERRVUZETEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGVFSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRTQ3hQUVVGUExHbENRVUZwUWl4RFFVRkRPMGxCUXpkQ0xFTkJRVU03UTBGRFNqdEJRVWRFTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhGUVVGRkxGbEJRVmtzUTBGQlF5eERRVUZESW4wPSIsImV4cG9ydCBjbGFzcyBMYXlvdXRUb2tlbiB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIH1cbiAgICBnZXRTaXplKCkgeyByZXR1cm4gdGhpcy5zaXplOyB9XG59XG5leHBvcnQgY2xhc3MgRGVmaW5lZFRva2VuIGV4dGVuZHMgTGF5b3V0VG9rZW4ge1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHsgc3VwZXIoc2l6ZSk7IH1cbn1cbmV4cG9ydCBjbGFzcyBGaWxsVG9rZW4gZXh0ZW5kcyBMYXlvdXRUb2tlbiB7XG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKC0xKTsgfVxufVxuZXhwb3J0IGNsYXNzIFBpeGVsVG9rZW4gZXh0ZW5kcyBEZWZpbmVkVG9rZW4ge1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHsgc3VwZXIoc2l6ZSk7IH1cbn1cbmV4cG9ydCBjbGFzcyBQZXJjZW50VG9rZW4gZXh0ZW5kcyBEZWZpbmVkVG9rZW4ge1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHsgc3VwZXIoc2l6ZSk7IH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBweChweCkgeyByZXR1cm4gbmV3IFBpeGVsVG9rZW4ocHgpOyB9XG5leHBvcnQgZnVuY3Rpb24gcGMocGMpIHsgcmV0dXJuIG5ldyBQZXJjZW50VG9rZW4ocGMpOyB9XG5leHBvcnQgY29uc3QgRklMTCA9IG5ldyBGaWxsVG9rZW4oKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHOXJaVzV6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dkxpNHZjM0pqTDNacFpYY3ZWRzlyWlc1ekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVkZCTEUxQlFVMHNUMEZCWjBJc1YwRkJWenRKUVVNM1FpeFpRVUZ2UWl4SlFVRlpPMUZCUVZvc1UwRkJTU3hIUVVGS0xFbEJRVWtzUTBGQlVUdEpRVUZITEVOQlFVTTdTVUZETjBJc1QwRkJUeXhMUVVGTExFOUJRVThzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1EwRkRla003UVVGTFJDeE5RVUZOTEU5QlFXZENMRmxCUVdFc1UwRkJVU3hYUVVGWE8wbEJRMnhFTEZsQlFWa3NTVUZCV1N4SlFVRkpMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRMEZETjBNN1FVRkxSQ3hOUVVGTkxFOUJRVThzVTBGQlZTeFRRVUZSTEZkQlFWYzdTVUZEZEVNc1owSkJRV2RDTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dERRVU12UWp0QlFVdEVMRTFCUVUwc1QwRkJUeXhWUVVGWExGTkJRVkVzV1VGQldUdEpRVU40UXl4WlFVRlpMRWxCUVZjc1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPME5CUXpWRE8wRkJTMFFzVFVGQlRTeFBRVUZQTEZsQlFXRXNVMEZCVVN4WlFVRlpPMGxCUXpGRExGbEJRVmtzU1VGQlZ5eEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UTBGRE5VTTdRVUZOUkN4TlFVRk5MRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVk1zU1VGQlRTeFBRVUZQTEVsQlFVa3NWVUZCVlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVTA1UkN4TlFVRk5MRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVk1zU1VGQlRTeFBRVUZQTEVsQlFVa3NXVUZCV1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVXRvUlN4TlFVRk5MRU5CUVVNc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeFRRVUZUTEVWQlFVVXNRMEZCUXlKOSIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiY3J5cHRvXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=