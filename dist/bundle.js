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

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/*! exports provided: project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"project\", function() { return project; });\nclass project {\n  constructor(name){\n  \tthis._name = name;\n    this._projectId = maxIdofProjectsinLocalStorage()\n    \n   function maxIdofProjectsinLocalStorage (){\n      let idsOfProjects = localStorage.getItem('projects').split(',').filter(elem => !isNaN(parseInt(elem)))\n      //get latest id of a project stored in localstorage, or set it to 1\n      let max = Math.max(...idsOfProjects) || 1\n      return  max + 1;\n    }\n  \t\n  }\n\n  get values() {\n\treturn [this._projectId, this._name]\n  }\n\n}\n\n//# sourceURL=webpack:///./src/createProject.js?");

/***/ }),

/***/ "./src/createToDo.js":
/*!***************************!*\
  !*** ./src/createToDo.js ***!
  \***************************/
/*! exports provided: todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todo\", function() { return todo; });\nclass todo {\n  constructor(projectId,title, description, dueDate, priority){\n  \tthis._projectId = projectId;\n  \tthis._title = title;\n  \tthis._description = description;\n  \tthis._dueDate = dueDate;\n  \tthis._priority = priority;\n  }\n\n  get values() {\n\treturn [this._projectId, this._title, this._description, this._dueDate, this._priority]\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./src/createToDo.js?");

/***/ }),

/***/ "./src/getAllProjectsFromLocalStorage.js":
/*!***********************************************!*\
  !*** ./src/getAllProjectsFromLocalStorage.js ***!
  \***********************************************/
/*! exports provided: arrayObjectsOfAllProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arrayObjectsOfAllProjects\", function() { return arrayObjectsOfAllProjects; });\nconst arrayObjectsOfAllProjects = function (){\n  const myArray = localStorage.getItem('projects').split(',');\n  const chunk_size = 2\n  function chunkArray(myArray, chunk_size){\n\tlet results = [];\n\n\twhile(myArray.length) {\n\t  results.push(myArray.splice(0,chunk_size));\n\t}\n\treturn results\n  }\n  let allProjects = chunkArray(myArray,chunk_size)\n  allProjects.map(elem => {\n    return {id: elem[0], name: elem[1]}\n})\n  return allProjects\n}\n\n\n\n//# sourceURL=webpack:///./src/getAllProjectsFromLocalStorage.js?");

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
/*! exports provided: renderProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ \"./src/createToDo.js\");\n/* harmony import */ var _getToDosOfaProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getToDosOfaProject */ \"./src/getToDosOfaProject.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderProjects */ \"./src/renderProjects.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"renderProjects\", function() { return _renderProjects__WEBPACK_IMPORTED_MODULE_3__[\"renderProjects\"]; });\n\n\n\n\n\n\nconsole.log('ss');\n\nvar ag = new _createToDo__WEBPACK_IMPORTED_MODULE_0__[\"todo\"](1, 'agg','sdfsd','fassrg','fdddd')\nvar project1 = new _createProject__WEBPACK_IMPORTED_MODULE_2__[\"project\"]('test')\nconsole.log(project1._projectId)\nconsole.log(ag._description)\n\nlocalStorage.setItem('1',ag.values)\n\nconsole.log(Object(_getToDosOfaProject__WEBPACK_IMPORTED_MODULE_1__[\"getToDosOfaProject\"])(1))\n\nrenderProjects()\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/renderProjects.js":
/*!*******************************!*\
  !*** ./src/renderProjects.js ***!
  \*******************************/
/*! exports provided: renderProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjects\", function() { return renderProjects; });\n/* harmony import */ var _getAllProjectsFromLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAllProjectsFromLocalStorage */ \"./src/getAllProjectsFromLocalStorage.js\");\n\n\nconst renderProjects = function (){\n  var projectSection = document.querySelectorAll('#projects')[0]\n  var arrayOfAllProjects = Object(_getAllProjectsFromLocalStorage__WEBPACK_IMPORTED_MODULE_0__[\"arrayObjectsOfAllProjects\"])() ;\n  arrayOfAllProjects.forEach(elem => {\n  \tlet p = document.createElement('p')\n  \tp.innerText = elem[1];\n  \tp.className = 'projects';\n  \tp.id = elem[0];\n  \tprojectSection.append(p);\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/renderProjects.js?");

/***/ })

/******/ });