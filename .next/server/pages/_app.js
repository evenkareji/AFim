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

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ \"./src/redux/store.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_store__WEBPACK_IMPORTED_MODULE_3__]);\n_redux_store__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/Users/it222282/Desktop/works/class-spread-ts/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const getLayout = Component.getLayout ?? (page => page);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n    store: _redux_store__WEBPACK_IMPORTED_MODULE_3__.store,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        name: \"theme-color\",\n        content: \"#000000\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://unpkg.com/modern-css-reset/dist/reset.min.css\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.googleapis.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Kameron:wght@400;700&family=Noto+Sans+JP:wght@500&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        href: \"https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round|Material+Icons+Sharp|Material+Icons+Two+Tone\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), getLayout( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 18\n    }, this))]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUdBO0FBQ0E7OztBQVNBLFNBQVNHLEtBQVQsQ0FBZTtFQUFFQyxTQUFGO0VBQWFDO0FBQWIsQ0FBZixFQUE2RDtFQUMzRCxNQUFNQyxTQUFTLEdBQUdGLFNBQVMsQ0FBQ0UsU0FBVixLQUF5QkMsSUFBRCxJQUFVQSxJQUFsQyxDQUFsQjs7RUFFQSxvQkFDRSw4REFBQyxpREFBRDtJQUFVLEtBQUssRUFBRUwsK0NBQWpCO0lBQUEsd0JBQ0UsOERBQUMsa0RBQUQ7TUFBQSx3QkFFRTtRQUFNLElBQUksRUFBQyxVQUFYO1FBQXNCLE9BQU8sRUFBQztNQUE5QjtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBRkYsZUFHRTtRQUFNLElBQUksRUFBQyxhQUFYO1FBQXlCLE9BQU8sRUFBQztNQUFqQztRQUFBO1FBQUE7UUFBQTtNQUFBLFFBSEYsZUFLRTtRQUNFLEdBQUcsRUFBQyxZQUROO1FBRUUsSUFBSSxFQUFDO01BRlA7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUxGLGVBU0U7UUFBTSxHQUFHLEVBQUMsWUFBVjtRQUF1QixJQUFJLEVBQUM7TUFBNUI7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQVRGLGVBVUU7UUFBTSxHQUFHLEVBQUMsWUFBVjtRQUF1QixJQUFJLEVBQUM7TUFBNUI7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQVZGLGVBV0U7UUFDRSxJQUFJLEVBQUMseUdBRFA7UUFFRSxHQUFHLEVBQUM7TUFGTjtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBWEYsZUFlRTtRQUNFLElBQUksRUFBQyxrSkFEUDtRQUVFLEdBQUcsRUFBQztNQUZOO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFmRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixFQXFCR0ksU0FBUyxlQUFDLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUFELENBckJaO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBeUJEOztBQUNELGlFQUFlRixLQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZmltLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dC90eXBlcyc7XG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XG5cbmV4cG9ydCB0eXBlIE5leHRQYWdlV2l0aExheW91dDxQID0ge30+ID0gTmV4dFBhZ2U8UD4gJiB7XG4gIGdldExheW91dD86IChwYWdlOiBSZWFjdEVsZW1lbnQpID0+IFJlYWN0Tm9kZTtcbn07XG5cbnR5cGUgQXBwUHJvcHNXaXRoTGF5b3V0ID0gQXBwUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dFBhZ2VXaXRoTGF5b3V0O1xufTtcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHNXaXRoTGF5b3V0KSB7XG4gIGNvbnN0IGdldExheW91dCA9IENvbXBvbmVudC5nZXRMYXlvdXQgPz8gKChwYWdlKSA9PiBwYWdlKTtcblxuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIHsvKiA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIiVQVUJMSUNfVVJMJS9mYXZpY29uLmljb1wiIC8+ICovfVxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMDAwMFwiIC8+XG5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vbW9kZXJuLWNzcy1yZXNldC9kaXN0L3Jlc2V0Lm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthbWVyb246d2dodEA0MDA7NzAwJmZhbWlseT1Ob3RvK1NhbnMrSlA6d2dodEA1MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1hdGVyaWFsK0ljb25zfE1hdGVyaWFsK0ljb25zK091dGxpbmVkfE1hdGVyaWFsK0ljb25zK1JvdW5kfE1hdGVyaWFsK0ljb25zK1NoYXJwfE1hdGVyaWFsK0ljb25zK1R3bytUb25lXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtnZXRMYXlvdXQoPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPil9XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJQcm92aWRlciIsInN0b3JlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnZXRMYXlvdXQiLCJwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

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

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "./src/features/userSlice.js":
/*!***********************************!*\
  !*** ./src/features/userSlice.js ***!
  \***********************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"toggleFollow\": () => (/* binding */ toggleFollow),\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst initialStateUser =  false ? 0 : null;\nconst login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('user/login'\n/**userSliceのlogin reducer */\n, async ({\n  email,\n  password\n}, {\n  dispatch,\n  getState\n}) => {\n  try {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('/api/auth/login', {\n      email,\n      password\n    });\n    localStorage.setItem('user', JSON.stringify(response.data));\n    return response.data;\n  } catch (err) {\n    return alert(err);\n  }\n});\nconst toggleFollow = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('user/toggleFollow', async (userInfo, {\n  dispatch,\n  getState\n}) => {\n  dispatch(userSlice.actions.toggleFollow(userInfo));\n  const state = getState();\n  localStorage.setItem('user', JSON.stringify(state.user.user));\n});\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'user',\n  // stateのこと\n  initialState: {\n    loading: true,\n    user: initialStateUser,\n    error: false\n  },\n  reducers: {\n    logout: state => {\n      console.log('logout action triggered'); // 追加\n\n      state.user = null;\n\n      if (false) {}\n    },\n    toggleFollow: (state, action) => {\n      state.user = action.payload;\n    }\n  },\n  extraReducers: builder => {\n    builder.addCase(login.pending, state => {\n      state.loading = true;\n    });\n    builder.addCase(login.fulfilled, (state, action) => {\n      state.user = action.payload;\n      state.loading = false;\n    });\n    builder.addCase(login.rejected, state => {\n      state.loading = false;\n      state.error = true;\n    });\n  }\n});\nconst {\n  logout\n} = userSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsQ0FBQ0MsT0FBN0I7QUFDUCxpRUFBZUQsU0FBUyxDQUFDcUIsT0FBekIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2FmaW0vLi9zcmMvZmVhdHVyZXMvdXNlclNsaWNlLmpzPzYyODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZVVzZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxuICAgIDogbnVsbDtcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgJ3VzZXIvbG9naW4nIC8qKnVzZXJTbGljZeOBrmxvZ2luIHJlZHVjZXIgKi8sXG4gIGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZCB9LCB7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9hdXRoL2xvZ2luJywge1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBhbGVydChlcnIpO1xuICAgIH1cbiAgfSxcbik7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVGb2xsb3cgPSBjcmVhdGVBc3luY1RodW5rKFxuICAndXNlci90b2dnbGVGb2xsb3cnLFxuICBhc3luYyAodXNlckluZm8sIHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IHtcbiAgICBkaXNwYXRjaCh1c2VyU2xpY2UuYWN0aW9ucy50b2dnbGVGb2xsb3codXNlckluZm8pKTtcblxuICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHN0YXRlLnVzZXIudXNlcikpO1xuICB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3VzZXInLFxuICAvLyBzdGF0ZeOBruOBk+OBqFxuICBpbml0aWFsU3RhdGU6IHtcbiAgICBsb2FkaW5nOiB0cnVlLFxuICAgIHVzZXI6IGluaXRpYWxTdGF0ZVVzZXIsXG4gICAgZXJyb3I6IGZhbHNlLFxuICB9LFxuICByZWR1Y2Vyczoge1xuICAgIGxvZ291dDogKHN0YXRlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnbG9nb3V0IGFjdGlvbiB0cmlnZ2VyZWQnKTsgLy8g6L+95YqgXG4gICAgICBzdGF0ZS51c2VyID0gbnVsbDtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdG9nZ2xlRm9sbG93OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlci5hZGRDYXNlKGxvZ2luLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUubG9hZGluZyA9IHRydWU7XG4gICAgfSk7XG4gICAgYnVpbGRlci5hZGRDYXNlKGxvZ2luLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2UobG9naW4ucmVqZWN0ZWQsIChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuZXJyb3IgPSB0cnVlO1xuICAgIH0pO1xuICB9LFxufSk7XG5leHBvcnQgY29uc3QgeyBsb2dvdXQgfSA9IHVzZXJTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwiYXhpb3MiLCJpbml0aWFsU3RhdGVVc2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJyZXNwb25zZSIsInBvc3QiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZGF0YSIsImVyciIsImFsZXJ0IiwidG9nZ2xlRm9sbG93IiwidXNlckluZm8iLCJ1c2VyU2xpY2UiLCJhY3Rpb25zIiwic3RhdGUiLCJ1c2VyIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJlcnJvciIsInJlZHVjZXJzIiwibG9nb3V0IiwiY29uc29sZSIsImxvZyIsInJlbW92ZUl0ZW0iLCJhY3Rpb24iLCJwYXlsb2FkIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/userSlice.js\n");

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/userSlice */ \"./src/features/userSlice.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_userSlice__WEBPACK_IMPORTED_MODULE_1__]);\n_features_userSlice__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: {\n    user: _features_userSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLE1BQU1FLEtBQUssR0FBR0YsZ0VBQWMsQ0FBQztFQUNsQ0csT0FBTyxFQUFFO0lBQ1BDLElBQUksRUFBRUgsMkRBQVNBO0VBRFI7QUFEeUIsQ0FBRCxDQUE1QixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWZpbS8uL3NyYy9yZWR1eC9zdG9yZS5qcz9kZDQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgdXNlclNsaWNlIGZyb20gJy4uL2ZlYXR1cmVzL3VzZXJTbGljZSc7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIHVzZXI6IHVzZXJTbGljZSxcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwidXNlclNsaWNlIiwic3RvcmUiLCJyZWR1Y2VyIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/store.js\n");

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