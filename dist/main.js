/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n  background-color: #e9f1f7;\r\n}\r\n\r\n.reload-icon,\r\n.edit-icon,\r\n#enter-Button,\r\n.remove-icon {\r\n  width: 15px;\r\n}\r\n\r\n.reload-icon,\r\n#enter-Button,\r\n.remove-icon {\r\n  cursor: pointer;\r\n}\r\n\r\n.edit-icon {\r\n  cursor: move;\r\n}\r\n\r\n#add-task {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#add-task-text {\r\n  border: none;\r\n  width: 90%;\r\n  background-color: #e7dfc6;\r\n}\r\n\r\n#add-task-text:focus {\r\n  outline: none;\r\n}\r\n\r\n.todo-item-content {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n  gap: 10px;\r\n}\r\n\r\n.todo-item-content span {\r\n  width: 100%;\r\n}\r\n\r\n.todo-description {\r\n  width: 100%;\r\n  border: none;\r\n  resize: none;\r\n  user-select: none;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  background-color: #e7dfc6;\r\n}\r\n\r\n.completed {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.icon-hidden {\r\n  display: none;\r\n}\r\n\r\n.todo-description:focus {\r\n  outline: none;\r\n  white-space: nowrap;\r\n  overflow-x: hidden;\r\n}\r\n\r\n#todo-day-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  gap: 10px;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  justify-content: space-between;\r\n  padding: 0.5rem 0.5rem;\r\n  line-height: 1rem;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nh1 {\r\n  font-size: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.editing {\r\n  background-color: #fffeca;\r\n  transition: 1s ease-in-out;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  cursor: pointer;\r\n}\r\n\r\n#clear-completed {\r\n  cursor: pointer;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n  background-color: #e7dfc6;\r\n}\r\n\r\n#clear-completed:hover {\r\n  color: #f00;\r\n  text-decoration: underline;\r\n}\r\n\r\n#todo-list-container {\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n  width: 60%;\r\n  gap: 10px;\r\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\r\n  background-color: #e7dfc6;\r\n}\r\n\r\n#todo-list-content {\r\n  width: 100%;\r\n  padding: 0;\r\n}\r\n\r\n.dragging {\r\n  opacity: 0.5;\r\n}\r\n\r\n.over {\r\n  border: 2px solid skyblue;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;;;;EAIE,WAAW;AACb;;AAEA;;;EAGE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,2BAA2B;EAC3B,yBAAyB;EACzB,wBAAwB;EACxB,sBAAsB;EACtB,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;EACX,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,8BAA8B;EAC9B,sBAAsB;EACtB,iBAAiB;EACjB,iBAAiB;EACjB,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;EACd,UAAU;EACV,SAAS;EACT,sCAAsC;EACtC,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":["body {\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n  background-color: #e9f1f7;\r\n}\r\n\r\n.reload-icon,\r\n.edit-icon,\r\n#enter-Button,\r\n.remove-icon {\r\n  width: 15px;\r\n}\r\n\r\n.reload-icon,\r\n#enter-Button,\r\n.remove-icon {\r\n  cursor: pointer;\r\n}\r\n\r\n.edit-icon {\r\n  cursor: move;\r\n}\r\n\r\n#add-task {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n#add-task-text {\r\n  border: none;\r\n  width: 90%;\r\n  background-color: #e7dfc6;\r\n}\r\n\r\n#add-task-text:focus {\r\n  outline: none;\r\n}\r\n\r\n.todo-item-content {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n  gap: 10px;\r\n}\r\n\r\n.todo-item-content span {\r\n  width: 100%;\r\n}\r\n\r\n.todo-description {\r\n  width: 100%;\r\n  border: none;\r\n  resize: none;\r\n  user-select: none;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  background-color: #e7dfc6;\r\n}\r\n\r\n.completed {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.icon-hidden {\r\n  display: none;\r\n}\r\n\r\n.todo-description:focus {\r\n  outline: none;\r\n  white-space: nowrap;\r\n  overflow-x: hidden;\r\n}\r\n\r\n#todo-day-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  gap: 10px;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  justify-content: space-between;\r\n  padding: 0.5rem 0.5rem;\r\n  line-height: 1rem;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nh1 {\r\n  font-size: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.editing {\r\n  background-color: #fffeca;\r\n  transition: 1s ease-in-out;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  cursor: pointer;\r\n}\r\n\r\n#clear-completed {\r\n  cursor: pointer;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n  background-color: #e7dfc6;\r\n}\r\n\r\n#clear-completed:hover {\r\n  color: #f00;\r\n  text-decoration: underline;\r\n}\r\n\r\n#todo-list-container {\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n  width: 60%;\r\n  gap: 10px;\r\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\r\n  background-color: #e7dfc6;\r\n}\r\n\r\n#todo-list-content {\r\n  width: 100%;\r\n  padding: 0;\r\n}\r\n\r\n.dragging {\r\n  opacity: 0.5;\r\n}\r\n\r\n.over {\r\n  border: 2px solid skyblue;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(description, index, completed = false) {
    this.description = description;
    this.index = index;
    this.completed = completed;
  }
}


