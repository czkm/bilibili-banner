/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"animated-banner-particle":"animated-banner-particle"}[chunkId]||chunkId) + "." + {"animated-banner-particle":"82d38ce6"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.js */"56d7");


/***/ }),

/***/ "034f":
/*!******************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ "85ec");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "045b":
/*!***************************!*\
  !*** ./src/static/04.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/04.317ffd18.png";

/***/ }),

/***/ "06a6":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!/Users/chenzhikun/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/animatedBanner.vue?vue&type=style&index=0&id=9cff9264&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "199c":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "96cf");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_animatedBanner_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/animatedBanner.vue */ "42fd");
/* harmony import */ var _src_components_position_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/position.js */ "5d15");



//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  data: function data() {
    return {
      position: _src_components_position_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      animatedBannerShow: false,
      animatedBannerEnabled: false
    };
  },
  components: {
    animatedBanner: _components_animatedBanner_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: {
    bannerImg: function bannerImg() {
      return __webpack_require__(/*! ./static/static.png */ "7bb8");
    }
  },
  methods: {
    animatedBanner: function animatedBanner() {
      var _this = this;

      return Object(_Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var staticBannerImg;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 优先加载展示静态banner
                staticBannerImg = document.createElement('img');
                staticBannerImg.src = _this.bannerImg;
                _context.next = 4;
                return new Promise(function (resolve) {
                  return staticBannerImg.onload = resolve();
                });

              case 4:
                _this.animatedBannerEnabled = true; // 获取动画配置
                // try {
                //   this.animatedBannerConfig = this.position
                // this.animatedBannerEnabled = true
                // } catch (e) {
                //   console.error('animated_banner_config parse error')
                //   this.animatedBannerEnabled = false
                // }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    this.animatedBanner();
  }
});

/***/ }),

/***/ "1a4e":
/*!***************************!*\
  !*** ./src/static/05.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/05.a4c95165.png";

/***/ }),

/***/ "23be":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/thread-loader/dist/cjs.js!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "199c");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "28d1":
/*!***************************!*\
  !*** ./src/static/09.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/09.f532c51b.png";

/***/ }),

/***/ "2fd1":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2cd988de-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/animatedBanner.vue?vue&type=template&id=9cff9264&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticClass:"animated-banner"})}
var staticRenderFns = []



/***/ }),

/***/ "30f6":
/*!***************************!*\
  !*** ./src/static/07.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/07.92974324.png";

/***/ }),

/***/ "33e9":
/*!***************************!*\
  !*** ./src/static/14.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/14.b0f50e02.png";

/***/ }),

/***/ "3dfd":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7581fb1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7581fb1e& */ "4c5c");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "23be");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ "034f");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_7581fb1e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_7581fb1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "42fd":
/*!*******************************************!*\
  !*** ./src/components/animatedBanner.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animatedBanner_vue_vue_type_template_id_9cff9264_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animatedBanner.vue?vue&type=template&id=9cff9264&scoped=true& */ "6915");
/* harmony import */ var _animatedBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animatedBanner.vue?vue&type=script&lang=js& */ "f1aa");
/* empty/unused harmony star reexport *//* harmony import */ var _animatedBanner_vue_vue_type_style_index_0_id_9cff9264_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animatedBanner.vue?vue&type=style&index=0&id=9cff9264&lang=scss&scoped=true& */ "71b5");
/* harmony import */ var _animatedBanner_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animatedBanner.vue?vue&type=style&index=1&lang=scss& */ "d082");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _animatedBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _animatedBanner_vue_vue_type_template_id_9cff9264_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _animatedBanner_vue_vue_type_template_id_9cff9264_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9cff9264",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "4705":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/animatedBanner.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "5530");
/* harmony import */ var _Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "2909");
/* harmony import */ var _Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "1da1");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "96cf");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "d81d");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "3ca3");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "99af");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "4de4");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "b0c0");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _cubicBezier__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cubicBezier */ "a22f");












//
//
//
//

