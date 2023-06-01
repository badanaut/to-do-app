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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_modules_userInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js_modules/userInterface */ \"./src/js_modules/userInterface.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", (0,_js_modules_userInterface__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().loadHomePage);\n\n\n//# sourceURL=webpack://to-do-app/./src/index.js?");

/***/ }),

/***/ "./src/js_modules/userInterface.js":
/*!*****************************************!*\
  !*** ./src/js_modules/userInterface.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst displayToDo = document.querySelector(\"#task-overview\");\n\nconst userInterface = () => {\n  const toDoList = [\n    {\n      title: \"Learn React\",\n      dueDate: new Date(2023, 7, 1),\n      priority: \"high\",\n      checklist: false,\n    },\n    {\n      title: \"Learn Node.js\",\n      dueDate: new Date(2023, 8, 1),\n      priority: \"medium\",\n      checklist: true,\n    },\n    {\n      title: \"Find a Web Developer Job\",\n      dueDate: new Date(2023, 9, 1),\n      priority: \"low\",\n      checklist: false,\n    },\n  ];\n\n  const loadHomePage = () => {\n    toDoList.forEach((item) => {\n      const tr = document.createElement(\"tr\");\n      tr.innerHTML = `\n        <td>${item.title}</td>\n        <td>${item.dueDate.toISOString().split(\"T\")[0]}</td>\n        <td>\n          <input type=\"checkbox\" ${item.checklist ? \"checked\" : \"\"} />\n        </td>\n        <td>\n          <select>\n            <option value=\"high\" ${\n              item.priority === \"high\" ? \"selected\" : \"\"\n            }>High</option>\n            <option value=\"medium\" ${\n              item.priority === \"medium\" ? \"selected\" : \"\"\n            }>Medium</option>\n            <option value=\"low\" ${\n              item.priority === \"low\" ? \"selected\" : \"\"\n            }>Low</option>\n          </select>\n        </td>\n      `;\n      displayToDo.append(tr);\n    });\n  };\n\n  return {\n    loadHomePage,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userInterface);\n\n\n//# sourceURL=webpack://to-do-app/./src/js_modules/userInterface.js?");

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