/***/ }),

/***/ "./src/modules/Todo.js":
/*!*****************************!*\
  !*** ./src/modules/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _handleDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleDom.js */ "./src/modules/handleDom.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/modules/data.js");
/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox.js */ "./src/modules/checkbox.js");
/* harmony import */ var _dropDrag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropDrag.js */ "./src/modules/dropDrag.js");





class Todo {
  constructor(list = []) {
    this.list = list;
  }

  sortList = () => {
    this.list.sort((a, b) => a.index - b.index);
  };

  renderList = () => {
    (0,_handleDom_js__WEBPACK_IMPORTED_MODULE_0__.clearTodoList)();
    this.sortList();
    for (let i = 0; i < this.list.length; i += 1) {
      this.list[i].index = i + 1;
      (0,_handleDom_js__WEBPACK_IMPORTED_MODULE_0__.appendTodoElement)(this.list[i], this);
    }
    this.saveList();
    (0,_handleDom_js__WEBPACK_IMPORTED_MODULE_0__.implementEdit)(this);
    (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this);
    (0,_handleDom_js__WEBPACK_IMPORTED_MODULE_0__.createClearCompletedElement)(this);
    (0,_dropDrag_js__WEBPACK_IMPORTED_MODULE_3__.dragInteraction)(this);
  };

  saveList = () => {
    (0,_data_js__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)(this.list);
  };

  addTask = (task) => {
    this.list.push(task);
    const index = this.list.length;
    this.list[index - 1].index = index;
    return this.list;
  };

  removeTask = (index) => {
    this.list.splice(index, 1);
    return this.list;
  };

  editTask = (index, description) => {
    this.list[index].description = '';
    this.list[index].description = description;
    return this.list;
  };

  toggleCompleted = (index) => {
    this.list[index].completed = !this.list[index].completed;
    (0,_data_js__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)(this.list);
  };

  filterCompleted = () => {
    this.list = this.list.filter((task) => !task.completed);
    return this.list;
  };
}


/***/ }),

/***/ "./src/modules/checkbox.js":
/*!*********************************!*\
  !*** ./src/modules/checkbox.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const implementCheckBoxEvents = (list) => {
  const checkBoxes = document.querySelectorAll('.checkbox');
  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const index = e.target.dataset.index - 1;
      const textZone = document.querySelector(`.todo-description[data-index="${index + 1}"]`);
      textZone.classList.toggle('completed');
      list.toggleCompleted(index);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (implementCheckBoxEvents);


/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkLocalStorage": () => (/* binding */ checkLocalStorage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "loadLocalStorage": () => (/* binding */ loadLocalStorage),
/* harmony export */   "saveToLocalStorage": () => (/* binding */ saveToLocalStorage)
/* harmony export */ });
const checkLocalStorage = () => {
  if (localStorage.getItem('todoListData')) {
    return true;
  }
  return false;
};

const saveToLocalStorage = (todoListData) => {
  window.localStorage.setItem('todoListData', JSON.stringify(todoListData));
};

const loadLocalStorage = () => JSON.parse(window.localStorage.getItem('todoListData'));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ checkLocalStorage, saveToLocalStorage, loadLocalStorage });


/***/ }),

/***/ "./src/modules/dropDrag.js":
/*!*********************************!*\
  !*** ./src/modules/dropDrag.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dragInteraction": () => (/* binding */ dragInteraction)
/* harmony export */ });
const swapItems = (fromIndex, toIndex, todo) => {
  const itemOne = todo.list[fromIndex - 1].index;
  const itemTwo = todo.list[toIndex - 1].index;
  todo.list[fromIndex - 1].index = itemTwo;
  todo.list[toIndex - 1].index = itemOne;
  todo.saveList();
  todo.renderList();
};

