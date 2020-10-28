module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/laptops/[id].js");
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

/***/ "./pages/api/laptops/[id].js":
/*!***********************************!*\
  !*** ./pages/api/laptops/[id].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _middleware_dbMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../middleware/dbMiddleware */ "./middleware/dbMiddleware.js");
/* harmony import */ var _Model_Labtop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Model/Labtop */ "./Model/Labtop.js");
/* harmony import */ var _Model_Labtop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Model_Labtop__WEBPACK_IMPORTED_MODULE_1__);



const handleId = async (req, res) => {
  const {
    query: {
      id
    },
    method
  } = req;

  switch (method) {
    case 'GET':
      try {
        const labtop = await _Model_Labtop__WEBPACK_IMPORTED_MODULE_1___default.a.findById(id);
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

    case 'PATCH':
      try {
        const laptop = await _Model_Labtop__WEBPACK_IMPORTED_MODULE_1___default.a.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        });
        console.log(laptop);

        if (!laptop) {
          return res.status(400).json({
            success: false
          });
        }

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

    case 'DELETE':
      try {
        const laptop = await _Model_Labtop__WEBPACK_IMPORTED_MODULE_1___default.a.findByIdAndDelete(id);
        console.log(laptop);

        if (!laptop) {
          return res.status(400).json({
            success: false
          });
        }

        res.status(200).json({
          data: "successfully deleted"
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

/* harmony default export */ __webpack_exports__["default"] = (Object(_middleware_dbMiddleware__WEBPACK_IMPORTED_MODULE_0__["default"])(handleId));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTW9kZWwvTGFidG9wLmpzIiwid2VicGFjazovLy8uL21pZGRsZXdhcmUvZGJNaWRkbGV3YXJlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9sYXB0b3BzLy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsImxhYnRvcFNjaGVtYSIsIlNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiYnJhbmQiLCJlbnVtIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIkxhYnRvcCIsIm1vZGVsIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbm5lY3REYiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlRmluZEFuZE1vZGlmeSIsInVzZUNyZWF0ZUluZGV4IiwidXNlVW5pZmllZFRvcG9sb2d5IiwiaGFuZGxlSWQiLCJxdWVyeSIsImlkIiwibWV0aG9kIiwibGFidG9wIiwiZmluZEJ5SWQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJlcnJvciIsImxhcHRvcCIsImZpbmRCeUlkQW5kVXBkYXRlIiwiYm9keSIsIm5ldyIsInJ1blZhbGlkYXRvcnMiLCJlcnIiLCJtZXNzYWdlIiwiZmluZEJ5SWRBbmREZWxldGUiLCJkYmNvbm5lY3QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFD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WCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsbUJBQU8sRUFBRTtBQUFYLFdBQXJCLENBQVA7QUFDSDs7QUFDRGhCLFdBQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNFLGNBQUksRUFBQztBQUFOLFNBQXJCO0FBQ0QsT0FSRCxDQVFFLE9BQU9PLEdBQVAsRUFBWTtBQUNaeEIsV0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRSxLQUFYO0FBQW1CRSxlQUFLLEVBQUVNLEdBQUcsQ0FBQ0M7QUFBOUIsU0FBckI7QUFDRDs7QUFDSDs7QUFDRjtBQUNFekIsU0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFDQTtBQXpDSjtBQTJDRCxDQWpERDs7QUFrRGVXLHVJQUFTLENBQUNuQixRQUFELENBQXhCLEU7Ozs7Ozs7Ozs7O0FDckRBLHFDIiwiZmlsZSI6InBhZ2VzL2FwaS9sYXB0b3BzL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9sYXB0b3BzL1tpZF0uanNcIik7XG4iLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcblxyXG5jb25zdCBsYWJ0b3BTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICB0aXRsZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnbGFwdG9wIG11c3QgaGF2ZSBhIHRpdGxlJ10sXHJcbiAgfSxcclxuICBicmFuZDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZW51bTogWydocCcsICdkZWxsJywgJ2xlbm92YScsICdtYWMnLCAndG9zaGliYScsICdhY2NlciddLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnIGxhcHRvcCBtdXN0IGhhdmUgYSB0aXRsZSddLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9XHJcbiAgbW9uZ29vc2UubW9kZWxzLkxhYnRvcCB8fCBtb25nb29zZS5tb2RlbCgnTGFidG9wJywgbGFidG9wU2NoZW1hKTtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xyXG5jb25zdCBjb25uZWN0RGIgPSBoYW5kbGVyID0+IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSByZXR1cm4gaGFuZGxlcihyZXEsIHJlcyk7XHJcbiAgLy8gVXNpbmcgbmV3IGRhdGFiYXNlIGNvbm5lY3Rpb25cclxuICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkxPQ0FMX0RBVEFCQVNFLCB7XHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxyXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXHJcbiAgfSlcclxuICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REYjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jICgpID0+IHtcclxuLy8gICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkgcmV0dXJuO1xyXG4vLyAgIC8vIFVzaW5nIG5ldyBkYXRhYmFzZSBjb25uZWN0aW9uXHJcbi8vICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5MT0NBTF9EQVRBQkFTRSwge1xyXG4vLyAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4vLyAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXHJcbi8vICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcclxuLy8gICB9KTtcclxuLy8gfTtcclxuIiwiaW1wb3J0IGRiY29ubmVjdCBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL2RiTWlkZGxld2FyZSc7XHJcbmltcG9ydCBMYWJ0b3AgZnJvbSAnLi4vLi4vLi4vTW9kZWwvTGFidG9wJztcclxuXHJcbmNvbnN0IGhhbmRsZUlkID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgcXVlcnk6IHsgaWQgfSxcclxuICAgICAgICBtZXRob2RcclxuICAgIH0gPSByZXE7XHJcbiBcclxuICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgY2FzZSAnR0VUJzpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBsYWJ0b3AgPSBhd2FpdCBMYWJ0b3AuZmluZEJ5SWQoaWQpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbGFidG9wIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdQQVRDSCc6XHJcbiAgICAgIHRyeSB7ICBcclxuICAgICAgICBjb25zdCBsYXB0b3AgPSBhd2FpdCBMYWJ0b3AuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHJlcS5ib2R5LCB7XHJcbiAgICAgICAgICAgIG5ldzogdHJ1ZSxcclxuICAgICAgICAgICAgcnVuVmFsaWRhdG9yczogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxhcHRvcCk7XHJcbiAgICAgICBcclxuICAgICAgICBpZiAoIWxhcHRvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBsYXB0b3AgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgLCBlcnJvcjogZXJyLm1lc3NhZ2V9KTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdERUxFVEUnOlxyXG4gICAgICAgIHRyeSB7ICBcclxuICAgICAgICAgIGNvbnN0IGxhcHRvcCA9IGF3YWl0IExhYnRvcC5maW5kQnlJZEFuZERlbGV0ZShpZCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhsYXB0b3ApO1xyXG4gICAgICAgICBcclxuICAgICAgICAgIGlmICghbGFwdG9wKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7ZGF0YTpcInN1Y2Nlc3NmdWxseSBkZWxldGVkXCJ9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgLCBlcnJvcjogZXJyLm1lc3NhZ2V9KTtcclxuICAgICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBkYmNvbm5lY3QoaGFuZGxlSWQpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9