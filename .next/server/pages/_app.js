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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"toggleFollow\": () => (/* binding */ toggleFollow),\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst initialStateUser =  false ? 0 : null;\nconst login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('user/login'\n/**userSliceのlogin reducer */\n, async ({\n  email,\n  password\n}, {\n  dispatch,\n  getState\n}) => {\n  try {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('/api/auth/login', {\n      email,\n      password\n    });\n    localStorage.setItem('user', JSON.stringify(response.data));\n    return response.data;\n  } catch (err) {\n    return alert(err);\n  }\n});\nconst toggleFollow = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('user/toggleFollow', async (userInfo, {\n  dispatch,\n  getState\n}) => {\n  dispatch(userSlice.actions.toggleFollow(userInfo));\n  const state = getState();\n  localStorage.setItem('user', JSON.stringify(state.user.user));\n});\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'user',\n  // stateのこと\n  initialState: {\n    loading: true,\n    user: initialStateUser,\n    error: false\n  },\n  reducers: {\n    logout: state => {\n      state.user = null;\n\n      if (false) {}\n    },\n    toggleFollow: (state, action) => {\n      state.user = action.payload;\n    }\n  },\n  extraReducers: builder => {\n    builder.addCase(login.pending, state => {\n      state.loading = true;\n    });\n    builder.addCase(login.fulfilled, (state, action) => {\n      state.user = action.payload;\n      state.loading = false;\n    });\n    builder.addCase(login.rejected, state => {\n      state.loading = false;\n      state.error = true;\n    });\n  }\n});\nconst {\n  logout\n} = userSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vYWZpbS8uL3NyYy9mZWF0dXJlcy91c2VyU2xpY2UuanM/NjI4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgaW5pdGlhbFN0YXRlVXNlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXG4gICAgOiBudWxsO1xuXG5leHBvcnQgY29uc3QgbG9naW4gPSBjcmVhdGVBc3luY1RodW5rKFxuICAndXNlci9sb2dpbicgLyoqdXNlclNsaWNl44GubG9naW4gcmVkdWNlciAqLyxcbiAgYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkIH0sIHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2F1dGgvbG9naW4nLCB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIGFsZXJ0KGVycik7XG4gICAgfVxuICB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUZvbGxvdyA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gICd1c2VyL3RvZ2dsZUZvbGxvdycsXG4gIGFzeW5jICh1c2VySW5mbywgeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHVzZXJTbGljZS5hY3Rpb25zLnRvZ2dsZUZvbGxvdyh1c2VySW5mbykpO1xuXG4gICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoc3RhdGUudXNlci51c2VyKSk7XG4gIH0sXG4pO1xuXG5leHBvcnQgY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAndXNlcicsXG4gIC8vIHN0YXRl44Gu44GT44GoXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgdXNlcjogaW5pdGlhbFN0YXRlVXNlcixcbiAgICBlcnJvcjogZmFsc2UsXG4gIH0sXG4gIHJlZHVjZXJzOiB7XG4gICAgbG9nb3V0OiAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLnVzZXIgPSBudWxsO1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgbnVsbCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB0b2dnbGVGb2xsb3c6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgfSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyLmFkZENhc2UobG9naW4ucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBidWlsZGVyLmFkZENhc2UobG9naW4uZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShsb2dpbi5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IHRydWU7XG4gICAgfSk7XG4gIH0sXG59KTtcbmV4cG9ydCBjb25zdCB7IGxvZ291dCB9ID0gdXNlclNsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCB1c2VyU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJheGlvcyIsImluaXRpYWxTdGF0ZVVzZXIiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsInJlc3BvbnNlIiwicG9zdCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkYXRhIiwiZXJyIiwiYWxlcnQiLCJ0b2dnbGVGb2xsb3ciLCJ1c2VySW5mbyIsInVzZXJTbGljZSIsImFjdGlvbnMiLCJzdGF0ZSIsInVzZXIiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwibG9hZGluZyIsImVycm9yIiwicmVkdWNlcnMiLCJsb2dvdXQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/userSlice.js\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ \"./src/redux/store.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_store__WEBPACK_IMPORTED_MODULE_3__]);\n_redux_store__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/Users/it222282/Desktop/works/class-spread-ts/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const getLayout = Component.getLayout ?? (page => page);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n    store: _redux_store__WEBPACK_IMPORTED_MODULE_3__.store,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        name: \"theme-color\",\n        content: \"#000000\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://unpkg.com/modern-css-reset/dist/reset.min.css\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.googleapis.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Kameron:wght@400;700&family=Noto+Sans+JP:wght@500&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        href: \"https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round|Material+Icons+Sharp|Material+Icons+Two+Tone\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), getLayout( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 18\n    }, this))]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUdBO0FBQ0E7OztBQVNBLFNBQVNHLEtBQVQsQ0FBZTtFQUFFQyxTQUFGO0VBQWFDO0FBQWIsQ0FBZixFQUE2RDtFQUMzRCxNQUFNQyxTQUFTLEdBQUdGLFNBQVMsQ0FBQ0UsU0FBVixLQUF5QkMsSUFBRCxJQUFVQSxJQUFsQyxDQUFsQjs7RUFFQSxvQkFDRSw4REFBQyxpREFBRDtJQUFVLEtBQUssRUFBRUwsK0NBQWpCO0lBQUEsd0JBQ0UsOERBQUMsa0RBQUQ7TUFBQSx3QkFFRTtRQUFNLElBQUksRUFBQyxVQUFYO1FBQXNCLE9BQU8sRUFBQztNQUE5QjtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBRkYsZUFHRTtRQUFNLElBQUksRUFBQyxhQUFYO1FBQXlCLE9BQU8sRUFBQztNQUFqQztRQUFBO1FBQUE7UUFBQTtNQUFBLFFBSEYsZUFLRTtRQUNFLEdBQUcsRUFBQyxZQUROO1FBRUUsSUFBSSxFQUFDO01BRlA7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUxGLGVBU0U7UUFBTSxHQUFHLEVBQUMsWUFBVjtRQUF1QixJQUFJLEVBQUM7TUFBNUI7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQVRGLGVBVUU7UUFBTSxHQUFHLEVBQUMsWUFBVjtRQUF1QixJQUFJLEVBQUM7TUFBNUI7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQVZGLGVBV0U7UUFDRSxJQUFJLEVBQUMseUdBRFA7UUFFRSxHQUFHLEVBQUM7TUFGTjtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBWEYsZUFlRTtRQUNFLElBQUksRUFBQyxrSkFEUDtRQUVFLEdBQUcsRUFBQztNQUZOO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFmRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixFQXFCR0ksU0FBUyxlQUFDLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUFELENBckJaO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBeUJEOztBQUNELGlFQUFlRixLQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZmltLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dC90eXBlcyc7XG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XG5cbmV4cG9ydCB0eXBlIE5leHRQYWdlV2l0aExheW91dDxQID0ge30+ID0gTmV4dFBhZ2U8UD4gJiB7XG4gIGdldExheW91dD86IChwYWdlOiBSZWFjdEVsZW1lbnQpID0+IFJlYWN0Tm9kZTtcbn07XG5cbnR5cGUgQXBwUHJvcHNXaXRoTGF5b3V0ID0gQXBwUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dFBhZ2VXaXRoTGF5b3V0O1xufTtcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHNXaXRoTGF5b3V0KSB7XG4gIGNvbnN0IGdldExheW91dCA9IENvbXBvbmVudC5nZXRMYXlvdXQgPz8gKChwYWdlKSA9PiBwYWdlKTtcblxuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIHsvKiA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIiVQVUJMSUNfVVJMJS9mYXZpY29uLmljb1wiIC8+ICovfVxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMDAwMFwiIC8+XG5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vbW9kZXJuLWNzcy1yZXNldC9kaXN0L3Jlc2V0Lm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthbWVyb246d2dodEA0MDA7NzAwJmZhbWlseT1Ob3RvK1NhbnMrSlA6d2dodEA1MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1hdGVyaWFsK0ljb25zfE1hdGVyaWFsK0ljb25zK091dGxpbmVkfE1hdGVyaWFsK0ljb25zK1JvdW5kfE1hdGVyaWFsK0ljb25zK1NoYXJwfE1hdGVyaWFsK0ljb25zK1R3bytUb25lXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtnZXRMYXlvdXQoPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPil9XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJQcm92aWRlciIsInN0b3JlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnZXRMYXlvdXQiLCJwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/userSlice */ \"./src/features/userSlice.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_userSlice__WEBPACK_IMPORTED_MODULE_1__]);\n_features_userSlice__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: {\n    user: _features_userSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNRSxLQUFLLEdBQUdGLGdFQUFjLENBQUM7RUFDbENHLE9BQU8sRUFBRTtJQUNQQyxJQUFJLEVBQUVILDJEQUFTQTtFQURSO0FBRHlCLENBQUQsQ0FBNUIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FmaW0vLi9zcmMvcmVkdXgvc3RvcmUuanM/ZGQ0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHVzZXJTbGljZSBmcm9tICcuLi9mZWF0dXJlcy91c2VyU2xpY2UnO1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHtcbiAgICB1c2VyOiB1c2VyU2xpY2UsXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInVzZXJTbGljZSIsInN0b3JlIiwicmVkdWNlciIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/store.js\n");

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