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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/features/userSlice.js":
/*!***********************************!*\
  !*** ./src/features/userSlice.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"toggleFollow\": () => (/* binding */ toggleFollow),\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialStateUser =  false ? 0 : null;\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState: {\n        user: initialStateUser\n    },\n    reducers: {\n        login: (state, action)=>{\n            state.user = action.payload;\n        },\n        logout: (state)=>{\n            state.user = null;\n        },\n        toggleFollow: (state, action)=>{\n            state.user = action.payload;\n        }\n    }\n});\nconst { login , logout , toggleFollow  } = userSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvdXNlclNsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0M7QUFDL0MsTUFBTUMsZ0JBQWdCLEdBQ3BCLE1BQTZCLEdBQ3pCQyxDQUF3QyxHQUN4QyxJQUFJO0FBQ0gsTUFBTUksU0FBUyxHQUFHTiw2REFBVyxDQUFDO0lBQ25DTyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxZQUFZLEVBQUU7UUFDWkMsSUFBSSxFQUFFUixnQkFBZ0I7S0FDdkI7SUFDRFMsUUFBUSxFQUFFO1FBQ1JDLEtBQUssRUFBRSxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sR0FBSztZQUN4QkQsS0FBSyxDQUFDSCxJQUFJLEdBQUdJLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1FBQzlCLENBQUM7UUFDREMsTUFBTSxFQUFFLENBQUNILEtBQUssR0FBSztZQUNqQkEsS0FBSyxDQUFDSCxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUM7UUFDRE8sWUFBWSxFQUFFLENBQUNKLEtBQUssRUFBRUMsTUFBTSxHQUFLO1lBQy9CRCxLQUFLLENBQUNILElBQUksR0FBR0ksTUFBTSxDQUFDQyxPQUFPLENBQUM7UUFDOUIsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBQ0ksTUFBTSxFQUFFSCxLQUFLLEdBQUVJLE1BQU0sR0FBRUMsWUFBWSxHQUFFLEdBQUdWLFNBQVMsQ0FBQ1csT0FBTyxDQUFDO0FBQ2pFLGlFQUFlWCxTQUFTLENBQUNZLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FmaW0vLi9zcmMvZmVhdHVyZXMvdXNlclNsaWNlLmpzPzYyODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmNvbnN0IGluaXRpYWxTdGF0ZVVzZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgIDogbnVsbDtcbmV4cG9ydCBjb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICd1c2VyJyxcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgdXNlcjogaW5pdGlhbFN0YXRlVXNlcixcbiAgfSxcbiAgcmVkdWNlcnM6IHtcbiAgICBsb2dpbjogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICAgIGxvZ291dDogKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS51c2VyID0gbnVsbDtcbiAgICB9LFxuICAgIHRvZ2dsZUZvbGxvdzogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICB9LFxufSk7XG5leHBvcnQgY29uc3QgeyBsb2dpbiwgbG9nb3V0LCB0b2dnbGVGb2xsb3cgfSA9IHVzZXJTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGVVc2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwicmVkdWNlcnMiLCJsb2dpbiIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImxvZ291dCIsInRvZ2dsZUZvbGxvdyIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/userSlice.js\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ \"./src/redux/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    // const user = useSelector((state: any) => state.user.user);\n    // useEffect(() => {\n    //   if (typeof window !== 'undefined') {\n    //     localStorage.setItem('user', JSON.stringify(user));\n    //   }\n    // }, [user]);\n    const getLayout = Component.getLayout ?? ((page)=>page);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_3__.store,\n        children: getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/it222282/Desktop/works/class-spread-ts/src/pages/_app.tsx\",\n            lineNumber: 28,\n            columnNumber: 40\n        }, this))\n    }, void 0, false, {\n        fileName: \"/Users/it222282/Desktop/works/class-spread-ts/src/pages/_app.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ0s7QUFFUTtBQUNBO0FBYXZDLFNBQVNHLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBc0IsRUFBRTtJQUMzRCw2REFBNkQ7SUFDN0Qsb0JBQW9CO0lBQ3BCLHlDQUF5QztJQUN6QywwREFBMEQ7SUFDMUQsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNQyxTQUFTLEdBQUdGLFNBQVMsQ0FBQ0UsU0FBUyxJQUFLLEVBQUNDLElBQUksR0FBS0EsSUFBSTtJQUV4RCxxQkFDRSw4REFBQ0wsaURBQVE7UUFBQ0QsS0FBSyxFQUFFQSwrQ0FBSztrQkFBR0ssU0FBUyxlQUFDLDhEQUFDRixTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUksQ0FBQzs7Ozs7WUFBWSxDQUM1RTtBQUNKLENBQUM7QUFDRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWZpbS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5cbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vcmVkdXgvc3RvcmUnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQvdHlwZXMnO1xuLy8gaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgdHlwZSBOZXh0UGFnZVdpdGhMYXlvdXQ8UCA9IHt9PiA9IE5leHRQYWdlPFA+ICYge1xuICBnZXRMYXlvdXQ/OiAocGFnZTogUmVhY3RFbGVtZW50KSA9PiBSZWFjdE5vZGU7XG59O1xuXG50eXBlIEFwcFByb3BzV2l0aExheW91dCA9IEFwcFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRQYWdlV2l0aExheW91dDtcbn07XG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzV2l0aExheW91dCkge1xuICAvLyBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnVzZXIudXNlcik7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgLy8gICB9XG4gIC8vIH0sIFt1c2VyXSk7XG4gIGNvbnN0IGdldExheW91dCA9IENvbXBvbmVudC5nZXRMYXlvdXQgPz8gKChwYWdlKSA9PiBwYWdlKTtcblxuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PntnZXRMYXlvdXQoPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPil9PC9Qcm92aWRlcj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3RvcmUiLCJQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0TGF5b3V0IiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/userSlice */ \"./src/features/userSlice.js\");\n\n\n// import isIconSlice from '../features/isIconSlice';\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        user: _features_userSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRDtBQUNKO0FBQzlDLHFEQUFxRDtBQUM5QyxNQUFNRSxLQUFLLEdBQUdGLGdFQUFjLENBQUM7SUFDbENHLE9BQU8sRUFBRTtRQUNQQyxJQUFJLEVBQUVILDJEQUFTO0tBRWhCO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWZpbS8uL3NyYy9yZWR1eC9zdG9yZS5qcz9kZDQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgdXNlclNsaWNlIGZyb20gJy4uL2ZlYXR1cmVzL3VzZXJTbGljZSc7XG4vLyBpbXBvcnQgaXNJY29uU2xpY2UgZnJvbSAnLi4vZmVhdHVyZXMvaXNJY29uU2xpY2UnO1xuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7XG4gICAgdXNlcjogdXNlclNsaWNlLFxuICAgIC8vIGlzSWNvbjogaXNJY29uU2xpY2UsXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInVzZXJTbGljZSIsInN0b3JlIiwicmVkdWNlciIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/store.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();