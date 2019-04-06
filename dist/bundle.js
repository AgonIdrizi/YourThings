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

/***/ "./src/addProjectInDom.js":
/*!********************************!*\
  !*** ./src/addProjectInDom.js ***!
  \********************************/
/*! exports provided: addProjectInDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProjectInDom\", function() { return addProjectInDom; });\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _addProjectInLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProjectInLocalStorage */ \"./src/addProjectInLocalStorage.js\");\n/* harmony import */ var _clearProjectsElementsInDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearProjectsElementsInDom */ \"./src/clearProjectsElementsInDom.js\");\n/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderProjects */ \"./src/renderProjects.js\");\n\n\n\n\nfunction addProjectInDom(e){\n  e.preventDefault();\n\tlet projectSection = document.querySelectorAll('#projects')[0]\n\tlet textInput = e.target.previousElementSibling\n\tif (textInput == \"\"){\n\t  return console.log('nothing in input') \n\t}\n\n\tconst proj = new _createProject__WEBPACK_IMPORTED_MODULE_0__[\"project\"](textInput.value)\n\tconsole.log(proj)\n\tObject(_addProjectInLocalStorage__WEBPACK_IMPORTED_MODULE_1__[\"addProjectInLocalStorage\"])(proj)\n\tObject(_clearProjectsElementsInDom__WEBPACK_IMPORTED_MODULE_2__[\"clearProjectsElementsInDom\"])()\n\tObject(_renderProjects__WEBPACK_IMPORTED_MODULE_3__[\"renderProjects\"])()\n\ttextInput.value = \"\"\n}\n\n \n\n//# sourceURL=webpack:///./src/addProjectInDom.js?");

/***/ }),

/***/ "./src/addProjectInLocalStorage.js":
/*!*****************************************!*\
  !*** ./src/addProjectInLocalStorage.js ***!
  \*****************************************/
/*! exports provided: addProjectInLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProjectInLocalStorage\", function() { return addProjectInLocalStorage; });\n/* harmony import */ var _getAllProjectsFromLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAllProjectsFromLocalStorage */ \"./src/getAllProjectsFromLocalStorage.js\");\n\nfunction addProjectInLocalStorage(project){\n  var newArrayOfProjectObjects = Object(_getAllProjectsFromLocalStorage__WEBPACK_IMPORTED_MODULE_0__[\"arrayObjectsOfAllProjects\"])().filter(elem =>{\n  \treturn elem;\n  })\n  \n  newArrayOfProjectObjects.push([project._projectId,project._name])\n  localStorage.setItem('projects', newArrayOfProjectObjects)\n  console.log(newArrayOfProjectObjects)\n}\n\n\n\n//# sourceURL=webpack:///./src/addProjectInLocalStorage.js?");

/***/ }),

/***/ "./src/clearProjectsElementsInDom.js":
/*!*******************************************!*\
  !*** ./src/clearProjectsElementsInDom.js ***!
  \*******************************************/
/*! exports provided: clearProjectsElementsInDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearProjectsElementsInDom\", function() { return clearProjectsElementsInDom; });\nfunction clearProjectsElementsInDom() {\n  let projectSection = document.querySelectorAll('#projects')[0]\n  projectSection.innerHTML = \"\";\n   \n }\n\n \n\n//# sourceURL=webpack:///./src/clearProjectsElementsInDom.js?");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getToDosOfaProject\", function() { return getToDosOfaProject; });\n/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ \"./src/createToDo.js\");\n\n\nconst getToDosOfaProject = (project_id) => {\n  var array_of_todo_objects = []\n  for ( var i = 0, len = localStorage.length; i < len; ++i ) {\n\n    let retrieveTodo = localStorage.getItem( localStorage.key( i ) ).split(',');\n    if (project_id == parseInt(retrieveTodo[0])){\n      let todoObj = new _createToDo__WEBPACK_IMPORTED_MODULE_0__[\"todo\"](retrieveTodo[0], retrieveTodo[1], retrieveTodo[2], retrieveTodo[3], retrieveTodo[4])\n      array_of_todo_objects.push(todoObj);\n    }\n    \n  }\n  return array_of_todo_objects\n}\n\n\n\n//# sourceURL=webpack:///./src/getToDosOfaProject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ \"./src/createToDo.js\");\n/* harmony import */ var _getToDosOfaProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getToDosOfaProject */ \"./src/getToDosOfaProject.js\");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderProjects */ \"./src/renderProjects.js\");\n/* harmony import */ var _removeProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeProject */ \"./src/removeProject.js\");\n/* harmony import */ var _addProjectInDom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addProjectInDom */ \"./src/addProjectInDom.js\");\n\n\n\n\n\n\n\nconsole.log('ss');\n\nvar todo1 = new _createToDo__WEBPACK_IMPORTED_MODULE_0__[\"todo\"](1, 'agg','sdfsd','fassrg','fdddd')\nvar todo2 = new _createToDo__WEBPACK_IMPORTED_MODULE_0__[\"todo\"](2, 'agg','sdfsd','fassrg','fdddd')\nvar project1 = new _createProject__WEBPACK_IMPORTED_MODULE_2__[\"project\"]('test')\n\nconsole.log(project1._projectId)\nconsole.log(todo1._description)\n\nlocalStorage.setItem('1',todo1.values)\nlocalStorage.setItem('2',todo2.values)\n\nconsole.log(Object(_getToDosOfaProject__WEBPACK_IMPORTED_MODULE_1__[\"getToDosOfaProject\"])(1))\nObject(_removeProject__WEBPACK_IMPORTED_MODULE_4__[\"removeProject\"])(2)\nObject(_renderProjects__WEBPACK_IMPORTED_MODULE_3__[\"renderProjects\"])()\n\nvar addProjectButton = document.querySelector('.add-project').lastElementChild\nconsole.log(addProjectButton)\naddProjectButton.addEventListener('click',_addProjectInDom__WEBPACK_IMPORTED_MODULE_5__[\"addProjectInDom\"])\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/removeProject.js":
/*!******************************!*\
  !*** ./src/removeProject.js ***!
  \******************************/
