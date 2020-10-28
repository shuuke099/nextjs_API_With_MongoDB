module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/laptops/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Model/Labtop.js":
/*!*************************!*\
  !*** ./Model/Labtop.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const labtopSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'laptop must have a title']
  },
  brand: {
    type: String,
    enum: ['hp', 'dell', 'lenova', 'mac', 'toshiba', 'accer'],
    required: [true, ' laptop must have a title']
  }
});
module.exports = module.exports = mongoose.models.Labtop || mongoose.model('Labtop', labtopSchema);

/***/ }),

/***/ "./middleware/dbMiddleware.js":
/*!************************************!*\
  !*** ./middleware/dbMiddleware.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

console.log(process.env.MONGODB_URI);

const connectDb = handler => async (req, res) => {
  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0].readyState) return handler(req, res); // Using new database connection

  await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb://localhost:27017/ecommerce", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
  return handler(req, res);
};

/* harmony default export */ __webpack_exports__["default"] = (connectDb); // import mongoose from 'mongoose';
// export default async () => {
//   if (mongoose.connections[0].readyState) return;
//   // Using new database connection
//   await mongoose.connect(process.env.LOCAL_DATABASE, {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//   });
// };

/***/ }),

/***/ "./pages/api/laptops/index.js":
/*!************************************!*\
  !*** ./pages/api/laptops/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _middleware_dbMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../middleware/dbMiddleware */ "./middleware/dbMiddleware.js");
/* harmony import */ var _Model_Labtop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Model/Labtop */ "./Model/Labtop.js");
/* harmony import */ var _Model_Labtop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Model_Labtop__WEBPACK_IMPORTED_MODULE_1__);



const handler = async (req, res) => {
  const {
    method
  } = req;

  switch (method) {
    case 'GET':
      try {
        const labtop = await _Model_Labtop__WEBPACK_IMPORTED_MODULE_1___default.a.find({});
        res.status(200).json({
          success: true,
          data: labtop
        });
      } catch (error) {
        res.status(400).json({
          success: false
        });
      }

      break;

    case 'POST':
      try {
        const laptop = await _Model_Labtop__WEBPACK_IMPORTED_MODULE_1___default.a.create(req.body);
        console.log(laptop);
        res.status(201).json({
          success: true,
          data: laptop
        });
      } catch (err) {
        res.status(400).json({
          success: false,
          error: err.message
        });
      }

      break;

    default:
      res.status(400).json({
        success: false
      });
      break;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_middleware_dbMiddleware__WEBPACK_IMPORTED_MODULE_0__["default"])(handler));

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTW9kZWwvTGFidG9wLmpzIiwid2VicGFjazovLy8uL21pZGRsZXdhcmUvZGJNaWRkbGV3YXJlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9sYXB0b3BzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwibGFidG9wU2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJicmFuZCIsImVudW0iLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiTGFidG9wIiwibW9kZWwiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29ubmVjdERiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJtZXRob2QiLCJsYWJ0b3AiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiLCJsYXB0b3AiLCJjcmVhdGUiLCJib2R5IiwiZXJyIiwibWVzc2FnZSIsImRiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVB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OztBQUNGLFNBQUssTUFBTDtBQUNFLFVBQUk7QUFDRixjQUFNRyxNQUFNLEdBQUcsTUFBTTFCLG9EQUFNLENBQUMyQixNQUFQLENBQWNsQixHQUFHLENBQUNtQixJQUFsQixDQUFyQjtBQUNBMUIsZUFBTyxDQUFDQyxHQUFSLENBQVl1QixNQUFaO0FBRUFoQixXQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFLElBQVg7QUFBaUJDLGNBQUksRUFBRUU7QUFBdkIsU0FBckI7QUFDRCxPQUxELENBS0UsT0FBT0csR0FBUCxFQUFZO0FBQ1puQixXQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFLEtBQVg7QUFBbUJFLGVBQUssRUFBRUksR0FBRyxDQUFDQztBQUE5QixTQUFyQjtBQUNEOztBQUVEOztBQUNGO0FBQ0VwQixTQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNBO0FBdEJKO0FBd0JELENBM0JEOztBQTRCZVEsdUlBQVMsQ0FBQ3ZCLE9BQUQsQ0FBeEIsRTs7Ozs7Ozs7Ozs7QUMvQkEscUMiLCJmaWxlIjoicGFnZXMvYXBpL2xhcHRvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9sYXB0b3BzL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xyXG5cclxuY29uc3QgbGFidG9wU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgdGl0bGU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ2xhcHRvcCBtdXN0IGhhdmUgYSB0aXRsZSddLFxyXG4gIH0sXHJcbiAgYnJhbmQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGVudW06IFsnaHAnLCAnZGVsbCcsICdsZW5vdmEnLCAnbWFjJywgJ3Rvc2hpYmEnLCAnYWNjZXInXSxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJyBsYXB0b3AgbXVzdCBoYXZlIGEgdGl0bGUnXSxcclxuICB9LFxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPVxyXG4gIG1vbmdvb3NlLm1vZGVscy5MYWJ0b3AgfHwgbW9uZ29vc2UubW9kZWwoJ0xhYnRvcCcsIGxhYnRvcFNjaGVtYSk7XHJcbiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcclxuY29uc3QgY29ubmVjdERiID0gaGFuZGxlciA9PiBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMpO1xyXG4gIC8vIFVzaW5nIG5ldyBkYXRhYmFzZSBjb25uZWN0aW9uXHJcbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5MT0NBTF9EQVRBQkFTRSwge1xyXG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXHJcbiAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcclxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxyXG4gIH0pXHJcbiAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0RGI7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIGltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyAoKSA9PiB7XHJcbi8vICAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpIHJldHVybjtcclxuLy8gICAvLyBVc2luZyBuZXcgZGF0YWJhc2UgY29ubmVjdGlvblxyXG4vLyAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTE9DQUxfREFUQUJBU0UsIHtcclxuLy8gICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuLy8gICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxyXG4vLyAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcbi8vICAgfSk7XHJcbi8vIH07XHJcbiIsImltcG9ydCBkYmNvbm5lY3QgZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9kYk1pZGRsZXdhcmUnO1xuaW1wb3J0IExhYnRvcCBmcm9tICcuLi8uLi8uLi9Nb2RlbC9MYWJ0b3AnO1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XG4gXG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSAnR0VUJzpcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGxhYnRvcCA9IGF3YWl0IExhYnRvcC5maW5kKHt9KTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBsYWJ0b3AgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUE9TVCc6XG4gICAgICB0cnkgeyAgXG4gICAgICAgIGNvbnN0IGxhcHRvcCA9IGF3YWl0IExhYnRvcC5jcmVhdGUocmVxLmJvZHkpO1xuICAgICAgICBjb25zb2xlLmxvZyhsYXB0b3ApO1xuICAgICAgIFxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGxhcHRvcCB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlICwgZXJyb3I6IGVyci5tZXNzYWdlfSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBkYmNvbm5lY3QoaGFuZGxlcik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9