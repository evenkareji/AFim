"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ getPosts)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getPosts = async () => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${process.env.API_URL}/posts`);
  return response.data.sort((post1, post2) => {
    return new Date(post2.createdAt).valueOf() - new Date(post1.createdAt).valueOf();
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ HeartIcon)
/* harmony export */ });
/* unused harmony export HeartClick */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);

 // import './HeartIcon.css';


const HeartIcon = ({
  isGood
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(HeartClick, {
    isGood: isGood,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
      className: "material-icons heart",
      children: "favorite"
    })
  });
};
const HeartClick = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "HeartIcon__HeartClick",
  componentId: "sc-1b7z41-0"
})(["animation:", ";"], ({
  isGood
}) => isGood ? (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["", " 1.2s forwards cubic-bezier(0.19,1,0.22,1)"], heart) : (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["", " 1.2s forwards cubic-bezier(0.19,1,0.22,1)"], unheart));
const heart = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["0%{transform:scale(0) rotate(0);}50%{transform:scale(1) rotate(0) ease;background:linear-gradient(90deg,#ff0011,#ff000d 30%,hsl(0,95%,56%));background:-webkit-linear-gradient(90deg,#d6f700,#a2ff00 30%,#ffefd1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}55%{transform:scale(1.3) rotate(0deg) translateY(-50%);background:linear-gradient(90deg,#ff37c3,#ff00aa 100%,#ff1b6b);background:-webkit-linear-gradient(90deg,#ff37c3,#ff00aa 100%,#ff1b6b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}80%{transform:scale(1.3) rotate(0deg) translateY(-30%);background:linear-gradient( 90deg,hsl(57,100%,81%),hsl(57,97%,45%),hsl(57,100%,84%) );background:-webkit-linear-gradient( 90deg,hsl(57,100%,81%),hsl(57,97%,45%),hsl(57,100%,84%) );-webkit-background-clip:text;-webkit-text-fill-color:transparent;}90%{transform:scale(1.3) rotate(45deg) translateY(-10%);background:linear-gradient(90deg,#ff37c3,#ff00aa 100%,#ff1b6b);background:-webkit-linear-gradient(90deg,#ff37c3,#ff00aa 100%,#ff1b6b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}100%{transform:scale(1) rotate(0) translateY(0);color:#ff6702;}"]);
const unheart = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["0%{color:#ecaa25}100%{color:#d2c4c4}"]);

/***/ }),

/***/ 5173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ FollowToggleButton)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/atoms/BaseBtn.tsx

const BaseBtn = external_styled_components_default().div.withConfig({
  displayName: "BaseBtn",
  componentId: "sc-vyvasj-0"
})(["font-size:12px;font-weight:bold;width:100%;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/atoms/FollowButton.tsx





const FollowButton = /*#__PURE__*/(0,external_react_.memo)(props => {
  const {
    children,
    onClickFollow
  } = props;
  console.log('FollowButton');
  return /*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
    style: {
      padding: '0px'
    },
    onClick: onClickFollow,
    children: /*#__PURE__*/jsx_runtime_.jsx(SUnFollowBtn, {
      className: "unfollow-bg-color",
      children: children
    })
  });
});
const SUnFollowBtn = external_styled_components_default()(BaseBtn).withConfig({
  displayName: "FollowButton__SUnFollowBtn",
  componentId: "sc-wzess8-0"
})(["width:100%;font-size:12px;font-weight:bold;padding:6px 15px 5px 17px;border-radius:8px;background:#ff8d06;color:#fff;&:hover{background:#ff6702;}"]);
;// CONCATENATED MODULE: ./src/components/atoms/FollowingButton.tsx





const FollowingButton = /*#__PURE__*/(0,external_react_.memo)(props => {
  console.log('%cChild render　OnFollowBtn', 'color:blue');
  const {
    children,
    onClickUnFollow
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
    style: {
      padding: '0px'
    },
    onClick: onClickUnFollow,
    children: /*#__PURE__*/jsx_runtime_.jsx(SOnFollowBtn, {
      children: children
    })
  });
});
const SOnFollowBtn = external_styled_components_default()(BaseBtn).withConfig({
  displayName: "FollowingButton__SOnFollowBtn",
  componentId: "sc-3077yn-0"
})(["width:100%;font-size:12px;font-weight:bold;padding:6px 15px 5px 17px;border-radius:8px;border:none;color:#0f0f0f;background-color:rgba(0,0,0,0.05);&:hover{background-color:#dbdbdb;}"]);
;// CONCATENATED MODULE: ./src/components/molecules/FollowToggleButton.tsx