const dragInteraction = (todo) => {
  let dragStartIndex;
  const draggables = document.querySelectorAll('.todo-item');
  const dragListItems = document.querySelectorAll('#todo-list-content li');
  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', (e) => {
      dragStartIndex = +e.target.closest('li').getAttribute('data-index');
    });
  });
  dragListItems.forEach((item) => {
    item.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    item.addEventListener('dragenter', (e) => {
      e.target.closest('li').classList.add('over');
    });
    item.addEventListener('dragleave', (e) => {
      e.target.closest('li').classList.remove('over');
    });
    item.addEventListener('drop', (e) => {
      const dragEndIndex = +e.target.getAttribute('data-index');
      e.target.closest('li').classList.remove('over');
      swapItems(dragStartIndex, dragEndIndex, todo);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragInteraction);


/***/ }),

/***/ "./src/modules/handleDom.js":
/*!**********************************!*\
  !*** ./src/modules/handleDom.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendTodoElement": () => (/* binding */ appendTodoElement),
/* harmony export */   "clearTodoList": () => (/* binding */ clearTodoList),
/* harmony export */   "createClearCompletedElement": () => (/* binding */ createClearCompletedElement),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "implementEdit": () => (/* binding */ implementEdit)
/* harmony export */ });
const appendTodoElement = (task, todo) => {
  const todoList = document.getElementById('todo-list-content');
  const todoElement = document.createElement('li');
  todoElement.className = 'todo-item';
  todoElement.draggable = true;

  const edit = document.createElement('i');
  edit.className = ' fas fa-solid fas fas fa-ellipsis-v edit-icon';
  edit.setAttribute('data-index', task.index);

  const remove = document.createElement('i');
  remove.className = 'remove-icon icon-hidden fas fa-solid fa-trash';
  remove.setAttribute('data-index', task.index);
  remove.setAttribute('draggable', 'false');
  remove.addEventListener('click', (e) => {
    e.preventDefault();
    todo.list = todo.removeTask(task.index - 1);
    todo.renderList();
  });

  todoElement.setAttribute('data-index', task.index);
  todoElement.innerHTML = `<div class="todo-item-content"> <input class="checkbox" data-index=${
    task.index
  } type="checkbox" ${
    task.completed ? 'checked' : ''
  } /> <span draggable = false> <textarea draggable=false class="todo-description ${
    task.completed ? 'completed' : ''
  }" data-index=${task.index} rows="1" maxlength="100">${
    task.description
  }</textarea> </span> </div>`;

  todoElement.appendChild(remove);
  todoElement.appendChild(edit);
  todoList.appendChild(todoElement);
};

const deleteClearButton = () => {
  if (document.getElementById('clear-completed') === null) return;
  const clearCompleted = document.getElementById('clear-completed');
  clearCompleted.parentNode.removeChild(clearCompleted);
};

const clearTodoList = () => {
  const todoList = document.getElementById('todo-list-content');
  todoList.innerHTML = '';
  deleteClearButton();
};

const toggleHiddenIcon = (event, task) => {
  task.classList.toggle('editing');
  const { index } = event.target.dataset;
  const listTag = document.querySelector(`li[data-index="${index}"]`);
  listTag.classList.toggle('editing');
  const removeIcon = document.querySelector(`.remove-icon[data-index="${index}"]`);
  const editIcon = document.querySelector(`.edit-icon[data-index="${index}"]`);
  setTimeout(() => {
    removeIcon.classList.toggle('icon-hidden');
    editIcon.classList.toggle('icon-hidden');
  }, 1000);
};

const implementEdit = (todo) => {
  const todoEditData = document.querySelectorAll('.todo-description');
  todoEditData.forEach((task) => {
    task.addEventListener('input', (e) => {
      const index = e.target.dataset.index - 1;
      todo.list = todo.editTask(index, e.target.value);
      todo.saveList();
    });
    task.addEventListener('focusin', (e) => {
      toggleHiddenIcon(e, task);
    });
    task.addEventListener('focusout', (e) => {
      toggleHiddenIcon(e, task);
    });
  });
};

const createClearCompletedElement = (todo) => {
  const clearCompleted = document.createElement('button');
  clearCompleted.id = 'clear-completed';
  clearCompleted.textContent = 'Clear all completed';
  document.getElementById('todo-list-container').appendChild(clearCompleted);
  clearCompleted.addEventListener('click', () => {
    todo.list = todo.filterCompleted();
    todo.renderList();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  appendTodoElement,
  clearTodoList,
  implementEdit,
  createClearCompletedElement,
});


/***/ }),

/***/ "./src/assets/arrow-enter-svgrepo-com.svg":
/*!************************************************!*\
  !*** ./src/assets/arrow-enter-svgrepo-com.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4e24dc9debe95e830b8.svg";

/***/ }),

