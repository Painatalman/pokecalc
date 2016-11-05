webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(/*! vue */ 2);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(/*! ./components/pages/AttackChecker.js */ 3)();
	
	
	var types = __webpack_require__(/*! ../data/pokemon_types.json */ 4);
	
	var app = new _vue2.default({
	  el: '#app'
	});

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/*!*********************************!*\
  !*** ./data/pokemon_types.json ***!
  \*********************************/
/***/ function(module, exports) {

	[
	  {
	    "name": "poison",
	    "isSuperEffectiveAgainst": [
	      "fairy",
	      "grass"
	    ],
	    "isNotVeryEffectiveAgains": [
	      "poison",
	
	    ]
	  },
	  {
	    "name": "fire",
	    "isSuperEffectiveAgainst": [
	      "fairy",
	      "grass",
	      "ice"
	    ],
	    "isNotVeryEffectiveAgainst": [
	      "Water"
	    ]
	  }
	]


/***/ }
])
//# sourceMappingURL=0.6e98e155a2da10dc7bef.hot-update.js.map