const FollowToggleButton = /*#__PURE__*/external_react_default().memo(({
  loginUser,
  postUserId,
  onClickFollow,
  onClickUnFollow
}) => {
  if (!loginUser || loginUser._id === postUserId) return null;
  const isFollowing = loginUser.followings?.includes(postUserId);
  return isFollowing ? /*#__PURE__*/jsx_runtime_.jsx(FollowingButton, {
    onClickUnFollow: onClickUnFollow,
    children: "\u30D5\u30A9\u30ED\u30FC\u4E2D"
  }) : /*#__PURE__*/jsx_runtime_.jsx(FollowButton, {
    onClickFollow: onClickFollow,
    children: "\u30D5\u30A9\u30ED\u30FC"
  });
});

/***/ }),

/***/ 4901:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ PostView)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3385);
/* harmony import */ var _hooks_useFollow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7859);
/* harmony import */ var _hooks_useGetAuthor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4043);
/* harmony import */ var _hooks_useLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4216);
/* harmony import */ var _hooks_useUnFollow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6098);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _atoms_HeartIcon_HeartIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2269);
/* harmony import */ var _molecules_FollowToggleButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5173);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_store__WEBPACK_IMPORTED_MODULE_3__, _hooks_useFollow__WEBPACK_IMPORTED_MODULE_4__, _hooks_useGetAuthor__WEBPACK_IMPORTED_MODULE_5__, _hooks_useLike__WEBPACK_IMPORTED_MODULE_6__, _hooks_useUnFollow__WEBPACK_IMPORTED_MODULE_7__]);
([_redux_store__WEBPACK_IMPORTED_MODULE_3__, _hooks_useFollow__WEBPACK_IMPORTED_MODULE_4__, _hooks_useGetAuthor__WEBPACK_IMPORTED_MODULE_5__, _hooks_useLike__WEBPACK_IMPORTED_MODULE_6__, _hooks_useUnFollow__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const PostView = props => {
  const {
    post
  } = props;
  const {
    followUser
  } = (0,_hooks_useFollow__WEBPACK_IMPORTED_MODULE_4__/* .useFollow */ .O)();
  const {
    unFollowUser
  } = (0,_hooks_useUnFollow__WEBPACK_IMPORTED_MODULE_7__/* .useUnFollow */ .V)();
  const {
    getAuthorByPostId,
    user
  } = (0,_hooks_useGetAuthor__WEBPACK_IMPORTED_MODULE_5__/* .useGetAuthor */ .c)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
  const {
    user: loginUser,
    loading
  } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_3__/* .useSelector */ .v)(state => state.user);
  const {
    toggleLike,
    isGood
  } = (0,_hooks_useLike__WEBPACK_IMPORTED_MODULE_6__/* .useLike */ .U)(post, loginUser);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!loginUser && !loading) {
      router.push('/login');
    }
  }, [loading, loginUser, router]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getAuthorByPostId(post);
  }, [post]);
  const onClickFollow = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => followUser(post, loginUser), [post._id, loginUser?._id, followUser]);
  const onClickUnFollow = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => unFollowUser(post, loginUser), [post._id, loginUser?._id, unFollowUser]);

  if (!loginUser) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(PostBorder, {
    children: [post.img && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(SImg, {
      src: post.img,
      alt: ""
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(SBg, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(SPostContent, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(SPostHeader, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
          href: `profile/${user?.username}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(SUserIconImg, {
            src: user?.profileImg
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(Box, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(SUserName, {
            children: user?.username
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_molecules_FollowToggleButton__WEBPACK_IMPORTED_MODULE_10__/* .FollowToggleButton */ .T, {
            loginUser: loginUser,
            postUserId: post.userId,
            onClickFollow: onClickFollow,
            onClickUnFollow: onClickUnFollow
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(SDescContainer, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(SPostArticle, {
          children: post.desc
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(SAside, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(SHeartBox, {
        onClick: toggleLike,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_atoms_HeartIcon_HeartIcon__WEBPACK_IMPORTED_MODULE_9__/* .HeartIcon */ .h, {
          isGood: isGood
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(HeartCount, {
        children: post.likes.length
      })]
    })]
  });
};
const SHeartBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "PostView__SHeartBox",
  componentId: "sc-mp07b1-0"
})(["cursor:pointer;"]);
const SPostContent = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "PostView__SPostContent",
  componentId: "sc-mp07b1-1"
})(["position:absolute;top:25%;left:38px;width:74%;height:70%;"]);
const SPostHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default().header.withConfig({
  displayName: "PostView__SPostHeader",
  componentId: "sc-mp07b1-2"
})(["display:flex;align-items:start;"]);
const SDescContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "PostView__SDescContainer",
  componentId: "sc-mp07b1-3"
})(["height:50%;display:flex;flex-direction:column;justify-content:center;text-align:left;"]);
const SPostArticle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
  displayName: "PostView__SPostArticle",
  componentId: "sc-mp07b1-4"
})(["font-size:24px;color:#000;font-weight:normal;line-height:1.5em;text-shadow:0px 0px 1px rgba(0,0,0,0.2);"]);
const Box = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "PostView__Box",
  componentId: "sc-mp07b1-5"
})(["margin-left:20px;"]);
const SUserIconImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.withConfig({
  displayName: "PostView__SUserIconImg",
  componentId: "sc-mp07b1-6"
})(["object-fit:cover;border-radius:100%;max-width:none;width:52px;height:52px;background-color:#fff;cursor:pointer;"]);
const SUserName = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h1.withConfig({
  displayName: "PostView__SUserName",
  componentId: "sc-mp07b1-7"
})(["color:#000;font-size:16px;font-weight:bold;"]);
const SAside = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "PostView__SAside",
  componentId: "sc-mp07b1-8"
})(["position:absolute;display:flex;flex-direction:column;top:62%;align-items:center;right:10px;padding:20px;text-align:center;"]);
const HeartCount = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "PostView__HeartCount",
  componentId: "sc-mp07b1-9"
})(["margin-bottom:18px;color:#000;"]);
const PostBorder = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "PostView__PostBorder",
  componentId: "sc-mp07b1-10"
})(["position:relative;width:100%;height:100%;scroll-snap-align:start;scroll-snap-stop:always;"]);
const SBg = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "PostView__SBg",
  componentId: "sc-mp07b1-11"
})(["position:relative;width:100%;height:100vh;object-fit:cover;background-color:#ffffff;"]);
const SImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.withConfig({
  displayName: "PostView__SImg",
  componentId: "sc-mp07b1-12"
})(["height:100vh;object-fit:cover;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7859:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useFollow)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _features_userSlice__WEBPACK_IMPORTED_MODULE_2__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _features_userSlice__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const useFollow = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  const followUser = async (post, loginUser) => {
    if (loginUser) {
      try {
        const {
          userId
        } = post;
        const {
          data
        } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(`/api/users/${userId}/follow`, {
          userId: loginUser._id
        });
        dispatch((0,_features_userSlice__WEBPACK_IMPORTED_MODULE_2__/* .toggleFollow */ .Gm)(data));
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('Error: loginUser is null');
    }
  };

  return {
    followUser
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4043:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ useGetAuthor)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useGetAuthor = () => {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();

  const getAuthorByPostId = async post => {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/api/users/${post.userId}`);
    setUser(response.data);
  };

  return {
    getAuthorByPostId,
    user
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4216:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ useLike)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useLike = (post, loginUser) => {
  const {
    0: isGood,
    1: setIsGood
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(loginUser ? post.likes.includes(loginUser._id) : false);
  const toggleLike = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    if (!loginUser) {
      return;
    }

    try {
      !isGood ? ++post.likes.length : --post.likes.length;
      const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(`/api/posts/${post._id}/like`, {
        userId: loginUser._id
      });
      setIsGood(response.data);
    } catch (err) {
      console.log(err);
    }
  }, [isGood, post, loginUser]);
  return {
    toggleLike,
    isGood
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6098:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useUnFollow)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1697);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _features_userSlice__WEBPACK_IMPORTED_MODULE_2__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _features_userSlice__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// useUnFollow関数に引数入れたら親コンポーネントのstate入れれるんじゃないか
const useUnFollow = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  const unFollowUser = async (post, loginUser) => {
    if (loginUser) {
      try {
        const {
          data: followingUser
        } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(`/api/users/${post.userId}/unfollow`, {
          userId: loginUser._id
        });
        dispatch((0,_features_userSlice__WEBPACK_IMPORTED_MODULE_2__/* .toggleFollow */ .Gm)(followingUser));
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('Error: loginUser is null');
    }
  };

  return {
    unFollowUser
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3639:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_organisms_PostView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4901);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9801);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3385);
/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1697);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_getPosts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5938);
/* harmony import */ var _components_templates_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(422);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3278);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_organisms_PostView__WEBPACK_IMPORTED_MODULE_2__, _redux_store__WEBPACK_IMPORTED_MODULE_5__, _features_userSlice__WEBPACK_IMPORTED_MODULE_6__, _api_getPosts__WEBPACK_IMPORTED_MODULE_8__]);
([_components_organisms_PostView__WEBPACK_IMPORTED_MODULE_2__, _redux_store__WEBPACK_IMPORTED_MODULE_5__, _features_userSlice__WEBPACK_IMPORTED_MODULE_6__, _api_getPosts__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const getServerSideProps = async () => {
  const posts = await (0,_api_getPosts__WEBPACK_IMPORTED_MODULE_8__/* .getPosts */ .J)();
  return {
    props: {
      posts
    }
  };
};

const Home = ({
  posts
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const {
    user,
    loading
  } = (0,_redux_store__WEBPACK_IMPORTED_MODULE_5__/* .useSelector */ .v)(state => state.user);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_features_userSlice__WEBPACK_IMPORTED_MODULE_6__/* .fetchInitialUser */ .Ez)());
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [user]);
  const logoutEvent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    try {
      dispatch((0,_features_userSlice__WEBPACK_IMPORTED_MODULE_6__/* .logout */ .kS)());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch, router]);

  if (loading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
      className: "loader-container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_10___default()), {
        color: "#ed6103",
        loading: true,
        size: 50
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(SPostMain, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(SLogoutButton, {
      onClick: logoutEvent,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_3___default()), {
        style: {
          fontSize: '14px'
        }
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(PostBg, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(PostSlide, {
        children: posts.map(post => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_organisms_PostView__WEBPACK_IMPORTED_MODULE_2__/* .PostView */ .I, {
          post: post
        }, post['_id']))
      })
    })]
  });
};

const SLogoutButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "pages__SLogoutButton",
  componentId: "sc-14p60n7-0"
})(["padding:10px;font-size:12px;border-radius:15px;text-align:center;background:#dfdfdf;color:#626161;position:absolute;top:10%;left:20px;cursor:pointer;z-index:10;"]);
const SPostMain = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "pages__SPostMain",
  componentId: "sc-14p60n7-1"
})(["position:relative;flex:1;@media (min-width:768px){flex:0.9;}@media (min-width:1264px){flex:0.8;}"]);
const PostBg = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "pages__PostBg",
  componentId: "sc-14p60n7-2"
})(["color:white;background-color:#000;height:100vh;display:grid;place-items:center;"]);
const PostSlide = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "pages__PostSlide",
  componentId: "sc-14p60n7-3"
})(["width:100%;height:100%;max-width:100%;border-radius:0;&::-webkit-scrollbar{display:none;}@media (min-width:425px){&{max-width:400px;width:100%;height:95vh;border-radius:20px;}}display:flex;flex:1;align-items:center;flex-direction:column;overflow:scroll;overflow-y:auto;scroll-snap-type:y mandatory;"]);

Home.getLayout = function getLayout(page) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_templates_Layout__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    children: page
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3467:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 9989:
/***/ ((module) => {

module.exports = require("@mui/icons-material/HomeOutlined");

/***/ }),

/***/ 9801:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Logout");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 3278:
/***/ ((module) => {

module.exports = require("react-spinners/ClipLoader");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,385,422], () => (__webpack_exec__(3639)));
module.exports = __webpack_exports__;

})();