/***/ "./src/assets/refresh-svgrepo-com.svg":
/*!********************************************!*\
  !*** ./src/assets/refresh-svgrepo-com.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d08a4cb0ed7aa4b91b18.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _assets_refresh_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/refresh-svgrepo-com.svg */ "./src/assets/refresh-svgrepo-com.svg");
/* harmony import */ var _assets_arrow_enter_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/arrow-enter-svgrepo-com.svg */ "./src/assets/arrow-enter-svgrepo-com.svg");
/* harmony import */ var _modules_Todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Todo.js */ "./src/modules/Todo.js");
/* harmony import */ var _modules_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/data.js */ "./src/modules/data.js");
/* harmony import */ var _modules_Task_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Task.js */ "./src/modules/Task.js");







const refreshIcon = document.querySelector('#refresh');
const submitFormButton = document.getElementById('enter-Button');
const taskInput = document.getElementById('add-task-text');

const createTodoList = () => {
  let todoListData;
  if ((0,_modules_data_js__WEBPACK_IMPORTED_MODULE_4__.checkLocalStorage)()) {
    todoListData = new _modules_Todo_js__WEBPACK_IMPORTED_MODULE_3__["default"]((0,_modules_data_js__WEBPACK_IMPORTED_MODULE_4__.loadLocalStorage)());
    todoListData.renderList();
    return todoListData;
  }
  todoListData = new _modules_Todo_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
  return todoListData;
};

const todoListData = createTodoList();

const imageRefresh = new Image();
imageRefresh.src = _assets_refresh_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__;
imageRefresh.className = 'reload-icon';
refreshIcon.appendChild(imageRefresh);

const submitTask = () => {
  if (taskInput.value !== '') {
    todoListData.list = todoListData.addTask(new _modules_Task_js__WEBPACK_IMPORTED_MODULE_5__["default"](taskInput.value));
    todoListData.renderList();
    taskInput.value = '';
  }
};

const loadEnterIcon = () => {
  submitFormButton.src = _assets_arrow_enter_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__;
  submitFormButton.alt = 'Enter';
  submitFormButton.addEventListener('click', submitTask);
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      submitTask();
    }
  });
};

