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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"toggleFollow\": () => (/* binding */ toggleFollow),\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialStateUser =  false ? 0 : null;\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'user',\n  initialState: {\n    user: initialStateUser\n  },\n  reducers: {\n    login: (state, action) => {\n      state.user = action.payload;\n    },\n    logout: state => {\n      state.user = null;\n    },\n    toggleFollow: (state, action) => {\n      state.user = action.payload;\n    }\n  }\n});\nconst {\n  login,\n  logout,\n  toggleFollow\n} = userSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvdXNlclNsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE1BQU1DLGdCQUFnQixHQUNwQixTQUNJQyxDQURKLEdBRUksSUFITjtBQUlPLE1BQU1JLFNBQVMsR0FBR04sNkRBQVcsQ0FBQztFQUNuQ08sSUFBSSxFQUFFLE1BRDZCO0VBRW5DQyxZQUFZLEVBQUU7SUFDWkMsSUFBSSxFQUFFUjtFQURNLENBRnFCO0VBS25DUyxRQUFRLEVBQUU7SUFDUkMsS0FBSyxFQUFFLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtNQUN4QkQsS0FBSyxDQUFDSCxJQUFOLEdBQWFJLE1BQU0sQ0FBQ0MsT0FBcEI7SUFDRCxDQUhPO0lBSVJDLE1BQU0sRUFBR0gsS0FBRCxJQUFXO01BQ2pCQSxLQUFLLENBQUNILElBQU4sR0FBYSxJQUFiO0lBQ0QsQ0FOTztJQU9STyxZQUFZLEVBQUUsQ0FBQ0osS0FBRCxFQUFRQyxNQUFSLEtBQW1CO01BQy9CRCxLQUFLLENBQUNILElBQU4sR0FBYUksTUFBTSxDQUFDQyxPQUFwQjtJQUNEO0VBVE87QUFMeUIsQ0FBRCxDQUE3QjtBQWlCQSxNQUFNO0VBQUVILEtBQUY7RUFBU0ksTUFBVDtFQUFpQkM7QUFBakIsSUFBa0NWLFNBQVMsQ0FBQ1csT0FBbEQ7QUFDUCxpRUFBZVgsU0FBUyxDQUFDWSxPQUF6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2FmaW0vLi9zcmMvZmVhdHVyZXMvdXNlclNsaWNlLmpzPzYyODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmNvbnN0IGluaXRpYWxTdGF0ZVVzZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgIDogbnVsbDtcbmV4cG9ydCBjb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICd1c2VyJyxcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgdXNlcjogaW5pdGlhbFN0YXRlVXNlcixcbiAgfSxcbiAgcmVkdWNlcnM6IHtcbiAgICBsb2dpbjogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICAgIGxvZ291dDogKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS51c2VyID0gbnVsbDtcbiAgICB9LFxuICAgIHRvZ2dsZUZvbGxvdzogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICB9LFxufSk7XG5leHBvcnQgY29uc3QgeyBsb2dpbiwgbG9nb3V0LCB0b2dnbGVGb2xsb3cgfSA9IHVzZXJTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGVVc2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwicmVkdWNlcnMiLCJsb2dpbiIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImxvZ291dCIsInRvZ2dsZUZvbGxvdyIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/userSlice.js\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ \"./src/redux/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/it222282/Desktop/works/class-spread-ts/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n // import { useSelector } from 'react-redux';\n// import { useEffect } from 'react';\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  /*#__PURE__*/\n  (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"link\", {\n      rel: \"icon\",\n      href: \"%PUBLIC_URL%/favicon.ico\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width, initial-scale=1\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"meta\", {\n      name: \"theme-color\",\n      content: \"#000000\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"link\", {\n      rel: \"stylesheet\",\n      href: \"https://unpkg.com/modern-css-reset/dist/reset.min.css\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"link\", {\n      rel: \"preconnect\",\n      href: \"https://fonts.googleapis.com\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"link\", {\n      rel: \"preconnect\",\n      href: \"https://fonts.gstatic.com\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"link\", {\n      href: \"https://fonts.googleapis.com/css2?family=Kameron:wght@400;700&family=Noto+Sans+JP:wght@500&display=swap\",\n      rel: \"stylesheet\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"link\", {\n      href: \"https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round|Material+Icons+Sharp|Material+Icons+Two+Tone\",\n      rel: \"stylesheet\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 3\n  }, this); // const user = useSelector((state: any) => state.user.user);\n  // useEffect(() => {\n  //   if (typeof window !== 'undefined') {\n  //     localStorage.setItem('user', JSON.stringify(user));\n  //   }\n  // }, [user]);\n\n\n  const getLayout = Component.getLayout ?? (page => page);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n    store: _redux_store__WEBPACK_IMPORTED_MODULE_2__.store,\n    children: getLayout( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 40\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtDQU1BO0FBQ0E7Ozs7QUFRQSxTQUFTSSxLQUFULENBQWU7RUFBRUMsU0FBRjtFQUFhQztBQUFiLENBQWYsRUFBNkQ7RUFDM0Q7RUFBQSw4REFBQyxrREFBRDtJQUFBLHdCQUNFO01BQU0sR0FBRyxFQUFDLE1BQVY7TUFBaUIsSUFBSSxFQUFDO0lBQXRCO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQUVFO01BQU0sSUFBSSxFQUFDLFVBQVg7TUFBc0IsT0FBTyxFQUFDO0lBQTlCO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFGRixlQUdFO01BQU0sSUFBSSxFQUFDLGFBQVg7TUFBeUIsT0FBTyxFQUFDO0lBQWpDO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFIRixlQUtFO01BQ0UsR0FBRyxFQUFDLFlBRE47TUFFRSxJQUFJLEVBQUM7SUFGUDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBTEYsZUFTRTtNQUFNLEdBQUcsRUFBQyxZQUFWO01BQXVCLElBQUksRUFBQztJQUE1QjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBVEYsZUFVRTtNQUFNLEdBQUcsRUFBQyxZQUFWO01BQXVCLElBQUksRUFBQztJQUE1QjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBVkYsZUFXRTtNQUNFLElBQUksRUFBQyx5R0FEUDtNQUVFLEdBQUcsRUFBQztJQUZOO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFYRixlQWVFO01BQ0UsSUFBSSxFQUFDLGtKQURQO01BRUUsR0FBRyxFQUFDO0lBRk47TUFBQTtNQUFBO01BQUE7SUFBQSxRQWZGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUQyRCxDQXFCM0Q7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7RUFDQSxNQUFNQyxTQUFTLEdBQUdGLFNBQVMsQ0FBQ0UsU0FBVixLQUF5QkMsSUFBRCxJQUFVQSxJQUFsQyxDQUFsQjs7RUFFQSxvQkFDRSw4REFBQyxpREFBRDtJQUFVLEtBQUssRUFBRVAsK0NBQWpCO0lBQUEsVUFBeUJNLFNBQVMsZUFBQyw4REFBQyxTQUFELG9CQUFlRCxTQUFmO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFBRDtFQUFsQztJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFHRDs7QUFDRCxpRUFBZUYsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2FmaW0vLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0L3R5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbi8vIGltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuLy8gaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IHR5cGUgTmV4dFBhZ2VXaXRoTGF5b3V0PFAgPSB7fT4gPSBOZXh0UGFnZTxQPiAmIHtcbiAgZ2V0TGF5b3V0PzogKHBhZ2U6IFJlYWN0RWxlbWVudCkgPT4gUmVhY3ROb2RlO1xufTtcblxudHlwZSBBcHBQcm9wc1dpdGhMYXlvdXQgPSBBcHBQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0UGFnZVdpdGhMYXlvdXQ7XG59O1xuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wc1dpdGhMYXlvdXQpIHtcbiAgPEhlYWQ+XG4gICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIlUFVCTElDX1VSTCUvZmF2aWNvbi5pY29cIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDAwMDBcIiAvPlxuXG4gICAgPGxpbmtcbiAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL21vZGVybi1jc3MtcmVzZXQvZGlzdC9yZXNldC5taW4uY3NzXCJcbiAgICAvPlxuICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XG4gICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cbiAgICA8bGlua1xuICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FtZXJvbjp3Z2h0QDQwMDs3MDAmZmFtaWx5PU5vdG8rU2FucytKUDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgLz5cbiAgICA8bGlua1xuICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NYXRlcmlhbCtJY29uc3xNYXRlcmlhbCtJY29ucytPdXRsaW5lZHxNYXRlcmlhbCtJY29ucytSb3VuZHxNYXRlcmlhbCtJY29ucytTaGFycHxNYXRlcmlhbCtJY29ucytUd28rVG9uZVwiXG4gICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAvPlxuICA8L0hlYWQ+O1xuICAvLyBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnVzZXIudXNlcik7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgLy8gICB9XG4gIC8vIH0sIFt1c2VyXSk7XG4gIGNvbnN0IGdldExheW91dCA9IENvbXBvbmVudC5nZXRMYXlvdXQgPz8gKChwYWdlKSA9PiBwYWdlKTtcblxuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PntnZXRMYXlvdXQoPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPil9PC9Qcm92aWRlcj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3RvcmUiLCJQcm92aWRlciIsIkhlYWQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldExheW91dCIsInBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/userSlice */ \"./src/features/userSlice.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: {\n    user: _features_userSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNRSxLQUFLLEdBQUdGLGdFQUFjLENBQUM7RUFDbENHLE9BQU8sRUFBRTtJQUNQQyxJQUFJLEVBQUVILDJEQUFTQTtFQURSO0FBRHlCLENBQUQsQ0FBNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZmltLy4vc3JjL3JlZHV4L3N0b3JlLmpzP2RkNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB1c2VyU2xpY2UgZnJvbSAnLi4vZmVhdHVyZXMvdXNlclNsaWNlJztcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7XG4gICAgdXNlcjogdXNlclNsaWNlLFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJ1c2VyU2xpY2UiLCJzdG9yZSIsInJlZHVjZXIiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/store.js\n");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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