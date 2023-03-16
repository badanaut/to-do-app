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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_modules_userInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js_modules/userInterface */ \"./src/js_modules/userInterface.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', _js_modules_userInterface__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadHomePage);\n\n\n//# sourceURL=webpack://to-do-app/./src/index.js?");

/***/ }),

/***/ "./src/js_modules/createTodoItem.js":
/*!******************************************!*\
  !*** ./src/js_modules/createTodoItem.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTodoItem)\n/* harmony export */ });\nfunction createTodoItem(itemName, description, priority) {\n  let status = 'Incomplete';\n\n  return {\n    getItemName() {\n      return itemName;\n    },\n    getDescription() {\n      return description;\n    },\n    getPriority() {\n      return priority;\n    },\n    getStatus() {\n      return status;\n    },\n    setStatus(newStatus) {\n      status = newStatus;\n    },\n  };\n}\n\n\n//# sourceURL=webpack://to-do-app/./src/js_modules/createTodoItem.js?");

/***/ }),

/***/ "./src/js_modules/userInterface.js":
/*!*****************************************!*\
  !*** ./src/js_modules/userInterface.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ userInterface)\n/* harmony export */ });\n/* harmony import */ var _createTodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodoItem */ \"./src/js_modules/createTodoItem.js\");\n\n\nclass userInterface {\n  static loadHomePage() {\n    const taskContainer = document.getElementById('task-overview');\n    taskContainer.innerHTML = `<div id=\"task-category\">Inbox</div>\n    <button id=\"add-to-do\">Add ToDo</button>\n    <div id=\"to-do-container\"></div>`;\n  }\n\n  static addTodoItem(itemName, description, priority) {\n    const todoList = []; // to add code that get to do items from html page\n    const newTodoItem = (0,_createTodoItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(itemName, description, priority);\n    todoList.push(newTodoItem);\n  }\n}\n\n\n//# sourceURL=webpack://to-do-app/./src/js_modules/userInterface.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;