/* eslint-disable */
var CURRENT_VERSION = '1';

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    config: {
      required: true,
      default: {}
    }
  },
  data: function data() {
    return {
      entered: false,
      layerConfig: {},
      imgList: {
        '01': __webpack_require__(/*! ../static/01.png */ "a24b"),
        '02': __webpack_require__(/*! ../static/02.png */ "ec36"),
        '03': __webpack_require__(/*! ../static/03.png */ "b7e6"),
        '04': __webpack_require__(/*! ../static/04.png */ "045b"),
        '05': __webpack_require__(/*! ../static/05.png */ "1a4e"),
        '06': __webpack_require__(/*! ../static/06.png */ "c812"),
        '07': __webpack_require__(/*! ../static/07.png */ "30f6"),
        '08': __webpack_require__(/*! ../static/08.png */ "6c58"),
        '09': __webpack_require__(/*! ../static/09.png */ "28d1"),
        10: __webpack_require__(/*! ../static/10.png */ "7e50"),
        11: __webpack_require__(/*! ../static/11.png */ "92af"),
        12: __webpack_require__(/*! ../static/12.png */ "cbb7"),
        13: __webpack_require__(/*! ../static/13.png */ "55f2"),
        14: __webpack_require__(/*! ../static/14.png */ "33e9"),
        15: __webpack_require__(/*! ../static/15.png */ "608c")
      }
    };
  },
  watch: {
    entered: function entered(v) {
      var _this$extensions;

      // console.log('extensions', v)
      (_this$extensions = this.extensions) === null || _this$extensions === void 0 ? void 0 : _this$extensions.map(function (ex) {
        var _ex$handleHoverChange;

        return (_ex$handleHoverChange = ex.handleHoverChange) === null || _ex$handleHoverChange === void 0 ? void 0 : _ex$handleHoverChange.call(ex, v);
      });
    }
  },
  computed: {
    locs: function locs() {
      return this.locsData || this.bannerData[0] && this.mapBannerData(this.bannerData[0]) || {};
    } // bannerImg() {
    // return trimHttp(this.locs && this.locs.litpic)
    // }

  },
  mounted: function mounted() {
    var _this = this;

    return Object(_Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var _this$config$extensio;

      var layerConfig, container, containerHeight, containerWidth, containerScale, layers, displace, enterX, raf, lastDisplace, curveParameterToFunc, af, handleLeave, petals;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // 只有在启用了动画banner的配置，且浏览器支持css filter时才加载动画banner的图片资源
              _this.animatedBannerSupport = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('filter: blur(1px)') && !/^((?!chrome|android).)*safari/i.test(navigator.userAgent); // safari浏览器在mac屏幕上模糊效果有性能问题，不开启

              if (_this.animatedBannerSupport) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt("return");

            case 3:
              // if (this.config.version !== CURRENT_VERSION) {
              //   this.layerConfig = this.compatOldConfig(this.config).layers
              // } else {
              _this.layerConfig = _this.config.layers; //   console.log(this.config.layers)
              // }
              // 等待页面加载完成

              if (!(document.readyState !== 'complete')) {
                _context3.next = 7;
                break;
              }

              _context3.next = 7;
              return new Promise(function (resolve) {
                return window.addEventListener('load', resolve);
              });

            case 7:
              _context3.prev = 7;
              _context3.next = 10;
              return Promise.all(_this.layerConfig.map( /*#__PURE__*/function () {
                var _ref = Object(_Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(v) {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          return _context2.abrupt("return", Promise.all(v.resources.map( /*#__PURE__*/function () {
                            var _ref2 = Object(_Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(i, index) {
                              var img;
                              return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      if (!/\.(webm|mp4)$/.test(i.src)) {
                                        _context.next = 3;
                                        break;
                                      }

                                      _context.next = 8;
                                      break;

                                    case 3:
                                      img = document.createElement('img');
                                      img.src = _this.imgList[i.src]; // img.src = i.src

                                      _context.next = 7;
                                      return new Promise(function (resolve) {
                                        return img.onload = resolve;
                                      });

                                    case 7:
                                      v.resources[index].el = img; // console.log(v.resources[index])

                                    case 8:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee);
                            }));

                            return function (_x2, _x3) {
                              return _ref2.apply(this, arguments);
                            };
                          }())));

                        case 1:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }()));

            case 10:
              _context3.next = 16;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](7);
              console.log('load animated banner images error', _context3.t0);
              return _context3.abrupt("return");

            case 16:
              layerConfig = _this.layerConfig;

              if (!(!layerConfig.length && !_this.config.extensions)) {
                _context3.next = 19;
                break;
              }

              return _context3.abrupt("return");

            case 19:
              container = _this.$refs['container'];
              containerHeight = container.clientHeight;
              containerWidth = container.clientWidth;
              containerScale = containerHeight / 155; // 初始化资源尺寸

              layerConfig.forEach(function (v) {
                var _v$rotate, _v$translate, _v$blur, _v$opacity;

                v._initState = {
                  scale: 1,
                  rotate: ((_v$rotate = v.rotate) === null || _v$rotate === void 0 ? void 0 : _v$rotate.initial) || 0,
                  translate: ((_v$translate = v.translate) === null || _v$translate === void 0 ? void 0 : _v$translate.initial) || [0, 0],
                  blur: ((_v$blur = v.blur) === null || _v$blur === void 0 ? void 0 : _v$blur.initial) || 0,
                  opacity: ((_v$opacity = v.opacity) === null || _v$opacity === void 0 ? void 0 : _v$opacity.initial) === undefined ? 1 : v.opacity.initial
                }; // console.log(v)

                v.resources.forEach(function (i, index) {
                  var _v$scale, _v$scale2;

                  var el = v.resources[index].el; // if (el.tagName === 'VIDEO') {
                  //   if (el.parentNode) {
                  //     el.parentNode.removeChild(el)
                  //   }
                  //   el.dataset.height = el.videoHeight
                  //   el.dataset.width = el.videoWidth
                  // } else {

                  el.dataset.height = el.naturalHeight;
                  el.dataset.width = el.naturalWidth; // }

                  var initial = ((_v$scale = v.scale) === null || _v$scale === void 0 ? void 0 : _v$scale.initial) === undefined ? 1 : (_v$scale2 = v.scale) === null || _v$scale2 === void 0 ? void 0 : _v$scale2.initial;
                  el.height = el.dataset.height * containerScale * initial;
                  el.width = el.dataset.width * containerScale * initial;
                });
              }); // 初始化图层

              layers = layerConfig.map(function (v) {
                var layer = document.createElement('div');
                layer.classList.add('layer');
                container.appendChild(layer); // layer.appendChild(v.resources[0].el)

                return layer;
              });
              displace = 0;
              enterX = 0;
              raf = 0;
              lastDisplace = NaN;
              _this.entered = false;
              _this.extensions = []; // console.log(this.extensions)

              curveParameterToFunc = function curveParameterToFunc(param) {
                // console.log('in')
                var o = _cubicBezier__WEBPACK_IMPORTED_MODULE_12__["default"].apply(void 0, Object(_Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(param));
                return function (v) {
                  return v > 0 ? o(v) : -o(-v);
                };
              }; // 根据鼠标位置改变状态


              af = function af(t) {
                try {
                  if (lastDisplace === displace) {
                    return;
                  }

                  lastDisplace = displace;
                  layers.map(function (layer, i) {
                    var v = layerConfig[i];
                    var a = layer.firstChild; //img元素

                    if (!a) {
                      return;
                    }

                    var transform = {
                      scale: v._initState.scale,
                      rotate: v._initState.rotate,
                      translate: v._initState.translate
                    };

                    if (v.scale) {
                      var x = v.scale.offset || 0;

                      var itp = function itp(x) {
                        return x;
                      };

                      v.scale.offsetCurve ? curveParameterToFunc(v.scale.offsetCurve) : function (x) {
                        return x;
                      };
                      var offset = x * itp(displace);
                      transform.scale = v._initState.scale + offset;
                    }

                    if (v.rotate) {
                      var _x4 = v.rotate.offset || 0; // const itp = (x) => x
                      // v.rotate.offsetCurve
                      //   ? curveParameterToFunc(v.rotate.offsetCurve)
                      //   : (x) => x


                      var _offset = _x4 * displace;

                      transform.rotate = v._initState.rotate + _offset;
                    }

                    if (v.translate) {
                      var _x5 = v.translate.offset || [0, 0]; // const itp = (x) => x
                      // const itp = v.translate.offsetCurve
                      //   ? curveParameterToFunc(v.translate.offsetCurve)
                      //   : (x) => x


                      var _offset2 = _x5.map(function (v) {
                        return displace * v;
                      });

                      var translate = v._initState.translate.map(function (x, i) {
                        var _v$scale3;

                        return (x + _offset2[i]) * containerScale * (((_v$scale3 = v.scale) === null || _v$scale3 === void 0 ? void 0 : _v$scale3.initial) || 1);
                      });

                      transform.translate = translate;
                    }

                    a.style.transform = "scale(".concat(transform.scale, ")") + "translate(".concat(transform.translate[0], "px, ").concat(transform.translate[1], "px)") + "rotate(".concat(transform.rotate, "deg)");

                    if (v.blur) {
                      var _x6 = v.blur.offset || 0; // const itp = (x) => x
                      // const itp = v.blur.offsetCurve
                      //   ? curveParameterToFunc(v.blur.offsetCurve)
                      //   : (x) => x


                      var blurOffset = _x6 * displace;
                      var res = 0;

                      if (!v.blur.wrap || v.blur.wrap === 'clamp') {
                        res = Math.max(0, v._initState.blur + blurOffset);
                      } else if (v.blur.wrap === 'alternate') {
                        res = Math.abs(v._initState.blur + blurOffset);
                      }

                      a.style.filter = res < 1e-4 ? '' : "blur(".concat(res, "px)");
                    }

                    if (v.opacity) {
                      var _x7 = v.opacity.offset || 0; // const itp = (x) => x
                      // const itp = v.opacity.offsetCurve
                      //   ? curveParameterToFunc(v.opacity.offsetCurve)
                      //   : (x) => x


                      var opacityOffset = _x7 * displace;
                      var initial = v._initState.opacity;

                      if (!v.opacity.wrap || v.opacity.wrap === 'clamp') {
                        a.style.opacity = Math.max(0, Math.min(1, initial + opacityOffset));
                      } else if (v.opacity.wrap === 'alternate') {
                        var _x8 = initial + opacityOffset;

                        var y = Math.abs(_x8 % 1);

                        if (Math.abs(_x8 % 2) >= 1) {
                          y = 1 - y;
                        }

                        a.style.opacity = y;
                      }
                    }
                  });
                } catch (e) {
                  console.error(e);

                  _this.$emit('change', false);
                }
              }; // 初始化图层内图片和帧动画


              layerConfig.map(function (v, i) {
                var a = v.resources[0].el;
                layers[i].appendChild(a); // if (a.tagName === 'VIDEO') {
                //   a.play()
                // }

                requestAnimationFrame(af);
              });

              _this.$emit('change', true); // container 元素上有其他元素，需使用全局事件判断鼠标位置


              handleLeave = function handleLeave() {
                var now = performance.now();
                var timeout = 200;
                var tempDisplace = displace;
                cancelAnimationFrame(raf);

                var leaveAF = function leaveAF(t) {
                  if (t - now < timeout) {
                    displace = tempDisplace * (1 - (t - now) / 200);
                    af(t);
                    requestAnimationFrame(leaveAF);
                  } else {
                    displace = 0;
                    af(t);
                  }
                };

                raf = requestAnimationFrame(leaveAF);
              };

              _this.handleMouseLeave = function (e) {
                _this.entered = false;
                handleLeave();
              };

              _this.handleMouseMove = function (e) {
                var offsetY = document.documentElement.scrollTop + e.clientY;

                if (offsetY < containerHeight) {
                  if (!_this.entered) {
                    _this.entered = true;
                    enterX = e.clientX;
                  }

                  displace = (e.clientX - enterX) / containerWidth;
                  cancelAnimationFrame(raf);
                  raf = requestAnimationFrame(af);
                } else {
                  if (_this.entered) {
                    _this.entered = false;
                    handleLeave();
                  }
                }

                _this.extensions.map(function (v) {
                  var _v$handleMouseMove;

                  return (_v$handleMouseMove = v.handleMouseMove) === null || _v$handleMouseMove === void 0 ? void 0 : _v$handleMouseMove.call(v, {
                    e: e,
                    displace: displace
                  });
                });
              };

              _this.handleResize = function (e) {
                containerHeight = container.clientHeight;
                containerWidth = container.clientWidth;
                containerScale = containerHeight / 155;
                layerConfig.forEach(function (lc) {
                  lc.resources.forEach(function (i) {
                    var _lc$scale, _lc$scale2;

                    var el = i.el;
                    el.height = el.dataset.height * containerScale * (((_lc$scale = lc.scale) === null || _lc$scale === void 0 ? void 0 : _lc$scale.initial) || 1);
                    el.width = el.dataset.width * containerScale * (((_lc$scale2 = lc.scale) === null || _lc$scale2 === void 0 ? void 0 : _lc$scale2.initial) || 1);
                  });
                });
                cancelAnimationFrame(raf);
                raf = requestAnimationFrame(function (t) {
                  af(t);
                });

                _this.extensions.map(function (v) {
                  var _v$handleResize;

                  return (_v$handleResize = v.handleResize) === null || _v$handleResize === void 0 ? void 0 : _v$handleResize.call(v, e);
                });
              };

              document.addEventListener('mouseleave', _this.handleMouseLeave);
              window.addEventListener('mousemove', _this.handleMouseMove);
              window.addEventListener('resize', _this.handleResize); //添加樱花🌸
              // if (this.config.extensions?.snow) {
              //   const snow = (
              //     await import(
              //       /* webpackChunkName: 'animated-banner-snow' */ './extensions/snow.js'
              //     )
              //   ).default
              //   this.extensions.push(await snow(this.$refs['container']))
              // }

              if (!((_this$config$extensio = _this.config.extensions) !== null && _this$config$extensio !== void 0 && _this$config$extensio.petals)) {
                _context3.next = 57;
                break;
              }

              _context3.prev = 43;
              _context3.next = 46;
              return __webpack_require__.e(/*! import() | animated-banner-particle */ "animated-banner-particle").then(__webpack_require__.bind(null, /*! ./extensions/particle/index.js */ "792f"));

            case 46:
              petals = _context3.sent.default;
              _context3.t1 = _this.extensions;
              _context3.next = 50;
              return petals(_this.$refs['container']);

            case 50:
              _context3.t2 = _context3.sent;

              _context3.t1.push.call(_context3.t1, _context3.t2);

              _context3.next = 57;
              break;

            case 54:
              _context3.prev = 54;
              _context3.t3 = _context3["catch"](43);
              console.error(_context3.t3);

            case 57:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[7, 12], [43, 54]]);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('mouseleave', this.handleMouseLeave);
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('resize', this.handleResize);

    if (this.extensions) {
      this.extensions.map(function (v) {
        var _v$destory;

        return (_v$destory = v.destory) === null || _v$destory === void 0 ? void 0 : _v$destory.call(v);
      });
      this.extensions = [];
    }
  },
  methods: {
    mapBannerData: function mapBannerData(v) {
      // 将服务端渲染时返回的资源位格式数据映射为新的版头配置接口格式
      return {
        logo: v.litpic,
        litpic: v.pic,
        title: v.name,
        jump_url: v.jump_url,
        request_id: v.request_id,
        is_split_layer: v.is_split_layer,
        split_layer: v.split_layer
      };
    },
    compatOldConfig: function compatOldConfig(old) {
      console.log(old);

      if (old instanceof Array) {
        return {
          version: '1',
          layers: old.map(function (l, i) {
            var _l$initial, _l$offset, _l$offsetCurve, _l$initial2, _l$offset2, _l$offsetCurve2, _l$initial3, _l$offset3, _l$offsetCurve3, _l$initial4, _l$offset4, _l$offsetCurve4;

            return {
              id: i,
              resources: l.images.map(function (img, j) {
                return Object(_Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
                  id: j
                }, img);
              }),
              scale: {
                initial: (_l$initial = l.initial) === null || _l$initial === void 0 ? void 0 : _l$initial.scale,
                offset: (_l$offset = l.offset) === null || _l$offset === void 0 ? void 0 : _l$offset.scale,
                offsetCurve: (_l$offsetCurve = l.offsetCurve) === null || _l$offsetCurve === void 0 ? void 0 : _l$offsetCurve.scale
              },
              rotate: {
                initial: (_l$initial2 = l.initial) === null || _l$initial2 === void 0 ? void 0 : _l$initial2.rotate,
                offset: (_l$offset2 = l.offset) === null || _l$offset2 === void 0 ? void 0 : _l$offset2.rotate,
                offsetCurve: (_l$offsetCurve2 = l.offsetCurve) === null || _l$offsetCurve2 === void 0 ? void 0 : _l$offsetCurve2.rotate
              },
              translate: {
                initial: (_l$initial3 = l.initial) === null || _l$initial3 === void 0 ? void 0 : _l$initial3.translate,
                offset: (_l$offset3 = l.offset) === null || _l$offset3 === void 0 ? void 0 : _l$offset3.translate,
                offsetCurve: (_l$offsetCurve3 = l.offsetCurve) === null || _l$offsetCurve3 === void 0 ? void 0 : _l$offsetCurve3.translate
              },
              blur: {
                initial: (_l$initial4 = l.initial) === null || _l$initial4 === void 0 ? void 0 : _l$initial4.blur,
                offset: (_l$offset4 = l.offset) === null || _l$offset4 === void 0 ? void 0 : _l$offset4.blur,
                offsetCurve: (_l$offsetCurve4 = l.offsetCurve) === null || _l$offsetCurve4 === void 0 ? void 0 : _l$offsetCurve4.blur
              }
            };
          })
        };
      } else if (old.version) {// other old version?
      }
    }
  }
});

