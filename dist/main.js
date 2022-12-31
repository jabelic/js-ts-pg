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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _this__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./this */ \"./src/this.ts\");\n\n/** array operation */\n// const { includes, concat, some, iterator, every, reduce } = use();\n// concat();\n// includes();\n// some();\n// iterator();\n// every();\n// reduce();\n// /** currying */\n// currying();\n// /** const var let */\n// scopes();\n/** OOP/this */\n(0,_this__WEBPACK_IMPORTED_MODULE_0__._this)();\n// oop();\n// promise();\n// reactive();\n\n\n//# sourceURL=webpack://js-ts/./src/index.ts?");

/***/ }),

/***/ "./src/this.ts":
/*!*********************!*\
  !*** ./src/this.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"_this\": () => (/* binding */ _this)\n/* harmony export */ });\nvar _this_1 = undefined;\nvar _this = function () {\n    console.debug(\"===== bind call apply =====\");\n    var numbers = [5, 6, 2, 3, 7];\n    /**\n     * apply\n     * - 第1引数はthisのスコープ, 第2引数には関数に渡す引数を「配列」で指定する\n     */\n    var max = Math.max.apply(null, numbers);\n    console.log(max); // expected : 7\n    var min = Math.min.apply(null, numbers);\n    console.log(min); // expected : 2\n    function Product(name, price) {\n        this.name = name;\n        this.price = price;\n        console.log(this); // expected : Food { name: 'cheese', price: 5 }\n    }\n    function Food(name, price) {\n        /**\n         * call\n         * - 第1引数はthisのスコープ, 第2引数には関数に渡す引数を「可変長引数」で指定できる\n         */\n        Product.call(this, name, price);\n        this.category = \"food\";\n    }\n    console.log(new Food(\"cheese\", 5).name); // expected : \"cheese\"\n    /**\n     * # bind, call, apply\n     * - arrow functionはthisを持たないので動作しない\n     * - __bindしてcall/applyした場合, bindの方のthisが優先される__\n     * - func.call([thisArg[, arg1, arg2, ...argN]])\n     * - func.apply(thisArg, [ argsArray])\n     */\n    var main = function (arg) {\n        return arg;\n    };\n    console.debug(main.call(_this_1, \"hoge\")); // hoge\n    console.debug(main.apply(_this_1, [\"hoge\"])); // hoge\n    var obj = {\n        prop1: 100,\n        func: function () {\n            console.log(this);\n        },\n        arw: function () {\n            console.log(_this_1);\n        },\n    };\n    var exe = obj.func;\n    exe.bind(obj).call(); // { prop1: 100, func: [Function: func], arw: [Function: arw] }\n    obj.arw.call(obj); // undefined\n};\n\n\n//# sourceURL=webpack://js-ts/./src/this.ts?");

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