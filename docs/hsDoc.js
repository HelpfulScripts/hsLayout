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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_PillaredLayouter__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_TileLayouter__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_Layout__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return __WEBPACK_IMPORTED_MODULE_2__view_Layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_Tokens__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FILL", function() { return __WEBPACK_IMPORTED_MODULE_3__view_Tokens__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "px", function() { return __WEBPACK_IMPORTED_MODULE_3__view_Tokens__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pc", function() { return __WEBPACK_IMPORTED_MODULE_3__view_Tokens__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutToken", function() { return __WEBPACK_IMPORTED_MODULE_3__view_Tokens__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_Layouter__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Layouter", function() { return __WEBPACK_IMPORTED_MODULE_4__view_Layouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hsConfig__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HsConfig", function() { return __WEBPACK_IMPORTED_MODULE_5__hsConfig__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mithril__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_6__mithril__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_6__mithril__["b"]; });

if (__WEBPACK_IMPORTED_MODULE_0__view_PillaredLayouter__) { }

if (__WEBPACK_IMPORTED_MODULE_1__view_TileLayouter__) { }





//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsT0FBTyxLQUFLLE9BQU8sTUFBVSx5QkFBeUIsQ0FBQztBQUFNLElBQUcsT0FBTyxFQUFFLEdBQUU7QUFDM0UsT0FBTyxLQUFLLEtBQUssTUFBWSxxQkFBcUIsQ0FBQztBQUFVLElBQUcsS0FBSyxFQUFFLEdBQUU7QUFFekUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFTLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQ1osV0FBVyxFQUFFLE1BQU8sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBVSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQVUsWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxDQUFDLEVBQVMsQ0FBQyxFQUFFLE1BQU8sV0FBVyxDQUFBIn0=

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = round;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TextHAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TextVAlign; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);

function round(num) {
    const result = num.toFixed(1);
    if (result === 'Infinity') {
        return '1e20';
    }
    return result;
}
var TextHAlign;
(function (TextHAlign) {
    TextHAlign["start"] = "start";
    TextHAlign["middle"] = "middle";
    TextHAlign["end"] = "end";
})(TextHAlign || (TextHAlign = {}));
var TextVAlign;
(function (TextVAlign) {
    TextVAlign["top"] = "top";
    TextVAlign["center"] = "center";
    TextVAlign["bottom"] = "bottom";
})(TextVAlign || (TextVAlign = {}));
class SVGElem {
    text(cfg, text) {
        let yShift = 0;
        let hAlign = cfg.xpos;
        switch (cfg.xpos) {
            case TextHAlign.start: break;
            case TextHAlign.end: break;
            case TextHAlign.middle:
            default:
                hAlign = TextHAlign.middle;
                break;
        }
        switch (cfg.ypos) {
            case TextVAlign.top:
                yShift = 0.7;
                break;
            case TextVAlign.center:
                yShift = 0.35;
                break;
            case TextVAlign.bottom:
            default:
                yShift = 0;
                break;
        }
        const param = {
            x: cfg.x || '',
            y: cfg.y || '',
            dx: round(cfg.hOffset || 0) + 'em',
            dy: round((cfg.vOffset || 0) + yShift) + 'em',
            style: `text-anchor:${hAlign}; ${cfg.style || ''}`,
            class: cfg.cssClass,
        };
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('text', param, text);
    }
    rect(tl, area, style, title) {
        if (area.w < 0) {
            tl.x += area.w;
            area.w = -area.w;
        }
        if (area.h < 0) {
            tl.y += area.h;
            area.h = -area.h;
        }
        const param = {
            x: round(tl.x), y: round(tl.y),
            width: round(area.w) + (area.wunit || ''),
            height: round(area.h) + (area.hunit || ''),
            style: style
        };
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('rect', param), Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('title', title);
    }
    circle(c, r, style, title) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('circle', { cx: round(c.x), cy: round(c.y), r: round(r), style: style }, Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('title', title));
    }
    clipRect(tl, area, id) {
        const param = {
            x: round(tl.x), y: round(tl.y),
            width: round(area.w) + (area.wunit || ''),
            height: round(area.h) + (area.hunit || '')
        };
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('defs', Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('clipPath', { id: id }, Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('rect', param)));
    }
    line(x0, x1, y0, y1, cssClass) {
        const param = {
            x1: round(x0), y1: round(y0),
            x2: round(x1), y2: round(y1),
            class: cssClass
        };
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('line', param);
    }
    horLine(x0, x1, y, cssClass) {
        const param = {
            x1: round(x0), y1: round(y),
            x2: round(x1), y2: round(y),
            class: cssClass
        };
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('line', param);
    }
    verLine(x, y0, y1, cssClass) {
        const param = {
            x1: round(x), y1: round(y0),
            x2: round(x), y2: round(y1),
            class: cssClass
        };
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('line', param);
    }
    polyline(data, x, y, scales, id, style, title) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('polyline', {
            'clip-path': id ? `url(#${id})` : undefined,
            style: style,
            points: data.map((row) => `${round(scales.x.convert(row[x]))},${round(scales.y.convert(row[y]))}`).join(' ')
        }, Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('title', title));
    }
    polygon(dataFore, dataBack, x, yFore, yBack, scales, id, style, title) {
        const indexed = (x === undefined);
        const sx = (_x) => round(scales.x.convert(_x));
        const sy = (_y) => round(scales.y.convert(_y));
        const clip = id ? `url(#${id})` : undefined;
        const points = dataFore.map((row, i) => `${sx(indexed ? i : row[x])},${sy(row[yFore])}`)
            .concat(dataBack.map((row, i) => `${sx(indexed ? (dataBack.length - i - 1) : row[x])},${sy(yBack ? row[yBack] : 0)}`)).join(' ');
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('polygon', { 'clip-path': clip, style: style, points: points }, Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('title', title));
    }
    shape(points, id, style, title) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('polyline', {
            'clip-path': id ? `url(#${id})` : undefined,
            style: style,
            points: points.map((row) => `${round(row[0])},${round(row[1])}`).join(' ')
        }, Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('title', title));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SVGElem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU1ZHRWxlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TVkdFbGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxDQUFDLEVBQVMsTUFBTSxVQUFVLENBQUM7QUF3RXBDLE1BQU0sZ0JBQWlCLEdBQVU7SUFDN0IsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixJQUFJLE1BQU0sS0FBSyxVQUFVLEVBQUU7UUFDdkIsT0FBTyxNQUFNLENBQUM7S0FDakI7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQsTUFBTSxDQUFOLElBQVksVUFJWDtBQUpELFdBQVksVUFBVTtJQUNsQiw2QkFBaUIsQ0FBQTtJQUNqQiwrQkFBa0IsQ0FBQTtJQUNsQix5QkFBZSxDQUFBO0FBQ25CLENBQUMsRUFKVyxVQUFVLEtBQVYsVUFBVSxRQUlyQjtBQUVELE1BQU0sQ0FBTixJQUFZLFVBSVg7QUFKRCxXQUFZLFVBQVU7SUFDbEIseUJBQWUsQ0FBQTtJQUNmLCtCQUFrQixDQUFBO0lBQ2xCLCtCQUFrQixDQUFBO0FBQ3RCLENBQUMsRUFKVyxVQUFVLEtBQVYsVUFBVSxRQUlyQjtBQUVELE1BQU07SUFNRixJQUFJLENBQUMsR0FBWSxFQUFFLElBQVc7UUFDMUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxNQUFNLEdBQWMsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNqQyxRQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDYixLQUFLLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBRSxNQUFNO1lBQzlCLEtBQUssVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFJLE1BQU07WUFDOUIsS0FBSyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQ3ZCO2dCQUFlLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUFDLE1BQU07U0FDcEQ7UUFDRCxRQUFPLEdB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

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TimedPromise__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return __WEBPACK_IMPORTED_MODULE_0__TimedPromise__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return __WEBPACK_IMPORTED_MODULE_0__TimedPromise__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__showdown__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "markDown", function() { return __WEBPACK_IMPORTED_MODULE_1__showdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Checksum__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "shortCheckSum", function() { return __WEBPACK_IMPORTED_MODULE_2__Checksum__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Date__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return __WEBPACK_IMPORTED_MODULE_3__Date__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ms", function() { return __WEBPACK_IMPORTED_MODULE_3__Date__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Number__ = __webpack_require__(62);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return __WEBPACK_IMPORTED_MODULE_4__Number__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PacingQueue__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PacingQueue", function() { return __WEBPACK_IMPORTED_MODULE_5__PacingQueue__["a"]; });






//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQVksWUFBWSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTyxZQUFZLENBQUM7QUFDNUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBWSxRQUFRLENBQUM7QUFDeEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFlLFVBQVUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQVMsZUFBZSxDQUFDIn0=

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tokens__ = __webpack_require__(5);

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
                    return Object(__WEBPACK_IMPORTED_MODULE_0__Tokens__["g" /* px */])(parseInt(param));
                }
                if (param.endsWith('%')) {
                    return Object(__WEBPACK_IMPORTED_MODULE_0__Tokens__["f" /* pc */])(parseInt(param));
                }
                if (param.toLowerCase() === 'fill') {
                    return __WEBPACK_IMPORTED_MODULE_0__Tokens__["b" /* FILL */];
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
    ;
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Layouter;

Layouter.layoutStyles = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF5b3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmlldy9MYXlvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQSxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUF5QnhDLE1BQU07SUF5RUYsWUFBbUIsUUFBc0I7UUFBdEIsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQVJ6QyxZQUFPLEdBQUcsQ0FBQyxDQUFDO0lBUWdDLENBQUM7SUF6RHJDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBd0I7UUFDN0MsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM3QyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFnQixFQUFFLEVBQUU7WUFDbkMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7Z0JBQzNCLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFBRSxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFBRTtnQkFDekQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUFFLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUFFO2dCQUN4RCxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBRyxNQUFNLEVBQUU7b0JBQUUsT0FBTyxJQUFJLENBQUM7aUJBQUM7YUFDcEQ7aUJBQU07Z0JBQ0gsT0FBTyxLQUFLLENBQUM7YUFDaEI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFXTSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQWMsRUFBRSxLQUFxQjtRQUV4RCxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBVU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFTLEVBQUUsVUFBdUI7UUFDekQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNaLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDM0YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztnQkFDdkIsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBVzRDLENBQUM7O0FBcEV2QyxxQkFBWSxHQUF1QixFQUFFLENBQUMifQ==

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = px;
/* harmony export (immutable) */ __webpack_exports__["f"] = pc;
class LayoutToken {
    constructor(size) {
        this.size = size;
    }
    getSize() { return this.size; }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = LayoutToken;

class DefinedToken extends LayoutToken {
    constructor(size) { super(size); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DefinedToken;

class FillToken extends LayoutToken {
    constructor() { super(-1); }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = FillToken;

class PixelToken extends DefinedToken {
    constructor(size) { super(size); }
}
/* harmony export (immutable) */ __webpack_exports__["e"] = PixelToken;

class PercentToken extends DefinedToken {
    constructor(size) { super(size); }
}
/* unused harmony export PercentToken */

function px(px) { return new PixelToken(px); }
function pc(pc) { return new PercentToken(pc); }
const FILL = new FillToken();
/* harmony export (immutable) */ __webpack_exports__["b"] = FILL;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZpZXcvVG9rZW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBLE1BQU07SUFDRixZQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFHLENBQUM7SUFDN0IsT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Q0FDekM7QUFLRCxNQUFNLG1CQUE2QixTQUFRLFdBQVc7SUFDbEQsWUFBWSxJQUFZLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUM3QztBQUtELE1BQU0sZ0JBQWlCLFNBQVEsV0FBVztJQUN0QyxnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQy9CO0FBS0QsTUFBTSxpQkFBa0IsU0FBUSxZQUFZO0lBQ3hDLFlBQVksSUFBVyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDNUM7QUFLRCxNQUFNLG1CQUFvQixTQUFRLFlBQVk7SUFDMUMsWUFBWSxJQUFXLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUM1QztBQU1ELE1BQU0sYUFBYSxFQUFTLElBQU0sT0FBTyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFNOUQsTUFBTSxhQUFhLEVBQVMsSUFBTSxPQUFPLElBQUksWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUtoRSxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQyJ9

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);

const FILE = './data/index.json';
class DocSets {
    static add(content) {
        const lib = content.name;
        DocSets.gList.set.push(lib);
        DocSets.gList.set.sort();
        DocSets.gList.index[lib] = {};
        recursiveIndex(content, DocSets.gList.index[lib], lib);
    }
    static loadList(file) {
        file = file || FILE;
        return DocSets.loadIndexSet(file);
    }
    static get(lib, id = 0) {
        if (lib) {
            if (DocSets.gList.index[lib]) {
                return DocSets.gList.index[lib][id + ''];
            }
            else {
                return DocSets.gList.set;
            }
        }
        else {
            return DocSets.gList.set;
        }
    }
    static loadIndexSet(file) {
        return __WEBPACK_IMPORTED_MODULE_0_hslayout__["m"].request({ method: "GET", url: file })
            .then((result) => {
            DocSets.gTitle = result.title;
            let i = file.lastIndexOf('/');
            const dir = file.substring(0, i + 1);
            return Promise.all(result.docs.map((f) => loadDocSet(dir, f)));
        })
            .catch(console.log);
    }
    static title() { return DocSets.gTitle; }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DocSets;

DocSets.gList = { set: [], index: {} };
;
function loadDocSet(dir, file) {
    return __WEBPACK_IMPORTED_MODULE_0_hslayout__["m"].request({ method: "GET", url: dir + file })
        .then((r) => {
        DocSets.add(r);
    })
        .catch(console.log);
}
function recursiveIndex(content, index, lib, path = '') {
    function getNewPath(content) {
        content.name = content.name.replace(/["'](.+)["']|(.+)/g, "$1$2");
        const elName = content.name.match(/([^\/]+)$/)[1];
        content.name = elName;
        return content.fullPath = (path === '') ? elName : `${path}.${elName}`;
    }
    function markIfModule(content) {
        if (content.comment && content.comment.tags) {
            content.comment.tags.forEach((tag) => {
                if (tag.tag === 'module') {
                    content.innerModule = tag.text.trim();
                }
            });
        }
    }
    content.lib = lib;
    if (typeof content === 'object' && content.name) {
        const newPath = getNewPath(content);
        markIfModule(content);
        index[content.id + ''] = content;
        if (newPath.length > 0) {
            index[newPath] = content;
        }
        if (content.children) {
            content.children.map((c) => recursiveIndex(c, index, lib, newPath));
        }
        if (content.signatures) {
            content.signatures.map((c) => recursiveIndex(c, index, lib, newPath));
        }
        if (content.parameters) {
            content.parameters.map((c) => recursiveIndex(c, index, lib, newPath));
        }
        if (content.type && content.type.declaration && content.type.declaration.children) {
            content.type.declaration.children.map((c) => recursiveIndex(c, index, lib, newPath));
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jU2V0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Eb2NTZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBUyxVQUFVLENBQUM7QUFNaEMsTUFBTSxJQUFJLEdBQVUsbUJBQW1CLENBQUM7QUFPeEMsTUFBTTtJQU1LLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBVztRQUN6QixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDOUIsY0FBYyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBT00sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFZO1FBQy9CLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDO1FBRXBCLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBU00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBaUIsQ0FBQztRQUM3QyxJQUFJLEdBQUcsRUFBRTtZQUNMLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzFCLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzFDO2lCQUFNO2dCQUNILE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FB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

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Menu__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return __WEBPACK_IMPORTED_MODULE_0__Menu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Button__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_1__Button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RadioButton__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return __WEBPACK_IMPORTED_MODULE_2__RadioButton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ToggleButton__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return __WEBPACK_IMPORTED_MODULE_3__ToggleButton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CornerButton__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CornerButton", function() { return __WEBPACK_IMPORTED_MODULE_4__CornerButton__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonSymbols", function() { return __WEBPACK_IMPORTED_MODULE_4__CornerButton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AddRemove__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AddButton", function() { return __WEBPACK_IMPORTED_MODULE_5__AddRemove__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveButton", function() { return __WEBPACK_IMPORTED_MODULE_5__AddRemove__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Collapsible__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Collapsible", function() { return __WEBPACK_IMPORTED_MODULE_6__Collapsible__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Modal__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return __WEBPACK_IMPORTED_MODULE_7__Modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TypeAhead__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TypeAhead", function() { return __WEBPACK_IMPORTED_MODULE_8__TypeAhead__["a"]; });









//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFjLFFBQVEsQ0FBQztBQUV0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQVksVUFBVSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTyxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQ1osYUFBYSxFQUNiLE1BQW9CLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQ1QsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTyxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFhLFNBQVMsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQVMsYUFBYSxDQUFDIn0=

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = oneOfItems;
/* unused harmony export anyItems */
/* unused harmony export selectable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);

function oneOfItems(items, title) {
    Object.keys(this.items).forEach((key) => {
        this.items[key].isSelected = (key === title);
    });
}
function anyItems(items, title) {
    this.items[title].isSelected = !this.items[title].isSelected;
}
class Selector {
    constructor() {
        this.updateSelected = [oneOfItems, anyItems][0];
        this.items = {};
    }
    init(desc, updateSelected = oneOfItems) {
        this.updateSelected = updateSelected.bind(this);
        desc.items = desc.items || [];
        desc.changed = desc.changed || ((item) => console.log(`missing changed() function for menu item ${item}`));
        this.checkSelectedItem(desc);
        return desc;
    }
    ;
    checkSelectedItem(desc) {
        if (this.selectedItem === undefined) {
            if (typeof desc.defaultItem === 'number') {
                this.selectedItem = desc.items[desc.defaultItem % desc.items.length];
            }
            else {
                this.selectedItem = desc.defaultItem || desc.items[0];
            }
        }
    }
    internalStateUpdate(desc, item) {
        this.selectedItem = item;
        this.checkSelectedItem(desc);
        this.updateSelected(this.items, this.selectedItem);
    }
    renderItem(desc, i) {
        const reactor = (callback) => (item) => {
            this.internalStateUpdate(desc, item);
            if (typeof callback === 'function') {
                callback(item);
            }
        };
        const l = desc.items[i] || '';
        const itemCss = desc.itemCss || [];
        this.checkSelectedItem(desc);
        return selectable({
            title: l,
            css: itemCss[i],
            isSelected: this.selectedItem ? (l.toLowerCase() === this.selectedItem.toLowerCase()) : false,
            mouseDown: reactor(desc.mouseDown),
            mouseUp: reactor(desc.mouseUp),
            clicked: reactor(desc.changed)
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Selector;

;
function selectable(childDesc) {
    const css = childDesc.css || '';
    const cssSelected = `${childDesc.isSelected ? 'hs-selected' : ''}`;
    const onclick = childDesc.clicked ? () => { childDesc.clicked(childDesc.title); } : undefined;
    const onmousedown = childDesc.mouseDown ? () => { childDesc.mouseDown(childDesc.title); } : undefined;
    const onmouseup = childDesc.mouseUp ? () => { childDesc.mouseUp(childDesc.title); } : undefined;
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(`.hs-selectable ${css} ${cssSelected}`, { style: childDesc.style, onclick: onclick, onmousedown: onmousedown, onmouseup: onmouseup }, childDesc.title);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvU2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJBLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxVQUFVLENBQUM7QUEwQzdCLE1BQU0scUJBQXFCLEtBQTZCLEVBQUUsS0FBWTtJQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFVLEVBQUUsRUFBRTtRQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsS0FBRyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFNRCxNQUFNLG1CQUFtQixLQUE2QixFQUFFLEtBQVk7SUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQztBQUNqRSxDQUFDO0FBTUQsTUFBTTtJQUFOO1FBT1ksbUJBQWMsR0FBWSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUtwRCxVQUFLLEdBQTRCLEVBQUUsQ0FBQztJQStDaEQsQ0FBQztJQTdDRyxJQUFJLENBQUMsSUFBaUIsRUFBRSxpQkFBMEIsVUFBVTtRQUN4RCxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLElBQVcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsSUFB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

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SVGElem__ = __webpack_require__(1);

;

function getCrossAt(cross, scale) {
    let crossesAt;
    switch (cross) {
        case 'min':
            crossesAt = scale.domain()[0];
            break;
        case 'max':
            crossesAt = scale.domain()[1];
            break;
        default: crossesAt = cross || 0;
    }
    return scale.convert(crossesAt);
}
class Axes extends __WEBPACK_IMPORTED_MODULE_1__SVGElem__["a" /* SVGElem */] {
    static defaultConfig(cfg) {
        function scaleCfg() {
            return {
                type: Axes.type.linear,
                domain: ['auto', 'auto']
            };
        }
        function labelCfg(primary, x, major) {
            return {
                visible: major, text: '',
                xpos: x ? __WEBPACK_IMPORTED_MODULE_1__SVGElem__["b" /* TextHAlign */].middle : (primary ? __WEBPACK_IMPORTED_MODULE_1__SVGElem__["b" /* TextHAlign */].end : __WEBPACK_IMPORTED_MODULE_1__SVGElem__["b" /* TextHAlign */].start),
                ypos: x ? (primary ? __WEBPACK_IMPORTED_MODULE_1__SVGElem__["c" /* TextVAlign */].top : __WEBPACK_IMPORTED_MODULE_1__SVGElem__["c" /* TextVAlign */].bottom) : __WEBPACK_IMPORTED_MODULE_1__SVGElem__["c" /* TextVAlign */].center,
                hOffset: x ? 0 : (primary ? -0.7 : 0.7),
                vOffset: x ? (primary ? 0.7 : -0.7) : 0
            };
        }
        function markCfg(primary, major) {
            return {
                visible: major,
                length: (primary ? 1 : -1) * (major ? 10 : 5)
            };
        }
        function titleCfg(primary, x) {
            return {
                visible: true, text: (x ? 'x' : 'y') + (primary ? '' : '2'),
                xpos: x ? __WEBPACK_IMPORTED_MODULE_1__SVGElem__["b" /* TextHAlign */].end : (primary ? __WEBPACK_IMPORTED_MODULE_1__SVGElem__["b" /* TextHAlign */].middle : __WEBPACK_IMPORTED_MODULE_1__SVGElem__["b" /* TextHAlign */].start),
                ypos: x ? __WEBPACK_IMPORTED_MODULE_1__SVGElem__["c" /* TextVAlign */].top : (primary ? __WEBPACK_IMPORTED_MODULE_1__SVGElem__["c" /* TextVAlign */].bottom : __WEBPACK_IMPORTED_MODULE_1__SVGElem__["c" /* TextVAlign */].top),
                hOffset: x ? -2 : (primary ? 0 : 0.3),
                vOffset: x ? (primary ? 0.4 : -1.2) : (primary ? -0.5 : 0.7)
            };
        }
        function axisCfg(primary, x) {
            return {
                visible: primary ? true : false,
                crossesAt: primary ? 'min' : 'max',
                scale: scaleCfg(),
                title: titleCfg(primary, x),
                ticks: {
                    major: {
                        marks: markCfg(primary, true),
                        labels: labelCfg(primary, x, true),
                        labelFmt: undefined
                    },
                    minor: {
                        marks: markCfg(primary, false),
                        labels: labelCfg(primary, x, false),
                        labelFmt: undefined
                    }
                }
            };
        }
        cfg.axes = {
            primary: {
                x: axisCfg(true, true),
                y: axisCfg(true, false)
            },
            secondary: {
                x: axisCfg(false, true),
                y: axisCfg(false, false)
            }
        };
    }
    static adjustConfig(cfg) {
    }
    drawAxisLine(x, range, cross) {
        return x ? this.horLine(range[0], range[1], cross, 'hs-graph-axis-line') :
            this.verLine(cross, range[0], range[1], 'hs-graph-axis-line');
    }
    drawTitle(x, ttlCfg, type, range, cross) {
        ttlCfg.cssClass = 'hs-graph-axis-title';
        const xy = { transform: `translate(${x ? range[1] : cross}, ${x ? cross : range[1]})` };
        return !ttlCfg.visible ? undefined :
            Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('g', xy, this.text(ttlCfg, ttlCfg.text));
    }
    drawTickMarks(x, type, crossesAt, scale, ticks, cfg) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg', { class: `hs-graph-axis-${type}-tick-marks` }, !cfg.marks.visible ? '' : ticks.marks.map((t) => {
            return x ? this.verLine(scale.convert(t), crossesAt, crossesAt + cfg.marks.length) :
                this.horLine(crossesAt, crossesAt - cfg.marks.length, scale.convert(t));
        }));
    }
    drawTickLabels(x, type, crossesAt, scale, ticks, cfg) {
        scale.setLabelFormat(cfg.labelFmt);
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg', { class: `hs-graph-axis-${type}-tick-label` }, !cfg.labels.visible ? '' : ticks.labels.map((t) => {
            const v = scale.convert(t.pos);
            const xy = { transform: `translate(${x ? v : crossesAt}, ${x ? crossesAt : v})` };
            return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('g', xy, this.text(cfg.labels, t.text));
        }));
    }
    drawAxis(dir, scales, type, axisCfg) {
        const x = dir === 'x';
        const range = scales[dir].range();
        const cfg = axisCfg[type][dir];
        scales[dir].scaleType(cfg.scale.type);
        const crossesAt = getCrossAt(cfg.crossesAt, scales[x ? 'y' : 'x']);
        const ticks = scales[dir].ticks();
        return !cfg.visible ? undefined : Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg', { class: `hs-graph-axis-${dir} hs-graph-axis-${type}` }, [
            this.drawAxisLine(x, range, crossesAt),
            this.drawTitle(x, cfg.title, type, range, crossesAt),
            this.drawTickMarks(x, 'minor', crossesAt, scales[dir], ticks.minor, cfg.ticks.minor),
            this.drawTickMarks(x, 'major', crossesAt, scales[dir], ticks.major, cfg.ticks.major),
            this.drawTickLabels(x, 'minor', crossesAt, scales[dir], ticks.minor, cfg.ticks.minor),
            this.drawTickLabels(x, 'major', crossesAt, scales[dir], ticks.major, cfg.ticks.major)
        ]);
    }
    view(node) {
        const cfg = node.attrs.cfg;
        const scales = node.attrs.scales;
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg', { class: 'hs-graph-axis' }, [
            this.drawAxis('x', scales.primary, 'primary', cfg),
            this.drawAxis('y', scales.primary, 'primary', cfg),
            this.drawAxis('x', scales.secondary, 'secondary', cfg),
            this.drawAxis('y', scales.secondary, 'secondary', cfg)
        ]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Axes;

Axes.type = {
    linear: 'linear axis',
    log: 'log axis',
    date: 'date axis',
    index: 'index axis',
    percent: 'percent axis',
    ordinal: 'ordinal axis',
    nominal: 'nominal axis'
};
class ExampleLinearAxis {
}
class ExampleLogAxis {
}
class ExampleDateAxis {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXhlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BeGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEQSxPQUFPLEVBQUUsQ0FBQyxFQUFRLE1BQU8sVUFBVSxDQUFDO0FBVXBDLENBQUM7QUFLRCxPQUFPLEVBQUUsT0FBTyxFQUNQLFVBQVUsRUFDVixVQUFVLEVBQ0osTUFBVSxXQUFXLENBQUM7QUFRckMsb0JBQW9CLEtBQW1CLEVBQUUsS0FBVztJQUNoRCxJQUFJLFNBQWdCLENBQUM7SUFDckIsUUFBUSxLQUFLLEVBQUU7UUFDWCxLQUFLLEtBQUs7WUFBRSxTQUFTLEdBQVcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTTtRQUN6RCxLQUFLLEtBQUs7WUFBRSxTQUFTLEdBQVcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTTtRQUN6RCxPQUFPLENBQUMsQ0FBSSxTQUFTLEdBQVcsS0FBSyxJQUFJLENBQUMsQ0FBQztLQUM5QztJQUNELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBRUQsTUFBTSxXQUFZLFNBQVEsT0FBTztJQWtHN0IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFVO1FBQzNCO1lBQ0ksT0FBTztnQkFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO2dCQUN0QixNQUFNLEVBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO2FBQ2xDLENBQUM7UUFDTixDQUFDO1FBQ0Qsa0JBQWtCLE9BQWUsRUFBRSxDQUFTLEVBQUUsS0FBYTtZQUN2RCxPQUFPO2dCQUNILE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQ3hCLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUN6RSxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTTtnQkFDMUUsT0FBTyxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDckMsT0FBTyxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QyxDQUFDO1FBQ04sQ0FBQztRQUNELGlCQUFpQixPQUFnQixFQUFFLEtBQWE7WUFDNUMsT0FBTztnQkFDSCxPQUFPLEVBQUUsS0FBSztnQkFDZCxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUMsQ0FBQztRQUNOLENBQUM7UUFDRCxrQkFBa0IsT0FBZSxFQUFFLENBQVM7WUFDeEMsT0FBTztnQkFDSCxPQUFPLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQzFELElBQUksRUFBRyxDQUFDLENBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUMxRSxJQUFJLEVBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztnQkFDeEUsT0FBTyxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDbkMsT0FBTyxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7YUFDNUQsQ0FBQztRQUNOLENBQUM7UUFDRCxpQkFBaUIsT0FBZSxFQUFFLENBQVM7WUFDdkMsT0FBTztnQkFDSCxPQUFPLEVBQUssT0FBTyxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7Z0JBQ2pDLFNBQVMsRUFBRyxPQUFPLENBQUEsQ0FBQyxDQUFBLEtBQUssQ0FBQSxDQUFDLENBQUEsS0FBSztnQkFDL0IsS0FBSyxFQUFPLFFBQVEsRUFBRTtnQkFDdEIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQixLQUFLLEVBQUU7b0JBQ0gsS0FBSyxFQUFFO3dCQUNILEtBQUssRUFBRyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQzt3QkFDOUIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQzt3QkFDbEMsUUFBUSxFQUFFLFNBQVM7cUJBQ3RCO29CQUNELEtBQUssRUFBRTt3QkFDSCxLQUFLLEVBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7d0JBQy9CLE1BQU0sRUFBRSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7d0JBQ25DLFFBQVEsRUFBRSxTQUFTO3FCQUN0QjtpQkFDSjthQUNKLENBQUM7UUFDTixDQUFDO1FBQ0QsR0FBRyxDQUFDLElBQUksR0FBRztZQUNQLE9BQU8sRUFBRTtnQkFDTCxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7Z0JBQ3RCLENBQUMsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQzthQUMxQjtZQUNELFNBQVMsRUFBRTtnQkFDUCxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7Z0JBQ3ZCLENBQUMsRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQzthQUMzQjtTQUNKLENBQUM7SUFDTixDQUFDO0lBTUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFVO0lBQzlCLENBQUM7SUFLRCxZQUFZLENBQUMsQ0FBUyxFQUFFLEtBQVUsRUFBRSxLQUFZO1FBQzVDLE9BQU8sQ0FBQyxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUtELFNBQVMsQ0FBQyxDQUFTLEVBQUUsTUFBZSxFQUFFLElBQVksRUFBRSxLQUFVLEVBQUUsS0FBWTtRQUN4RSxNQUFNLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDO1FBQ3hDLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDLGFBQWEsQ0FBQyxDQUFBLENBQUMsQ0FBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFBLEtBQUssS0FBSyxDQUFDLENBQUEsQ0FBQyxDQUFBLEtBQUssQ0FBQSxDQUFDLENBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMvRSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUtELGFBQWEsQ0FBQyxDQUFTLEVBQUUsSUFBVyxFQUFFLFNBQWdCLEVBQUUsS0FBVyxFQUFFLEtBQWMsRUFBRSxHQUFjO1FBQy9GLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBQyxpQkFBaUIsSUFBSSxhQUFhLEVBQUMsRUFDdkQsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFO1lBQ2xELE9BQU8sQ0FBQyxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsR0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVMsR0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEYsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7SUFLRCxjQUFjLENBQUMsQ0FBUyxFQUFFLElBQVcsRUFBRSxTQUFnQixFQUFFLEtBQVcsRUFBRSxLQUFjLEVBQUUsR0FBYztRQUNoRyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUMsaUJBQWlCLElBQUksYUFBYSxFQUFDLEVBQ3RELENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFXLEVBQUUsRUFBRTtZQUN2RCxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvQixNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQyxhQUFhLENBQUMsQ0FBQSxDQUFDLENBQUEsQ0FBQyxDQUFBLENBQUMsQ0FBQSxTQUFTLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQSxTQUFTLENBQUEsQ0FBQyxDQUFBLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDekUsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7SUFVRCxRQUFRLENBQUMsR0FBVSxFQUFFLE1BQWUsRUFBRSxJQUFXLEVBQUUsT0FBa0I7UUFDakUsTUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFHLEdBQUcsQ0FBQztRQUNwQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEMsTUFBTSxHQUFHLEdBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxNQUFNLFNBQVMsR0FBVSxVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQSxHQUFHLENBQUEsQ0FBQyxDQUFBLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEUsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUMsaUJBQWlCLEdBQUcsa0JBQWtCLElBQUksRUFBRSxFQUFDLEVBQUU7WUFDN0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDO1lBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDcEYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNwRixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDeEYsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELElBQUksQ0FBQyxJQUFZO1FBQ2IsTUFBTSxHQUFHLEdBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDdEMsTUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDekMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFDLGVBQWUsRUFBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQztZQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUM7WUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsR0FBRyxDQUFDO1lBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLEdBQUcsQ0FBQztTQUN6RCxDQUFDLENBQUM7SUFDUCxDQUFDOztBQTNPTSxTQUFJLEdBQUc7SUFDVixNQUFNLEVBQU0sYUFBYTtJQUN6QixHQUFHLEVBQVMsVUFBVTtJQUN0QixJQUFJLEVBQVEsV0FBVztJQUN2QixLQUFLLEVBQU8sWUFBWTtJQUN4QixPQUFPLEVBQUssY0FBYztJQUMxQixPQUFPLEVBQUssY0FBYztJQUMxQixPQUFPLEVBQUssY0FBYztDQUM3QixDQUFDO0FBb1FOO0NBQTBCO0FBNEIxQjtDQUF1QjtBQTJCdkI7Q0FBd0IifQ==

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SVGElem__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Series__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hsutil__ = __webpack_require__(2);




class Plot extends __WEBPACK_IMPORTED_MODULE_1__SVGElem__["a" /* SVGElem */] {
    drawLine(clipID, data, x, y, scales, sStyle, title) {
        const style = `stroke: ${sStyle.line.color}; stroke-width:${sStyle.line.width};`;
        return !sStyle.line.visible ? Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.invisible-line', '') : this.polyline(data, x, y, scales, clipID, style, title);
    }
    drawMarker(clipID, data, x, y, scales, sStyle, title) {
        const mrk = __WEBPACK_IMPORTED_MODULE_2__Series__["a" /* Series */].marker;
        let style = `fill:${sStyle.marker.color}`;
        return !sStyle.marker.visible ? Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.invisible-marker', '') : Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg', { class: 'hs-graph-series-markers' }, data.map((p) => {
            const cx = scales.x.convert(p[x]);
            const cy = scales.y.convert(p[y]);
            const r = sStyle.marker.size;
            switch (sStyle.marker.shape) {
                case mrk.circle:
                    return this.circle({ x: cx, y: cy }, r, style, title);
                case mrk.square:
                    return this.rect({ x: cx - r, y: cy - r }, { w: 2 * r, h: 2 * r }, style, title);
                case mrk.diamond:
                    return this.shape([[cx - r, cy], [cx, cy + r], [cx + r, cy], [cx, cy - r]], undefined, style, title);
                case mrk.upTriangle:
                    return this.shape([[cx - r, cy + r], [cx + r, cy + r], [cx, cy - r]], undefined, style, title);
                case mrk.downTriangle:
                    return this.shape([[cx - r, cy - r], [cx + r, cy - r], [cx, cy + r]], undefined, style, title);
            }
            return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(`.unkown-marker-${sStyle.marker.shape}`, '');
        }));
    }
    drawLabel(clipID, data, x, y, lbl, scales, sDef) {
        const sStyle = sDef.style;
        const cfg = {
            text: '',
            cssClass: ``,
            style: `fill:${sStyle.label.color}`,
            xpos: __WEBPACK_IMPORTED_MODULE_1__SVGElem__["b" /* TextHAlign */].middle,
            ypos: __WEBPACK_IMPORTED_MODULE_1__SVGElem__["c" /* TextVAlign */].center,
            hOffset: sDef.hOffset,
            vOffset: sDef.vOffset
        };
        return !sStyle.marker.visible ? Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.invisible-marker', '') : Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg', { class: 'hs-graph-series-labels' }, data.map((p) => {
            cfg.x = '' + scales.x.convert(p[x]);
            cfg.y = '' + scales.y.convert(p[y]);
            return this.text(cfg, Object(__WEBPACK_IMPORTED_MODULE_3_hsutil__["round"])(p[lbl], 3));
        }));
    }
    drawArea(clipID, data, x, yFore, yBack, scales, sStyle, title) {
        if (sStyle.fill.visible) {
            const style = `fill: ${sStyle.fill.color};`;
            const drawFore = data;
            const drawBack = data.slice().reverse();
            return this.polygon(drawFore, drawBack, x, yFore, yBack, scales, clipID, style, title);
        }
        else {
            Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.invisible-line', '');
        }
    }
    setDefaults(data, series, scales) {
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Plot;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QbG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLE9BQU8sRUFBRSxDQUFDLEVBQVEsTUFBVyxVQUFVLENBQUM7QUFDeEMsT0FBTyxFQUFFLE9BQU8sRUFFUCxVQUFVLEVBQ1YsVUFBVSxFQUFFLE1BQVEsV0FBVyxDQUFDO0FBSXpDLE9BQU8sRUFBRSxNQUFNLEVBRUssTUFBUyxVQUFVLENBQUM7QUFDeEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFhLFFBQVEsQ0FBQztBQUV0QyxNQUFNLFdBQXFCLFNBQVEsT0FBTztJQUN0QyxRQUFRLENBQUMsTUFBYSxFQUFFLElBQWMsRUFBRSxDQUFRLEVBQUUsQ0FBUSxFQUFFLE1BQWMsRUFBRSxNQUFrQixFQUFFLEtBQWE7UUFDekcsTUFBTSxLQUFLLEdBQUcsV0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssa0JBQWtCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDakYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkgsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFhLEVBQUUsSUFBYyxFQUFFLENBQVEsRUFBRSxDQUFRLEVBQUUsTUFBYyxFQUFFLE1BQWtCLEVBQUUsS0FBYTtRQUMzRyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzFCLElBQUksS0FBSyxHQUFHLFFBQVEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQyxPQUFPLENBQUMsTUFBTSxD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

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return o; });
if (!global['window']) {
    console.log('creating non-browser polyfill');
    global['window'] = __webpack_require__(32)();
    global['document'] = window.document;
}
const m = __webpack_require__(38);
/* harmony export (immutable) */ __webpack_exports__["a"] = m;

const o = __webpack_require__(39);
o.root = window.document.createElement("div");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWl0aHJpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXRocmlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7SUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBRTdDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsbUNBQW1DLENBQUMsRUFBRSxDQUFDO0lBQ2xFLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0NBRXhDO0FBS0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQU9wQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRTlDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyJ9
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SVGElem__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Axes__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PlotLine__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PlotMarkers__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PlotBar__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PlotArea__ = __webpack_require__(71);







function copyDefault(target, source, defaults) {
    Object.keys(source).forEach((key) => {
        if (typeof source[key] === 'object') {
            if (target[key] === undefined) {
                target[key] = {};
            }
            copyDefault(target[key], source[key], defaults);
        }
        else {
            if (target[key] === undefined) {
                target[key] = source[key];
            }
            if (target[key] === 'default') {
                target[key] = defaults[key];
            }
        }
    });
}
class Series extends __WEBPACK_IMPORTED_MODULE_1__SVGElem__["a" /* SVGElem */] {
    static defaultConfig(cfg) {
        cfg.series = new SeriesConfig();
    }
    static adjustConfig(cfg) {
        cfg.series.series.forEach((s) => {
            if (s.x === undefined) {
                cfg.axes.primary.x.title.hOffset = 0;
                cfg.axes.primary.x.scale.type = __WEBPACK_IMPORTED_MODULE_2__Axes__["a" /* Axes */].type.index;
                cfg.grid.minor.ver.visible = false;
            }
        });
    }
    drawClipRect(clipID, scales) {
        return !clipID ? Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('') : this.clipRect({ x: scales.x.range()[0], y: scales.y.range()[1] }, {
            w: scales.x.range()[1] - scales.x.range()[0],
            h: scales.y.range()[0] - scales.y.range()[1]
        }, clipID);
    }
    view(node) {
        const cfg = node.attrs.cfg;
        const scales = node.attrs.scales.primary;
        const data = node.attrs.data;
        const clipID = cfg.clip ? 'hs' + Math.floor(Math.random() * 10000) : undefined;
        cfg.series.map((s) => {
            if (s.map === Series.map.shared) {
                s.ySum = '$sum';
                data[s.dataIndex].colAdd(s.ySum);
                data[s.dataIndex].colInitialize(s.ySum, 0);
            }
        });
        cfg.series.map((s) => {
            const dt = data[s.dataIndex];
            if (s.map === Series.map.shared) {
                const valCol = dt.colNumber(s.y);
                dt.colInitialize(s.ySum, (v, i, row) => { return v + row[valCol]; });
            }
            if (s.map) {
                s.yBase = '$' + s.map;
                dt.colAdd(s.yBase);
                dt.colInitialize(s.yBase, 0);
            }
        });
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg', { class: 'hs-graph-series' }, [
            this.drawClipRect(clipID, scales),
            Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg', cfg.series.map((s, i) => {
                const dt = data[s.dataIndex];
                const type = Series.plot[s.type] || Series.plot.line;
                type.setDefaults(dt, s, scales);
                const d = s.cond ? dt.filter(s.cond) : dt;
                const plot = type.plot(d, s, scales, i, clipID);
                if (s.map) {
                    const valCol = d.colNumber(s.y);
                    d.colInitialize(s.yBase, (v, i, row) => { return v + row[valCol]; });
                }
                return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg', { class: `hs-graph-series-${i}` }, plot);
            }))
        ]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Series;

Series.marker = {
    circle: Symbol('circle marker'),
    square: Symbol('square marker'),
    diamond: Symbol('diamond marker'),
    upTriangle: Symbol('upward triangle marker'),
    downTriangle: Symbol('downward triangle marker')
};
Series.plot = {
    line: new __WEBPACK_IMPORTED_MODULE_3__PlotLine__["a" /* PlotLine */](),
    marker: new __WEBPACK_IMPORTED_MODULE_4__PlotMarkers__["a" /* PlotMarkers */](),
    bar: new __WEBPACK_IMPORTED_MODULE_5__PlotBar__["a" /* PlotBar */](),
    area: new __WEBPACK_IMPORTED_MODULE_6__PlotArea__["a" /* PlotArea */]()
};
Series.map = {
    stacked: 'stacked',
    shared: 'shared'
};
class SeriesConfig {
    constructor() {
        this.seriesDefs = [];
        this.clip = true;
        this.defaultStyle = {
            line: { color: 'default', visible: true, width: 2 },
            marker: { color: 'default', visible: false, size: 10, shape: Series.marker.circle },
            label: { color: 'default', visible: false },
            fill: { color: 'default', visible: false },
            bar: { color: 'default', visible: false, width: 50, offset: 30 }
        };
        this.defaultColors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f', '#000', '#444', '#888', '#ccc'];
    }
    set series(cfg) {
        const defStyle = this.defaultStyle;
        const defColors = this.defaultColors;
        cfg.forEach((s) => {
            s.type = s.type || 'line';
            s.style = s.style || {};
            s.dataIndex = s.dataIndex || 0;
            const defaults = {
                color: defColors[this.seriesDefs.length]
            };
            copyDefault(s.style, defStyle, defaults);
            this.seriesDefs.push(s);
            switch (s.type) {
                case 'line':
                    s.style.line.visible = true;
                    break;
                case 'marker':
                    s.style.marker.visible = true;
                    break;
                case 'area':
                    s.style.fill.visible = true;
                    break;
                case 'bar':
                    s.style.fill.visible = true;
                    break;
            }
        });
    }
    get series() { return this.seriesDefs; }
}
/* unused harmony export SeriesConfig */

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VyaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1Nlcmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkEsT0FBTyxFQUFFLENBQUMsRUFBUSxNQUFXLFVBQVUsQ0FBQztBQU14QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQVcsV0FBVyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBYyxRQUFRLENBQUM7QUFFdEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFVLFlBQVksQ0FBQztBQUMxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU8sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBVyxXQUFXLENBQUM7QUFDekMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFVLFlBQVksQ0FBQztBQUcxQyxxQkFBcUIsTUFBVSxFQUFFLE1BQVUsRUFBRSxRQUFZO0lBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBVSxFQUFFLEVBQUU7UUFDdkMsSUFBSSxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDakMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7YUFBRTtZQUNwRCxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0gsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFBRTtZQUM3RCxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQUUsTUFBTSxD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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function parseURL(url, root) {
	var data = {}
	var protocolIndex = url.indexOf("://")
	var pathnameIndex = protocolIndex > -1 ? url.indexOf("/", protocolIndex + 3) : url.indexOf("/")
	var searchIndex = url.indexOf("?")
	var hashIndex = url.indexOf("#")
	if ((pathnameIndex > searchIndex && searchIndex > -1) || (pathnameIndex > hashIndex && hashIndex > -1)) pathnameIndex = -1
	if (searchIndex > hashIndex && hashIndex > -1) searchIndex = -1
	var pathnameEnd = searchIndex > -1 ? searchIndex : hashIndex > -1 ? hashIndex : url.length
	if (protocolIndex > -1) {
		//it's a full URL
		if (pathnameIndex < 0) pathnameIndex = url.length
		var portIndex = url.indexOf(":", protocolIndex + 1)
		if (portIndex < 0) portIndex = pathnameIndex
		data.protocol = url.slice(0, protocolIndex + 1)
		data.hostname = url.slice(protocolIndex + 3, portIndex)
		data.port = url.slice(portIndex + 1, pathnameIndex)
		data.pathname = url.slice(pathnameIndex, pathnameEnd) || "/"
	}
	else {
		data.protocol = root.protocol
		data.hostname = root.hostname
		data.port = root.port
		if (pathnameIndex === 0) {
			//it's an absolute path
			data.pathname = url.slice(pathnameIndex, pathnameEnd) || "/"
		}
		else if (searchIndex !== 0 && hashIndex !== 0) {
			//it's a relative path
			var slashIndex = root.pathname.lastIndexOf("/")
			var path = slashIndex > -1 ? root.pathname.slice(0, slashIndex + 1) : "./"
			var normalized = url.slice(0, pathnameEnd).replace(/^\.$/, root.pathname.slice(slashIndex + 1)).replace(/^\.\//, "")
			var dotdot = /\/[^\/]+?\/\.{2}/g
			var pathname = path + normalized
			pathname = path + normalized
			while (dotdot.test(pathname)) pathname = pathname.replace(dotdot, "")
			pathname = pathname.replace(/\/\.\//g, "/").replace(/^(\/\.{2})+/, "") || "/"
			data.pathname = pathname
		}
	}
	var searchEnd = hashIndex > -1 ? hashIndex : url.length
	data.search = searchIndex > -1 ? url.slice(searchIndex, searchEnd) : ""
	data.hash = hashIndex > -1 ? url.slice(hashIndex) : ""
	return data
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

module.exports = typeof setImmediate === "function" ? setImmediate : setTimeout

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15).setImmediate))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
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
  this._clearFn.call(window, this._id);
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
__webpack_require__(34);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Selector__ = __webpack_require__(8);




class RadioButton extends __WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */] {
    viewGroup(css, node) {
        const desc = this.init(node.attrs.desc, __WEBPACK_IMPORTED_MODULE_1__Selector__["b" /* oneOfItems */]);
        node.attrs.desc = undefined;
        css = `${css} ${node.attrs.css || ''}`;
        const style = node.attrs.style || '';
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(css, { style: style }, Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(__WEBPACK_IMPORTED_MODULE_0_hslayout__["Layout"], {
            columns: [],
            content: desc.items.map((l, i) => this.renderItem(desc, i))
        }));
    }
    view(node) { return this.viewGroup('.hs-radio-buttons', node); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RadioButton;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW9CdXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvUmFkaW9CdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNBLE9BQU8sRUFBRSxDQUFDLEVBQVMsTUFBVSxVQUFVLENBQUM7QUFDeEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFZLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQVUsWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBUSxZQUFZLENBQUM7QUFvQjFDLE1BQU0sa0JBQW1CLFNBQVEsUUFBUTtJQUNyQyxTQUFTLENBQUMsR0FBVSxFQUFFLElBQVc7UUFDN0IsTUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQzVCLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUN2QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFFckMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDbkMsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFRLEVBQUUsQ0FBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM1RSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFDRCxJQUFJLENBQUMsSUFBVyxJQUFXLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDakYifQ==

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Selector__ = __webpack_require__(8);



class ToggleButton extends __WEBPACK_IMPORTED_MODULE_1__Selector__["a" /* Selector */] {
    constructor() {
        super(...arguments);
        this.toggleIndex = -1;
        this.mouseDown = '';
    }
    view(node) {
        const desc = this.init(node.attrs.desc, __WEBPACK_IMPORTED_MODULE_1__Selector__["b" /* oneOfItems */]);
        node.attrs.desc = undefined;
        const css = node.attrs.css || '';
        const style = node.attrs.style || '';
        const parentChanged = desc.changed;
        desc.changed = ((item) => {
            this.toggleIndex = (this.toggleIndex + 1) % desc.items.length;
            item = desc.items[this.toggleIndex];
            this.internalStateUpdate(desc, item);
            if (parentChanged) {
                parentChanged(item);
            }
        });
        if (this.toggleIndex < 0) {
            this.toggleIndex = 0;
        }
        desc.mouseDown = () => this.mouseDown = '.hs-button-pressed';
        desc.mouseUp = () => this.mouseDown = '';
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(`.hs-toggle-button${css}${this.mouseDown}`, { style: style }, Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span', this.renderItem(desc, this.toggleIndex)));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ToggleButton;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9nZ2xlQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1RvZ2dsZUJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ0EsT0FBTyxFQUFFLENBQUMsRUFBUyxNQUFVLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQVUsWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBUSxZQUFZLENBQUM7QUFtQjFDLE1BQU0sbUJBQW9CLFNBQVEsUUFBUTtJQUExQzs7UUFDWSxnQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxFQUFFLENBQUM7SUF5QjNCLENBQUM7SUF4QkcsSUFBSSxDQUFDLElBQVc7UUFDWixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUM1QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDakMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBR3JDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBVyxFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDNUQsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxhQUFhLEVBQUU7Z0JBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQUU7UUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUMsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7U0FBRTtRQUVqRCxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUUzQyxPQUFPLENBQUMsQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBQyxLQUFLLEVBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUN6RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSiJ9

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);

const ButtonSymbols = {
    cross: { sym: '&times;' },
    minus: { sym: '&minus;' },
    plus: { sym: '+' },
    dLeft: { sym: '&laquo;' },
    dRight: { sym: '&raquo;' },
    left: { sym: '&lsaquo;' },
    right: { sym: '&rsaquo;' },
    leftTri: { sym: '&ltrif;' },
    rightTri: { sym: '&rtrif;' },
    upTri: { sym: '&utrif;' },
    downTri: { sym: '&dtrif;' },
    up: { sym: '&and;' },
    down: { sym: '&or;' },
    lArrow: { sym: '&larr;' },
    rArrow: { sym: '&rarr;' },
    uArrow: { sym: '&uarr;' },
    dArrow: { sym: '&darr;' },
    empty: { sym: '&#9675;' },
    emptySlash: { sym: '&empty;' },
    oSlash: { sym: '&oslash;' },
    o: { sym: '&omicron;' },
    lines3: { sym: '&equiv;' },
    sum: { sym: '&Sigma;' },
    ellipsis: { sym: '&hellip;' },
    vertEllips: { sym: '&#8285;' },
    bullet: { sym: '&bull;' },
    enter: { sym: '&crarr;' },
    again: { sym: '&#8635;' },
    start: { sym: '&#8689;' },
    end: { sym: '&#8690;' }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = ButtonSymbols;

class CornerButton {
    constructor(symbol = '-') {
        this.symbol = symbol;
    }
    static getSymbol(name) {
        return ButtonSymbols[name] ? ButtonSymbols[name].sym : '';
    }
    view(node) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-corner-button', { onclick: node.attrs.onclick }, __WEBPACK_IMPORTED_MODULE_0_hslayout__["m"].trust(node.attrs.symbol));
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = CornerButton;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ybmVyQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0Nvcm5lckJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1REEsT0FBTyxFQUFFLENBQUMsRUFBUSxNQUFPLFVBQVUsQ0FBQztBQUVwQyxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUc7SUFDekIsS0FBSyxFQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRTtJQUM5QixLQUFLLEVBQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDO0lBQzdCLElBQUksRUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUM7SUFDdkIsS0FBSyxFQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQztJQUM3QixNQUFNLEVBQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDO0lBQzdCLElBQUksRUFBUSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUM7SUFDOUIsS0FBSyxFQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBQztJQUM5QixPQUFPLEVBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDO0lBQzdCLFFBQVEsRUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUM7SUFDN0IsS0FBSyxFQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQztJQUM3QixPQUFPLEVBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDO0lBQzdCLEVBQUUsRUFBVSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUM7SUFDM0IsSUFBSSxFQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBQztJQUMxQixNQUFNLEVBQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFDO0lBQzVCLE1BQU0sRUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUM7SUFDNUIsTUFBTSxFQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBQztJQUM1QixNQUFNLEVBQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFDO0lBQzVCLEtBQUssRUFBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUM7SUFDN0IsVUFBVSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQztJQUM3QixNQUFNLEVBQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFDO0lBQzlCLENBQUMsRUFBVyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUM7SUFDL0IsTUFBTSxFQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQztJQUM3QixHQUFHLEVBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDO0lBQzdCLFFBQVEsRUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUM7SUFDOUIsVUFBVSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQztJQUM3QixNQUFNLEVBQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFDO0lBQzVCLEtBQUssRUFBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUM7SUFDN0IsS0FBSyxFQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQztJQUM3QixLQUFLLEVBQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDO0lBQzdCLEdBQUcsRUFBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUM7Q0FDaEMsQ0FBQztBQUVGLE1BQU07SUFDRixZQUFzQixTQUFPLEdBQUc7UUFBVixXQUFNLEdBQU4sTUFBTSxDQUFJO0lBQUcsQ0FBQztJQUNwQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQVc7UUFDeEIsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsSUFBSSxDQUFDLElBQVU7UUFDWCxPQUFPLENBQUMsQ0FBQyxtQkFBbUIsRUFDeEIsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFDL0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNKIn0=

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = flags;
/* harmony export (immutable) */ __webpack_exports__["e"] = kindString;
/* harmony export (immutable) */ __webpack_exports__["d"] = itemName;
/* unused harmony export itemTooltip */
/* harmony export (immutable) */ __webpack_exports__["a"] = extensionOf;
/* harmony export (immutable) */ __webpack_exports__["c"] = inheritedFrom;
/* harmony export (immutable) */ __webpack_exports__["i"] = sourceLink;
/* harmony export (immutable) */ __webpack_exports__["f"] = libLink;
/* harmony export (immutable) */ __webpack_exports__["h"] = signature;
/* unused harmony export defaultVal */
/* harmony export (immutable) */ __webpack_exports__["j"] = type;
/* harmony export (immutable) */ __webpack_exports__["g"] = makeID;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tooltip__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DocSets__ = __webpack_require__(6);



const SourceBase = 'src/';
function flags(mdl, ignore = []) {
    const ignoreExportInKind = ['Method', 'Property'];
    const knownFlags = {
        isExported: 'export',
        isExternal: 'external',
        isPublic: 'public',
        isPrivate: 'private',
        isProtected: 'protected',
        isConstructorProperty: 'constructorProperty',
        isStatic: 'static',
        isOptional: 'optional'
    };
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-flags', !mdl.flags ? [] :
        Object.keys(mdl.flags).map((f) => {
            let ign = false;
            let flag = knownFlags[f];
            if (flag === undefined) {
                flag = f;
            }
            else {
                ign = (ignore.indexOf(flag) >= 0);
            }
            if (flag === 'export' && ignoreExportInKind.indexOf(mdl.kindString) >= 0) {
                ign = true;
            }
            return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(`span.hs-item-${ign ? 'ignore' : (flag === f ? 'unknown' : flag)}-flag`, ign ? undefined : flag);
        }));
}
function kindString(mdl) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-kind', mdl.kindString);
}
function itemName(mdl, sub) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-name', !mdl.fullPath ? sub.name : libLink('a', mdl.lib, mdl.fullPath, sub.name));
}
function itemTooltip(mdl) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-name', Object(__WEBPACK_IMPORTED_MODULE_1__Tooltip__["a" /* tooltip */])(mdl.name, 'class name and then some', 'bottom'));
}
function extensionOf(mdl) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-extensions', !mdl.extendedTypes ? undefined : [
        Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-extends', 'extends'),
        Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span', mdl.extendedTypes.map((t, i) => Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-extension', [
            libLink('a', mdl.lib, __WEBPACK_IMPORTED_MODULE_2__DocSets__["a" /* DocSets */].get(mdl.lib, t.id).fullPath, t.name),
            mdl.extendedTypes.map.length > (i + 1) ? ', ' : ''
        ]))),
    ]);
}
function inheritedFrom(mdl) {
    if (mdl.inheritedFrom) {
        let parent = __WEBPACK_IMPORTED_MODULE_2__DocSets__["a" /* DocSets */].get(mdl.lib, mdl.inheritedFrom.id);
        parent = __WEBPACK_IMPORTED_MODULE_2__DocSets__["a" /* DocSets */].get(mdl.lib, parent.fullPath.substring(0, parent.fullPath.lastIndexOf('.')));
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-inherited-from', [
            Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span', 'inherited from '),
            libLink('a', parent.lib, parent.fullPath, parent.name)
        ]);
    }
    else {
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-inherited-from', undefined);
    }
}
function sourceLink(mdl) {
    const source = mdl.sources ? mdl.sources[0] : undefined;
    if (source) {
        let file = (source.fileName || '').replace('.ts', '.html');
        const index = file.indexOf(mdl.lib);
        if (index > 0) {
            file = file.substr(index);
        }
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-member-source', Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('a', { href: `${SourceBase}${mdl.lib}/${file}#${Math.max(0, source.line - 5)}`, target: "_blank" }, '[source]'));
    }
    else {
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-member-source', '');
    }
}
function libLink(css, lib, id, name) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(css, { href: `/api/${lib}/${id}`, oncreate: __WEBPACK_IMPORTED_MODULE_0_hslayout__["m"].route.link, onupdate: __WEBPACK_IMPORTED_MODULE_0_hslayout__["m"].route.link }, name);
}
;
function signature(s, mdl) {
    const comma = (i) => (i > 0) ? ', ' : '';
    function optional(flags) {
        return (flags && flags.isOptional) ? '.hs-item-optional' : '';
    }
    let sig = [];
    if (s) {
        if (s.parameters) {
            sig = s.parameters.map((p, i) => Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span', [
                comma(i),
                Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-sig-param', [
                    Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(`span.hs-item-name${optional(p.flags)}`, p.name),
                    type(p, mdl.lib)
                ])
            ]));
        }
        switch (mdl.kindString) {
            case 'Method':
            case 'Function':
            case 'Constructor':
                sig.unshift(Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-name', '('));
                sig.push(Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-name', ')'));
                break;
            default:
        }
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-signature', sig);
}
function defaultVal(s, lib) {
    if (s && s.defaultValue) {
        let val = ` = ${s.defaultValue}`.replace(/{/gi, '{ ').replace(/}/gi, ' }');
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-default', val);
    }
    else {
        return;
    }
}
function type(t, lib) {
    function _type(tt) {
        switch (tt.type) {
            case undefined: return '';
            case 'array': return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-type-array', ['Array<', _type(tt.elementType), '>']);
            case 'tuple': return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-type-tuple', [
                '[ ',
                ...tt.elements.map((e, i) => [i > 0 ? ', ' : undefined, _type(e)]),
                ' ]'
            ]);
            case 'intrinsic':
            case 'instrinct': return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-type-instrinct', tt.id ? libLink('span', lib, tt.fullPath, tt.name) : tt.name);
            case 'stringLiteral': return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-type-string-literal', tt.type);
            case 'union': return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-type-union', [...tt.types.map((e, i) => [i > 0 ? ' | ' : undefined, _type(e)])]);
            case 'reference':
                let refRes = tt.name;
                if (tt.id) {
                    const typeRef = __WEBPACK_IMPORTED_MODULE_2__DocSets__["a" /* DocSets */].get(lib, tt.id);
                    if (typeRef.typeArguments) {
                        refRes = typeRef.name + '<' + typeRef.typeArguments.map(_type).join(', ') + '>';
                    }
                    else if (typeRef.id) {
                        refRes = libLink('a', lib, typeRef.fullPath, typeRef.name);
                    }
                    else {
                        refRes = typeRef.name;
                    }
                }
                return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-type-reference', refRes);
            case 'reflection':
                let rflRes;
                if (tt.declaration) {
                    rflRes = !tt.declaration.children ? tt.declaration.kindString :
                        Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-reflection', [
                            '{ ',
                            ...tt.declaration.children.map((c, i) => [i > 0 ? ', ' : undefined, c.name, ': ', _type(c.type)]),
                            ' }'
                        ]);
                }
                else {
                    rflRes = 'UNKNOWN';
                }
                return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-type-reflection', rflRes);
            default:
                console.log('unknown type ' + tt.type);
                console.log(t);
                return t.type;
        }
    }
    try {
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span', !t.type ? '' : [
            Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-name', ':'),
            Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-sig-type', _type(t.type)),
            defaultVal(t, lib)
        ]);
    }
    catch (e) {
        console.log(e);
        console.log(e.trace);
    }
}
function makeID(section, mdl) {
    let result = section ? section + '_' : '';
    result = (result + (mdl.name || '')).toLowerCase();
    return (result !== '') ? result : undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFydHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmlldy9QYXJ0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsQ0FBQyxFQUFRLE1BQU0sVUFBVSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVyQyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUM7QUFJMUIsTUFBTSxnQkFBZ0IsR0FBTyxFQUFFLFNBQWdCLEVBQUU7SUFDN0MsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNsRCxNQUFNLFVBQVUsR0FBRztRQUNmLFVBQVUsRUFBYyxRQUFRO1FBQ2hDLFVBQVUsRUFBYyxVQUFVO1FBQ2xDLFFBQVEsRUFBZ0IsUUFBUTtRQUNoQyxTQUFTLEVBQWUsU0FBUztRQUNqQyxXQUFXLEVBQWEsV0FBVztRQUNuQyxxQkFBcUIsRUFBRyxxQkFBcUI7UUFDN0MsUUFBUSxFQUFnQixRQUFRO1FBQ2hDLFVBQVUsRUFBYyxVQUFVO0tBQ3JDLENBQUM7SUFDRixPQUFPLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFO1lBQ3BDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQztZQUNoQixJQUFJLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUFFLElBQUksR0FBRyxDQUFDLENBQUM7YUFBRTtpQkFDaEM7Z0JBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUFFO1lBQzNDLElBQUksSUFBSSxLQUFLLFFBQVEsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFFLENBQUMsRUFBRTtnQkFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDO2FBQUU7WUFDdkYsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQSxDQUFDLENBQUEsUUFBUSxDQUFBLENBQUMsQ0FBQSxDQUFDLElBQUksS0FBRyxDQUFDLENBQUEsQ0FBQyxDQUFBLFNBQVMsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkcsQ0FBQyxDQUFDLENBQ0wsQ0FBQztBQUNOLENBQUM7QUFFRCxNQUFNLHFCQUFxQixHQUFPO0lBQzlCLE9BQU8sQ0FBQyxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRUQsTUFBTSxtQkFBbUIsR0FBTyxFQUFFLEdBQU87SUFDckMsT0FBTyxDQUFDLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMzRyxDQUFDO0FBR0QsTUFBTSxzQkFBc0IsR0FBTztJQUMvQixPQUFPLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSwwQkFBMEIsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQzNGLENBQUM7QUFFRCxNQUFNLHNCQUFzQixHQUFPO0lBQy9CLE9BQU8sQ0FBQyxDQUFDLHlCQUF5QixFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsc0JBQXNCLEVBQUUsU0FBUyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFLLEVBQUUsQ0FBUSxFQUFFLEVBQUUsQ0FDaEQsQ0FBQyxDQUFDLHdCQUF3QixFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xFLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQyxFQUFFO1NBQy9DLENBQUMsQ0FDTCxDQUFDO0tBQ0wsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELE1BQU0sd0JBQXdCLEdBQU87SUFDakMsSUFBSSxHQUFHLENBQUMsYUFBYSxFQUFFO1FBQ25CLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RixPQUFPLENBQUMsQ0FBQyw2QkFBNkIsRUFBRTtZQUNwQyxDQUFDLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDekQsQ0FBQyxDQUFDO0tBQ047U0FBTTtRQUNILE9BQU8sQ0FBQyxDQUFDLDZCQUE2QixFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQ3REO0FBQ0wsQ0FBQztBQUVELE1BQU0scUJBQXFCLEdBQU87SUFDOUIsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3ZELElBQUksTUFBTSxFQUFFO1FBQ1IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxLQUFLLEdBQUMsQ0FBQyxFQUFFO1lBQ1QsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFDRCxPQUFPLENBQUMsQ0FBQyw0QkFBNEIsRUFDakMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBQyxHQUFHLFVBQVUsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxNQUFNLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFDLFFBQVEsRUFBQyxFQUFFLFVBQVUsQ0FBQyxDQUM5RyxDQUFDO0tBQ0w7U0FBTTtRQUNILE9BQU8sQ0FBQyxDQUFDLDRCQUE0QixFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQzlDO0FBQ0wsQ0FBQztBQVdELE1BQU0sa0JBQWtCLEdBQVUsRUFBRSxHQUFVLEVBQUUsRUFBUyxFQUFFLElBQVc7SUFDbEUsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFDLFFBQVEsR0FBRyxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN0RyxDQUFDO0FBQUEsQ0FBQztBQUtGLE1BQU0sb0JBQW9CLENBQUssRUFBRSxHQUFPO0lBQ3BDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDNUMsa0JBQWtCLEtBQVU7UUFDeEIsT0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakUsQ0FBQztJQUVELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNiLElBQUksQ0FBQyxFQUFFO1FBQ0gsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFO1lBQ2QsR0FBRyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBSyxFQUFFLENBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDbEQsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDUixDQUFDLENBQUMsd0JBQXdCLEVBQUU7b0JBQ3hCLENBQUMsQ0FBQyxvQkFBb0IsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2xELElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQztpQkFDbkIsQ0FBQzthQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ1A7UUFDRCxRQUFRLEdBQUcsQ0FBQyxVQUFVLEVBQUU7WUFDcEIsS0FBSyxRQUFRLENBQUM7WUFDZCxLQUFLLFVBQVUsQ0FBQztZQUNoQixLQUFLLGFBQWE7Z0JBQ2QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsTUFBTTtZQUNWLFFBQVE7U0FDWDtLQUNKO0lBQ0QsT0FBTyxDQUFDLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUtELE1BQU0scUJBQXFCLENBQUssRUFBRSxHQUFVO0lBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUU7UUFDckIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNFLE9BQU8sQ0FBQyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3pDO1NBQU07UUFDSCxPQUFPO0tBQ1Y7QUFDTCxDQUFDO0FBRUQsTUFBTSxlQUFlLENBQUssRUFBRSxHQUFVO0lBQ2xDLGVBQWUsRUFBTTtRQUNqQixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUU7WUFDYixLQUFLLFNBQVMsQ0FBQyxDQUFTLE9BQU8sRUFBRSxDQUFDO1lBQ2xDLEtBQUssT0FBTyxDQUFDLENBQVcsT0FBTyxDQUFDLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRXBHLEtBQUssT0FBTyxDQUFDLENBQVcsT0FBTyxDQUFDLENBQUMseUJBQXlCLEVBQUU7Z0JBQ2hDLElBQUk7Z0JBQ0osR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUssRUFBRSxDQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFBLENBQUMsQ0FBQSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZFLElBQUk7YUFDUCxDQUFDLENBQUM7WUFDM0IsS0FBSyxXQUFXLENBQUM7WUFDakIsS0FBSyxXQUFXLENBQUMsQ0FBTyxPQUFPLENBQUMsQ0FBQyw2QkFBNkIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdILEtBQUssZUFBZSxDQUFDLENBQUcsT0FBTyxDQUFDLENBQUMsa0NBQWtDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlFLEtBQUssT0FBTyxDQUFDLENBQVcsT0FBTyxDQUFDLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBSyxFQUFFLENBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQSxLQUFLLENBQUEsQ0FBQyxDQUFBLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNySSxLQUFLLFdBQVc7Z0JBQVEsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDckIsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNQLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFO3dCQUFFLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFDLEdBQUcsR0FBRSxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO3FCQUFFO3lCQUN2RyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQVE7d0JBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUFFO3lCQUMvRDt3QkFBRSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztxQkFBRTtpQkFDeEQ7Z0JBQ0QsT0FBTyxDQUFDLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDeEUsS0FBSyxZQUFZO2dCQUFPLElBQUksTUFBTSxDQUFDO2dCQUNYLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRTtvQkFDaEIsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQzFELENBQUMsQ0FBQyx5QkFBeUIsRUFBRTs0QkFDekIsSUFBSTs0QkFDSixHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUssRUFBRSxDQUFRLEVBQUUsRUFBRSxDQUMvQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQSxDQUFDLENBQUEsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDcEQ7NEJBQ0QsSUFBSTt5QkFDUCxDQUFDLENBQUM7aUJBQ1Y7cUJBQU07b0JBQ0gsTUFBTSxHQUFHLFNBQVMsQ0FBQztpQkFDdEI7Z0JBQ0QsT0FBTyxDQUFDLENBQUMsOEJBQThCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDekU7Z0JBQVMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFRCxJQUFJO1FBQ0QsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsbUJBQW1CLEVBQUMsR0FBRyxDQUFDO1lBQzFCLENBQUMsQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1NBQ3BCLENBQUMsQ0FBQztLQUNOO0lBQUMsT0FBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FBRTtBQUN4RCxDQUFDO0FBRUQsTUFBTSxpQkFBaUIsT0FBYyxFQUFFLEdBQU87SUFDMUMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFBLENBQUMsQ0FBQyxPQUFPLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdkMsTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25ELE9BQU8sQ0FBQyxNQUFNLEtBQUcsRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0FBQzdDLENBQUMifQ==

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;/*! showdown 02-06-2017 */
(function(){
/**
 * Created by Tivie on 13-07-2015.
 */

function getDefaultOpts (simple) {
  'use strict';

  var defaultOptions = {
    omitExtraWLInCodeBlocks: {
      defaultValue: false,
      describe: 'Omit the default extra whiteline added to code blocks',
      type: 'boolean'
    },
    noHeaderId: {
      defaultValue: false,
      describe: 'Turn on/off generated header id',
      type: 'boolean'
    },
    prefixHeaderId: {
      defaultValue: false,
      describe: 'Specify a prefix to generated header ids',
      type: 'string'
    },
    ghCompatibleHeaderId: {
      defaultValue: false,
      describe: 'Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)',
      type: 'boolean'
    },
    headerLevelStart: {
      defaultValue: false,
      describe: 'The header blocks level start',
      type: 'integer'
    },
    parseImgDimensions: {
      defaultValue: false,
      describe: 'Turn on/off image dimension parsing',
      type: 'boolean'
    },
    simplifiedAutoLink: {
      defaultValue: false,
      describe: 'Turn on/off GFM autolink style',
      type: 'boolean'
    },
    excludeTrailingPunctuationFromURLs: {
      defaultValue: false,
      describe: 'Excludes trailing punctuation from links generated with autoLinking',
      type: 'boolean'
    },
    literalMidWordUnderscores: {
      defaultValue: false,
      describe: 'Parse midword underscores as literal underscores',
      type: 'boolean'
    },
    literalMidWordAsterisks: {
      defaultValue: false,
      describe: 'Parse midword asterisks as literal asterisks',
      type: 'boolean'
    },
    strikethrough: {
      defaultValue: false,
      describe: 'Turn on/off strikethrough support',
      type: 'boolean'
    },
    tables: {
      defaultValue: false,
      describe: 'Turn on/off tables support',
      type: 'boolean'
    },
    tablesHeaderId: {
      defaultValue: false,
      describe: 'Add an id to table headers',
      type: 'boolean'
    },
    ghCodeBlocks: {
      defaultValue: true,
      describe: 'Turn on/off GFM fenced code blocks support',
      type: 'boolean'
    },
    tasklists: {
      defaultValue: false,
      describe: 'Turn on/off GFM tasklist support',
      type: 'boolean'
    },
    smoothLivePreview: {
      defaultValue: false,
      describe: 'Prevents weird effects in live previews due to incomplete input',
      type: 'boolean'
    },
    smartIndentationFix: {
      defaultValue: false,
      description: 'Tries to smartly fix indentation in es6 strings',
      type: 'boolean'
    },
    disableForced4SpacesIndentedSublists: {
      defaultValue: false,
      description: 'Disables the requirement of indenting nested sublists by 4 spaces',
      type: 'boolean'
    },
    simpleLineBreaks: {
      defaultValue: false,
      description: 'Parses simple line breaks as <br> (GFM Style)',
      type: 'boolean'
    },
    requireSpaceBeforeHeadingText: {
      defaultValue: false,
      description: 'Makes adding a space between `#` and the header text mandatory (GFM Style)',
      type: 'boolean'
    },
    ghMentions: {
      defaultValue: false,
      description: 'Enables github @mentions',
      type: 'boolean'
    },
    ghMentionsLink: {
      defaultValue: 'https://github.com/{u}',
      description: 'Changes the link generated by @mentions. Only applies if ghMentions option is enabled.',
      type: 'string'
    },
    encodeEmails: {
      defaultValue: true,
      description: 'Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities',
      type: 'boolean'
    },
    openLinksInNewWindow: {
      defaultValue: false,
      description: 'Open all links in new windows',
      type: 'boolean'
    }
  };
  if (simple === false) {
    return JSON.parse(JSON.stringify(defaultOptions));
  }
  var ret = {};
  for (var opt in defaultOptions) {
    if (defaultOptions.hasOwnProperty(opt)) {
      ret[opt] = defaultOptions[opt].defaultValue;
    }
  }
  return ret;
}

function allOptionsOn () {
  'use strict';
  var options = getDefaultOpts(true),
      ret = {};
  for (var opt in options) {
    if (options.hasOwnProperty(opt)) {
      ret[opt] = true;
    }
  }
  return ret;
}

/**
 * Created by Tivie on 06-01-2015.
 */

// Private properties
var showdown = {},
    parsers = {},
    extensions = {},
    globalOptions = getDefaultOpts(true),
    setFlavor = 'vanilla',
    flavor = {
      github: {
        omitExtraWLInCodeBlocks:              true,
        simplifiedAutoLink:                   true,
        excludeTrailingPunctuationFromURLs:   true,
        literalMidWordUnderscores:            true,
        strikethrough:                        true,
        tables:                               true,
        tablesHeaderId:                       true,
        ghCodeBlocks:                         true,
        tasklists:                            true,
        disableForced4SpacesIndentedSublists: true,
        simpleLineBreaks:                     true,
        requireSpaceBeforeHeadingText:        true,
        ghCompatibleHeaderId:                 true,
        ghMentions:                           true
      },
      original: {
        noHeaderId:                           true,
        ghCodeBlocks:                         false
      },
      ghost: {
        omitExtraWLInCodeBlocks:              true,
        parseImgDimensions:                   true,
        simplifiedAutoLink:                   true,
        excludeTrailingPunctuationFromURLs:   true,
        literalMidWordUnderscores:            true,
        strikethrough:                        true,
        tables:                               true,
        tablesHeaderId:                       true,
        ghCodeBlocks:                         true,
        tasklists:                            true,
        smoothLivePreview:                    true,
        simpleLineBreaks:                     true,
        requireSpaceBeforeHeadingText:        true,
        ghMentions:                           false,
        encodeEmails:                         true
      },
      vanilla: getDefaultOpts(true),
      allOn: allOptionsOn()
    };

/**
 * helper namespace
 * @type {{}}
 */
showdown.helper = {};

/**
 * TODO LEGACY SUPPORT CODE
 * @type {{}}
 */
showdown.extensions = {};

/**
 * Set a global option
 * @static
 * @param {string} key
 * @param {*} value
 * @returns {showdown}
 */
showdown.setOption = function (key, value) {
  'use strict';
  globalOptions[key] = value;
  return this;
};

/**
 * Get a global option
 * @static
 * @param {string} key
 * @returns {*}
 */
showdown.getOption = function (key) {
  'use strict';
  return globalOptions[key];
};

/**
 * Get the global options
 * @static
 * @returns {{}}
 */
showdown.getOptions = function () {
  'use strict';
  return globalOptions;
};

/**
 * Reset global options to the default values
 * @static
 */
showdown.resetOptions = function () {
  'use strict';
  globalOptions = getDefaultOpts(true);
};

/**
 * Set the flavor showdown should use as default
 * @param {string} name
 */
showdown.setFlavor = function (name) {
  'use strict';
  if (!flavor.hasOwnProperty(name)) {
    throw Error(name + ' flavor was not found');
  }
  showdown.resetOptions();
  var preset = flavor[name];
  setFlavor = name;
  for (var option in preset) {
    if (preset.hasOwnProperty(option)) {
      globalOptions[option] = preset[option];
    }
  }
};

/**
 * Get the currently set flavor
 * @returns {string}
 */
showdown.getFlavor = function () {
  'use strict';
  return setFlavor;
};

/**
 * Get the options of a specified flavor. Returns undefined if the flavor was not found
 * @param {string} name Name of the flavor
 * @returns {{}|undefined}
 */
showdown.getFlavorOptions = function (name) {
  'use strict';
  if (flavor.hasOwnProperty(name)) {
    return flavor[name];
  }
};

/**
 * Get the default options
 * @static
 * @param {boolean} [simple=true]
 * @returns {{}}
 */
showdown.getDefaultOptions = function (simple) {
  'use strict';
  return getDefaultOpts(simple);
};

/**
 * Get or set a subParser
 *
 * subParser(name)       - Get a registered subParser
 * subParser(name, func) - Register a subParser
 * @static
 * @param {string} name
 * @param {function} [func]
 * @returns {*}
 */
showdown.subParser = function (name, func) {
  'use strict';
  if (showdown.helper.isString(name)) {
    if (typeof func !== 'undefined') {
      parsers[name] = func;
    } else {
      if (parsers.hasOwnProperty(name)) {
        return parsers[name];
      } else {
        throw Error('SubParser named ' + name + ' not registered!');
      }
    }
  }
};

/**
 * Gets or registers an extension
 * @static
 * @param {string} name
 * @param {object|function=} ext
 * @returns {*}
 */
showdown.extension = function (name, ext) {
  'use strict';

  if (!showdown.helper.isString(name)) {
    throw Error('Extension \'name\' must be a string');
  }

  name = showdown.helper.stdExtName(name);

  // Getter
  if (showdown.helper.isUndefined(ext)) {
    if (!extensions.hasOwnProperty(name)) {
      throw Error('Extension named ' + name + ' is not registered!');
    }
    return extensions[name];

    // Setter
  } else {
    // Expand extension if it's wrapped in a function
    if (typeof ext === 'function') {
      ext = ext();
    }

    // Ensure extension is an array
    if (!showdown.helper.isArray(ext)) {
      ext = [ext];
    }

    var validExtension = validate(ext, name);

    if (validExtension.valid) {
      extensions[name] = ext;
    } else {
      throw Error(validExtension.error);
    }
  }
};

/**
 * Gets all extensions registered
 * @returns {{}}
 */
showdown.getAllExtensions = function () {
  'use strict';
  return extensions;
};

/**
 * Remove an extension
 * @param {string} name
 */
showdown.removeExtension = function (name) {
  'use strict';
  delete extensions[name];
};

/**
 * Removes all extensions
 */
showdown.resetExtensions = function () {
  'use strict';
  extensions = {};
};

/**
 * Validate extension
 * @param {array} extension
 * @param {string} name
 * @returns {{valid: boolean, error: string}}
 */
function validate (extension, name) {
  'use strict';

  var errMsg = (name) ? 'Error in ' + name + ' extension->' : 'Error in unnamed extension',
      ret = {
        valid: true,
        error: ''
      };

  if (!showdown.helper.isArray(extension)) {
    extension = [extension];
  }

  for (var i = 0; i < extension.length; ++i) {
    var baseMsg = errMsg + ' sub-extension ' + i + ': ',
        ext = extension[i];
    if (typeof ext !== 'object') {
      ret.valid = false;
      ret.error = baseMsg + 'must be an object, but ' + typeof ext + ' given';
      return ret;
    }

    if (!showdown.helper.isString(ext.type)) {
      ret.valid = false;
      ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + ' given';
      return ret;
    }

    var type = ext.type = ext.type.toLowerCase();

    // normalize extension type
    if (type === 'language') {
      type = ext.type = 'lang';
    }

    if (type === 'html') {
      type = ext.type = 'output';
    }

    if (type !== 'lang' && type !== 'output' && type !== 'listener') {
      ret.valid = false;
      ret.error = baseMsg + 'type ' + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
      return ret;
    }

    if (type === 'listener') {
      if (showdown.helper.isUndefined(ext.listeners)) {
        ret.valid = false;
        ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
        return ret;
      }
    } else {
      if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
        ret.valid = false;
        ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
        return ret;
      }
    }

    if (ext.listeners) {
      if (typeof ext.listeners !== 'object') {
        ret.valid = false;
        ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + ' given';
        return ret;
      }
      for (var ln in ext.listeners) {
        if (ext.listeners.hasOwnProperty(ln)) {
          if (typeof ext.listeners[ln] !== 'function') {
            ret.valid = false;
            ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln +
              ' must be a function but ' + typeof ext.listeners[ln] + ' given';
            return ret;
          }
        }
      }
    }

    if (ext.filter) {
      if (typeof ext.filter !== 'function') {
        ret.valid = false;
        ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + ' given';
        return ret;
      }
    } else if (ext.regex) {
      if (showdown.helper.isString(ext.regex)) {
        ext.regex = new RegExp(ext.regex, 'g');
      }
      if (!(ext.regex instanceof RegExp)) {
        ret.valid = false;
        ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + ' given';
        return ret;
      }
      if (showdown.helper.isUndefined(ext.replace)) {
        ret.valid = false;
        ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
        return ret;
      }
    }
  }
  return ret;
}

/**
 * Validate extension
 * @param {object} ext
 * @returns {boolean}
 */
showdown.validateExtension = function (ext) {
  'use strict';

  var validateExtension = validate(ext, null);
  if (!validateExtension.valid) {
    console.warn(validateExtension.error);
    return false;
  }
  return true;
};

/**
 * showdownjs helper functions
 */

if (!showdown.hasOwnProperty('helper')) {
  showdown.helper = {};
}

/**
 * Check if var is string
 * @static
 * @param {string} a
 * @returns {boolean}
 */
showdown.helper.isString = function (a) {
  'use strict';
  return (typeof a === 'string' || a instanceof String);
};

/**
 * Check if var is a function
 * @static
 * @param {*} a
 * @returns {boolean}
 */
showdown.helper.isFunction = function (a) {
  'use strict';
  var getType = {};
  return a && getType.toString.call(a) === '[object Function]';
};

/**
 * isArray helper function
 * @static
 * @param {*} a
 * @returns {boolean}
 */
showdown.helper.isArray = function (a) {
  'use strict';
  return a.constructor === Array;
};

/**
 * Check if value is undefined
 * @static
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 */
showdown.helper.isUndefined = function (value) {
  'use strict';
  return typeof value === 'undefined';
};

/**
 * ForEach helper function
 * Iterates over Arrays and Objects (own properties only)
 * @static
 * @param {*} obj
 * @param {function} callback Accepts 3 params: 1. value, 2. key, 3. the original array/object
 */
showdown.helper.forEach = function (obj, callback) {
  'use strict';
  // check if obj is defined
  if (showdown.helper.isUndefined(obj)) {
    throw new Error('obj param is required');
  }

  if (showdown.helper.isUndefined(callback)) {
    throw new Error('callback param is required');
  }

  if (!showdown.helper.isFunction(callback)) {
    throw new Error('callback param must be a function/closure');
  }

  if (typeof obj.forEach === 'function') {
    obj.forEach(callback);
  } else if (showdown.helper.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      callback(obj[i], i, obj);
    }
  } else if (typeof (obj) === 'object') {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        callback(obj[prop], prop, obj);
      }
    }
  } else {
    throw new Error('obj does not seem to be an array or an iterable object');
  }
};

/**
 * Standardidize extension name
 * @static
 * @param {string} s extension name
 * @returns {string}
 */
showdown.helper.stdExtName = function (s) {
  'use strict';
  return s.replace(/[_?*+\/\\.^-]/g, '').replace(/\s/g, '').toLowerCase();
};

function escapeCharactersCallback (wholeMatch, m1) {
  'use strict';
  var charCodeToEscape = m1.charCodeAt(0);
  return '¨E' + charCodeToEscape + 'E';
}

/**
 * Callback used to escape characters when passing through String.replace
 * @static
 * @param {string} wholeMatch
 * @param {string} m1
 * @returns {string}
 */
showdown.helper.escapeCharactersCallback = escapeCharactersCallback;

/**
 * Escape characters in a string
 * @static
 * @param {string} text
 * @param {string} charsToEscape
 * @param {boolean} afterBackslash
 * @returns {XML|string|void|*}
 */
showdown.helper.escapeCharacters = function (text, charsToEscape, afterBackslash) {
  'use strict';
  // First we have to escape the escape characters so that
  // we can build a character class out of them
  var regexString = '([' + charsToEscape.replace(/([\[\]\\])/g, '\\$1') + '])';

  if (afterBackslash) {
    regexString = '\\\\' + regexString;
  }

  var regex = new RegExp(regexString, 'g');
  text = text.replace(regex, escapeCharactersCallback);

  return text;
};

var rgxFindMatchPos = function (str, left, right, flags) {
  'use strict';
  var f = flags || '',
      g = f.indexOf('g') > -1,
      x = new RegExp(left + '|' + right, 'g' + f.replace(/g/g, '')),
      l = new RegExp(left, f.replace(/g/g, '')),
      pos = [],
      t, s, m, start, end;

  do {
    t = 0;
    while ((m = x.exec(str))) {
      if (l.test(m[0])) {
        if (!(t++)) {
          s = x.lastIndex;
          start = s - m[0].length;
        }
      } else if (t) {
        if (!--t) {
          end = m.index + m[0].length;
          var obj = {
            left: {start: start, end: s},
            match: {start: s, end: m.index},
            right: {start: m.index, end: end},
            wholeMatch: {start: start, end: end}
          };
          pos.push(obj);
          if (!g) {
            return pos;
          }
        }
      }
    }
  } while (t && (x.lastIndex = s));

  return pos;
};

/**
 * matchRecursiveRegExp
 *
 * (c) 2007 Steven Levithan <stevenlevithan.com>
 * MIT License
 *
 * Accepts a string to search, a left and right format delimiter
 * as regex patterns, and optional regex flags. Returns an array
 * of matches, allowing nested instances of left/right delimiters.
 * Use the "g" flag to return all matches, otherwise only the
 * first is returned. Be careful to ensure that the left and
 * right format delimiters produce mutually exclusive matches.
 * Backreferences are not supported within the right delimiter
 * due to how it is internally combined with the left delimiter.
 * When matching strings whose format delimiters are unbalanced
 * to the left or right, the output is intentionally as a
 * conventional regex library with recursion support would
 * produce, e.g. "<<x>" and "<x>>" both produce ["x"] when using
 * "<" and ">" as the delimiters (both strings contain a single,
 * balanced instance of "<x>").
 *
 * examples:
 * matchRecursiveRegExp("test", "\\(", "\\)")
 * returns: []
 * matchRecursiveRegExp("<t<<e>><s>>t<>", "<", ">", "g")
 * returns: ["t<<e>><s>", ""]
 * matchRecursiveRegExp("<div id=\"x\">test</div>", "<div\\b[^>]*>", "</div>", "gi")
 * returns: ["test"]
 */
showdown.helper.matchRecursiveRegExp = function (str, left, right, flags) {
  'use strict';

  var matchPos = rgxFindMatchPos (str, left, right, flags),
      results = [];

  for (var i = 0; i < matchPos.length; ++i) {
    results.push([
      str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
      str.slice(matchPos[i].match.start, matchPos[i].match.end),
      str.slice(matchPos[i].left.start, matchPos[i].left.end),
      str.slice(matchPos[i].right.start, matchPos[i].right.end)
    ]);
  }
  return results;
};

/**
 *
 * @param {string} str
 * @param {string|function} replacement
 * @param {string} left
 * @param {string} right
 * @param {string} flags
 * @returns {string}
 */
showdown.helper.replaceRecursiveRegExp = function (str, replacement, left, right, flags) {
  'use strict';

  if (!showdown.helper.isFunction(replacement)) {
    var repStr = replacement;
    replacement = function () {
      return repStr;
    };
  }

  var matchPos = rgxFindMatchPos(str, left, right, flags),
      finalStr = str,
      lng = matchPos.length;

  if (lng > 0) {
    var bits = [];
    if (matchPos[0].wholeMatch.start !== 0) {
      bits.push(str.slice(0, matchPos[0].wholeMatch.start));
    }
    for (var i = 0; i < lng; ++i) {
      bits.push(
        replacement(
          str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
          str.slice(matchPos[i].match.start, matchPos[i].match.end),
          str.slice(matchPos[i].left.start, matchPos[i].left.end),
          str.slice(matchPos[i].right.start, matchPos[i].right.end)
        )
      );
      if (i < lng - 1) {
        bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
      }
    }
    if (matchPos[lng - 1].wholeMatch.end < str.length) {
      bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
    }
    finalStr = bits.join('');
  }
  return finalStr;
};

/**
 * Returns the index within the passed String object of the first occurrence of the specified regex,
 * starting the search at fromIndex. Returns -1 if the value is not found.
 *
 * @param {string} str string to search
 * @param {RegExp} regex Regular expression to search
 * @param {int} [fromIndex = 0] Index to start the search
 * @returns {Number}
 * @throws InvalidArgumentError
 */
showdown.helper.regexIndexOf = function (str, regex, fromIndex) {
  'use strict';
  if (!showdown.helper.isString(str)) {
    throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
  }
  if (regex instanceof RegExp === false) {
    throw 'InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp';
  }
  var indexOf = str.substring(fromIndex || 0).search(regex);
  return (indexOf >= 0) ? (indexOf + (fromIndex || 0)) : indexOf;
};

/**
 * Splits the passed string object at the defined index, and returns an array composed of the two substrings
 * @param {string} str string to split
 * @param {int} index index to split string at
 * @returns {[string,string]}
 * @throws InvalidArgumentError
 */
showdown.helper.splitAtIndex = function (str, index) {
  'use strict';
  if (!showdown.helper.isString(str)) {
    throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
  }
  return [str.substring(0, index), str.substring(index)];
};

/**
 * Obfuscate an e-mail address through the use of Character Entities,
 * transforming ASCII characters into their equivalent decimal or hex entities.
 *
 * Since it has a random component, subsequent calls to this function produce different results
 *
 * @param {string} mail
 * @returns {string}
 */
showdown.helper.encodeEmailAddress = function (mail) {
  'use strict';
  var encode = [
    function (ch) {
      return '&#' + ch.charCodeAt(0) + ';';
    },
    function (ch) {
      return '&#x' + ch.charCodeAt(0).toString(16) + ';';
    },
    function (ch) {
      return ch;
    }
  ];

  mail = mail.replace(/./g, function (ch) {
    if (ch === '@') {
      // this *must* be encoded. I insist.
      ch = encode[Math.floor(Math.random() * 2)](ch);
    } else {
      var r = Math.random();
      // roughly 10% raw, 45% hex, 45% dec
      ch = (
        r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch)
      );
    }
    return ch;
  });

  return mail;
};

/**
 * POLYFILLS
 */
// use this instead of builtin is undefined for IE8 compatibility
if (typeof(console) === 'undefined') {
  console = {
    warn: function (msg) {
      'use strict';
      alert(msg);
    },
    log: function (msg) {
      'use strict';
      alert(msg);
    },
    error: function (msg) {
      'use strict';
      throw msg;
    }
  };
}

/**
 * Common regexes.
 * We declare some common regexes to improve performance
 */
showdown.helper.regexes = {
  asteriskAndDash: /([*_])/g
};

/**
 * Created by Estevao on 31-05-2015.
 */

/**
 * Showdown Converter class
 * @class
 * @param {object} [converterOptions]
 * @returns {Converter}
 */
showdown.Converter = function (converterOptions) {
  'use strict';

  var
      /**
       * Options used by this converter
       * @private
       * @type {{}}
       */
      options = {},

      /**
       * Language extensions used by this converter
       * @private
       * @type {Array}
       */
      langExtensions = [],

      /**
       * Output modifiers extensions used by this converter
       * @private
       * @type {Array}
       */
      outputModifiers = [],

      /**
       * Event listeners
       * @private
       * @type {{}}
       */
      listeners = {},

      /**
       * The flavor set in this converter
       */
      setConvFlavor = setFlavor;

  _constructor();

  /**
   * Converter constructor
   * @private
   */
  function _constructor () {
    converterOptions = converterOptions || {};

    for (var gOpt in globalOptions) {
      if (globalOptions.hasOwnProperty(gOpt)) {
        options[gOpt] = globalOptions[gOpt];
      }
    }

    // Merge options
    if (typeof converterOptions === 'object') {
      for (var opt in converterOptions) {
        if (converterOptions.hasOwnProperty(opt)) {
          options[opt] = converterOptions[opt];
        }
      }
    } else {
      throw Error('Converter expects the passed parameter to be an object, but ' + typeof converterOptions +
      ' was passed instead.');
    }

    if (options.extensions) {
      showdown.helper.forEach(options.extensions, _parseExtension);
    }
  }

  /**
   * Parse extension
   * @param {*} ext
   * @param {string} [name='']
   * @private
   */
  function _parseExtension (ext, name) {

    name = name || null;
    // If it's a string, the extension was previously loaded
    if (showdown.helper.isString(ext)) {
      ext = showdown.helper.stdExtName(ext);
      name = ext;

      // LEGACY_SUPPORT CODE
      if (showdown.extensions[ext]) {
        console.warn('DEPRECATION WARNING: ' + ext + ' is an old extension that uses a deprecated loading method.' +
          'Please inform the developer that the extension should be updated!');
        legacyExtensionLoading(showdown.extensions[ext], ext);
        return;
      // END LEGACY SUPPORT CODE

      } else if (!showdown.helper.isUndefined(extensions[ext])) {
        ext = extensions[ext];

      } else {
        throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
      }
    }

    if (typeof ext === 'function') {
      ext = ext();
    }

    if (!showdown.helper.isArray(ext)) {
      ext = [ext];
    }

    var validExt = validate(ext, name);
    if (!validExt.valid) {
      throw Error(validExt.error);
    }

    for (var i = 0; i < ext.length; ++i) {
      switch (ext[i].type) {

        case 'lang':
          langExtensions.push(ext[i]);
          break;

        case 'output':
          outputModifiers.push(ext[i]);
          break;
      }
      if (ext[i].hasOwnProperty('listeners')) {
        for (var ln in ext[i].listeners) {
          if (ext[i].listeners.hasOwnProperty(ln)) {
            listen(ln, ext[i].listeners[ln]);
          }
        }
      }
    }

  }

  /**
   * LEGACY_SUPPORT
   * @param {*} ext
   * @param {string} name
   */
  function legacyExtensionLoading (ext, name) {
    if (typeof ext === 'function') {
      ext = ext(new showdown.Converter());
    }
    if (!showdown.helper.isArray(ext)) {
      ext = [ext];
    }
    var valid = validate(ext, name);

    if (!valid.valid) {
      throw Error(valid.error);
    }

    for (var i = 0; i < ext.length; ++i) {
      switch (ext[i].type) {
        case 'lang':
          langExtensions.push(ext[i]);
          break;
        case 'output':
          outputModifiers.push(ext[i]);
          break;
        default:// should never reach here
          throw Error('Extension loader error: Type unrecognized!!!');
      }
    }
  }

  /**
   * Listen to an event
   * @param {string} name
   * @param {function} callback
   */
  function listen (name, callback) {
    if (!showdown.helper.isString(name)) {
      throw Error('Invalid argument in converter.listen() method: name must be a string, but ' + typeof name + ' given');
    }

    if (typeof callback !== 'function') {
      throw Error('Invalid argument in converter.listen() method: callback must be a function, but ' + typeof callback + ' given');
    }

    if (!listeners.hasOwnProperty(name)) {
      listeners[name] = [];
    }
    listeners[name].push(callback);
  }

  function rTrimInputText (text) {
    var rsp = text.match(/^\s*/)[0].length,
        rgx = new RegExp('^\\s{0,' + rsp + '}', 'gm');
    return text.replace(rgx, '');
  }

  /**
   * Dispatch an event
   * @private
   * @param {string} evtName Event name
   * @param {string} text Text
   * @param {{}} options Converter Options
   * @param {{}} globals
   * @returns {string}
   */
  this._dispatch = function dispatch (evtName, text, options, globals) {
    if (listeners.hasOwnProperty(evtName)) {
      for (var ei = 0; ei < listeners[evtName].length; ++ei) {
        var nText = listeners[evtName][ei](evtName, text, this, options, globals);
        if (nText && typeof nText !== 'undefined') {
          text = nText;
        }
      }
    }
    return text;
  };

  /**
   * Listen to an event
   * @param {string} name
   * @param {function} callback
   * @returns {showdown.Converter}
   */
  this.listen = function (name, callback) {
    listen(name, callback);
    return this;
  };

  /**
   * Converts a markdown string into HTML
   * @param {string} text
   * @returns {*}
   */
  this.makeHtml = function (text) {
    //check if text is not falsy
    if (!text) {
      return text;
    }

    var globals = {
      gHtmlBlocks:     [],
      gHtmlMdBlocks:   [],
      gHtmlSpans:      [],
      gUrls:           {},
      gTitles:         {},
      gDimensions:     {},
      gListLevel:      0,
      hashLinkCounts:  {},
      langExtensions:  langExtensions,
      outputModifiers: outputModifiers,
      converter:       this,
      ghCodeBlocks:    []
    };

    // This lets us use ¨ trema as an escape char to avoid md5 hashes
    // The choice of character is arbitrary; anything that isn't
    // magic in Markdown will work.
    text = text.replace(/¨/g, '¨T');

    // Replace $ with ¨D
    // RegExp interprets $ as a special character
    // when it's in a replacement string
    text = text.replace(/\$/g, '¨D');

    // Standardize line endings
    text = text.replace(/\r\n/g, '\n'); // DOS to Unix
    text = text.replace(/\r/g, '\n'); // Mac to Unix

    // Stardardize line spaces (nbsp causes trouble in older browsers and some regex flavors)
    text = text.replace(/\u00A0/g, ' ');

    if (options.smartIndentationFix) {
      text = rTrimInputText(text);
    }

    // Make sure text begins and ends with a couple of newlines:
    text = '\n\n' + text + '\n\n';

    // detab
    text = showdown.subParser('detab')(text, options, globals);

    /**
     * Strip any lines consisting only of spaces and tabs.
     * This makes subsequent regexs easier to write, because we can
     * match consecutive blank lines with /\n+/ instead of something
     * contorted like /[ \t]*\n+/
     */
    text = text.replace(/^[ \t]+$/mg, '');

    //run languageExtensions
    showdown.helper.forEach(langExtensions, function (ext) {
      text = showdown.subParser('runExtension')(ext, text, options, globals);
    });

    // run the sub parsers
    text = showdown.subParser('hashPreCodeTags')(text, options, globals);
    text = showdown.subParser('githubCodeBlocks')(text, options, globals);
    text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
    text = showdown.subParser('hashCodeTags')(text, options, globals);
    text = showdown.subParser('stripLinkDefinitions')(text, options, globals);
    text = showdown.subParser('blockGamut')(text, options, globals);
    text = showdown.subParser('unhashHTMLSpans')(text, options, globals);
    text = showdown.subParser('unescapeSpecialChars')(text, options, globals);

    // attacklab: Restore dollar signs
    text = text.replace(/¨D/g, '$$');

    // attacklab: Restore tremas
    text = text.replace(/¨T/g, '¨');

    // Run output modifiers
    showdown.helper.forEach(outputModifiers, function (ext) {
      text = showdown.subParser('runExtension')(ext, text, options, globals);
    });

    return text;
  };

  /**
   * Set an option of this Converter instance
   * @param {string} key
   * @param {*} value
   */
  this.setOption = function (key, value) {
    options[key] = value;
  };

  /**
   * Get the option of this Converter instance
   * @param {string} key
   * @returns {*}
   */
  this.getOption = function (key) {
    return options[key];
  };

  /**
   * Get the options of this Converter instance
   * @returns {{}}
   */
  this.getOptions = function () {
    return options;
  };

  /**
   * Add extension to THIS converter
   * @param {{}} extension
   * @param {string} [name=null]
   */
  this.addExtension = function (extension, name) {
    name = name || null;
    _parseExtension(extension, name);
  };

  /**
   * Use a global registered extension with THIS converter
   * @param {string} extensionName Name of the previously registered extension
   */
  this.useExtension = function (extensionName) {
    _parseExtension(extensionName);
  };

  /**
   * Set the flavor THIS converter should use
   * @param {string} name
   */
  this.setFlavor = function (name) {
    if (!flavor.hasOwnProperty(name)) {
      throw Error(name + ' flavor was not found');
    }
    var preset = flavor[name];
    setConvFlavor = name;
    for (var option in preset) {
      if (preset.hasOwnProperty(option)) {
        options[option] = preset[option];
      }
    }
  };

  /**
   * Get the currently set flavor of this converter
   * @returns {string}
   */
  this.getFlavor = function () {
    return setConvFlavor;
  };

  /**
   * Remove an extension from THIS converter.
   * Note: This is a costly operation. It's better to initialize a new converter
   * and specify the extensions you wish to use
   * @param {Array} extension
   */
  this.removeExtension = function (extension) {
    if (!showdown.helper.isArray(extension)) {
      extension = [extension];
    }
    for (var a = 0; a < extension.length; ++a) {
      var ext = extension[a];
      for (var i = 0; i < langExtensions.length; ++i) {
        if (langExtensions[i] === ext) {
          langExtensions[i].splice(i, 1);
        }
      }
      for (var ii = 0; ii < outputModifiers.length; ++i) {
        if (outputModifiers[ii] === ext) {
          outputModifiers[ii].splice(i, 1);
        }
      }
    }
  };

  /**
   * Get all extension of THIS converter
   * @returns {{language: Array, output: Array}}
   */
  this.getAllExtensions = function () {
    return {
      language: langExtensions,
      output: outputModifiers
    };
  };
};

/**
 * Turn Markdown link shortcuts into XHTML <a> tags.
 */
showdown.subParser('anchors', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('anchors.before', text, options, globals);

  var writeAnchorTag = function (wholeMatch, linkText, linkId, url, m5, m6, title) {
    if (showdown.helper.isUndefined(title)) {
      title = '';
    }
    linkId = linkId.toLowerCase();

    // Special case for explicit empty url
    if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
      url = '';
    } else if (!url) {
      if (!linkId) {
        // lower-case and turn embedded newlines into spaces
        linkId = linkText.toLowerCase().replace(/ ?\n/g, ' ');
      }
      url = '#' + linkId;

      if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
        url = globals.gUrls[linkId];
        if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
          title = globals.gTitles[linkId];
        }
      } else {
        return wholeMatch;
      }
    }

    //url = showdown.helper.escapeCharacters(url, '*_', false); // replaced line to improve performance
    url = url.replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);

    var result = '<a href="' + url + '"';

    if (title !== '' && title !== null) {
      title = title.replace(/"/g, '&quot;');
      //title = showdown.helper.escapeCharacters(title, '*_', false); // replaced line to improve performance
      title = title.replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
      result += ' title="' + title + '"';
    }

    if (options.openLinksInNewWindow) {
      // escaped _
      result += ' target="¨E95Eblank"';
    }

    result += '>' + linkText + '</a>';

    return result;
  };

  // First, handle reference-style links: [link text] [id]
  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);

  // Next, inline-style links: [link text](url "optional title")
  // cases with crazy urls like ./image/cat1).png
  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
    writeAnchorTag);

  // normal cases
  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
                      writeAnchorTag);

  // handle reference-style shortcuts: [link text]
  // These must come last in case you've also got [link test][1]
  // or [link test](/foo)
  text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);

  // Lastly handle GithubMentions if option is enabled
  if (options.ghMentions) {
    text = text.replace(/(^|\s)(\\)?(@([a-z\d\-]+))(?=[.!?;,[\]()]|\s|$)/gmi, function (wm, st, escape, mentions, username) {
      if (escape === '\\') {
        return st + mentions;
      }

      //check if options.ghMentionsLink is a string
      if (!showdown.helper.isString(options.ghMentionsLink)) {
        throw new Error('ghMentionsLink option must be a string');
      }
      var lnk = options.ghMentionsLink.replace(/\{u}/g, username);
      return st + '<a href="' + lnk + '">' + mentions + '</a>';
    });
  }

  text = globals.converter._dispatch('anchors.after', text, options, globals);
  return text;
});

// url allowed chars [a-z\d_.~:/?#[]@!$&'()*+,;=-]

var simpleURLRegex  = /\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)()(?=\s|$)(?!["<>])/gi,
    simpleURLRegex2 = /\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]]?)(?=\s|$)(?!["<>])/gi,
    //simpleURLRegex3 = /\b(((https?|ftp):\/\/|www\.)[a-z\d.-]+\.[a-z\d_.~:/?#\[\]@!$&'()*+,;=-]+?)([.!?()]?)(?=\s|$)(?!["<>])/gi,
    delimUrlRegex   = /<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>/gi,
    simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,
    delimMailRegex  = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,

    replaceLink = function (options) {
      'use strict';

      return function (wm, link, m2, m3, trailingPunctuation) {
        var lnkTxt = link,
            append = '',
            target = '';
        if (/^www\./i.test(link)) {
          link = link.replace(/^www\./i, 'http://www.');
        }
        if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
          append = trailingPunctuation;
        }
        if (options.openLinksInNewWindow) {
          target = ' target="¨E95Eblank"';
        }
        return '<a href="' + link + '"' + target + '>' + lnkTxt + '</a>' + append;
      };
    },

    replaceMail = function (options, globals) {
      'use strict';
      return function (wholeMatch, b, mail) {
        var href = 'mailto:';
        b = b || '';
        mail = showdown.subParser('unescapeSpecialChars')(mail, options, globals);
        if (options.encodeEmails) {
          href = showdown.helper.encodeEmailAddress(href + mail);
          mail = showdown.helper.encodeEmailAddress(mail);
        } else {
          href = href + mail;
        }
        return b + '<a href="' + href + '">' + mail + '</a>';
      };
    };

showdown.subParser('autoLinks', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('autoLinks.before', text, options, globals);

  text = text.replace(delimUrlRegex, replaceLink(options));
  text = text.replace(delimMailRegex, replaceMail(options, globals));

  text = globals.converter._dispatch('autoLinks.after', text, options, globals);

  return text;
});

showdown.subParser('simplifiedAutoLinks', function (text, options, globals) {
  'use strict';

  if (!options.simplifiedAutoLink) {
    return text;
  }

  text = globals.converter._dispatch('simplifiedAutoLinks.before', text, options, globals);

  if (options.excludeTrailingPunctuationFromURLs) {
    text = text.replace(simpleURLRegex2, replaceLink(options));
  } else {
    text = text.replace(simpleURLRegex, replaceLink(options));
  }
  text = text.replace(simpleMailRegex, replaceMail(options, globals));

  text = globals.converter._dispatch('simplifiedAutoLinks.after', text, options, globals);

  return text;
});

/**
 * These are all the transformations that form block-level
 * tags like paragraphs, headers, and list items.
 */
showdown.subParser('blockGamut', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('blockGamut.before', text, options, globals);

  // we parse blockquotes first so that we can have headings and hrs
  // inside blockquotes
  text = showdown.subParser('blockQuotes')(text, options, globals);
  text = showdown.subParser('headers')(text, options, globals);

  // Do Horizontal Rules:
  text = showdown.subParser('horizontalRule')(text, options, globals);

  text = showdown.subParser('lists')(text, options, globals);
  text = showdown.subParser('codeBlocks')(text, options, globals);
  text = showdown.subParser('tables')(text, options, globals);

  // We already ran _HashHTMLBlocks() before, in Markdown(), but that
  // was to escape raw HTML in the original Markdown source. This time,
  // we're escaping the markup we've just created, so that we don't wrap
  // <p> tags around block-level tags.
  text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
  text = showdown.subParser('paragraphs')(text, options, globals);

  text = globals.converter._dispatch('blockGamut.after', text, options, globals);

  return text;
});

showdown.subParser('blockQuotes', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('blockQuotes.before', text, options, globals);

  text = text.replace(/((^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm, function (wholeMatch, m1) {
    var bq = m1;

    // attacklab: hack around Konqueror 3.5.4 bug:
    // "----------bug".replace(/^-/g,"") == "bug"
    bq = bq.replace(/^[ \t]*>[ \t]?/gm, '¨0'); // trim one level of quoting

    // attacklab: clean up hack
    bq = bq.replace(/¨0/g, '');

    bq = bq.replace(/^[ \t]+$/gm, ''); // trim whitespace-only lines
    bq = showdown.subParser('githubCodeBlocks')(bq, options, globals);
    bq = showdown.subParser('blockGamut')(bq, options, globals); // recurse

    bq = bq.replace(/(^|\n)/g, '$1  ');
    // These leading spaces screw with <pre> content, so we need to fix that:
    bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (wholeMatch, m1) {
      var pre = m1;
      // attacklab: hack around Konqueror 3.5.4 bug:
      pre = pre.replace(/^  /mg, '¨0');
      pre = pre.replace(/¨0/g, '');
      return pre;
    });

    return showdown.subParser('hashBlock')('<blockquote>\n' + bq + '\n</blockquote>', options, globals);
  });

  text = globals.converter._dispatch('blockQuotes.after', text, options, globals);
  return text;
});

/**
 * Process Markdown `<pre><code>` blocks.
 */
showdown.subParser('codeBlocks', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('codeBlocks.before', text, options, globals);

  // sentinel workarounds for lack of \A and \Z, safari\khtml bug
  text += '¨0';

  var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
  text = text.replace(pattern, function (wholeMatch, m1, m2) {
    var codeblock = m1,
        nextChar = m2,
        end = '\n';

    codeblock = showdown.subParser('outdent')(codeblock, options, globals);
    codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
    codeblock = showdown.subParser('detab')(codeblock, options, globals);
    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing newlines

    if (options.omitExtraWLInCodeBlocks) {
      end = '';
    }

    codeblock = '<pre><code>' + codeblock + end + '</code></pre>';

    return showdown.subParser('hashBlock')(codeblock, options, globals) + nextChar;
  });

  // strip sentinel
  text = text.replace(/¨0/, '');

  text = globals.converter._dispatch('codeBlocks.after', text, options, globals);
  return text;
});

/**
 *
 *   *  Backtick quotes are used for <code></code> spans.
 *
 *   *  You can use multiple backticks as the delimiters if you want to
 *     include literal backticks in the code span. So, this input:
 *
 *         Just type ``foo `bar` baz`` at the prompt.
 *
 *       Will translate to:
 *
 *         <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
 *
 *    There's no arbitrary limit to the number of backticks you
 *    can use as delimters. If you need three consecutive backticks
 *    in your code, use four for delimiters, etc.
 *
 *  *  You can use spaces to get literal backticks at the edges:
 *
 *         ... type `` `bar` `` ...
 *
 *       Turns to:
 *
 *         ... type <code>`bar`</code> ...
 */
showdown.subParser('codeSpans', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('codeSpans.before', text, options, globals);

  if (typeof(text) === 'undefined') {
    text = '';
  }
  text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
    function (wholeMatch, m1, m2, m3) {
      var c = m3;
      c = c.replace(/^([ \t]*)/g, '');	// leading whitespace
      c = c.replace(/[ \t]*$/g, '');	// trailing whitespace
      c = showdown.subParser('encodeCode')(c, options, globals);
      return m1 + '<code>' + c + '</code>';
    }
  );

  text = globals.converter._dispatch('codeSpans.after', text, options, globals);
  return text;
});

/**
 * Convert all tabs to spaces
 */
showdown.subParser('detab', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('detab.before', text, options, globals);

  // expand first n-1 tabs
  text = text.replace(/\t(?=\t)/g, '    '); // g_tab_width

  // replace the nth with two sentinels
  text = text.replace(/\t/g, '¨A¨B');

  // use the sentinel to anchor our regex so it doesn't explode
  text = text.replace(/¨B(.+?)¨A/g, function (wholeMatch, m1) {
    var leadingText = m1,
        numSpaces = 4 - leadingText.length % 4;  // g_tab_width

    // there *must* be a better way to do this:
    for (var i = 0; i < numSpaces; i++) {
      leadingText += ' ';
    }

    return leadingText;
  });

  // clean up sentinels
  text = text.replace(/¨A/g, '    ');  // g_tab_width
  text = text.replace(/¨B/g, '');

  text = globals.converter._dispatch('detab.after', text, options, globals);
  return text;
});

/**
 * Smart processing for ampersands and angle brackets that need to be encoded.
 */
showdown.subParser('encodeAmpsAndAngles', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('encodeAmpsAndAngles.before', text, options, globals);

  // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
  // http://bumppo.net/projects/amputator/
  text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, '&amp;');

  // Encode naked <'s
  text = text.replace(/<(?![a-z\/?$!])/gi, '&lt;');

  // Encode <
  text = text.replace(/</g, '&lt;');

  // Encode >
  text = text.replace(/>/g, '&gt;');

  text = globals.converter._dispatch('encodeAmpsAndAngles.after', text, options, globals);
  return text;
});

/**
 * Returns the string, with after processing the following backslash escape sequences.
 *
 * attacklab: The polite way to do this is with the new escapeCharacters() function:
 *
 *    text = escapeCharacters(text,"\\",true);
 *    text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
 *
 * ...but we're sidestepping its use of the (slow) RegExp constructor
 * as an optimization for Firefox.  This function gets called a LOT.
 */
showdown.subParser('encodeBackslashEscapes', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('encodeBackslashEscapes.before', text, options, globals);

  text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
  text = text.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, showdown.helper.escapeCharactersCallback);

  text = globals.converter._dispatch('encodeBackslashEscapes.after', text, options, globals);
  return text;
});

/**
 * Encode/escape certain characters inside Markdown code runs.
 * The point is that in code, these characters are literals,
 * and lose their special Markdown meanings.
 */
showdown.subParser('encodeCode', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('encodeCode.before', text, options, globals);

  // Encode all ampersands; HTML entities are not
  // entities within a Markdown code span.
  text = text
    .replace(/&/g, '&amp;')
  // Do the angle bracket song and dance:
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  // Now, escape characters that are magic in Markdown:
    .replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);

  text = globals.converter._dispatch('encodeCode.after', text, options, globals);
  return text;
});

/**
 * Within tags -- meaning between < and > -- encode [\ ` * _ ~ =] so they
 * don't conflict with their use in Markdown for code, italics and strong.
 */
showdown.subParser('escapeSpecialCharsWithinTagAttributes', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.before', text, options, globals);

  // Build a regex to find HTML tags and comments.  See Friedl's
  // "Mastering Regular Expressions", 2nd Ed., pp. 200-201.
  var regex = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;

  text = text.replace(regex, function (wholeMatch) {
    return wholeMatch
      .replace(/(.)<\/?code>(?=.)/g, '$1`')
      .replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
  });

  text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.after', text, options, globals);
  return text;
});

/**
 * Handle github codeblocks prior to running HashHTML so that
 * HTML contained within the codeblock gets escaped properly
 * Example:
 * ```ruby
 *     def hello_world(x)
 *       puts "Hello, #{x}"
 *     end
 * ```
 */
showdown.subParser('githubCodeBlocks', function (text, options, globals) {
  'use strict';

  // early exit if option is not enabled
  if (!options.ghCodeBlocks) {
    return text;
  }

  text = globals.converter._dispatch('githubCodeBlocks.before', text, options, globals);

  text += '¨0';

  text = text.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function (wholeMatch, language, codeblock) {
    var end = (options.omitExtraWLInCodeBlocks) ? '' : '\n';

    // First parse the github code block
    codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
    codeblock = showdown.subParser('detab')(codeblock, options, globals);
    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing whitespace

    codeblock = '<pre><code' + (language ? ' class="' + language + ' language-' + language + '"' : '') + '>' + codeblock + end + '</code></pre>';

    codeblock = showdown.subParser('hashBlock')(codeblock, options, globals);

    // Since GHCodeblocks can be false positives, we need to
    // store the primitive text and the parsed text in a global var,
    // and then return a token
    return '\n\n¨G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
  });

  // attacklab: strip sentinel
  text = text.replace(/¨0/, '');

  return globals.converter._dispatch('githubCodeBlocks.after', text, options, globals);
});

showdown.subParser('hashBlock', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashBlock.before', text, options, globals);
  text = text.replace(/(^\n+|\n+$)/g, '');
  text = '\n\n¨K' + (globals.gHtmlBlocks.push(text) - 1) + 'K\n\n';
  text = globals.converter._dispatch('hashBlock.after', text, options, globals);
  return text;
});

/**
 * Hash and escape <code> elements that should not be parsed as markdown
 */
showdown.subParser('hashCodeTags', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashCodeTags.before', text, options, globals);

  var repFunc = function (wholeMatch, match, left, right) {
    var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
    return '¨C' + (globals.gHtmlSpans.push(codeblock) - 1) + 'C';
  };

  // Hash naked <code>
  text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '<code\\b[^>]*>', '</code>', 'gim');

  text = globals.converter._dispatch('hashCodeTags.after', text, options, globals);
  return text;
});

showdown.subParser('hashElement', function (text, options, globals) {
  'use strict';

  return function (wholeMatch, m1) {
    var blockText = m1;

    // Undo double lines
    blockText = blockText.replace(/\n\n/g, '\n');
    blockText = blockText.replace(/^\n/, '');

    // strip trailing blank lines
    blockText = blockText.replace(/\n+$/g, '');

    // Replace the element text with a marker ("¨KxK" where x is its key)
    blockText = '\n\n¨K' + (globals.gHtmlBlocks.push(blockText) - 1) + 'K\n\n';

    return blockText;
  };
});

showdown.subParser('hashHTMLBlocks', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashHTMLBlocks.before', text, options, globals);

  var blockTags = [
        'pre',
        'div',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'blockquote',
        'table',
        'dl',
        'ol',
        'ul',
        'script',
        'noscript',
        'form',
        'fieldset',
        'iframe',
        'math',
        'style',
        'section',
        'header',
        'footer',
        'nav',
        'article',
        'aside',
        'address',
        'audio',
        'canvas',
        'figure',
        'hgroup',
        'output',
        'video',
        'p'
      ],
      repFunc = function (wholeMatch, match, left, right) {
        var txt = wholeMatch;
        // check if this html element is marked as markdown
        // if so, it's contents should be parsed as markdown
        if (left.search(/\bmarkdown\b/) !== -1) {
          txt = left + globals.converter.makeHtml(match) + right;
        }
        return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
      };

  for (var i = 0; i < blockTags.length; ++i) {

    var opTagPos,
        rgx1     = new RegExp('^ {0,3}<' + blockTags[i] + '\\b[^>]*>', 'im'),
        patLeft  = '<' + blockTags[i] + '\\b[^>]*>',
        patRight = '</' + blockTags[i] + '>';
    // 1. Look for the first position of the first opening HTML tag in the text
    while ((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1) {
      //2. Split the text in that position
      var subTexts = showdown.helper.splitAtIndex(text, opTagPos),
      //3. Match recursively
          newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, 'im');

      // prevent an infinite loop
      if (newSubText1 === subTexts[1]) {
        break;
      }
      text = subTexts[0].concat(newSubText1);
    }
  }
  // HR SPECIAL CASE
  text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
    showdown.subParser('hashElement')(text, options, globals));

  // Special case for standalone HTML comments
  text = showdown.helper.replaceRecursiveRegExp(text, function (txt) {
    return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
  }, '^ {0,3}<!--', '-->', 'gm');

  // PHP and ASP-style processor instructions (<?...?> and <%...%>)
  text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
    showdown.subParser('hashElement')(text, options, globals));

  text = globals.converter._dispatch('hashHTMLBlocks.after', text, options, globals);
  return text;
});

/**
 * Hash span elements that should not be parsed as markdown
 */
showdown.subParser('hashHTMLSpans', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashHTMLSpans.before', text, options, globals);

  function hashHTMLSpan (html) {
    return '¨C' + (globals.gHtmlSpans.push(html) - 1) + 'C';
  }

  // Hash Self Closing tags
  text = text.replace(/<[^>]+?\/>/gi, function (wm) {
    return hashHTMLSpan(wm);
  });

  // Hash tags without properties
  text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (wm) {
    return hashHTMLSpan(wm);
  });

  // Hash tags with properties
  text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (wm) {
    return hashHTMLSpan(wm);
  });

  // Hash self closing tags without />
  text = text.replace(/<[^>]+?>/gi, function (wm) {
    return hashHTMLSpan(wm);
  });

  /*showdown.helper.matchRecursiveRegExp(text, '<code\\b[^>]*>', '</code>', 'gi');*/

  text = globals.converter._dispatch('hashHTMLSpans.after', text, options, globals);
  return text;
});

/**
 * Unhash HTML spans
 */
showdown.subParser('unhashHTMLSpans', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('unhashHTMLSpans.before', text, options, globals);

  for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
    var repText = globals.gHtmlSpans[i],
        // limiter to prevent infinite loop (assume 10 as limit for recurse)
        limit = 0;

    while (/¨C(\d+)C/.test(repText)) {
      var num = RegExp.$1;
      repText = repText.replace('¨C' + num + 'C', globals.gHtmlSpans[num]);
      if (limit === 10) {
        break;
      }
      ++limit;
    }
    text = text.replace('¨C' + i + 'C', repText);
  }

  text = globals.converter._dispatch('unhashHTMLSpans.after', text, options, globals);
  return text;
});

/**
 * Hash and escape <pre><code> elements that should not be parsed as markdown
 */
showdown.subParser('hashPreCodeTags', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('hashPreCodeTags.before', text, options, globals);

  var repFunc = function (wholeMatch, match, left, right) {
    // encode html entities
    var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
    return '\n\n¨G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
  };

  // Hash <pre><code>
  text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>', '^ {0,3}</code>\\s*</pre>', 'gim');

  text = globals.converter._dispatch('hashPreCodeTags.after', text, options, globals);
  return text;
});

showdown.subParser('headers', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('headers.before', text, options, globals);

  var headerLevelStart = (isNaN(parseInt(options.headerLevelStart))) ? 1 : parseInt(options.headerLevelStart),
      ghHeaderId = options.ghCompatibleHeaderId,

  // Set text-style headers:
  //	Header 1
  //	========
  //
  //	Header 2
  //	--------
  //
      setextRegexH1 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
      setextRegexH2 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;

  text = text.replace(setextRegexH1, function (wholeMatch, m1) {

    var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
        hLevel = headerLevelStart,
        hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
    return showdown.subParser('hashBlock')(hashBlock, options, globals);
  });

  text = text.replace(setextRegexH2, function (matchFound, m1) {
    var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
        hLevel = headerLevelStart + 1,
        hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
    return showdown.subParser('hashBlock')(hashBlock, options, globals);
  });

  // atx-style headers:
  //  # Header 1
  //  ## Header 2
  //  ## Header 2 with closing hashes ##
  //  ...
  //  ###### Header 6
  //
  var atxStyle = (options.requireSpaceBeforeHeadingText) ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;

  text = text.replace(atxStyle, function (wholeMatch, m1, m2) {
    var hText = m2;
    if (options.customizedHeaderId) {
      hText = m2.replace(/\s?\{([^{]+?)}\s*$/, '');
    }

    var span = showdown.subParser('spanGamut')(hText, options, globals),
        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m2) + '"',
        hLevel = headerLevelStart - 1 + m1.length,
        header = '<h' + hLevel + hID + '>' + span + '</h' + hLevel + '>';

    return showdown.subParser('hashBlock')(header, options, globals);
  });

  function headerId (m) {
    var title;

    // It is separate from other options to allow combining prefix and customized
    if (options.customizedHeaderId) {
      var match = m.match(/\{([^{]+?)}\s*$/);
      if (match && match[1]) {
        m = match[1];
      }
    }

    // Prefix id to prevent causing inadvertent pre-existing style matches.
    if (showdown.helper.isString(options.prefixHeaderId)) {
      title = options.prefixHeaderId + m;
    } else if (options.prefixHeaderId === true) {
      title = 'section ' + m;
    } else {
      title = m;
    }

    if (ghHeaderId) {
      title = title
        .replace(/ /g, '-')
        // replace previously escaped chars (&, ¨ and $)
        .replace(/&amp;/g, '')
        .replace(/¨T/g, '')
        .replace(/¨D/g, '')
        // replace rest of the chars (&~$ are repeated as they might have been escaped)
        // borrowed from github's redcarpet (some they should produce similar results)
        .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, '')
        .toLowerCase();
    } else {
      title = title
        .replace(/[^\w]/g, '')
        .toLowerCase();
    }

    if (globals.hashLinkCounts[title]) {
      title = title + '-' + (globals.hashLinkCounts[title]++);
    } else {
      globals.hashLinkCounts[title] = 1;
    }
    return title;
  }

  text = globals.converter._dispatch('headers.after', text, options, globals);
  return text;
});

/**
 * Turn Markdown link shortcuts into XHTML <a> tags.
 */
showdown.subParser('horizontalRule', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('horizontalRule.before', text, options, globals);

  var key = showdown.subParser('hashBlock')('<hr />', options, globals);
  text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
  text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
  text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);

  text = globals.converter._dispatch('horizontalRule.after', text, options, globals);
  return text;
});

/**
 * Turn Markdown image shortcuts into <img> tags.
 */
showdown.subParser('images', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('images.before', text, options, globals);

  var inlineRegExp      = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
      crazyRegExp       = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
      referenceRegExp   = /!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g,
      refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;

  function writeImageTag (wholeMatch, altText, linkId, url, width, height, m5, title) {

    var gUrls   = globals.gUrls,
        gTitles = globals.gTitles,
        gDims   = globals.gDimensions;

    linkId = linkId.toLowerCase();

    if (!title) {
      title = '';
    }
    // Special case for explicit empty url
    if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
      url = '';

    } else if (url === '' || url === null) {
      if (linkId === '' || linkId === null) {
        // lower-case and turn embedded newlines into spaces
        linkId = altText.toLowerCase().replace(/ ?\n/g, ' ');
      }
      url = '#' + linkId;

      if (!showdown.helper.isUndefined(gUrls[linkId])) {
        url = gUrls[linkId];
        if (!showdown.helper.isUndefined(gTitles[linkId])) {
          title = gTitles[linkId];
        }
        if (!showdown.helper.isUndefined(gDims[linkId])) {
          width = gDims[linkId].width;
          height = gDims[linkId].height;
        }
      } else {
        return wholeMatch;
      }
    }

    altText = altText
      .replace(/"/g, '&quot;')
    //altText = showdown.helper.escapeCharacters(altText, '*_', false);
      .replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
    //url = showdown.helper.escapeCharacters(url, '*_', false);
    url = url.replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
    var result = '<img src="' + url + '" alt="' + altText + '"';

    if (title) {
      title = title
        .replace(/"/g, '&quot;')
      //title = showdown.helper.escapeCharacters(title, '*_', false);
        .replace(showdown.helper.regexes.asteriskAndDash, showdown.helper.escapeCharactersCallback);
      result += ' title="' + title + '"';
    }

    if (width && height) {
      width  = (width === '*') ? 'auto' : width;
      height = (height === '*') ? 'auto' : height;

      result += ' width="' + width + '"';
      result += ' height="' + height + '"';
    }

    result += ' />';

    return result;
  }

  // First, handle reference-style labeled images: ![alt text][id]
  text = text.replace(referenceRegExp, writeImageTag);

  // Next, handle inline images:  ![alt text](url =<width>x<height> "optional title")
  // cases with crazy urls like ./image/cat1).png
  text = text.replace(crazyRegExp, writeImageTag);

  // normal cases
  text = text.replace(inlineRegExp, writeImageTag);

  // handle reference-style shortcuts: |[img text]
  text = text.replace(refShortcutRegExp, writeImageTag);

  text = globals.converter._dispatch('images.after', text, options, globals);
  return text;
});

showdown.subParser('italicsAndBold', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('italicsAndBold.before', text, options, globals);

  // it's faster to have 3 separate regexes for each case than have just one
  // because of backtracing, in some cases, it could lead to an exponential effect
  // called "catastrophic backtrace". Ominous!

  function parseInside (txt, left, right) {
    if (options.simplifiedAutoLink) {
      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
    }
    return left + txt + right;
  }

  // Parse underscores
  if (options.literalMidWordUnderscores) {
    text = text.replace(/\b___(\S[\s\S]*)___\b/g, function (wm, txt) {
      return parseInside (txt, '<strong><em>', '</em></strong>');
    });
    text = text.replace(/\b__(\S[\s\S]*)__\b/g, function (wm, txt) {
      return parseInside (txt, '<strong>', '</strong>');
    });
    text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function (wm, txt) {
      return parseInside (txt, '<em>', '</em>');
    });
  } else {
    text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong><em>', '</em></strong>') : wm;
    });
    text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong>', '</strong>') : wm;
    });
    text = text.replace(/_([^\s_][\s\S]*?)_/g, function (wm, m) {
      // !/^_[^_]/.test(m) - test if it doesn't start with __ (since it seems redundant, we removed it)
      return (/\S$/.test(m)) ? parseInside (m, '<em>', '</em>') : wm;
    });
  }

  // Now parse asterisks
  if (options.literalMidWordAsterisks) {
    text = text.trim().replace(/(?:^| +)\*{3}(\S[\s\S]*?)\*{3}(?: +|$)/g, function (wm, txt) {
      return parseInside (txt, ' <strong><em>', '</em></strong> ');
    });
    text = text.trim().replace(/(?:^| +)\*{2}(\S[\s\S]*?)\*{2}(?: +|$)/g, function (wm, txt) {
      return parseInside (txt, ' <strong>', '</strong> ');
    });
    text = text.trim().replace(/(?:^| +)\*{1}(\S[\s\S]*?)\*{1}(?: +|$)/g, function (wm, txt) {
      return parseInside (txt, ' <em>', '</em>' + (wm.slice(-1) === ' ' ? ' ' : ''));
    });
  } else {
    text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong><em>', '</em></strong>') : wm;
    });
    text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function (wm, m) {
      return (/\S$/.test(m)) ? parseInside (m, '<strong>', '</strong>') : wm;
    });
    text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function (wm, m) {
      // !/^\*[^*]/.test(m) - test if it doesn't start with ** (since it seems redundant, we removed it)
      return (/\S$/.test(m)) ? parseInside (m, '<em>', '</em>') : wm;
    });
  }


  text = globals.converter._dispatch('italicsAndBold.after', text, options, globals);
  return text;
});

/**
 * Form HTML ordered (numbered) and unordered (bulleted) lists.
 */
showdown.subParser('lists', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('lists.before', text, options, globals);

  /**
   * Process the contents of a single ordered or unordered list, splitting it
   * into individual list items.
   * @param {string} listStr
   * @param {boolean} trimTrailing
   * @returns {string}
   */
  function processListItems (listStr, trimTrailing) {
    // The $g_list_level global keeps track of when we're inside a list.
    // Each time we enter a list, we increment it; when we leave a list,
    // we decrement. If it's zero, we're not in a list anymore.
    //
    // We do this because when we're not inside a list, we want to treat
    // something like this:
    //
    //    I recommend upgrading to version
    //    8. Oops, now this line is treated
    //    as a sub-list.
    //
    // As a single paragraph, despite the fact that the second line starts
    // with a digit-period-space sequence.
    //
    // Whereas when we're inside a list (or sub-list), that line will be
    // treated as the start of a sub-list. What a kludge, huh? This is
    // an aspect of Markdown's syntax that's hard to parse perfectly
    // without resorting to mind-reading. Perhaps the solution is to
    // change the syntax rules such that sub-lists must start with a
    // starting cardinal number; e.g. "1." or "a.".
    globals.gListLevel++;

    // trim trailing blank lines:
    listStr = listStr.replace(/\n{2,}$/, '\n');

    // attacklab: add sentinel to emulate \z
    listStr += '¨0';

    var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
        isParagraphed = (/\n[ \t]*\n(?!¨0)/.test(listStr));

    // Since version 1.5, nesting sublists requires 4 spaces (or 1 tab) indentation,
    // which is a syntax breaking change
    // activating this option reverts to old behavior
    if (options.disableForced4SpacesIndentedSublists) {
      rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
    }

    listStr = listStr.replace(rgx, function (wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
      checked = (checked && checked.trim() !== '');

      var item = showdown.subParser('outdent')(m4, options, globals),
          bulletStyle = '';

      // Support for github tasklists
      if (taskbtn && options.tasklists) {
        bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
        item = item.replace(/^[ \t]*\[(x|X| )?]/m, function () {
          var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
          if (checked) {
            otp += ' checked';
          }
          otp += '>';
          return otp;
        });
      }

      // ISSUE #312
      // This input: - - - a
      // causes trouble to the parser, since it interprets it as:
      // <ul><li><li><li>a</li></li></li></ul>
      // instead of:
      // <ul><li>- - a</li></ul>
      // So, to prevent it, we will put a marker (¨A)in the beginning of the line
      // Kind of hackish/monkey patching, but seems more effective than overcomplicating the list parser
      item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (wm2) {
        return '¨A' + wm2;
      });

      // m1 - Leading line or
      // Has a double return (multi paragraph) or
      // Has sublist
      if (m1 || (item.search(/\n{2,}/) > -1)) {
        item = showdown.subParser('githubCodeBlocks')(item, options, globals);
        item = showdown.subParser('blockGamut')(item, options, globals);
      } else {
        // Recursion for sub-lists:
        item = showdown.subParser('lists')(item, options, globals);
        item = item.replace(/\n$/, ''); // chomp(item)
        item = showdown.subParser('hashHTMLBlocks')(item, options, globals);
        // Colapse double linebreaks
        item = item.replace(/\n\n+/g, '\n\n');
        // replace double linebreaks with a placeholder
        item = item.replace(/\n\n/g, '¨B');
        if (isParagraphed) {
          item = showdown.subParser('paragraphs')(item, options, globals);
        } else {
          item = showdown.subParser('spanGamut')(item, options, globals);
        }
        item = item.replace(/¨B/g, '\n\n');
      }

      // now we need to remove the marker (¨A)
      item = item.replace('¨A', '');
      // we can finally wrap the line in list item tags
      item =  '<li' + bulletStyle + '>' + item + '</li>\n';

      return item;
    });

    // attacklab: strip sentinel
    listStr = listStr.replace(/¨0/g, '');

    globals.gListLevel--;

    if (trimTrailing) {
      listStr = listStr.replace(/\s+$/, '');
    }

    return listStr;
  }

  /**
   * Check and parse consecutive lists (better fix for issue #142)
   * @param {string} list
   * @param {string} listType
   * @param {boolean} trimTrailing
   * @returns {string}
   */
  function parseConsecutiveLists (list, listType, trimTrailing) {
    // check if we caught 2 or more consecutive lists by mistake
    // we use the counterRgx, meaning if listType is UL we look for OL and vice versa
    var olRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
        ulRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
        counterRxg = (listType === 'ul') ? olRgx : ulRgx,
        result = '';

    if (list.search(counterRxg) !== -1) {
      (function parseCL (txt) {
        var pos = txt.search(counterRxg);
        if (pos !== -1) {
          // slice
          result += '\n<' + listType + '>\n' + processListItems(txt.slice(0, pos), !!trimTrailing) + '</' + listType + '>\n';

          // invert counterType and listType
          listType = (listType === 'ul') ? 'ol' : 'ul';
          counterRxg = (listType === 'ul') ? olRgx : ulRgx;

          //recurse
          parseCL(txt.slice(pos));
        } else {
          result += '\n<' + listType + '>\n' + processListItems(txt, !!trimTrailing) + '</' + listType + '>\n';
        }
      })(list);
    } else {
      result = '\n<' + listType + '>\n' + processListItems(list, !!trimTrailing) + '</' + listType + '>\n';
    }

    return result;
  }

  // add sentinel to hack around khtml/safari bug:
  // http://bugs.webkit.org/show_bug.cgi?id=11231
  text += '¨0';

  if (globals.gListLevel) {
    text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
      function (wholeMatch, list, m2) {
        var listType = (m2.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
        return parseConsecutiveLists(list, listType, true);
      }
    );
  } else {
    text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
      function (wholeMatch, m1, list, m3) {
        var listType = (m3.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
        return parseConsecutiveLists(list, listType, false);
      }
    );
  }

  // strip sentinel
  text = text.replace(/¨0/, '');
  text = globals.converter._dispatch('lists.after', text, options, globals);
  return text;
});

/**
 * Remove one level of line-leading tabs or spaces
 */
showdown.subParser('outdent', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('outdent.before', text, options, globals);

  // attacklab: hack around Konqueror 3.5.4 bug:
  // "----------bug".replace(/^-/g,"") == "bug"
  text = text.replace(/^(\t|[ ]{1,4})/gm, '¨0'); // attacklab: g_tab_width

  // attacklab: clean up hack
  text = text.replace(/¨0/g, '');

  text = globals.converter._dispatch('outdent.after', text, options, globals);
  return text;
});

/**
 *
 */
showdown.subParser('paragraphs', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('paragraphs.before', text, options, globals);
  // Strip leading and trailing lines:
  text = text.replace(/^\n+/g, '');
  text = text.replace(/\n+$/g, '');

  var grafs = text.split(/\n{2,}/g),
      grafsOut = [],
      end = grafs.length; // Wrap <p> tags

  for (var i = 0; i < end; i++) {
    var str = grafs[i];
    // if this is an HTML marker, copy it
    if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
      grafsOut.push(str);

    // test for presence of characters to prevent empty lines being parsed
    // as paragraphs (resulting in undesired extra empty paragraphs)
    } else if (str.search(/\S/) >= 0) {
      str = showdown.subParser('spanGamut')(str, options, globals);
      str = str.replace(/^([ \t]*)/g, '<p>');
      str += '</p>';
      grafsOut.push(str);
    }
  }

  /** Unhashify HTML blocks */
  end = grafsOut.length;
  for (i = 0; i < end; i++) {
    var blockText = '',
        grafsOutIt = grafsOut[i],
        codeFlag = false;
    // if this is a marker for an html block...
    // use RegExp.test instead of string.search because of QML bug
    while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
      var delim = RegExp.$1,
          num   = RegExp.$2;

      if (delim === 'K') {
        blockText = globals.gHtmlBlocks[num];
      } else {
        // we need to check if ghBlock is a false positive
        if (codeFlag) {
          // use encoded version of all text
          blockText = showdown.subParser('encodeCode')(globals.ghCodeBlocks[num].text, options, globals);
        } else {
          blockText = globals.ghCodeBlocks[num].codeblock;
        }
      }
      blockText = blockText.replace(/\$/g, '$$$$'); // Escape any dollar signs

      grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
      // Check if grafsOutIt is a pre->code
      if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
        codeFlag = true;
      }
    }
    grafsOut[i] = grafsOutIt;
  }
  text = grafsOut.join('\n');
  // Strip leading and trailing lines:
  text = text.replace(/^\n+/g, '');
  text = text.replace(/\n+$/g, '');
  return globals.converter._dispatch('paragraphs.after', text, options, globals);
});

/**
 * Run extension
 */
showdown.subParser('runExtension', function (ext, text, options, globals) {
  'use strict';

  if (ext.filter) {
    text = ext.filter(text, globals.converter, options);

  } else if (ext.regex) {
    // TODO remove this when old extension loading mechanism is deprecated
    var re = ext.regex;
    if (!(re instanceof RegExp)) {
      re = new RegExp(re, 'g');
    }
    text = text.replace(re, ext.replace);
  }

  return text;
});

/**
 * These are all the transformations that occur *within* block-level
 * tags like paragraphs, headers, and list items.
 */
showdown.subParser('spanGamut', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('spanGamut.before', text, options, globals);
  text = showdown.subParser('codeSpans')(text, options, globals);
  text = showdown.subParser('escapeSpecialCharsWithinTagAttributes')(text, options, globals);
  text = showdown.subParser('encodeBackslashEscapes')(text, options, globals);

  // Process anchor and image tags. Images must come first,
  // because ![foo][f] looks like an anchor.
  text = showdown.subParser('images')(text, options, globals);
  text = showdown.subParser('anchors')(text, options, globals);

  // Make links out of things like `<http://example.com/>`
  // Must come after anchors, because you can use < and >
  // delimiters in inline links like [this](<url>).
  text = showdown.subParser('autoLinks')(text, options, globals);
  text = showdown.subParser('italicsAndBold')(text, options, globals);
  text = showdown.subParser('strikethrough')(text, options, globals);
  text = showdown.subParser('simplifiedAutoLinks')(text, options, globals);

  // we need to hash HTML tags inside spans
  text = showdown.subParser('hashHTMLSpans')(text, options, globals);

  // now we encode amps and angles
  text = showdown.subParser('encodeAmpsAndAngles')(text, options, globals);

  // Do hard breaks
  if (options.simpleLineBreaks) {
    // GFM style hard breaks
    text = text.replace(/\n/g, '<br />\n');
  } else {
    // Vanilla hard breaks
    text = text.replace(/  +\n/g, '<br />\n');
  }

  text = globals.converter._dispatch('spanGamut.after', text, options, globals);
  return text;
});

showdown.subParser('strikethrough', function (text, options, globals) {
  'use strict';

  function parseInside (txt) {
    if (options.simplifiedAutoLink) {
      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
    }
    return '<del>' + txt + '</del>';
  }

  if (options.strikethrough) {
    text = globals.converter._dispatch('strikethrough.before', text, options, globals);
    text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (wm, txt) { return parseInside(txt); });
    text = globals.converter._dispatch('strikethrough.after', text, options, globals);
  }

  return text;
});

/**
 * Strips link definitions from text, stores the URLs and titles in
 * hash references.
 * Link defs are in the form: ^[id]: url "optional title"
 */
showdown.subParser('stripLinkDefinitions', function (text, options, globals) {
  'use strict';

  var regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm;

  // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
  text += '¨0';

  text = text.replace(regex, function (wholeMatch, linkId, url, width, height, blankLines, title) {
    linkId = linkId.toLowerCase();
    globals.gUrls[linkId] = showdown.subParser('encodeAmpsAndAngles')(url, options, globals);  // Link IDs are case-insensitive

    if (blankLines) {
      // Oops, found blank lines, so it's not a title.
      // Put back the parenthetical statement we stole.
      return blankLines + title;

    } else {
      if (title) {
        globals.gTitles[linkId] = title.replace(/"|'/g, '&quot;');
      }
      if (options.parseImgDimensions && width && height) {
        globals.gDimensions[linkId] = {
          width:  width,
          height: height
        };
      }
    }
    // Completely remove the definition from the text
    return '';
  });

  // attacklab: strip sentinel
  text = text.replace(/¨0/, '');

  return text;
});

showdown.subParser('tables', function (text, options, globals) {
  'use strict';

  if (!options.tables) {
    return text;
  }

  var tableRgx = /^ {0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|¨0)/gm;

  function parseStyles (sLine) {
    if (/^:[ \t]*--*$/.test(sLine)) {
      return ' style="text-align:left;"';
    } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
      return ' style="text-align:right;"';
    } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
      return ' style="text-align:center;"';
    } else {
      return '';
    }
  }

  function parseHeaders (header, style) {
    var id = '';
    header = header.trim();
    if (options.tableHeaderId) {
      id = ' id="' + header.replace(/ /g, '_').toLowerCase() + '"';
    }
    header = showdown.subParser('spanGamut')(header, options, globals);

    return '<th' + id + style + '>' + header + '</th>\n';
  }

  function parseCells (cell, style) {
    var subText = showdown.subParser('spanGamut')(cell, options, globals);
    return '<td' + style + '>' + subText + '</td>\n';
  }

  function buildTable (headers, cells) {
    var tb = '<table>\n<thead>\n<tr>\n',
        tblLgn = headers.length;

    for (var i = 0; i < tblLgn; ++i) {
      tb += headers[i];
    }
    tb += '</tr>\n</thead>\n<tbody>\n';

    for (i = 0; i < cells.length; ++i) {
      tb += '<tr>\n';
      for (var ii = 0; ii < tblLgn; ++ii) {
        tb += cells[i][ii];
      }
      tb += '</tr>\n';
    }
    tb += '</tbody>\n</table>\n';
    return tb;
  }

  text = globals.converter._dispatch('tables.before', text, options, globals);

  // find escaped pipe characters
  text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback);

  // parse tables
  text = text.replace(tableRgx, function (rawTable) {

    var i, tableLines = rawTable.split('\n');

    // strip wrong first and last column if wrapped tables are used
    for (i = 0; i < tableLines.length; ++i) {
      if (/^ {0,3}\|/.test(tableLines[i])) {
        tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, '');
      }
      if (/\|[ \t]*$/.test(tableLines[i])) {
        tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, '');
      }
    }

    var rawHeaders = tableLines[0].split('|').map(function (s) { return s.trim();}),
        rawStyles = tableLines[1].split('|').map(function (s) { return s.trim();}),
        rawCells = [],
        headers = [],
        styles = [],
        cells = [];

    tableLines.shift();
    tableLines.shift();

    for (i = 0; i < tableLines.length; ++i) {
      if (tableLines[i].trim() === '') {
        continue;
      }
      rawCells.push(
        tableLines[i]
          .split('|')
          .map(function (s) {
            return s.trim();
          })
      );
    }

    if (rawHeaders.length < rawStyles.length) {
      return rawTable;
    }

    for (i = 0; i < rawStyles.length; ++i) {
      styles.push(parseStyles(rawStyles[i]));
    }

    for (i = 0; i < rawHeaders.length; ++i) {
      if (showdown.helper.isUndefined(styles[i])) {
        styles[i] = '';
      }
      headers.push(parseHeaders(rawHeaders[i], styles[i]));
    }

    for (i = 0; i < rawCells.length; ++i) {
      var row = [];
      for (var ii = 0; ii < headers.length; ++ii) {
        if (showdown.helper.isUndefined(rawCells[i][ii])) {

        }
        row.push(parseCells(rawCells[i][ii], styles[ii]));
      }
      cells.push(row);
    }

    return buildTable(headers, cells);
  });

  text = globals.converter._dispatch('tables.after', text, options, globals);

  return text;
});

/**
 * Swap back in all the special characters we've hidden.
 */
showdown.subParser('unescapeSpecialChars', function (text, options, globals) {
  'use strict';
  text = globals.converter._dispatch('unescapeSpecialChars.before', text, options, globals);

  text = text.replace(/¨E(\d+)E/g, function (wholeMatch, m1) {
    var charCodeToReplace = parseInt(m1);
    return String.fromCharCode(charCodeToReplace);
  });

  text = globals.converter._dispatch('unescapeSpecialChars.after', text, options, globals);
  return text;
});

var root = this;

// CommonJS/nodeJS Loader
if (typeof module !== 'undefined' && module.exports) {
  module.exports = showdown;

// AMD Loader
} else if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    'use strict';
    return showdown;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

// Regular Browser loader
} else {
  root.showdown = showdown;
}
}).call(this);

//# sourceMappingURL=showdown.js.map


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Data__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return __WEBPACK_IMPORTED_MODULE_0__Data__["a"]; });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQyJ9

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DataFilters__ = __webpack_require__(66);

;
class Data {
    constructor(data) {
        this.data = [];
        this.meta = [];
        this.import(data);
    }
    static toDataSet(data, name) {
        data = data || [{}];
        const names = Object.keys(data[0]);
        const rows = data.map((r) => names.map((n) => r[n]));
        return { rows: rows, colNames: names, name: name || undefined };
    }
    getName() {
        return this.name;
    }
    import(data) {
        this.name = data.name;
        this.setData(data.rows, data.colNames);
    }
    export() {
        return {
            rows: this.getData(),
            colNames: this.colNames()
        };
    }
    getData() {
        return this.data;
    }
    getColumn(col) {
        const cn = this.colNumber(col);
        return this.data.map((row) => row[cn]);
    }
    colAdd(col) {
        let m = this.getMeta(col);
        if (m === undefined) {
            m = this.meta[col] = {};
            m.name = col;
            m.column = this.meta.length;
            this.meta.push(m);
            m.cast = false;
            m.accessed = false;
        }
        return m.column;
    }
    colInitialize(col, initializer) {
        const cn = this.colNumber(col);
        if (!cn && typeof col === 'string') {
            this.colAdd(col);
        }
        const fn = typeof initializer === 'function';
        if (cn !== undefined) {
            this.data.map((r, i) => r[cn] = fn ? initializer(r[cn], i, r) : initializer);
        }
    }
    colNumber(col) {
        const m = this.getMeta(col);
        if (!m) {
            return undefined;
        }
        else {
            m.accessed = true;
            return m.column;
        }
    }
    colName(col) {
        var m = this.getMeta(col);
        if (!m) {
            return undefined;
        }
        m.accessed = true;
        return m.name;
    }
    colNames() {
        return this.meta.map((m) => m.name);
    }
    colType(col) {
        const meta = this.getMeta(col);
        return meta ? meta.types[0].type : Data.type.name;
    }
    findDomain(col, domain) {
        if (col === undefined) {
            domain[0] = 0;
            domain[1] = this.data.length - 1;
        }
        else {
            const c = this.colNumber(col);
            const type = this.colType(col);
            if (this.data === undefined) {
                console.log('no data');
            }
            switch (type) {
                case Data.type.nominal:
                    this.data.forEach((r) => {
                        const nomDom = domain;
                        if (nomDom.indexOf('' + r[c]) < 0) {
                            nomDom.push('' + r[c]);
                        }
                    });
                    break;
                default:
                    this.data.forEach((r) => {
                        let v = r[c];
                        if (v !== undefined && v !== null) {
                            domain[0] = (v < domain[0]) ? v : domain[0];
                            domain[1] = (v > domain[1]) ? v : domain[1];
                        }
                    });
            }
        }
    }
    castData() {
        this.meta.forEach((c) => {
            const col = c.column;
            if (!c.cast) {
                this.data.forEach((row) => row[col] = this.castVal(c.types[0].type, row[col]));
            }
            c.cast = true;
        });
    }
    filter(condition) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__DataFilters__["a" /* filter */])(this, condition);
    }
    sort(sortFn, col) {
        let fn = sortFn;
        if (!col) {
            this.data.sort(fn);
        }
        else {
            col = this.colNumber(col);
            if (sortFn === 'descending') {
                fn = (a, b) => (b > a) ? 1 : ((b < a) ? -1 : 0);
            }
            if (sortFn === 'ascending') {
                fn = (a, b) => (b < a) ? 1 : ((b > a) ? -1 : 0);
            }
            this.data.sort((r1, r2) => fn(r1[col], r2[col]));
        }
        return this;
    }
    map(col, mapFn) {
        const noop = (val) => val;
        const cumulate = () => {
            let sum = 0;
            return (val, i) => { sum += +val; return sum; };
        };
        function getFn() {
            let fn;
            switch (mapFn) {
                case 'cumulate':
                    fn = cumulate();
                    break;
                case 'noop':
                    fn = noop;
                    break;
                default: fn = mapFn;
            }
            return fn;
        }
        let result = new Data({ colNames: this.colNames(), rows: this.data.slice(), name: this.getName() });
        const names = col['length'] ? col : [col];
        names.map((cn) => {
            const c = this.colNumber(cn);
            let fn = getFn();
            result.data = result.data.map((row, i, rows) => {
                row[c] = fn(row[c], c, i, rows);
                return row;
            });
        });
        return result;
    }
    getMeta(col) {
        if (!this.meta) {
            this.meta = [];
        }
        if (!this.meta[col]) {
            return undefined;
        }
        this.meta[col].accessed = true;
        return this.meta[col];
    }
    setData(data, names, autoType = true) {
        this.meta = [];
        this.data = data;
        if (!names) {
            console.log();
        }
        names.forEach((col) => this.colAdd(col));
        names.forEach((col) => this.findTypes(col));
        this.castData();
    }
    findTypes(col) {
        const m = this.getMeta(col);
        const types = [];
        Object.keys(Data.type).forEach((t) => {
            const ts = { type: Data.type[t], count: 0 };
            types.push(ts);
            types[Data.type[t]] = ts;
        });
        for (let v of this.allRows(col)) {
            const t = this.findType(v);
            if (t !== null) {
                types[t].count++;
            }
        }
        types.sort(function (a, b) {
            if (a.type === 'currency' && a.count > 0) {
                return -1;
            }
            if (b.type === 'currency' && b.count > 0) {
                return 1;
            }
            return b.count - a.count;
        });
        m.types = types;
        return types[0].type;
    }
    findType(val) {
        if (val && val !== '') {
            if (val instanceof Date) {
                return Data.type.date;
            }
            if (typeof val === 'number') {
                return Data.type.number;
            }
            const strVal = '' + val;
            if ('' + parseFloat(strVal) === strVal) {
                return Data.type.number;
            }
            if (strVal.startsWith('$') && !isNaN(parseFloat(strVal.slice(1)))) {
                return Data.type.currency;
            }
            if (strVal.endsWith('%') && !isNaN(parseFloat(strVal))) {
                return Data.type.percent;
            }
            if (!isNaN(this.toDate(strVal).getTime())) {
                return Data.type.date;
            }
            if ((/^\$\d{0,2}((,\d\d\d)*)/g).test(val)) {
                if (!isNaN(parseFloat(val.trim().replace(/[^eE\+\-\.\d]/g, '').replace(/,/g, '')))) {
                    return Data.type.currency;
                }
            }
            switch (strVal.toLowerCase()) {
                case "null": break;
                case "#ref!": break;
                default: if (val.length > 0) {
                    return Data.type.nominal;
                }
            }
        }
        return null;
    }
    *allRows(column) {
        const c = this.colNumber(column);
        for (let r = 0; r < this.data.length; r++) {
            yield this.data[r][c];
        }
    }
    toDate(val, limitYear = 1970) {
        let d;
        if (val instanceof Date) {
            d = val;
        }
        else {
            d = new Date(val);
        }
        let yr = d.getFullYear();
        if (yr < 100) {
            yr += 1900;
            d.setFullYear((yr < limitYear) ? yr + 100 : yr);
        }
        return d;
    }
    castVal(type, val) {
        switch (type) {
            case Data.type.date:
                if (val instanceof Date) {
                    return val;
                }
                val = this.toDate(val);
                if (isNaN(val.getTime())) {
                    val = null;
                }
                break;
            case Data.type.percent:
                if (typeof val === 'string') {
                    const num = parseFloat(val);
                    val = val.endsWith('%') ? num / 100 : num;
                }
                if (isNaN(val)) {
                    val = null;
                }
                break;
            case Data.type.currency:
                if (typeof val === 'string') {
                    val = val.replace(/[^eE\+\-\.\d]/g, '');
                }
            case Data.type.number:
                if (typeof val === 'string') {
                    val = parseFloat(val);
                }
                if (isNaN(val)) {
                    val = null;
                }
                break;
            default: val = '' + val;
        }
        return val;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Data;

Data.type = {
    number: 'number data',
    name: 'name data',
    date: 'date data',
    currency: 'currency data',
    percent: 'percent data',
    nominal: 'nominal data'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE9BQU8sRUFBYSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUF1Q0UsQ0FBQztBQWtCckQsTUFBTTtJQXFCRixZQUFZLElBQWE7UUEwU2pCLFNBQUksR0FBaUIsRUFBRSxDQUFDO1FBQ3hCLFNBQUksR0FBaUIsRUFBRSxDQUFDO1FBMVM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFWTSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQW1CLEVBQUUsSUFBWTtRQUNyRCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBSyxFQUFFLEVBQUUsQ0FDNUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxPQUFPLEVBQUUsSUFBSSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxJQUFJLElBQUUsU0FBUyxFQUFFLENBQUM7SUFDL0QsQ0FBQztJQVNNLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQU1NLE1BQU0sQ0FBQyxJQUFZO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFLTSxN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

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Axes__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hsutil__ = __webpack_require__(2);


function addTickNumber(t, v) {
    t.labels.push({ pos: v, text: '' + Math.round(v * 1000000) / 1000000 });
}
function addTickDate(t, v, fmt) {
    t.labels.push({ pos: v.getTime(), text: Object(__WEBPACK_IMPORTED_MODULE_1_hsutil__["date"])(fmt, v) });
}
function linScaleTickMarks(dom, ticks, numTicks) {
    function addTicks(unit, ticks) {
        let exp = Math.pow(10, Math.floor(Math.log10(unit)));
        unit = Math.floor(unit / exp) * exp;
        const min = Math.floor(dom[0] / unit) * unit;
        const max = Math.ceil(dom[1] / unit) * unit;
        for (let v = min; v <= max; v += unit) {
            addTickNumber(ticks, v);
        }
        return unit;
    }
    const majorUnit = addTicks((dom[1] - dom[0]) / numTicks, ticks.major);
    addTicks(majorUnit / numTicks, ticks.minor);
}
function percentScaleTickMarks(dom, ticks, numTicks) {
    const formatPercent = (m) => m.text = `${Math.round(m.pos) * 100}%`;
    linScaleTickMarks(dom, ticks, numTicks);
    ticks.major.labels.forEach(formatPercent);
    ticks.minor.labels.forEach(formatPercent);
}
function logScaleTickMarks(dom, ticks) {
    dom[0] = Math.max(dom[0], 1e-20);
    dom[1] = Math.max(dom[1], 1e-20);
    let dif = Math.pow(10, Math.floor(Math.log10(dom[1] - dom[0])));
    let min = Math.pow(10, Math.floor(Math.log10(dom[0])));
    let max = Math.pow(10, Math.ceil(Math.log10(dom[1])));
    if (dif > min) {
        for (let v = min; v <= max; v *= 10) {
            for (let i = 1; i <= 20; i++) {
                if (i === 1 && v * i < max) {
                    addTickNumber(ticks.major, v * i);
                }
                else if (i % 10 === 0) { }
                else if (i < 10) {
                    addTickNumber(ticks.minor, v * i);
                }
                else if (i % 2 === 0) {
                    addTickNumber(ticks.minor, v * i);
                }
            }
        }
    }
    else {
        min = Math.floor(dom[0] / dif) * dif;
        max = Math.ceil(dom[1] / dif) * dif;
        if ((max - min) / dif < 4) {
            dif /= 2;
        }
        for (let v = min; v <= max; v += dif) {
            addTickNumber(ticks.major, v);
        }
        addTickNumber(ticks.major, min);
        addTickNumber(ticks.major, max);
    }
}
const tickCategories = [
    [10, 0, 0, 0], [5, 0, 0, 0], [2, 0, 0, 0], [1, 0, 0, 0], [0, 6, 0, 0], [0, 3, 0, 0], [0, 1, 0, 0], [0, 0, 7, 0], [0, 0, 1, 0], [0, 0, 0, 4], [0, 0, 0, 1]
];
function dateScaleTickMarks(dom, ticks, fmt = '%MM/%DD/%YY') {
    function addDates(i, tickDefs) {
        const createDate = (idx) => new Date(Math.floor(dateDom[idx].getFullYear() / modYr) * modYr + (idx ? incYr : 0), (incYr > 0) ? 0 : Math.floor(dateDom[idx].getMonth() / modMo) * modMo + (idx ? incMo : 0), (incMo > 0) ? 1 : (dateDom[idx].getDate() - ((incDay === 7) ? dateDom[idx].getDay() : 0)) + (idx ? incDay : 0), (incDay > 0) ? 0 : (dateDom[idx].getHours()) + (idx ? incHour : 0));
        const incYr = tickCategories[i][0];
        const incMo = tickCategories[i][1];
        const incDay = tickCategories[i][2];
        const incHour = tickCategories[i][3];
        const modYr = incYr || 1;
        const modMo = incMo || 1;
        const date0 = createDate(0);
        const date1 = createDate(1);
        fmt = incHour ? '%hh:%mm' : '%MM/%DD/%YY';
        for (let d = date0; d <= date1; d = new Date(d.getFullYear() + incYr, d.getMonth() + incMo, d.getDate() + incDay, d.getHours() + incHour)) {
            addTickDate(tickDefs, d, fmt);
        }
    }
    const dateDom = [
        (typeof dom[0] === 'number') ? new Date(dom[0]) : dom[0],
        (typeof dom[1] === 'number') ? new Date(dom[1]) : dom[1]
    ];
    if (isNaN(dateDom[0].getTime())) {
        dateDom[0] = new Date('1/1/1980');
    }
    if (isNaN(dateDom[1].getTime())) {
        dateDom[0] = new Date();
    }
    const d = dateDom[1].getTime() - dateDom[0].getTime();
    tickCategories.some((cat, i) => {
        const dMin = __WEBPACK_IMPORTED_MODULE_1_hsutil__["ms"].fromDays((cat[0] * 365 + cat[1] * 30 + cat[2])) + __WEBPACK_IMPORTED_MODULE_1_hsutil__["ms"].fromHours(cat[3]);
        if (d > 3 * dMin) {
            addDates(i, ticks.major);
            addDates(Math.min(i + 1, tickCategories.length - 1), ticks.minor);
            return true;
        }
        else {
            return false;
        }
    });
}
function createTickLabels(type, domain, numTicks, fmt) {
    const sort = (a, b) => a.pos - b.pos;
    function sortTicks() {
        ticks.minor.labels.sort(sort);
        ticks.major.labels.sort(sort);
    }
    ;
    const dom = [domain[0], domain[1]];
    const ticks = {
        major: { marks: [], labels: [] },
        minor: { marks: [], labels: [] }
    };
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.log:
            logScaleTickMarks(dom, ticks);
            sortTicks();
            break;
        case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.date:
            dateScaleTickMarks(dom, ticks, fmt);
            sortTicks();
            break;
        case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.percent:
            percentScaleTickMarks(dom, ticks, numTicks);
            sortTicks();
            break;
        case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.ordinal: break;
        case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.nominal: break;
        case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.index:
        case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.linear:
        default:
            linScaleTickMarks(dom, ticks, numTicks);
            sortTicks();
    }
    return ticks;
}
class Scale {
    constructor(cfg) {
        this.cfg = cfg;
        this.typeVal = __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.linear;
        this.rangeVal = [0, 1];
        this.domVal = [0, 1];
        this.domMinAuto = 0;
        this.domMaxAuto = 0;
        this.scaleType(cfg.type);
        this.domain(cfg.domain);
    }
    setLabelFormat(labelFmt) {
        this.labelFmt = labelFmt;
    }
    range(r) {
        if (r) {
            this.rangeVal = r;
        }
        return this.rangeVal;
    }
    domain(dom) {
        if (dom) {
            if (this.scaleType() === __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.date) {
                if (typeof dom[0] === 'string' || typeof dom[1] === 'string') {
                    this.domVal[0] = (dom[0] === 'auto') ? 0 : Date.parse(dom[0]);
                    this.domVal[1] = (dom[1] === 'auto') ? 1 : Date.parse(dom[1]);
                }
            }
            else {
                this.domVal[0] = (dom[0] === 'auto') ? 0 : dom[0];
                this.domVal[1] = (dom[1] === 'auto') ? 1 : dom[1];
            }
            switch (dom[0]) {
                case 'tight':
                    this.domMinAuto = 2;
                    break;
                case 'auto':
                    this.domMinAuto = 1;
                    break;
                default: this.domMinAuto = 0;
            }
            switch (dom[1]) {
                case 'tight':
                    this.domMaxAuto = 2;
                    break;
                case 'auto':
                    this.domMaxAuto = 1;
                    break;
                default: this.domMaxAuto = 0;
            }
        }
        if (this.typeVal === __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.log) {
            if (this.domVal[1] <= 0) {
                this.domVal[1] = 10;
            }
            if (this.domVal[0] <= 0) {
                this.domVal[0] = this.domVal[1] / 10;
            }
        }
        return this.domVal;
    }
    scaleType(s) {
        if (s) {
            this.typeVal = s;
        }
        return this.typeVal;
    }
    setAutoDomain(dom) {
        const ticks = createTickLabels(this.scaleType(), dom, 4, this.labelFmt);
        switch (this.domMinAuto) {
            case 1:
                this.domVal[0] = ticks.major.labels[0] ? ticks.major.labels[0].pos : dom[0];
                break;
            case 2:
                this.domVal[0] = dom[0];
                break;
        }
        switch (this.domMaxAuto) {
            case 1:
                this.domVal[1] = ticks.major.labels[ticks.major.labels.length - 1].pos;
                break;
            case 2:
                this.domVal[1] = dom[1];
                break;
        }
    }
    ticks(numTicks = 4) {
        function marksFromLabels(ticks, type) {
            switch (type) {
                case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.nominal:
                case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.index:
                    const numLabels = ticks.major.labels.length;
                    ticks.major.marks = Array(numLabels + 1).fill(1).map((e, i) => i - 0.5);
                    ticks.minor.marks = ticks.minor.labels ? ticks.minor.labels.map((l) => l.pos) : [];
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.log:
                case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.date:
                case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.percent:
                case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.ordinal:
                case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.linear:
                default:
                    ticks.major.marks = ticks.major.labels ? ticks.major.labels.map((l) => l.pos) : [];
                    ticks.minor.marks = ticks.minor.labels ? ticks.minor.labels.map((l) => l.pos) : [];
            }
        }
        const dom = [this.domain()[0], this.domain()[1]];
        const inRange = (t) => t.pos >= dom[0] && t.pos <= dom[1];
        const ticks = createTickLabels(this.scaleType(), this.domain(), numTicks, this.labelFmt);
        ticks.minor.labels = ticks.minor.labels.filter(inRange);
        ticks.major.labels = ticks.major.labels.filter(inRange);
        if (ticks.major.labels.length === 0) {
            ticks.major.labels = ticks.minor.labels;
            ticks.minor.labels = [];
        }
        marksFromLabels(ticks, this.scaleType());
        return ticks;
    }
    convert(domVal) {
        const dom = this.domain();
        const range = this.range();
        const domMin = dom[0];
        const domMax = dom[1];
        let result;
        switch (this.scaleType()) {
            case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.log:
                result = Math.log(domVal / domMin) / Math.log(domMax / domMin) * (range[1] - range[0]) + range[0];
                break;
            case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.nominal: break;
            case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.date:
            case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.percent:
            case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.index:
            case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.ordinal:
            case __WEBPACK_IMPORTED_MODULE_0__Axes__["a" /* Axes */].type.linear:
            default:
                result = (domVal - domMin) / (domMax - domMin) * (range[1] - range[0]) + range[0];
        }
        return result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scale;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NhbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvU2NhbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFjLFFBQVEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFVLFFBQVEsQ0FBQztBQU90Qyx1QkFBdUIsQ0FBVSxFQUFFLENBQVE7SUFDdkMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUMsT0FBTyxDQUFDLEdBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBRUQscUJBQXFCLENBQVUsRUFBRSxDQUFNLEVBQUUsR0FBVTtJQUMvQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzNELENBQUM7QUFJRCwyQkFBMkIsR0FBWSxFQUFFLEtBQVcsRUFBRSxRQUFlO0lBQ2pFLGtCQUFrQixJQUFXLEVBQUUsS0FBYztRQUN6QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBQyxHQUFHLENBQUM7UUFDbEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEdBQUMsSUFBSSxDQUFDO1FBQ3pDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxHQUFDLElBQUksQ0FBQztRQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFDLEdBQUcsRUFBRSxDQUFDLElBQUUsR0FBRyxFQUFFLENBQUMsSUFBRSxJQUFJLEVBQUU7WUFBRSxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDN0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RFLFFBQVEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBRUQsK0JBQStCLEdBQVksRUFBRSxLQUFXLEVBQUUsUUFBZTtJQUNyRSxNQUFNLGFBQWEsR0FBRyxDQUFDLENBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzVFLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUU5QyxDQUFDO0FBRUQsMkJBQTJCLEdBQVksRUFBRSxLQUFXO0lBQ2hELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtRQUNYLEtBQUssSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFFLEVBQUUsRUFBRTtZQUM3QixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLElBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN0QixJQUFJLENBQUMsS0FBRyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsR0FBQyxHQUFHLEVBQUU7b0JBQUUsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUFFO3FCQUNyRCxJQUFJLENBQUMsR0FBQyxFQUFFLEtBQUcsQ0FBQyxFQUFFLEdBQUU7cUJBQ2hCLElBQUksQ0FBQyxHQUFDLEVB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

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SVGElem__ = __webpack_require__(1);


class Grid extends __WEBPACK_IMPORTED_MODULE_1__SVGElem__["a" /* SVGElem */] {
    static defaultConfig(cfg) {
        cfg.grid = {
            major: {
                hor: { visible: true },
                ver: { visible: true }
            },
            minor: {
                hor: { visible: false },
                ver: { visible: false }
            }
        };
    }
    static adjustConfig(cfg) {
    }
    drawHorGrid(cfg, scale, range, ticks) {
        return !cfg.visible ? Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg') : Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg', { class: 'hs-graph-grid-hor' }, ticks.marks.map((t) => this.horLine(range[0], range[1], scale.convert(t))));
    }
    drawVerGrid(cfg, scale, range, ticks) {
        return !cfg.visible ? Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg') : Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg', { class: 'hs-graph-grid-ver' }, ticks.marks.map((t) => this.verLine(scale.convert(t), range[0], range[1])));
    }
    view(node) {
        const cfg = node.attrs.cfg;
        const scales = node.attrs.scales;
        const ps = scales.primary;
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg', { class: 'hs-graph-grid' }, [
            Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg', { class: 'hs-graph-grid-minor' }, [
                this.drawHorGrid(cfg.minor.hor, ps.y, ps.x.range(), ps.y.ticks().minor),
                this.drawVerGrid(cfg.minor.ver, ps.x, ps.y.range(), ps.x.ticks().minor)
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg', { class: 'hs-graph-grid-major' }, [
                this.drawHorGrid(cfg.major.hor, ps.y, ps.x.range(), ps.y.ticks().major),
                this.drawVerGrid(cfg.major.ver, ps.x, ps.y.range(), ps.x.ticks().major)
            ])
        ]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Grid;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HcmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQSxPQUFPLEVBQUUsQ0FBQyxFQUFRLE1BQVcsVUFBVSxDQUFDO0FBR3hDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBVyxXQUFXLENBQUM7QUF5QnpDLE1BQU0sV0FBWSxTQUFRLE9BQU87SUFxQjdCLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBVTtRQUMzQixHQUFHLENBQUMsSUFBSSxHQUFnQjtZQUNwQixLQUFLLEVBQUU7Z0JBQ0gsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFDLElBQUksRUFBRTtnQkFDckIsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFDLElBQUksRUFBRTthQUN4QjtZQUNELEtBQUssRUFBRTtnQkFDSCxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUMsS0FBSyxFQUFFO2dCQUN0QixHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUMsS0FBSyxFQUFFO2FBQ3pCO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFNRCxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQVU7SUFDOUIsQ0FBQztJQUtPLFdBQVcsQ0FBQyxHQUFxQixFQUFFLEtBQVcsRUFBRSxLQUFjLEVBQUUsS0FBYztRQUNsRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFDLG1CQUFtQixFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUMxRixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNyRCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBS08sV0FBVyxDQUFDLEdBQXFCLEVBQUUsS0FBVyxFQUFFLEtBQWMsRUFBRSxLQUFjO1FBQ2xGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUMsbUJBQW1CLEVBQUUsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQzFGLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3JELENBQUMsQ0FBQztJQUNQLENBQUM7SUFHRCxJQUFJLENBQUMsSUFBWTtRQUNiLE1BQU0sR0FBRyxHQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLE1BQU0sTUFBTSxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3hDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDMUIsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFDLGVBQWUsRUFBQyxFQUFFO1lBQ3RDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUMscUJBQXFCLEVBQUUsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDO2FBQzFFLENBQUM7WUFDRixDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFDLHFCQUFxQixFQUFFLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUN2RSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQzthQUMxRSxDQUFDO1NBQ0wsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKIn0=

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);

;
class Legend {
    static defaultConfig(cfg) {
        cfg.legend = {};
    }
    static adjustConfig(cfg) {
    }
    view(node) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg', { class: 'hs-graph-legend', width: '100%', height: '100%' });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Legend;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGVnZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0xlZ2VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkEsT0FBTyxFQUFFLENBQUMsRUFBUSxNQUFPLFVBQVUsQ0FBQztBQU9uQyxDQUFDO0FBRUYsTUFBTTtJQWFGLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBVTtRQUMzQixHQUFHLENBQUMsTUFBTSxHQUFpQixFQUMxQixDQUFDO0lBQ04sQ0FBQztJQU1ELE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBVTtJQUU5QixDQUFDO0lBRUQsSUFBSSxDQUFDLElBQVk7UUFDYixPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUMsaUJBQWlCLEVBQUUsS0FBSyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0NBQ0oifQ==

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Site__ = __webpack_require__(28);

Object(__WEBPACK_IMPORTED_MODULE_0__Site__["a" /* init */])();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUU5QixJQUFJLEVBQUUsQ0FBQyJ9

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = init;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_DocsMenu__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_LeftNav__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_MainDetail__ = __webpack_require__(54);




const TitleHeight = '30px';
const FooterHeight = '10px';
const LeftNavWidth = '200px';
const SiteName = 'HSDocs';
const myConfig = {
    Layout: {
        rows: [TitleHeight, "fill", FooterHeight],
        css: '.hs-site',
        content: [{
                Layout: {
                    columns: [LeftNavWidth, "fill"],
                    css: '.hs-site-header',
                    content: [
                        { Layout: {
                                css: '.hs-site-title',
                                content: SiteName,
                                href: '/api/'
                            } },
                        { DocsMenu: { docSet: "./data/index.json" } }
                    ]
                }
            }, {
                Layout: {
                    columns: [LeftNavWidth, "fill"],
                    content: [
                        { LeftNav: {} },
                        { MainDetail: {} }
                    ]
                }
            },
            { Layout: {
                    css: '.hs-site-footer',
                    content: '(c) Helpful Scripts'
                } }
        ]
    },
    route: {
        default: '/api',
        paths: [
            '/api',
            '/api/:lib',
            '/api/:lib/:field'
        ]
    }
};
function init() {
    new __WEBPACK_IMPORTED_MODULE_0_hslayout__["HsConfig"]([__WEBPACK_IMPORTED_MODULE_0_hslayout__, __WEBPACK_IMPORTED_MODULE_1__view_DocsMenu__, __WEBPACK_IMPORTED_MODULE_2__view_LeftNav__, __WEBPACK_IMPORTED_MODULE_3__view_MainDetail__]).attachNodeTree(myConfig, document.body);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2l0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TaXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLE9BQU8sS0FBSyxRQUFRLE1BQU8sVUFBVSxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxNQUFNLE1BQU8saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxLQUFLLElBQUksTUFBUyxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEtBQUssSUFBSSxNQUFTLG1CQUFtQixDQUFDO0FBRzdDLE1BQU0sV0FBVyxHQUFLLE1BQU0sQ0FBQztBQUM3QixNQUFNLFlBQVksR0FBSSxNQUFNLENBQUM7QUFDN0IsTUFBTSxZQUFZLEdBQUksT0FBTyxDQUFDO0FBQzlCLE1BQU0sUUFBUSxHQUFRLFFBQVEsQ0FBQztBQUUvQixNQUFNLFFBQVEsR0FBRztJQUNiLE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDO1FBQzFDLEdBQUcsRUFBRSxVQUFVO1FBQ2YsT0FBTyxFQUFFLENBQUM7Z0JBQ04sTUFBTSxFQUFDO29CQUNILE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7b0JBQy9CLEdBQUcsRUFBRSxpQkFBaUI7b0JBQ3RCLE9BQU8sRUFBRTt3QkFDTCxFQUFFLE1BQU0sRUFBSztnQ0FDVCxHQUFHLEVBQUUsZ0JBQWdCO2dDQUNyQixPQUFPLEVBQUUsUUFBUTtnQ0FDakIsSUFBSSxFQUFDLE9BQU87NkJBQ2YsRUFBQzt3QkFDRixFQUFFLFFBQVEsRUFBSyxFQUFFLE1BQU0sRUFBQyxtQkFBbUIsRUFBQyxFQUFDO3FCQUNoRDtpQkFDSjthQUFDLEVBQUM7Z0JBQ0gsTUFBTSxFQUFDO29CQUNILE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7b0JBQy9CLE9BQU8sRUFBRTt3QkFDTCxFQUFFLE9BQU8sRUFBSyxFQUFFLEVBQUM7d0JBQ2pCLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBQztxQkFDcEI7aUJBQ0o7YUFBQztZQUNGLEVBQUUsTUFBTSxFQUFFO29CQUNOLEdBQUcsRUFBRSxpQkFBaUI7b0JBQ3RCLE9BQU8sRUFBRSxxQkFBcUI7aUJBQ2pDLEVBQUM7U0FDTDtLQUNKO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsT0FBTyxFQUFFLE1BQU07UUFDZixLQUFLLEVBQUU7WUFDSCxNQUFNO1lBQ04sV0FBVztZQUNYLGtCQUFrQjtTQUNyQjtLQUNKO0NBQ0osQ0FBQztBQUdGLE1BQU07SUFDRixJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xHLENBQUMifQ==

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Layouter__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tokens__ = __webpack_require__(5);


const PillarLayouts = [
    'columns', 'rows'
];
/* harmony export (immutable) */ __webpack_exports__["PillarLayouts"] = PillarLayouts;

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
class PillarLayouter extends __WEBPACK_IMPORTED_MODULE_0__Layouter__["a" /* Layouter */] {
    constructor(params, areaDesc) {
        super(areaDesc);
        this.areaDesc = areaDesc;
        this.fields = params.fields;
        this.cssClass = params.cssClass;
        let n = areaDesc.length - 1;
        let first = 0;
        let last = 0;
        this.unit = areaDesc.some((area) => (area instanceof __WEBPACK_IMPORTED_MODULE_1__Tokens__["e" /* PixelToken */])) ?
            this.unitPixel : this.unitPercent;
        areaDesc.some((area, i) => ((areaDesc[i] instanceof __WEBPACK_IMPORTED_MODULE_1__Tokens__["a" /* DefinedToken */]) ? ++first < 0 : true));
        areaDesc.some((area, i) => ((areaDesc[n - i] instanceof __WEBPACK_IMPORTED_MODULE_1__Tokens__["a" /* DefinedToken */]) ? ++last < 0 : true));
        this.firstFixed = first;
        this.lastFixed = Math.min(last, areaDesc.length - first);
    }
    ;
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
    ;
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
    ;
    getStyles(components) {
        let f = this.fields;
        let styles = this.unit(components.length);
        components.map((c, i) => {
            c.style = `${f[0]}:0%; ${f[1]}:0%; `;
            Object.keys(styles[i].fields).forEach((st) => { c.style += `${st}: ${styles[i].fields[st]};`; });
        });
        return this.cssClass;
    }
    ;
}
;
class Columns extends PillarLayouter {
    constructor(areaDesc) {
        super(cParams[PillarLayouts[0]], areaDesc);
        this.areaDesc = areaDesc;
    }
    ;
}
;
class Rows extends PillarLayouter {
    constructor(areaDesc) {
        super(cParams[PillarLayouts[1]], areaDesc);
        this.areaDesc = areaDesc;
    }
    ;
}
;
__WEBPACK_IMPORTED_MODULE_0__Layouter__["a" /* Layouter */].register(PillarLayouts[0], Columns);
__WEBPACK_IMPORTED_MODULE_0__Layouter__["a" /* Layouter */].register(PillarLayouts[1], Rows);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlsbGFyZWRMYXlvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L1BpbGxhcmVkTGF5b3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBWSxZQUFZLENBQUM7QUFDNUMsT0FBTyxFQUFlLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBUyxVQUFVLENBQUM7QUFnQnBFLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRztJQUN6QixTQUFTLEVBQUUsTUFBTTtDQUNwQixDQUFDO0FBS0YsTUFBTSxPQUFPLEdBQUc7SUFDWixPQUFPLEVBQWdCO1FBQ25CLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7S0FDaEU7SUFDRCxJQUFJLEVBQWdCO1FBQ2hCLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7S0FDaEU7Q0FDSixDQUFDO0FBT0Ysb0JBQThCLFNBQVEsUUFBUTtJQWExQyxZQUFZLE1BQW1CLEVBQVMsUUFBc0I7UUFDMUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRG9CLGFBQVEsR0FBUixRQUFRLENBQWM7UUFFMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUVoQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLElBQUksR0FBSSxDQUFDLENBQUM7UUFFZCxJQUFJLENBQUMsSUFB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

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Layouter__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tokens__ = __webpack_require__(5);


class Tiles extends __WEBPACK_IMPORTED_MODULE_0__Layouter__["a" /* Layouter */] {
    constructor(areaDesc) {
        super(areaDesc);
        this.areaDesc = areaDesc;
        this.unit = areaDesc.some((area) => (area instanceof __WEBPACK_IMPORTED_MODULE_1__Tokens__["e" /* PixelToken */])) ?
            this.unitPixel : this.unitPercent;
    }
    ;
    unitPercent(num) {
        const desc = this.areaDesc;
        const fill = this.areaDesc.some(a => (a instanceof __WEBPACK_IMPORTED_MODULE_1__Tokens__["c" /* FillToken */]));
        const root = Math.sqrt(num);
        const rows = Math.round(root);
        let cols = Math.floor(root);
        if (root > cols) {
            cols++;
        }
        let width = (desc[0] instanceof __WEBPACK_IMPORTED_MODULE_1__Tokens__["a" /* DefinedToken */]) ? desc[0].getSize() : undefined;
        let height = (desc[1] instanceof __WEBPACK_IMPORTED_MODULE_1__Tokens__["a" /* DefinedToken */]) ? desc[1].getSize() : width;
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
    ;
    unitPixel(num) {
        const desc = this.areaDesc;
        const root = Math.sqrt(num);
        const rows = Math.round(root);
        let cols = Math.floor(root);
        if (root > cols) {
            cols++;
        }
        let width = (desc[0] instanceof __WEBPACK_IMPORTED_MODULE_1__Tokens__["a" /* DefinedToken */]) ? desc[0].getSize() : undefined;
        let height = (desc[1] instanceof __WEBPACK_IMPORTED_MODULE_1__Tokens__["a" /* DefinedToken */]) ? desc[1].getSize() : width;
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
    ;
    getStyles(components) {
        let styles = this.unit(components.length);
        components.map((c, i) => {
            c.style = styles[i];
        });
        return '.hs-tile-layout';
    }
    ;
}
;
__WEBPACK_IMPORTED_MODULE_0__Layouter__["a" /* Layouter */].register('tiles', Tiles);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlsZUxheW91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZpZXcvVGlsZUxheW91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQVksWUFBWSxDQUFDO0FBQzVDLE9BQU8sRUFBZSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFTLFVBQVUsQ0FBQztBQU8vRSxXQUFZLFNBQVEsUUFBUTtJQVF4QixZQUFtQixRQUFzQjtRQUNyQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFERCxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBSXJDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUMxRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFDLENBQUM7SUFBQSxDQUFDO0lBRU0sV0FBVyxDQUFDLEdBQVU7UUFDMUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMzQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFO1lBQUUsSUFBSSxFQUFFLENBQUM7U0FB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

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mithril__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layouter__ = __webpack_require__(4);


class Layout {
    getComponents(node) {
        return !Array.isArray(node.attrs.content) ? node.attrs.content :
            node.attrs.content.map((c) => {
                if (c.compClass) {
                    c.attrs.route = node.attrs.route;
                    return Object(__WEBPACK_IMPORTED_MODULE_0__mithril__["a" /* m */])(c.compClass, c.attrs);
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
            return [Object(__WEBPACK_IMPORTED_MODULE_0__mithril__["a" /* m */])('.hs-leaf', __WEBPACK_IMPORTED_MODULE_0__mithril__["a" /* m */].trust(components))];
        }
        if (components.length > 0) {
            return components.map((comp) => (comp instanceof Layout) ? comp : Object(__WEBPACK_IMPORTED_MODULE_0__mithril__["a" /* m */])(Layout, { content: comp }));
        }
        return [components];
    }
    view(node) {
        const content = this.normalizeContent(this.getComponents(node));
        let css = __WEBPACK_IMPORTED_MODULE_1__Layouter__["a" /* Layouter */].createLayout(node.attrs, content);
        const attrs = {
            style: node.style,
            route: node.attrs.route,
            onclick: node.attrs.onclick
        };
        node.attrs.route = undefined;
        if (node.attrs.href) {
            attrs.href = node.attrs.href;
            attrs.oncreate = __WEBPACK_IMPORTED_MODULE_0__mithril__["a" /* m */].route.link;
            attrs.onupdate = __WEBPACK_IMPORTED_MODULE_0__mithril__["a" /* m */].route.link;
        }
        return Object(__WEBPACK_IMPORTED_MODULE_0__mithril__["a" /* m */])(`.hs-layout ${css} ${this.getCSS(node)}`, attrs, content.map((c) => c));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Layout;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZpZXcvTGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQSxPQUFPLEVBQUUsQ0FBQyxFQUFRLE1BQVcsWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBWSxZQUFZLENBQUM7QUF5QjVDLE1BQU07SUFvQlEsYUFBYSxDQUFDLElBQVU7UUFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFLLEVBQUUsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO29CQUNiLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUNqQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbEM7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLENBQUM7aUJBQ1o7WUFDTCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFRUyxNQUFNLENBQUMsSUFBVTtRQUN2QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBR08sZ0JBQWdCLENBQUMsVUFBNkM7UUFDbEUsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDaEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQXlCLEVBQVEsRUFBRSxDQUNsRCxDQUFDLElBQUksWUFBWSxNQUFNLENBQUMsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxDQUFDLENBQ2pFLENBQUM7U0FDTDtRQUVELE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBcUJELElBQUksQ0FBQyxJQUFVO1FBQ1gsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDckQsTUFBTSxLQUFLLEdBQU87WUFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztZQUN2QixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO1NBQzlCLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQzdCLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDOUIsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztTQUNqQztRQUNELE9BQU8sQ0FBQyxDQUFDLGNBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDO0NBQ0oifQ==

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pushStateMock = __webpack_require__(33)
var domMock = __webpack_require__(35)
var xhrMock = __webpack_require__(36)

module.exports = function(env) {
	env = env || {}
	var $window = env.window = {}

	var dom = domMock()
	var xhr = xhrMock()
	for (var key in dom) if (!$window[key]) $window[key] = dom[key]
	for (var key in xhr) if (!$window[key]) $window[key] = xhr[key]
	pushStateMock(env)

	return $window
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseURL = __webpack_require__(13)
var callAsync = __webpack_require__(14)

function debouncedAsync(f) {
	var ref
	return function() {
		if (ref != null) return
		ref = callAsync(function(){
			ref = null
			f()
		})
	}
}

module.exports = function(options) {
	if (options == null) options = {}

	var $window = options.window || {}
	var protocol = options.protocol || "http:"
	var hostname = options.hostname || "localhost"
	var port = ""
	var pathname = "/"
	var search = ""
	var hash = ""

	var past = [{url: getURL(), isNew: true, state: null, title: null}], future = []

	function getURL() {
		if (protocol === "file:") return protocol + "//" + pathname + search + hash
		return protocol + "//" + hostname + prefix(":", port) + pathname + search + hash
	}
	function setURL(value) {
		var data = parseURL(value, {protocol: protocol, hostname: hostname, port: port, pathname: pathname})
		var isNew = false
		if (data.protocol != null && data.protocol !== protocol) protocol = data.protocol, isNew = true
		if (data.hostname != null && data.hostname !== hostname) hostname = data.hostname, isNew = true
		if (data.port != null && data.port !== port) port = data.port, isNew = true
		if (data.pathname != null && data.pathname !== pathname) pathname = data.pathname, isNew = true
		if (data.search != null && data.search !== search) search = data.search, isNew = true
		if (data.hash != null && data.hash !== hash) {
			hash = data.hash
			if (!isNew) {
				hashchange()
			}
		}
		return isNew
	}

	function prefix(prefix, value) {
		if (value === "") return ""
		return (value.charAt(0) !== prefix ? prefix : "") + value
	}
	function _hashchange() {
		if (typeof $window.onhashchange === "function") $window.onhashchange({type: "hashchange"})
	}
	var hashchange = debouncedAsync(_hashchange)
	function popstate() {
		if (typeof $window.onpopstate === "function") $window.onpopstate({type: "popstate", state: $window.history.state})
	}
	function unload() {
		if (typeof $window.onunload === "function") $window.onunload({type: "unload"})
	}

	$window.location = {
		get protocol() {
			return protocol
		},
		get hostname() {
			return hostname
		},
		get port() {
			return port
		},
		get pathname() {
			return pathname
		},
		get search() {
			return search
		},
		get hash() {
			return hash
		},
		get origin() {
			if (protocol === "file:") return "null"
			return protocol + "//" + hostname + prefix(":", port)
		},
		get host() {
			if (protocol === "file:") return ""
			return hostname + prefix(":", port)
		},
		get href() {
			return getURL()
		},

		set protocol(value) {
			throw new Error("Protocol is read-only")
		},
		set hostname(value) {
			unload()
			past.push({url: getURL(), isNew: true})
			future = []
			hostname = value
		},
		set port(value) {
			if (protocol === "file:") throw new Error("Port is read-only under `file://` protocol")
			unload()
			past.push({url: getURL(), isNew: true})
			future = []
			port = value
		},
		set pathname(value) {
			if (protocol === "file:") throw new Error("Pathname is read-only under `file://` protocol")
			unload()
			past.push({url: getURL(), isNew: true})
			future = []
			pathname = prefix("/", value)
		},
		set search(value) {
			unload()
			past.push({url: getURL(), isNew: true})
			future = []
			search = prefix("?", value)
		},
		set hash(value) {
			var oldHash = hash
			past.push({url: getURL(), isNew: false})
			future = []
			hash = prefix("#", value)
			if (oldHash != hash) hashchange()
		},

		set origin(value) {
			//origin is writable but ignored
		},
		set host(value) {
			//host is writable but ignored in Chrome
		},
		set href(value) {
			var url = getURL()
			var isNew = setURL(value)
			if (isNew) {
				setURL(url)
				unload()
				setURL(value)
			}
			past.push({url: url, isNew: isNew})
			future = []
		},
	}
	$window.history = {
		pushState: function(state, title, url) {
			past.push({url: getURL(), isNew: false, state: state, title: title})
			future = []
			setURL(url)
		},
		replaceState: function(state, title, url) {
			var entry = past[past.length - 1]
			entry.state = state
			entry.title = title
			setURL(url)
		},
		back: function() {
			if (past.length > 1) {
				var entry = past.pop()
				if (entry.isNew) unload()
				future.push({url: getURL(), isNew: false, state: entry.state, title: entry.title})
				setURL(entry.url)
				if (!entry.isNew) popstate()
			}
		},
		forward: function() {
			var entry = future.pop()
			if (entry != null) {
				if (entry.isNew) unload()
				past.push({url: getURL(), isNew: false, state: entry.state, title: entry.title})
				setURL(entry.url)
				if (!entry.isNew) popstate()
			}
		},
		get state() {
			return past.length === 0 ? null : past[past.length - 1].state
		},
	}
	$window.onpopstate = null,
	$window.onhashchange = null,
	$window.onunload = null

	return $window
}


/***/ }),
/* 34 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(16)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
Known limitations:

- `option.selected` can't be set/read when the option doesn't have a `select` parent
- `element.attributes` is just a map of attribute names => Attr objects stubs
- ...

*/

/*
options:
- spy:(f: Function) => Function
*/

module.exports = function(options) {
	options = options || {}
	var spy = options.spy || function(f){return f}
	var spymap = []
	function registerSpies(element, spies) {
		if(options.spy) {
			var i = spymap.indexOf(element)
			if (i === -1) {
				spymap.push(element, spies)
			} else {
				var existing = spymap[i + 1]
				for (var k in spies) existing[k] = spies[k]
			}
		}
	}
	function getSpies(element) {
		if (element == null || typeof element !== "object") throw new Error("Element expected")
		if(options.spy) return spymap[spymap.indexOf(element) + 1]
	}

	function isModernEvent(type) {
		return type === "transitionstart" || type === "transitionend" || type === "animationstart" || type === "animationend"
	}
	function appendChild(child) {
		var ancestor = this
		while (ancestor !== child && ancestor !== null) ancestor = ancestor.parentNode
		if (ancestor === child) throw new Error("Node cannot be inserted at the specified point in the hierarchy")

		if (child.nodeType == null) throw new Error("Argument is not a DOM element")

		var index = this.childNodes.indexOf(child)
		if (index > -1) this.childNodes.splice(index, 1)
		if (child.nodeType === 11) {
			while (child.firstChild != null) this.appendChild(child.firstChild)
			child.childNodes = []
		}
		else {
			this.childNodes.push(child)
			if (child.parentNode != null && child.parentNode !== this) child.parentNode.removeChild(child)
			child.parentNode = this
		}
	}
	function removeChild(child) {
		var index = this.childNodes.indexOf(child)
		if (index > -1) {
			this.childNodes.splice(index, 1)
			child.parentNode = null
		}
		else throw new TypeError("Failed to execute 'removeChild'")
	}
	function insertBefore(child, reference) {
		var ancestor = this
		while (ancestor !== child && ancestor !== null) ancestor = ancestor.parentNode
		if (ancestor === child) throw new Error("Node cannot be inserted at the specified point in the hierarchy")

		if (child.nodeType == null) throw new Error("Argument is not a DOM element")

		var refIndex = this.childNodes.indexOf(reference)
		var index = this.childNodes.indexOf(child)
		if (reference !== null && refIndex < 0) throw new TypeError("Invalid argument")
		if (index > -1) this.childNodes.splice(index, 1)
		if (reference === null) this.appendChild(child)
		else {
			if (child.nodeType === 11) {
				this.childNodes.splice.apply(this.childNodes, [refIndex, 0].concat(child.childNodes))
				while (child.firstChild) {
					var subchild = child.firstChild
					child.removeChild(subchild)
					subchild.parentNode = this
				}
				child.childNodes = []
			}
			else {
				this.childNodes.splice(refIndex, 0, child)
				if (child.parentNode != null && child.parentNode !== this) child.parentNode.removeChild(child)
				child.parentNode = this
			}
		}
	}
	function getAttribute(name) {
		if (this.attributes[name] == null) return null
		return this.attributes[name].value
	}
	function setAttribute(name, value) {
		/*eslint-disable no-implicit-coercion*/
		// this is the correct kind of conversion, passing a Symbol throws in browsers too.
		var nodeValue = "" + value
		/*eslint-enable no-implicit-coercion*/

		this.attributes[name] = {
			namespaceURI: null,
			get value() {return nodeValue},
			set value(value) {
				/*eslint-disable no-implicit-coercion*/
				nodeValue = "" + value
				/*eslint-enable no-implicit-coercion*/
			},
			get nodeValue() {return nodeValue},
			set nodeValue(value) {
				this.value = value
			}
		}
	}
	function setAttributeNS(ns, name, value) {
		this.setAttribute(name, value)
		this.attributes[name].namespaceURI = ns
	}
	function removeAttribute(name) {
		delete this.attributes[name]
	}
	function hasAttribute(name) {
		return name in this.attributes
	}
	var declListTokenizer = /;|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'/g
	/**
	 * This will split a semicolon-separated CSS declaration list into an array of
	 * individual declarations, ignoring semicolons in strings.
	 *
	 * Comments are also stripped.
	 *
	 * @param {string} declList
	 * @return {string[]}
	 */
	function splitDeclList(declList) {
		var indices = [], res = [], match

		// remove comments, preserving comments in strings.
		declList = declList.replace(
			/("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*')|\/\*[\s\S]*?\*\//g,
			function(m, str){
				return str || ""
			}
		)
		/*eslint-disable no-cond-assign*/
		while (match = declListTokenizer.exec(declList)) {
			if (match[0] === ";") indices.push(match.index)
		}
		/*eslint-enable no-cond-assign*/
		for (var i = indices.length; i--;){
			res.unshift(declList.slice(indices[i] + 1))
			declList = declList.slice(0, indices[i])
		}
		res.unshift(declList)
		return res
	}

	var activeElement
	var $window = {
		document: {
			createElement: function(tag) {
				var cssText = ""
				var style = {}
				Object.defineProperty(style, "cssText", {
					get: function() {return cssText},
					set: function (value) {
						var buf = []
						if (typeof value === "string") {
							for (var key in style) style[key] = ""
							var rules = splitDeclList(value)
							for (var i = 0; i < rules.length; i++) {
								var rule = rules[i]
								var colonIndex = rule.indexOf(":")
								if (colonIndex > -1) {
									var rawKey = rule.slice(0, colonIndex).trim()
									var key = rawKey.replace(/-\D/g, function(match) {return match[1].toUpperCase()})
									var value = rule.slice(colonIndex + 1).trim()
									if (key !== "cssText") {
										style[key] = value
										buf.push(rawKey + ": " + value + ";")
									}
								}
							}
							cssText = buf.join(" ")
						}
					}
				})
				var events = {}
				var element = {
					nodeType: 1,
					nodeName: tag.toUpperCase(),
					namespaceURI: "http://www.w3.org/1999/xhtml",
					appendChild: appendChild,
					removeChild: removeChild,
					insertBefore: insertBefore,
					hasAttribute: hasAttribute,
					getAttribute: getAttribute,
					setAttribute: setAttribute,
					setAttributeNS: setAttributeNS,
					removeAttribute: removeAttribute,
					parentNode: null,
					childNodes: [],
					attributes: {},
					get firstChild() {
						return this.childNodes[0] || null
					},
					get nextSibling() {
						if (this.parentNode == null) return null
						var index = this.parentNode.childNodes.indexOf(this)
						if (index < 0) throw new TypeError("Parent's childNodes is out of sync")
						return this.parentNode.childNodes[index + 1] || null
					},
					set textContent(value) {
						this.childNodes = []
						if (value !== "") this.appendChild($window.document.createTextNode(value))
					},
					set innerHTML(value) {
						while (this.firstChild) this.removeChild(this.firstChild)

						var stack = [this], depth = 0, voidElements = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]
						value.replace(/<([a-z0-9\-]+?)((?:\s+?[^=]+?=(?:"[^"]*?"|'[^']*?'|[^\s>]*))*?)(\s*\/)?>|<\/([a-z0-9\-]+?)>|([^<]+)/g, function(match, startTag, attrs, selfClosed, endTag, text) {
							if (startTag) {
								var element = $window.document.createElement(startTag)
								attrs.replace(/\s+?([^=]+?)=(?:"([^"]*?)"|'([^']*?)'|([^\s>]*))/g, function(match, key, doubleQuoted, singleQuoted, unquoted) {
									var keyParts = key.split(":")
									var name = keyParts.pop()
									var ns = keyParts[0]
									var value = doubleQuoted || singleQuoted || unquoted || ""
									if (ns != null) element.setAttributeNS(ns, name, value)
									else element.setAttribute(name, value)
								})
								stack[depth].appendChild(element)
								if (!selfClosed && voidElements.indexOf(startTag.toLowerCase()) < 0) stack[++depth] = element
							}
							else if (endTag) {
								depth--
							}
							else if (text) {
								stack[depth].appendChild($window.document.createTextNode(text)) // FIXME handle html entities
							}
						})
					},
					get style() {
						return style
					},
					set style(_){
						// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style#Setting_style
						throw new Error("setting element.style is not portable")
					},
					get className() {
						return this.attributes["class"] ? this.attributes["class"].value : ""
					},
					set className(value) {
						if (this.namespaceURI === "http://www.w3.org/2000/svg") throw new Error("Cannot set property className of SVGElement")
						else this.setAttribute("class", value)
					},
					focus: function() {activeElement = this},
					addEventListener: function(type, callback) {
						if (events[type] == null) events[type] = [callback]
						else events[type].push(callback)
					},
					removeEventListener: function(type, callback) {
						if (events[type] != null) {
							var index = events[type].indexOf(callback)
							if (index > -1) events[type].splice(index, 1)
						}
					},
					dispatchEvent: function(e) {
						if (this.nodeName === "INPUT" && this.attributes["type"] != null && this.attributes["type"].value === "checkbox" && e.type === "click") {
							this.checked = !this.checked
						}

						e.target = this
						if (events[e.type] != null) {
							for (var i = 0; i < events[e.type].length; i++) {
								events[e.type][i].call(this, e)
							}
						}
						e.preventDefault = function() {
							// TODO: should this do something?
						}
						if (typeof this["on" + e.type] === "function" && !isModernEvent(e.type)) this["on" + e.type](e)
					},
					onclick: null,
				}

				if (element.nodeName === "A") {
					Object.defineProperty(element, "href", {
						get: function() {return this.attributes["href"] === undefined ? "" : "[FIXME implement]"},
						set: function(value) {this.setAttribute("href", value)},
						enumerable: true,
					})
				}

				if (element.nodeName === "INPUT") {
					var checked
					Object.defineProperty(element, "checked", {
						get: function() {return checked === undefined ? this.attributes["checked"] !== undefined : checked},
						set: function(value) {checked = Boolean(value)},
						enumerable: true,
					})

					var value = ""
					var valueSetter = spy(function(v) {
						/*eslint-disable no-implicit-coercion*/
						value = v === null ? "" : "" + v
						/*eslint-enable no-implicit-coercion*/
					})
					Object.defineProperty(element, "value", {
						get: function() {
							return value
						},
						set: valueSetter,
						enumerable: true,
					})

					// we currently emulate the non-ie behavior, but emulating ie may be more useful (throw when an invalid type is set)
					var typeSetter = spy(function(v) {
						this.setAttribute("type", v)
					})
					Object.defineProperty(element, "type", {
						get: function() {
							if (!this.hasAttribute("type")) return "text"
							var type = this.getAttribute("type")
							return (/^(?:radio|button|checkbox|color|date|datetime|datetime-local|email|file|hidden|month|number|password|range|research|search|submit|tel|text|url|week|image)$/)
							.test(type)
							? type
							: "text"
						},
						set: typeSetter,
						enumerable: true,
					})
					registerSpies(element, {
						valueSetter: valueSetter,
						typeSetter: typeSetter
					})
				}


				if (element.nodeName === "TEXTAREA") {
					var wasNeverSet = true
					var value = ""
					var valueSetter = spy(function(v) {
						wasNeverSet = false
						/*eslint-disable no-implicit-coercion*/
						value = v === null ? "" : "" + v
						/*eslint-enable no-implicit-coercion*/
					})
					Object.defineProperty(element, "value", {
						get: function() {
							return wasNeverSet && this.firstChild ? this.firstChild.nodeValue : value
						},
						set: valueSetter,
						enumerable: true,
					})
					registerSpies(element, {
						valueSetter: valueSetter
					})
				}

				/* eslint-disable radix */

				if (element.nodeName === "CANVAS") {
					Object.defineProperty(element, "width", {
						get: function() {return this.attributes["width"] ? Math.floor(parseInt(this.attributes["width"].value) || 0) : 300},
						set: function(value) {this.setAttribute("width", Math.floor(Number(value) || 0).toString())},
					})
					Object.defineProperty(element, "height", {
						get: function() {return this.attributes["height"] ? Math.floor(parseInt(this.attributes["height"].value) || 0) : 300},
						set: function(value) {this.setAttribute("height", Math.floor(Number(value) || 0).toString())},
					})
				}

				/* eslint-enable radix */

				function getOptions(element) {
					var options = []
					for (var i = 0; i < element.childNodes.length; i++) {
						if (element.childNodes[i].nodeName === "OPTION") options.push(element.childNodes[i])
						else if (element.childNodes[i].nodeName === "OPTGROUP") options = options.concat(getOptions(element.childNodes[i]))
					}
					return options
				}
				function getOptionValue(element) {
					return element.attributes["value"] != null ?
						element.attributes["value"].value :
						element.firstChild != null ? element.firstChild.nodeValue : ""
				}
				if (element.nodeName === "SELECT") {
					// var selectedValue
					var selectedIndex = 0
					Object.defineProperty(element, "selectedIndex", {
						get: function() {return getOptions(this).length > 0 ? selectedIndex : -1},
						set: function(value) {
							var options = getOptions(this)
							if (value >= 0 && value < options.length) {
								// selectedValue = getOptionValue(options[selectedIndex])
								selectedIndex = value
							}
							else {
								// selectedValue = ""
								selectedIndex = -1
							}
						},
						enumerable: true,
					})
					var valueSetter = spy(function(value) {
						if (value === null) {
							selectedIndex = -1
						} else {
							var options = getOptions(this)
							/*eslint-disable no-implicit-coercion*/
							var stringValue = "" + value
							/*eslint-enable no-implicit-coercion*/
							for (var i = 0; i < options.length; i++) {
								if (getOptionValue(options[i]) === stringValue) {
									// selectedValue = stringValue
									selectedIndex = i
									return
								}
							}
							// selectedValue = stringValue
							selectedIndex = -1
						}
					})
					Object.defineProperty(element, "value", {
						get: function() {
							if (this.selectedIndex > -1) return getOptionValue(getOptions(this)[this.selectedIndex])
							return ""
						},
						set: valueSetter,
						enumerable: true,
					})
					registerSpies(element, {
						valueSetter: valueSetter
					})
				}
				if (element.nodeName === "OPTION") {
					var valueSetter = spy(function(value) {
						/*eslint-disable no-implicit-coercion*/
						this.setAttribute("value", value === null ? "" : "" + value)
						/*eslint-enable no-implicit-coercion*/
					})
					Object.defineProperty(element, "value", {
						get: function() {return getOptionValue(this)},
						set: valueSetter,
						enumerable: true,
					})
					registerSpies(element, {
						valueSetter: valueSetter
					})

					Object.defineProperty(element, "selected", {
						// TODO? handle `selected` without a parent (works in browsers)
						get: function() {
							var options = getOptions(this.parentNode)
							var index = options.indexOf(this)
							return index === this.parentNode.selectedIndex
						},
						set: function(value) {
							if (value) {
								var options = getOptions(this.parentNode)
								var index = options.indexOf(this)
								if (index > -1) this.parentNode.selectedIndex = index
							}
							else this.parentNode.selectedIndex = 0
						},
						enumerable: true,
					})
				}
				return element
			},
			createElementNS: function(ns, tag, is) {
				var element = this.createElement(tag, is)
				element.nodeName = tag
				element.namespaceURI = ns
				return element
			},
			createTextNode: function(text) {
				/*eslint-disable no-implicit-coercion*/
				var nodeValue = "" + text
				/*eslint-enable no-implicit-coercion*/
				return {
					nodeType: 3,
					nodeName: "#text",
					parentNode: null,
					get nodeValue() {return nodeValue},
					set nodeValue(value) {
						/*eslint-disable no-implicit-coercion*/
						nodeValue = "" + value
						/*eslint-enable no-implicit-coercion*/
					},
				}
			},
			createDocumentFragment: function() {
				return {
					nodeType: 11,
					nodeName: "#document-fragment",
					appendChild: appendChild,
					insertBefore: insertBefore,
					removeChild: removeChild,
					parentNode: null,
					childNodes: [],
					get firstChild() {
						return this.childNodes[0] || null
					},
				}
			},
			createEvent: function() {
				return {
					initEvent: function(type) {this.type = type},
				}
			},
			get activeElement() {return activeElement},
		},
	}
	$window.document.documentElement = $window.document.createElement("html")
	$window.document.documentElement.appendChild($window.document.createElement("head"))
	$window.document.body = $window.document.createElement("body")
	$window.document.documentElement.appendChild($window.document.body)
	activeElement = $window.document.body

	if (options.spy) $window.__getSpies = getSpies

	return $window
}


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var callAsync = __webpack_require__(14)
var parseURL = __webpack_require__(13)
var parseQueryString = __webpack_require__(37)

module.exports = function() {
	var routes = {}
	// var callback = "callback"
	var serverErrorHandler = function(url) {
		return {status: 500, responseText: "server error, most likely the URL was not defined " + url}
	}

	var $window = {
		XMLHttpRequest: function XMLHttpRequest() {
			var args = {}
			var headers = {}
			var aborted = false
			this.setRequestHeader = function(header, value) {
				headers[header] = value
			}
			this.getRequestHeader = function(header) {
				return headers[header]
			}
			this.open = function(method, url, async, user, password) {
				var urlData = parseURL(url, {protocol: "http:", hostname: "localhost", port: "", pathname: "/"})
				args.method = method
				args.pathname = urlData.pathname
				args.search = urlData.search
				args.async = async != null ? async : true
				args.user = user
				args.password = password
			}
			this.send = function(body) {
				var self = this
				if(!aborted) {
					var handler = routes[args.method + " " + args.pathname] || serverErrorHandler.bind(null, args.pathname)
					var data = handler({url: args.pathname, query: args.search || {}, body: body || null})
					self.status = data.status
					self.responseText = data.responseText
				} else {
					self.status = 0
				}
				self.readyState = 4
				if (args.async === true) {
					callAsync(function() {
						if (typeof self.onreadystatechange === "function") self.onreadystatechange()
					})
				}
			}
			this.abort = function() {
				aborted = true
			}
		},
		document: {
			createElement: function(tag) {
				return {nodeName: tag.toUpperCase(), parentNode: null}
			},
			documentElement: {
				appendChild: function(element) {
					element.parentNode = this
					if (element.nodeName === "SCRIPT") {
						var urlData = parseURL(element.src, {protocol: "http:", hostname: "localhost", port: "", pathname: "/"})
						var handler = routes["GET " + urlData.pathname] || serverErrorHandler.bind(null, element.src)
						var data = handler({url: urlData.pathname, query: urlData.search, body: null})
						parseQueryString(urlData.search)
						callAsync(function() {
							if (data.status === 200) {
								new Function("$window", "with ($window) return " + data.responseText).call($window, $window)
							}
							else if (typeof element.onerror === "function") {
								element.onerror({type: "error"})
							}
						})
					}
				},
				removeChild: function(element) {
					element.parentNode = null
				},
			},
		},
		$defineRoutes: function(rules) {
			routes = rules
		},
		$defineJSONPCallbackKey: function(/* key */) {
			// callback = key
		},
	}
	return $window
}


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)

	var entries = string.split("&"), data = {}, counters = {}
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
			var isValue = j === levels.length - 1
			if (level === "") {
				var key = levels.slice(0, j).join()
				if (counters[key] == null) counters[key] = 0
				level = counters[key]++
			}
			if (cursor[level] == null) {
				cursor[level] = isValue ? value : isNumber ? [] : {}
			}
			cursor = cursor[level]
		}
	}
	return data
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, global) {;(function() {
"use strict"
function Vnode(tag, key, attrs0, children, text, dom) {
	return {tag: tag, key: key, attrs: attrs0, children: children, text: text, dom: dom, domSize: undefined, state: undefined, _state: undefined, events: undefined, instance: undefined, skip: false}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node != null && typeof node !== "object") return Vnode("#", undefined, undefined, node === false ? "" : node, undefined, undefined)
	return node
}
Vnode.normalizeChildren = function normalizeChildren(children) {
	for (var i = 0; i < children.length; i++) {
		children[i] = Vnode.normalize(children[i])
	}
	return children
}
var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = {}
var hasOwn = {}.hasOwnProperty
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
function execSelector(state, attrs, children) {
	var hasAttrs = false, childList, text
	var className = attrs.className || attrs.class
	for (var key in state.attrs) {
		if (hasOwn.call(state.attrs, key)) {
			attrs[key] = state.attrs[key]
		}
	}
	if (className !== undefined) {
		if (attrs.class !== undefined) {
			attrs.class = undefined
			attrs.className = className
		}
		if (state.attrs.className != null) {
			attrs.className = state.attrs.className + " " + className
		}
	}
	for (var key in attrs) {
		if (hasOwn.call(attrs, key) && key !== "key") {
			hasAttrs = true
			break
		}
	}
	if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
		text = children[0].children
	} else {
		childList = children
	}
	return Vnode(state.tag, attrs.key, hasAttrs ? attrs : undefined, childList, text)
}
function hyperscript(selector) {
	// Because sloppy mode sucks
	var attrs = arguments[1], start = 2, children
	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}
	if (typeof selector === "string") {
		var cached = selectorCache[selector] || compileSelector(selector)
	}
	if (attrs == null) {
		attrs = {}
	} else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
		attrs = {}
		start = 1
	}
	if (arguments.length === start + 1) {
		children = arguments[start]
		if (!Array.isArray(children)) children = [children]
	} else {
		children = []
		while (start < arguments.length) children.push(arguments[start++])
	}
	var normalized = Vnode.normalizeChildren(children)
	if (typeof selector === "string") {
		return execSelector(cached, attrs, normalized)
	} else {
		return Vnode(selector, attrs.key, attrs, normalized)
	}
}
hyperscript.trust = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}
hyperscript.fragment = function(attrs1, children) {
	return Vnode("[", attrs1.key, attrs1, Vnode.normalizeChildren(children), undefined, undefined)
}
var m = hyperscript
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
if (typeof window !== "undefined") {
	if (typeof window.Promise === "undefined") window.Promise = PromisePolyfill
	var PromisePolyfill = window.Promise
} else if (typeof global !== "undefined") {
	if (typeof global.Promise === "undefined") global.Promise = PromisePolyfill
	var PromisePolyfill = global.Promise
} else {
}
var buildQueryString = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""
	var args = []
	for (var key0 in object) {
		destructure(key0, object[key0])
	}
	return args.join("&")
	function destructure(key0, value) {
		if (Array.isArray(value)) {
			for (var i = 0; i < value.length; i++) {
				destructure(key0 + "[" + i + "]", value[i])
			}
		}
		else if (Object.prototype.toString.call(value) === "[object Object]") {
			for (var i in value) {
				destructure(key0 + "[" + i + "]", value[i])
			}
		}
		else args.push(encodeURIComponent(key0) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
	}
}
var FILE_PROTOCOL_REGEX = new RegExp("^file://", "i")
var _8 = function($window, Promise) {
	var callbackCount = 0
	var oncompletion
	function setCompletionCallback(callback) {oncompletion = callback}
	function finalizer() {
		var count = 0
		function complete() {if (--count === 0 && typeof oncompletion === "function") oncompletion()}
		return function finalize(promise0) {
			var then0 = promise0.then
			promise0.then = function() {
				count++
				var next = then0.apply(promise0, arguments)
				next.then(complete, function(e) {
					complete()
					if (count === 0) throw e
				})
				return finalize(next)
			}
			return promise0
		}
	}
	function normalize(args, extra) {
		if (typeof args === "string") {
			var url = args
			args = extra || {}
			if (args.url == null) args.url = url
		}
		return args
	}
	function request(args, extra) {
		var finalize = finalizer()
		args = normalize(args, extra)
		var promise0 = new Promise(function(resolve, reject) {
			if (args.method == null) args.method = "GET"
			args.method = args.method.toUpperCase()
			var useBody = (args.method === "GET" || args.method === "TRACE") ? false : (typeof args.useBody === "boolean" ? args.useBody : true)
			if (typeof args.serialize !== "function") args.serialize = typeof FormData !== "undefined" && args.data instanceof FormData ? function(value) {return value} : JSON.stringify
			if (typeof args.deserialize !== "function") args.deserialize = deserialize
			if (typeof args.extract !== "function") args.extract = extract
			args.url = interpolate(args.url, args.data)
			if (useBody) args.data = args.serialize(args.data)
			else args.url = assemble(args.url, args.data)
			var xhr = new $window.XMLHttpRequest(),
				aborted = false,
				_abort = xhr.abort
			xhr.abort = function abort() {
				aborted = true
				_abort.call(xhr)
			}
			xhr.open(args.method, args.url, typeof args.async === "boolean" ? args.async : true, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)
			if (args.serialize === JSON.stringify && useBody) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (args.deserialize === deserialize) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			for (var key in args.headers) if ({}.hasOwnProperty.call(args.headers, key)) {
				xhr.setRequestHeader(key, args.headers[key])
			}
			if (typeof args.config === "function") xhr = args.config(xhr, args) || xhr
			xhr.onreadystatechange = function() {
				// Don't throw errors on xhr.abort().
				if(aborted) return
				if (xhr.readyState === 4) {
					try {
						var response = (args.extract !== extract) ? args.extract(xhr, args) : args.deserialize(args.extract(xhr, args))
						if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304 || FILE_PROTOCOL_REGEX.test(args.url)) {
							resolve(cast(args.type, response))
						}
						else {
							var error = new Error(xhr.responseText)
							for (var key in response) error[key] = response[key]
							reject(error)
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}
			if (useBody && (args.data != null)) xhr.send(args.data)
			else xhr.send()
		})
		return args.background === true ? promise0 : finalize(promise0)
	}
	function jsonp(args, extra) {
		var finalize = finalizer()
		args = normalize(args, extra)
		var promise0 = new Promise(function(resolve, reject) {
			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
			var script = $window.document.createElement("script")
			$window[callbackName] = function(data) {
				script.parentNode.removeChild(script)
				resolve(cast(args.type, data))
				delete $window[callbackName]
			}
			script.onerror = function() {
				script.parentNode.removeChild(script)
				reject(new Error("JSONP request failed"))
				delete $window[callbackName]
			}
			if (args.data == null) args.data = {}
			args.url = interpolate(args.url, args.data)
			args.data[args.callbackKey || "callback"] = callbackName
			script.src = assemble(args.url, args.data)
			$window.document.documentElement.appendChild(script)
		})
		return args.background === true? promise0 : finalize(promise0)
	}
	function interpolate(url, data) {
		if (data == null) return url
		var tokens = url.match(/:[^\/]+/gi) || []
		for (var i = 0; i < tokens.length; i++) {
			var key = tokens[i].slice(1)
			if (data[key] != null) {
				url = url.replace(tokens[i], data[key])
			}
		}
		return url
	}
	function assemble(url, data) {
		var querystring = buildQueryString(data)
		if (querystring !== "") {
			var prefix = url.indexOf("?") < 0 ? "?" : "&"
			url += prefix + querystring
		}
		return url
	}
	function deserialize(data) {
		try {return data !== "" ? JSON.parse(data) : null}
		catch (e) {throw new Error(data)}
	}
	function extract(xhr) {return xhr.responseText}
	function cast(type0, data) {
		if (typeof type0 === "function") {
			if (Array.isArray(data)) {
				for (var i = 0; i < data.length; i++) {
					data[i] = new type0(data[i])
				}
			}
			else return new type0(data)
		}
		return data
	}
	return {request: request, jsonp: jsonp, setCompletionCallback: setCompletionCallback}
}
var requestService = _8(window, PromisePolyfill)
var coreRenderer = function($window) {
	var $doc = $window.document
	var $emptyFragment = $doc.createDocumentFragment()
	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}
	var onevent
	function setEventCallback(callback) {return onevent = callback}
	function getNameSpace(vnode) {
		return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag]
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
				case "#": return createText(parent, vnode, nextSibling)
				case "<": return createHTML(parent, vnode, nextSibling)
				case "[": return createFragment(parent, vnode, hooks, ns, nextSibling)
				default: return createElement(parent, vnode, hooks, ns, nextSibling)
			}
		}
		else return createComponent(parent, vnode, hooks, ns, nextSibling)
	}
	function createText(parent, vnode, nextSibling) {
		vnode.dom = $doc.createTextNode(vnode.children)
		insertNode(parent, vnode.dom, nextSibling)
		return vnode.dom
	}
	function createHTML(parent, vnode, nextSibling) {
		var match1 = vnode.children.match(/^\s*?<(\w+)/im) || []
		var parent1 = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}[match1[1]] || "div"
		var temp = $doc.createElement(parent1)
		temp.innerHTML = vnode.children
		vnode.dom = temp.firstChild
		vnode.domSize = temp.childNodes.length
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			fragment.appendChild(child)
		}
		insertNode(parent, fragment, nextSibling)
		return fragment
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
		return fragment
	}
	function createElement(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		var attrs2 = vnode.attrs
		var is = attrs2 && attrs2.is
		ns = getNameSpace(vnode) || ns
		var element = ns ?
			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
		vnode.dom = element
		if (attrs2 != null) {
			setAttrs(vnode, attrs2, ns)
		}
		insertNode(parent, element, nextSibling)
		if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
			setContentEditable(vnode)
		}
		else {
			if (vnode.text != null) {
				if (vnode.text !== "") element.textContent = vnode.text
				else vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			}
			if (vnode.children != null) {
				var children = vnode.children
				createNodes(element, children, 0, children.length, hooks, null, ns)
				setLateAttrs(vnode)
			}
		}
		return element
	}
	function initComponent(vnode, hooks) {
		var sentinel
		if (typeof vnode.tag.view === "function") {
			vnode.state = Object.create(vnode.tag)
			sentinel = vnode.state.view
			if (sentinel.$$reentrantLock$$ != null) return $emptyFragment
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode.state = void 0
			sentinel = vnode.tag
			if (sentinel.$$reentrantLock$$ != null) return $emptyFragment
			sentinel.$$reentrantLock$$ = true
			vnode.state = (vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function") ? new vnode.tag(vnode) : vnode.tag(vnode)
		}
		vnode._state = vnode.state
		if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
		initLifecycle(vnode._state, vnode, hooks)
		vnode.instance = Vnode.normalize(vnode._state.view.call(vnode.state, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode, hooks, ns, nextSibling) {
		initComponent(vnode, hooks)
		if (vnode.instance != null) {
			var element = createNode(parent, vnode.instance, hooks, ns, nextSibling)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0
			insertNode(parent, element, nextSibling)
			return element
		}
		else {
			vnode.domSize = 0
			return $emptyFragment
		}
	}
	//update
	function updateNodes(parent, old, vnodes, recycling, hooks, nextSibling, ns) {
		if (old === vnodes || old == null && vnodes == null) return
		else if (old == null) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null) removeNodes(old, 0, old.length, vnodes)
		else {
			if (old.length === vnodes.length) {
				var isUnkeyed = false
				for (var i = 0; i < vnodes.length; i++) {
					if (vnodes[i] != null && old[i] != null) {
						isUnkeyed = vnodes[i].key == null && old[i].key == null
						break
					}
				}
				if (isUnkeyed) {
					for (var i = 0; i < old.length; i++) {
						if (old[i] === vnodes[i]) continue
						else if (old[i] == null && vnodes[i] != null) createNode(parent, vnodes[i], hooks, ns, getNextSibling(old, i + 1, nextSibling))
						else if (vnodes[i] == null) removeNodes(old, i, i + 1, vnodes)
						else updateNode(parent, old[i], vnodes[i], hooks, getNextSibling(old, i + 1, nextSibling), recycling, ns)
					}
					return
				}
			}
			recycling = recycling || isRecyclable(old, vnodes)
			if (recycling) {
				var pool = old.pool
				old = old.concat(old.pool)
			}
			var oldStart = 0, start = 0, oldEnd = old.length - 1, end = vnodes.length - 1, map
			while (oldEnd >= oldStart && end >= start) {
				var o = old[oldStart], v = vnodes[start]
				if (o === v && !recycling) oldStart++, start++
				else if (o == null) oldStart++
				else if (v == null) start++
				else if (o.key === v.key) {
					var shouldRecycle = (pool != null && oldStart >= old.length - pool.length) || ((pool == null) && recycling)
					oldStart++, start++
					updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), shouldRecycle, ns)
					if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling)
				}
				else {
					var o = old[oldEnd]
					if (o === v && !recycling) oldEnd--, start++
					else if (o == null) oldEnd--
					else if (v == null) start++
					else if (o.key === v.key) {
						var shouldRecycle = (pool != null && oldEnd >= old.length - pool.length) || ((pool == null) && recycling)
						updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), shouldRecycle, ns)
						if (recycling || start < end) insertNode(parent, toFragment(o), getNextSibling(old, oldStart, nextSibling))
						oldEnd--, start++
					}
					else break
				}
			}
			while (oldEnd >= oldStart && end >= start) {
				var o = old[oldEnd], v = vnodes[end]
				if (o === v && !recycling) oldEnd--, end--
				else if (o == null) oldEnd--
				else if (v == null) end--
				else if (o.key === v.key) {
					var shouldRecycle = (pool != null && oldEnd >= old.length - pool.length) || ((pool == null) && recycling)
					updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), shouldRecycle, ns)
					if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling)
					if (o.dom != null) nextSibling = o.dom
					oldEnd--, end--
				}
				else {
					if (!map) map = getKeyMap(old, oldEnd)
					if (v != null) {
						var oldIndex = map[v.key]
						if (oldIndex != null) {
							var movable = old[oldIndex]
							var shouldRecycle = (pool != null && oldIndex >= old.length - pool.length) || ((pool == null) && recycling)
							updateNode(parent, movable, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), recycling, ns)
							insertNode(parent, toFragment(movable), nextSibling)
							old[oldIndex].skip = true
							if (movable.dom != null) nextSibling = movable.dom
						}
						else {
							var dom = createNode(parent, v, hooks, ns, nextSibling)
							nextSibling = dom
						}
					}
					end--
				}
				if (end < start) break
			}
			createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
			removeNodes(old, oldStart, oldEnd + 1, vnodes)
		}
	}
	function updateNode(parent, old, vnode, hooks, nextSibling, recycling, ns) {
		var oldTag = old.tag, tag = vnode.tag
		if (oldTag === tag) {
			vnode.state = old.state
			vnode._state = old._state
			vnode.events = old.events
			if (!recycling && shouldNotUpdate(vnode, old)) return
			if (typeof oldTag === "string") {
				if (vnode.attrs != null) {
					if (recycling) {
						vnode.state = {}
						initLifecycle(vnode.attrs, vnode, hooks)
					}
					else updateLifecycle(vnode.attrs, vnode, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode); break
					case "<": updateHTML(parent, old, vnode, nextSibling); break
					case "[": updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns); break
					default: updateElement(old, vnode, recycling, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns)
		}
		else {
			removeNode(old, null)
			createNode(parent, vnode, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode) {
		if (old.children.toString() !== vnode.children.toString()) {
			old.dom.nodeValue = vnode.children
		}
		vnode.dom = old.dom
	}
	function updateHTML(parent, old, vnode, nextSibling) {
		if (old.children !== vnode.children) {
			toFragment(old)
			createHTML(parent, vnode, nextSibling)
		}
		else vnode.dom = old.dom, vnode.domSize = old.domSize
	}
	function updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode.children, recycling, hooks, nextSibling, ns)
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
	function updateElement(old, vnode, recycling, hooks, ns) {
		var element = vnode.dom = old.dom
		ns = getNameSpace(vnode) || ns
		if (vnode.tag === "textarea") {
			if (vnode.attrs == null) vnode.attrs = {}
			if (vnode.text != null) {
				vnode.attrs.value = vnode.text //FIXME handle0 multiple children
				vnode.text = undefined
			}
		}
		updateAttrs(vnode, old.attrs, vnode.attrs, ns)
		if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
			setContentEditable(vnode)
		}
		else if (old.text != null && vnode.text != null && vnode.text !== "") {
			if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text
		}
		else {
			if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)]
			if (vnode.text != null) vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			updateNodes(element, old.children, vnode.children, recycling, hooks, null, ns)
		}
	}
	function updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns) {
		if (recycling) {
			initComponent(vnode, hooks)
		} else {
			vnode.instance = Vnode.normalize(vnode._state.view.call(vnode.state, vnode))
			if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
			if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks)
			updateLifecycle(vnode._state, vnode, hooks)
		}
		if (vnode.instance != null) {
			if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, recycling, ns)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.instance.domSize
		}
		else if (old.instance != null) {
			removeNode(old.instance, null)
			vnode.dom = undefined
			vnode.domSize = 0
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
		}
	}
	function isRecyclable(old, vnodes) {
		if (old.pool != null && Math.abs(old.pool.length - vnodes.length) <= Math.abs(old.length - vnodes.length)) {
			var oldChildrenLength = old[0] && old[0].children && old[0].children.length || 0
			var poolChildrenLength = old.pool[0] && old.pool[0].children && old.pool[0].children.length || 0
			var vnodesChildrenLength = vnodes[0] && vnodes[0].children && vnodes[0].children.length || 0
			if (Math.abs(poolChildrenLength - vnodesChildrenLength) <= Math.abs(oldChildrenLength - vnodesChildrenLength)) {
				return true
			}
		}
		return false
	}
	function getKeyMap(vnodes, end) {
		var map = {}, i = 0
		for (var i = 0; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				var key2 = vnode.key
				if (key2 != null) map[key2] = i
			}
		}
		return map
	}
	function toFragment(vnode) {
		var count0 = vnode.domSize
		if (count0 != null || vnode.dom == null) {
			var fragment = $doc.createDocumentFragment()
			if (count0 > 0) {
				var dom = vnode.dom
				while (--count0) fragment.appendChild(dom.nextSibling)
				fragment.insertBefore(dom, fragment.firstChild)
			}
			return fragment
		}
		else return vnode.dom
	}
	function getNextSibling(vnodes, i, nextSibling) {
		for (; i < vnodes.length; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}
	function insertNode(parent, dom, nextSibling) {
		if (nextSibling && nextSibling.parentNode) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}
	function setContentEditable(vnode) {
		var children = vnode.children
		if (children != null && children.length === 1 && children[0].tag === "<") {
			var content = children[0].children
			if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content
		}
		else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
	}
	//remove
	function removeNodes(vnodes, start, end, context) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				if (vnode.skip) vnode.skip = false
				else removeNode(vnode, context)
			}
		}
	}
	function removeNode(vnode, context) {
		var expected = 1, called = 0
		if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
			var result = vnode.attrs.onbeforeremove.call(vnode.state, vnode)
			if (result != null && typeof result.then === "function") {
				expected++
				result.then(continuation, continuation)
			}
		}
		if (typeof vnode.tag !== "string" && typeof vnode._state.onbeforeremove === "function") {
			var result = vnode._state.onbeforeremove.call(vnode.state, vnode)
			if (result != null && typeof result.then === "function") {
				expected++
				result.then(continuation, continuation)
			}
		}
		continuation()
		function continuation() {
			if (++called === expected) {
				onremove(vnode)
				if (vnode.dom) {
					var count0 = vnode.domSize || 1
					if (count0 > 1) {
						var dom = vnode.dom
						while (--count0) {
							removeNodeFromDOM(dom.nextSibling)
						}
					}
					removeNodeFromDOM(vnode.dom)
					if (context != null && vnode.domSize == null && !hasIntegrationMethods(vnode.attrs) && typeof vnode.tag === "string") { //TODO test custom elements
						if (!context.pool) context.pool = [vnode]
						else context.pool.push(vnode)
					}
				}
			}
		}
	}
	function removeNodeFromDOM(node) {
		var parent = node.parentNode
		if (parent != null) parent.removeChild(node)
	}
	function onremove(vnode) {
		if (vnode.attrs && typeof vnode.attrs.onremove === "function") vnode.attrs.onremove.call(vnode.state, vnode)
		if (typeof vnode.tag !== "string" && typeof vnode._state.onremove === "function") vnode._state.onremove.call(vnode.state, vnode)
		if (vnode.instance != null) onremove(vnode.instance)
		else {
			var children = vnode.children
			if (Array.isArray(children)) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i]
					if (child != null) onremove(child)
				}
			}
		}
	}
	//attrs2
	function setAttrs(vnode, attrs2, ns) {
		for (var key2 in attrs2) {
			setAttr(vnode, key2, null, attrs2[key2], ns)
		}
	}
	function setAttr(vnode, key2, old, value, ns) {
		var element = vnode.dom
		if (key2 === "key" || key2 === "is" || (old === value && !isFormAttribute(vnode, key2)) && typeof value !== "object" || typeof value === "undefined" || isLifecycleMethod(key2)) return
		var nsLastIndex = key2.indexOf(":")
		if (nsLastIndex > -1 && key2.substr(0, nsLastIndex) === "xlink") {
			element.setAttributeNS("http://www.w3.org/1999/xlink", key2.slice(nsLastIndex + 1), value)
		}
		else if (key2[0] === "o" && key2[1] === "n" && typeof value === "function") updateEvent(vnode, key2, value)
		else if (key2 === "style") updateStyle(element, old, value)
		else if (key2 in element && !isAttribute(key2) && ns === undefined && !isCustomElement(vnode)) {
			if (key2 === "value") {
				var normalized0 = "" + value // eslint-disable-line no-implicit-coercion
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === normalized0 && vnode.dom === $doc.activeElement) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select") {
					if (value === null) {
						if (vnode.dom.selectedIndex === -1 && vnode.dom === $doc.activeElement) return
					} else {
						if (old !== null && vnode.dom.value === normalized0 && vnode.dom === $doc.activeElement) return
					}
				}
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && old != null && vnode.dom.value === normalized0) return
			}
			// If you assign an input type1 that is not supported by IE 11 with an assignment expression, an error0 will occur.
			if (vnode.tag === "input" && key2 === "type") {
				element.setAttribute(key2, value)
				return
			}
			element[key2] = value
		}
		else {
			if (typeof value === "boolean") {
				if (value) element.setAttribute(key2, "")
				else element.removeAttribute(key2)
			}
			else element.setAttribute(key2 === "className" ? "class" : key2, value)
		}
	}
	function setLateAttrs(vnode) {
		var attrs2 = vnode.attrs
		if (vnode.tag === "select" && attrs2 != null) {
			if ("value" in attrs2) setAttr(vnode, "value", null, attrs2.value, undefined)
			if ("selectedIndex" in attrs2) setAttr(vnode, "selectedIndex", null, attrs2.selectedIndex, undefined)
		}
	}
	function updateAttrs(vnode, old, attrs2, ns) {
		if (attrs2 != null) {
			for (var key2 in attrs2) {
				setAttr(vnode, key2, old && old[key2], attrs2[key2], ns)
			}
		}
		if (old != null) {
			for (var key2 in old) {
				if (attrs2 == null || !(key2 in attrs2)) {
					if (key2 === "className") key2 = "class"
					if (key2[0] === "o" && key2[1] === "n" && !isLifecycleMethod(key2)) updateEvent(vnode, key2, undefined)
					else if (key2 !== "key") vnode.dom.removeAttribute(key2)
				}
			}
		}
	}
	function isFormAttribute(vnode, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === $doc.activeElement
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function isAttribute(attr) {
		return attr === "href" || attr === "list" || attr === "form" || attr === "width" || attr === "height"// || attr === "type"
	}
	function isCustomElement(vnode){
		return vnode.attrs.is || vnode.tag.indexOf("-") > -1
	}
	function hasIntegrationMethods(source) {
		return source != null && (source.oncreate || source.onupdate || source.onbeforeremove || source.onremove)
	}
	//style
	function updateStyle(element, old, style) {
		if (old === style) element.style.cssText = "", old = null
		if (style == null) element.style.cssText = ""
		else if (typeof style === "string") element.style.cssText = style
		else {
			if (typeof old === "string") element.style.cssText = ""
			for (var key2 in style) {
				element.style[key2] = style[key2]
			}
			if (old != null && typeof old !== "string") {
				for (var key2 in old) {
					if (!(key2 in style)) element.style[key2] = ""
				}
			}
		}
	}
	//event
	function updateEvent(vnode, key2, value) {
		var element = vnode.dom
		var callback = typeof onevent !== "function" ? value : function(e) {
			var result = value.call(element, e)
			onevent.call(element, e)
			return result
		}
		if (key2 in element) element[key2] = typeof value === "function" ? callback : null
		else {
			var eventName = key2.slice(2)
			if (vnode.events === undefined) vnode.events = {}
			if (vnode.events[key2] === callback) return
			if (vnode.events[key2] != null) element.removeEventListener(eventName, vnode.events[key2], false)
			if (typeof value === "function") {
				vnode.events[key2] = callback
				element.addEventListener(eventName, vnode.events[key2], false)
			}
		}
	}
	//lifecycle
	function initLifecycle(source, vnode, hooks) {
		if (typeof source.oninit === "function") source.oninit.call(vnode.state, vnode)
		if (typeof source.oncreate === "function") hooks.push(source.oncreate.bind(vnode.state, vnode))
	}
	function updateLifecycle(source, vnode, hooks) {
		if (typeof source.onupdate === "function") hooks.push(source.onupdate.bind(vnode.state, vnode))
	}
	function shouldNotUpdate(vnode, old) {
		var forceVnodeUpdate, forceComponentUpdate
		if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") forceVnodeUpdate = vnode.attrs.onbeforeupdate.call(vnode.state, vnode, old)
		if (typeof vnode.tag !== "string" && typeof vnode._state.onbeforeupdate === "function") forceComponentUpdate = vnode._state.onbeforeupdate.call(vnode.state, vnode, old)
		if (!(forceVnodeUpdate === undefined && forceComponentUpdate === undefined) && !forceVnodeUpdate && !forceComponentUpdate) {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
			vnode.instance = old.instance
			return true
		}
		return false
	}
	function render(dom, vnodes) {
		if (!dom) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
		var hooks = []
		var active = $doc.activeElement
		var namespace = dom.namespaceURI
		// First time0 rendering into a node clears it out
		if (dom.vnodes == null) dom.textContent = ""
		if (!Array.isArray(vnodes)) vnodes = [vnodes]
		updateNodes(dom, dom.vnodes, Vnode.normalizeChildren(vnodes), false, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
		dom.vnodes = vnodes
		for (var i = 0; i < hooks.length; i++) hooks[i]()
		// document.activeElement can return null in IE https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
		if (active != null && $doc.activeElement !== active) active.focus()
	}
	return {render: render, setEventCallback: setEventCallback}
}
function throttle(callback) {
	//60fps translates to 16.6ms, round it down since setTimeout requires int
	var time = 16
	var last = 0, pending = null
	var timeout = typeof requestAnimationFrame === "function" ? requestAnimationFrame : setTimeout
	return function() {
		var now = Date.now()
		if (last === 0 || now - last >= time) {
			last = now
			callback()
		}
		else if (pending === null) {
			pending = timeout(function() {
				pending = null
				callback()
				last = Date.now()
			}, time - (now - last))
		}
	}
}
var _11 = function($window) {
	var renderService = coreRenderer($window)
	renderService.setEventCallback(function(e) {
		if (e.redraw === false) e.redraw = undefined
		else redraw()
	})
	var callbacks = []
	function subscribe(key1, callback) {
		unsubscribe(key1)
		callbacks.push(key1, throttle(callback))
	}
	function unsubscribe(key1) {
		var index = callbacks.indexOf(key1)
		if (index > -1) callbacks.splice(index, 2)
	}
	function redraw() {
		for (var i = 1; i < callbacks.length; i += 2) {
			callbacks[i]()
		}
	}
	return {subscribe: subscribe, unsubscribe: unsubscribe, redraw: redraw, render: renderService.render}
}
var redrawService = _11(window)
requestService.setCompletionCallback(redrawService.redraw)
var _16 = function(redrawService0) {
	return function(root, component) {
		if (component === null) {
			redrawService0.render(root, [])
			redrawService0.unsubscribe(root)
			return
		}
		
		if (component.view == null && typeof component !== "function") throw new Error("m.mount(element, component) expects a component, not a vnode")
		
		var run0 = function() {
			redrawService0.render(root, Vnode(component))
		}
		redrawService0.subscribe(root, run0)
		redrawService0.redraw()
	}
}
m.mount = _16(redrawService)
var Promise = PromisePolyfill
var parseQueryString = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)
	var entries = string.split("&"), data0 = {}, counters = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key5 = decodeURIComponent(entry[0])
		var value = entry.length === 2 ? decodeURIComponent(entry[1]) : ""
		if (value === "true") value = true
		else if (value === "false") value = false
		var levels = key5.split(/\]\[?|\[/)
		var cursor = data0
		if (key5.indexOf("[") > -1) levels.pop()
		for (var j = 0; j < levels.length; j++) {
			var level = levels[j], nextLevel = levels[j + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			var isValue = j === levels.length - 1
			if (level === "") {
				var key5 = levels.slice(0, j).join()
				if (counters[key5] == null) counters[key5] = 0
				level = counters[key5]++
			}
			if (cursor[level] == null) {
				cursor[level] = isValue ? value : isNumber ? [] : {}
			}
			cursor = cursor[level]
		}
	}
	return data0
}
var coreRouter = function($window) {
	var supportsPushState = typeof $window.history.pushState === "function"
	var callAsync0 = typeof setImmediate === "function" ? setImmediate : setTimeout
	function normalize1(fragment0) {
		var data = $window.location[fragment0].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
		if (fragment0 === "pathname" && data[0] !== "/") data = "/" + data
		return data
	}
	var asyncId
	function debounceAsync(callback0) {
		return function() {
			if (asyncId != null) return
			asyncId = callAsync0(function() {
				asyncId = null
				callback0()
			})
		}
	}
	function parsePath(path, queryData, hashData) {
		var queryIndex = path.indexOf("?")
		var hashIndex = path.indexOf("#")
		var pathEnd = queryIndex > -1 ? queryIndex : hashIndex > -1 ? hashIndex : path.length
		if (queryIndex > -1) {
			var queryEnd = hashIndex > -1 ? hashIndex : path.length
			var queryParams = parseQueryString(path.slice(queryIndex + 1, queryEnd))
			for (var key4 in queryParams) queryData[key4] = queryParams[key4]
		}
		if (hashIndex > -1) {
			var hashParams = parseQueryString(path.slice(hashIndex + 1))
			for (var key4 in hashParams) hashData[key4] = hashParams[key4]
		}
		return path.slice(0, pathEnd)
	}
	var router = {prefix: "#!"}
	router.getPath = function() {
		var type2 = router.prefix.charAt(0)
		switch (type2) {
			case "#": return normalize1("hash").slice(router.prefix.length)
			case "?": return normalize1("search").slice(router.prefix.length) + normalize1("hash")
			default: return normalize1("pathname").slice(router.prefix.length) + normalize1("search") + normalize1("hash")
		}
	}
	router.setPath = function(path, data, options) {
		var queryData = {}, hashData = {}
		path = parsePath(path, queryData, hashData)
		if (data != null) {
			for (var key4 in data) queryData[key4] = data[key4]
			path = path.replace(/:([^\/]+)/g, function(match2, token) {
				delete queryData[token]
				return data[token]
			})
		}
		var query = buildQueryString(queryData)
		if (query) path += "?" + query
		var hash = buildQueryString(hashData)
		if (hash) path += "#" + hash
		if (supportsPushState) {
			var state = options ? options.state : null
			var title = options ? options.title : null
			$window.onpopstate()
			if (options && options.replace) $window.history.replaceState(state, title, router.prefix + path)
			else $window.history.pushState(state, title, router.prefix + path)
		}
		else $window.location.href = router.prefix + path
	}
	router.defineRoutes = function(routes, resolve, reject) {
		function resolveRoute() {
			var path = router.getPath()
			var params = {}
			var pathname = parsePath(path, params, params)
			var state = $window.history.state
			if (state != null) {
				for (var k in state) params[k] = state[k]
			}
			for (var route0 in routes) {
				var matcher = new RegExp("^" + route0.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$")
				if (matcher.test(pathname)) {
					pathname.replace(matcher, function() {
						var keys = route0.match(/:[^\/]+/g) || []
						var values = [].slice.call(arguments, 1, -2)
						for (var i = 0; i < keys.length; i++) {
							params[keys[i].replace(/:|\./g, "")] = decodeURIComponent(values[i])
						}
						resolve(routes[route0], params, path, route0)
					})
					return
				}
			}
			reject(path, params)
		}
		if (supportsPushState) $window.onpopstate = debounceAsync(resolveRoute)
		else if (router.prefix.charAt(0) === "#") $window.onhashchange = resolveRoute
		resolveRoute()
	}
	return router
}
var _20 = function($window, redrawService0) {
	var routeService = coreRouter($window)
	var identity = function(v) {return v}
	var render1, component, attrs3, currentPath, lastUpdate
	var route = function(root, defaultRoute, routes) {
		if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
		var run1 = function() {
			if (render1 != null) redrawService0.render(root, render1(Vnode(component, attrs3.key, attrs3)))
		}
		var bail = function(path) {
			if (path !== defaultRoute) routeService.setPath(defaultRoute, null, {replace: true})
			else throw new Error("Could not resolve default route " + defaultRoute)
		}
		routeService.defineRoutes(routes, function(payload, params, path) {
			var update = lastUpdate = function(routeResolver, comp) {
				if (update !== lastUpdate) return
				component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
				attrs3 = params, currentPath = path, lastUpdate = null
				render1 = (routeResolver.render || identity).bind(routeResolver)
				run1()
			}
			if (payload.view || typeof payload === "function") update({}, payload)
			else {
				if (payload.onmatch) {
					Promise.resolve(payload.onmatch(params, path)).then(function(resolved) {
						update(payload, resolved)
					}, bail)
				}
				else update(payload, "div")
			}
		}, bail)
		redrawService0.subscribe(root, run1)
	}
	route.set = function(path, data, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null
		routeService.setPath(path, data, options)
	}
	route.get = function() {return currentPath}
	route.prefix = function(prefix0) {routeService.prefix = prefix0}
	route.link = function(vnode1) {
		vnode1.dom.setAttribute("href", routeService.prefix + vnode1.attrs.href)
		vnode1.dom.onclick = function(e) {
			if (e.ctrlKey || e.metaKey || e.shiftKey || e.which === 2) return
			e.preventDefault()
			e.redraw = false
			var href = this.getAttribute("href")
			if (href.indexOf(routeService.prefix) === 0) href = href.slice(routeService.prefix.length)
			route.set(href, undefined, undefined)
		}
	}
	route.param = function(key3) {
		if(typeof attrs3 !== "undefined" && typeof key3 !== "undefined") return attrs3[key3]
		return attrs3
	}
	return route
}
m.route = _20(window, redrawService)
m.withAttr = function(attrName, callback1, context) {
	return function(e) {
		callback1.call(context || this, attrName in e.currentTarget ? e.currentTarget[attrName] : e.currentTarget.getAttribute(attrName))
	}
}
var _28 = coreRenderer(window)
m.render = _28.render
m.redraw = redrawService.redraw
m.request = requestService.request
m.jsonp = requestService.jsonp
m.parseQueryString = parseQueryString
m.buildQueryString = buildQueryString
m.version = "1.1.4"
m.vnode = Vnode
if (true) module["exports"] = m
else window.m = m
}());
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15).setImmediate, __webpack_require__(3)))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, Buffer) {/* eslint-disable no-bitwise, no-process-exit */


module.exports = new function init(name) {
	var spec = {}, subjects = [], results, only = null, ctx = spec, start, stack = 0, nextTickish, hasProcess = typeof process === "object", hasOwn = ({}).hasOwnProperty

	if (name != null) spec[name] = ctx = {}

	function o(subject, predicate) {
		if (predicate === undefined) {
			if (results == null) throw new Error("Assertions should not occur outside test definitions")
			return new Assert(subject)
		}
		else if (results == null) {
			ctx[unique(subject)] = predicate
		} else {
			throw new Error("Test definition shouldn't be nested. To group tests use `o.spec()`")
		}
	}
	o.before = hook("__before")
	o.after = hook("__after")
	o.beforeEach = hook("__beforeEach")
	o.afterEach = hook("__afterEach")
	o.new = init
	o.spec = function(subject, predicate) {
		var parent = ctx
		ctx = ctx[unique(subject)] = {}
		predicate()
		ctx = parent
	}
	o.only = function(subject, predicate, silent) {
		if (!silent) console.log(highlight("/!\\ WARNING /!\\ o.only() mode"))
		o(subject, only = predicate)
	}
	o.spy = function(fn) {
		var spy = function() {
			spy.this = this
			spy.args = [].slice.call(arguments)
			spy.callCount++

			if (fn) return fn.apply(this, arguments)
		}
		if (fn)
			Object.defineProperties(spy, {
				length: {value: fn.length},
				name: {value: fn.name}
			})
		spy.args = []
		spy.callCount = 0
		return spy
	}
	o.run = function() {
		results = []
		start = new Date
		test(spec, [], [], report)

		function test(spec, pre, post, finalize) {
			pre = [].concat(pre, spec["__beforeEach"] || [])
			post = [].concat(spec["__afterEach"] || [], post)
			series([].concat(spec["__before"] || [], Object.keys(spec).map(function(key) {
				return function(done, timeout) {
					timeout(Infinity)

					if (key.slice(0, 2) === "__") return done()
					if (only !== null && spec[key] !== only && typeof only === typeof spec[key]) return done()
					subjects.push(key)
					var type = typeof spec[key]
					if (type === "object") test(spec[key], pre, post, pop)
					if (type === "function") series([].concat(pre, spec[key], post, pop))

					function pop() {
						subjects.pop()
						done()
					}
				}
			}), spec["__after"] || [], finalize))
		}

		function series(fns) {
			var cursor = 0
			next()

			function next() {
				if (cursor === fns.length) return

				var fn = fns[cursor++]
				if (fn.length > 0) {
					var timeout = 0, delay = 200, s = new Date
					var isDone = false
					var body = fn.toString()
					var arg = (body.match(/\(([\w$]+)/) || body.match(/([\w$]+)\s*=>/) || []).pop()
					if (body.indexOf(arg) === body.lastIndexOf(arg)) throw new Error("`" + arg + "()` should be called at least once")
					try {
						fn(function done() {
							if (timeout !== undefined) {
								timeout = clearTimeout(timeout)
								if (delay !== Infinity) record(null)
								if (!isDone) next()
								else throw new Error("`" + arg + "()` should only be called once")
								isDone = true
							}
							else console.log("# elapsed: " + Math.round(new Date - s) + "ms, expected under " + delay + "ms")
						}, function(t) {delay = t})
					}
					catch (e) {
						record(e.message, e)
						subjects.pop()
						next()
					}
					if (timeout === 0) {
						timeout = setTimeout(function() {
							timeout = undefined
							record("async test timed out")
							next()
						}, Math.min(delay, 2147483647))
					}
				}
				else {
					fn()
					nextTickish(next)
				}
			}
		}
	}
	function unique(subject) {
		if (hasOwn.call(ctx, subject)) {
			console.warn("A test or a spec named `" + subject + "` was already defined")
			while (hasOwn.call(ctx, subject)) subject += "*"
		}
		return subject
	}
	function hook(name) {
		return function(predicate) {
			if (ctx[name]) throw new Error("This hook should be defined outside of a loop or inside a nested test group:\n" + predicate)
			ctx[name] = predicate
		}
	}

	define("equals", "should equal", function(a, b) {return a === b})
	define("notEquals", "should not equal", function(a, b) {return a !== b})
	define("deepEquals", "should deep equal", deepEqual)
	define("notDeepEquals", "should not deep equal", function(a, b) {return !deepEqual(a, b)})

	function isArguments(a) {
		if ("callee" in a) {
			for (var i in a) if (i === "callee") return false
			return true
		}
	}
	function deepEqual(a, b) {
		if (a === b) return true
		if (a === null ^ b === null || a === undefined ^ b === undefined) return false
		if (typeof a === "object" && typeof b === "object") {
			var aIsArgs = isArguments(a), bIsArgs = isArguments(b)
			if (a.constructor === Object && b.constructor === Object && !aIsArgs && !bIsArgs) {
				for (var i in a) {
					if ((!(i in b)) || !deepEqual(a[i], b[i])) return false
				}
				for (var i in b) {
					if (!(i in a)) return false
				}
				return true
			}
			if (a.length === b.length && (a instanceof Array && b instanceof Array || aIsArgs && bIsArgs)) {
				var aKeys = Object.getOwnPropertyNames(a), bKeys = Object.getOwnPropertyNames(b)
				if (aKeys.length !== bKeys.length) return false
				for (var i = 0; i < aKeys.length; i++) {
					if (!hasOwn.call(b, aKeys[i]) || !deepEqual(a[aKeys[i]], b[aKeys[i]])) return false
				}
				return true
			}
			if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()
			if (typeof Buffer === "function" && a instanceof Buffer && b instanceof Buffer) {
				for (var i = 0; i < a.length; i++) {
					if (a[i] !== b[i]) return false
				}
				return true
			}
			if (a.valueOf() === b.valueOf()) return true
		}
		return false
	}

	function Assert(value) {this.value = value}
	function define(name, verb, compare) {
		Assert.prototype[name] = function assert(value) {
			if (compare(this.value, value)) record(null)
			else record(serialize(this.value) + "\n" + verb + "\n" + serialize(value))
			return function(message) {
				var result = results[results.length - 1]
				result.message = message + "\n\n" + result.message
			}
		}
	}
	function record(message, error) {
		var result = {pass: message === null}
		if (result.pass === false) {
			if (error == null) {
				error = new Error
				if (error.stack === undefined) new function() {try {throw error} catch (e) {error = e}}
			}
			result.context = subjects.join(" > ")
			result.message = message
			result.error = error.stack
		}
		results.push(result)
	}
	function serialize(value) {
		if (value === null || (typeof value === "object" && !(value instanceof Array)) || typeof value === "number") return String(value)
		else if (typeof value === "function") return value.name || "<anonymous function>"
		try {return JSON.stringify(value)} catch (e) {return String(value)}
	}
	function highlight(message) {
		return hasProcess ? "\x1b[31m" + message + "\x1b[0m" : "%c" + message + "%c "
	}

	function report() {
		var status = 0
		for (var i = 0, r; r = results[i]; i++) {
			if (!r.pass) {
				var stackTrace = r.error.match(/^(?:(?!Error|[\/\\]ospec[\/\\]ospec\.js).)*$/m)
				console.error(r.context + ":\n" + highlight(r.message) + (stackTrace ? "\n\n" + stackTrace + "\n\n" : ""), hasProcess ? "" : "color:red", hasProcess ? "" : "color:black")
				status = 1
			}
		}
		console.log(
			(name ? name + ": " : "") +
			results.length + " assertions completed in " + Math.round(new Date - start) + "ms, " +
			"of which " + results.filter(function(result){return result.error}).length + " failed"
		)
		if (hasProcess && status === 1) process.exit(1)
	}

	if(hasProcess) {
		nextTickish = process.nextTick
	} else {
		nextTickish = function fakeFastNextTick(next) {
			if (stack++ < 5000) next()
			else setTimeout(next, stack = 0)
		}
	}

	return o
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16), __webpack_require__(40).Buffer))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(41)
var ieee754 = __webpack_require__(42)
var isArray = __webpack_require__(43)

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 41 */
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

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = ((uint8[i] << 16) & 0xFF0000) + ((uint8[i + 1] << 8) & 0xFF00) + (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 42 */
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
/* 43 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mithril__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(0);


function copy(struct) {
    let result;
    if (Array.isArray(struct)) {
        result = [];
    }
    else if (typeof struct === 'object') {
        result = {};
    }
    else {
        return struct;
    }
    Object.keys(struct).map((k) => result[k] = copy(struct[k]));
    return result;
}
function resolve(sym, context) {
    let cl;
    context.concat(__WEBPACK_IMPORTED_MODULE_1____).some((c) => cl = c[sym]);
    return cl;
}
function recurse(config, context) {
    if (['string', 'number', 'boolean', 'function'].indexOf(typeof config) >= 0) {
        return config;
    }
    const keys = Object.keys(config);
    let result = config.length ? [] : {};
    keys.map((k) => {
        const content = recurse(config[k], context);
        const cl = resolve(k, context);
        if (cl) {
            const r = {
                compClass: cl,
                attrs: content
            };
            (!Array.isArray(config) && keys.length === 1) ?
                result = r :
                result[k] = r;
        }
        else {
            result[k] = content;
        }
    });
    return result;
}
class HsConfig {
    constructor(context) {
        this.context = context;
    }
    attachNodeTree(config, root) {
        function decodeRoute(route) {
            const rp = route.params = [];
            route.paths.map((p0) => {
                const params = p0.match(/:(.+?)\b/g);
                if (params) {
                    params.map((p1) => p1.substr(1))
                        .map((p2) => rp.indexOf(p2) < 0 ? rp.push(p2) : '');
                }
            });
            return route;
        }
        function decode(config) {
            let result = {};
            if (config.compClass && !result.root) {
                result.root = config;
            }
            else {
                Object.keys(config).map((k) => {
                    if (config[k].compClass && !result.root) {
                        result.root = config[k];
                    }
                    else if (k === 'route') {
                        result.route = decodeRoute(config.route);
                    }
                    else {
                        result[k] = config[k];
                    }
                });
            }
            return result;
        }
        function prepareRoutes(content) {
            const cr = content.root;
            class Router {
                view(node) {
                    cr.attrs.route = {};
                    content.route.params.map((k) => cr.attrs.route[k] = node.attrs[k]);
                    return Object(__WEBPACK_IMPORTED_MODULE_0__mithril__["a" /* m */])(cr.compClass, copy(cr.attrs));
                }
            }
            content.route.routes = {};
            content.route.paths.map((path) => content.route.routes[path] = Router);
        }
        function mountOrRoute(c) {
            const content = decode(c);
            const cr = content.root;
            if (!cr) {
                console.log('*** no top level component defined in config:');
                console.log(config);
            }
            if (content.route) {
                prepareRoutes(content);
                __WEBPACK_IMPORTED_MODULE_0__mithril__["a" /* m */].route(root, content.route.default, content.route.routes);
                console.log('starting router');
            }
            else {
                __WEBPACK_IMPORTED_MODULE_0__mithril__["a" /* m */].mount(root, { view: (node) => Object(__WEBPACK_IMPORTED_MODULE_0__mithril__["a" /* m */])(cr.compClass, copy(cr.attrs)) });
                console.log('mounting component');
            }
        }
        const context = this.context;
        this.getContent(config)
            .then((r) => recurse(r, context))
            .then(mountOrRoute);
    }
    getContent(config) {
        return (typeof config === 'string') ? this.load(config) : Promise.resolve(config);
    }
    load(file) {
        console.log('requesting ' + file);
        return __WEBPACK_IMPORTED_MODULE_0__mithril__["a" /* m */].request({ method: "GET", url: file })
            .catch((e) => {
            console.log('error:');
            console.log(e);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HsConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHNDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaHNDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NBLE9BQU8sRUFBRSxDQUFDLEVBQVMsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxLQUFLLE1BQU0sTUFBTSxJQUFJLENBQUM7QUFNN0IsY0FBYyxNQUFVO0lBQ3BCLElBQUksTUFBVSxDQUFDO0lBQ2YsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUFFO1NBQ3RDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUFFO1NBQ2hEO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25FLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFXRCxpQkFBaUIsR0FBVSxFQUFFLE9BQWE7SUFDdEMsSUFBSSxFQUFNLENBQUM7SUFDWCxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFLENBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JELE9BQU8sRUFBRSxDQUFDO0FBQ2QsQ0FBQztBQVlELGlCQUFpQixNQUFVLEVBQUUsT0FBYTtJQUN0QyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sTUFBTSxDQUFDLElBQUUsQ0FBQyxFQUFFO1FBQUUs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

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DocSets__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hswidget__ = __webpack_require__(7);



class DocsMenu extends __WEBPACK_IMPORTED_MODULE_0_hslayout__["Layout"] {
    constructor() {
        super(...arguments);
        this.docSet = '';
    }
    getDesc(attrs) {
        if (this.docSet !== attrs.docSet) {
            this.docSet = attrs.docSet;
            __WEBPACK_IMPORTED_MODULE_1__DocSets__["a" /* DocSets */].loadList(attrs.docSet);
        }
        const items = __WEBPACK_IMPORTED_MODULE_1__DocSets__["a" /* DocSets */].get();
        return {
            items: items.map((c) => c),
            defaultItem: (attrs.route && attrs.route.lib) ? attrs.route.lib : items[0],
            changed: (item) => __WEBPACK_IMPORTED_MODULE_0_hslayout__["m"].route.set('/api/:lib/0', { lib: item })
        };
    }
    getComponents(node) {
        const desc = this.getDesc(node.attrs);
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(__WEBPACK_IMPORTED_MODULE_2_hswidget__["Menu"], { desc: desc });
    }
}
/* harmony export (immutable) */ __webpack_exports__["DocsMenu"] = DocsMenu;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jc01lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmlldy9Eb2NzTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsQ0FBQyxFQUFTLE1BQU0sRUFBRSxNQUFPLFVBQVUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQW1CLFlBQVksQ0FBQztBQUNsRCxPQUFPLEVBQUUsSUFBSSxFQUFnQixNQUFZLFVBQVUsQ0FBQztBQWdCcEQsTUFBTSxlQUFnQixTQUFRLE1BQU07SUFBcEM7O1FBQ0ksV0FBTSxHQUFHLEVBQUUsQ0FBQztJQW1CaEIsQ0FBQztJQWpCVyxPQUFPLENBQUMsS0FBUztRQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDM0IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEM7UUFDRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDNUIsT0FBTztZQUNILEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN6RSxPQUFPLEVBQUUsQ0FBQyxJQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsQ0FBQztTQUNuRSxDQUFDO0lBQ04sQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFVO1FBQ3BCLE1BQU0sSUFBSSxHQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0oifQ==

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RadioButton__ = __webpack_require__(17);

class Menu extends __WEBPACK_IMPORTED_MODULE_0__RadioButton__["a" /* RadioButton */] {
    view(node) { return this.viewGroup('.hs-menu', node); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Menu;

;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9NZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU8sZUFBZSxDQUFDO0FBTTdDLE1BQU0sV0FBWSxTQUFRLFdBQVc7SUFDakMsSUFBSSxDQUFDLElBQVcsSUFBVyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN4RTtBQUFBLENBQUMifQ==

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ToggleButton__ = __webpack_require__(18);

class Button extends __WEBPACK_IMPORTED_MODULE_0__ToggleButton__["a" /* ToggleButton */] {
    view(node) {
        const desc = node.attrs.desc;
        desc.items = [desc.name || 'button'];
        desc.changed = desc.clicked;
        return super.view(node);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Button;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZTlDLE1BQU0sYUFBYyxTQUFRLFlBQVk7SUFDcEMsSUFBSSxDQUFDLElBQVc7UUFDWixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDSiJ9

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);

class AddButton {
    view(node) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-add-button', { onclick: node.attrs.onclick }, '');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AddButton;

class RemoveButton {
    view(node) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-remove-button', { onclick: node.attrs.onclick }, '');
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = RemoveButton;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkUmVtb3ZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0FkZFJlbW92ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkEsT0FBTyxFQUFFLENBQUMsRUFBUSxNQUFXLFVBQVUsQ0FBQztBQUV4QyxNQUFNO0lBQ0YsSUFBSSxDQUFDLElBQVU7UUFDWCxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE9BQU8sRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Q0FDSjtBQUVELE1BQU07SUFDRixJQUFJLENBQUMsSUFBVTtRQUNYLE9BQU8sQ0FBQyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsT0FBTyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQztDQUNKIn0=

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);

class Collapsible {
    constructor() {
        this.expanded = false;
    }
    toggle() {
        this.expanded = !this.expanded;
    }
    view(node) {
        const css = node.attrs.css;
        const components = node.attrs.components;
        const preArrow = node.attrs.preArrow;
        const postArrow = node.attrs.postArrow;
        if (node.attrs.isExpanded !== undefined) {
            this.expanded = node.attrs.isExpanded;
        }
        const expCSS = this.expanded ? 'hs-collapsible-expanded' : '';
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(`.hs-collapsible ${css} ${expCSS}`, { onclick: this.toggle.bind(this) }, [
            Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-collapsible-title', [
                !preArrow ? Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('') : Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(`.hs-collapsible-pre .hs-collapsible-arrow-${this.expanded ? 'down' : 'right'}`),
                components[0],
                !postArrow ? Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('') : Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(`.hs-collapsible-post .hs-collapsible-arrow-${this.expanded ? 'down' : 'left'}`),
            ]),
            components[1] ? Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-collapsible-content', components[1].map((c) => Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('', c))) : undefined
        ]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Collapsible;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGFwc2libGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29sbGFwc2libGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURBLE9BQU8sRUFBRSxDQUFDLEVBQVMsTUFBTSxVQUFVLENBQUM7QUFFcEMsTUFBTTtJQUFOO1FBQ0ksYUFBUSxHQUFHLEtBQUssQ0FBQztJQXNCckIsQ0FBQztJQXJCRyxNQUFNO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQUksQ0FBQyxJQUFVO1FBQ1gsTUFBTSxHQUFHLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDbEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDekMsTUFBTSxRQUFRLEdBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDdkMsTUFBTSxTQUFTLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDeEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBRyxTQUFTLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztTQUN6QztRQUNELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUEsQ0FBQyxDQUFBLHlCQUF5QixDQUFBLENBQUMsQ0FBQSxFQUFFLENBQUM7UUFDMUQsT0FBTyxDQUFDLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFO1lBQzVFLENBQUMsQ0FBQyx1QkFBdUIsRUFBQztnQkFDdEIsQ0FBQyxRQUFRLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDZDQUE2QyxJQUFJLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQSxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNuRyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNiLENBQUMsU0FBUyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyw4Q0FBOEMsSUFBSSxDQUFDLFFBQVEsQ0FBQSxDQUFDLENBQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN2RyxDQUFDO1lBQ0YsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMseUJBQXlCLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFLENBQUEsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7U0FDaEcsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKIn0=

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CornerButton__ = __webpack_require__(19);


class Modal {
    view(node) {
        const w = node.attrs.width || 'auto';
        const h = node.attrs.height || 'auto';
        const attrs = { style: `width:${w}; height:${h};` };
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-modal-frame', [
            Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-modal-background', { onclick: node.attrs.dismiss }, ''),
            Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-modal-foreground', attrs, !node.attrs.content ? 'modal pane' : [
                node.attrs.content,
                Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(__WEBPACK_IMPORTED_MODULE_1__CornerButton__["b" /* CornerButton */], { onclick: node.attrs.dismiss, symbol: __WEBPACK_IMPORTED_MODULE_1__CornerButton__["b" /* CornerButton */].getSymbol('cross') })
            ])
        ]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Modal;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NBLE9BQU8sRUFBRSxDQUFDLEVBQVEsTUFBTyxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE1BQU07SUFDRixJQUFJLENBQUMsSUFBVTtRQUNYLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFLLE1BQU0sQ0FBQztRQUN0QyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUM7UUFDdEMsTUFBTSxLQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QixDQUFDLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUMsRUFBRSxFQUFFLENBQUM7WUFDN0QsQ0FBQyxDQUFDLHNCQUFzQixFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNqRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Z0JBRWxCLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUMzRixDQUFDO1NBQ0wsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKIn0=

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);

function emphasize(item, match) {
    const re = new RegExp(match, 'gi');
    const decorations = item
        .replace(re, (m) => `<b>${m}</b>`)
        .split('<')
        .map((s) => {
        if (s.startsWith('/b>')) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span', { name: item }, s.slice(3));
        }
        else if (s.startsWith('b>')) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('b', { name: item }, s.slice(2));
        }
        else {
            return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span', { name: item }, s);
        }
    });
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span', decorations);
}
class GetList {
    constructor(list, map) {
        this.list = [];
        if (typeof list === 'string') {
            __WEBPACK_IMPORTED_MODULE_0_hslayout__["m"].request({ method: "GET", url: list })
                .then((data) => this.captureList(data, map));
        }
        else {
            this.captureList(list, map);
        }
    }
    captureList(list, map) {
        this.list = map ? map(list) : list;
    }
}
class TypeAhead {
    constructor() {
        this.typeAheadList = [];
        this.hidden = true;
        this.value = '';
    }
    view(node) {
        const gl = new GetList(node.attrs.list);
        const nosubmit = () => console.log('no submit function defined');
        const submit = (v) => node.attrs.onsubmit ? node.attrs.onsubmit(v) : nosubmit();
        const select = (e) => {
            if (e) {
                submit(e.target.attributes.name.value);
                this.inputNode.value = '';
                this.hidden = true;
            }
        };
        const input = (e) => {
            const n = this.inputNode = e.target;
            const input = this.value = n.value;
            const withinInput = new RegExp(`${input}`, 'gi');
            const beginningOfInput = new RegExp(`^${input}`, 'gi');
            this.typeAheadList = gl.list.filter((l) => l.match(withinInput));
            n.value = this.typeAheadList.filter((l) => l.match(beginningOfInput))[0] || input;
            this.hidden = n.value.length === 0;
            let pos = input.length;
            n.setSelectionRange(pos, n.value.length);
        };
        const keyPressed = (e) => {
            const n = this.inputNode = e.target;
            if (e.code === 'Enter') {
                submit(n.value);
                n.value = '';
                this.hidden = true;
            }
            else if (e.code === 'Backspace') {
                const input = n.firstChild.data;
                if (input.length > 0) {
                    n.value = input.slice(0);
                }
            }
        };
        const inputNode = Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(`input.hs-typeahead-input${this.value ? '.hs-typeahead-value' : '.hs-typeahead-placeholder'}`, {
            contenteditable: true,
            placeholder: node.attrs.placeholder,
            autofocus: node.attrs.autofocus || true,
            onkeydown: keyPressed.bind(this),
            oninput: input.bind(this)
        }, __WEBPACK_IMPORTED_MODULE_0_hslayout__["m"].trust(this.value ? this.value : node.attrs.placeholder));
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-form', [
            inputNode,
            this.hidden ? undefined :
                Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-typeahead-list', this.typeAheadList.map((l) => Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('', { onclick: select.bind(this) }, emphasize(l, this.value))))
        ]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TypeAhead;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZUFoZWFkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1R5cGVBaGVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ0EsT0FBTyxFQUFFLENBQUMsRUFBUyxNQUFNLFVBQVUsQ0FBQztBQUdwQyxtQkFBbUIsSUFBVyxFQUFFLEtBQVk7SUFDeEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25DLE1BQU0sV0FBVyxHQUFHLElBQUk7U0FDbkIsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUN4QyxLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ1YsR0FBRyxDQUFDLENBQUMsQ0FBUSxFQUFFLEVBQUU7UUFDZCxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckIsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QzthQUFNLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQixPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDSCxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDcEM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRUQ7SUFLSSxZQUFZLElBQW9CLEVBQUUsR0FBMkI7UUFKdEQsU0FBSSxHQUFZLEVBQUUsQ0FBQztRQUt0QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUMxQixDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7aUJBQ3RDLElBQUksQ0FBQyxDQUFDLElBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN0RDthQUFNO1lBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBVk8sV0FBVyxDQUFDLElBQVUsRUFBRSxHQUF1QjtRQUNuRCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEMsQ0FBQztDQVNKO0FBRUQsTUFBTTtJQUFOO1FBQ0ksa0JBQWEsR0FBWSxFQUFFLENBQUM7UUFDNUIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLFVBQUssR0FBRyxFQUFFLENBQUM7SUFvRGYsQ0FBQztJQWxERyxJQUFJLENBQUMsSUFBVTtRQUNYLE1BQU0sRUFBRSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RGLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBSyxFQUFFLEVBQUU7WUFBRyxJQUFJLENBQUMsRUFBRTtnQkFDL0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUN0QjtRQUFBLENBQUMsQ0FBQztRQUNILE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBSyxFQUFFLEVBQUU7WUFDcEIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3BDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNuQyxNQUFNLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDeEUsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDO1lBQ3pGLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUcsQ0FBQyxDQUFDO1lBQ2pDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDdkIsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQztRQUNGLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBSyxFQUFFLEVBQUU7WUFDekIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQ3BCLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7Z0JBQy9CLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUNoQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNsQixDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzVCO2FBQ0o7UUFDTCxDQUFDLENBQUM7UUFDRixNQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsMkJBQTJCLElBQUksQ0FBQyxLQUFLLENBQUEsQ0FBQyxDQUFBLHFCQUFxQixDQUFDLENBQUMsQ0FBQywyQkFBMkIsRUFBRSxFQUMzRztZQUNJLGVBQWUsRUFBQyxJQUFJO1lBQ3BCLFdBQVcsRUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVc7WUFDdEMsU0FBUyxFQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUk7WUFDNUMsU0FBUyxFQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3JDLE9BQU8sRUFBUyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNuQyxFQUNELENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRTdELE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRTtZQUNqQixTQUFTO1lBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFLENBQ3hELENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1RSxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0oifQ==

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hswidget__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DocSets__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Parts__ = __webpack_require__(20);





class LeftNav extends __WEBPACK_IMPORTED_MODULE_0_hslayout__["Layout"] {
    getComponents(node) {
        let lib;
        let field;
        if (node.attrs && node.attrs.route) {
            lib = node.attrs.route.lib;
            field = node.attrs.route.field;
        }
        const docSet = __WEBPACK_IMPORTED_MODULE_2__DocSets__["a" /* DocSets */].get(lib, 0) || { name: 'unknown', id: 0 };
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-left', [Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-left-nav', navList(docSet, field))]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["LeftNav"] = LeftNav;

function navList(docSet, field) {
    function collectModules(docSet) {
        const modulesByName = {};
        docSet.modules = [];
        if (docSet.children) {
            docSet.children.forEach((c) => {
                if (!(c.flags && c.flags.isExternal) && !ignoreModules[c.name]) {
                    const name = c.innerModule ? c.innerModule : c.name;
                    let module = modulesByName[name];
                    if (!module) {
                        docSet.modules.push(module = modulesByName[name] = {
                            name: name,
                            lib: docSet.lib,
                            fullPath: docSet.fullPath + '.' + name,
                            groups: []
                        });
                    }
                    const groups = {};
                    module.groups.forEach((g) => groups[g.title] = g);
                    if (c.groups) {
                        c.groups.forEach((g) => {
                            let group = groups[g.title];
                            if (!group) {
                                group = groups[g.title] = {
                                    children: [],
                                    kind: g.kind,
                                    title: g.title
                                };
                                module.groups.push(group);
                            }
                            group.children = group.children.concat(g.children);
                        });
                    }
                }
            });
        }
    }
    function externalModule(mdl) {
        let selected = false;
        if (field === '' + mdl.id || field.indexOf(mdl.fullPath) === 0) {
            selected = true;
        }
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(__WEBPACK_IMPORTED_MODULE_1_hswidget__["Collapsible"], { css: `.hs-left-nav-module`, preArrow: true, isExpanded: selected, components: [
                Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(`${selected ? '.hs-left-nav-selected' : ''}`, Object(__WEBPACK_IMPORTED_MODULE_3__Parts__["f" /* libLink */])(`a.hs-left-nav-module-name `, mdl.lib, mdl.fullPath, mdl.name)),
                !mdl.groups ? undefined : mdl.groups.map((g) => entries(g, mdl, field))
            ] });
    }
    if (docSet.kind === 0) {
        collectModules(docSet);
        const modules = docSet.modules.map(externalModule);
        modules.unshift(Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-left-nav-header', 'Modules'));
        return [Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-left-nav-content', modules)];
    }
}
const ignoreModules = {
    overview: true,
    index: true
};
function entries(group, mdl, field) {
    function moduleGet(c) {
        return __WEBPACK_IMPORTED_MODULE_2__DocSets__["a" /* DocSets */].get(mdl.lib, c);
    }
    function entry(mod) {
        const selected = (field === '' + mod.id || field === mod.fullPath) ? '.hs-left-nav-selected' : '';
        const exported = (mod.flags && mod.flags.isExported);
        const statik = (mod.flags && mod.flags.isStatic);
        const css = `a.hs-left-nav-entry ${selected} ${exported ? '.hs-left-nav-exported' : ''}`;
        return (!exported && group.title === 'Variables') ? '' :
            Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('', [
                statik ? 'static' : '',
                Object(__WEBPACK_IMPORTED_MODULE_3__Parts__["f" /* libLink */])(css, mod.lib, mod.fullPath, mod.name)
            ]);
    }
    function empty(mod) { return mod !== ''; }
    let grp = [];
    if (group && group.children) {
        grp = group.children
            .map(moduleGet)
            .sort(exportAscending)
            .map(entry)
            .filter(empty);
        if (grp.length > 0) {
            grp.unshift(Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-left-nav-header', group.title));
        }
    }
    return (grp.length > 1) ? Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(`.hs-left-nav-entries`, grp) : '';
}
function exportAscending(a, b) {
    if (a.flags && b.flags) {
        if (a.flags.isExported && b.flags.isExported) {
            return a.name > b.name;
        }
        else if (a.flags.isExported) {
            return -1;
        }
        else if (b.flags.isExported) {
            return 1;
        }
        else {
            return a.name > b.name;
        }
    }
    else {
        return a.name > b.name;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGVmdE5hdi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L0xlZnROYXYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsT0FBTyxFQUFFLENBQUMsRUFBUSxNQUFPLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQUssVUFBVSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBSyxVQUFVLENBQUM7QUFDdEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBTWxDLE1BQU0sY0FBZSxTQUFRLE1BQU07SUFDL0IsYUFBYSxDQUFDLElBQVc7UUFDckIsSUFBSSxHQUFVLENBQUM7UUFDZixJQUFJLEtBQVksQ0FBQztRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDaEMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUMzQixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ2xDO1FBQ0QsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFFLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUM3RCxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztDQUNKO0FBR0QsaUJBQWlCLE1BQVUsRUFBRSxLQUFZO0lBRXJDLHdCQUF3QixNQUFVO1FBQzlCLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztR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

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = tooltip;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);

function tooltip(text, tip, position) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-tooltip[href=#]', [text, Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(`span.hs-tooltip-${position}`, tip)]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L1Rvb2x0aXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLENBQUMsRUFBUSxNQUFNLFVBQVUsQ0FBQztBQUVuQyxNQUFNLGtCQUFrQixJQUFXLEVBQUUsR0FBVSxFQUFFLFFBQWU7SUFFNUQsT0FBTyxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixRQUFRLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkYsQ0FBQyJ9

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DocSets__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MainComment__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Parts__ = __webpack_require__(20);





class MainDetail extends __WEBPACK_IMPORTED_MODULE_0_hslayout__["Layout"] {
    getComponents(node) {
        let lib, field;
        if (node.attrs.route) {
            lib = node.attrs.route.lib;
            field = node.attrs.route.field;
        }
        node.attrs.route = undefined;
        let result = getOverview(lib, field) || itemDoc(__WEBPACK_IMPORTED_MODULE_1__DocSets__["a" /* DocSets */].get(lib, field) || '');
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-main-detail', [result]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["MainDetail"] = MainDetail;

function getOverview(lib, mdl) {
    if (mdl === '0' || mdl === '') {
        mdl = __WEBPACK_IMPORTED_MODULE_1__DocSets__["a" /* DocSets */].get(lib, `${lib}.overview`);
        if (mdl) {
            return overviewDoc(mdl);
        }
    }
    return undefined;
}
function itemDoc(mdl) {
    const sig = mdl.signatures ? mdl.signatures[0] : mdl;
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-doc', [
        title(mdl, sig),
        Object(__WEBPACK_IMPORTED_MODULE_2__MainComment__["b" /* commentLong */])(sig),
        members(sig, sig)
    ]);
}
function overviewDoc(mdl) {
    const sig = mdl.signatures ? mdl.signatures[0] : mdl;
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-doc', [
        Object(__WEBPACK_IMPORTED_MODULE_2__MainComment__["b" /* commentLong */])(sig),
    ]);
}
function title(mdl, sig) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-title', { id: Object(__WEBPACK_IMPORTED_MODULE_3__Parts__["g" /* makeID */])('title', mdl) }, itemDescriptor(mdl, sig));
}
function members(mdl, sig) {
    if (mdl.groups) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-members', [
            ...mdl.groups.map((g) => member(g, mdl.lib, true, true)),
            ...mdl.groups.map((g) => member(g, mdl.lib, true, false)),
            ...mdl.groups.map((g) => member(g, mdl.lib, false, true)),
            ...mdl.groups.map((g) => member(g, mdl.lib, false, false))
        ]);
    }
    else if (mdl.parameters) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-members', parameter(mdl.parameters, mdl.lib));
    }
    else {
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-members');
    }
}
function parameter(g, lib) {
    let content = g.map((c) => Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-parameter', { id: Object(__WEBPACK_IMPORTED_MODULE_3__Parts__["g" /* makeID */])('parameter', c) }, itemChild(c)));
    content.unshift(Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-member-title', { id: 'parameters' }, Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span', 'Parameters')));
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-member', content);
}
function member(group, lib, statc, publc) {
    const resolve = ((c) => __WEBPACK_IMPORTED_MODULE_1__DocSets__["a" /* DocSets */].get(lib, c));
    const directChildren = ((mdl) => !mdl['inheritedFrom']);
    const inheritedChildren = ((mdl) => mdl['inheritedFrom']);
    const groupMap = {
        'External modules': '.hs-item-external-module',
        'Constructors': '.hs-item-constructor',
        'Classes': '.hs-item-class',
        'Interfaces': '.hs-item-interface',
        'Functions': '.hs-item-function',
        'Methods': '.hs-item-method',
        'Variables': '.hs-item-variable',
        'Object literals': '.hs-item-object-literal',
        'Properties': '.hs-item-property',
        'Type aliases': '.hs-item-alias',
        'Accessors': '.hs-item-accessors'
    };
    const fn = groupMap[group.title] || '.hs-item-unknown-member';
    const isPublic = (flags) => flags.isPublic || (flags.isExported && !flags.isPrivate);
    const content = group.children
        .map(resolve)
        .filter(directChildren)
        .filter((mdl) => statc ? mdl.flags.isStatic : !mdl.flags.isStatic)
        .filter((mdl) => publc ? isPublic(mdl.flags) : !isPublic(mdl.flags))
        .map((mdl) => Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(fn, { id: Object(__WEBPACK_IMPORTED_MODULE_3__Parts__["g" /* makeID */])(group.title, mdl) }, itemChild(mdl)));
    const inherited = group.children
        .map(resolve)
        .filter(inheritedChildren)
        .filter((mdl) => statc ? mdl.flags.isStatic : !mdl.flags.isStatic)
        .filter((mdl) => publc ? mdl.flags.isPublic : !mdl.flags.isPublic)
        .map((mdl) => Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(`.hs-item-inherited ${fn}`, { id: Object(__WEBPACK_IMPORTED_MODULE_3__Parts__["g" /* makeID */])(group.title, mdl) }, itemChild(mdl)));
    const publStr = publc ? 'Public' : 'Protected or Private';
    const statStr = statc ? 'Static' : '';
    if (inherited.length > 0) {
        inherited.unshift(Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-inherited .hs-item-member-title', Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span', `${publStr} ${statStr} Inherited ${group.title}`)));
    }
    if (content.length > 0) {
        content.unshift(Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-member-title', { id: group.title.toLowerCase() }, Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span', `${publStr} ${statStr} ${group.title}`)));
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(`.hs-item-member ${statc ? '.hs-item-static' : ''} ${publc ? '.hs-item-public' : ''}`, content.concat(inherited));
}
function itemDescriptor(mdl, sig) {
    try {
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-desc', [
            Object(__WEBPACK_IMPORTED_MODULE_3__Parts__["b" /* flags */])(mdl),
            Object(__WEBPACK_IMPORTED_MODULE_3__Parts__["e" /* kindString */])(mdl),
            Object(__WEBPACK_IMPORTED_MODULE_3__Parts__["d" /* itemName */])(mdl, mdl),
            Object(__WEBPACK_IMPORTED_MODULE_3__Parts__["h" /* signature */])(sig, mdl),
            Object(__WEBPACK_IMPORTED_MODULE_3__Parts__["j" /* type */])(sig, mdl.lib),
            Object(__WEBPACK_IMPORTED_MODULE_3__Parts__["a" /* extensionOf */])(mdl),
            Object(__WEBPACK_IMPORTED_MODULE_3__Parts__["c" /* inheritedFrom */])(mdl),
            Object(__WEBPACK_IMPORTED_MODULE_3__Parts__["i" /* sourceLink */])(mdl)
        ]);
    }
    catch (e) {
        console.log(e);
        console.log(mdl);
    }
}
function itemChild(mdl, sig = mdl) {
    return mdl.signatures ?
        mdl.signatures.map((s) => Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-child-signature', [itemDescriptor(mdl, s), Object(__WEBPACK_IMPORTED_MODULE_2__MainComment__["a" /* comment */])(s, true)])) :
        [itemDescriptor(mdl, sig), Object(__WEBPACK_IMPORTED_MODULE_2__MainComment__["a" /* comment */])(sig, true)];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L01haW5EZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLENBQUMsRUFBUSxNQUFXLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQVMsVUFBVSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBVyxZQUFZLENBQUM7QUFDMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTyxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLElBQUksRUFDbEMsV0FBVyxFQUFFLGFBQWEsRUFDMUIsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFDVixTQUFTLENBQUM7QUFNdkMsTUFBTSxpQkFBa0IsU0FBUSxNQUFNO0lBQ2xDLGFBQWEsQ0FBQyxJQUFVO1FBQ3BCLElBQUksR0FBRyxFQUFFLEtBQUssQ0FBQztRQUNmLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDbEIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUMzQixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBRTdCLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLE9BQU8sQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0o7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LENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7U0FDcEUsTUFBTSxDQUFDLENBQUMsR0FBTyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1NBQ3BFLEdBQUcsQ0FBQyxDQUFDLEdBQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsRUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFcEcsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFBLENBQUMsQ0FBQSxRQUFRLENBQUEsQ0FBQyxDQUFBLHNCQUFzQixDQUFDO0lBQ3RELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUEsUUFBUSxDQUFBLENBQUMsQ0FBQSxFQUFFLENBQUM7SUFDbEMsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRTtRQUNwQixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQywwQ0FBMEMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxJQUFJLE9BQU8sY0FBYyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDakk7SUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFFO1FBQ2xCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixFQUFFLEVBQUMsRUFBRSxFQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxJQUFJLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEk7SUFDRCxPQUFPLENBQUMsQ0FBQyxtQkFBbUIsS0FBSyxDQUFBLENBQUMsQ0FBQSxpQkFBaUIsQ0FBQSxDQUFDLENBQUEsRUFBRSxJQUFJLEtBQUssQ0FBQSxDQUFDLENBQUEsaUJBQWlCLENBQUEsQ0FBQyxDQUFBLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUN2SCxDQUFDO0FBRUQsd0JBQXdCLEdBQU8sRUFBRSxHQUFPO0lBQ3BDLElBQUk7UUFBRSxPQUFPLENBQUMsQ0FBQyxlQUFlLEVBQUU7WUFDeEIsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNWLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFDZixRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNsQixTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNuQixJQUFJLENBQUMsR0FBRyxFQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDbkIsV0FBVyxDQUFDLEdBQUcsQ0FBQztZQUNoQixhQUFhLENBQUMsR0FBRyxDQUFDO1lBQ2xCLFVBQVUsQ0FBQyxHQUFHLENBQUM7U0FDbEIsQ0FBQyxDQUFDO0tBQ047SUFDRCxPQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQUU7QUFDbEQsQ0FBQztBQUVELG1CQUFtQixHQUFPLEVBQUUsR0FBRyxHQUFDLEdBQUc7SUFDL0IsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFBLENBQUM7UUFDbEIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQywwQkFBMEIsRUFBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pHLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdEQsQ0FBQyJ9

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = commentLong;
/* harmony export (immutable) */ __webpack_exports__["a"] = comment;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__markdown__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MainExample__ = __webpack_require__(57);



function commentLong(mdl) {
    let content = [];
    if (mdl.comment) {
        content.push(textOrShortTextOrDescription(mdl.comment, false));
        content.push(returns(mdl.comment, false));
        content.push(commentRemainder(mdl.comment));
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-comment', content);
}
function comment(mdl, short = false) {
    let content = [];
    if (mdl.comment) {
        content.push(textOrShortTextOrDescription(mdl.comment, short));
        if (!short) {
            content.push(otherCommentTags(mdl.comment));
            if (mdl.parameters) {
                content = content.concat(mainCommentParams(mdl.parameters));
            }
        }
        content.push(returns(mdl.comment, false));
        content.push(commentRemainder(mdl.comment));
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-comment', content);
}
function textOrShortTextOrDescription(comment, short) {
    let text = (comment.shortText || '');
    if (comment.text) {
        text += '\n' + (comment.text || '');
    }
    if (comment.tags) {
        comment.tags.map((tag) => { if (tag.tag === 'description') {
            text = tag.text;
        } });
    }
    text = text.replace(/<example([\S\s]*?)<\/example>/gi, short ? '' : Object(__WEBPACK_IMPORTED_MODULE_2__MainExample__["a" /* example */])({}));
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-comment-desc', prettifyCode(text, short));
}
function returns(comment, short) {
    let text = comment.returns;
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-comment-return', !text ? '' : [
        Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-comment-tag', 'returns:'),
        Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-comment-text', text)
    ]);
}
function commentRemainder(comment) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('', Object.keys(comment).map((tag) => {
        switch (tag) {
            case 'tags':
            case 'shortText':
            case 'text':
            case 'description':
            case 'returns':
                return '';
            default:
                return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-comment-special', [
                    Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-comment-tag', tag),
                    Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-comment-text', comment[tag])
                ]);
                ;
        }
    }));
}
function otherCommentTags(comment) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('', !comment.tags ? [] : comment.tags.map((tag) => {
        switch (tag.tag) {
            case 'description': return '';
            default: return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-comment-special', [
                Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-comment-tag', tag.tag),
                Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-comment-text', tag.text)
            ]);
        }
    }));
}
function mainCommentParams(params) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-comment-params', params.map((par) => Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-item-comment-param', [
        Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-comment-tag', par.name + ':'),
        Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('span.hs-item-comment-text', !par.comment ? '' :
            ((par.defaultValue !== undefined) ? `[default: ${par.defaultValue}] ` : '') + par.comment.text)
    ])));
}
function prettifyCode(comment, short) {
    let result = comment;
    function braceIndenting(text) {
        let indent = 0;
        const result = text
            .substring(6, text.length - 7)
            .trim()
            .replace(/(<)/g, '&lt;').replace(/(>)/g, '&gt;')
            .split('\n')
            .map((l) => {
            let oldIndent = indent;
            let k = l.trim();
            indent += Math.max(-1, Math.min(1, k.split('{').length - k.split('}').length));
            indent += Math.max(-1, Math.min(1, k.split('[').length - k.split(']').length));
            return '<span class="hs-code-indent"></span>'.repeat(((indent < oldIndent) ? indent : oldIndent)) + k;
        })
            .join('\n')
            .trim();
        return '<pre><code>' + result + '</code></pre>';
    }
    result = result.replace(/<code>([\S\s]*?)<\/code>/gi, braceIndenting);
    return __WEBPACK_IMPORTED_MODULE_0_hslayout__["m"].trust(Object(__WEBPACK_IMPORTED_MODULE_1__markdown__["a" /* markDown */])(result, short, __WEBPACK_IMPORTED_MODULE_0_hslayout__["m"].route.get()));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkNvbW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmlldy9NYWluQ29tbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxPQUFPLEVBQUUsQ0FBQyxFQUFTLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFPLGVBQWUsQ0FBQztBQVN6QyxNQUFNLHNCQUFzQixHQUFPO0lBQy9CLElBQUksT0FBTyxHQUFTLEVBQUUsQ0FBQztJQUN2QixJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7UUFDYixPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMvRCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUMvQztJQUNELE9BQU8sQ0FBQyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFVRCxNQUFNLGtCQUFrQixHQUFPLEVBQUUsS0FBSyxHQUFDLEtBQUs7SUFDeEMsSUFBSSxPQUFPLEdBQVMsRUFBRSxDQUFDO0lBQ3ZCLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtRQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRTtnQkFDaEIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDL0Q7U0FDSjtRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQy9DO0lBQ0QsT0FBTyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQVdELHNDQUFzQyxPQUFXLEVBQUUsS0FBYTtJQUM1RCxJQUFJLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckMsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQUUsSUFBSSxJQUFJLElBQUksR0FBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7S0FBRTtJQUN6RCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7UUFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQU8sRUFBRSxFQUFFLEdBQUUsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFHLGFBQWEsRUFBRTtZQUFFLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1NBQUMsQ0FBQSxDQUFDLENBQUUsQ0FBQztLQUN0RjtJQUNELElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxFQUFFLEtBQUssQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRixPQUFPLENBQUMsQ0FBQyx1QkFBdUIsRUFBRSxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDakUsQ0FBQztBQUtELGlCQUFpQixPQUFXLEVBQUUsS0FBYTtJQUN2QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzNCLE9BQU8sQ0FBQyxDQUFDLHlCQUF5QixFQUFFLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUEsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQywwQkFBMEIsRUFBRSxVQUFVLENBQUM7UUFDekMsQ0FBQyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQztLQUN2QyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsMEJBQTBCLE9BQVc7SUFDakMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBTyxFQUFFLEVBQUU7UUFDMUMsUUFBTyxHQUFHLEVBQUU7WUFDUixLQUFLLE1BQU0sQ0FBQztZQUNaLEtBQUssV0FBVyxDQUFDO1lBQ2pCLEtBQUssTUFBTSxDQUFDO1lBQ1osS0FBSyxhQUFhLENBQUM7WUFDbkIsS0FBSyxTQUFTO2dCQUNOLE9BQU8sRUFBRSxDQUFDO1lBQ2xCO2dCQUFTLE9BQU8sQ0FBQyxDQUFDLDBCQUEwQixFQUFFO29CQUMxQyxDQUFDLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDO29CQUNsQyxDQUFDLENBQUMsMkJBQTJCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUMvQyxDQUFDLENBQUM7Z0JBQUEsQ0FBQztTQUNQO0lBQ1QsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNSLENBQUM7QUFFRCwwQkFBMEIsT0FBVztJQUNqQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBTyxFQUFFLEVBQUU7UUFDMUQsUUFBTyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ1osS0FBSyxhQUFhLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM5QixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQywwQkFBMEIsRUFBRTtnQkFDMUMsQ0FBQyxDQUFDLDBCQUEwQixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDO2FBQzNDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNSLENBQUM7QUFFRCwyQkFBMkIsTUFBVTtJQUNqQyxPQUFPLENBQUMsQ0FBQyx5QkFBeUIsRUFBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBTyxFQUFFLEVBQUUsQ0FDeEQsQ0FBQyxDQUFDLHdCQUF3QixFQUFFO1FBQ3hCLENBQUMsQ0FBQywwQkFBMEIsRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFDLEdBQUcsQ0FBQztRQUMzQyxDQUFDLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksS0FBRyxTQUFTLENBQUMsQ0FBQSxDQUFDLENBQUMsYUFBYSxHQUFHLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM5RjtLQUNKLENBQUMsQ0FDTCxDQUFDLENBQUM7QUFDUCxDQUFDO0FBU0Qsc0JBQXNCLE9BQWMsRUFBRSxLQUFhO0lBRS9DLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUVyQix3QkFBd0IsSUFBVztRQUMvQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixNQUFNLE1BQU0sR0FBRyxJQUFJO2FBQ2QsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQzthQUMzQixJQUFJLEVBQUU7YUFDTixPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO2FBQy9DLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDWCxHQUFHLENBQUMsQ0FBQyxDQUFRLEVBQUUsRUFBRTtZQUNkLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDakIsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQy9FLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMvRSxPQUFPLHNDQUFzQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFBLENBQUMsQ0FBQSxNQUFNLENBQUEsQ0FBQyxDQUFBLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RHLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxJQUFJLENBQUM7YUFDVixJQUFJLEVBQUUsQ0FBQztRQUNaLE9BQU8sYUFBYSxHQUFHLE1BQU0sR0FBRyxlQUFlLENBQUM7SUFDcEQsQ0FBQztJQUVELE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLDRCQUE0QixFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3RFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDIn0=

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = markDown;
const showdown = __webpack_require__(21);
function markDown(text, short = false, currentRoute) {
    const converter = new showdown.Converter({
        tables: true,
        ghCompatibleHeaderId: true,
        smartIndentationFix: true,
        takslists: true,
        strikethrough: true
    });
    let result = (!text) ? '' : converter.makeHtml(text);
    if (short) {
        const i = result.indexOf('</p>');
        if (i > 0) {
            result = result.substring(0, i);
        }
    }
    result = substituteLinks(result, currentRoute);
    return result;
}
function substituteLinks(comment, currentRoute) {
    function deconstructRoute(route) {
        let lib, mod;
        route.replace(/\/([^\/.]*)\/([^\/\s]*$)/gi, (match, ...args) => {
            lib = args[0];
            mod = args[1];
            return '';
        });
        return [lib, mod];
    }
    function getLibMod(path) {
        let lib, mod, frag;
        if (path.indexOf(':') > 0) {
            [lib, mod] = path.split(':');
        }
        else {
            lib = defLib;
            mod = path;
        }
        if (mod.indexOf('#') > 0) {
            [mod, frag] = mod.split('#');
        }
        return [lib, mod, frag];
    }
    let [defLib] = deconstructRoute(currentRoute);
    comment = comment.replace(/\s{@link ([\S]*)\s*(.+)}/gi, (match, ...args) => {
        const path = args[0];
        const text = args[1];
        let [lib, module] = getLibMod(path);
        return (module === '' || module === '0' || module === 'overview') ?
            ` <a href="#!/api/${lib}/0">${text}</a>` :
            ` <a href="#!/api/${lib}/${lib}.${module}">${text}</a>`;
    });
    return comment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWFya2Rvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxRQUFRLEdBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBUXRDLE1BQU0sbUJBQW1CLElBQVcsRUFBRSxRQUFjLEtBQUssRUFBRSxZQUFtQjtJQUMxRSxNQUFNLFNBQVMsR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDckMsTUFBTSxFQUFrQixJQUFJO1FBQzVCLG9CQUFvQixFQUFJLElBQUk7UUFDNUIsbUJBQW1CLEVBQUssSUFBSTtRQUM1QixTQUFTLEVBQWUsSUFBSTtRQUM1QixhQUFhLEVBQVcsSUFBSTtLQUMvQixDQUFDLENBQUM7SUFDSCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxJQUFJLEtBQUssRUFBRTtRQUNQLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFO1lBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQUU7S0FDaEQ7SUFDRCxNQUFNLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMvQyxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBb0JELHlCQUF5QixPQUFjLEVBQUUsWUFBbUI7SUFDeEQsMEJBQTBCLEtBQVk7UUFDbEMsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQ2IsS0FBSyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFO1lBQzNELEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELG1CQUFtQixJQUFXO1FBQzFCLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsRUFBRTtZQUNyQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hDO2FBQU87WUFDSixHQUFHLEdBQUcsTUFBTSxDQUFDO1lBQ2IsR0FBRyxHQUFHLElBQUksQ0FBQztTQUNkO1FBQ0QsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsRUFBRTtZQUNwQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUc5QyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFO1FBQ3ZFLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLE1BQU0sS0FBSyxFQUFFLElBQUksTUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLEtBQUssVUFBVSxDQUFDLENBQUEsQ0FBQztZQUMxRCxvQkFBb0IsR0FBRyxPQUFPLElBQUksTUFBTSxDQUFDLENBQUM7WUFDMUMsb0JBQW9CLEdBQUcsSUFBSSxHQUFHLElBQUksTUFBTSxLQUFLLElBQUksTUFBTSxDQUFDO0lBQ3BFLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxPQUFPLENBQUM7QUFFbkIsQ0FBQyJ9

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = example;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hswidget__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hsutil__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hsgraph__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hsdata__ = __webpack_require__(22);










const gInitialized = {};
function example(context) {
    context.m = __WEBPACK_IMPORTED_MODULE_0_hslayout__["m"];
    context.hslayout = __WEBPACK_IMPORTED_MODULE_0_hslayout__;
    context.hswidget = __WEBPACK_IMPORTED_MODULE_1_hswidget__;
    context.hsgraph = __WEBPACK_IMPORTED_MODULE_3_hsgraph__;
    context.hsdata = __WEBPACK_IMPORTED_MODULE_4_hsdata__;
    context.hsutil = __WEBPACK_IMPORTED_MODULE_2_hsutil__;
    const libNames = Object.keys(context);
    const modules = libNames.map(n => context[n]);
    return (exmpl) => {
        const instance = Object(__WEBPACK_IMPORTED_MODULE_2_hsutil__["shortCheckSum"])(exmpl);
        let IDs = gInitialized[instance];
        if (!IDs) {
            IDs = gInitialized[instance] = initDesc(() => addExample(IDs)
                .then(executeScript)
                .catch(executeError));
            IDs.executeSource = exmpl;
            try {
                const scriptFn = new Function('root', ...libNames, getCommentDescriptor(IDs, exmpl));
                IDs.executeScript = (root) => scriptFn(root, ...modules);
            }
            catch (e) {
                console.log('creating script:' + e);
            }
        }
        if (document.getElementById(IDs.menuID)) {
        }
        else {
            addExample(IDs).then(executeScript).catch(executeError);
        }
        const frameHeight = (IDs.attrs ? IDs.attrs.height : undefined) || '300px';
        const wrapWithID = (css) => css === '$exampleID' ? `#${IDs.exampleID}` : `#${IDs.menuID} ${css}`;
        const style = (!IDs.pages['css']) ? '' :
            IDs.pages['css'].replace(/(^|})\s*?(\S*?)\s*?{/gi, (x, ...args) => x.replace(args[1], wrapWithID(args[1])));
        return `<style>${style}</style><example id=${IDs.exampleID} style="height:${frameHeight}" class="hs-layout-frame"></example>`;
    };
}
function initDesc(fn) {
    return {
        exampleID: getNewID(),
        menuID: getNewID(),
        desc: {
            items: [],
            selectedItem: 'js',
            changed: fn,
            size: ["50px"]
        },
        pages: {},
        activeSrcPage: undefined
    };
}
function getNewID() {
    return 'hs' + Math.floor(1000000 * Math.random());
}
function addExample(IDs) {
    return Promise.resolve(IDs).then(addExampleStructure).then(Object(__WEBPACK_IMPORTED_MODULE_2_hsutil__["delay"])(1));
}
function addExampleStructure(IDs) {
    let item = IDs.activeSrcPage || 'js';
    const root = document.getElementById(IDs.exampleID);
    IDs.desc.changed = (newItem) => {
        item = IDs.activeSrcPage = newItem;
    };
    __WEBPACK_IMPORTED_MODULE_0_hslayout__["m"].mount(root, { view: () => Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(__WEBPACK_IMPORTED_MODULE_0_hslayout__["Layout"], {
            columns: ["50%"],
            content: [
                Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(__WEBPACK_IMPORTED_MODULE_0_hslayout__["Layout"], {
                    content: Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-layout .hs-execution', { id: IDs.menuID }, 'placeholder')
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(__WEBPACK_IMPORTED_MODULE_0_hslayout__["Layout"], {
                    rows: ["30px", "fill"],
                    css: '.hs-source',
                    content: [
                        Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(__WEBPACK_IMPORTED_MODULE_1_hswidget__["Menu"], { desc: IDs.desc, size: ['50px'] }),
                        Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(__WEBPACK_IMPORTED_MODULE_0_hslayout__["Layout"], { content: Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.hs-layout .hs-source-main', __WEBPACK_IMPORTED_MODULE_0_hslayout__["m"].trust(`<code><pre>${IDs.pages[item]}</pre></code>`)) })
                    ]
                })
            ]
        })
    });
    return IDs;
}
function executeScript(IDs) {
    const root = document.getElementById(IDs.menuID);
    try {
        IDs.executeScript(root);
    }
    catch (e) {
        console.log("error executing script: " + e);
        console.log(IDs.executeSource);
        console.log(e.stack);
    }
    __WEBPACK_IMPORTED_MODULE_0_hslayout__["m"].redraw();
    return IDs;
}
function executeError(e) {
    console.log('rejection executing script:');
    console.log(e);
}
function getCommentDescriptor(IDs, example) {
    let result = '';
    let attrs = example.match(/<example\s(\S*?)(\s|>)/i);
    if (attrs && attrs[1]) {
        const at = attrs[1].split('=');
        IDs.attrs = { [at[0]]: at[1] };
    }
    example.replace(/<file[\s]*name=[\S]*?\.([\s\S]*?)['|"]>([\S\s]*?)<\/file>/gi, function (text) {
        const args = [...arguments];
        const content = args[2].trim();
        IDs.desc.items.push(args[1]);
        IDs.pages[args[1]] = content;
        return result;
    });
    return IDs.pages['js'];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmlldy9NYWluRXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRUEsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFxQixVQUFVLENBQUM7QUFDNUMsT0FBTyxFQUFFLElBQUksRUFBZ0IsTUFBUSxVQUFVLENBQUM7QUFDaEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFhLFVBQVUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQVMsUUFBUSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBaUIsUUFBUSxDQUFDO0FBQzFDLE9BQU8sS0FBSyxRQUFRLE1BQWEsVUFBVSxDQUFDO0FBQzVDLE9BQU8sS0FBSyxRQUFRLE1BQWEsVUFBVSxDQUFDO0FBQzVDLE9BQU8sS0FBSyxPQUFPLE1BQWMsU0FBUyxDQUFDO0FBQzNDLE9BQU8sS0FBSyxNQUFNLE1BQWUsUUFBUSxDQUFDO0FBQzFDLE9BQU8sS0FBSyxNQUFNLE1BQWUsUUFBUSxDQUFDO0FBb0IxQyxNQUFNLFlBQVksR0FBK0IsRUFBRSxDQUFDO0FBZXBELE1BQU0sa0JBQWtCLE9BQVc7SUFDL0IsT0FBTyxDQUFDLENBQUMsR0FBVSxDQUFDLENBQUM7SUFDckIsT0FBTyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDNUIsT0FBTyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDNUIsT0FBTyxDQUFDLE9BQU8sR0FBSSxPQUFPLENBQUM7SUFDM0IsT0FBTyxDQUFDLE1BQU0sR0FBSyxNQUFNLENBQUM7SUFDMUIsT0FBTyxDQUFDLE1BQU0sR0FBSyxNQUFNLENBQUM7SUFDMUIsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMs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

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = timeout;
/* harmony export (immutable) */ __webpack_exports__["a"] = delay;
function timeout(ms) {
    return new Promise((resolve, reject) => { setTimeout(reject, ms); });
}
function delay(ms) {
    return (args) => {
        return new Promise((resolve) => {
            setTimeout(() => { resolve(args); }, ms);
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZWRQcm9taXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1RpbWVkUHJvbWlzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQSxNQUFNLGtCQUFrQixFQUFTO0lBQzdCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekUsQ0FBQztBQVFELE1BQU0sZ0JBQWdCLEVBQVM7SUFDM0IsT0FBTyxDQUFJLElBQU0sRUFBYSxFQUFFO1FBQzVCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFzQixFQUFFLEVBQUU7WUFDMUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQztBQUNOLENBQUMifQ==

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = markDown;
const showdown = __webpack_require__(21);
const converter = new showdown.Converter();
function markDown(text) {
    return converter.makeHtml(text);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Rvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2hvd2Rvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxRQUFRLEdBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRXRDLE1BQU0sU0FBUyxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBRTNDLE1BQU0sbUJBQW1CLElBQVc7SUFDaEMsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLENBQUMifQ==

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shortCheckSum;
function shortCheckSum(s) {
    var chk = 0x12345678;
    var len = s.length;
    for (var i = 0; i < len; i++) {
        chk += (s.charCodeAt(i) * (i + 1));
    }
    return (chk & 0xffffffff).toString(16);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tzdW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ2hlY2tzdW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUMsTUFBTSx3QkFBd0IsQ0FBUTtJQUNuQyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUM7SUFDckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFCLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN0QztJQUNELE9BQU8sQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLENBQUMifQ==

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = date;
const monthStr = [
    ['Jan', 'January'], ['Feb', 'February'], ['Mar', 'March'], ['Apr', 'April'], ['May', 'May'], ['Jun', 'June'],
    ['Jul', 'July'], ['Aug', 'August'], ['Sep', 'September'], ['Oct', 'October'], ['Nov', 'November'], ['Dec', 'December']
];
const dayStr = [
    ['Sun', 'Sunday'], ['Mon', 'Monday'], ['Tue', 'Tuesday'], ['Wed', 'Wednesday'], ['Thu', 'Thursday'], ['Fri', 'Friday'], ['Sat', 'Saturday']
];
function formatNumber(number, digits) {
    var r = '' + number;
    while (r.length < digits) {
        r = "0" + r;
    }
    return r;
}
function date(formatString, date = new Date()) {
    return isNaN(date.getTime()) ?
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
/* harmony export (immutable) */ __webpack_exports__["b"] = ms;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBLE1BQU0sUUFBUSxHQUFHO0lBQ2IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO0lBQzVHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQztDQUFDLENBQUM7QUFHNUgsTUFBTSxNQUFNLEdBQUc7SUFDWCxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUM7Q0FBQyxDQUFDO0FBRzNJLHNCQUFzQixNQUFhLEVBQUUsTUFBYTtJQUM5QyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUMsTUFBTSxDQUFDO0lBQ2xCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUU7UUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztLQUFFO0lBQzFDLE9BQU8sQ0FBQyxD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QVMsRUFBTyxDQUFDLENBQVEsRUFBSSxFQUFFLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLENBQUMsR0FBQyxDQUFDO0lBQ2pELFNBQVMsRUFBTyxDQUFDLEVBQVMsRUFBRyxFQUFFLENBQUMsRUFBRSxHQUFDLENBQUMsSUFBSSxHQUFDLEVBQUUsQ0FBQztJQUM1QyxPQUFPLEVBQVMsQ0FBQyxFQUFTLEVBQUcsRUFBRSxDQUFDLEVBQUUsR0FBQyxDQUFDLElBQUksR0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDO0lBQy9DLE1BQU0sRUFBVSxDQUFDLEVBQVMsRUFBRyxFQUFFLENBQUMsRUFBRSxHQUFDLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDO0lBQ2xELE9BQU8sRUFBUyxDQUFDLEVBQVMsRUFBRyxFQUFFLENBQUMsRUFBRSxHQUFDLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQztDQUN2RCxDQUFDIn0=

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = round;
function round(n, d) {
    if (isNaN(n)) {
        return '';
    }
    if (n === 0) {
        return '0';
    }
    const exp = Math.round(Math.log10(Math.abs(n)));
    if (exp > d) {
        return '' + n;
    }
    const base = Math.pow(10, d - exp);
    return '' + Math.round(n * base) / base;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL051bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQyxNQUFNLGdCQUFnQixDQUFRLEVBQUUsQ0FBUTtJQUNwQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUFFLE9BQU8sRUFBRSxDQUFDO0tBQUU7SUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUM7S0FBRTtJQUM1QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1FBQUUsT0FBTyxFQUFFLEdBQUMsQ0FBQyxDQUFDO0tBQUU7SUFDN0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sRUFBRSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxHQUFDLElBQUksQ0FBQztBQUN0QyxDQUFDIn0=

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PacingQueue {
    constructor(delayMS = 100) {
        this.queue = [];
        this.baseMS = Date.now();
        this.delayMS = delayMS;
        this.next(this.queue);
    }
    nextTimeout() {
        setTimeout(() => this.next(this.queue), this.delayMS);
    }
    add(fn) {
        return new Promise((resolve, reject) => {
            if (this.queue.length === 0) {
                this.nextTimeout();
            }
            this.queue.push({ fn: fn, resolve: resolve, reject: reject, time: Date.now() });
        });
    }
    next(q) {
        if (q.length > 0) {
            const entry = q.shift();
            entry.resolve(entry.fn(Date.now() - entry.time)
                .catch((err) => {
                console.log(`error calling paced function: ${err}`);
                console.log(err.stack);
                throw err;
            }));
            this.nextTimeout();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PacingQueue;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFjaW5nUXVldWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvUGFjaW5nUXVldWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsTUFBTTtJQVFGLFlBQVksT0FBTyxHQUFDLEdBQUc7UUFOdkIsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixXQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBTWhCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTyxXQUFXO1FBQ2YsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsR0FBRyxDQUFDLEVBQWlDO1FBQ2pDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQUU7WUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLE9BQU8sRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUNwRixDQUFDLENBQUMsQ0FBQztJQUNELENBQUM7SUFFRCxJQUFJLENBQUMsQ0FBTztRQUNSLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDZCxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLE9BQU8sQ0FDVCxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO2lCQUNoQyxLQUFLLENBQUMsQ0FBQyxHQUFPLEVBQUUsRUFBRTtnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsTUFBTSxHQUFHLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FDTCxDQUFDO1lBQ0YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztDQUNKIn0=

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Graph__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Graph", function() { return __WEBPACK_IMPORTED_MODULE_0__Graph__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Series__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Series", function() { return __WEBPACK_IMPORTED_MODULE_1__Series__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Axes__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Axes", function() { return __WEBPACK_IMPORTED_MODULE_2__Axes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Scale__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Scale", function() { return __WEBPACK_IMPORTED_MODULE_3__Scale__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Grid__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return __WEBPACK_IMPORTED_MODULE_4__Grid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Legend__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Legend", function() { return __WEBPACK_IMPORTED_MODULE_5__Legend__["a"]; });






//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFTLFNBQVMsQ0FBQztBQUNuQyxPQUFPLEVBQUUsTUFBTSxFQUVMLE1BQWUsVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBVSxRQUFRLENBQUM7QUFDbEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFTLFNBQVMsQ0FBQztBQUNuQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQVUsUUFBUSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBUSxVQUFVLENBQUMifQ==

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hsdata__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Axes__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Scale__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Canvas__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Series__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Chart__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Grid__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Legend__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SVGElem__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hsutil__ = __webpack_require__(2);











const viewBoxWidth = 1000;
let viewBoxHeight = 700;
function copy(def) {
    let result = {};
    Object.keys(def).map((k) => {
        if (typeof def[k] === 'object' && !Array.isArray(def[k]) && def[k] !== null) {
            result[k] = copy(def[k]);
        }
        else {
            result[k] = def[k];
        }
    });
    return result;
}
class Graph extends __WEBPACK_IMPORTED_MODULE_9__SVGElem__["a" /* SVGElem */] {
    constructor() {
        super(...arguments);
        this.marginOffset = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
    }
    static makeConfig(userCfg) {
        const cfg = {};
        Graph.defaultConfig(cfg);
        __WEBPACK_IMPORTED_MODULE_4__Canvas__["a" /* Canvas */].defaultConfig(cfg);
        __WEBPACK_IMPORTED_MODULE_2__Axes__["a" /* Axes */].defaultConfig(cfg);
        __WEBPACK_IMPORTED_MODULE_5__Series__["a" /* Series */].defaultConfig(cfg);
        __WEBPACK_IMPORTED_MODULE_7__Grid__["a" /* Grid */].defaultConfig(cfg);
        __WEBPACK_IMPORTED_MODULE_6__Chart__["a" /* Chart */].defaultConfig(cfg);
        __WEBPACK_IMPORTED_MODULE_8__Legend__["a" /* Legend */].defaultConfig(cfg);
        if (userCfg) {
            try {
                userCfg(cfg);
            }
            catch (e) {
                console.log('error in usercfg');
                console.log(e);
                console.log(e.stack);
            }
        }
        return cfg;
    }
    static defaultConfig(cfg) {
        cfg.graph = {
            margin: {
                top: 10,
                left: 10,
                bottom: 10,
                right: 10
            },
            timeCond: {}
        };
    }
    static adjustConfig(cfg) {
        __WEBPACK_IMPORTED_MODULE_4__Canvas__["a" /* Canvas */].adjustConfig(cfg);
        __WEBPACK_IMPORTED_MODULE_2__Axes__["a" /* Axes */].adjustConfig(cfg);
        __WEBPACK_IMPORTED_MODULE_5__Series__["a" /* Series */].adjustConfig(cfg);
        __WEBPACK_IMPORTED_MODULE_7__Grid__["a" /* Grid */].adjustConfig(cfg);
        __WEBPACK_IMPORTED_MODULE_6__Chart__["a" /* Chart */].adjustConfig(cfg);
        __WEBPACK_IMPORTED_MODULE_8__Legend__["a" /* Legend */].adjustConfig(cfg);
    }
    createPlotArea(cfgm) {
        const tl = {
            x: cfgm.left + this.marginOffset.left,
            y: cfgm.top + this.marginOffset.top
        };
        const br = {
            x: viewBoxWidth - cfgm.right - this.marginOffset.right,
            y: viewBoxHeight - cfgm.bottom - this.marginOffset.bottom
        };
        return { tl: tl, br: br };
    }
    createData(cfg) {
        if (!cfg.series.data) {
            console.log('cfg.series.data not set');
        }
        if (!(cfg.series.data.length > 0)) {
            console.log('cfg.series.data not initialised with array of DataSets');
        }
        const timeCond = cfg.graph.timeCond;
        return cfg.series.data.map((d) => ((d instanceof __WEBPACK_IMPORTED_MODULE_1_hsdata__["Data"]) ? d : new __WEBPACK_IMPORTED_MODULE_1_hsdata__["Data"](d)).filter(timeCond));
    }
    createScales(axes) {
        if (!this.scales) {
            this.scales = {
                primary: { x: new __WEBPACK_IMPORTED_MODULE_3__Scale__["a" /* Scale */](axes.primary.x.scale), y: new __WEBPACK_IMPORTED_MODULE_3__Scale__["a" /* Scale */](axes.primary.y.scale) },
                secondary: { x: new __WEBPACK_IMPORTED_MODULE_3__Scale__["a" /* Scale */](axes.secondary.x.scale), y: new __WEBPACK_IMPORTED_MODULE_3__Scale__["a" /* Scale */](axes.secondary.y.scale) }
            };
        }
        return this.scales;
    }
    adjustRange(plotArea, scales) {
        scales.primary.x.range([plotArea.tl.x, plotArea.br.x]);
        scales.primary.y.range([plotArea.br.y, plotArea.tl.y]);
        scales.secondary.x.range([plotArea.tl.x, plotArea.br.x]);
        scales.secondary.y.range([plotArea.br.y, plotArea.tl.y]);
    }
    adjustHeight(node) {
        if (node.dom && node.dom.parentElement) {
            const p = node.dom.parentElement;
            const temp = viewBoxWidth * p.clientHeight / p.clientWidth;
            if (!isNaN(temp) && temp !== viewBoxHeight) {
                viewBoxHeight = temp;
            }
        }
    }
    adjustMargins(cfg) {
        const cfgm = cfg.graph.margin;
        function getBBox(css) {
            const elems = document.getElementsByClassName(css);
            const box = Array.prototype.map.call(elems, (e) => e.getBBox());
            if (box && box[0]) {
                margin.t = Math.max(margin.t, cfgm.top - box[0].y);
                margin.l = Math.max(margin.l, cfgm.left - box[0].x);
                margin.b = Math.max(margin.b, box[0].y + box[0].height + cfgm.bottom - viewBoxHeight);
                margin.r = Math.max(margin.r, box[0].x + box[0].width + cfgm.right - viewBoxWidth);
            }
            margin.t = Math.min(margin.t, 40);
            margin.b = 30;
            margin.l = 40;
        }
        const margin = { t: -1e6, l: -1e6, b: -1e6, r: -1e6 };
        getBBox('hs-graph-axis');
        getBBox('hs-graph-chart');
        this.marginOffset.top += Math.max(margin.t);
        this.marginOffset.left += Math.max(margin.l);
        this.marginOffset.bottom += Math.max(margin.b);
        this.marginOffset.right += Math.max(margin.r);
    }
    onupdate(node) {
        this.adjustHeight(node);
    }
    oncreate(node) {
        window.addEventListener("resize", function () { __WEBPACK_IMPORTED_MODULE_0_hslayout__["m"].redraw(); });
        this.adjustHeight(node);
        Promise.resolve(node.attrs.cfg)
            .then(Object(__WEBPACK_IMPORTED_MODULE_10_hsutil__["delay"])(10))
            .then(this.adjustMargins.bind(this))
            .then(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"].redraw);
    }
    adjustDomains(cfg, scales, data) {
        const domains = [[1e20, -1e20], [1e20, -1e20]];
        cfg.series.map((s) => {
            if (s.x) {
                data[s.dataIndex].findDomain(s.x, domains[0]);
            }
            else {
                domains[0][0] = 0;
                domains[0][1] = data[s.dataIndex].export().rows.length - 1;
            }
            if (s.y) {
                data[s.dataIndex].findDomain(s.y, domains[1]);
            }
            if (s.yBase) {
                data[s.dataIndex].findDomain(s.yBase, domains[1]);
            }
        });
        scales.primary.x.setAutoDomain(domains[0]);
        scales.primary.y.setAutoDomain(domains[1]);
    }
    view(node) {
        const cfgFn = node.attrs.cfgFn;
        const cfg = Graph.makeConfig(cfgFn);
        const plotArea = this.createPlotArea(cfg.graph.margin);
        const scales = this.createScales(cfg.axes);
        this.adjustRange(plotArea, scales);
        const data = this.createData(cfg);
        this.adjustDomains(cfg.series, scales, data);
        Graph.adjustConfig(cfg);
        node.attrs.cfg = cfg;
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg', { class: 'hs-graph', width: '100%', height: '100%',
            viewBox: `0 0 ${Object(__WEBPACK_IMPORTED_MODULE_9__SVGElem__["d" /* round */])(viewBoxWidth)} ${Object(__WEBPACK_IMPORTED_MODULE_9__SVGElem__["d" /* round */])(viewBoxHeight)}` }, [
            Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(__WEBPACK_IMPORTED_MODULE_4__Canvas__["a" /* Canvas */], { cfg: cfg.canvas }),
            Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(__WEBPACK_IMPORTED_MODULE_6__Chart__["a" /* Chart */], { cfg: cfg.chart, plotArea: plotArea }),
            Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(__WEBPACK_IMPORTED_MODULE_7__Grid__["a" /* Grid */], { cfg: cfg.grid, scales: scales }),
            Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(__WEBPACK_IMPORTED_MODULE_2__Axes__["a" /* Axes */], { cfg: cfg.axes, scales: scales }),
            Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(__WEBPACK_IMPORTED_MODULE_5__Series__["a" /* Series */], { cfg: cfg.series, scales: scales, data: data }),
            Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])(__WEBPACK_IMPORTED_MODULE_8__Legend__["a" /* Legend */], { cfg: cfg.legend })
        ]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Graph;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JhcGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvR3JhcGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVBLE9BQU8sRUFBRSxDQUFDLEVBQVEsTUFBVyxVQUFVLENBQUM7QUFDeEMsT0FBTyxFQUFFLElBQUksRUFFTyxNQUFTLFFBQVEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQWMsUUFBUSxDQUFDO0FBR3RDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBYSxTQUFTLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFDUSxNQUFNLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsTUFBTSxFQUVRLE1BQU0sVUFBVSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxLQUFLLEVBQ1EsTUFBTyxTQUFTLENBQUM7QUFDdkMsT0FBTyxFQUFFLElBQUksRUFDUyxNQUFPLFFBQVEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUNRLE1BQU0sVUFBVSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxPQUFPLEVBR1AsS0FBSyxFQUFFLE1BQWEsV0FBVyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBYSxRQUFRLENBQUM7QUFFdEMsTUFBTSxZQUFZLEdBQVcsSUFBSSxDQUFDO0FBQ2xDLElBQU0sYUFBYSxHQUFVLEdBQUcsQ0FBQztBQWlEakMsY0FBYyxHQUFPO0lBQ2pCLElBQUksTUFBTSxHQUFPLEVBQUUsQ0FBQztJQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFO1FBQzlCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUcsSUFBSSxFQUFFO1lBQ3ZFLE1BQU0sQ0FB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

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = filter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Data__ = __webpack_require__(23);

;
;
function resolveTerminalCondition(name, val, row, colNumber) {
    const col = colNumber(name);
    const valIsFunction = (typeof val === 'function');
    const valIsArray = ((typeof val === 'object') && (val.length !== undefined));
    if (isNaN(col)) {
        console.log(`column name '${name}' cannot be resolved in terminal condition ${name}=${val}`);
        console.log(row);
        return false;
    }
    else if (valIsFunction) {
        return val(row[col], row);
    }
    else if (valIsArray) {
        return (val.length === 0) || val.some((v) => row[col] === v);
    }
    else {
        return (row[col] === val);
    }
}
function resolveCondition(condition, row, r, colNumber, and = true) {
    let orResult = false;
    let andResult = true;
    if (condition === undefined) {
        return true;
    }
    else if (typeof condition === 'number') {
        return (condition === r);
    }
    else if (typeof condition === 'object') {
        const mc = condition;
        if (mc.length !== undefined) {
            return (mc.length === 0) ?
                false :
                mc.some((cd) => resolveCondition(cd, row, r, colNumber, false));
        }
        else {
            for (const name in condition) {
                let conditionMet = and;
                const setCond = condition;
                switch (name) {
                    case 'or':
                        conditionMet = resolveCondition(setCond.or, row, r, colNumber, false);
                        break;
                    case 'and':
                        conditionMet = resolveCondition(setCond.and, row, r, colNumber, true);
                        break;
                    case 'not':
                        conditionMet = !resolveCondition(setCond.not, row, r, colNumber, true);
                        break;
                    default: conditionMet = resolveTerminalCondition(name, condition[name], row, colNumber);
                }
                if (conditionMet) {
                    orResult = true;
                    if (!and) {
                        break;
                    }
                }
                else {
                    andResult = false;
                    if (and) {
                        break;
                    }
                }
            }
        }
    }
    else {
        console.error(`unrecognized condition: ${JSON.stringify(condition)}`);
        return false;
    }
    return and ? andResult : orResult;
}
function filter(data, cond, reduceFn) {
    const noop = () => 0;
    const colNumber = (name) => data.colNumber(name);
    let fn;
    switch (reduceFn) {
        default: fn = (typeof reduceFn === 'function') ? reduceFn : noop;
    }
    try {
        return new __WEBPACK_IMPORTED_MODULE_0__Data__["a" /* Data */]({
            name: data.getName(),
            colNames: data.colNames(),
            rows: data.getData().filter((row, i) => {
                const keep = resolveCondition(cond, row, i, colNumber);
                if (fn) {
                    fn(keep, row, i);
                }
                return keep;
            })
        });
    }
    catch (err) {
        console.log(err);
        console.log(err.stack);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YUZpbHRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvRGF0YUZpbHRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0hBLE9BQU8sRUFBRSxJQUFJLEVBR1osTUFBTSxRQUFRLENBQUM7QUFlZixDQUFDO0FBUUQsQ0FBQztBQUtGLGtDQUFrQyxJQUFXLEVBQUUsR0FBTyxFQUFFLEdBQVcsRUFBRSxTQUErQjtJQUNoRyxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxVQUFVLENBQUMsQ0FBQztJQUNsRCxNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDM0UsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixJQUFJLDhDQUE4QyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM3RixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO1NBQU0sSUFBSSxhQUFhLEVBQUU7UUFFdEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzdCO1NBQU0sSUFBSSxVQUFVLEVBQUU7UUFFbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3BFO1NBQU07UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxL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

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SVGElem__ = __webpack_require__(1);


class Canvas extends __WEBPACK_IMPORTED_MODULE_1__SVGElem__["a" /* SVGElem */] {
    static defaultConfig(cfg) {
        cfg.canvas = {
            range: {
                w: 100, wunit: '%',
                h: 100, hunit: '%'
            }
        };
    }
    static adjustConfig(cfg) {
    }
    view(node) {
        const cg = node.attrs.cfg;
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg', { class: 'hs-graph-canvas' }, [
            this.rect({ x: 0, y: 0 }, { w: cg.range.w, h: cg.range.h, wunit: cg.range.wunit, hunit: cg.range.hunit }, '')
        ]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Canvas;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FudmFzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0NhbnZhcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQSxPQUFPLEVBQUUsQ0FBQyxFQUFRLE1BQW1CLFVBQVUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFRLE1BQWEsV0FBVyxDQUFDO0FBU2pELE1BQU0sYUFBYyxTQUFRLE9BQU87SUFtQi9CLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBVTtRQUMzQixHQUFHLENBQUMsTUFBTSxHQUFpQjtZQUN2QixLQUFLLEVBQVM7Z0JBQ1YsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUMsR0FBRztnQkFDakIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUMsR0FBRzthQUNwQjtTQUNKLENBQUM7SUFDTixDQUFDO0lBTUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFVO0lBQzlCLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBWTtRQUNiLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFDaEIsRUFBRSxDQUFDLEVBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsRUFDekUsRUFBRSxDQUNMO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKIn0=

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Plot__ = __webpack_require__(10);


class PlotLine extends __WEBPACK_IMPORTED_MODULE_1__Plot__["a" /* Plot */] {
    plot(data, series, scales, i, clipID) {
        const x = data.colNumber(series.x);
        const y = data.colNumber(series.y);
        if (x === undefined) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.error', '');
        }
        if (y === undefined) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.error', '');
        }
        return [
            this.drawLine(clipID, data.getData(), x, y, scales, series.style, series.y),
            this.drawMarker(clipID, data.getData(), x, y, scales, series.style, series.y)
        ];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlotLine;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxvdExpbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvUGxvdExpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NBLE9BQU8sRUFBRSxDQUFDLEVBQVEsTUFBTyxVQUFVLENBQUM7QUFHcEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFVLFFBQVEsQ0FBQztBQUdsQyxNQUFNLGVBQWdCLFNBQVEsSUFBSTtJQUM5QixJQUFJLENBQUMsSUFBUyxFQUFFLE1BQWdCLEVBQUUsTUFBYyxFQUFFLENBQVEsRUFBRSxNQUFhO1FBQ3JFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFHLFNBQVMsRUFBRTtZQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzdDLElBQUksQ0FBQyxLQUFHLFNBQVMsRUFBRTtZQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzdDLE9BQU87WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzNFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEYsQ0FBQztJQUNOLENBQUM7Q0FDSiJ9

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Plot__ = __webpack_require__(10);


class PlotMarkers extends __WEBPACK_IMPORTED_MODULE_1__Plot__["a" /* Plot */] {
    plot(data, series, scales, i, clipID) {
        const x = data.colNumber(series.x);
        const y = data.colNumber(series.y);
        const l = series.l ? data.colNumber(series.l) : undefined;
        if (x === undefined) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.error', '');
        }
        if (y === undefined) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.error', '');
        }
        return [
            this.drawMarker(clipID, data.getData(), x, y, scales, series.style, series.y),
            (l === undefined) ? undefined :
                this.drawLabel(clipID, data.getData(), x, y, l, scales, series)
        ];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlotMarkers;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxvdE1hcmtlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvUGxvdE1hcmtlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNBLE9BQU8sRUFBRSxDQUFDLEVBQVEsTUFBTyxVQUFVLENBQUM7QUFHcEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFVLFFBQVEsQ0FBQztBQUdsQyxNQUFNLGtCQUFtQixTQUFRLElBQUk7SUFDakMsSUFBSSxDQUFDLElBQVMsRUFBRSxNQUFnQixFQUFFLE1BQWMsRUFBRSxDQUFRLEVBQUUsTUFBYTtRQUNyRSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3pELElBQUksQ0FBQyxLQUFHLFNBQVMsRUFBRTtZQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzdDLElBQUksQ0FBQyxLQUFHLFNBQVMsRUFBRTtZQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFLENBQUMsQ0FBQztTQUFFO1FBQzdDLE9BQU87WUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzdFLENBQUMsQ0FBQyxLQUFHLFNBQVMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7U0FDdEUsQ0FBQztJQUNOLENBQUM7Q0FDSiJ9

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Plot__ = __webpack_require__(10);


class PlotBar extends __WEBPACK_IMPORTED_MODULE_1__Plot__["a" /* Plot */] {
    drawBar(clipID, data, x, y, y0, scales, sStyle, s) {
        const style = `fill: ${sStyle.bar.color};`;
        const index = (x === undefined);
        const domain = scales.x.domain();
        const offset = s * sStyle.bar.offset * (domain[1] - domain[0]) / (100 * data.getData().length);
        const width = sStyle.bar.width * (domain[1] - domain[0]) / (100 * data.getData().length);
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg', { class: 'hs-graph-series-bars' }, data.getData().map((p, i) => {
            const rx0 = scales.x.convert((index ? i : p[x]) + offset - width / 2);
            const rx1 = scales.x.convert((index ? i : p[x]) + offset + width / 2);
            const ry0 = scales.y.convert(y0 === undefined ? 0 : p[y0]);
            const ry = scales.y.convert(p[y]);
            return this.rect({ x: rx0, y: ry0 }, { h: ry - ry0, w: rx1 - rx0 }, style);
        }));
    }
    setDefaults(data, series, scales) {
        super.setDefaults(data, series, scales);
        let dom = scales.y.domain();
        if (dom[0] > 0) {
            dom[0] = 0;
            scales.y.domain(dom);
        }
        if (series.x === undefined) {
            scales.x.domain([-0.5, data.getData().length - 0.5]);
        }
    }
    plot(data, series, scales, i, clipID) {
        const x = data.colNumber(series.x);
        const y = data.colNumber(series.y);
        const yBase = series.yBase ? data.colNumber(series.yBase) : undefined;
        if (y === undefined) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.error', '');
        }
        return [
            this.drawBar(clipID, data, x, y, yBase, scales, series.style, i),
        ];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlotBar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxvdEJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QbG90QmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEQSxPQUFPLEVBQUUsQ0FBQyxFQUFRLE1BQVcsVUFBVSxDQUFDO0FBSXhDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBYyxRQUFRLENBQUM7QUFJdEMsTUFBTSxjQUFlLFNBQVEsSUFBSTtJQUM3QixPQUFPLENBQUMsTUFBYSxFQUFFLElBQVMsRUFBRSxDQUFRLEVBQUUsQ0FBUSxFQUFFLEVBQVMsRUFBRSxNQUFjLEVBQUUsTUFBa0IsRUFBRSxDQUFRO1FBQ3pHLE1BQU0sS0FBSyxHQUFHLFNBQVMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQztRQUMzQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQztRQUNoQyxNQUFNLE1BQU0sR0FBYyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzVDLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUYsTUFBTSxLQUFLLEdBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVGLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBQyxzQkFBc0IsRUFBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUs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

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Plot__ = __webpack_require__(10);


class PlotArea extends __WEBPACK_IMPORTED_MODULE_1__Plot__["a" /* Plot */] {
    plot(data, series, scales, i, clipID) {
        const x = data.colNumber(series.x);
        const y = data.colNumber(series.y);
        const yBase = data.colNumber(series.yBase);
        const yMax = data.colNumber('$sum');
        const mapRow = (row) => (yMax === undefined) ? [
            row[x],
            row[y] + row[yBase],
            row[yBase]
        ] : [
            row[x],
            (row[y] + row[yBase]) / row[yMax],
            row[yBase] / row[yMax]
        ];
        if (y === undefined) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('.error', '');
        }
        if (series.map) {
            const d = data.getData().map(mapRow);
            return [this.drawArea(clipID, d, 0, 1, 2, scales, series.style, series.y)];
        }
        else {
            const d = data.getData();
            return [this.drawArea(clipID, d, x, y, yBase, scales, series.style, series.y)];
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlotArea;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxvdEFyZWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvUGxvdEFyZWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURBLE9BQU8sRUFBRSxDQUFDLEVBQVEsTUFBVyxVQUFVLENBQUM7QUFHeEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFjLFFBQVEsQ0FBQztBQUd0QyxNQUFNLGVBQWdCLFNBQVEsSUFBSTtJQUM5QixJQUFJLENBQUMsSUFBUyxFQUFFLE1BQWdCLEVBQUUsTUFBYyxFQUFFLENBQVEsRUFBRSxNQUFhO1FBQ3JFLE1BQU0sQ0FBQyxHQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxHQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLE1BQU0sSUFBSSxHQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFTLEVBQUUsRUFBRSxDQUN6QixDQUFDLElBQUksS0FBRyxTQUFTLENBQUMsQ0FBQSxDQUFDLENBQUM7WUFDaEIsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNOLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2pCLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FDYixDQUFDLENBQUMsQ0FBQztZQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQy9CLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1NBQ3pCLENBQUM7UUFDTixJQUFJLENBQUMsS0FBRyxTQUFTLEVBQUU7WUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUMsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUM3QyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDWixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUU7YUFBTTtZQUNILE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0wsQ0FBQztDQUNKIn0=

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hslayout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SVGElem__ = __webpack_require__(1);


;
class Chart extends __WEBPACK_IMPORTED_MODULE_1__SVGElem__["a" /* SVGElem */] {
    static defaultConfig(cfg) {
        cfg.chart = {
            visible: true,
            title: {
                visible: true,
                text: '',
                hOffset: 0,
                vOffset: -1.5,
                xpos: 'middle',
                ypos: 'top'
            }
        };
        return cfg;
    }
    static adjustConfig(cfg) {
    }
    onupdate(node) {
        this.updateTitleSize(node);
    }
    updateTitleSize(node) {
        if (node.dom) {
            const c = node.dom.lastChild;
            if (c && c.clientWidth > 0) {
                if (Chart.clientWidth !== c.clientWidth) {
                    Chart.clientWidth = c.clientWidth;
                    Chart.clientHeight = c.clientHeight;
                }
            }
        }
    }
    drawBackground(plotArea) {
        const tl = plotArea.tl;
        const br = plotArea.br;
        return this.rect({ x: tl.x, y: tl.y }, { w: br.x - tl.x, h: br.y - tl.y }, '');
    }
    drawTitle(plotArea, cfg) {
        const tl = plotArea.tl;
        const br = plotArea.br;
        cfg.title.cssClass = 'hs-graph-chart-title';
        switch (cfg.title.xpos) {
            case 'start':
                cfg.title.x = tl.x + '';
                break;
            case 'middle':
                cfg.title.x = (tl.x + br.x) / 2 + '';
                break;
            case 'end':
                cfg.title.x = br.x + '';
                break;
        }
        switch (cfg.title.ypos) {
            case 'top':
                cfg.title.y = tl.y + '';
                break;
            case 'center':
                cfg.title.y = (tl.y + br.y) / 2 + '';
                break;
            case 'bottom':
                cfg.title.y = br.y + '';
                break;
        }
        return !cfg.title.visible ? undefined : this.text(cfg.title, cfg.title.text);
    }
    view(node) {
        const cfg = node.attrs.cfg;
        const plotArea = node.attrs.plotArea;
        return Object(__WEBPACK_IMPORTED_MODULE_0_hslayout__["m"])('svg', { class: 'hs-graph-chart' }, [
            this.drawBackground(plotArea),
            this.drawTitle(plotArea, cfg)
        ]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Chart;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ2hhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBLE9BQU8sRUFBRSxDQUFDLEVBQVEsTUFBZSxVQUFVLENBQUM7QUFJNUMsT0FBTyxFQUFFLE9BQU8sRUFBUyxNQUFRLFdBQVcsQ0FBQztBQU81QyxDQUFDO0FBS0YsTUFBTSxZQUFhLFNBQVEsT0FBTztJQXNCOUIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFVO1FBQzNCLEdBQUcsQ0FBQyxLQUFLLEdBQWdCO1lBQ3JCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsS0FBSyxFQUFhO2dCQUNkLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBQyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxDQUFDO2dCQUNWLE9BQU8sRUFBRSxDQUFDLEdBQUc7Z0JBQ2IsSUFBSSxFQUFDLFFBQVE7Z0JBQ2IsSUFBSSxFQUFDLEtBQUs7YUFDYjtTQUNKLENBQUM7UUFDTixPQUFPLEdBQUcsQ0FBQztJQUNYLENBQUM7SUFNRCxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQVU7SUFDOUIsQ0FBQztJQUtELFFBQVEsQ0FBQyxJQUFZO1FBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFL0IsQ0FBQztJQUVELGVBQWUsQ0FBQyxJQUFXO1FBRXZCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNWLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEdBQUMsQ0FBQyxFQUFFO2dCQUN0QixJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRTtvQkFDckMsS0FBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDO29CQUNsQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxZQUFZLENB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

/***/ })
/******/ ]);