/***/ }),

/***/ "4c5c":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7581fb1e& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2cd988de_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7581fb1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2cd988de-vue-loader-template"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7581fb1e& */ "8c8a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2cd988de_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7581fb1e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2cd988de_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7581fb1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "55f2":
/*!***************************!*\
  !*** ./src/static/13.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/13.51e92ca2.png";

/***/ }),

/***/ "56d7":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ "e260");
/* harmony import */ var _Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ "e6cf");
/* harmony import */ var _Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "cca6");
/* harmony import */ var _Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ "a79d");
/* harmony import */ var _Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_chenzhikun_project_GitHub_bilibili_banner_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "2b0e");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.vue */ "3dfd");





/* eslint-disable */


vue__WEBPACK_IMPORTED_MODULE_4__["default"].config.productionTip = false;
new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
  render: function render(h) {
    return h(_App_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
  }
}).$mount("#app");

/***/ }),

/***/ "5d15":
/*!************************************!*\
  !*** ./src/components/position.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * @Description:
 * @Author: zk-chen
 * @Date: 2021-04-13 10:46:59
 * @LastEditTime: 2021-04-13 16:42:27
 * @LastEditors: zk-chen
 * @FilePath: /bilibili-banner/src/components/position.js
 */
//静态https://i0.hdslb.com/bfs/vc/ab61ab76a225646e3bcb162b0f8fb2aa47f1f66c.png

