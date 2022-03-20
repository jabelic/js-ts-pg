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

/***/ "./src/arrays.ts":
/*!***********************!*\
  !*** ./src/arrays.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"use\": () => (/* binding */ use)\n/* harmony export */ });\nvar __read = (undefined && undefined.__read) || function (o, n) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\n    if (!m) return o;\n    var i = m.call(o), r, ar = [], e;\n    try {\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\n    }\n    catch (error) { e = { error: error }; }\n    finally {\n        try {\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\n        }\n        finally { if (e) throw e.error; }\n    }\n    return ar;\n};\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\n/** TODO: js array method\n * - concat\n * - includes\n * - some\n * - every\n * - find\n * - filter\n */\n/**\n * References\n * - https://qiita.com/Nossa/items/4a425e57ec4b7eedb7cb\n */\nvar use = function () {\n    console.debug(\"===== array methods =====\");\n    var books = [\n        { title: \"幼年期の終り\", author: \"アーサー・C・クラーク\" },\n        { title: \"1984年\", author: \"ジョージ・オーウェル\" },\n        { title: \"われはロボット\", author: \"アイザック・アシモフ\" },\n    ];\n    var userList1 = [\"user1\", \"user2\", \"user3\"];\n    var userList2 = [\"user4\", \"user5\", \"user6\"];\n    var pets = [\"cat\", \"dog\", \"bat\"];\n    var incrementNumerics = [1, 2, 3, 4, 5];\n    var letters = [\"a\", \"b\", \"c\"]; // NOTE: (string | number)としないとnumber型とconcatする時にエラーになる\n    var positiveNumerics = [1, 30, 39, 29, 10, 13];\n    /** concat */\n    var concat = function () {\n        console.debug(\"===== concat =====\");\n        var allUser = userList1.concat(userList2);\n        /** userList1とuserList2が結合されて出てくる */\n        console.debug(\"concat: \", allUser);\n        var alphaNumeric = letters.concat(1, [2, 3]);\n        console.debug(\"concat multiple types\", alphaNumeric); // results in ['a', 'b', 'c', 1, 2, 3]\n        var nestedNum1 = [[1]];\n        var nestedNum2 = [2, [3, 4]];\n        console.debug(\"nest array\", nestedNum1.concat(nestedNum2)); //[ [ 1 ], 2, [ 3 ] ]\n        // flatになる階層はconcatされる側の階層に依存する\n    };\n    /** includes */\n    var includes = function () {\n        console.debug(\"====== includes =====\");\n        console.debug(\"array.includes, expected true: \", pets.includes(\"cat\")); // expected output: true\n        console.debug(\"array.includes, expected false: \", pets.includes(\"at\")); // expected output: false\n        console.debug(\"string.includes: \", \"concat\".includes(\"at\")); // expected output: true\n        /** objectは参照が比較される。 */\n        /** 参照が一致するのでtrue */\n        var target = books[1];\n        var includes = books.includes(target);\n        console.debug(\"includes, same reference: \", includes); // expected output: true\n        /** 値は一緒でも参照は違うのでfalse */\n        var _target = { title: \"1984年\", author: \"ジョージ・オーウェル\" };\n        var notIncludes = books.includes(_target);\n        console.debug(\"notIncludes, difference reference: \", notIncludes); // expected output: false\n    };\n    /**\n     * ECMA-262 標準の第5版\n     *\n     * some() メソッドは、配列の少なくとも一つの要素が、\n     * 指定された関数で実装されたテストに合格するかどうかをテストします。\n     * これはブール値を返します。\n     *\n     * someのcallback関数は結果を必ずreturnすること。\n     * (elem) => condition  OR (elem) => {return condition} OR function(elem){return condition;}\n     *  */\n    var some = function () {\n        console.debug(\"====== some =====\");\n        /** The most simple case. */\n        console.debug(\"someで'even' : \", incrementNumerics.some(function (element) { return element % 2 === 0; }));\n        var _target = { title: \"1984年\", author: \"ジョージ・オーウェル\" };\n        var _some = books.some(function (item) {\n            return item.author === _target.author && item.title === _target.title;\n        });\n        console.debug(\"some: \", _some); // expected output: true\n        //** advanced */\n        var _some2 = books.some(function (item, index, arr) {\n            // 'arr' is books.\n            // 'this' is _target\n            return item.author === this.author && item.title === this.title;\n        }, _target);\n        console.debug(\"this in some: \", _some2);\n        //** advanced */\n        var _some3 = books.some(function (item, index, arr) {\n            // 'arr' is books.\n            // 'this' is _target\n            return this == item;\n        }, _target);\n        console.debug(\"objectの比較は参照が違えばfalse: \", _some3);\n    };\n    var iterator = function () {\n        console.debug(\"===== [@@iterator]() =====\");\n        var eArr = incrementNumerics[Symbol.iterator]();\n        console.debug(eArr.next().value); // 1\n        console.debug(eArr.next().value); // 2\n        console.debug(eArr.next().value); // 3\n        console.debug(eArr.next().value); // 4\n        console.debug(eArr.next().value); // 5\n        console.debug(eArr.next().value); // undefined\n    };\n    var every = function () {\n        /** ECMA-262 標準, 第5版\n         * 列内のすべての要素が指定された関数で実装されたテストに合格するかどうかをテストします。\n         * @returns boolean\n         */\n        console.debug(\"every: \", positiveNumerics.every(function (currentValue) {\n            return currentValue < (this === null || this === void 0 ? void 0 : this.maximum);\n        }, {\n            maximum: 40,\n        })); // expected output: true\n        // こっちの方が好き\n        var lowerThanThreshold = function (currentValue, threshold) {\n            return currentValue < threshold;\n        };\n        console.debug(\"every: \", positiveNumerics.every(function (currentValue) {\n            return lowerThanThreshold(currentValue, 40);\n        })); // expected output: true\n    };\n    var reduce = function () {\n        var array1 = [1, 2, 3, 4];\n        var initialValue = 0;\n        var sumWithInitial = array1.reduce(function (previousValue, currentValue) { return previousValue + currentValue; }, initialValue);\n        console.debug(\"reduce: \", sumWithInitial);\n    };\n    // The compiler option '--downlevelIteration' is needed to copy like that.\n    var setIDs = new Set([1, 2, 3, 4, 5, 5, 5, 6]);\n    var ListIDs = __spreadArray([], __read(setIDs), false);\n    return { concat: concat, includes: includes, some: some, iterator: iterator, every: every, reduce: reduce };\n};\n\n\n//# sourceURL=webpack://js-ts/./src/arrays.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrays */ \"./src/arrays.ts\");\n/* harmony import */ var _vueReactive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vueReactive */ \"./vueReactive.ts\");\n/** Twitter(premium)を想定 */\n\n\n/** array operation */\nvar _a = (0,_arrays__WEBPACK_IMPORTED_MODULE_0__.use)(), includes = _a.includes, concat = _a.concat, some = _a.some, iterator = _a.iterator, every = _a.every, reduce = _a.reduce;\n// concat();\n// includes();\n// some();\n// iterator();\n// every();\nreduce();\n// /** currying */\n// currying();\n// /** const var let */\n// scopes();\n// _this();\n// oop();\n(0,_vueReactive__WEBPACK_IMPORTED_MODULE_1__.reactive)();\n\n\n//# sourceURL=webpack://js-ts/./src/index.ts?");

/***/ }),

/***/ "./vueReactive.ts":
/*!************************!*\
  !*** ./vueReactive.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"compositionApi\": () => (/* binding */ compositionApi),\n/* harmony export */   \"reactive\": () => (/* binding */ reactive)\n/* harmony export */ });\n// function ref<T extends object>(raw: T): T extends Ref ? T : Ref<T>;\nvar compositionApi = function () {\n    var Ref = /** @class */ (function () {\n        function Ref(val) {\n            this.val = val;\n            this._val = this.val;\n        }\n        Object.defineProperty(Ref.prototype, \"value\", {\n            get: function () {\n                return this._val;\n            },\n            set: function (val) {\n                this._val = val;\n            },\n            enumerable: false,\n            configurable: true\n        });\n        return Ref;\n    }());\n    function ref(value) {\n        return new Ref(value);\n    }\n    return { ref: ref };\n};\nvar reactive = function () {\n    var ref = compositionApi().ref;\n    var name = ref(\"initial\");\n    console.debug(name.value);\n    name.value = \"値変更\";\n    console.debug(name.value);\n};\n\n\n//# sourceURL=webpack://js-ts/./vueReactive.ts?");

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