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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _iter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iter */ \"./src/iter.ts\");\n\n/** array operation */\n// const { includes, concat, some, iterator, every, reduce } = use();\n// concat();\n// includes();\n// some();\n// iterator();\n// every();\n// reduce();\n// /** currying */\n// currying();\n// /** const var let */\n// scopes();\n/** OOP/this */\n// _this();\n// oop();\n// promise();\n// reactive();\n// useBlob();\n// generator();\n(0,_iter__WEBPACK_IMPORTED_MODULE_0__.iter)();\n\n\n//# sourceURL=webpack://js-ts/./src/index.ts?");

/***/ }),

/***/ "./src/iter.ts":
/*!*********************!*\
  !*** ./src/iter.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"iter\": () => (/* binding */ iter)\n/* harmony export */ });\nvar __values = (undefined && undefined.__values) || function(o) {\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\n    if (m) return m.call(o);\n    if (o && typeof o.length === \"number\") return {\n        next: function () {\n            if (o && i >= o.length) o = void 0;\n            return { value: o && o[i++], done: !o };\n        }\n    };\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\n};\n// https://qiita.com/kura07/items/cf168a7ea20e8c2554c6\nvar iter = function () {\n    // // イテレータ：nextメソッドを持ち、それがイテレータリザルトを返すこと\n    // const iterator = {\n    //     next : function(){\n    //         var iteratorResult = { value: 42, done: false }; // イテレータリザルト\n    //         // value: 値, done: 値を取り終えたかどうか\n    //         return iteratorResult;\n    //     }\n    // }\n    var e_1, _a, e_2, _b;\n    // // イテラブル：[Symbol.iterator]() メソッドを実行すると イテレータ を返すこと\n    // const obj:any = {}\n    // obj[Symbol.iterator] = function(){\n    //     return iterator\n    // }\n    var obj = {}; // イテラブルなオブジェクト\n    obj[Symbol.iterator] = function () {\n        var iterator = {}; // イテレータ\n        var count = 1;\n        iterator.next = function () {\n            var iteratorResult = (count <= 10)\n                ? { value: count++, done: false }\n                : { value: undefined, done: true };\n            return iteratorResult; // イテレータリザルト\n        };\n        return iterator;\n    };\n    // こんなことをしなくても、配列、文字列を使えばそれもイテレータとなる\n    var iterator = obj[Symbol.iterator](); // イテラブルなオブジェクトからイテレータを取得する\n    var iteratorResult;\n    while (true) {\n        iteratorResult = iterator.next(); // 順番に値を取りだす\n        if (iteratorResult.done)\n            break; // 取り出し終えたなら、break\n        console.log(iteratorResult.value); // 値をコンソールに出力\n        /** 1 2 3 4 5 6 7 8 9 10 */\n    }\n    try {\n        for (var obj_1 = __values(obj), obj_1_1 = obj_1.next(); !obj_1_1.done; obj_1_1 = obj_1.next()) {\n            var v = obj_1_1.value;\n            console.log(v);\n        }\n    }\n    catch (e_1_1) { e_1 = { error: e_1_1 }; }\n    finally {\n        try {\n            if (obj_1_1 && !obj_1_1.done && (_a = obj_1.return)) _a.call(obj_1);\n        }\n        finally { if (e_1) throw e_1.error; }\n    }\n    /** 1 2 3 4 5 6 7 8 9 10 */\n    var obj2 = [\"A\", \"B\", \"C\"]; // イテラブルなオブジェクト\n    var iterator2 = obj2[Symbol.iterator](); // イテレータを取得する\n    try {\n        for (var iterator2_1 = __values(iterator2), iterator2_1_1 = iterator2_1.next(); !iterator2_1_1.done; iterator2_1_1 = iterator2_1.next()) {\n            var v = iterator2_1_1.value;\n            console.log(v);\n        } // for-of にイテレータを渡す\n    }\n    catch (e_2_1) { e_2 = { error: e_2_1 }; }\n    finally {\n        try {\n            if (iterator2_1_1 && !iterator2_1_1.done && (_b = iterator2_1.return)) _b.call(iterator2_1);\n        }\n        finally { if (e_2) throw e_2.error; }\n    }\n    // [Symbol.iterator]() は自分自身を返す\n    /**\n     * イテレータの利用法\n     * - 配列\n     * - 分割代入\n     * - 引数渡し\n     * Map, Set, WeakMap, WeakSet\n     */\n};\n\n\n//# sourceURL=webpack://js-ts/./src/iter.ts?");

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