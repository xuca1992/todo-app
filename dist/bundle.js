/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Todo = function () {
  function Todo(text) {
    _classCallCheck(this, Todo);

    this.text = text;
    this.editMode = false;
    this.li = document.createElement('li');
    this.li.setAttribute("class", "list-group-item");
    this._createRemoveBtn();
    this._createTextInput();
    this._createEditBtn();
    this.li.appendChild(this.textInput);
    this.li.appendChild(this.edit);
    this.li.appendChild(this.remove);
  }

  _createClass(Todo, [{
    key: "_createTextInput",
    value: function _createTextInput() {
      this.textInput = document.createElement('input');
      this.textInput.setAttribute("class", "form-control");
      this.textInput.value = this.text;
      this.textInput.disabled = true;
    }
  }, {
    key: "_createEditBtn",
    value: function _createEditBtn() {
      var _this = this;

      this.edit = document.createElement('button');
      this.edit.setAttribute("class", "btn btn-primary");
      this.edit.innerHTML = 'Edit';
      this.edit.onclick = function () {
        if (_this.editMode) {
          _this.edit.innerHTML = 'Edit';
          _this.text = _this.textInput.value;
          _this.textInput.disabled = true;
          _this.editMode = false;
          return;
        }
        _this.textInput.disabled = false;
        _this.editMode = true;
        _this.edit.innerHTML = 'Save';
      };
    }
  }, {
    key: "_createRemoveBtn",
    value: function _createRemoveBtn() {
      var _this2 = this;

      this.remove = document.createElement('button');
      this.remove.setAttribute("class", "btn btn-danger");
      this.remove.innerHTML = 'x';
      this.remove.onclick = function () {
        _this2.li.parentNode.removeChild(_this2.li);
      };
    }
  }]);

  return Todo;
}();

;

exports.default = Todo;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _todo = __webpack_require__(0);

var _todo2 = _interopRequireDefault(_todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
  function Main() {
    _classCallCheck(this, Main);

    this._ul = document.getElementById('UL');
    this._todoInput = document.getElementById('todoInput');
    this._addTodoBtn = document.getElementById('addTodo');
    this._addTodoBtn.onclick = this.addTodo.bind(this);
  }

  _createClass(Main, [{
    key: 'addTodo',
    value: function addTodo() {
      if (!this._todoInput.value) {
        alert("Add text...");
      } else {
        var todo = new _todo2.default(this._todoInput.value);
        this._ul.appendChild(todo.li);
        this._todoInput.value = null;
      }
    }
  }]);

  return Main;
}();

;

exports.default = new Main();

/***/ })
/******/ ]);