/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ({
  "version": "1",
  "layers": [{
    "resources": [{
      "src": "01",
      "id": 0
    }],
    "scale": {
      "initial": 0.5
    },
    "rotate": {},
    "translate": {
      "initial": [0, -30],
      "offset": [-200, 0]
    },
    "blur": {},
    "opacity": {},
    "id": 16,
    "name": "15_天空"
  }, {
    "resources": [{
      "src": "02",
      "id": 0
    }],
    "scale": {
      "initial": 0.5
    },
    "rotate": {},
    "translate": {
      "initial": [2200, 0],
      "offset": [-200, 0]
    },
    "blur": {},
    "opacity": {},
    "id": 15,
    "name": "14_远景亭子"
  }, {
    "resources": [{
      "src": "03",
      "id": 0
    }],
    "scale": {
      "initial": 0.45
    },
    "rotate": {},
    "translate": {
      "initial": [1500, 0],
      "offset": [-300, 0]
    },
    "blur": {},
    "opacity": {},
    "id": 17,
    "name": "13_右侧船坞"
  }, {
    "resources": [{
      "src": "04",
      "id": 0
    }],
    "scale": {
      "initial": 0.49
    },
    "rotate": {},
    "translate": {
      "initial": [-1300, 0],
      "offset": [-900, 0]
    },
    "blur": {},
    "opacity": {},
    "id": 14,
    "name": "12_远景桥"
  }, {
    "resources": [{
      "src": "05",
      "id": 0
    }],
    "scale": {
      "initial": 0.45
    },
    "rotate": {},
    "translate": {
      "initial": [1350, 100],
      "offset": [-250, 0]
    },
    "blur": {},
    "opacity": {},
    "id": 23,
    "name": "11_近船"
  }, {
    "resources": [{
      "src": "06",
      "id": 0
    }],
    "scale": {
      "initial": 0.28
    },
    "rotate": {},
    "translate": {
      "initial": [900, 130],
      "offset": [-200, 0]
    },
    "blur": {},
    "opacity": {
      "initial": 0,
      "offset": 2,
      "offsetCurve": [0.4065, 0.5925, 1, 1]
    },
    "id": 18,
    "name": "10_2233坐船"
  }, {
    "resources": [{
      "src": "07",
      "id": 0
    }],
    "scale": {
      "initial": 0.7
    },
    "rotate": {},
    "translate": {
      "initial": [160, 20],
      "offset": [-1000, 0]
    },
    "blur": {},
    "opacity": {},
    "id": 24,
    "name": "09_右侧远处草坪"
  }, {
    "resources": [{
      "src": "08",
      "id": 0
    }],
    "scale": {
      "initial": 0.7
    },
    "rotate": {},
    "translate": {
      "initial": [-500, 70],
      "offset": [-1200, 0]
    },
    "blur": {},
    "opacity": {},
    "id": 13,
    "name": "08_远草坪"
  }, {
    "resources": [{
      "src": "09",
      "id": 0
    }],
    "scale": {
      "initial": 0.4
    },
    "rotate": {},
    "translate": {
      "initial": [-600, 40],
      "offset": [-1000, 0]
    },
    "blur": {},
    "opacity": {
      "initial": 0,
      "offset": -2
    },
    "id": 20,
    "name": "07_22放风筝"
  }, {
    "resources": [{
      "src": "10",
      "id": 0
    }],
    "scale": {
      "initial": 0.4
    },
    "rotate": {},
    "translate": {
      "initial": [-850, 80],
      "offset": [-1450, 0]
    },
    "blur": {},
    "opacity": {
      "initial": 0,
      "offset": -2
    },
    "id": 21,
    "name": "06_33放风筝"
  }, {
    "resources": [{
      "src": "11",
      "id": 0
    }],
    "scale": {
      "initial": 0.45
    },
    "rotate": {},
    "translate": {
      "initial": [-200, 30],
      "offset": [-2500, 0]
    },
    "blur": {},
    "opacity": {},
    "id": 10,
    "name": "05_樱花远景"
  }, {
    "resources": [{
      "src": "12",
      "id": 0
    }],
    "scale": {
      "initial": 0.5
    },
    "rotate": {},
    "translate": {
      "initial": [200, 0],
      "offset": [-3000, 0]
    },
    "blur": {},
    "opacity": {},
    "id": 11,
    "name": "04_樱花草坪"
  }, {
    "resources": [{
      "src": "13",
      "id": 0
    }],
    "scale": {
      "initial": 0.45
    },
    "rotate": {},
    "translate": {
      "initial": [480, 30],
      "offset": [-3300, 0]
    },
    "blur": {},
    "opacity": {
      "offset": 1.2,
      "wrap": "alternate",
      "offsetCurve": [0.09300000000000001, -0.2709999999999999, 1, 1]
    },
    "id": 7,
    "name": "03_2233野餐"
  }, {
    "resources": [{
      "src": "14",
      "id": 0
    }],
    "scale": {
      "initial": 0.6
    },
    "rotate": {},
    "translate": {
      "initial": [3500, 0],
      "offset": [-3500, 0]
    },
    "blur": {
      "initial": 2
    },
    "opacity": {},
    "id": 19,
    "name": "02_柳树近景"
  }, {
    "resources": [{
      "src": "15",
      "id": 0
    }],
    "scale": {
      "initial": 0.5
    },
    "rotate": {},
    "translate": {
      "initial": [-2000, 0],
      "offset": [-6000, 0]
    },
    "blur": {
      "initial": 1
    },
    "opacity": {},
    "id": 12,
    "name": "01_樱花近景"
  }],
  "extensions": {
    "petals": {}
  }
});

