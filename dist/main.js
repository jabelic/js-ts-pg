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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _typedArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typedArray */ \"./src/typedArray.ts\");\n\n/** array operation */\n// const { includes, concat, some, iterator, every, reduce } = use();\n// concat();\n// includes();\n// some();\n// iterator();\n// every();\n// reduce();\n// /** currying */\n// currying();\n// /** const var let */\n// scopes();\n/** OOP/this */\n// _this();\n// oop();\n// promise();\n// reactive();\n// useBlob();\n// generator();\n// iter()\n// symbol()\n// objs()\n(0,_typedArray__WEBPACK_IMPORTED_MODULE_0__.typedArray)();\n\n\n//# sourceURL=webpack://js-ts/./src/index.ts?");

/***/ }),

/***/ "./src/typedArray.ts":
/*!***************************!*\
  !*** ./src/typedArray.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"typedArray\": () => (/* binding */ typedArray)\n/* harmony export */ });\n// https://hakuhin.jp/js/typed_array.html\nvar typedArray = function () {\n    // 配列の個数を指定して、Uint8Array オブジェクトを作成する\n    // ArrayBuffer に対応している\n    // if(window.ArrayBuffer){\n    // 配列の個数を指定して、Uint8Array オブジェクトを作成する\n    var ary_u8 = new Uint8Array(128);\n    // ビューから、ArrayBuffer オブジェクトを取得する\n    var ary_buffer = ary_u8.buffer;\n    // 確保した総バイト数\n    console.log(ary_buffer.byteLength); // 128 (1 * 128)\n    // }\n    // 配列の個数を指定して、Float64Array オブジェクトを作成する\n    // ArrayBuffer に対応している\n    // if(window.ArrayBuffer){\n    // 配列の個数を指定して、Float64Array オブジェクトを作成する\n    var ary_f64 = new Float64Array(64);\n    // ビューから、ArrayBuffer オブジェクトを取得する\n    var ary_buffer = ary_f64.buffer;\n    // 確保した総バイト数\n    console.log(ary_buffer.byteLength); // 512 (8 * 64)\n    // }\n    // 要素数5（2バイト×5＝10バイト）のUint16Arrayを作成する。\n    var arr1 = new Uint16Array(5);\n    console.log(arr1); // [0, 0, 0, 0, 0] ※初期値は0\n    console.log(arr1[5]); // 範囲外は「undefined」\n    // 通常の配列で初期データを指定して作成する。\n    var arr2 = new Uint16Array([254, 255, 256, 257, 258]);\n    console.log(arr2); // [254, 255, 256, 257, 258]\n    // 他の型付き配列で初期データを指定して作成する。\n    // 型に収まらない数値が与えられた場合は、下位ビットのみが採用される。\n    var arr3 = new Uint8Array(arr2);\n    console.log(arr3); // [254, 255, 0, 1, 2]\n};\n\n\n//# sourceURL=webpack://js-ts/./src/typedArray.ts?");

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