/*! exports provided: removeProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeProject\", function() { return removeProject; });\n/* harmony import */ var _getAllProjectsFromLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAllProjectsFromLocalStorage */ \"./src/getAllProjectsFromLocalStorage.js\");\n/* harmony import */ var _removeTodoOfaProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeTodoOfaProject */ \"./src/removeTodoOfaProject.js\");\n\n\nconst removeProject = function (project_id){\n  var arrOfProjectObjects = Object(_getAllProjectsFromLocalStorage__WEBPACK_IMPORTED_MODULE_0__[\"arrayObjectsOfAllProjects\"])()\n  var newArrayOfProjectObjects = arrOfProjectObjects.filter(elem =>{\n  \tif (elem[0] != project_id)\n  \treturn elem;\n  })\n  localStorage.setItem('projects', newArrayOfProjectObjects) \n  Object(_removeTodoOfaProject__WEBPACK_IMPORTED_MODULE_1__[\"removeAllTodosOfaProject\"])()\n}\n\n\n\n//# sourceURL=webpack:///./src/removeProject.js?");

/***/ }),

/***/ "./src/removeTodoOfaProject.js":
/*!*************************************!*\
  !*** ./src/removeTodoOfaProject.js ***!
  \*************************************/
/*! exports provided: removeTodoOfaProject, removeAllTodosOfaProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTodoOfaProject\", function() { return removeTodoOfaProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeAllTodosOfaProject\", function() { return removeAllTodosOfaProject; });\nconst removeTodoOfaProject = (project_id, todo_id) => {\n  for ( var i = 0, len = localStorage.length; i < len; ++i ) {\n   let retrieveTodo = localStorage.getItem( localStorage.key( i ) ).split(',');\n    if (todo_id == i && project_id == retrieveTodo[0]){\n      localStorage.removeItem(i)\n    }\n    \n  }\n  \n}\n\nconst removeAllTodosOfaProject = (project_id) =>{\n  for ( var i = 0, len = localStorage.length; i < len; ++i ) {\n  let retrieveTodo = localStorage.getItem( localStorage.key( i ) ).split(',');\n    if (project_id == retrieveTodo[0]){\n      localStorage.removeItem(i)\n    }\n    \n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/removeTodoOfaProject.js?");

/***/ }),

/***/ "./src/renderProjects.js":
/*!*******************************!*\
  !*** ./src/renderProjects.js ***!
  \*******************************/
/*! exports provided: renderProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjects\", function() { return renderProjects; });\n/* harmony import */ var _getAllProjectsFromLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAllProjectsFromLocalStorage */ \"./src/getAllProjectsFromLocalStorage.js\");\n/* harmony import */ var _clearProjectsElementsInDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearProjectsElementsInDom */ \"./src/clearProjectsElementsInDom.js\");\n\n\nfunction renderProjects (){\n  var projectSection = document.querySelectorAll('#projects')[0]\n  Object(_clearProjectsElementsInDom__WEBPACK_IMPORTED_MODULE_1__[\"clearProjectsElementsInDom\"])();\n  var arrayOfAllProjects = Object(_getAllProjectsFromLocalStorage__WEBPACK_IMPORTED_MODULE_0__[\"arrayObjectsOfAllProjects\"])() ;\n  arrayOfAllProjects.forEach(elem => {\n  \tlet p = document.createElement('p')\n  \tp.innerText = elem[1];\n  \tp.className = 'projects';\n  \tp.id = elem[0];\n  \tprojectSection.append(p);\n  });\n   console.log('renderproj')\n}\n\n\n\n//# sourceURL=webpack:///./src/renderProjects.js?");

/***/ })

/******/ });