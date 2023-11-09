"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/activate/[token]";
exports.ids = ["pages/activate/[token]"];
exports.modules = {

/***/ "./src/pages/activate/[token].tsx":
/*!****************************************!*\
  !*** ./src/pages/activate/[token].tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);\n([js_cookie__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/snap-now/src/pages/activate/[token].tsx\";\n\n\n\n\nasync function getServerSideProps(context) {\n  // URLクエリからtokenを取得\n  const {\n    token\n  } = context.query; // tokenをコンソールにログ出力\n  // 必要に応じてtokenを使ってサーバーサイドで何か処理を行う\n  // propsとしてページコンポーネントに渡すデータを返す\n\n  return {\n    props: {\n      token\n    }\n  };\n}\n\nfunction Activate({\n  token\n}) {\n  const tokenValue = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('token');\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(); // 存在する場合のみJSON.parseを使用する\n\n  const loginToken = tokenValue ? JSON.parse(tokenValue) : null;\n\n  const activateAccount = async () => {\n    try {\n      await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(`/api/users/activate`, {\n        token\n      }, {\n        headers: {\n          Authorization: `Bearer ${loginToken}`\n        }\n      });\n      router.push('/');\n    } catch (error) {\n      console.log(error);\n    }\n  }; // tokenをページコンポーネントで使うか、何か表示に使うことができます\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n      onClick: activateAccount,\n      children: \"\\u308F\\u304B\\u3063\\u305F\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Activate);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWN0aXZhdGUvW3Rva2VuXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNPLGVBQWVHLGtCQUFmLENBQWtDQyxPQUFsQyxFQUEyQztFQUNoRDtFQUNBLE1BQU07SUFBRUM7RUFBRixJQUFZRCxPQUFPLENBQUNFLEtBQTFCLENBRmdELENBR2hEO0VBRUE7RUFFQTs7RUFDQSxPQUFPO0lBQUVDLEtBQUssRUFBRTtNQUFFRjtJQUFGO0VBQVQsQ0FBUDtBQUNEOztBQUVELFNBQVNHLFFBQVQsQ0FBa0I7RUFBRUg7QUFBRixDQUFsQixFQUE2QjtFQUMzQixNQUFNSSxVQUFVLEdBQUdULHFEQUFBLENBQVksT0FBWixDQUFuQjtFQUNBLE1BQU1XLE1BQU0sR0FBR1Qsc0RBQVMsRUFBeEIsQ0FGMkIsQ0FJM0I7O0VBQ0EsTUFBTVUsVUFBVSxHQUFHSCxVQUFVLEdBQUdJLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxVQUFYLENBQUgsR0FBNEIsSUFBekQ7O0VBRUEsTUFBTU0sZUFBZSxHQUFHLFlBQVk7SUFDbEMsSUFBSTtNQUNGLE1BQU1kLGtEQUFBLENBQ0gscUJBREcsRUFFSjtRQUNFSTtNQURGLENBRkksRUFLSjtRQUFFWSxPQUFPLEVBQUU7VUFBRUMsYUFBYSxFQUFHLFVBQVNOLFVBQVc7UUFBdEM7TUFBWCxDQUxJLENBQU47TUFRQUQsTUFBTSxDQUFDUSxJQUFQLENBQVksR0FBWjtJQUNELENBVkQsQ0FVRSxPQUFPQyxLQUFQLEVBQWM7TUFDZEMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7SUFDRDtFQUNGLENBZEQsQ0FQMkIsQ0F1QjNCOzs7RUFDQSxvQkFDRTtJQUFBLHVCQUNFO01BQVEsT0FBTyxFQUFFTCxlQUFqQjtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQUtEOztBQUVELGlFQUFlUCxRQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZmltLy4vc3JjL3BhZ2VzL2FjdGl2YXRlL1t0b2tlbl0udHN4P2E1ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgLy8gVVJM44Kv44Ko44Oq44GL44KJdG9rZW7jgpLlj5blvpdcbiAgY29uc3QgeyB0b2tlbiB9ID0gY29udGV4dC5xdWVyeTtcbiAgLy8gdG9rZW7jgpLjgrPjg7Pjgr3jg7zjg6vjgavjg63jgrDlh7rliptcblxuICAvLyDlv4XopoHjgavlv5zjgZjjgaZ0b2tlbuOCkuS9v+OBo+OBpuOCteODvOODkOODvOOCteOCpOODieOBp+S9leOBi+WHpueQhuOCkuihjOOBhlxuXG4gIC8vIHByb3Bz44Go44GX44Gm44Oa44O844K444Kz44Oz44Od44O844ON44Oz44OI44Gr5rih44GZ44OH44O844K/44KS6L+U44GZXG4gIHJldHVybiB7IHByb3BzOiB7IHRva2VuIH0gfTtcbn1cblxuZnVuY3Rpb24gQWN0aXZhdGUoeyB0b2tlbiB9KSB7XG4gIGNvbnN0IHRva2VuVmFsdWUgPSBDb29raWVzLmdldCgndG9rZW4nKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8g5a2Y5Zyo44GZ44KL5aC05ZCI44Gu44G/SlNPTi5wYXJzZeOCkuS9v+eUqOOBmeOCi1xuICBjb25zdCBsb2dpblRva2VuID0gdG9rZW5WYWx1ZSA/IEpTT04ucGFyc2UodG9rZW5WYWx1ZSkgOiBudWxsO1xuXG4gIGNvbnN0IGFjdGl2YXRlQWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgYC9hcGkvdXNlcnMvYWN0aXZhdGVgLFxuICAgICAgICB7XG4gICAgICAgICAgdG9rZW4sXG4gICAgICAgIH0sXG4gICAgICAgIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9naW5Ub2tlbn1gIH0gfSxcbiAgICAgICk7XG5cbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gdG9rZW7jgpLjg5rjg7zjgrjjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgafkvb/jgYbjgYvjgIHkvZXjgYvooajnpLrjgavkvb/jgYbjgZPjgajjgYzjgafjgY3jgb7jgZlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthY3RpdmF0ZUFjY291bnR9PuOCj+OBi+OBo+OBnzwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBY3RpdmF0ZTtcbiJdLCJuYW1lcyI6WyJDb29raWVzIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwidG9rZW4iLCJxdWVyeSIsInByb3BzIiwiQWN0aXZhdGUiLCJ0b2tlblZhbHVlIiwiZ2V0Iiwicm91dGVyIiwibG9naW5Ub2tlbiIsIkpTT04iLCJwYXJzZSIsImFjdGl2YXRlQWNjb3VudCIsInBvc3QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/activate/[token].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/activate/[token].tsx"));
module.exports = __webpack_exports__;

})();