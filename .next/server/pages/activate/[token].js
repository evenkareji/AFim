"use strict";
(() => {
var exports = {};
exports.id = 830;
exports.ids = [830];
exports.modules = {

/***/ 2636:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function getServerSideProps(context) {
  // URLクエリからtokenを取得
  const {
    token
  } = context.query; // tokenをコンソールにログ出力
  // 必要に応じてtokenを使ってサーバーサイドで何か処理を行う
  // propsとしてページコンポーネントに渡すデータを返す

  return {
    props: {
      token
    }
  };
}

function Activate({
  token
}) {
  const tokenValue = js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get('token');
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(); // 存在する場合のみJSON.parseを使用する

  const loginToken = tokenValue ? JSON.parse(tokenValue) : null;

  const activateAccount = async () => {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`/api/users/activate`, {
        token
      }, {
        headers: {
          Authorization: `Bearer ${loginToken}`
        }
      });
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  }; // tokenをページコンポーネントで使うか、何か表示に使うことができます


  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
      onClick: activateAccount,
      children: "\u308F\u304B\u3063\u305F"
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Activate);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2636));
module.exports = __webpack_exports__;

})();