window.onload = () => {
  loadEnterIcon();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDOEI7QUFDRTtBQUN2QjtBQUNtQztBQUNuQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbUVBQWlCO0FBQ3ZCLHVCQUF1Qix3REFBSSxDQUFDLGtFQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDREQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsd0RBQUk7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdFQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1yZXZpZXcvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXJldmlldy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1yZXZpZXcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXJldmlldy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1yZXZpZXcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1yZXZpZXcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcmV2aWV3Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcmV2aWV3Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcmV2aWV3Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1yZXZpZXcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXJldmlldy8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1yZXZpZXcvLi9zcmMvbW9kdWxlcy9Ub2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcmV2aWV3Ly4vc3JjL21vZHVsZXMvY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1yZXZpZXcvLi9zcmMvbW9kdWxlcy9kYXRhLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcmV2aWV3Ly4vc3JjL21vZHVsZXMvZHJvcERyYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1yZXZpZXcvLi9zcmMvbW9kdWxlcy9oYW5kbGVEb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1yZXZpZXcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1yZXZpZXcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1yZXZpZXcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcmV2aWV3L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1yZXZpZXcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0LXJldmlldy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtcmV2aWV3L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3QtcmV2aWV3L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0LXJldmlldy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjFmNztcXHJcXG59XFxyXFxuXFxyXFxuLnJlbG9hZC1pY29uLFxcclxcbi5lZGl0LWljb24sXFxyXFxuI2VudGVyLUJ1dHRvbixcXHJcXG4ucmVtb3ZlLWljb24ge1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5yZWxvYWQtaWNvbixcXHJcXG4jZW50ZXItQnV0dG9uLFxcclxcbi5yZW1vdmUtaWNvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWljb24ge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2sge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stdGV4dCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZGZjNjtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrLXRleHQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbS1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0tY29udGVudCBzcGFuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kZXNjcmlwdGlvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdkZmM2O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGVkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGVzY3JpcHRpb246Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWRheS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMXJlbTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXRpbmcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmVjYTtcXHJcXG4gIHRyYW5zaXRpb246IDFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyLWNvbXBsZXRlZCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2RmYzY7XFxyXFxufVxcclxcblxcclxcbiNjbGVhci1jb21wbGV0ZWQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmMDA7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tbGlzdC1jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2IoMCAwIDAgLyAxNSUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZGZjNjtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tbGlzdC1jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWdnaW5nIHtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXIge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgc2t5Ymx1ZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTs7OztFQUlFLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0NBQXNDO0VBQ3RDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmMWY3O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVsb2FkLWljb24sXFxyXFxuLmVkaXQtaWNvbixcXHJcXG4jZW50ZXItQnV0dG9uLFxcclxcbi5yZW1vdmUtaWNvbiB7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbG9hZC1pY29uLFxcclxcbiNlbnRlci1CdXR0b24sXFxyXFxuLnJlbW92ZS1pY29uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtaWNvbiB7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzayB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzay10ZXh0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdkZmM2O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2stdGV4dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbS1jb250ZW50IHNwYW4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2RmYzY7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5pY29uLWhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kZXNjcmlwdGlvbjpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tZGF5LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdGluZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWNhO1xcclxcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXItY29tcGxldGVkIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZGZjNjtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyLWNvbXBsZXRlZDpob3ZlciB7XFxyXFxuICBjb2xvcjogI2YwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1saXN0LWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYigwIDAgMCAvIDE1JSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdkZmM2O1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1saXN0LWNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dpbmcge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlciB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBza3libHVlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgaW5kZXgsIGNvbXBsZXRlZCA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBhcHBlbmRUb2RvRWxlbWVudCxcclxuICBjbGVhclRvZG9MaXN0LFxyXG4gIGltcGxlbWVudEVkaXQsXHJcbiAgY3JlYXRlQ2xlYXJDb21wbGV0ZWRFbGVtZW50LFxyXG59IGZyb20gJy4vaGFuZGxlRG9tLmpzJztcclxuaW1wb3J0IHsgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9kYXRhLmpzJztcclxuaW1wb3J0IGltcGxlbWVudENoZWNrQm94RXZlbnRzIGZyb20gJy4vY2hlY2tib3guanMnO1xyXG5pbXBvcnQgeyBkcmFnSW50ZXJhY3Rpb24gfSBmcm9tICcuL2Ryb3BEcmFnLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xyXG4gIGNvbnN0cnVjdG9yKGxpc3QgPSBbXSkge1xyXG4gICAgdGhpcy5saXN0ID0gbGlzdDtcclxuICB9XHJcblxyXG4gIHNvcnRMaXN0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5saXN0LnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcclxuICB9O1xyXG5cclxuICByZW5kZXJMaXN0ID0gKCkgPT4ge1xyXG4gICAgY2xlYXJUb2RvTGlzdCgpO1xyXG4gICAgdGhpcy5zb3J0TGlzdCgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgdGhpcy5saXN0W2ldLmluZGV4ID0gaSArIDE7XHJcbiAgICAgIGFwcGVuZFRvZG9FbGVtZW50KHRoaXMubGlzdFtpXSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNhdmVMaXN0KCk7XHJcbiAgICBpbXBsZW1lbnRFZGl0KHRoaXMpO1xyXG4gICAgaW1wbGVtZW50Q2hlY2tCb3hFdmVudHModGhpcyk7XHJcbiAgICBjcmVhdGVDbGVhckNvbXBsZXRlZEVsZW1lbnQodGhpcyk7XHJcbiAgICBkcmFnSW50ZXJhY3Rpb24odGhpcyk7XHJcbiAgfTtcclxuXHJcbiAgc2F2ZUxpc3QgPSAoKSA9PiB7XHJcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UodGhpcy5saXN0KTtcclxuICB9O1xyXG5cclxuICBhZGRUYXNrID0gKHRhc2spID0+IHtcclxuICAgIHRoaXMubGlzdC5wdXNoKHRhc2spO1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3QubGVuZ3RoO1xyXG4gICAgdGhpcy5saXN0W2luZGV4IC0gMV0uaW5kZXggPSBpbmRleDtcclxuICAgIHJldHVybiB0aGlzLmxpc3Q7XHJcbiAgfTtcclxuXHJcbiAgcmVtb3ZlVGFzayA9IChpbmRleCkgPT4ge1xyXG4gICAgdGhpcy5saXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICByZXR1cm4gdGhpcy5saXN0O1xyXG4gIH07XHJcblxyXG4gIGVkaXRUYXNrID0gKGluZGV4LCBkZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgdGhpcy5saXN0W2luZGV4XS5kZXNjcmlwdGlvbiA9ICcnO1xyXG4gICAgdGhpcy5saXN0W2luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgcmV0dXJuIHRoaXMubGlzdDtcclxuICB9O1xyXG5cclxuICB0b2dnbGVDb21wbGV0ZWQgPSAoaW5kZXgpID0+IHtcclxuICAgIHRoaXMubGlzdFtpbmRleF0uY29tcGxldGVkID0gIXRoaXMubGlzdFtpbmRleF0uY29tcGxldGVkO1xyXG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHRoaXMubGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgZmlsdGVyQ29tcGxldGVkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5saXN0ID0gdGhpcy5saXN0LmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGVkKTtcclxuICAgIHJldHVybiB0aGlzLmxpc3Q7XHJcbiAgfTtcclxufVxyXG4iLCJjb25zdCBpbXBsZW1lbnRDaGVja0JveEV2ZW50cyA9IChsaXN0KSA9PiB7XHJcbiAgY29uc3QgY2hlY2tCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpO1xyXG4gIGNoZWNrQm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleCAtIDE7XHJcbiAgICAgIGNvbnN0IHRleHRab25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZG8tZGVzY3JpcHRpb25bZGF0YS1pbmRleD1cIiR7aW5kZXggKyAxfVwiXWApO1xyXG4gICAgICB0ZXh0Wm9uZS5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcclxuICAgICAgbGlzdC50b2dnbGVDb21wbGV0ZWQoaW5kZXgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbXBsZW1lbnRDaGVja0JveEV2ZW50cztcclxuIiwiZXhwb3J0IGNvbnN0IGNoZWNrTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3REYXRhJykpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZVRvTG9jYWxTdG9yYWdlID0gKHRvZG9MaXN0RGF0YSkgPT4ge1xyXG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3REYXRhJywgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3REYXRhKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZExvY2FsU3RvcmFnZSA9ICgpID0+IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdERhdGEnKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IGNoZWNrTG9jYWxTdG9yYWdlLCBzYXZlVG9Mb2NhbFN0b3JhZ2UsIGxvYWRMb2NhbFN0b3JhZ2UgfTtcclxuIiwiY29uc3Qgc3dhcEl0ZW1zID0gKGZyb21JbmRleCwgdG9JbmRleCwgdG9kbykgPT4ge1xyXG4gIGNvbnN0IGl0ZW1PbmUgPSB0b2RvLmxpc3RbZnJvbUluZGV4IC0gMV0uaW5kZXg7XHJcbiAgY29uc3QgaXRlbVR3byA9IHRvZG8ubGlzdFt0b0luZGV4IC0gMV0uaW5kZXg7XHJcbiAgdG9kby5saXN0W2Zyb21JbmRleCAtIDFdLmluZGV4ID0gaXRlbVR3bztcclxuICB0b2RvLmxpc3RbdG9JbmRleCAtIDFdLmluZGV4ID0gaXRlbU9uZTtcclxuICB0b2RvLnNhdmVMaXN0KCk7XHJcbiAgdG9kby5yZW5kZXJMaXN0KCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZHJhZ0ludGVyYWN0aW9uID0gKHRvZG8pID0+IHtcclxuICBsZXQgZHJhZ1N0YXJ0SW5kZXg7XHJcbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWl0ZW0nKTtcclxuICBjb25zdCBkcmFnTGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3RvZG8tbGlzdC1jb250ZW50IGxpJyk7XHJcbiAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcclxuICAgIGRyYWdnYWJsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xyXG4gICAgICBkcmFnU3RhcnRJbmRleCA9ICtlLnRhcmdldC5jbG9zZXN0KCdsaScpLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZHJhZ0xpc3RJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIChlKSA9PiB7XHJcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJykuY2xhc3NMaXN0LmFkZCgnb3ZlcicpO1xyXG4gICAgfSk7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIChlKSA9PiB7XHJcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJykuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xyXG4gICAgfSk7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBkcmFnRW5kSW5kZXggPSArZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XHJcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJykuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xyXG4gICAgICBzd2FwSXRlbXMoZHJhZ1N0YXJ0SW5kZXgsIGRyYWdFbmRJbmRleCwgdG9kbyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRyYWdJbnRlcmFjdGlvbjtcclxuIiwiZXhwb3J0IGNvbnN0IGFwcGVuZFRvZG9FbGVtZW50ID0gKHRhc2ssIHRvZG8pID0+IHtcclxuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWxpc3QtY29udGVudCcpO1xyXG4gIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICB0b2RvRWxlbWVudC5jbGFzc05hbWUgPSAndG9kby1pdGVtJztcclxuICB0b2RvRWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlO1xyXG5cclxuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGVkaXQuY2xhc3NOYW1lID0gJyBmYXMgZmEtc29saWQgZmFzIGZhcyBmYS1lbGxpcHNpcy12IGVkaXQtaWNvbic7XHJcbiAgZWRpdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCB0YXNrLmluZGV4KTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIHJlbW92ZS5jbGFzc05hbWUgPSAncmVtb3ZlLWljb24gaWNvbi1oaWRkZW4gZmFzIGZhLXNvbGlkIGZhLXRyYXNoJztcclxuICByZW1vdmUuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgdGFzay5pbmRleCk7XHJcbiAgcmVtb3ZlLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ2ZhbHNlJyk7XHJcbiAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRvZG8ubGlzdCA9IHRvZG8ucmVtb3ZlVGFzayh0YXNrLmluZGV4IC0gMSk7XHJcbiAgICB0b2RvLnJlbmRlckxpc3QoKTtcclxuICB9KTtcclxuXHJcbiAgdG9kb0VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgdGFzay5pbmRleCk7XHJcbiAgdG9kb0VsZW1lbnQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ0b2RvLWl0ZW0tY29udGVudFwiPiA8aW5wdXQgY2xhc3M9XCJjaGVja2JveFwiIGRhdGEtaW5kZXg9JHtcclxuICAgIHRhc2suaW5kZXhcclxuICB9IHR5cGU9XCJjaGVja2JveFwiICR7XHJcbiAgICB0YXNrLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnXHJcbiAgfSAvPiA8c3BhbiBkcmFnZ2FibGUgPSBmYWxzZT4gPHRleHRhcmVhIGRyYWdnYWJsZT1mYWxzZSBjbGFzcz1cInRvZG8tZGVzY3JpcHRpb24gJHtcclxuICAgIHRhc2suY29tcGxldGVkID8gJ2NvbXBsZXRlZCcgOiAnJ1xyXG4gIH1cIiBkYXRhLWluZGV4PSR7dGFzay5pbmRleH0gcm93cz1cIjFcIiBtYXhsZW5ndGg9XCIxMDBcIj4ke1xyXG4gICAgdGFzay5kZXNjcmlwdGlvblxyXG4gIH08L3RleHRhcmVhPiA8L3NwYW4+IDwvZGl2PmA7XHJcblxyXG4gIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKHJlbW92ZSk7XHJcbiAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQoZWRpdCk7XHJcbiAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnQpO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlQ2xlYXJCdXR0b24gPSAoKSA9PiB7XHJcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhci1jb21wbGV0ZWQnKSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gIGNvbnN0IGNsZWFyQ29tcGxldGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyLWNvbXBsZXRlZCcpO1xyXG4gIGNsZWFyQ29tcGxldGVkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2xlYXJDb21wbGV0ZWQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFyVG9kb0xpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0LWNvbnRlbnQnKTtcclxuICB0b2RvTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICBkZWxldGVDbGVhckJ1dHRvbigpO1xyXG59O1xyXG5cclxuY29uc3QgdG9nZ2xlSGlkZGVuSWNvbiA9IChldmVudCwgdGFzaykgPT4ge1xyXG4gIHRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnZWRpdGluZycpO1xyXG4gIGNvbnN0IHsgaW5kZXggfSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0O1xyXG4gIGNvbnN0IGxpc3RUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaVtkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcclxuICBsaXN0VGFnLmNsYXNzTGlzdC50b2dnbGUoJ2VkaXRpbmcnKTtcclxuICBjb25zdCByZW1vdmVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnJlbW92ZS1pY29uW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xyXG4gIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVkaXQtaWNvbltkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHJlbW92ZUljb24uY2xhc3NMaXN0LnRvZ2dsZSgnaWNvbi1oaWRkZW4nKTtcclxuICAgIGVkaXRJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2ljb24taGlkZGVuJyk7XHJcbiAgfSwgMTAwMCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW1wbGVtZW50RWRpdCA9ICh0b2RvKSA9PiB7XHJcbiAgY29uc3QgdG9kb0VkaXREYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tZGVzY3JpcHRpb24nKTtcclxuICB0b2RvRWRpdERhdGEuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleCAtIDE7XHJcbiAgICAgIHRvZG8ubGlzdCA9IHRvZG8uZWRpdFRhc2soaW5kZXgsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgdG9kby5zYXZlTGlzdCgpO1xyXG4gICAgfSk7XHJcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoZSkgPT4ge1xyXG4gICAgICB0b2dnbGVIaWRkZW5JY29uKGUsIHRhc2spO1xyXG4gICAgfSk7XHJcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGUpID0+IHtcclxuICAgICAgdG9nZ2xlSGlkZGVuSWNvbihlLCB0YXNrKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNsZWFyQ29tcGxldGVkRWxlbWVudCA9ICh0b2RvKSA9PiB7XHJcbiAgY29uc3QgY2xlYXJDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjbGVhckNvbXBsZXRlZC5pZCA9ICdjbGVhci1jb21wbGV0ZWQnO1xyXG4gIGNsZWFyQ29tcGxldGVkLnRleHRDb250ZW50ID0gJ0NsZWFyIGFsbCBjb21wbGV0ZWQnO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWxpc3QtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY2xlYXJDb21wbGV0ZWQpO1xyXG4gIGNsZWFyQ29tcGxldGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgdG9kby5saXN0ID0gdG9kby5maWx0ZXJDb21wbGV0ZWQoKTtcclxuICAgIHRvZG8ucmVuZGVyTGlzdCgpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGFwcGVuZFRvZG9FbGVtZW50LFxyXG4gIGNsZWFyVG9kb0xpc3QsXHJcbiAgaW1wbGVtZW50RWRpdCxcclxuICBjcmVhdGVDbGVhckNvbXBsZXRlZEVsZW1lbnQsXHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCByZWZyZXNoU3JjIGZyb20gJy4vYXNzZXRzL3JlZnJlc2gtc3ZncmVwby1jb20uc3ZnJztcclxuaW1wb3J0IGVudGVyU3JjIGZyb20gJy4vYXNzZXRzL2Fycm93LWVudGVyLXN2Z3JlcG8tY29tLnN2Zyc7XHJcbmltcG9ydCBUb2RvIGZyb20gJy4vbW9kdWxlcy9Ub2RvLmpzJztcclxuaW1wb3J0IHsgY2hlY2tMb2NhbFN0b3JhZ2UsIGxvYWRMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL21vZHVsZXMvZGF0YS5qcyc7XHJcbmltcG9ydCBUYXNrIGZyb20gJy4vbW9kdWxlcy9UYXNrLmpzJztcclxuXHJcbmNvbnN0IHJlZnJlc2hJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZnJlc2gnKTtcclxuY29uc3Qgc3VibWl0Rm9ybUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRlci1CdXR0b24nKTtcclxuY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrLXRleHQnKTtcclxuXHJcbmNvbnN0IGNyZWF0ZVRvZG9MaXN0ID0gKCkgPT4ge1xyXG4gIGxldCB0b2RvTGlzdERhdGE7XHJcbiAgaWYgKGNoZWNrTG9jYWxTdG9yYWdlKCkpIHtcclxuICAgIHRvZG9MaXN0RGF0YSA9IG5ldyBUb2RvKGxvYWRMb2NhbFN0b3JhZ2UoKSk7XHJcbiAgICB0b2RvTGlzdERhdGEucmVuZGVyTGlzdCgpO1xyXG4gICAgcmV0dXJuIHRvZG9MaXN0RGF0YTtcclxuICB9XHJcbiAgdG9kb0xpc3REYXRhID0gbmV3IFRvZG8oKTtcclxuICByZXR1cm4gdG9kb0xpc3REYXRhO1xyXG59O1xyXG5cclxuY29uc3QgdG9kb0xpc3REYXRhID0gY3JlYXRlVG9kb0xpc3QoKTtcclxuXHJcbmNvbnN0IGltYWdlUmVmcmVzaCA9IG5ldyBJbWFnZSgpO1xyXG5pbWFnZVJlZnJlc2guc3JjID0gcmVmcmVzaFNyYztcclxuaW1hZ2VSZWZyZXNoLmNsYXNzTmFtZSA9ICdyZWxvYWQtaWNvbic7XHJcbnJlZnJlc2hJY29uLmFwcGVuZENoaWxkKGltYWdlUmVmcmVzaCk7XHJcblxyXG5jb25zdCBzdWJtaXRUYXNrID0gKCkgPT4ge1xyXG4gIGlmICh0YXNrSW5wdXQudmFsdWUgIT09ICcnKSB7XHJcbiAgICB0b2RvTGlzdERhdGEubGlzdCA9IHRvZG9MaXN0RGF0YS5hZGRUYXNrKG5ldyBUYXNrKHRhc2tJbnB1dC52YWx1ZSkpO1xyXG4gICAgdG9kb0xpc3REYXRhLnJlbmRlckxpc3QoKTtcclxuICAgIHRhc2tJbnB1dC52YWx1ZSA9ICcnO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGxvYWRFbnRlckljb24gPSAoKSA9PiB7XHJcbiAgc3VibWl0Rm9ybUJ1dHRvbi5zcmMgPSBlbnRlclNyYztcclxuICBzdWJtaXRGb3JtQnV0dG9uLmFsdCA9ICdFbnRlcic7XHJcbiAgc3VibWl0Rm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFRhc2spO1xyXG4gIHRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgc3VibWl0VGFzaygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICBsb2FkRW50ZXJJY29uKCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==