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
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/createToDo.js":
/*!***************************!*\
  !*** ./src/createToDo.js ***!
  \***************************/
/*! exports provided: todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todo\", function() { return todo; });\nclass todo {\n  constructor(projectId,title, description, dueDate, priority){\n  \tthis._projectId = projectId,\n  \tthis._title = title;\n  \tthis._description = description;\n  \tthis._dueDate = dueDate;\n  \tthis._priority = priority;\n  }\n\nget values() {\n\treturn [this._projectId, this._title, this._description, this._dueDate, this._priority]\n}\n\n}\n\n\n\n//# sourceURL=webpack:///./src/createToDo.js?");

/***/ }),

/***/ "./src/getToDosOfaProject.js":
/*!***********************************!*\
  !*** ./src/getToDosOfaProject.js ***!
  \***********************************/
/*! exports provided: getToDosOfaProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getToDosOfaProject\", function() { return getToDosOfaProject; });\n/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ \"./src/createToDo.js\");\n\n\nconst getToDosOfaProject = (project_id) => {\n  var array_of_todo_objects = []\n  for ( var i = 0, len = localStorage.length; i < len; ++i ) {\n\n    let retrieveTodo = localStorage.getItem( localStorage.key( i ) ).split(',');\n    if (project_id == retrieveTodo[0]){\n      let todoObj = new _createToDo__WEBPACK_IMPORTED_MODULE_0__[\"todo\"](retrieveTodo[0], retrieveTodo[1], retrieveTodo[2], retrieveTodo[3], retrieveTodo[4])\n      array_of_todo_objects.push(todoObj);\n    }\n    \n  }\n  return array_of_todo_objects\n}\n\n\n\n//# sourceURL=webpack:///./src/getToDosOfaProject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ \"./src/createToDo.js\");\n/* harmony import */ var _getToDosOfaProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getToDosOfaProject */ \"./src/getToDosOfaProject.js\");\n\n\n\nconsole.log('ss');\n\nvar ag = new _createToDo__WEBPACK_IMPORTED_MODULE_0__[\"todo\"](1, 'agg','sdfsd','fassrg','fdddd')\nvar vg = new _createToDo__WEBPACK_IMPORTED_MODULE_0__[\"todo\"]()\nconsole.log(ag._description)\nconsole.log(vg._description)\n\nlocalStorage.setItem('session',ag.values)\nconsole.log(localStorage.getItem('session'))\n\nconsole.log(Object(_getToDosOfaProject__WEBPACK_IMPORTED_MODULE_1__[\"getToDosOfaProject\"])(1))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });