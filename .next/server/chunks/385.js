"use strict";
exports.id = 385;
exports.ids = [385];
exports.modules = {

/***/ 1697:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ez": () => (/* binding */ fetchInitialUser),
/* harmony export */   "Gm": () => (/* binding */ toggleFollow),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "kS": () => (/* binding */ logout),
/* harmony export */   "x4": () => (/* binding */ login),
/* harmony export */   "z2": () => (/* binding */ register)
/* harmony export */ });
/* unused harmony export userSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, js_cookie__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const initialStateUser = {
  loading: true,
  user: null,
  error: false
};
const fetchInitialUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('user/getUser', async (_, {
  dispatch,
  getState,
  rejectWithValue
}) => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/api/users/getUser');
    return response.data;
  } catch (err) {
    console.log(err);
    return rejectWithValue({
      message: err.response.data.message,
      status: err.response.status
    });
  }
});
// ここを適切なエラー型に変更してください
const register = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('user/register', async ({
  username,
  email,
  password
}, {
  rejectWithValue
}) => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/api/auth/register', {
      username,
      email,
      password
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set('token', JSON.stringify(response.data.token));
    return response.data;
  } catch (err) {
    console.log(err); // rejectWithValueを使ってエラー情報を返す

    return rejectWithValue(err.response.data);
  }
});
const login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('user/login', async ({
  email,
  password
}, {
  rejectWithValue
}) => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/api/auth/login', {
      email,
      password
    });
    console.log(response.data.token);
    js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set('token', JSON.stringify(response.data.token));
    return response.data;
  } catch (err) {
    console.log(err); // rejectWithValueを使ってエラー情報を返す

    return rejectWithValue(err.response.data);
  }
});
const logout = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('user/logout', async (_, {
  dispatch,
  getState
}) => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/api/auth/logout');
    return response.data;
  } catch (err) {
    console.log(err);
  }
});
const toggleFollow = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('user/toggleFollow', async (followingUser, {
  dispatch,
  getState
}) => {
  dispatch(userSlice.actions.toggleFollow(followingUser));
});
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'user',
  initialState: initialStateUser,
  reducers: {
    toggleFollow: (state, action) => {
      state.user = action.payload;
    }
  },
  extraReducers: builder => {
    // userState
    builder.addCase(fetchInitialUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchInitialUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchInitialUser.rejected, state => {
      state.loading = false;
      state.error = true;
    }); // register

    builder.addCase(register.pending, state => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
      console.log(action.payload);
      state.loading = false;
    });
    builder.addCase(register.rejected, state => {
      state.loading = false;
      state.error = true;
    }); // login

    builder.addCase(login.pending, state => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(login.rejected, state => {
      state.loading = false;
      state.error = true;
    }); // logout

    builder.addCase(logout.pending, state => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(logout.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3385:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store),
/* harmony export */   "v": () => (/* binding */ useSelector)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1697);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_userSlice__WEBPACK_IMPORTED_MODULE_1__]);
_features_userSlice__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    user: _features_userSlice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP
  }
}); // storeコンポーネントに含まれるgetState関数の戻り値を抽出
// ReturnTypeで戻り値をRootStateという新たな型を定義する
// これによりuseSelectorががstateの型を理解できるようになる

// 型情報付きのuseSelectorをここで宣言
const useSelector = react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector; // dispatchの戻り値から新しく型を生成
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;