/***/ }),

/***/ "608c":
/*!***************************!*\
  !*** ./src/static/15.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/15.6feadd2c.png";

/***/ }),

/***/ "6915":
/*!**************************************************************************************!*\
  !*** ./src/components/animatedBanner.vue?vue&type=template&id=9cff9264&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2cd988de_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBanner_vue_vue_type_template_id_9cff9264_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2cd988de-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./animatedBanner.vue?vue&type=template&id=9cff9264&scoped=true& */ "2fd1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2cd988de_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBanner_vue_vue_type_template_id_9cff9264_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2cd988de_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBanner_vue_vue_type_template_id_9cff9264_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "6c58":
/*!***************************!*\
  !*** ./src/static/08.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/08.9d9bd24e.png";

/***/ }),

/***/ "71b5":
/*!*****************************************************************************************************!*\
  !*** ./src/components/animatedBanner.vue?vue&type=style&index=0&id=9cff9264&lang=scss&scoped=true& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBanner_vue_vue_type_style_index_0_id_9cff9264_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./animatedBanner.vue?vue&type=style&index=0&id=9cff9264&lang=scss&scoped=true& */ "06a6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBanner_vue_vue_type_style_index_0_id_9cff9264_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBanner_vue_vue_type_style_index_0_id_9cff9264_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBanner_vue_vue_type_style_index_0_id_9cff9264_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBanner_vue_vue_type_style_index_0_id_9cff9264_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "7bb8":
