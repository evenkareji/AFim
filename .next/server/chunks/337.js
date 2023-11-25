"use strict";
exports.id = 337;
exports.ids = [337];
exports.modules = {

/***/ 337:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FB": () => (/* binding */ registerValidationSchema),
/* harmony export */   "KW": () => (/* binding */ changePasswordValidationSchema),
/* harmony export */   "k": () => (/* binding */ loginValidationSchema),
/* harmony export */   "lF": () => (/* binding */ sendVerificationCode),
/* harmony export */   "zk": () => (/* binding */ sendVerificationEmail)
/* harmony export */ });
/* unused harmony export commonValidationSchema */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const commonValidationSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email('正しいメールアドレスを入力してください'),
  password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(6, 'パスワードは6文字以上で入力してください').max(50, 'パスワードは50文字以下で入力してください')
});
const loginValidationSchema = commonValidationSchema.extend({});
const registerValidationSchema = commonValidationSchema.extend({
  username: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, 'ユーザー名は1文字以上で入力してください').max(15, 'ユーザー名は15文字以下で入力してください'),
  passwordConfirmation: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(6, 'パスワードは6文字以上で入力してください').max(50, 'パスワードは50文字以下で入力してください')
});
const sendVerificationEmail = commonValidationSchema.omit({
  password: true
});
const sendVerificationCode = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  code: zod__WEBPACK_IMPORTED_MODULE_0__.z.number().min(10000, 'コードは5桁の数値でなければなりません').max(99999, 'コードは5桁の数値でなければなりません')
});
const changePasswordValidationSchema = commonValidationSchema.omit({
  email: true
}).extend({
  passwordConfirmation: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(6, 'パスワードは6文字以上で入力してください').max(50, 'パスワードは50文字以下で入力してください')
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;