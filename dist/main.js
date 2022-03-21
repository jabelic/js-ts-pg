/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _oop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oop */ \"./src/oop.ts\");\n/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promise */ \"./src/promise.ts\");\n\n\n/** array operation */\n// const { includes, concat, some, iterator, every, reduce } = use();\n// concat();\n// includes();\n// some();\n// iterator();\n// every();\n// reduce();\n// /** currying */\n// currying();\n// /** const var let */\n// scopes();\n/** OOP/this */\n// _this();\n(0,_oop__WEBPACK_IMPORTED_MODULE_0__.oop)();\n(0,_promise__WEBPACK_IMPORTED_MODULE_1__.promise)();\n// reactive();\n\n\n//# sourceURL=webpack://js-ts/./src/index.ts?");

/***/ }),

/***/ "./src/oop.ts":
/*!********************!*\
  !*** ./src/oop.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"oop\": () => (/* binding */ oop)\n/* harmony export */ });\n/**\n * - this: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/this\n * - new:\n * - Decorator:\n */\nvar oop = function () {\n    var Example = /** @class */ (function () {\n        function Example() {\n            var proto = Object.getPrototypeOf(this);\n            console.debug(Object.getOwnPropertyNames(proto)); // ['constructor', 'first', 'second']\n        }\n        Example.prototype.first = function () { };\n        Example.prototype.second = function () { };\n        Example.third = function () { };\n        return Example;\n    }());\n    var exp = new Example(); // ['constructor', 'first', 'second']\n    function f() {\n        return this.a;\n    }\n    var g = f.bind({ a: \"azerty\" });\n    console.debug(g()); // azerty\n    var h = g.bind({ a: \"yoo\" }); // bind は一度しか機能しない\n    console.debug(h()); // azerty\n    var o = { a: 37, f: f, g: g, h: h };\n    console.debug(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty\n    // console.debug(Example.prototype); // { first: [Function (anonymous)], second: [Function (anonymous)] }\n};\n\n\n//# sourceURL=webpack://js-ts/./src/oop.ts?");

/***/ }),

/***/ "./src/promise.ts":
/*!************************!*\
  !*** ./src/promise.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"promise\": () => (/* binding */ promise)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __values = (undefined && undefined.__values) || function(o) {\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\n    if (m) return m.call(o);\n    if (o && typeof o.length === \"number\") return {\n        next: function () {\n            if (o && i >= o.length) o = void 0;\n            return { value: o && o[i++], done: !o };\n        }\n    };\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\n};\nvar promise = function () { return __awaiter(void 0, void 0, void 0, function () {\n    var iter, _sleep;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                iter = function () { return __awaiter(void 0, void 0, void 0, function () {\n                    var _a, _b, it;\n                    var e_1, _c;\n                    return __generator(this, function (_d) {\n                        try {\n                            for (_a = __values([1, 2, 3, 4, 5]), _b = _a.next(); !_b.done; _b = _a.next()) {\n                                it = _b.value;\n                                //   await _sleep(it);\n                                _sleep(it);\n                                console.debug(\"待ち：\", it);\n                            }\n                        }\n                        catch (e_1_1) { e_1 = { error: e_1_1 }; }\n                        finally {\n                            try {\n                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);\n                            }\n                            finally { if (e_1) throw e_1.error; }\n                        }\n                        return [2 /*return*/];\n                    });\n                }); };\n                _sleep = function (waitSeconds) {\n                    return new Promise(function (resolve) {\n                        setTimeout(function () {\n                            resolve(0);\n                        }, waitSeconds * 1000);\n                    });\n                };\n                return [4 /*yield*/, iter()];\n            case 1:\n                _a.sent();\n                return [2 /*return*/];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack://js-ts/./src/promise.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;