/*!*******************************!*\
  !*** ./src/static/static.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/static.8b9e48fb.png";

/***/ }),

/***/ "7e50":
/*!***************************!*\
  !*** ./src/static/10.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/10.a84ee17e.png";

/***/ }),

/***/ "85ec":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8c8a":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2cd988de-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7581fb1e& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[(_vm.animatedBannerEnabled)?_c('animatedBanner',{class:_vm.animatedBannerShow ? '' : 'staticImg',style:(_vm.animatedBannerShow ? '' : ("background-image: url(" + _vm.bannerImg + ")")),attrs:{"config":_vm.position},on:{"change":function (v) { return (_vm.animatedBannerShow = v); }}}):_vm._e()],1)}
var staticRenderFns = []



/***/ }),

/***/ "92af":
/*!***************************!*\
  !*** ./src/static/11.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/11.430cf0e6.png";

/***/ }),

/***/ "92e1":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!/Users/chenzhikun/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/animatedBanner.vue?vue&type=style&index=1&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a22f":
/*!***************************************!*\
  !*** ./src/components/cubicBezier.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bezier; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_typed_array_float32_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.typed-array.float32-array.js */ "cfc3");
/* harmony import */ var core_js_modules_es_typed_array_float32_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_float32_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "9a8c");
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "a975");
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "735e");
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "c1ac");
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "d139");
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "3a7b");
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "d5d6");
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "82f8");
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "e91f");
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "60bd");
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "5f96");
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "3280");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "3fcc");
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "ca91");
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "25a1");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "cd26");
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "3c5d");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "2954");
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "649e");
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "219c");
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.typed-array.subarray.js */ "170b");
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "b39a");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "72f7");
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_24__);


























/*
 * @Description:
 * @Author: zk-chen
 * @Date: 2021-04-13 14:59:02
 * @LastEditTime: 2021-04-13 15:00:04
 * @LastEditors: zk-chen
 * @FilePath: /bilibili-banner/src/components/cubicBezier.js
 */

/* eslint-disable */
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
var float32ArraySupported = typeof Float32Array === 'function';

function A(aA1, aA2) {
  return 1.0 - 3.0 * aA2 + 3.0 * aA1;
}

function B(aA1, aA2) {
  return 3.0 * aA2 - 6.0 * aA1;
}

function C(aA1) {
  return 3.0 * aA1;
} // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.


function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
} // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.


function getSlope(aT, aA1, aA2) {
  return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
}

function binarySubdivide(aX, aA, aB, mX1, mX2) {
  var currentX,
      currentT,
      i = 0;

  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;

    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

  return currentT;
}

function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);

    if (currentSlope === 0.0) {
      return aGuessT;
    }

    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }

  return aGuessT;
}

function LinearEasing(x) {
  return x;
}

function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  } // Precompute samples table


  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX(aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }

    --currentSample; // Interpolate to provide an initial guess for t

    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;
    var initialSlope = getSlope(guessForT, mX1, mX2);

    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing(x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0 || x === 1) {
      return x;
    }

    return calcBezier(getTForX(x), mY1, mY2);
  };
}

/***/ }),

/***/ "a24b":
/*!***************************!*\
  !*** ./src/static/01.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/01.39916ee4.png";

/***/ }),

/***/ "b7e6":
/*!***************************!*\
  !*** ./src/static/03.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/03.ed2b9a25.png";

/***/ }),

/***/ "c812":
/*!***************************!*\
  !*** ./src/static/06.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/06.c78a3fe7.png";

/***/ }),

/***/ "cbb7":
/*!***************************!*\
  !*** ./src/static/12.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/12.62a6da5e.png";

/***/ }),

/***/ "d082":
/*!*****************************************************************************!*\
  !*** ./src/components/animatedBanner.vue?vue&type=style&index=1&lang=scss& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBanner_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./animatedBanner.vue?vue&type=style&index=1&lang=scss& */ "92e1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBanner_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBanner_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBanner_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBanner_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "ec36":
/*!***************************!*\
  !*** ./src/static/02.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/02.acb1fc44.png";

/***/ }),

/***/ "f1aa":
/*!********************************************************************!*\
  !*** ./src/components/animatedBanner.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./animatedBanner.vue?vue&type=script&lang=js& */ "4705");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_animatedBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

/******/ });